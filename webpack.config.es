const autoprefixer = require('autoprefixer'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    nodeEnv = process.env.NODE_ENV || 'development',
    isProd = nodeEnv === 'production',
    path = require('path'),
    gradientTransparencyFix = require('postcss-gradient-transparency-fix'),
    ProgressBarPlugin = require('progress-bar-webpack-plugin'),
    webpack = require('webpack'),
    sourcePath = path.resolve(__dirname, 'src'),
    staticsPath = path.resolve(__dirname, 'dist');

const extractCSS = new ExtractTextPlugin({filename: '[name].min.css', disable: false, allChunks: true});

const plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: Infinity,
        filename: '[name].bundle.min.js',
    }),
    new webpack.DefinePlugin({
        'process.env': {NODE_ENV: JSON.stringify(nodeEnv)},
    }),
    new HtmlWebpackPlugin({
        template: sourcePath + '/index.ejs',
        production: isProd,
        inject: true,
    }),
    new webpack.LoaderOptionsPlugin({
        options: {
            postcss: [
                autoprefixer(),
                gradientTransparencyFix,
            ],
        },
    }),
    new ProgressBarPlugin(),
];

if (isProd) {
    plugins.push(
        new CleanWebpackPlugin(staticsPath, {
            verbose: true,
            dry: false,
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
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

module.exports = {
    devtool: isProd ? false : 'eval',
    watchOptions: {
        aggregateTimeout: 100
    },
    context: sourcePath,
    entry: {
        'module-name': [
            'babel-polyfill',
            'react',
            'react-dom',
            'react-redux',
            'redux',
            'whatwg-fetch',
        ],
        index: 'index',
    },
    output: {
        path: staticsPath,
        filename: '[name].min.js',
        library: ['moduleName', '[name]'],
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: 'file-loader',
                    options: {name: '[name].[ext]'}
                }
            },
            {
                test: /\.(less|css)$/,
                use: isProd
                    ? extractCSS.extract({
                            use: [
                                'css-loader',
                                'postcss-loader',
                                'less-loader',
                            ],
                        })
                    : [
                        'css-loader',
                        'postcss-loader',
                        'less-loader'
                    ]
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
    },
    resolve: {
        extensions: ['.js', '.jsx', '.es'],
        modules: [
            sourcePath,
            path.resolve(__dirname, './node_modules'),
        ],
        alias: {
            src: sourcePath,
            vendor: path.resolve(__dirname, './../../'),
        },
    },
    plugins: plugins,
    devServer: !isProd
        ? {
            contentBase: sourcePath,
            historyApiFallback: true,
            port: 3000,
            hot: true,
            compress: isProd,
            stats: {colors: true},
        }
        : {},
};
