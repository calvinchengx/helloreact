var gulp = require('gulp');
var connect = require('gulp-connect');
var nodefs = require('node-fs');
var underscore = require('underscore');

// tooling that we use to manage bower components 
var flatten = require('gulp-flatten');
var gulpFilter = require('gulp-filter');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var mainBowerFiles = require('main-bower-files');

// source code: src/{css,img,js}
// generated files for development: generated/{css,img,js} 
// build for distribution: dist 
var projDirs = ['src/css', 'src/js', 'src/img', 'generated/css', 'generated/js', 'generated/img', 'dist'];
underscore.each(projDirs, function(dir) {
  'use strict';
  nodefs.mkdirSync(dir, '0755', true);
});

var destPath = 'generated';

gulp.task('bower', function() {
    'use strict';
    var jsFilter = gulpFilter('*.js');
    var cssFilter = gulpFilter('*.css');
    var fontFilter = gulpFilter(['*.eot', '*.woff', '*.svg', '*.ttf']);

    return gulp.src(mainBowerFiles())
    // grab vendor js files from bower_components, minify and push to destPath
    .pipe(jsFilter)
    .pipe(gulp.dest(destPath + '/js/vendor'))
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(destPath + '/js/vendor'))
    .pipe(jsFilter.restore())
    // grab vendor css files from bower_components, minify and push to destPath
    .pipe(cssFilter)
    .pipe(gulp.dest(destPath + '/css'))
    .pipe(minifycss())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest(destPath + '/css'))
    .pipe(cssFilter.restore())
    // grab vendor font files from bower_components and push to destPath
    .pipe(fontFilter)
    .pipe(flatten())
    .pipe(gulp.dest(destPath + '/fonts'));
});
    
gulp.task('html', function() {
  'use strict';
  gulp.src('src/*.html').pipe(gulp.dest('generated'));
});

gulp.task('devserver', function() {
  'use strict';
  connect.server({
    root: 'generated',
    port: 8080
  });
});

gulp.task('default', ['html', 'devserver'], function() {
});
