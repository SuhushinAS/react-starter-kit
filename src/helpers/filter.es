// @flow

import querystring from 'querystring';

type FilterType = any;

export default class FilterHelper {
    /**
     * Конструктор фильтра.
     * @param {*} list список фильтров.
     */
    constructor(list: string[]) {
        this.list = list;
    }

    list: string[];

    /**
     * Получить данные фильтра.
     * @param {string} search Строка зароса.
     * @return {string|{}} Фильтр.
     */
    getFilter(search: string): { [string]: FilterType } {
        const query = this.queryParse(search);

        return this.list.reduce((prev, key) => {
            let value = query[key];

            if (value) {
                if (value === `${+value}`) {
                    value = +value;
                }

                return {
                    ...prev,
                    [key]: value,
                };
            }

            return prev;
        }, {});
    }

    /**
     * Получить данные фильтра.
     * @param {string} search Строка зароса.
     * @return {string|{}} Фильтр.
     */
    getFilterList(search: string): string[] {
        const filter = this.getFilter(search);

        return Object.keys(filter);
    }

    /**
     * Получить строку адреса.
     * @param {string} search Строка зароса.
     * @param {string} name Имя параметра.
     * @param {*} value Значение параметра.
     * @return {string} Строка адреса.
     */
    getSearch(search: string, name: string, value: string) {
        const query = {
            ...this.queryParse(search),
            [name]: value,
        };
        const queryClean = this.queryClean(query);

        return querystring.stringify(queryClean);
    }

    /**
     * Парсить запрос.
     * @param {string} search Строка зароса.
     * @return {*} Запрос в виде объекта.
     */
    queryParse(search: string) {
        return querystring.parse(search.split('?')[1]);
    }

    /**
     * Очистить запрос от пустых ключей.
     * @param {*} query Запрос.
     * @return {{}} Очищенный запрос.
     */
    queryClean(query: { [string]: string }) {
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
}

/**
 * Получит строку фильтра.
 * @param {*} filter Фильтр.
 * @return {*} Строка фильтра.
 */
export function getFilterStringify(filter: any) {
    return querystring.stringify(filter);
}
