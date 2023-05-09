import {Scroll} from 'modules/common/components/Scroll';
import {Footer} from 'modules/layout/components/Footer';
import {Header} from 'modules/layout/components/Header';
import React from 'react';
import './Layout.less';

type TLayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({children}: TLayoutProps) => {
  return (
    <div className="Layout">
      <header className="Layout__Header">
        <Header />
      </header>
      {/* mobile-menu */}
      <div className="Layout__Scroll">
        <Scroll dirList={['h', 'v']}>
          <div className="Layout__Inner">
            <div className="Layout__HeaderSize" />
            <main className="Layout__Body">{children}</main>
            <footer className="Layout__Footer">
              <Footer />
            </footer>
          </div>
        </Scroll>
      </div>
    </div>
  );
};
