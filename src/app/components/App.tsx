import {appPath} from 'app/constants';
import {ExampleContainer} from 'modules/example/components/Example2';
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
        <Route element={<ExampleContainer />} path={`${appPath.example}/*`} />
        <Route element={<Home />} path={appPath.home} />
      </Routes>
    </Layout>
  );
};
