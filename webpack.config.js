const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = env => {
  return {
    mode: env.mode ?? 'development',

    entry: path.resolve(__dirname, 'src', 'index.js'),

    output: {
      filename: 'bundle.[contenthash].js',
      path: path.resolve(__dirname, 'build'),
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'template.html'),
        filename: 'index.html',
      }),
      new CleanWebpackPlugin(),
    ],

    module: {
      rules: [
        {
          test: /\.(?:js|mjs|cjs)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: 'defaults' }]],
            },
          },
        },
      ],
    },
    devServer: {
      watchFiles: path.join(__dirname, 'src'),
      port: 9000,
    },
  };
};
