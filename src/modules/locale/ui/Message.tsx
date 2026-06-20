import { FormattedMessage } from 'react-intl';
import { defaultMessage } from 'src/modules/locale/lib/constants';
import { TMessageProps } from 'src/modules/locale/lib/types';

export const Message = ({ id, values }: TMessageProps) => (
  <FormattedMessage defaultMessage={defaultMessage} id={id} values={values} />
);
