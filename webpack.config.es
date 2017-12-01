const CleanWebpackPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    nodeEnv = process.env.NODE_ENV || 'development',
    isProd = 'production' === nodeEnv,
    path = require('path'),
    pathList = {
        dist: path.resolve(__dirname, 'dist'),
        src: path.resolve(__dirname, 'src'),
    },
    stats = {
        colors: true,
        errorDetails: true,
        reasons: isProd,
    },
    webpack = require('webpack');

const extractCSS = new ExtractTextPlugin({filename: '[name].min.css', disable: false, allChunks: true});

module.exports = {
    context: pathList.src,
    devServer: isProd ? {} : {
        contentBase: pathList.src,
        historyApiFallback: true,
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
    },
    module: getModuleList(isProd, extractCSS),
    output: {
        path: pathList.dist,
        filename: '[name].min.js',
        library: ['namespace', 'moduleName', '[name]'],
        publicPath: '/',
    },
    plugins: getPluginList(isProd, extractCSS, webpack),
    resolve: {
        extensions: ['.js', '.jsx', '.es'],
        modules: [
            pathList.src,
            path.resolve(__dirname, './node_modules'),
        ],
        alias: {src: pathList.src},
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
                test: /\.(less|css)$/,
                use: isProd ? extractCSS.extract({
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'less-loader',
                    ],
                }) : [
                    'css-loader',
                    'postcss-loader',
                    'less-loader',
                ],
            },
            {
                test: /\.(js|jsx|es)$/,
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
            {
                test: /.*\.(png|jpg|jpeg|gif|svg)$/i,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 5000,
                        name: 'img/[name].[ext]',
                    },
                },
            },
        ],
    };
}

function getPluginList(isProd, extractCSS, webpack) {
    const plugins = [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            minChunks: Infinity,
            filename: '[name].min.js',
        }),
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify(nodeEnv)},
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(pathList.src, './index.ejs'),
            production: isProd,
            inject: true,
        }),
    ];

    if (isProd) {
        plugins.push(
            new CleanWebpackPlugin(pathList.dist, {
                verbose: true,
                dry: false,
            }),
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
            }),
            extractCSS
        );
    } else {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NamedModulesPlugin()
        );
    }
    return plugins;
}