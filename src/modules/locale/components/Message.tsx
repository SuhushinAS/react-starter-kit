import {injectIntl} from 'react-intl';

type TMessageProps = {
  id: string;
  intl: any;
  values?: any;
};

/**
 * Сообщение
 * @param id Идентификатор.
 * @param intl Интл
 * @param values Значения
 * @return {*} Сообщение.
 */
export function message({id, intl, values}: TMessageProps) {
  return intl.formatMessage({defaultMessage: '\u00A0', id}, values);
}

export const Message = injectIntl(message);
