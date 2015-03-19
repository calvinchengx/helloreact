'use strict';
// webpack common config

var nfs = require('node-fs');
var underscore = require('underscore');
var projDirs = ['src/sass', 'src/css', 'src/js', 'src/img', 'dist/css', 'dist/js', 'dist/img'];
underscore.each(projDirs, function(dir) {
  nfs.mkdirSync(dir, '0755', true);
});
var fse = require('fs-extra');
fse.copy('src/index.html', 'dist/index.html', function (err) {
  if (err) { return console.error(err); }
  console.log('Updated index.html');
});
fse.copy('src/favicon.ico', 'dist/favicon.ico', function (err) {
  if (err) { return console.error(err); }
  console.log('Updated favicon.ico');
});

var webpack = require('webpack');
var bowerDir = __dirname + '/bower_components';
var BowerWebPackPlugin = require('bower-webpack-plugin'); // automatically graps packages in bower_components, e.g. react-router

var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp(path));
  },
  entry: {
    app: [
      './src/js/index.jsx'
    ],
    vendors: ['react']
  },
  resolve: {
    alias: {},
    extensions: ['', '.jsx', '.js', 'min.js']
  },
  output: {
    path: __dirname + '/dist/js',
    filename: 'bundle.js', 
    publicPath: '/js/'
  },
  module: {
    noParse: [ ], // Ask webpack not to parse pre-built files
    loaders: [
      { test: /\.jsx$/, loader:  'jsx-loader?insertPragma=React.DOM&harmony' },
      { test: /\.css$/, loader: 'style!css' },
      { test: /\.scss$/, loader: 'style!css!sass' },
      { test: /\.(jpe?g|png|gif|svg)$/, loaders: ['image?bypassOnDebug&optimizationLevel=7&interlaced=false']},
      { test: /\.html$/, loader: 'file'}
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new webpack.NoErrorsPlugin(),
    new BowerWebPackPlugin()
  ],
  externals: {
  }
};

config.addVendor('react', bowerDir + '/react/react.js');
config.addVendor('react', bowerDir + '/react/react.min.js');

module.exports = config;
