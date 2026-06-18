import React from 'react';
import {Link} from 'react-router-dom';
import './MenuItem.less';

export type TMenuItemProps = {
  name: string;
  path: string;
};

export const MenuItem = ({name, path}: TMenuItemProps) => {
  return (
    <Link className="MenuItem" to={path}>
      {name}
    </Link>
  );
};
