// @flow
import Scroll from 'modules/common/components/Scroll';
import Footer from 'modules/layout/components/Footer';
import Header from 'modules/layout/components/Header';
import React from 'react';
import './style.less';

type TLayoutProps = {
    children: React.Node,
};

/**
 * Лейаут.
 * @param {JSX.Element} children Дети.
 * @return {JSX.Element} Лейаут.
 */
export const Layout = ({children}: TLayoutProps) => {
    return (
        <div className="layout">
            <header className="layout__header">
                <Header />
            </header>
            {/* mobile-menu */}
            <div className="layout__scroll">
                <Scroll>
                    <div className="layout__inner">
                        <div className="layout__header-size" />
                        <main className="layout__body">{children}</main>
                        <footer className="layout__footer">
                            <Footer />
                        </footer>
                    </div>
                </Scroll>
            </div>
        </div>
    );
};

export default Layout;
