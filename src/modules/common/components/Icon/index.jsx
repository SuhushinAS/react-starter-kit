import React from 'react';

const svgBaseProps = {
    fill: 'currentColor',
    focusable: 'false',
    height: '1em',
};

/**
 * Вывести иконку.
 * @param {*} Component Компонент.
 * @param {*} props Свойства.
 * @return {*} Иконка.
 */
const Icon = ({Component, ...props}) => {
    if (Component) {
        return <Component {...svgBaseProps} {...props} />;
    }

    return null;
};

export default Icon;
