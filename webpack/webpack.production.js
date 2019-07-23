const _ = require('lodash');

const loader_merger = require('./loader_merger.js');

const dev = require('./webpack.dev.js');
const production = require('./webpack_configs/production.js');

let webpack_config = _.mergeWith(dev, production, loader_merger);

module.exports = webpack_config;