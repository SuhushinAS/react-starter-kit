import LazyModule from 'modules/lazy/components/LazyModule';
import React from 'react';
import {Route} from 'react-router';

export class LazyRoute extends React.Component {
    render() {
        return <Route path={this.props.path} render={this.renderLazy} />;
    }

    renderLazy = () => <LazyModule path={this.props.component} />;
}

export default LazyRoute;
