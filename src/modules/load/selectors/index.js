// @flow
import type {TState} from 'app/types';
import {selectData, selectItem} from 'helpers/selector';

/**
 * Получить загрузку.
 * @param state Стейт.
 * @return {*} Загрузка.
 */
export const selectLoad = (state: TState) => state.load;

export const selectLoadData = selectData(selectLoad);

export const selectLoadItem = selectItem(selectLoadData);
