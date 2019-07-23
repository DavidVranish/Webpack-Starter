const webpack = require('webpack');
const config = require('../../build_config.js');

module.exports = {
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        hot: true,
        host: config.dev_server_host,
        port: config.dev_server_port,
        contentBase: "../dist",
        open: true,
        index: "index.html"
    }
};