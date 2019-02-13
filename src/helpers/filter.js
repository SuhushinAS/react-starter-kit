// @flow

import querystring from 'querystring';

type TFilter = any;

/**
 * Получить параметры из запроса.
 * @param {string} search Запрос.
 * @return {*} Параметры из запроса.
 */
export function getParams(search: string) {
    return querystring.parse(search.split('?')[1]);
}

/**
 * Очистить запрос от пустых ключей.
 * @param {*} query Запрос.
 * @return {{}} Очищенный запрос.
 */
export function getQueryClean(query: { [string]: string }) {
    return Object.keys(query).reduce((prev, key) => {
        if (query[key]) {
            return {
                ...prev,
                [key]: query[key],
            };
        }

        return prev;
    }, {});
}

/**
 * Получить строку адреса.
 * @param {string} search Уже существующий поиск.
 * @param {*} data Новые данные.
 * @return {string} Строка адреса.
 */
export function getSearch(search: string, data: any = {}) {
    const query = {
        ...getParams(search),
        ...data,
    };
    const queryClean = getQueryClean(query);

    return querystring.stringify(queryClean);
}
