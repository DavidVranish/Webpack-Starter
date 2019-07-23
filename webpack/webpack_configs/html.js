const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    plugins: [
        new HtmlWebpackPlugin({
        	"title": "Starter App",
        	"template": "../src/index.html",
        	"hash": true
        })
    ]
};