import {appPath} from 'app/model/constants';
import {store} from 'app/model/store';
import {Config} from 'modules/config/components/Config';
import {Example} from 'modules/example/components/Example';
import {Home} from 'modules/home/components/Home';
import {Layout} from 'modules/layout/components/Layout';
import {LocaleProvider} from 'modules/locale/components/LocaleProvider';
import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

export const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <LocaleProvider>
          <BrowserRouter>
            <Config>
              <Layout>
                <Routes>
                  <Route element={<Example />} path={`${appPath.example}/*`} />
                  <Route element={<Home />} path={appPath.home} />
                </Routes>
              </Layout>
            </Config>
          </BrowserRouter>
        </LocaleProvider>
      </Provider>
    </React.StrictMode>
  );
};
