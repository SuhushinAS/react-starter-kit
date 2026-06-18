const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

module.exports = (options) => {
  return {
    optimization: {
      chunkIds: 'deterministic',
      emitOnErrors: false,
      minimizer: [
        new TerserWebpackPlugin({
          extractComments: false,
          terserOptions: {output: {comments: false}},
        }),
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: ['default', {discardComments: {removeAll: true}}],
          },
        }),
      ],
      moduleIds: 'deterministic',
      nodeEnv: options.mode,
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        cacheGroups: {
          common: {
            minChunks: 2,
            name: 'common',
            priority: 10,
            reuseExistingChunk: true,
          },
          framework: {
            name: 'framework',
            priority: 30,
            reuseExistingChunk: true,
            test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|react-redux|redux|@reduxjs[\\/]toolkit)([\\/]|$)/u,
          },
          vendor: {
            name: 'vendor',
            priority: 20,
            reuseExistingChunk: true,
            test: /[\\/]node_modules[\\/]/u,
          },
        },
      },
    },
  };
};
