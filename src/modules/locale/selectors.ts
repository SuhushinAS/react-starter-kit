import {TState} from 'app/types';
import {selectData, selectIdList, selectItem} from 'helpers/selector';

/**
 * Получить локаль.
 * @param state Стейт.
 * @return {*} Загрузка.
 */
export const selectLocale = (state: TState) => state.locale;

export const selectLocaleData = selectData(selectLocale);
export const selectLocaleList = selectIdList(selectLocale);
export const selectMessages = selectItem(selectLocaleData);

/**
 * Получить текущий язык.
 * @param {*} state Стейт.
 * @return {string} Текущий язык.
 */
export const selectLocaleCurrent = (state: TState) => selectLocale(state).current;
