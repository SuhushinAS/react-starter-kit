// @flow
import React from 'react';
import {Redirect, Route, Switch} from 'react-router';

type TRoutesProps = {
    list: TRoute[],
    root: string,
};

type TRoute = {
    component: React.Node,
    isExact: boolean,
    path: string,
};

/**
 * Маршруты.
 */
export class Routes extends React.Component<TRoutesProps> {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {
        list: [],
        root: '',
    };

    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
        const {list, root} = this.props;

        if (0 === list.length) {
            return null;
        }

        return (
            <Switch>
                {list.map(this.renderRoute)}
                <Redirect to={root} />
            </Switch>
        );
    }

    /**
     * Вывести Компонент по пути.
     * @param {*} component Компонент.
     * @param {boolean} isExact Точное совпадение.
     * @param {string} path Путь.
     * @return {*} Компонент.
     */
    renderRoute = ({component, isExact, path}) => <Route component={component} exact={isExact} key={path} path={`${this.props.root}${path}`} />;
}

export default Routes;
