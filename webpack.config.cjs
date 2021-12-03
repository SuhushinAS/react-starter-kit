const path = require('path');
const { merge } = require('webpack-merge');
const asset = require('./config/asset.cjs');
const base = require('./config/base.cjs');
const html = require('./config/html.cjs');
const optimization = require('./config/optimization.cjs');
const script = require('./config/script.cjs');
const style = require('./config/style.cjs');
const svg = require('./config/svg.cjs');

/**
 * Получить конфигурацию webpack.
 * @param env Окружение.
 * @param argv Аргументы
 * @returns {*} Конфигурация webpack.
 */
function webpackConfig(env, argv) {
  const { mode } = argv;
  const root = __dirname;
  const options = {
    dist: path.join(root, 'www'),
    mode,
    pages: ['index'],
    public: path.join(root, 'public'),
    root,
    src: 'src',
  };
  const clean = 'production' === mode ? true : { keep: /\.svg$/u };
  const result = {
    output: {
      clean,
    },
  };

  return merge(asset(options), base(options), html(options), optimization(options), script(options), style(options), svg(options), result);
}

module.exports = webpackConfig;
