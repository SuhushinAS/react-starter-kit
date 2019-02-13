// @flow

import history from 'helpers/browser-history.js';
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
                <Route component={Example} path="/example" />
                <Redirect to="/example" />
            </Switch>
        </ReactRouter>
    );
}
