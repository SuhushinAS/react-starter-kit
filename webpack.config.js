const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const compose = require('./config/compose');
const development = require('./config/development');
const optimization = require('./config/optimization');

const publicPath = path.resolve(__dirname, 'www');
const srcPath = path.resolve(__dirname, 'src');

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
        development({contentBase: publicPath})
    )({
        context: srcPath,
        entry: 'index.jsx',
        mode,
        module: {
            rules: [
                {
                    test: /\.html$/u,
                    use: {
                        loader: 'file-loader',
                        options: {name: 'build/[name].[hash:5].[ext]'},
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
                    use: [
                        styleLoader,
                        'css-loader',
                        'postcss-loader',
                        {
                            loader: 'less-loader',
                            options: {javascriptEnabled: true},
                        },
                    ],
                },
                {
                    test: /\.(ttf|eot|woff|woff2)(\?[a-z0-9]+)?$/u,
                    use: {
                        loader: 'file-loader',
                        options: {name: 'build/fonts/[name].[hash:5].[ext]'},
                    },
                },
                {
                    test: /.*\.(png|jpg|jpeg|gif|svg)$/iu,
                    use: {
                        loader: 'file-loader',
                        options: {name: 'build/img/[name].[hash:5].[ext]'},
                    },
                },
            ],
        },
        output: {
            filename: 'build/[name].min.js',
            library: ['reactStarterKit', '[name]'],
            path: publicPath,
            publicPath: '/',
        },
        plugins: [
            ...(isProd ? [new CleanWebpackPlugin(path.resolve(publicPath, 'build'), {verbose: true})] : []),
            new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify(mode)}}),
            new HtmlWebpackPlugin({
                filename: 'index.html',
                hash: true,
                inject: true,
                production: isProd,
                template: path.resolve(srcPath, 'index.htm'),
            }),
            new webpack.IgnorePlugin(/^\.\/locale$/u, /moment$/u),
            ...(isProd
                ? [
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
                  ]
                : [new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin()]),
        ],
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: ['src', 'node_modules'],
        },
    });
}

module.exports = webpackConfig;
