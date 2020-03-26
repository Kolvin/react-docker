const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  target: 'web',
  output: {
    filename: './dist/react-client.js',
    path: path.resolve('./'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.js(x)?$/,
        use: [{
          loader: 'eslint-loader'
        }],
        enforce: 'pre',
        include: path.resolve('./src')
      },
      {
        include: path.resolve('./src'),
        test: /\.(eot|gif|otf|png|svg|ttf|woff)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [ 'file-loader' ],
      },
    ]
  }
};