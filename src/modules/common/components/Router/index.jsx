// @flow

import history from 'helpers/browser-history.es';
import BaronTest from 'modules/baron-test/containers/BaronTest/index.jsx';
import Example from 'modules/example/containers/Example/index.jsx';
import * as React from 'react';
import {Redirect, Route, Router as ReactRouter, Switch} from 'react-router-dom';

/**
 * Роутер приложения.
 * @return {*} Набор роутов.
 */
export default function Router() {
    return (
        <ReactRouter history={history}>
            <Switch>
                <Route component={BaronTest} path="/baron-test" />
                <Route component={Example} path="/example" />
                <Redirect to="/baron-test" />
            </Switch>
        </ReactRouter>
    );
}
