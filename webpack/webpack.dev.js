const _ = require('lodash');

const loader_merger = require('./loader_merger.js');

const base = require('./webpack_configs/webpack_base.js');
const vue = require('./webpack_configs/vue.js');
const babel = require('./webpack_configs/babel.js');
const typescript = require('./webpack_configs/typescript.js');
const css = require('./webpack_configs/css.js');
const scss = require('./webpack_configs/scss.js');
const less = require('./webpack_configs/less.js');
const assets = require('./webpack_configs/assets.js');
const html = require('./webpack_configs/html.js');
const server = require('./webpack_configs/server.js');
const optimazations = require('./webpack_configs/optimazations.js');
 
let webpack_config = _.mergeWith(base, vue, loader_merger);
webpack_config = _.mergeWith(webpack_config, babel, loader_merger);
webpack_config = _.mergeWith(webpack_config, typescript, loader_merger);
webpack_config = _.mergeWith(webpack_config, css, loader_merger);
webpack_config = _.mergeWith(webpack_config, scss, loader_merger);
webpack_config = _.mergeWith(webpack_config, less, loader_merger);
webpack_config = _.mergeWith(webpack_config, assets, loader_merger);
webpack_config = _.mergeWith(webpack_config, html, loader_merger);
webpack_config = _.mergeWith(webpack_config, server, loader_merger);
webpack_config = _.mergeWith(webpack_config, optimazations, loader_merger);

module.exports = webpack_config;