import {SvgIcon} from 'modules/common/components/SvgIcon';
import {Menu} from 'modules/layout/components/Menu';
import {LocaleSelectorContainer} from 'modules/locale/components/LocaleSelector';
import React from 'react';
import {Link} from 'react-router-dom';
import './style.less';

/**
 * Пример компонента.
 * @return {JSX.Element} Представление.
 */
export const Header = () => (
  <div className="header">
    <div className="header__inner box">
      <div className="header__hamburger">
        <button aria-label="Menu" className="header__hamburger-button">
          <SvgIcon name="logo" />
        </button>
      </div>
      <Link className="header__logo" to="/">
        <SvgIcon name="logo" />
      </Link>
      <div className="header__menu">
        <Menu />
      </div>
      <div className="header__divider" />
      <div className="header__lang">
        <LocaleSelectorContainer />
      </div>
    </div>
  </div>
);
