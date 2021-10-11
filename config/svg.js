const SvgSpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = () => {
    return {
        module: {
            rules: [
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
            ],
        },
        plugins: [new SvgSpriteLoaderPlugin()],
    };
};
