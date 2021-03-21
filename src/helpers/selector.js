// @flow
import type {TState} from 'app/types';
import isEqual from 'lodash.isequal';
import {createSelector, createSelectorCreator, defaultMemoize} from 'reselect';

export const createEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

/**
 * Получить параметр.
 * @param {*} key Ключ.
 * @return {*} Параметр.
 */
export const getParam = (key: string) => (state: TState, params: any) => params[key];

/**
 * Создать селектор параметра.
 * @param {*} key Ключ.
 * @return {*} Селектор параметра.
 */
export const makeSelectParam = (key: string) => createEqualSelector(getParam(key), (param) => param);

/**
 * Создать селектор фильтра.
 * @param {*} selectList селектор списка.
 * @return {*} селектор фильтра.
 */
export const makeSelectFilter = (selectList: any) =>
    createSelector(
        [selectList, getParam('filter'), makeSelectParam('filterData')],
        (list, filter, filterData) => (filter ? list.filter((item) => filter(item, filterData)) : list)
    );

/**
 * Создать селектор сортировки.
 * @param {*} selectList селектор списка.
 * @return {*} Селектор сортировки.
 */
export const makeSelectSort = (selectList: any) =>
    createSelector(
        [selectList, getParam('sort'), makeSelectParam('sortData')],
        (list, sort, sortData) => (sort ? list.sort((a, b) => sort(a, b, sortData)) : list)
    );

/**
 * Создать селектор сортировки.
 * @param {*} selectList селектор списка.
 * @return {*} Селектор сортировки.
 */
export const makeSelectProcess = (selectList: any) =>
    createSelector(
        [selectList, getParam('process'), makeSelectParam('processData')],
        (list, process, processData) => (process ? process(list, processData) : list)
    );

/**
 * Получить список.
 * @param {*} data Данные.
 * @param {*} list Список.
 * @return {*} Список.
 */
export const getList = (data: any, list: any) => list.map((id) => data[id]);

/**
 * Получить секцию.
 * @param {*} section Название.
 * @return {*} Секцию.
 */
export const selectSection = (section: string) => (selectModule: any) => (state: TState) => selectModule(state)[section];

export const selectData = selectSection('data');

export const selectIdList = selectSection('list');

/**
 * Выбрать элемент.
 * @param {*} data Данные.
 * @return {*} Элемент.
 */
export const selectItem = (data: any) => (state: TState, id: string) => data(state)[id];
