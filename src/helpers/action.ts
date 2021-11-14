import type {TDispatch} from 'app/types';

const idProp = 'id';

export type TGetId<T = any> = (id: string) => T;

/**
 * Получить идентификатор.
 * @param {string} prop Свойство.
 * @return {*} Идентификатор.
 */
export const getId = (prop: string) => (item: any) => `${item[prop]}`;

export const getIdDefault = getId(idProp);

/**
 * Получить данные.
 * @param {*} getIdFn Получить идентификатор.
 * @return {*} данные.
 */
export const getData = (getIdFn: TGetId) => (acc: any, item: any) => ({...acc, [getIdFn(item)]: item});

/**
 * Нормализовать список.
 * @param {*} getIdFn Получить идентификатор.
 * @return {*} Нормализованный список.
 */
export const normalizeList =
  (getIdFn: TGetId) =>
  ({data}: any) => {
    const {list} = data;
    return {
      ...data,
      data: list.reduce(getData(getIdFn), {}),
      list: list.map(getIdFn),
    };
  };

/**
 * Нормализовать список.
 * @param {*} data Данные.
 * @return {*} Нормализованный список.
 */
export const normalizeListDefault = normalizeList(getIdDefault);

/**
 * Диспатчить данные.
 * @param {*} dispatch Диспатч
 * @param {string} type Тип.
 * @param {*} add Тип.
 * @return {*} Данные.
 */
export const dispatchData =
  (dispatch: TDispatch, type: string, add: any = {}) =>
  (params: any) => {
    const data = {...params, ...add};
    dispatch({data, type});
    return data;
  };

/**
 * Обработка данных после отправки данных по форме
 * @param dispatch Диспатч
 * @param type Тип экшена
 * @param actions функции обработчики из формы
 * @returns {function(*): void} данные
 */
export const dispatchFormData =
  ({dispatch, type, actions}: {actions: any; dispatch?: TDispatch; type: string}) =>
  (response: any) => {
    if (response.success) {
      if (dispatch) {
        dispatch({data: response, type});
      }
    } else {
      actions.setErrors(response.errorData);
    }
    actions.setSubmitting(false);
    return response;
  };
