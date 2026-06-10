import {TMessageProps} from 'src/modules/locale/model/types';
import {IntlShape} from 'react-intl';

export const defaultMessage = '\u00A0';

export const getMessage = (intl: IntlShape) => {
  return ({id, values}: TMessageProps) => {
    return intl.formatMessage({defaultMessage, id}, values);
  };
};
