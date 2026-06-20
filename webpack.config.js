const path = require('path');
const { merge } = require('webpack-merge');
const asset = require('./config/webpack/asset');
const base = require('./config/webpack/base');
const html = require('./config/webpack/html');
const optimization = require('./config/webpack/optimization');
const script = require('./config/webpack/script');
const style = require('./config/webpack/style');
const svg = require('./config/webpack/svg');

module.exports = (env, argv) => {
  const { mode } = argv;
  const root = __dirname;
  const configFiles = [
    path.join(root, '.babelrc'),
    path.join(root, 'package.json'),
    path.join(root, 'postcss.config.js'),
    path.join(root, 'tsconfig.json'),
    path.join(root, 'webpack.config.js'),
    path.join(root, 'config', 'webpack', 'asset.js'),
    path.join(root, 'config', 'webpack', 'base.js'),
    path.join(root, 'config', 'webpack', 'get-is-prod.js'),
    path.join(root, 'config', 'webpack', 'html.js'),
    path.join(root, 'config', 'webpack', 'optimization.js'),
    path.join(root, 'config', 'webpack', 'script.js'),
    path.join(root, 'config', 'webpack', 'style.js'),
    path.join(root, 'config', 'webpack', 'svg.js'),
  ];
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
    cache: {
      buildDependencies: {
        config: configFiles,
      },
      cacheDirectory: path.join(root, 'node_modules', '.cache', 'webpack'),
      type: 'filesystem',
    },
    output: {
      clean,
    },
  };

  return merge(
    asset(options),
    base(options),
    html(options),
    optimization(options),
    script(options),
    style(options),
    svg(options),
    result,
  );
};
