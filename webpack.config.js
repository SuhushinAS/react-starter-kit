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
    output: {
      clean,
    },
  };

  return merge(asset(options), base(options), html(options), optimization(options), script(options), style(options), svg(options), result);
};
