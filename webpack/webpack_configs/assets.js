const config = require('../../build_config.js');

module.exports = {
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|svg|ico|icon)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]-[hash].[ext]',
                            outputPath: (config.dist_path + "images"),
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]-[hash].[ext]',
                            outputPath: (config.dist_path + "media"),
                            limit: 8192
                        }
                    }
                ]
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: '[name]-[hash].[ext]',
                            outputPath: (config.dist_path + "fonts"),
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    }
};