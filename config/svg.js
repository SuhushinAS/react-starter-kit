const SvgSpriteLoaderPlugin = require('external-svg-sprite-loader');
const getIsProd = require('./get-is-prod');

module.exports = ({mode}) => ({
  module: {
    rules: [
      {
        test: /\.svg$/u,
        use: [
          {
            loader: SvgSpriteLoaderPlugin.loader,
            options: {name: 'sprite.svg'},
          },
        ],
      },
    ],
  },
  output: {
    clean: getIsProd(mode) ? true : {keep: /\.svg$/u},
  },
  plugins: [new SvgSpriteLoaderPlugin()],
});
