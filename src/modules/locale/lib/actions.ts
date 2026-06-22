import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from 'src/app/lib/hooks';
import { useRequestLocal } from 'src/modules/common/lib/api';
import { currentLocaleKey } from 'src/modules/locale/lib/constants';
import { getLocale } from 'src/modules/locale/lib/getLocale';
import { localeActions } from 'src/modules/locale/lib/reducers';
import { selectLocaleCurrent } from 'src/modules/locale/lib/selectors';
import { TLocale } from 'src/modules/locale/lib/types';
import { useStatusSet } from 'src/modules/status/lib/actions';
import { Status } from 'src/modules/status/lib/types';

export const useLocaleGetList = () => {
  const dispatch = useAppDispatch();
  const localeGetListStatusSet = useStatusSet(localeActions.getList.type);
  const requestLocal = useRequestLocal();

  return useCallback(() => {
    localeGetListStatusSet(Status.loading);

    requestLocal<string[]>('/api/v1/locale.json')
      .then((data) => {
        dispatch(localeActions.getList(data));
        localeGetListStatusSet(Status.success);
      })
      .catch(() => {
        localeGetListStatusSet(Status.error);
      });
  }, [dispatch, localeGetListStatusSet, requestLocal]);
};

export const useLocaleSetCurrent = () => {
  const dispatch = useAppDispatch();

  return useCallback(
    (currentLocale: string) => {
      localStorage.setItem(currentLocaleKey, currentLocale);

      return dispatch(localeActions.setCurrent(currentLocale));
    },
    [dispatch],
  );
};

export const useLocaleCurrent = () => {
  const localeCurrent = useAppSelector(selectLocaleCurrent);

  return getLocale(localeCurrent);
};

export const useLocaleGetMessages = () => {
  const dispatch = useAppDispatch();
  const localeGetMessagesStatusSet = useStatusSet(localeActions.getMessages.type);
  const requestLocal = useRequestLocal();

  return useCallback(
    (language: string) => {
      localeGetMessagesStatusSet(Status.loading);

      requestLocal<TLocale>(`/api/v1/locale-${language}.json`)
        .then((data) => {
          dispatch(localeActions.getMessages({ data, language }));
          localeGetMessagesStatusSet(Status.success);
        })
        .catch(() => {
          localeGetMessagesStatusSet(Status.error);
        });
    },
    [dispatch, localeGetMessagesStatusSet, requestLocal],
  );
};
