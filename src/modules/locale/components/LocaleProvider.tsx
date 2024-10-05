import {useAppSelector} from 'app/lib/hooks';
import {
  useLocaleCurrent,
  useLocaleGetList,
  useLocaleGetMessages,
} from 'modules/locale/model/actions';
import {localeActions} from 'modules/locale/model/reducers';
import {selectMessages} from 'modules/locale/model/selectors';
import {selectStatusItem} from 'modules/status/model/selectors';
import {Status} from 'modules/status/model/types';
import React, {useEffect} from 'react';
import {IntlProvider} from 'react-intl';

type TLocaleProps = {
  children: React.ReactNode;
};

export const LocaleProvider = ({children}: TLocaleProps) => {
  const localeGetList = useLocaleGetList();
  const localeGetMessages = useLocaleGetMessages();

  useEffect(() => {
    localeGetList();
  }, [localeGetList]);

  const language = useLocaleCurrent();
  const messagesStatus = useAppSelector(
    selectStatusItem(localeActions.getMessages.type)
  );
  const messages = useAppSelector(selectMessages(language));

  useEffect(() => {
    if (messagesStatus === undefined && language) {
      localeGetMessages(language);
    }
  }, [language, localeGetMessages, messagesStatus]);

  if (messagesStatus !== Status.success) {
    return null;
  }

  return (
    <IntlProvider locale={language} messages={messages}>
      {children}
    </IntlProvider>
  );
};
