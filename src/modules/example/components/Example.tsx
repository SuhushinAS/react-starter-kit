import {appPath} from 'app/constants';
import {useAppDispatch} from 'app/hooks';
import {actionExampleGetList} from 'modules/example/actions';
import {ExampleItem} from 'modules/example/components/ExampleItem';
import {ExampleItemPageHead} from 'modules/example/components/ExampleItemPageHead';
import {ExampleList} from 'modules/example/components/ExampleList';
import {ExamplePageHead} from 'modules/example/components/ExamplePageHead';
import {examplePaths} from 'modules/example/constants';
import {Message} from 'modules/locale/components/Message';
import React, {useEffect} from 'react';
import {Route, Routes} from 'react-router-dom';

/**
 * Компонент.
 * @return {*} Представление.
 */
export const Example = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(actionExampleGetList);
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route
          element={<ExamplePageHead linkText={<Message id="home.title" />} linkUrl={appPath.home} title={<Message id="example.list.title" />} />}
          path={examplePaths.list}
        />
        <Route element={<ExampleItemPageHead />} path={examplePaths.item} />
      </Routes>
      <Routes>
        <Route element={<ExampleList />} path={examplePaths.list} />
        <Route element={<ExampleItem />} path={examplePaths.item} />
      </Routes>
    </div>
  );
};
