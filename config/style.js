const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getIsProd = require('./get-is-prod');

const getStyleLoader = (options) => {
  if (getIsProd(options.mode)) {
    return MiniCssExtractPlugin.loader;
  }

  return 'style-loader';
};

const getCssLoader = () => {
  return {
    loader: 'css-loader',
    options: {esModule: false},
  };
};

const getLessLoader = (options) => {
  return {
    loader: 'less-loader',
    options: {lessOptions: {math: 'always', paths: [options.root]}},
  };
};

const getPlugins = (options) => {
  if (getIsProd(options.mode)) {
    return [
      new MiniCssExtractPlugin({
        chunkFilename: '[name].[contenthash:8].min.css',
        filename: '[name].[contenthash:8].min.css',
      }),
    ];
  }

  return [];
};

module.exports = (options) => {
  return {
    module: {
      rules: [
        {
          test: /\.css$/u,
          use: [getStyleLoader(options), getCssLoader(), 'postcss-loader'],
        },
        {
          test: /\.less$/u,
          use: [
            getStyleLoader(options),
            getCssLoader(),
            'postcss-loader',
            getLessLoader(options),
          ],
        },
      ],
    },
    plugins: getPlugins(options),
  };
};
