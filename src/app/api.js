// @flow

import ExampleApi from 'modules/example/api/index.js';
import UserApi from 'modules/user/api/index.js';

export type TApi = {
    exampleApi: ExampleApi,
    userApi: UserApi,
};

/**
 * Функция для получения Api.
 * @param {string} host Хост сервера.
 * @return {*} Объекты Api
 */
export default function getApi(host: string): TApi {
    return {
        exampleApi: new ExampleApi(host),
        userApi: new UserApi(host),
    };
}
