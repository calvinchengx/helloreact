'user strict';
// webpack development config - default

var config = require('./webpack.common.config.js');
console.log('Using default development config');

//config.entry.app.push('webpack-dev-server/client?http://localhost:8080');
config.entry.app.push('webpack-dev-server/client?');
config.entry.app.push('webpack/hot/dev-server');

var webpack = require('webpack');
var hmrPlugin = new webpack.HotModuleReplacementPlugin();
config.plugins.push(hmrPlugin);

module.exports = config;
