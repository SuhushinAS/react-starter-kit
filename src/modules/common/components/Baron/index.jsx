// @flow

import bemCn from 'bem-cn';
import PropTypes from 'prop-types';
import * as React from 'react';
import ReactBaron from 'react-baron';

import './style.less';

const block = bemCn('baron');
const bem = {
    barCls: block('bar')(),
    barOnCls: block(),
    clipperCls: block('clipper'),
    scrollerCls: block('scroller')(),
    trackCls: block('track')(),
};

type BaronTypeProps = {
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
export default function Baron({children, className, ...rest}: BaronTypeProps) {
    return (
        <ReactBaron {...rest} {...bem} clipperCls={bem.clipperCls.mix(className)()}>
            {children}
        </ReactBaron>
    );
}

Baron.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    rest: PropTypes.any,
};
