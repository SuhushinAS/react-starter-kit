// @flow

import ExampleApi from 'modules/example/api/index.es';
import BaronTestApi from 'modules/baron-test/api/index.es';

export type TApi = {
    baronTestApi: BaronTestApi,
    exampleApi: ExampleApi,
};

/**
 * Функция для получения Api.
 * @param {string} host Хост сервера.
 * @return {*} Объекты Api
 */
export default function getApi(host: string): TApi {
    return {
        baronTestApi: new BaronTestApi(host),
        exampleApi: new ExampleApi(host),
    };
}
