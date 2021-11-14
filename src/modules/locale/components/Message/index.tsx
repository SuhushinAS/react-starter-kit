import {injectIntl} from 'react-intl';

type TMessageProps = {
    id: string;
    intl: any;
    values?: any;
};

/**
 * Сообщение
 * @param {string} id Идентификатор.
 * @param {*} intl Интл
 * @param {*} values Значения
 * @return {string} Сообщение.
 */
export function message({id, intl, values}: TMessageProps) {
    return intl.formatMessage({defaultMessage: '\u00A0', id}, values);
}

export default injectIntl(message);
