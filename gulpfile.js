var gulp = require('gulp');
var gutil = require('gulp-util');
var nodefs = require('node-fs');
var underscore = require('underscore');

var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./webpack.config.js');

// source code: src/{css,img,js}
// generated files for development: generated/{css,img,js} 
// build for distribution: dist 
var projDirs = ['src/sass', 'src/css', 'src/js', 'src/img', 'generated/css', 'generated/js', 'generated/img', 'dist'];
underscore.each(projDirs, function(dir) {
  'use strict';
  nodefs.mkdirSync(dir, '0755', true);
});
    
gulp.task('html', function() {
  'use strict';
  gulp.src('src/*.html').pipe(gulp.dest('generated'));
});

gulp.task('devserver', function() {
  'use strict';
  var myConfig = Object.create(webpackConfig);
  myConfig.devtool = 'eval';
  myConfig.debug = true;
  // start the webpack-dev-server
  new webpackDevServer(webpack(myConfig), {
    contentBase: 'generated',
    publicPath: myConfig.output.publicPath,
    hot: true,
    quiet: false,
    noInfo: false,
    stats: { colors: true }
  }).listen(8080, 'localhost', function(err) {
    if (err) { throw new gutil.PluginError('webpack-dev-server', err); }
    gutil.log('[devserver]', 'http://localhost:8080/webpack-dev-server/index.html');
  });
});

gulp.task('default', ['html', 'devserver'], function() {
});
