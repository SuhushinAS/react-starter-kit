// @flow
import {getList, selectData, selectIdList, selectItem} from 'helpers/selector';
import {moduleName} from 'modules/example/constants';
import type {TExampleState} from 'modules/example/types';
import {createSelector} from 'reselect';

/**
 * Выбрать модуль.
 * @param {*} state Стейт.
 * @return {*} модуль.
 */
export const selectExample = (state: TExampleState) => state[moduleName];

export const selectExampleData = selectData(selectExample);

export const selectExampleItem = selectItem(selectExampleData);

export const selectExampleIdList = selectIdList(selectExample);

export const selectExampleList = createSelector([selectExampleData, selectExampleIdList], getList);
