import {App} from 'app/components/App';
import React from 'react';
import {createRoot} from 'react-dom/client';
import 'styles/index.less';

const container = document.getElementById('root');

if (container) {
  const root = createRoot(container);

  root.render(<App />);

  if (module.hot) {
    module.hot.accept('app/components/App', () => {
      root.render(<App />);
    });
  }
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
