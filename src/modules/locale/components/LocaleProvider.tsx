import {useAppDispatch, useAppSelector} from 'app/hooks';
import {actionLocaleGetList, actionLocaleGetMessages, actionLocaleInit} from 'modules/locale/actions';
import {locale} from 'modules/locale/reducers';
import {selectLocaleCurrent, selectMessages} from 'modules/locale/selectors';
import {selectLoadItem} from 'modules/status/selectors';
import React, {useEffect} from 'react';
import {IntlProvider} from 'react-intl';

type TLocaleProps = {
  children: React.ReactNode;
};

/**
 * Компонент.
 * @return {*} Представление.
 */
export const LocaleProviderContainer = ({children}: TLocaleProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actionLocaleGetList);
    dispatch(actionLocaleInit);
  }, [dispatch]);

  const language = useAppSelector(selectLocaleCurrent);
  const loadMessages = useAppSelector(selectLoadItem(locale.actions.getMessages.type));
  const messages = useAppSelector(selectMessages(language));

  useEffect(() => {
    if (!messages && !loadMessages && language) {
      dispatch(actionLocaleGetMessages(language));
    }
  }, [dispatch, loadMessages, language, messages]);

  if (!messages) {
    return null;
  }

  return (
    <IntlProvider locale={language} messages={messages}>
      {children}
    </IntlProvider>
  );
};
