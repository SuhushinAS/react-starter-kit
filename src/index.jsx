import App from 'app/components/App';
import ConfigProvider from 'app/components/ConfigProvider';
import storage from 'app/helpers/storage';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'styles/index.less';

const root = document.getElementById('root');

/**
 * Вывести приложение.
 */
function renderApp() {
    ReactDOM.render(
        <ConfigProvider>
            <Provider store={storage.store}>
                <App />
            </Provider>
        </ConfigProvider>,
        root
    );
}

renderApp();

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker
            .register('/service-worker.js')
            .then((registration) => {
                console.log('SW registered: ', registration);
            })
            .catch((registrationError) => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}

if (module.hot) {
    module.hot.accept('app/components/App', renderApp);
}
