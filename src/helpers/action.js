// @flow
import type {TDispatch} from 'app/types';

/**
 * Нормализовать список.
 * @param {*} data Данные.
 * @return {*} Нормализованный список.
 */
export const normalizeList = ({data}: any) => {
    const {list} = data;
    return {
        data: list.reduce(getData, {}),
        list: list.map(getId),
    };
};

/**
 * Получить данные.
 * @param {*} acc Аккумулятор.
 * @param {*} item Элемент.
 * @return {*} данные.
 */
export const getData = (acc: any, item: any) => ({...acc, [getId(item)]: item});

/**
 * Получить идентификатор.
 * @param {*} item Элемент.
 * @return {*} Идентификатор.
 */
export const getId = (item: any) => `${item.id}`;

/**
 * Диспатчить данные.
 * @param {*} dispatch Диспатч
 * @param {string} type Тип.
 * @return {function(*): {data: *, type: string}} Диспатчить данные.
 */
export const dispatchData = (dispatch: TDispatch, type: string) => (data: any) => dispatch({data, type});
