import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import App from './containers/App/index';
import configureStore from './redux/configure-store';
import Api from './api/index';
import reducers from './redux/reducers/index';
import {appGet} from './redux/actions/app';
import {additionalListAdd} from './redux/actions/additional-list';

import './app-data.json';

const isProduction = process.env.NODE_ENV === 'production';
const host = 'http://localhost:3000';
const api = new Api(host);
const store = configureStore(!isProduction, reducers, {api});

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/App/index', () => {
        const NewApp = require('./containers/App/index').default;

        render(
            <Provider store={store}>
                <NewApp />
            </Provider>,
            document.getElementById('root')
        );
    });

    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./redux/reducers', () => {
        const nextReducer = require('./redux/reducers').default;
        store.replaceReducer(nextReducer);
    });
}

store.dispatch(appGet());
store.dispatch(additionalListAdd());