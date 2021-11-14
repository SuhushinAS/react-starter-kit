import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default ({mode, root}) => {
    const isProd = 'production' === mode;
    const styleLoader = isProd ? MiniCssExtractPlugin.loader : 'style-loader';
    const cssLoader = {loader: 'css-loader', options: {esModule: false}};
    const plugins = isProd ? [new MiniCssExtractPlugin({filename: '[name].min.css'})] : [];

    return {
        module: {
            rules: [
                {
                    test: /\.css$/u,
                    use: [styleLoader, cssLoader, 'postcss-loader'],
                },
                {
                    test: /\.less$/u,
                    use: [styleLoader, cssLoader, 'postcss-loader', {loader: 'less-loader', options: {lessOptions: {paths: [root]}}}],
                },
            ],
        },
        plugins,
    };
};
