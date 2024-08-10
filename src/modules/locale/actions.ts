import {TDispatch, TGetState} from 'app/types';
import {api} from 'modules/common/helpers/api';
import {currentLocaleKey, defaultLocale} from 'modules/locale/constants';
import {localeActions} from 'modules/locale/reducers';
import {selectLocaleCurrent} from 'modules/locale/selectors';
import {TLocale} from 'modules/locale/types';
import {statusError, statusLoading, statusSuccess} from 'modules/status/actions';
import {Action} from 'redux';

export const actionLocaleGetList = (dispatch: TDispatch) => {
  dispatch(statusLoading(localeActions.getList.type));

  return api
    .requestLocal<string[]>('/api/v1/locale.json')
    .then((data) => {
      dispatch(localeActions.getList(data));
      dispatch(statusSuccess(localeActions.getList.type));
    })
    .catch(() => dispatch(statusError(localeActions.getList.type)));
};

type TLocaleSetCurrent = (currentLocale: string) => (dispatch: TDispatch) => Action<string>;

export const actionLocaleSetCurrent: TLocaleSetCurrent = (currentLocale) => (dispatch) => {
  localStorage.setItem(currentLocaleKey, currentLocale);

  return dispatch(localeActions.setCurrent(currentLocale));
};

type TLocaleInit = (dispatch: TDispatch, getState: TGetState) => Action<string>;

export const actionLocaleInit: TLocaleInit = (dispatch, getState) => {
  const state = getState();
  const currentLocale = selectLocaleCurrent(state) || localStorage.getItem(currentLocaleKey) || defaultLocale;

  return dispatch(actionLocaleSetCurrent(currentLocale));
};

export const actionLocaleGetMessages = (language: string) => (dispatch: TDispatch) => {
  dispatch(statusLoading(localeActions.getMessages.type));

  return api
    .requestLocal<TLocale>(`/api/v1/locale-${language}.json`)
    .then((data) => {
      dispatch(localeActions.getMessages({data, language}));
      dispatch(statusSuccess(localeActions.getMessages.type));
    })
    .catch(() => dispatch(statusError(localeActions.getMessages.type)));
};
