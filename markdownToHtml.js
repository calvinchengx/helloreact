'use strict';

var fs = require('fs');
var path = require('path');
var marked = require('marked');
var underscore = require('underscore');
var contents = './contents/';
var build = './build/';

var writeHtml = function (pathToFile, markedData) {
  fs.writeFile(pathToFile, markedData, function(err) {
    if (err) {
      return console.log(err);
    }
  });
};

var readMarkdown = function (pathToFile) {
  fs.readFile(pathToFile, 'utf8', function(err, data) {
    if (err) {
      return console.log(err);
    }
    if (path.extname(pathToFile) === '.md') {
      // rename the .md file as .html and write it out 
      // into the build directory
      var fileName = path.basename(pathToFile, path.extname(pathToFile)) + '.html';
      writeHtml(build + fileName, marked(data));
    } else {
      console.log(pathToFile + ' is not a markdown file. Not processed.');
    }
  });
};

// read markdown files in contents directory 
// and apply readMarkdown method on each file
fs.readdir(contents, function(err, files) {
  console.log(files);
  underscore.each(files, function(f) {
    readMarkdown(contents + f);
  });
});
