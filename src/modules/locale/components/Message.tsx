import React from 'react';
import {FormattedMessage} from 'react-intl';
import {defaultMessage} from 'src/modules/locale/lib/helpers';
import {TMessageProps} from 'src/modules/locale/model/types';

export const Message = ({id, values}: TMessageProps) => (
  <FormattedMessage defaultMessage={defaultMessage} id={id} values={values} />
);
