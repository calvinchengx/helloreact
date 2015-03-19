'user strict';
// webpack production config

var config = require('./webpack.common.config.js');
console.log('Using production config');

var webpack = require('webpack');
var uglifyJsPlugin = new webpack.optimize.UglifyJsPlugin({ minimize: true });
var CompressionPlugin = require('compression-webpack-plugin'); // for production
var compressionPlugin = new CompressionPlugin({ // for production
  asset: '{file}.gz',
  algorithm: 'gzip',
  regExp: /\.(js|html)$/,
  threshold: 10240,
  minRatio: 0.8
});

config.plugins.push(uglifyJsPlugin);
config.plugins.push(compressionPlugin);
module.exports = config;
