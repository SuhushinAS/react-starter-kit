import {TState} from 'app/types';
import {locale} from 'modules/locale/reducers';
import {TLocale, TLocaleData, TLocaleStore} from 'modules/locale/types';

/**
 * Получить локаль.
 * @param state Стейт.
 * @return {*} Локаль.
 */
export const selectLocale = (state: TState): TLocaleStore => state[locale.name];

/**
 * Получить переводы.
 * @param state Стейт.
 * @return {*} Переводы.
 */
export const selectLocaleData = (state: TState): TLocaleData => selectLocale(state).data;

/**
 * Получить Языки.
 * @param state Стейт.
 * @return {*} Языки.
 */
export const selectLocaleList = (state: TState): string[] => selectLocale(state).list;

/**
 * Получить Сообщения.
 * @param language Язык.
 * @return {*} Сообщения.
 */
export const selectMessages =
  (language: string) =>
  (state: TState): TLocale =>
    selectLocaleData(state)[language];

/**
 * Получить текущий язык.
 * @param {*} state Стейт.
 * @return {string} Текущий язык.
 */
export const selectLocaleCurrent = (state: TState): string => selectLocale(state).current;
