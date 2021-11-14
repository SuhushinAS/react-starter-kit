import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import TerserWebpackPlugin from 'terser-webpack-plugin';

export default ({mode}) => {
    return {
        optimization: {
            chunkIds: 'named',
            emitOnErrors: false,
            minimizer: [
                new TerserWebpackPlugin({
                    extractComments: false,
                    terserOptions: {output: {comments: false}},
                }),
                new CssMinimizerPlugin({
                    minimizerOptions: {
                        preset: ['default', {discardComments: {removeAll: true}}],
                    },
                }),
            ],
            moduleIds: 'named',
            nodeEnv: mode,
            splitChunks: {
                cacheGroups: {
                    common: {
                        chunks: 'initial',
                        minChunks: 2,
                        name: 'common',
                    },
                    icons: {
                        chunks: 'all',
                        name: 'icons',
                        test: /\.svg$/u,
                    },
                    vendor: {
                        chunks: 'all',
                        name: 'vendor',
                        test: /[\\/]node_modules[\\/]/u,
                    },
                },
            },
        },
    };
};
