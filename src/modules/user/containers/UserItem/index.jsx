// @flow
import type {TUser} from 'modules/user/types.js';
import React from 'react';
import {Link} from 'react-router-dom';

type TUserItemProps = {
    baseUrl: string,
    user: TUser,
};

class UserItem extends React.Component<TUserItemProps> {
    /**
     * Значения свойств по-умолчанию.
     * https://facebook.github.io/react/docs/typechecking-with-proptypes.html
     */
    static defaultProps = {
        baseUrl: '',
    };

    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
        const {baseUrl, user} = this.props;
        const fullName = `${user.firstName} ${user.lastName}`;
        return (
            <tr>
                <td>
                    <img alt={fullName} src={user.picture} />
                </td>
                <td>{fullName}</td>
                <td>{user.company}</td>
                <td>
                    <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>
                    <Link to={`${baseUrl}/${user.id}/edit`}>edit</Link>
                </td>
            </tr>
        );
    }
}

export default UserItem;
