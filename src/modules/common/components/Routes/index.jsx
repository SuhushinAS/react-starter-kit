// @flow
import {RootContext} from 'modules/common/context';
import React from 'react';
import {Redirect, Route, Switch} from 'react-router';

type TRoutesProps = {
    list: TRoute[],
    root: string,
};

type TRoute = {
    component: React$ComponentType<any>,
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
     * Вывести Маршрут.
     * @param {*} component Компонент.
     * @param {boolean} isExact Точное совпадение.
     * @param {string} path Путь.
     * @return {*} представление.
     */
    renderRoute = ({component, isExact, path}) => (
        <Route exact={isExact} key={path} path={`${this.props.root}${path}`} render={this.renderComponent(component)} />
    );

    /**
     * Вывести компонент
     * @param {*} Component Компонент.
     * @return {*} представление.
     */
    renderComponent = (Component) => (props) => {
        const {root} = this.props;

        return (
            <RootContext.Provider value={root}>
                <Component {...props} root={root} />
            </RootContext.Provider>
        );
    };
}

export default Routes;
