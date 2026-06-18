import {SvgIcon} from 'src/modules/common/ui/SvgIcon';
import {Menu} from 'src/modules/layout/ui/Menu';
import {LocaleSelectorContainer} from 'src/modules/locale/ui/LocaleSelector';
import React from 'react';
import {Link} from 'react-router-dom';
import './Header.less';

export const Header = () => {
  return (
    <div className="Header">
      <div className="Header__Inner box">
        <div className="Header__Hamburger">
          <button aria-label="Menu" className="Header__HamburgerButton">
            <SvgIcon name="logo" />
          </button>
        </div>
        <Link
          aria-label="Read more about Seminole tax hike"
          className="Header__Logo"
          to="/"
        >
          <SvgIcon name="logo" />
        </Link>
        <div className="Header__Menu">
          <Menu />
        </div>
        <div className="Header__Divider" />
        <div className="Header__Lang">
          <LocaleSelectorContainer />
        </div>
      </div>
    </div>
  );
};
