// @flow

import type {TState} from 'helpers/types.es';
import type {TBaronTest, TBaronTestData, TBaronTestStore} from 'modules/baron-test/types.es';
import {createSelector} from 'reselect';

/**
 * Селектор.
 * @param {*} state Состояние.
 * @return {*} Ветка.
 */
export function baronTestSelector(state: TState): TBaronTestStore {
    return state.baronTest;
}

/**
 * Селектор данных.
 * @param {*} state Состояние.
 * @return {*} Данные.
 */
export function baronTestSelectorData(state: TState): TBaronTestData {
    return baronTestSelector(state).data;
}

/**
 * Селектор данных.
 * @param {*} state Состояние.
 * @return {*} Данные.
 */
export function baronTestSelectorIdList(state: TState): number[] {
    return baronTestSelector(state).list;
}

/**
 * Вспомогательная функция для селектора.
 * @param list Список.
 * @param data Данные.
 * @return {*} Выборка состояния.
 */
function baronTestList(list, data): TBaronTest[] {
    return list.map((id) => data[id]);
}

export const baronTestSelectorList = createSelector([baronTestSelectorIdList, baronTestSelectorData], baronTestList);
