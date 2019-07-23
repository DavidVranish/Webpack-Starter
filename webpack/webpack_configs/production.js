const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CompressionPlugin = require("compression-webpack-plugin")

module.exports = {
    devtool: 'source-map',
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                uglifyOptions: {
                    output: {
                        comments: false
                    }
                },
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: {
                    map: {
                        inline: false
                    }
                }
            })
        ]
    },
    plugins: [
        new CompressionPlugin({
            test: /\.(js|css|map)(\?.*)?$/
        })
    ],
    mode: 'production'
};
