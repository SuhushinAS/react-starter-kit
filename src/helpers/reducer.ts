import {getIdDefault} from 'helpers/action';

type GReducers<T> = {
  [key: string]: (state: T, data: any) => T;
};

/**
 * Создать редьюсер.
 * @param {*} initialState Начальное состояние.
 * @param {*} reducers Редьюсеры.
 * @return {*} редьюсер.
 */
export function createReducer<T = any>(initialState, reducers: GReducers<T>) {
  return function (state: T = initialState, {data, type}): T {
    const reducer = reducers[type];

    if ('function' === typeof reducer) {
      return reducer(state, data);
    }

    return state;
  };
}

/**
 * Получить список.
 * @param {*} state Стейт.
 * @param {*} data Данные.
 * @param {*} list Список.
 * @return {*} Стейт.
 */
export const listGet = (state: any, {data, list}: any) => ({
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
export const update = (state: any, {data}: any) => ({
  ...state,
  data: {
    ...state.data,
    [getIdDefault(data)]: data,
  },
});
