// @flow

import type {BrowserHistory} from 'history';
import {userActionEdit} from 'modules/user/ducks/index.js';
import {userSelectorItem} from 'modules/user/selectors/index.js';
import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {bindActionCreators, compose} from 'redux';

type TExampleProps = {
    baseUrl: string;
    history: BrowserHistory,
    id: string,
    userActionEdit: bindActionCreators<typeof userActionEdit>
};

type TExampleState = {
    company: string,
    email: string,
    firstName: string,
    id: number,
    lastName: string,
    picture: string,
} | null;

class UserForm extends React.Component<TExampleProps, TExampleState> {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {
        list: [],
    };

    /**
     * Конструктор компонента.
     * @param {*} props Свойства переданые в компонент.
     * @return {undefined}
     */
    constructor(props) {
        super(props);
        this.state = this.initSate(props);
    }

    /**
     * Инициализиоовать состояние.
     * @param {*} props Свойства.
     * @return {*} Состояние.
     */
    initSate(props) {
        return props.user;
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.userActionEdit(this.state.id, this.state);
        this.closeUser();
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };

    closeUser = () => {
        this.props.history.push(this.props.baseUrl);
    };

    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
        if (this.state) {
            return (
                <form onSubmit={this.onSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td colSpan={2}>
                                    <img src={this.state.picture} alt={`${this.state.firstName} ${this.state.lastName}`} />
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="firstName">First name</label></td>
                                <td>
                                    <input id="firstName" name="firstName" onChange={this.onChange} type="text" value={this.state.firstName} />
                                </td>
                            </tr>
                            <tr>
                                <td><label htmlFor="lastName">Last name</label></td>
                                <td><input id="lastName" name="lastName" onChange={this.onChange} type="text" value={this.state.lastName} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="company">Company</label></td>
                                <td><input id="company" name="company" onChange={this.onChange} type="text" value={this.state.company} /></td>
                            </tr>
                            <tr>
                                <td><label htmlFor="email">Email</label></td>
                                <td><input id="email" name="email" onChange={this.onChange} type="text" value={this.state.email} /></td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <button type="submit">Save</button>
                                    {' '}
                                    <button type="button" onClick={this.closeUser}>Cancel</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            );
        }
        return null;
    }

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
    componentDidUpdate(props, state) {
        const {user} = this.props;
        if (user !== props.user) {
            this.setState(user);
        }
    }

    /**
     * Вызывается сразу перед тем, как компонент будет удален из DOM.
     * @return {undefined}
     */
    // componentWillUnmount() {}
}

export default compose(
    withRouter,
    connect(
        (state, prop) => ({
            user: userSelectorItem(state, prop.id),
        }),
        {
            userActionEdit,
        }
    )
)(UserForm);
