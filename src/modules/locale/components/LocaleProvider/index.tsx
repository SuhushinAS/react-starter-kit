import {TState} from 'app/types';
import type {TDispatch} from 'app/types';
import {selectLoadItem} from 'modules/load/selectors';
import {actionLocaleGetList, actionLocaleGetMessages, actionLocaleInit} from 'modules/locale/actions';
import {localeActions} from 'modules/locale/constants';
import {selectLocaleCurrent, selectLocaleList, selectMessages} from 'modules/locale/selectors';
import type {TLocale} from 'modules/locale/types';
import React from 'react';
import {IntlProvider} from 'react-intl';
import {connect} from 'react-redux';
import {compose} from 'redux';

type TLocaleProps = {
    children: React.ReactNode;
    dispatch: TDispatch;
    loadMessages?: boolean;
    locale: string;
    messages?: TLocale;
};

/**
 * Провайдер переводов.
 */
export class LocaleProvider extends React.Component<TLocaleProps> {
    /**
     * Конструктор компонента.
     * @param {*} props Свойства переданные в компонент.
     * @return {undefined}
     */
    constructor(props: TLocaleProps) {
        super(props);
        props.dispatch(actionLocaleGetList());
        props.dispatch(actionLocaleInit());
    }

    /**
     * Вывести компонент.
     * @return {JSX.Element} Представление.
     */
    render() {
        const {children, locale, messages} = this.props;

        if (!messages) {
            return null;
        }

        return (
            <IntlProvider locale={locale} messages={messages}>
                {children}
            </IntlProvider>
        );
    }

    /**
     * Вызывается сразу после render.
     * Не вызывается в момент первого render компонента.
     * @return {undefined}
     */
    componentDidUpdate() {
        const {dispatch, loadMessages, locale, messages} = this.props;
        if (!messages && !loadMessages) {
            dispatch(actionLocaleGetMessages(locale));
        }
    }
}

export default compose(
    connect((state: TState) => {
        const locale = selectLocaleCurrent(state);
        return {
            loadMessages: selectLoadItem(state, localeActions.getData),
            locale,
            localeList: selectLocaleList(state),
            messages: selectMessages(state, locale),
        };
    })
)(LocaleProvider);
