const SvgSpriteLoaderPlugin = require('external-svg-sprite-loader');
const getIsProd = require('./get-is-prod');

const getClean = (options) => {
  if (getIsProd(options.mode)) {
    return true;
  }

  return {keep: /\.svg$/u};
};

module.exports = (options) => {
  return {
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
      clean: getClean(options),
    },
    plugins: [new SvgSpriteLoaderPlugin()],
  };
};
