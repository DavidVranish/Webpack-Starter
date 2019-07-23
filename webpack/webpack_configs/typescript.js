const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    configFile: path.resolve(__dirname, "../tsconfig.json"),
                    context: path.resolve(__dirname, "../")
                }
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts' ]
    }
};