const SvgSpriteLoaderPlugin = require('external-svg-sprite-loader');

module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.svg$/u,
                    use: [
                        {
                            loader: SvgSpriteLoaderPlugin.loader,
                            options: {name: 'sprite.svg'},
                        },
                    ],
                },
            ],
        },
        plugins: [new SvgSpriteLoaderPlugin()],
    };
};
