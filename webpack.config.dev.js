var webpack = require("webpack");
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
    devtool: 'inline-source-map',
    entry: {
        "homeIndex": "./assets/js/home/index.js"
    },
    output: {
        path: './.tmp/public/',
        publicPath: '/',
        filename: 'js/[name].js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader')},
            {test: /\.less$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!less-loader')},
            {test: /\.(js|jsx)$/, loader: 'es3ify-loader!babel?compact=false',exclude: /node_modules/},
            {test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=3072'}
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            React: 'react',
            EventProxy: 'eventproxy'
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
