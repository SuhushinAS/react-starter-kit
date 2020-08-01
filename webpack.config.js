const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');
const compose = require('./config/compose');
const development = require('./config/development');
const optimization = require('./config/optimization');

const paths = {
    dist: path.join(__dirname, 'www'),
    public: path.join(__dirname, 'public'),
    src: 'src',
};

/**
 * Получить конфигурацию webpack.
 * @param env Окружение.
 * @param argv Аргументы
 * @returns {*} Конфигурация webpack.
 */
function webpackConfig(env, argv) {
    const {mode} = argv;
    const isProd = 'production' === mode;
    const styleLoader = isProd ? MiniCssExtractPlugin.loader : 'style-loader';

    return compose(
        optimization,
        development({contentBase: paths.public})
    )({
        entry: 'index.jsx',
        mode,
        module: {
            rules: [
                {
                    test: /\.html$/u,
                    use: {
                        loader: 'file-loader',
                        options: {name: '[name].[hash:5].[ext]'},
                    },
                },
                {
                    exclude: /node_modules/u,
                    test: /\.(js|jsx)$/u,
                    use: {
                        loader: 'babel-loader',
                        options: {cacheDirectory: true},
                    },
                },
                {
                    test: /\.css$/u,
                    use: [styleLoader, 'css-loader', 'postcss-loader'],
                },
                {
                    test: /\.less$/u,
                    use: [styleLoader, 'css-loader', 'postcss-loader', 'less-loader'],
                },
                {
                    test: /\.(ttf|eot|woff|woff2)(\?[a-z0-9]+)?$/u,
                    use: {
                        loader: 'file-loader',
                        options: {name: 'fonts/[name].[hash:5].[ext]'},
                    },
                },
                {
                    test: /.*\.(png|jpg|jpeg|gif|svg)$/iu,
                    use: {
                        loader: 'file-loader',
                        options: {name: 'images/[name].[hash:5].[ext]'},
                    },
                },
            ],
        },
        output: {
            filename: 'js/[name].min.js',
            library: ['reactStarterKit', '[name]'],
            path: paths.dist,
            publicPath: '/',
        },
        plugins: [
            ...(isProd ? [new CleanWebpackPlugin({dry: false, verbose: true})] : []),
            new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify(mode)}}),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                hash: true,
                inject: true,
                production: isProd,
                template: path.join(paths.src, 'index.tpl'),
            }),
            new CopyPlugin({patterns: [{from: paths.public, to: paths.dist}]}),
            new webpack.IgnorePlugin(/^\.\/locale$/u, /moment$/u),
            // new WorkboxPlugin.GenerateSW({
            //     clientsClaim: true,
            //     skipWaiting: true,
            // }),
            ...(isProd
                ? [
                      new MiniCssExtractPlugin({
                          allChunks: true,
                          disable: false,
                          filename: 'css/[name].min.css',
                      }),
                      new webpack.LoaderOptionsPlugin({
                          debug: false,
                          minimize: true,
                          options: {customInterpolateName: (url) => url.toLowerCase()},
                      }),
                  ]
                : [new webpack.HotModuleReplacementPlugin()]),
        ],
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: ['src', 'node_modules'],
        },
    });
}

module.exports = webpackConfig;
