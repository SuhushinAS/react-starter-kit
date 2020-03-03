import React from 'react';
import {Redirect, Route, Switch} from 'react-router';

/**
 * Маршруты.
 */
export class Routes extends React.Component {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {
        list: [],
        renderRoute: (props) => <Route key={props.id} {...props} />,
    };

    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
        const {list, renderRoute} = this.props;

        if (0 === list.length) {
            return null;
        }

        return (
            <Switch>
                {list.map(renderRoute)}
                <Redirect to={list[0].path} />
            </Switch>
        );
    }
}

export default Routes;
