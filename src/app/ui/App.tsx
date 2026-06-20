import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { appPath } from 'src/app/lib/constants';
import { store } from 'src/app/lib/store';
import { Config } from 'src/modules/config/ui/Config';
import { Example } from 'src/modules/example/ui/Example';
import { Home } from 'src/modules/home/ui/Home';
import { Layout } from 'src/modules/layout/ui/Layout';
import { LocaleProvider } from 'src/modules/locale/ui/LocaleProvider';

export const App = () => {
  return (
    <StrictMode>
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
    </StrictMode>
  );
};
