const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const commonConfig = require('./webpack.common.js');

const ENV = process.env.ENV = process.env.NODE_ENV = 'production';

module.exports = merge(commonConfig({env: ENV}), {
    plugins: [
        new UglifyJSPlugin({
            sourceMap: false
        })
    ]
});
