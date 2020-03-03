import React from 'react';
import './style.less';

const Layout = ({children, side}) => (
    <div className="layout">
        <div className="layout__main">{children}</div>
        <div className="layout__side">{side}</div>
    </div>
);

Layout.defaultProps = {
    side: <div>Side</div>,
};

export default Layout;
