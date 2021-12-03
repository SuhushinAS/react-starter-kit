import {TMessage} from 'modules/locale/types';
import {IntlShape} from 'react-intl';

type TGetOptions = (id: string) => {
  defaultMessage: string;
  id: string;
};

/**
 * Получить Опции.
 * @param id Идентификатор.
 * @return {*} Опции.
 */
export const getOptions: TGetOptions = (id: string) => ({defaultMessage: '\u00A0', id});

export type TGetMessage = (intl: IntlShape) => TMessage;

/**
 * Получить Сообщение.
 * @param intl Интл.
 * @return {*} Сообщение.
 */
export const getMessage: TGetMessage = (intl) => (id, values) => intl.formatMessage(getOptions(id), values);
