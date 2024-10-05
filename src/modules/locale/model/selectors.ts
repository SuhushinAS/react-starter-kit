import {TState} from 'app/model/types';
import {localeName} from 'modules/locale/model/reducers';
import {TLocale, TLocaleData, TLocaleStore} from 'modules/locale/model/types';

export const selectLocale = (state: TState): TLocaleStore => {
  return state[localeName] as TLocaleStore;
};

export const selectLocaleData = (state: TState): TLocaleData =>
  selectLocale(state).data;

export const selectLocaleList = (state: TState): string[] =>
  selectLocale(state).list;

export const selectMessages =
  (language: string) =>
  (state: TState): TLocale =>
    selectLocaleData(state)[language];

export const selectLocaleCurrent = (state: TState): string =>
  selectLocale(state).current;
