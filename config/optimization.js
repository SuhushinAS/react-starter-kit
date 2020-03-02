const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

/**
 * Получить конфигурацию webpack.
 * @param {*} config конфигурация webpack.
 * @return {*} конфигурация webpack.
 */
function optimization(config) {
    const {mode} = config;

    return {
        optimization: {
            minimizer: [
                new TerserPlugin({
                    extractComments: false,
                    terserOptions: {
                        output: {
                            comments: false,
                        },
                    },
                }),
                new OptimizeCSSAssetsPlugin({
                    cssProcessorOptions: {
                        autoprefixer: false,
                        mergeIdents: false,
                        reduceIdents: false,
                        safe: true,
                        zIndex: false,
                    },
                }),
            ],
            noEmitOnErrors: true,
            nodeEnv: mode,
            splitChunks: {
                automaticNameDelimiter: '-',
                chunks: 'all',
            },
        },
        ...config,
    };
}

module.exports = optimization;
