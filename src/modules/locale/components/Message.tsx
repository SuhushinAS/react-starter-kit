import {defaultMessage} from 'src/modules/locale/lib/helpers';
import {TMessageProps, TMessageValues} from 'src/modules/locale/model/types';
import React from 'react';
import {FormattedMessage} from 'react-intl';

export const Message = <V extends Record<string, any> = TMessageValues>({
  id,
  values,
}: Omit<TMessageProps<V>, 'intl'>) => (
  <FormattedMessage defaultMessage={defaultMessage} id={id} values={values} />
);
