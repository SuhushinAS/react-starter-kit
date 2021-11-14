import Routes, {TRoute} from 'modules/common/components/Routes';
import ExampleRouter from 'modules/example/components/ExampleRouter';
import Home from 'modules/home/components/Home';
import Layout from 'modules/layout/components/Layout';
import React from 'react';

const routeList: TRoute[] = [
    {
        component: ExampleRouter,
        path: '/example',
    },
    {
        component: Home,
        isExact: true,
        path: '/',
    },
];

/**
 * Вывести приложение.
 * @return {*} приложение.
 */
const App = () => {
    return (
        <Layout>
            <Routes list={routeList} />
        </Layout>
    );
};

export default App;
