const config = require('../../build_config.js');

const js_config = [
    {
        loader: 'babel-loader',
        options: {
          "presets": [
                "@babel/preset-react",
                [
                    "@babel/preset-env",
                    {
                        "useBuiltIns": "entry",
                        "targets": config.browser_targets,
                        "corejs": 3,
                        "modules": false
                    }
                ]
            ]
        }
    }
];

module.exports = {
    module: {
        rules: [
            {
                loader: 'vue-loader',
                options: {
                    loaders: {
                        'js': js_config,
                    }
                }
            },
            {
                test: /\.(js|jsx)$/,
                use: js_config,
                exclude: /node_modules/,
            },
            
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};