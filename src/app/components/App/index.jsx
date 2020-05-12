import history from 'app/helpers/history';
import Layout from 'modules/common/components/Layout';
import Menu from 'modules/common/components/Menu';
import Routes from 'modules/common/components/Routes';
import LazyRoute from 'modules/lazy/components/LazyRoute';
import React from 'react';
import {Router} from 'react-router-dom';
import routeList from './route-list.json';

/**
 * Вывести маршрут.
 * @param {*} props Совйства.
 * @return {*} Маршрут.
 */
const renderRoute = (props) => <LazyRoute key={props.id} {...props} />;

/**
 * Вывести приложение.
 * @return {*} приложение.
 */
const App = () => (
    <Router history={history}>
        <Layout side={<Menu list={routeList} />}>
            <Routes list={routeList} renderRoute={renderRoute} />
        </Layout>
    </Router>
);

export default App;
