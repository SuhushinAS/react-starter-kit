import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default ({pages, src}) => {
    return {
        plugins: pages.map(
            (page) =>
                new HtmlWebpackPlugin({
                    filename: `${page}.html`,
                    hash: true,
                    inject: true,
                    minify: false,
                    scriptLoading: 'defer',
                    template: path.join(src, `${page}.html`),
                })
        ),
    };
};
