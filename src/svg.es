import SvgXHR from 'webpack-svgstore-plugin/src/helpers/svgxhr';

const __svg__ = {
    path: './svg/*.svg',
    name: './sprite.svg',
};

export default SvgXHR(__svg__);