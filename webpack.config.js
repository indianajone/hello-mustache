const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const isDev = (process.env.NODE_ENV || 'dev').includes('dev');

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'js/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.scss$/,
        oneOf: [
          {
            resourceQuery: /module/,
            use: [
              isDev ? 'vue-style-loader' : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hmr: isDev,
                },
              },
              {
                loader: 'css-loader',
                options: {
                  modules: true,
                  localIdentName: '[local]_[hash:base64:5]'
                }
              },
              'postcss-loader',
              { loader: 'sass-loader', options: { sourceMap: isDev } },
            ]
          },
          {
            use: [
              'vue-style-loader',
              'css-loader',
              'postcss-loader',
              { loader: 'sass-loader', options: { sourceMap: isDev } },
            ]
          }
        ]
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/style.[contenthash].css',
    }),
    new HtmlWebpackPlugin({
      favicon: 'public/favicon.ico',
      filename: 'index.html',
      template: 'public/index.html',
      title: 'Hello mustache',
    }),
    new VueLoaderPlugin(),
  ],
};
