import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import Router from 'src/components/Router/index';
import configureStore from 'src/redux/configure-store';
import Api from './api/index';
import reducers from 'src/redux/reducers/index';

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
    module.hot.accept('src/components/Router/index', () => {
        const HotRouter = require('src/components/Router/index').default;

        render(
            <Provider store={store}>
                <HotRouter />
            </Provider>,
            document.getElementById('root')
        );
    });

    // Enable Webpack hot module replacement for reducers
    module.hot.accept('src/redux/reducers', () => {
        const nextReducer = require('src/redux/reducers').default;
        store.replaceReducer(nextReducer);
    });
}