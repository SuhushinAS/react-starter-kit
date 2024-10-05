const CopyWebpackPlugin = require('copy-webpack-plugin');
const getIsProd = require('./get-is-prod');
const webpack = require('webpack');

const getPlugins = (options) => {
  const result = [
    new CopyWebpackPlugin({
      patterns: [{from: options.public, to: options.dist}],
    }),
  ];

  if (!getIsProd(options.mode)) {
    result.push(new webpack.HotModuleReplacementPlugin());
  }

  return result;
};

const getDevServer = (options) => {
  if (getIsProd(options.mode)) {
    return {};
  }

  return {
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    port: 8000,
    static: options.public,
  };
};

module.exports = (options) => {
  const isProd = getIsProd(options.mode);

  return {
    bail: isProd,
    devServer: getDevServer(options),
    devtool: isProd ? false : 'eval-source-map',
    entry: 'index.tsx',
    mode: options.mode,
    output: {
      clean: true,
      filename: '[name].min.js',
      library: ['reactStarterKit'],
      path: options.dist,
      publicPath: '/',
    },
    plugins: getPlugins(options),
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      fallback: {
        child_process: 'empty',
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      },
      modules: ['src', 'node_modules'],
    },
    stats: {
      colors: true,
      errorDetails: true,
      reasons: isProd,
    },
    target: isProd ? 'browserslist' : 'web',
    watchOptions: {aggregateTimeout: 300},
  };
};
