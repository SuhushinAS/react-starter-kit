const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (options) => {
    const {dist, mode} = options;
    const isProd = 'production' === mode;

    return {
        bail: isProd,
        devServer: isProd
            ? {}
            : {
                  historyApiFallback: true,
                  host: '0.0.0.0',
                  hot: true,
                  port: 8000,
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
        stats: {
            colors: true,
            errorDetails: true,
            reasons: isProd,
        },
        target: isProd ? 'browserslist' : 'web',
        watchOptions: {aggregateTimeout: 300},
    };
};
