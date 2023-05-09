import {TDispatch, TGetState} from 'app/types';
import {dispatchData} from 'modules/common/helpers/action';
import {api} from 'modules/common/helpers/api';
import {TAction, TActionData} from 'modules/common/types';
import {currentLocaleKey, defaultLocale} from 'modules/locale/constants';
import {locale} from 'modules/locale/reducers';
import {selectLocaleCurrent} from 'modules/locale/selectors';
import {TLocale} from 'modules/locale/types';
import {loadStop} from 'modules/status/actions';
import {status} from 'modules/status/reducers';
import {Action} from 'redux';

type TLocaleList = {list: string[]};

export const actionLocaleGetList: TAction<TLocaleList> = (dispatch) => {
  dispatch(status.actions.loadStart(locale.actions.getList.type));

  return api
    .requestLocal<TLocaleList>('/api/v1/locale.json')
    .then(dispatchData(dispatch, locale.actions.getList))
    .then(loadStop(dispatch, locale.actions.getList.type));
};

type TLocaleSetCurrent = (currentLocale: string) => (dispatch: TDispatch) => Action<string>;

export const actionLocaleSetCurrent: TLocaleSetCurrent = (currentLocale) => (dispatch) => {
  localStorage.setItem(currentLocaleKey, currentLocale);

  return dispatch(locale.actions.setCurrent(currentLocale));
};

type TLocaleInit = (dispatch: TDispatch, getState: TGetState) => Action<string>;

export const actionLocaleInit: TLocaleInit = (dispatch, getState) => {
  const state = getState();
  const currentLocale = selectLocaleCurrent(state) || localStorage.getItem(currentLocaleKey) || defaultLocale;

  return dispatch(actionLocaleSetCurrent(currentLocale));
};

type TMessages = {
  data: TLocale[];
};

export const actionLocaleGetMessages: TActionData<TMessages, string> = (language) => (dispatch) => {
  dispatch(status.actions.loadStart(locale.actions.getMessages.type));

  return api
    .requestLocal<TMessages>(`/api/v1/locale-${language}.json`)
    .then((data) => {
      dispatchData(dispatch, locale.actions.getMessages)({data, language});

      return data;
    })
    .then(loadStop(dispatch, locale.actions.getMessages.type));
};
