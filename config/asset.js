module.exports = () => {
    return {
        module: {
            rules: [
                {
                    test: /\.(ttf|eot|woff|woff2)(\?[a-z0-9]+)?$/u,
                    use: {
                        loader: 'file-loader',
                        options: {name: 'fonts/[name].[ext]'},
                    },
                },
                {
                    test: /.*\.(png|jpg|jpeg|gif)$/iu,
                    use: {
                        loader: 'file-loader',
                        options: {name: 'images/[name].[ext]'},
                    },
                },
            ],
        },
    };
};
