const path = require('path');
const {merge} = require('webpack-merge');
const asset = require('./config/asset');
const base = require('./config/base');
const html = require('./config/html');
const optimization = require('./config/optimization');
const script = require('./config/script');
const style = require('./config/style');
const svg = require('./config/svg');

module.exports = (env, argv) => {
  const {mode} = argv;
  const root = __dirname;
  const configFiles = [
    path.join(root, '.babelrc'),
    path.join(root, 'package.json'),
    path.join(root, 'postcss.config.js'),
    path.join(root, 'tsconfig.json'),
    path.join(root, 'webpack.config.js'),
    path.join(root, 'config', 'asset.js'),
    path.join(root, 'config', 'base.js'),
    path.join(root, 'config', 'get-is-prod.js'),
    path.join(root, 'config', 'html.js'),
    path.join(root, 'config', 'optimization.js'),
    path.join(root, 'config', 'script.js'),
    path.join(root, 'config', 'style.js'),
    path.join(root, 'config', 'svg.js'),
  ];
  const options = {
    dist: path.join(root, 'www'),
    mode,
    pages: ['index'],
    public: path.join(root, 'public'),
    root,
    src: 'src',
  };
  const clean = 'production' === mode ? true : {keep: /\.svg$/u};
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

  return merge(asset(options), base(options), html(options), optimization(options), script(options), style(options), svg(options), result);
};
