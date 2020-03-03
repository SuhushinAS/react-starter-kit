import {loadActions} from 'modules/load/constants';

/**
 * Установить загрузку.
 * @param {*} type Тип.
 * @return {*} Загрузка.
 */
const actionLoad = (type) => (data) => ({data, type});

export const actionLoadStart = actionLoad(loadActions.start);

export const actionLoadStop = actionLoad(loadActions.stop);

/**
 * Диспатчить остановку.
 * @param dispatch Диспатч.
 * @param key Ключ
 * @return {*} Диспатчить остановку.
 */
export const dispatchLoadStop = (dispatch, key) => (data) => {
    dispatch(actionLoadStop(key));
    return data;
};
