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
  const localeCurrent = useLocaleCurrent();
  const messages = useAppSelector(selectMessages(localeCurrent));
  const messagesStatus = useAppSelector(
    selectStatusItem(localeActions.getMessages.type)
  );
  const localeGetList = useLocaleGetList();
  const localeGetMessages = useLocaleGetMessages();
  const [messagesState, setMessagesState] = React.useState(messages);

  useEffect(() => {
    localeGetList();
  }, [localeGetList]);

  useEffect(() => {
    if (messages) {
      setMessagesState(messages);
    }
  }, [messages]);

  useEffect(() => {
    if (messagesStatus !== Status.loading && localeCurrent && !messages) {
      localeGetMessages(localeCurrent);
    }
  }, [localeCurrent, localeGetMessages, messages, messagesStatus]);

  if (messagesStatus !== Status.success && !messagesState) {
    return null;
  }

  return (
    <IntlProvider locale={localeCurrent} messages={messagesState}>
      {children}
    </IntlProvider>
  );
};
