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
        devtool: isProd ? false : 'eval',
        node: {
            child_process: 'empty',
            dgram: 'empty',
            fs: 'empty',
            net: 'empty',
            tls: 'empty',
        },
        stats,
        watchOptions: {aggregateTimeout: 300},
        ...config,
    };
};

module.exports = development;
