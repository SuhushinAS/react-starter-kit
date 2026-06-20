import {ExamplePageItem} from 'src/modules/example/ui/ExamplePageItem';
import {ExamplePageList} from 'src/modules/example/ui/ExamplePageList';
import {useExampleGetList} from 'src/modules/example/lib/actions';
import {examplePaths} from 'src/modules/example/lib/constants';
import {useEffect} from 'react';
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
