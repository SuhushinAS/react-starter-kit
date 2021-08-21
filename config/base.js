const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (options) => {
    const {dist, mode} = options;
    const isProd = 'production' === mode;
    const stats = {
        colors: true,
        errorDetails: true,
        reasons: isProd,
    };

    return {
        bail: isProd,
        devServer: isProd
            ? {}
            : {
                  contentBase: options.public,
                  disableHostCheck: true,
                  historyApiFallback: true,
                  host: '0.0.0.0',
                  hot: true,
                  port: 8000,
                  stats,
              },
        devtool: isProd ? false : 'eval-source-map',
        entry: 'index.jsx',
        mode,
        output: {
            clean: true,
            filename: '[name].min.js',
            library: ['reactStarterKit'],
            path: dist,
            publicPath: '/',
        },
        plugins: [new CopyWebpackPlugin({patterns: [{from: options.public, to: options.dist}]})],
        resolve: {
            extensions: ['.js', '.jsx'],
            fallback: {
                child_process: 'empty',
                dgram: 'empty',
                fs: 'empty',
                net: 'empty',
                tls: 'empty',
            },
            modules: ['src', 'node_modules'],
        },
        stats,
        target: isProd ? 'browserslist' : 'web',
        watchOptions: {aggregateTimeout: 300},
    };
};
