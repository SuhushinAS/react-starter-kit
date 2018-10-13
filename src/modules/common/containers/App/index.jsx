// @flow

import Router from 'modules/common/components/Router/index';
import * as React from 'react';
import {Provider} from 'react-redux';

type TAppProps = {
    store: any,
};

/**
 * Роутер приложения.
 * @return {*} Набор роутов.
 */
export default class App extends React.Component<TAppProps> {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {
        children: null,
    };

    /**
     * Отображение компонента
     * @return {*} Представление компонента.
     */
    render() {
        const {store} = this.props;

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
