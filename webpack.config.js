const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const SvgSpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const webpack = require('webpack');
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
                    use: [styleLoader, 'css-loader', 'postcss-loader', {loader: 'less-loader', options: {lessOptions: {paths: [__dirname]}}}],
                },
                {
                    test: /\.(ttf|eot|woff|woff2)(\?[a-z0-9]+)?$/u,
                    use: {
                        loader: 'file-loader',
                        options: {name: 'fonts/[name].[ext]'},
                    },
                },
                {
                    test: /\.svg$/u,
                    use: {
                        loader: 'svg-sprite-loader',
                        options: {
                            esModule: false,
                            extract: true,
                            spriteFilename: 'sprite.svg',
                        },
                    },
                },
                {
                    test: /.*\.(png|jpg|jpeg|gif)$/iu,
                    use: {
                        loader: 'file-loader',
                        options: {name: 'images/[name].[ext]'},
                    },
                },
            ],
        },
        output: {
            filename: '[name].min.js',
            library: ['reactStarterKit'],
            path: paths.dist,
            publicPath: '/',
        },
        plugins: [
            ...getPrePlugins(isProd),
            new webpack.DefinePlugin({'process.env': {NODE_ENV: JSON.stringify(mode)}}),
            getHTML('index'),
            new SvgSpriteLoaderPlugin(),
            new CopyWebpackPlugin({patterns: [{from: paths.public, to: paths.dist}]}),
            new webpack.IgnorePlugin({contextRegExp: /moment$/u, resourceRegExp: /^\.\/locale$/u}),
            ...getPostPlugins(isProd),
        ],
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: ['src', 'node_modules'],
        },
    });
}

/**
 * Получить настройки для HtmlWebpackPlugin.
 * @param {string} page Страница.
 * @returns {HtmlWebpackPlugin} Настройки для HtmlWebpackPlugin.
 */
function getHTML(page) {
    return new HtmlWebpackPlugin({
        filename: `${page}.html`,
        hash: true,
        inject: true,
        minify: false,
        scriptLoading: 'defer',
        template: path.join(paths.src, `${page}.html`),
    });
}

/**
 * Получить набор начальных плагинов.
 * @param {boolean} isProd Продакшн.
 * @returns {*} Набор начальных плагинов.
 */
function getPrePlugins(isProd) {
    if (isProd) {
        return [new CleanWebpackPlugin({dry: false, verbose: true})];
    }

    return [];
}

/**
 * Получить набор конечных плагинов.
 * @param {boolean} isProd Продакшн.
 * @returns {*} Набор конечных плагинов.
 */
function getPostPlugins(isProd) {
    if (isProd) {
        return [
            new MiniCssExtractPlugin({filename: '[name].min.css'}),
            new webpack.LoaderOptionsPlugin({
                debug: false,
                minimize: true,
                options: {customInterpolateName: (url) => url.toLowerCase()},
            }),
        ];
    }

    return [new webpack.HotModuleReplacementPlugin()];
}

module.exports = webpackConfig;
