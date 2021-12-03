const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * Получить Загрузчик стилей.
 * @param mode Режим.
 * @return {*} Загрузчик стилей.
 */
const getStyleLoader = ({mode}) => ('production' === mode ? MiniCssExtractPlugin.loader : 'style-loader');

/**
 * Получить Загрузчик CSS.
 * @return {*} Загрузчик CSS.
 */
const getCssLoader = () => ({loader: 'css-loader', options: {esModule: false}});

/**
 * Получить Загрузчик Less.
 * @param mode Режим.
 * @return {*} Загрузчик Less.
 */
const getLessLoader = ({root}) => ({loader: 'less-loader', options: {lessOptions: {paths: [root]}}});

/**
 * Получить Плагины.
 * @param root Корень.
 * @return {*} Плагины.
 */
const getPlugins = ({mode}) => 'production' === mode ? [new MiniCssExtractPlugin({filename: '[name].min.css'})] : [];

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
