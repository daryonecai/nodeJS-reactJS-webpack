var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
    // 页面入口文件配置
    entry: {},
    // 入口文件输出配置
    output: {
        path: './.tmp/public/',
        publicPath: '/',
        filename: 'js/[name].js'
    },
    module: {
        // 加载器配置
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')},
            {test: /\.js[x]?$/, loader: 'babel?compact=false'}
        ]
    },
    // 其他解决方案配置
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.json'],
    },
    // 插件项
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            React: 'react',
            EventProxy: 'eventproxy',
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            mangle: {
                except: ['$super', '$', 'exports', 'require']
            }
        }),
        new ExtractTextPlugin("/styles/[name].css", {
            allChunks: false
        }),

        new TransferWebpackPlugin([
                {from: 'images', to: 'images'}
            ], path.join(__dirname, 'assets')
        )
    ]
}