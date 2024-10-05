import {IntlShape} from 'react-intl';

export const defaultMessage = '\u00A0';

export const getMessage = <V>(intl: IntlShape) => {
  return (id, values: V) => {
    return intl.formatMessage({defaultMessage, id}, values);
  };
};
