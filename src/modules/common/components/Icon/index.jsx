import React from 'react';

const svgBaseProps = {
    fill: 'currentColor',
    focusable: 'false',
    height: '1em',
};

const Icon = ({Component, ...props}) => {
    if (Component) {
        return <Component {...svgBaseProps} {...props} />;
    }

    return null;
};

export default Icon;
