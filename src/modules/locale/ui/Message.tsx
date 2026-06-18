import React from 'react';
import {FormattedMessage} from 'react-intl';
import {TMessageProps} from 'src/modules/locale/lib/types';
import {defaultMessage} from 'src/modules/locale/lib/constants';

export const Message = ({id, values}: TMessageProps) => (
  <FormattedMessage defaultMessage={defaultMessage} id={id} values={values} />
);
