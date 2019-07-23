const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const css_config = [
    {
        loader: MiniCssExtractPlugin.loader,
        options: {
            hmr: true,
        }
    },
    'css-loader'
];

module.exports = {
    plugins: [
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: '[name].css',
            chunkFilename: "[id].css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: css_config,
            },
            {
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'css': css_config
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.css']
    }
};