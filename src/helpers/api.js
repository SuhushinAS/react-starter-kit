// @flow
/**
 * АПИ.
 */
export class Api {
    /**
     * Конструктор.
     * @param {string} host Хост.
     */
    constructor(host: string = '') {
        this.host = host;
    }

    host: string;

    /**
     * Получть JSON.
     * @param {*} response Ответ.
     * @return {*} JSON.
     */
    getJSON = (response: Response) => response.json();

    /**
     * Получить опции.
     * @param {*} options Опции.
     * @return {*} Опции.
     */
    getOptions(options = {}) {
        const {headers = {}} = options;
        return {
            headers: {'Content-Type': 'application/json', ...headers},
            method: 'GET',
            ...options,
        };
    }

    /**
     * Отправить запрос.
     * @param {string} path Адрес.
     * @param {*} options Опции.
     * @return {*} Запрос.
     */
    request(path: string = '', options) {
        return fetch(`${this.host}${path}`, this.getOptions(options)).then(this.getJSON);
    }

    /**
     * Отправить запрос.
     * @param {string} url Адрес.
     * @return {Promise<Response>} Ответ.
     */
    requestLocal(url = '') {
        return fetch(`/local${url}`, this.getOptions()).then(this.getJSON);
    }
}

export default Api;

export type TApiResponseData = any;

export type TResponse = TGenApiResponse<TApiResponseData>;

export type TGenApiResponse<Data> = {
    body: Data,
    headers: THeaders,
};

export type THeaders = {
    ok: boolean,
    status: number,
    statusText: string,
};
