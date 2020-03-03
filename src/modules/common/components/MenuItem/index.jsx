import React from 'react';
import {matchPath, withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import './style.less';

export const MenuItem = ({location, name, path}) => {
    if (matchPath(location.pathname, {path})) {
        return <span className="menu-item menu-item_current">{name}</span>;
    }

    return (
        <Link className="menu-item" to={path}>
            {name}
        </Link>
    );
};

export default withRouter(MenuItem);
