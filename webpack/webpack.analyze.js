const _ = require('lodash');

const loader_merger = require('./loader_merger.js');

const production = require('./webpack.production.js');
const analyze = require('./webpack_configs/analyze.js');

let webpack_config = _.mergeWith(production, analyze, loader_merger);

module.exports = webpack_config;