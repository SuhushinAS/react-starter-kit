// @flow
import UserItem from 'modules/user/containers/UserItem/index.jsx';
import type {TUser} from 'modules/user/types.js';
import React from 'react';

type TUserListProps = {
    baseUrl: string,
    list: TUser[],
};

class UserList extends React.Component<TUserListProps> {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {
        baseUrl: '',
        list: [],
    };

    /**
     * Конструктор компонента.
     * @param {*} props Свойства переданые в компонент.
     * @return {undefined}
     */
    // constructor(props) {
    //     super(props);
    // }

    /**
     * Вывести пользователя.
     * @param {*} user Пользователь.
     * @return {*} Представление.
     */
    renderItem = (user) => <UserItem baseUrl={this.props.baseUrl} key={user.id} user={user} />;

    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
        return (
            <table>
                <tbody>{this.props.list.map(this.renderItem)}</tbody>
            </table>
        );
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
    // componentDidUpdate(props, state) {}

    /**
     * Вызывается сразу перед тем, как компонент будет удален из DOM.
     * @return {undefined}
     */
    // componentWillUnmount() {}
}

export default UserList;
