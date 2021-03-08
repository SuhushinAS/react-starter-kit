/**
 * Получить конфигурацию webpack.
 * @param {*} config конфигурация webpack.
 * @return {*} конфигурация webpack.
 */
const development = ({contentBase}) => (config) => {
    const {mode} = config;
    const isProd = 'production' === mode;
    const stats = {
        colors: true,
        errorDetails: true,
        reasons: isProd,
    };

    return {
        ...config,
        bail: isProd,
        devServer: isProd
            ? {}
            : {
                  contentBase,
                  disableHostCheck: true,
                  historyApiFallback: true,
                  host: '0.0.0.0',
                  hot: true,
                  port: 8000,
                  stats,
              },
        devtool: isProd ? false : 'eval-source-map',
        resolve: {
            fallback: {
                child_process: 'empty',
                dgram: 'empty',
                fs: 'empty',
                net: 'empty',
                tls: 'empty',
            },
            ...config.resolve,
        },
        stats,
        target: isProd ? 'browserslist' : 'web',
        watchOptions: {aggregateTimeout: 300},
    };
};

module.exports = development;
