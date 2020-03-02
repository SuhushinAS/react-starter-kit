// @flow
import history from 'app/browser-history.js';
import Example from 'modules/example/containers/Example/index.jsx';
import React from 'react';
import {Provider} from 'react-redux';
import {Redirect, Route, Router as ReactRouter, Switch} from 'react-router-dom';

type TAppProps = {
    store: any,
};

/**
 * Роутер приложения.
 * @return {*} Набор роутов.
 */
export default class App extends React.Component<TAppProps> {
    /**
     * Отображение компонента
     * @return {*} Представление компонента.
     */
    render() {
        const {store} = this.props;

        return (
            <Provider store={store}>
                <ReactRouter history={history}>
                    <Switch>
                        <Route component={Example} path="/example" />
                        <Redirect to="/example" />
                    </Switch>
                </ReactRouter>
            </Provider>
        );
    }
}
