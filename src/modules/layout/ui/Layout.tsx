import { ReactNode } from 'react';
import { Scroll } from 'src/modules/common/ui/Scroll';
import { Footer } from 'src/modules/layout/ui/Footer';
import { Header } from 'src/modules/layout/ui/Header';
import './Layout.less';

type TLayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: TLayoutProps) => {
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
