// @flow
import React from 'react';
import './style.less';

type TFooterProps = {};

/**
 * Пример компонента.
 */
export class Footer extends React.Component<TFooterProps> {
    /**
     * Вывести компонент.
     * @return {*} Представление.
     */
    render() {
        return <div className="footer">Footer</div>;
    }
}

export default Footer;
