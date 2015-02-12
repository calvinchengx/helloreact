'use strict';

var fs = require('node-fs');
var underscore = require('underscore');
var projDirs = ['src/sass', 'src/css', 'src/js', 'src/img', 'generated/css', 'generated/js', 'generated/img', 'dist', 'proof'];
underscore.each(projDirs, function(dir) {
  fs.mkdirSync(dir, '0755', true);
});
