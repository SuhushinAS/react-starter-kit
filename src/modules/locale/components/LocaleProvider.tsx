import {useAppDispatch, useAppSelector} from 'app/hooks';
import {actionLocaleGetList, actionLocaleGetMessages, actionLocaleInit} from 'modules/locale/actions';
import {localeActions} from 'modules/locale/reducers';
import {selectLocaleCurrent, selectMessages} from 'modules/locale/selectors';
import {selectStatusItem} from 'modules/status/selectors';
import {Status} from 'modules/status/types';
import React, {useEffect} from 'react';
import {IntlProvider} from 'react-intl';

type TLocaleProps = {
  children: React.ReactNode;
};

export const LocaleProvider = ({children}: TLocaleProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actionLocaleGetList);
    dispatch(actionLocaleInit);
  }, [dispatch]);

  const language = useAppSelector(selectLocaleCurrent);
  const messagesStatus = useAppSelector(selectStatusItem(localeActions.getMessages.type));
  const messages = useAppSelector(selectMessages(language));

  useEffect(() => {
    if (messagesStatus === undefined && language) {
      dispatch(actionLocaleGetMessages(language));
    }
  }, [dispatch, language, messagesStatus]);

  if (messagesStatus !== Status.success) {
    return null;
  }

  return (
    <IntlProvider locale={language} messages={messages}>
      {children}
    </IntlProvider>
  );
};
