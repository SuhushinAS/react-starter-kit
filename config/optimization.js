const OptimizeCSSAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

/**
 * Получить конфигурацию webpack.
 * @param {*} config конфигурация webpack.
 * @return {*} конфигурация webpack.
 */
function optimization(config) {
    const {mode} = config;

    return {
        ...config,
        optimization: {
            chunkIds: 'named',
            emitOnErrors: false,
            minimizer: [
                new TerserWebpackPlugin({
                    extractComments: false,
                    terserOptions: {
                        output: {
                            comments: false,
                        },
                    },
                }),
                new OptimizeCSSAssetsWebpackPlugin({
                    cssProcessorOptions: {
                        autoprefixer: false,
                        mergeIdents: false,
                        reduceIdents: false,
                        safe: true,
                        zIndex: false,
                    },
                }),
            ],
            moduleIds: 'named',
            nodeEnv: mode,
            splitChunks: {
                cacheGroups: {
                    common: {
                        chunks: 'initial',
                        minChunks: 2,
                        name: 'common',
                    },
                    icons: {
                        chunks: 'all',
                        name: 'icons',
                        test: /\.svg$/u,
                    },
                    vendor: {
                        chunks: 'all',
                        name: 'vendor',
                        test: /[\\/]node_modules[\\/]/u,
                    },
                },
            },
        },
    };
}

module.exports = optimization;
