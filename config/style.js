const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const getIsProd = require('./get-is-prod');

const getStyleLoader = ({mode}) => (getIsProd(mode) ? MiniCssExtractPlugin.loader : 'style-loader');

const getCssLoader = () => ({loader: 'css-loader', options: {esModule: false}});

const getLessLoader = ({root}) => ({loader: 'less-loader', options: {lessOptions: {math: 'always', paths: [root]}}});

const getPlugins = ({mode}) => (getIsProd(mode) ? [new MiniCssExtractPlugin({filename: '[name].min.css'})] : []);

module.exports = (config) => ({
  module: {
    rules: [
      {
        test: /\.css$/u,
        use: [getStyleLoader(config), getCssLoader(), 'postcss-loader'],
      },
      {
        test: /\.less$/u,
        use: [getStyleLoader(config), getCssLoader(), 'postcss-loader', getLessLoader(config)],
      },
    ],
  },
  plugins: getPlugins(config),
});
