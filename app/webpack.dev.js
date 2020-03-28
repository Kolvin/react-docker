const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const sourcePath = path.join(__dirname, 'src/');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    watch: true,
    watchOptions: {
        ignored: ['node_modules/**'],
        aggregateTimeout: 300,
        poll: 500
    },
    devServer: {
        writeToDisk: true,
        compress: false,
        contentBase: sourcePath,
        historyApiFallback: true,
        host: '0.0.0.0',
        port: 3000,
        hot: true,
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
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        })
    ]
});