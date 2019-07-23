const path = require('path');

module.exports = {
    application_entries: {
        "main": "../src/main.ts"
    },
    dist_path: path.resolve(__dirname, "dist"),
    devtool: "cheap-module-eval-source-map",
    browser_targets: [
        "> 1%, not dead"
    ],
    dev_server_port: 3000,
    dev_server_host: 'localhost',
    dev_server_https: {
        //   key: fs.readFileSync('/path/to/server.key'),
        //   cert: fs.readFileSync('/path/to/server.crt'),
        //   ca: fs.readFileSync('/path/to/ca.pem'),
    }
};