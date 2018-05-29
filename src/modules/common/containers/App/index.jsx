// @flow

import Router from 'modules/common/components/Router/index';
import PropTypes from 'prop-types';
import * as React from 'react';
import {Provider} from 'react-redux';

type AppTypeProps = {
    store: any,
};

/**
 * Роутер приложения.
 * @return {*} Набор роутов.
 */
export default class App extends React.Component<AppTypeProps> {
    /**
     * Описание свойств.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static propTypes = {
        store: PropTypes.any,
    };

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
