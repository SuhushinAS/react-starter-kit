import {App} from 'app/components/App';
import {store} from 'app/store';
import {ConfigContainer} from 'modules/config/components/Config';
import {LocaleProviderContainer} from 'modules/locale/components/LocaleProvider';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import 'styles/index.less';

const root = document.getElementById('root');

/**
 * Вывести приложение.
 */
function renderApp() {
  if (root) {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <LocaleProviderContainer>
            <BrowserRouter>
              <ConfigContainer>
                <App />
              </ConfigContainer>
            </BrowserRouter>
          </LocaleProviderContainer>
        </Provider>
      </React.StrictMode>,
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
