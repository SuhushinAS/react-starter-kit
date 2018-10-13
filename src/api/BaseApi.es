// @flow

import type {TApiOptions, TApiResponse, TResponse} from 'api/types.es';

const ApiOptionsDefault: TApiOptions = {
    data: null,
    headers: {},
    isCors: false,
};

export default class BaseApi {
    constructor(base: string = '') {
        this.base = base;
    }

    base: string;

    sleeper(ms: number) {
        return function(...rest: mixed[]): Promise<mixed> {
            return new Promise((resolve) => setTimeout(() => resolve(...rest), ms));
        };
    }

    /**
     * Метод посылает запрос на
     * @param {string}   url Адрес.
     * @param {string}   method Метод.
     * @param {*}  requestOptions Дополнительные опции запроса.
     * @returns {Promise} Промис, который ресолвится с данными сервера.
     */
    async request(url: string, method: string = 'GET', requestOptions: TApiOptions = ApiOptionsDefault): Promise<TResponse> {
        const {data, headers, isCors, ...rest} = requestOptions;
        const options: RequestOptions = {
            body: isCors ? JSON.stringify(data) : null,
            credentials: 'include',
            headers: {
                ...headers,
                'Content-Type': 'application/json',
                'X-HTTP-Method-Override': method,
            },
            method: isCors ? 'POST' : 'GET',
            ...rest,
        };

        if (isCors) {
            options.mode = 'cors';
        }

        const requestUrl: string = isCors ? this.base + url : url;
        const response: Response = await fetch(requestUrl, options);
        const responseData: TApiResponse = await response.json();

        return {
            data: responseData,
            http: {
                ok: response.ok,
                status: response.status,
                statusText: response.statusText,
            },
        };
    }
}
