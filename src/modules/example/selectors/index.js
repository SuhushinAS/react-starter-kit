// @flow

import type {TState} from 'app/types.js';
import type {TExampleData, TExampleStore} from 'modules/example/types.js';
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

export const exampleSelectorList = createSelector([exampleSelectorData], (data) => Object.keys(data).map((id) => data[id]));
