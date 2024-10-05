const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (options) => {
  return {
    plugins: options.pages.map((page) => {
      return new HtmlWebpackPlugin({
        filename: `${page}.html`,
        hash: true,
        inject: true,
        minify: false,
        scriptLoading: 'defer',
        template: path.join(options.src, `${page}.html`),
      });
    }),
  };
};
