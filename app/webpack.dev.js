const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const sourcePath = path.join(__dirname, 'src/');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    ignored: ['node_modules/**']
  },
  devServer: {
    writeToDisk: true,
    compress: false,
    contentBase: sourcePath,
    historyApiFallback: true,
    host: 'localhost',
    port: 3000,
    hot: false,
    inline: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      colors: {
        green: '\u001b[32m'
      },
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
      template: './view/index.html'
    }),
  ]
});