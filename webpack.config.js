const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = env => {
  return {
    mode: env.mode ?? 'development',

    entry: path.resolve(__dirname, 'src', 'index.js'),

    output: {
      filename: 'bundle.[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      assetModuleFilename: path.join('[name].[contenthash][ext]'),
    },

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
        {
          test: /\.pug$/,
          loader: 'pug-loader',
        },
        {
          test: /\.(scss|css)$/,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.(woff2?|eot|ttf|otf)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.svg$/,
          type: 'asset/resource',
          exclude: path.resolve(__dirname, 'assets', 'icons'),
          generator: {
            filename: path.join('icons', '[name].[contenthash][ext]'),
          },
        },
      ],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src', 'pug', 'layout.pug'),
        filename: 'index.html',
      }),
      new CleanWebpackPlugin(),
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src', 'assets', 'favicons'),
            to: path.resolve(__dirname, 'build'),
          },
          {
            from: path.resolve(__dirname, 'src', 'assets', 'icons'),
            to: path.resolve(__dirname, 'build', 'images'),
          },
        ],
      }),
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
      }),
    ],

    devServer: {
      watchFiles: path.join(__dirname, 'src'),
      port: 9000,
    },
  };
};
