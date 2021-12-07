const webpack = require('webpack');

/**
 * Обработка имён файлов.
 * @param url Путь до файла.
 * @return {*} Имя файлов.
 */
const customInterpolateName = (url) => url.toLowerCase();

const LoaderOptionsPluginOptions = {
  debug: false,
  minimize: true,
  options: {customInterpolateName},
};

const IgnorePluginOptions = {contextRegExp: /moment$/u, resourceRegExp: /^\.\/locale$/u};

/**
 * Получить плагины.
 * @param {boolean} isProd Продакшен.
 * @return {*} Плагины.
 */
const getPlugins = ({mode}) =>
  'production' === mode
    ? [new webpack.LoaderOptionsPlugin(LoaderOptionsPluginOptions)]
    : [new webpack.HotModuleReplacementPlugin()];

module.exports = (config) => ({
  module: {
    rules: [
      {
        exclude: /node_modules/u,
        test: /\.(js|jsx|ts|tsx)$/u,
        use: [{ loader: 'babel-loader', options: { cacheDirectory: true } }],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify(mode) } }),
    new webpack.IgnorePlugin(IgnorePluginOptions),
    ...getPlugins(config),
  ],
});
