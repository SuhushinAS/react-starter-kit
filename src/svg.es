// @flow

import * as svgXHR from 'webpack-svgstore-plugin/src/helpers/svgxhr';

const svg = {
    name: './sprite.svg',
    path: './svg/*.svg',
};

export default svgXHR(svg);
