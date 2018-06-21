const path = require('path');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const METADATA = {
    TITLE: 'Simple TODO'
}

module.exports = function(options) {

    const isProd = options.env === 'production';

    return {
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
            new ExtractTextPlugin({
                filename: 'styles.css',
                allChunks: true
            }),
            new HtmlWebpackPlugin({
                title: METADATA.TITLE,
                template: './src/index.html'
            }),
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(options.env)
            })
        ],
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                {
                    test: /\.(sa|sc|c)ss$/,
                    use: isProd
                        ? ExtractTextPlugin.extract(
                            {
                                fallback: 'style-loader',
                                use: ['css-loader', 'sass-loader']
                            }
                        )
                        : ['style-loader', 'css-loader', 'sass-loader']
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
};
