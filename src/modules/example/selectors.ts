import {TState} from 'app/types';
import {getList} from 'modules/common/helpers/selectors';
import {example} from 'modules/example/reducers';
import {TExample, TExampleMap, TExampleStore} from 'modules/example/types';
import {createSelector} from 'reselect';

/**
 * Выбрать модуль.
 * @param state Стейт.
 * @return {*} модуль.
 */
export const selectExample = (state: TState): TExampleStore => state[example.name];

/**
 * Выбрать Мапинг.
 * @param state Стейт.
 * @return {*} Мапинг.
 */
export const selectExampleData = (state: TState): TExampleMap => selectExample(state).data;

/**
 * Выбрать Список идентификаторов.
 * @param state Стейт.
 * @return {*} Список идентификаторов.
 */
export const selectExampleIdList = (state: TState): string[] => selectExample(state).list;

/**
 * Выбрать Список.
 * @param state Стейт.
 * @return {*} Список.
 */
export const selectExampleList = createSelector([selectExampleData, selectExampleIdList], getList);

/**
 * Выбрать Элемент.
 * @param id Идентификатор.
 * @return {*} Элемент.
 */
export const selectExampleItem =
  (id: string) =>
  (state: TState): TExample =>
    selectExampleData(state)[id];
