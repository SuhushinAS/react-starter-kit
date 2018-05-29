// @flow

import ExampleApi from 'modules/example/api/index.es';

export type TypeApi = {
    exampleApi: ExampleApi,
};

/**
 * Функция для получения Api.
 * @param {string} host Хост сервера.
 * @return {*} Объекты Api
 */
export default function getApi(host: string): TypeApi {
    return {
        exampleApi: new ExampleApi(host),
    };
}
