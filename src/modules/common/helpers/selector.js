import isEqual from 'lodash.isequal';
import {createSelector, createSelectorCreator, defaultMemoize} from 'reselect';

export const createEqualSelector = createSelectorCreator(defaultMemoize, isEqual);

export const getParam = (key) => (state, params) => params[key];

export const makeSelectParam = (key) => createEqualSelector(getParam(key), (param) => param);

export const makeSelectFilter = (selectList) =>
    createSelector([selectList, getParam('filter'), makeSelectParam('filterData')], (list, filter, filterData) =>
        filter ? list.filter((item) => filter(item, filterData)) : list
    );

export const makeSelectSort = (selectList) =>
    createSelector([selectList, getParam('sort'), makeSelectParam('sortData')], (list, sort, sortData) =>
        sort ? list.sort((a, b) => sort(a, b, sortData)) : list
    );

export const makeSelectProcess = (selectList) =>
    createSelector([selectList, getParam('process'), makeSelectParam('processData')], (list, process, processData) =>
        process ? process(list, processData) : list
    );

export const getList = (data, list) => list.map((id) => data[id]);

export const selectSection = (section) => (selectModule) => (state) => selectModule(state)[section];

export const selectData = selectSection('data');

export const selectIdList = selectSection('list');

export const selectItem = (data) => (state, id) => data(state)[id];
