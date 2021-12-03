const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ pages, src }) => ({
  plugins: pages.map(
    (page) =>
      new HtmlWebpackPlugin({
        filename: `${page}.html`,
        hash: true,
        inject: true,
        minify: false,
        scriptLoading: 'defer',
        template: path.join(src, `${page}.html`),
      })
  ),
});
