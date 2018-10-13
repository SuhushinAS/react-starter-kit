const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeEnv = process.env.NODE_ENV || 'development';
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const isProd = 'production' === nodeEnv;
const path = require('path');
const pathList = {
    dist: path.resolve(__dirname, 'www/build'),
    public: path.resolve(__dirname, 'www'),
    src: path.resolve(__dirname, 'src'),
};
const stats = {
    colors: true,
    errorDetails: true,
    reasons: isProd,
};
const webpack = require('webpack');

module.exports = {
    bail: isProd,
    context: pathList.src,
    devServer: isProd ? {} : {
        contentBase: pathList.public,
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true,
        port: 8000,
        stats,
    },
    devtool: isProd ? false : 'eval',
    entry: {
        common: [
            'react',
            'react-dom',
            'react-redux',
            'redux',
            'whatwg-fetch',
        ],
        index: 'index',
    },
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
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                uglifyOptions: {
                    compress: {
                        comparisons: true,
                        conditionals: true,
                        dead_code: true,
                        evaluate: true,
                        if_return: true,
                        join_vars: true,
                        sequences: true,
                        unused: true,
                        warnings: false,
                    },
                    output: {
                        ascii_only: true,
                        comments: false,
                    },
                    sourceMap: false,
                },
            }),
            new OptimizeCSSAssetsPlugin(),
        ],
        splitChunks: {
            cacheGroups: {
                common: {
                    chunks: 'all',
                    name: 'common',
                    test: /[\\/]node_modules[\\/]/,
                },
            },
        },
    },
    output: {
        filename: '[name].min.js',
        library: ['mag', 'MAGDelivery', '[name]'],
        path: pathList.dist,
        publicPath: '/build/',
    },
    plugins: getPluginList(),
    resolve: {
        extensions: ['.es', '.js', '.jsx'],
        modules: [
            './',
            './src/',
            'node_modules',
            pathList.src,
            path.resolve(__dirname, './node_modules'),
        ],
    },
    stats,
    watchOptions: {aggregateTimeout: 100},
};

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
                options: {name: '[name].[hash:5].[ext]'},
            },
        },
        {
            exclude: /node_modules/,
            test: /\.(es|js|jsx)$/,
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
            use: [
                isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                'css-loader',
                'postcss-loader',
            ],
        },
        {
            test: /\.less$/,
            use: [
                isProd ? MiniCssExtractPlugin.loader : 'style-loader',
                'css-loader',
                'postcss-loader',
                'less-loader',
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
                options: {name: 'fonts/[name].[hash:5].[ext]'},
            },
        },
        {
            test: /.*\.(png|jpg|jpeg|gif|svg)$/i,
            use: {
                loader: 'file-loader',
                options: {name: 'img/[name].[hash:5].[ext]'},
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
            alwaysWriteToDisk: true,
            filename: path.resolve(pathList.public, './index.html'),
            hash: true,
            inject: true,
            template: path.resolve(pathList.src, './index.htm'),
        }),
        new HtmlWebpackHarddiskPlugin(),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ];
}

/**
 * Фнукция возвращает набор плагинов для Dev-режима.
 * @returns {*[]} Набор модулей.
 */
function getPluginListProd() {
    return [
        new CleanWebpackPlugin(pathList.dist, {
            dry: false,
            verbose: true,
        }),
        new MiniCssExtractPlugin({
            allChunks: true,
            disable: false,
            filename: '[name].min.css',
        }),
        new webpack.LoaderOptionsPlugin({
            debug: false,
            minimize: true,
        }),
        new webpack.NoEmitOnErrorsPlugin(),
    ];
}

/**
 * Фнукция возвращает набор плагинов для Dev-режима.
 * @returns {*[]} Набор модулей.
 */
function getPluginListDev() {
    return [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
    ];
}
