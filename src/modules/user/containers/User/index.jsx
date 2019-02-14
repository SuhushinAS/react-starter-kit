// @flow

import UserForm from 'modules/user/containers/UserForm/index.jsx';
import UserList from 'modules/user/containers/UserList/index.jsx';
import {userActionListGet} from 'modules/user/ducks/index.js';
import {userSelectorList} from 'modules/user/selectors/index.js';
import type {TUser} from 'modules/user/types.js';
import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch} from 'react-router';
import {withRouter} from 'react-router-dom';
import {bindActionCreators, compose} from 'redux';

type TUserProps = {
    userActionListGet: bindActionCreators<typeof userActionListGet>,
    userList: TUser[],
};

class User extends React.Component<TUserProps> {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {
        userList: [],
    };

    /**
     * Конструктор компонента.
     * @param {*} props Свойства переданые в компонент.
     * @return {undefined}
     */
    constructor(props) {
        super(props);
        props.userActionListGet();
    }

    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
        return (
            <Switch>
                <Route exact path={`${this.props.match.url}/:id/:action`} render={this.renderForm} />
                <Route exact path={`${this.props.match.url}/:action`} render={this.renderForm} />
                <Route exact path={this.props.match.url} render={this.renderList} />
            </Switch>
        );
    }

    renderList = () => <UserList baseUrl={this.props.match.url} list={this.props.userList} />;

    renderForm = (props) => <UserForm baseUrl={this.props.match.url} id={props.match.params.id} />;

    /**
     * Компонент примонтировался.
     * В данный момент у нас есть возможность использовать refs,
     * а следовательно это то самое место, где мы хотели бы указать установку фокуса.
     * Так же, таймауты, ajax-запросы и взаимодействие с другими библиотеками стоит обрабатывать здесь.
     * @return {undefined}
     */
    // componentDidMount() {}

    /**
     * Должен ли компонент обновиться?
     * На самом деле, обычно реакт сам отлично разбирается.
     * Но иногда ручное управление позволяет существенно ускорить работу в "узких местах".
     * @param {*} nextProps Новые свойства.
     * @param {*} nextState Новое состояние.
     * @return {boolean} Должен ли компонент обновиться?
     */
    // shouldComponentUpdate(nextProps, nextState) {}

    /**
     * Вызывается сразу после render.
     * Не вызывается в момент первого render'а компонента.
     * @param {*} props Предыдущие свойства.
     * @param {*} state Предыдущее состояние.
     * @return {undefined}
     */
    // componentDidUpdate(props, state) {}

    /**
     * Вызывается сразу перед тем, как компонент будет удален из DOM.
     * @return {undefined}
     */
    // componentWillUnmount() {}
}

export default compose(
    connect(
        (state) => ({
            userList: userSelectorList(state),
        }),
        {
            userActionListGet,
        }
    )
)(User);
