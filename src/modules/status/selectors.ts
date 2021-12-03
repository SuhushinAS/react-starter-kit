import {TState} from 'app/types';
import {status} from 'modules/status/reducers';
import {TLoadMap, TStatusStore} from 'modules/status/types';

/**
 * Получить статус.
 * @param state Стейт.
 * @return {*} Статус.
 */
export const selectStatus = (state: TState): TStatusStore => state[status.name];

/**
 Получить загрузку.
 @param state Стейт.
 @return {*} Загрузка.
 */
export const selectLoad = (state: TState): TLoadMap => selectStatus(state).load;

/**
 Получить загрузку Элемента.
 @param id Идентификатор.
 @return {*} Загрузка.
 */
export const selectLoadItem =
  (id: string) =>
  (state: TState): boolean =>
    selectLoad(state)[id];
