module.exports = () => {
  return {
    module: {
      rules: [
        {
          generator: {
            filename: 'fonts/[name][ext]',
          },
          test: /\.(ttf|eot|woff|woff2)(\?[a-z0-9]+)?$/u,
          type: 'asset/resource',
        },
        {
          generator: {
            filename: 'images/[name][ext]',
          },
          test: /.*\.(png|jpg|jpeg|gif)$/iu,
          type: 'asset/resource',
        },
      ],
    },
  };
};
