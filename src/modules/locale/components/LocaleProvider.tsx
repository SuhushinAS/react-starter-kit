import {useAppSelector} from 'src/app/lib/hooks';
import {
  useLocaleCurrent,
  useLocaleGetList,
  useLocaleGetMessages,
} from 'src/modules/locale/model/actions';
import {localeActions} from 'src/modules/locale/model/reducers';
import {selectMessages} from 'src/modules/locale/model/selectors';
import {selectStatusItem} from 'src/modules/status/model/selectors';
import {Status} from 'src/modules/status/model/types';
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
