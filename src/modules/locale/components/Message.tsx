import {getOptions} from 'modules/locale/helpers';
import {TMessageProps, TMessageValues} from 'modules/locale/types';
import React from 'react';
import {FormattedMessage} from 'react-intl';

export const Message = <V extends Record<string, any> = TMessageValues>({
  id,
  values,
}: Omit<TMessageProps<V>, 'intl'>) => <FormattedMessage {...getOptions(id)} values={values} />;
