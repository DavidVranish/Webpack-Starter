const path = require('path');
const config = require("../../build_config.js");

module.exports = {
    target: "web",
    context: path.resolve(__dirname, "../../webpack"),
    devtool: config.devtool,
    entry: config.application_entries,
    output: {
        path: config.dist_path,
        filename: '[name].js'
    },
    resolve: {
        modules: [
            "node_modules",
            "../node_modules"     
        ]
    },
    mode: "development"
};