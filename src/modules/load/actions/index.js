// @flow
import type {TDispatch} from 'app/types';
import {loadActions} from 'modules/load/constants';

/**
 * Установить загрузку.
 * @param {*} type Тип.
 * @return {*} Загрузка.
 */
const actionLoad = (type) => (data: any) => ({data, type});

export const actionLoadStart = actionLoad(loadActions.start);

export const actionLoadStop = actionLoad(loadActions.stop);

/**
 * Диспатчить остановку.
 * @param dispatch Диспатч.
 * @param key Ключ
 * @return {*} Диспатчить остановку.
 */
export const dispatchLoadStop = (dispatch: TDispatch, key: string) => (data: any) => {
    dispatch(actionLoadStop(key));
    return data;
};
