// @flow

import type {TState} from 'helpers/types.js';
import type {TExample, TExampleData, TExampleStore} from 'modules/example/types.js';
import {createSelector} from 'reselect';

/**
 * Селектор.
 * @param {*} state Состояние.
 * @return {*} Ветка.
 */
export function exampleSelector(state: TState): TExampleStore {
    return state.example;
}

/**
 * Селектор данных.
 * @param {*} state Состояние.
 * @return {*} Данные.
 */
export function exampleSelectorData(state: TState): TExampleData {
    return exampleSelector(state).data;
}

/**
 * Селектор данных.
 * @param {*} state Состояние.
 * @return {*} Данные.
 */
export function exampleSelectorIdList(state: TState): number[] {
    return exampleSelector(state).list;
}

/**
 * Вспомогательная функция для селектора.
 * @param list Список.
 * @param data Данные.
 * @return {*} Выборка состояния.
 */
function exampleList(list, data): TExample[] {
    return list.map((id) => data[id]);
}

export const exampleSelectorList = createSelector([exampleSelectorIdList, exampleSelectorData], exampleList);
