const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const less_config = [
    {
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: true,
        }
    },
    'css-loader',
    'less-loader'
];

module.exports = {
    module: {
        rules: [
            {
                test: /\.less$/,
                use: less_config,
            },
            {
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'less': less_config
                    }
                    // other vue-loader options go here
                }
            },
        ]
    },
    resolve: {
        extensions: ['.less']
    }
};