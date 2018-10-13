// @flow

import ExampleApi from 'modules/example/api/index.es';

export type TApi = {
    exampleApi: ExampleApi,
};

/**
 * Функция для получения Api.
 * @param {string} host Хост сервера.
 * @return {*} Объекты Api
 */
export default function getApi(host: string): TApi {
    return {
        exampleApi: new ExampleApi(host),
    };
}
