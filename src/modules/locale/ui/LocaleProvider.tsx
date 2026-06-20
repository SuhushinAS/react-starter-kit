import {useAppSelector} from 'src/app/lib/hooks';
import {
  useLocaleCurrent,
  useLocaleGetList,
  useLocaleGetMessages,
} from 'src/modules/locale/lib/actions';
import {localeActions} from 'src/modules/locale/lib/reducers';
import {selectMessages} from 'src/modules/locale/lib/selectors';
import {selectStatusItem} from 'src/modules/status/lib/selectors';
import {Status} from 'src/modules/status/lib/types';
import {ReactNode, useEffect, useState} from 'react';
import {IntlProvider} from 'react-intl';

type TLocaleProps = {
  children: ReactNode;
};

export const LocaleProvider = ({children}: TLocaleProps) => {
  const localeCurrent = useLocaleCurrent();
  const messages = useAppSelector(selectMessages(localeCurrent));
  const messagesStatus = useAppSelector(
    selectStatusItem(localeActions.getMessages.type)
  );
  const localeGetList = useLocaleGetList();
  const localeGetMessages = useLocaleGetMessages();
  const [messagesState, setMessagesState] = useState(messages);

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
