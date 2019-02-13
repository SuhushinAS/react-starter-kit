// @flow

import getApi from 'app/api.js';
import history from 'app/browser-history.js';
import reducer from 'app/reducer.js';
import {commonActionConfigSet} from 'modules/common/ducks/index.js';
import Example from 'modules/example/containers/Example/index.jsx';
import React from 'react';
import {Provider} from 'react-redux';
import {Redirect, Route, Router as ReactRouter, Switch} from 'react-router-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import thunk from 'redux-thunk';

type TAppProps = {
    store: any,
};

/**
 * Роутер приложения.
 * @return {*} Набор роутов.
 */
export default class App extends React.Component<TAppProps> {
    /**
     * Конструктор компонента.
     * @param {*} props Свойства переданые в компонент.
     * @return {void}
     */
    constructor(props) {
        super(props);
        this.initStore();
    }

    async initStore() {
        const config = await this.getConfig();
        const store = this.configureStore(config.host);
        store.dispatch(commonActionConfigSet(config));
        this.setState({
            store
        });
    }

    async getConfig() {
        const response = await fetch('/api/v1/config');
        return await response.json();
    }

    configureStore(host) {
        const middlewares: any[] = [thunk.withExtraArgument(getApi(host))];
        const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
        const enhancer = composeEnhancers(applyMiddleware(...middlewares));

        const store = createStore(reducer, enhancer);

        if (module.hot) {
            module.hot.accept('app/reducer.js', () => store.replaceReducer(reducer));
        }

        return store;
    }

    /**
     * Отображение компонента
     * @return {*} Представление компонента.
     */
    render() {
        const {store} = this.state;
        if (store) {
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

        return null;
    }

    state = {
        store: null,
    };
}
