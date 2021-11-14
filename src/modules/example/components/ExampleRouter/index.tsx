import {Routes, TRoute} from 'modules/common/components/Routes';
import {Example} from 'modules/example/components/Example';
import {ExampleListContainer} from 'modules/example/components/ExampleList';
import React from 'react';

const routeList: TRoute[] = [
  {
    component: ExampleListContainer,
    path: '/list',
  },
  {
    component: Example,
    path: '/',
  },
];

/**
 * Вывести роутинг.
 * @return {JSX.Element} Роуты.
 */
export const ExampleRouter = () => <Routes list={routeList} />;
