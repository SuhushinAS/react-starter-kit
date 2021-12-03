import {appPath} from 'app/constants';
import {ExampleRouter} from 'modules/example/components/ExampleRouter';
import {Home} from 'modules/home/components/Home';
import {Layout} from 'modules/layout/components/Layout';
import React from 'react';
import {Route, Routes} from 'react-router-dom';

/**
 * Вывести приложение.
 * @return {*} приложение.
 */
export const App = () => {
  return (
    <Layout>
      <Routes>
        <Route element={<ExampleRouter />} path={`${appPath.example}/*`} />
        <Route element={<Home />} path={appPath.home} />
      </Routes>
    </Layout>
  );
};
