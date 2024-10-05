import {useAppDispatch, useAppSelector} from 'app/lib/hooks';
import {api} from 'modules/common/lib/api';
import {currentLocaleKey, defaultLocale} from 'modules/locale/model/constants';
import {localeActions} from 'modules/locale/model/reducers';
import {selectLocaleCurrent} from 'modules/locale/model/selectors';
import {TLocale} from 'modules/locale/model/types';
import {useStatusSet} from 'modules/status/model/actions';
import {Status} from 'modules/status/model/types';
import {useCallback} from 'react';

export const useLocaleGetList = () => {
  const dispatch = useAppDispatch();
  const localeGetListStatusSet = useStatusSet(localeActions.getList.type);

  return useCallback(() => {
    localeGetListStatusSet(Status.loading);

    api
      .requestLocal<string[]>('/api/v1/locale.json')
      .then((data) => {
        dispatch(localeActions.getList(data));
        localeGetListStatusSet(Status.success);
      })
      .catch(() => {
        localeGetListStatusSet(Status.error);
      });
  }, [dispatch, localeGetListStatusSet]);
};

export const useLocaleSetCurrent = () => {
  const dispatch = useAppDispatch();

  return useCallback(
    (currentLocale: string) => {
      localStorage.setItem(currentLocaleKey, currentLocale);

      return dispatch(localeActions.setCurrent(currentLocale));
    },
    [dispatch]
  );
};

export const useLocaleCurrent = () => {
  const localeCurrent = useAppSelector(selectLocaleCurrent);

  return (
    localeCurrent ?? localStorage.getItem(currentLocaleKey) ?? defaultLocale
  );
};

export const useLocaleInit = () => {
  const localeSetCurrent = useLocaleSetCurrent();
  const localeCurrent = useLocaleCurrent();

  return useCallback(() => {
    localeSetCurrent(localeCurrent);
  }, [localeCurrent, localeSetCurrent]);
};

export const useLocaleGetMessages = () => {
  const dispatch = useAppDispatch();
  const localeGetMessagesStatusSet = useStatusSet(
    localeActions.getMessages.type
  );

  return useCallback(
    (language: string) => {
      localeGetMessagesStatusSet(Status.loading);

      api
        .requestLocal<TLocale>(`/api/v1/locale-${language}.json`)
        .then((data) => {
          dispatch(localeActions.getMessages({data, language}));
          localeGetMessagesStatusSet(Status.success);
        })
        .catch(() => {
          localeGetMessagesStatusSet(Status.error);
        });
    },
    [dispatch, localeGetMessagesStatusSet]
  );
};
