import {Example} from 'modules/example/components/Example';
import {ExampleListContainer} from 'modules/example/components/ExampleList';
import {examplePath} from 'modules/example/constants';
import React from 'react';
import {Route, Routes} from 'react-router-dom';

/**
 * Вывести роутинг.
 * @return {JSX.Element} Роуты.
 */
export const ExampleRouter = () => (
  <Routes>
    <Route element={<ExampleListContainer />} path={examplePath.list} />
    <Route element={<Example />} path={examplePath.root} />
  </Routes>
);
