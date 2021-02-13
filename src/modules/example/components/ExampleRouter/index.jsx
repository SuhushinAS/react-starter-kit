// @flow
import Routes from 'modules/common/components/Routes';
import Example from 'modules/example/components/Example';
import ExampleList from 'modules/example/components/ExampleList';
import React from 'react';
import {withRouter} from 'react-router';

type TExampleRouterProps = {
    match: any,
};

const routeList = [
    {
        component: ExampleList,
        path: '/list',
    },
    {
        component: Example,
        isExact: true,
        path: '/',
    },
];

/**
 * Вывести роутинг.
 * @param match Данные роутера.
 * @return {JSX.Element} Роуты.
 */
export const ExampleRouter = ({match}: TExampleRouterProps) => <Routes list={routeList} root={match.path} />;

export default withRouter(ExampleRouter);
