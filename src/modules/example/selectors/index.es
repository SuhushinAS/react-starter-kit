// @flow

import type {TypeState} from 'helpers/types.es';
import type {ExampleType, ExampleTypeData, ExampleTypeStore} from 'modules/example/types.es';
import {createSelector} from 'reselect';

/**
 * Селектор.
 * @param {*} state Состояние.
 * @return {*} Ветка.
 */
export function exampleSelector(state: TypeState): ExampleTypeStore {
    return state.example;
}

/**
 * Селектор данных.
 * @param {*} state Состояние.
 * @return {*} Данные.
 */
export function exampleSelectorData(state: TypeState): ExampleTypeData {
    return exampleSelector(state).data;
}

/**
 * Вспомогательная функция для селектора.
 * @param {*} example Ветка состояния.
 * @return {*} Выборка состояния.
 */
function exampleList(example): ExampleType[] {
    return example.list.map((id) => example.data[id]);
}

const exampleSelectorList = createSelector([exampleSelector], exampleList);

export {
    exampleSelectorList,
};
