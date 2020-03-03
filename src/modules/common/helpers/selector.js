import isEqual from 'lodash.isequal';
import {createSelector, createSelectorCreator, defaultMemoize} from 'reselect';

export const createEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

/**
 * Получить параметр.
 * @param {*} key Ключ.
 * @return {*} Параметр.
 */
export const getParam = (key) => (state, params) => params[key];

/**
 * Создать селектор параметра.
 * @param {*} key Ключ.
 * @return {*} Селектор параметра.
 */
export const makeSelectParam = (key) => createEqualSelector(getParam(key), (param) => param);

/**
 * Создать селектор фильтра.
 * @param {*} selectList селектор списка.
 * @return {*} селектор фильтра.
 */
export const makeSelectFilter = (selectList) =>
    createSelector([selectList, getParam('filter'), makeSelectParam('filterData')], (list, filter, filterData) =>
        filter ? list.filter((item) => filter(item, filterData)) : list
    );

/**
 * Создать селектор сортировки.
 * @param {*} selectList селектор списка.
 * @return {*} Селектор сортировки.
 */
export const makeSelectSort = (selectList) =>
    createSelector([selectList, getParam('sort'), makeSelectParam('sortData')], (list, sort, sortData) =>
        sort ? list.sort((a, b) => sort(a, b, sortData)) : list
    );

/**
 * Создать селектор сортировки.
 * @param {*} selectList селектор списка.
 * @return {*} Селектор сортировки.
 */
export const makeSelectProcess = (selectList) =>
    createSelector([selectList, getParam('process'), makeSelectParam('processData')], (list, process, processData) =>
        process ? process(list, processData) : list
    );

/**
 * Получить список.
 * @param {*} data Данные.
 * @param {*} list Список.
 * @return {*} Список.
 */
export const getList = (data, list) => list.map((id) => data[id]);

/**
 * Получить секцию.
 * @param {*} section Название.
 * @return {*} Секцию.
 */
export const selectSection = (section) => (selectModule) => (state) => selectModule(state)[section];

export const selectData = selectSection('data');

export const selectIdList = selectSection('list');

/**
 * Выбрать элемент.
 * @param {*} data Данные.
 * @return {*} Элемент.
 */
export const selectItem = (data) => (state, id) => data(state)[id];
