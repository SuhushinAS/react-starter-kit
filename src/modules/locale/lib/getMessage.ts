import {IntlShape} from 'react-intl';
import {TMessageProps} from 'src/modules/locale/lib/types';
import {defaultMessage} from 'src/modules/locale/lib/constants';

export const getMessage = (intl: IntlShape) => {
  return ({id, values}: TMessageProps) => {
    return intl.formatMessage({defaultMessage, id}, values);
  };
};
