import {TMessage, TMessageFormatValues} from 'src/modules/locale/model/types';
import {IntlShape} from 'react-intl';

export const defaultMessage = '\u00A0';

export const getMessage = (intl: IntlShape): TMessage => {
  return (id: string, values?: TMessageFormatValues) => {
    return intl.formatMessage({defaultMessage, id}, values);
  };
};
