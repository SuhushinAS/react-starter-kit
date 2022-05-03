import {App} from 'app/components/App';
import {store} from 'app/store';
import {ConfigContainer} from 'modules/config/components/Config';
import {LocaleProviderContainer} from 'modules/locale/components/LocaleProvider';
import React from 'react';
import {createRoot, Root} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import 'styles/index.less';

/**
 * Рендер приложения.
 * @param root {Root} Корень.
 * @return void.
 */
const getRender = (root: Root) => () => {
  root.render(
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
    </React.StrictMode>
  );
};

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  const render = getRender(root);

  render();

  if (module.hot) {
    module.hot.accept('app/components/App', render);
  }
}

/**
 * По ошибке регистрации.
 * @param error Ошибка.
 */
const onRegisterError = (error) => {
  console.error('SW registration failed: ', error);
};

/**
 * По загрузке window.
 */
const onWindowLoad = () => {
  if ('serviceWorker' in navigator && navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js').catch(onRegisterError);
  }
};

window.removeEventListener('load', onWindowLoad);
window.addEventListener('load', onWindowLoad);
