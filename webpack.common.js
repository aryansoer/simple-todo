const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

module.exports = {
    entry: {
        app: './src/app.js'
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: 'lodash'
        }),
        new CleanWebpackPlugin(['dist']),
        new CommonsChunkPlugin({
            name: 'vendor',
            chunks: ['app'],
            minChunks: module => /node_modules/.test(module.resource)
        }),
        new HtmlWebpackPlugin({
            title: 'Simple TODO',
            template: './src/index.html'
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};
