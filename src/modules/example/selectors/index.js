import {getList, selectData, selectIdList, selectItem} from 'modules/common/helpers/selector';
import {createSelector} from 'reselect';

/**
 * Выбрать модуль.
 * @param {*} state Стейт.
 * @return {*} модуль.
 */
export const selectExample = (state) => state.example;

export const selectExampleData = selectData(selectExample);

export const selectExampleItem = selectItem(selectExampleData);

export const selectExampleIdList = selectIdList(selectExample);

export const selectExampleList = createSelector([selectExampleData, selectExampleIdList], getList);
