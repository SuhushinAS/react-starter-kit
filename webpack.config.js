const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = 'production' === nodeEnv;
const publicPath = path.resolve(__dirname, 'www');
const srcPath = path.resolve(__dirname, 'src');
const stats = {
    colors: true,
    errorDetails: true,
    reasons: isProd,
};

module.exports = {
    bail: isProd,
    context: srcPath,
    devServer: getDevServer(),
    devtool: isProd ? false : 'eval',
    entry: 'index.jsx',
    module: {
        rules: getRuleList(),
    },
    node: {
        child_process: 'empty',
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    },
    optimization: getOptimization(),
    output: {
        filename: 'build/[name].min.js',
        library: ['reactStarterKit', '[name]'],
        path: publicPath,
        publicPath: '/',
    },
    plugins: getPluginList(),
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [srcPath, path.resolve(__dirname, './node_modules')],
    },
    stats,
    watchOptions: {aggregateTimeout: 100},
};

/**
 * Получить настройки сервера разработки.
 * @return {*} Настройки сервера разработки.
 */
function getDevServer() {
    if (isProd) {
        return {};
    }

    return {
        contentBase: publicPath,
        disableHostCheck: true,
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true,
        port: 8000,
        stats,
    };
}

/**
 * Получить настройки оптимизации.
 * @return {*} Настройки оптимизации.
 */
function getOptimization() {
    return {
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
        nodeEnv,
        splitChunks: {
            automaticNameDelimiter: '-',
            chunks: 'all',
        },
    };
}

/**
 * Фнукция возвращает набор правил обработки.
 * @returns {*[]} Набор правил обработки.
 */
function getRuleList() {
    const ruleListBase = getRuleListBase();
    const ruleListStyle = getRuleListStyle();
    const ruleListResource = getRuleListResource();

    return ruleListBase.concat(ruleListStyle, ruleListResource);
}

/**
 * Фнукция возвращает набор базовых правил обработки.
 * @returns {*[]} Набор правил обработки.
 */
function getRuleListBase() {
    return [
        {
            test: /\.html$/,
            use: {
                loader: 'file-loader',
                options: {name: 'build/[name].[hash:5].[ext]'},
            },
        },
        {
            exclude: /node_modules/,
            test: /\.(js|jsx)$/,
            use: {
                loader: 'babel-loader',
                options: {cacheDirectory: true},
            },
        },
    ];
}

/**
 * Фнукция возвращает набор правил обработки стилей.
 * @returns {*[]} Набор правил обработки.
 */
function getRuleListStyle() {
    return [
        {
            test: /\.css$/,
            use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'postcss-loader'],
        },
        {
            test: /\.less$/,
            use: [
                isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                'css-loader',
                'postcss-loader',
                {
                    loader: 'less-loader',
                    options: {
                        javascriptEnabled: true,
                    },
                },
            ],
        },
    ];
}

/**
 * Фнукция возвращает набор правил обработки ресурсов.
 * @returns {*[]} Набор правил обработки.
 */
function getRuleListResource() {
    return [
        {
            test: /\.(ttf|eot|woff|woff2)(\?[a-z0-9]+)?$/,
            use: {
                loader: 'file-loader',
                options: {name: 'build/fonts/[name].[hash:5].[ext]'},
            },
        },
        {
            test: /.*\.(png|jpg|jpeg|gif|svg)$/i,
            use: {
                loader: 'file-loader',
                options: {name: 'build/img/[name].[hash:5].[ext]'},
            },
        },
    ];
}

/**
 * Фнукция возвращает набор плагинов.
 * @returns {*[]} Набор модулей.
 */
function getPluginList() {
    const pluginListBase = getPluginListBase();
    let pluginListOptional = [];

    if (isProd) {
        pluginListOptional = getPluginListProd();
    } else {
        pluginListOptional = getPluginListDev();
    }

    return pluginListBase.concat(pluginListOptional);
}

/**
 * Фнукция возвращает базовый набор плагинов.
 * @returns {*[]} Набор модулей.
 */
function getPluginListBase() {
    return [
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify(nodeEnv)},
        }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            hash: true,
            inject: true,
            production: isProd,
            template: path.resolve(srcPath, 'index.htm'),
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ];
}

/**
 * Фнукция возвращает набор плагинов для Dev-режима.
 * @returns {*[]} Набор модулей.
 */
function getPluginListProd() {
    return [
        new CleanWebpackPlugin(path.resolve(publicPath, 'build'), {verbose: true}),
        new MiniCssExtractPlugin({
            allChunks: true,
            disable: false,
            filename: 'build/[name].min.css',
        }),
        new webpack.LoaderOptionsPlugin({
            debug: false,
            minimize: true,
            options: {
                customInterpolateName: (url) => url.toLowerCase(),
            },
        }),
        new webpack.NoEmitOnErrorsPlugin(),
    ];
}

/**
 * Фнукция возвращает набор плагинов для Dev-режима.
 * @returns {*[]} Набор модулей.
 */
function getPluginListDev() {
    return [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()];
}
