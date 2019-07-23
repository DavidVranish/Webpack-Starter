const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    esModule: true,
                    loaders: {
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js'
        },
        extensions: ['.vue']
    }
};