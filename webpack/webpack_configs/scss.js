const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const scss_config = [
    {
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: true,
        }
    },
    'css-loader',
    'sass-loader'
];

module.exports = {
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: scss_config,
            },
            {
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'scss': scss_config
                    }
                }
            }
            
        ]
    },
    resolve: {
        extensions: ['.scss']
    }
};