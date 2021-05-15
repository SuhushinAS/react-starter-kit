// @flow
import App from 'app/components/App';
import {store} from 'app/storage/store';
import history from 'helpers/history';
import Config from 'modules/config/components/Config';
import LocaleProvider from 'modules/locale/components/LocaleProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import 'styles/index.less';

const root = document.getElementById('root');

/**
 * Вывести приложение.
 */
function renderApp() {
    if (root) {
        ReactDOM.render(
            <Provider store={store}>
                <LocaleProvider>
                    <Router history={history}>
                        <Config>
                            <App />
                        </Config>
                    </Router>
                </LocaleProvider>
            </Provider>,
            root
        );
    }
}

renderApp();

if (module.hot) {
    module.hot.accept('app/components/App', renderApp);
}

window.addEventListener('load', () => {
    if ('serviceWorker' in navigator && navigator.serviceWorker) {
        navigator.serviceWorker.register('/sw.js').catch((registrationError) => {
            console.error('SW registration failed: ', registrationError);
        });
    }
});
