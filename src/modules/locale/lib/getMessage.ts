import { IntlShape } from 'react-intl';
import { defaultMessage } from 'src/modules/locale/lib/constants';
import { TMessageProps } from 'src/modules/locale/lib/types';

export const getMessage = (intl: IntlShape) => {
  return ({ id, values }: TMessageProps) => {
    return intl.formatMessage({ defaultMessage, id }, values);
  };
};
