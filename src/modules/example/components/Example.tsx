import {appPath} from 'app/constants';
import {TDispatch} from 'app/types';
import {actionExampleGetList} from 'modules/example/actions';
import {ExampleItem} from 'modules/example/components/ExampleItem';
import {ExampleItemPageHead} from 'modules/example/components/ExampleItemPageHead';
import {ExampleList} from 'modules/example/components/ExampleList';
import {ExamplePageHead} from 'modules/example/components/ExamplePageHead';
import {examplePaths} from 'modules/example/constants';
import {Message} from 'modules/locale/components/Message';
import React from 'react';
import {connect} from 'react-redux';
import {Route, Routes} from 'react-router-dom';

type TProps = {
  dispatch: TDispatch;
};

export class ExampleComponent extends React.Component<TProps> {
  static defaultProps = {};

  // constructor(props: TExampleProps) {
  //     super(props);
  // }

  render() {
    return (
      <div>
        <Routes>
          <Route
            element={
              <ExamplePageHead
                linkText={<Message id="home.title" />}
                linkUrl={appPath.home}
                title={<Message id="example.list.title" />}
              />
            }
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
  }

  componentDidMount() {
    this.props.dispatch(actionExampleGetList);
  }

  // shouldComponentUpdate(props, state) {}

  // componentDidUpdate(props, state) {}

  // componentWillUnmount() {}
}

export const Example = connect()(ExampleComponent);
