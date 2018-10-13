// @flow

import * as React from 'react';
import ReactBaron from 'react-baron/dist/es5.js';

import './style.less';

type TBaronProps = {
    children: React.Node,
    className?: string,
    rest?: any,
};

/**
 * Компонент для стилизации scroll.
 * @param {*} children Дочерние элементы.
 * @param {string} className Css-Класс.
 * @param {*} rest Прочие параметры.
 * @return {*} Представление.
 */
export default function Baron({children, className, ...props}: TBaronProps) {
    const clipperCls = ['baron__clipper'];
    if (className) {
        clipperCls.push(className);
    }
    return (
        <ReactBaron
            {...props}
            barCls="baron__bar"
            barOnCls="baron"
            clipperCls={clipperCls.join(' ')}
            scrollerCls="baron__scroller"
            trackCls="baron__track"
        >
            {children}
        </ReactBaron>
    );
}
