import {getId} from './action';

/**
 * Создать редьюсер.
 * @param {*} initialState Начальное состояние.
 * @param {*} reducers Редьюсеры.
 * @return {*} редьюсер.
 */
export const createReducer = (initialState, reducers) => (state = initialState, {data, type}) => {
    const reducer = reducers[type];

    if ('function' === typeof reducer) {
        return reducer(state, data);
    }

    return state;
};

/**
 * Получить список.
 * @param {*} state Стейт.
 * @param {*} data Данные.
 * @param {*} list Список.
 * @return {*} Стейт.
 */
export const listGet = (state, {data, list}) => ({
    ...state,
    data,
    list,
});

/**
 * Обновить элемент.
 * @param {*} state Стейт.
 * @param item Элемент.
 * @return {*} Стейт.
 */
export const update = (state, {item}) => ({
    ...state,
    data: {
        ...state.data,
        [getId(item)]: item,
    },
});
