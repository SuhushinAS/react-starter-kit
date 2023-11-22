import {App} from 'app/components/App';
import {store} from 'app/store';
import {Config} from 'modules/config/components/Config';
import {LocaleProvider} from 'modules/locale/components/LocaleProvider';
import React from 'react';
import {createRoot, Root} from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import 'styles/index.less';

const getRender = (root: Root) => () => {
  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <LocaleProvider>
          <BrowserRouter>
            <Config>
              <App />
            </Config>
          </BrowserRouter>
        </LocaleProvider>
      </Provider>
    </React.StrictMode>
  );
};

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);
  const render = getRender(root);

  render();
}

const onRegisterError = (error) => {
  console.error('SW registration failed: ', error);
};

const onWindowLoad = () => {
  if ('serviceWorker' in navigator && navigator.serviceWorker) {
    navigator.serviceWorker.register('/sw.js').catch(onRegisterError);
  }
};

window.removeEventListener('load', onWindowLoad);
window.addEventListener('load', onWindowLoad);
