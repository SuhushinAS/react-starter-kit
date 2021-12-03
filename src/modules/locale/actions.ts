import {dispatchData} from 'helpers/action';
import {actionLoadStart, dispatchLoadStop} from 'modules/load/actions';
import {localeApi} from 'modules/locale/api';
import {currentLocaleKey, defaultLocale, localeActions} from 'modules/locale/constants';
import {selectLocaleCurrent} from 'modules/locale/selectors';

/**
 * Получить словарь.
 * @param locale Язык.
 * @return {*} Словарь.
 */
export const actionLocaleGetMessages = (locale) => (dispatch) => {
  dispatch(actionLoadStart(localeActions.getData));
  return localeApi
    .getData(locale)
    .then((data) => dispatchData(dispatch, localeActions.getData)({data, locale}))
    .then(dispatchLoadStop(dispatch, localeActions.getData));
};

/**
 * Получить словарь.
 * @return {*} Словарь.
 */
export const actionLocaleGetList = () => (dispatch) => {
  dispatch(actionLoadStart(localeActions.getList));
  return localeApi.getList().then(dispatchData(dispatch, localeActions.getList)).then(dispatchLoadStop(dispatch, localeActions.getList));
};

/**
 * Установить текущую локаль
 * @param locale Локаль
 * @return {*} Экшен.
 */
export const actionLocaleSetCurrent = (locale) => {
  localStorage.setItem(currentLocaleKey, locale);
  return {
    data: {locale},
    type: localeActions.setCurrent,
  };
};

/**
 * Получить словарь.
 * @return {*} Словарь.
 */
export const actionLocaleInit = () => (dispatch, getState) => {
  const state = getState();
  let locale = selectLocaleCurrent(state) || localStorage.getItem(currentLocaleKey) || defaultLocale;

  return dispatch(actionLocaleSetCurrent(locale));
};
