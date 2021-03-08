// @flow
import {selectData, selectIdList, selectItem} from 'helpers/selector';
import type {TLocaleState} from 'modules/locale/types';

/**
 * Получить локаль.
 * @param state Стейт.
 * @return {*} Загрузка.
 */
export const selectLocale = (state: TLocaleState) => state.locale;

export const selectLocaleData = selectData(selectLocale);
export const selectLocaleList = selectIdList(selectLocale);
export const selectMessages = selectItem(selectLocaleData);

/**
 * Получить текущий язык.
 * @param {*} state Стейт.
 * @return {string} Текущий язык.
 */
export const selectLocaleCurrent = (state: TLocaleState) => selectLocale(state).current;
