import {TDispatch} from 'app/types';
import {actionExampleGetList} from 'modules/example/actions';
import {ExamplePageItem} from 'modules/example/components/ExamplePageItem';
import {ExamplePageList} from 'modules/example/components/ExamplePageList';
import {examplePaths} from 'modules/example/constants';
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
      <Routes>
        <Route element={<ExamplePageList />} path={examplePaths.list} />
        <Route element={<ExamplePageItem />} path={examplePaths.item} />
      </Routes>
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
