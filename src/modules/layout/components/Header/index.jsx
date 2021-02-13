// @flow
import SvgIcon from 'modules/common/components/SvgIcon';
import Menu from 'modules/layout/components/Menu';
import LocaleSelector from 'modules/locale/components/LocaleSelector';
import React from 'react';
import {Link} from 'react-router-dom';
import './style.less';

type THeaderProps = {};

/**
 * Пример компонента.
 */
export class Header extends React.Component<THeaderProps> {
    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
        return (
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
                        <LocaleSelector />
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
