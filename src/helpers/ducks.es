// @flow

import type {TApiResponse} from 'api/types.es';
import type {TReducer} from 'helpers/types.es';
import HTTPStatus from 'http-status';

type TStateDefault = any;

type TPayloadDefault = {
    data: TPayloadDataDefault,
};

type TPayloadDataDefault = {
    list: TPayloadDataItemDefault[],
    more: boolean,
};

type TPayloadDataItemDefault = {
    id: number,
};

type sortKey = number | string;

/**
 * Сохранение списка по-умолчанию.
 * @param {*} state Состояние.
 * @param {*} payload Данные.
 * @return {{data, isLoading: boolean, list}} Новое состояние.
 */
export function listGetSuccess(state: TStateDefault, payload: TPayloadDefault): TStateDefault {
    return {
        ...state,
        data: payload.data.list.reduce((prev, item) => ({
            ...prev,
            [item.id]: item,
        }), {}),
        isLoading: false,
        list: payload.data.list.map((item) => item.id),
        more: payload.data.more,
    };
}

type TResponse = Error | {
    data: TApiResponse,
    http: {
        status: number,
    },
};

const errorList = [
    HTTPStatus.FORBIDDEN,
    HTTPStatus.NOT_FOUND,
    HTTPStatus.METHOD_NOT_ALLOWED,
    HTTPStatus.REQUEST_TIMEOUT,
    HTTPStatus.CONFLICT,
    HTTPStatus.INTERNAL_SERVER_ERROR,
    HTTPStatus.BAD_GATEWAY,
];

/**
 * Обработка ошибок по-умолчанию.
 * @param {*} response Ответ сервера.
 * @return {*} Данные для редьюсера.
 */
export function actionHandlerDefault(response: TResponse): mixed {
    if ('AbortError' !== response.name) {
        console.error(response);
    }

    if (response instanceof Error) {
        return {
            errors: [
                {
                    title: response.message,
                },
            ],
        };
    }

    return response;
}

/**
 * Генератор роутера редьюсеров.
 * @param {*} initialState Начальное состояние.
 * @param {*} reducerList Набор редьюсеров.
 * @return {*} Функция, возвращает состояние изменённое редьюсером или старое.
 */
export function defaultReducer<S, A: *>(initialState: S, reducerList: { [key: string]: TReducer<S, A> }): TReducer<S, A> {
    return (state: S = initialState, {type, payload}: A): S => {
        const reducer: (state: S, payload?: {}) => S = reducerList[type];

        if ('function' === typeof reducer) {
            return reducer(state, payload);
        }

        return state;
    };
}

type TSortItemFactor = string;

export type SortItemData = {};

/**
 * Сортировать список.
 * @param {*} data Данные.
 * @param {*} getSortItem Получение пункта.
 * @return {Function} Сортировка.
 */
export function listSort(data: SortItemData, getSortItem: (data: SortItemData, id: sortKey) => TSortItemFactor): (sortKey, sortKey) => number {
    return function(idLeft: sortKey, idRight: sortKey) {
        const left = getSortItem(data, idLeft);
        const right = getSortItem(data, idRight);

        if (left < right) {
            return -1;
        }

        if (left > right) {
            return 1;
        }

        return 0;
    };
}
