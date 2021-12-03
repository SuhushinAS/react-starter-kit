import {getOptions} from 'modules/locale/helpers';
import {TMessageProps} from 'modules/locale/types';
import React from 'react';
import {FormattedMessage} from 'react-intl';

/**
 * Вывести сообщение.
 * @param id Идентификатор
 * @param values Значения.
 * @return {*} Сообщение.
 */
export const Message = ({id, values}: Omit<TMessageProps, 'intl'>) => <FormattedMessage {...getOptions(id)} values={values} />;
