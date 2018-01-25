const CleanWebpackPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    nodeEnv = process.env.NODE_ENV || 'development',
    isProd = 'production' === nodeEnv,
    path = require('path'),
    pathList = {
        dist: path.resolve(__dirname, 'www/build'),
        public: path.resolve(__dirname, 'www'),
        src: path.resolve(__dirname, 'src'),
    },
    stats = {
        colors: true,
        errorDetails: true,
        reasons: isProd,
    },
    SvgStore = require('webpack-svgstore-plugin'),
    webpack = require('webpack');

const extractCSS = new ExtractTextPlugin({filename: '[name].min.css', disable: false, allChunks: true});

module.exports = {
    bail: isProd,
    context: pathList.src,
    devServer: isProd ? {} : {
        contentBase: pathList.public,
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: true,
        port: 3000,
        stats,
    },
    devtool: isProd ? false : 'eval',
    entry: {
        vendor: [
            'babel-polyfill',
            'react',
            'react-dom',
            'react-redux',
            'redux',
            'whatwg-fetch',
        ],
        index: 'index',
        svg: 'svg',
    },
    module: getModuleList(isProd, extractCSS),
    node: {
        dgram: 'empty',
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        child_process: 'empty',
    },
    output: {
        filename: '[name].min.js',
        library: ['namespace', 'moduleName', '[name]'],
        path: pathList.dist,
        publicPath: '/build/',
    },
    plugins: getPluginList(isProd, extractCSS, webpack),
    resolve: {
        extensions: ['.es', '.js', '.jsx'],
        modules: [
            pathList.src,
            path.resolve(__dirname, './node_modules'),
        ],
    },
    stats,
    watchOptions: {aggregateTimeout: 100},
};


function getModuleList(isProd, extractCSS) {
    return {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: 'file-loader',
                    options: {name: '[name].[ext]'},
                },
            },
            {
                test: /\.css$/,
                use: isProd ? extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'postcss-loader',
                    ],
                }) : [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                ],
            },
            {
                test: /\.less$/,
                use: isProd ? extractCSS.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'less-loader',
                    ],
                }) : [
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(es|js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {cacheDirectory: true},
                },
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {name: 'fonts/[name].[ext]'},
                },
            },
            // {
            //     test: /.*\.(png|jpg|jpeg|gif|svg)$/i,
            //     use: {
            //         loader: 'url-loader',
            //         options: {
            //             limit: 5000,
            //             name: 'img/[name].[ext]',
            //         },
            //     },
            // },
            {
                test: /.*\.(png|jpg|jpeg|gif|svg)$/i,
                use: {
                    loader: 'file-loader',
                    options: {name: 'img/[name].[ext]'},
                },
            },
        ],
    };
}

function getPluginList(isProd, extractCSS, webpack) {
    const plugins = [
        new webpack.optimize.CommonsChunkPlugin({
            filename: '[name].min.js',
            minChunks: Infinity,
            name: 'common',
        }),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify(nodeEnv)},
        }),
        new HtmlWebpackPlugin({
            alwaysWriteToDisk: true,
            filename: path.resolve(pathList.public, 'index.html'),
            inject: true,
            template: path.resolve(pathList.src, './index.htm'), // TODO При расширении .html почему-то глючит
        }),
        new HtmlWebpackHarddiskPlugin(),
        new SvgStore({
            svgOptions: {
                plugins: [
                    {
                        removeTitle: false,
                        sortAttrs: true,
                        removeUselessDefs: false,
                        removeEmptyContainers: false,
                    },
                ],
            },
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ];

    if (isProd) {
        plugins.push(
            new CleanWebpackPlugin(pathList.dist, {
                verbose: true,
                dry: false,
            }),
            extractCSS,
            new webpack.LoaderOptionsPlugin({
                minimize: true,
                debug: false,
            }),
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false,
                    screw_ie8: true,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true,
                },
                output: {comments: false},
            })
        );
    } else {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        );
    }
    return plugins;
}