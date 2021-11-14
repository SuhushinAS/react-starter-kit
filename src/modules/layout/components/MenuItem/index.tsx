import React from 'react';
import {Link} from 'react-router-dom';
import './style.less';

export type TMenuItemProps = {
    name: string;
    path: string;
};

/**
 * Вывести пункт меню.
 * @param {*} location Местоположение.
 * @param {*} name Название.
 * @param {*} path Путь.
 * @return {JSX.Element} Представление.
 */
export const MenuItem = ({name, path}: TMenuItemProps) => {
    return (
        <Link className="menu-item" to={path}>
            {name}
        </Link>
    );
};

export default MenuItem;
