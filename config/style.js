const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = ({mode, root}) => {
    const isProd = 'production' === mode;
    const styleLoader = isProd ? MiniCssExtractPlugin.loader : 'style-loader';
    const plugins = isProd ? [new MiniCssExtractPlugin({filename: '[name].min.css'})] : [];

    return {
        module: {
            rules: [
                {
                    test: /\.css$/u,
                    use: [styleLoader, 'css-loader', 'postcss-loader'],
                },
                {
                    test: /\.less$/u,
                    use: [styleLoader, 'css-loader', 'postcss-loader', {loader: 'less-loader', options: {lessOptions: {paths: [root]}}}],
                },
            ],
        },
        plugins,
    };
};
