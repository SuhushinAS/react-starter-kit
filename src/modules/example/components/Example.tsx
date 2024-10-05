import {ExamplePageItem} from 'modules/example/components/ExamplePageItem';
import {ExamplePageList} from 'modules/example/components/ExamplePageList';
import {useExampleGetList} from 'modules/example/model/actions';
import {examplePaths} from 'modules/example/model/constants';
import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';

export const Example = () => {
  const exampleGetList = useExampleGetList();

  useEffect(() => {
    exampleGetList();
  }, [exampleGetList]);

  return (
    <Routes>
      <Route element={<ExamplePageList />} path={examplePaths.list} />
      <Route element={<ExamplePageItem />} path={examplePaths.item} />
    </Routes>
  );
};
