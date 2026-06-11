const CopyWebpackPlugin = require('copy-webpack-plugin');
const getIsProd = require('./get-is-prod');
const path = require('path');

const ignoredStaticFiles = ['**/.DS_Store', '**/Thumbs.db'];

const getPlugins = (options) => {
  return [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: options.public,
          globOptions: {
            ignore: ignoredStaticFiles,
          },
          to: options.dist,
        },
      ],
    }),
  ];
};

const getDevServer = (options) => {
  const result = {
    client: {
      overlay: {
        errors: true,
        warnings: false,
      },
    },
  };

  if (getIsProd(options.mode)) {
    return result;
  }

  return {
    ...result,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 8000,
    static: options.public,
  };
};

module.exports = (options) => {
  const isProd = getIsProd(options.mode);
  const filename = isProd ? '[name].[contenthash:8].min.js' : '[name].min.js';

  return {
    bail: isProd,
    devServer: getDevServer(options),
    devtool: isProd ? false : 'eval-source-map',
    entry: path.join(options.root, options.src, 'index.tsx'),
    mode: options.mode,
    output: {
      clean: true,
      chunkFilename: filename,
      filename,
      library: ['reactStarterKit'],
      path: options.dist,
      publicPath: '/',
    },
    plugins: getPlugins(options),
    resolve: {
      alias: {
        src: path.join(options.root, options.src),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      fallback: {
        child_process: 'empty',
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
      },
      modules: ['node_modules'],
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
