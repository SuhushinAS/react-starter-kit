import React from 'react';
import './style.less';

/**
 * Вывести базовую разметку приложения.
 * @param {*} children Дети.
 * @param {*} side Боковая панель.
 * @return {*} Базовая разметку приложения.
 */
const Layout = ({children, side}) => (
    <div className="layout box">
        <div className="layout__main">{children}</div>
        <div className="layout__side">{side}</div>
    </div>
);

Layout.defaultProps = {
    side: <div>Side</div>,
};

export default Layout;
