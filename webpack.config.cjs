import path, {dirname} from 'path';
import {fileURLToPath} from 'url';
import {merge} from 'webpack-merge';
import asset from './config/asset.js';
import base from './config/base.js';
import html from './config/html.js';
import optimization from './config/optimization.js';
import script from './config/script.js';
import style from './config/style.js';
import svg from './config/svg.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

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
    const clean = 'production' === mode ? true : {keep: /\.svg$/u};
    const result = {
        output: {
            clean,
        },
    };

    return merge(asset(options), base(options), html(options), optimization(options), script(options), style(options), svg(options), result);
}

export default webpackConfig;
