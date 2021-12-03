import React from 'react';
import {Link} from 'react-router-dom';
import './MenuItem.less';

export type TMenuItemProps = {
  name: string;
  path: string;
};

/**
 * Вывести пункт меню.
 * @param location Местоположение.
 * @param name Название.
 * @param path Путь.
 * @return {*} Представление.
 */
export const MenuItem = ({name, path}: TMenuItemProps) => {
  return (
    <Link className="menu-item" to={path}>
      {name}
    </Link>
  );
};
