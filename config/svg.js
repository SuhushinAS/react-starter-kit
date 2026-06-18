const path = require('path');
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin').default;

module.exports = (options) => {
  return {
    module: {
      rules: [
        {
          include: path.join(options.root, options.src, 'icons'),
          test: /\.svg$/u,
          type: 'asset/source',
        },
      ],
    },
    plugins: [
      new SVGSpritemapPlugin('src/icons/**/*.svg', {
        output: {
          filename: 'sprite.svg',
        },
        sprite: {
          prefix: false,
        },
      }),
    ],
  };
};
