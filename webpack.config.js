const path = require('path');
const {configs, merge} = require('@suhushinas/webpack-config');

const {asset, base, html, optimization, script, style, svg} = configs;

/**
 * Получить конфигурацию webpack.
 * @param env Окружение.
 * @param argv Аргументы
 * @returns {*} Конфигурация webpack.
 */
function webpackConfig(env, argv) {
    const {mode} = argv;
    const root = __dirname;
    const options = {
        dist: path.join(root, 'www'),
        mode,
        pages: ['index'],
        public: path.join(root, 'public'),
        root,
        src: 'src',
    };

    const result = {};

    return merge(asset(options), base(options), html(options), optimization(options), script(options), style(options), svg(options), result);
}

module.exports = webpackConfig;
