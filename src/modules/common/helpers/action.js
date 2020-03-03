/**
 * Нормализовать список.
 * @param {*} data Данные.
 * @return {*} Нормализованный список.
 */
export const normalizeList = ({data}) => {
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
export const getData = (acc, item) => ({...acc, [getId(item)]: item});

/**
 * Получить идентификатор.
 * @param {*} item Элемент.
 * @return {*} Идентификатор.
 */
export const getId = (item) => item.id;

/**
 * Диспатчить данные.
 * @param {*} dispatch Диспатч
 * @param {string} type Тип.
 * @return {*} Диспатчить данные.
 */
export const dispatchData = (dispatch, type) => (data) => dispatch({data, type});
