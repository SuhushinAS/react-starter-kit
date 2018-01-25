import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import Router from 'components/Router/index';
import configureStore from 'redux/configure-store';
import reducers from 'redux/reducers/index';
import Api from 'api/index';

const isProduction = 'production' === process.env.NODE_ENV;
const host = '';
const api = new Api(host);
const store = configureStore(!isProduction, reducers, {api});

render(
    <Provider store={store}>
        <Router />
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('components/Router/index', () => {
        const HotRouter = require('components/Router/index').default;

        render(
            <Provider store={store}>
                <HotRouter />
            </Provider>,
            document.getElementById('root')
        );
    });

    // Enable Webpack hot module replacement for reducers
    module.hot.accept('redux/reducers', () => {
        const nextReducer = require('redux/reducers').default;
        store.replaceReducer(nextReducer);
    });
}