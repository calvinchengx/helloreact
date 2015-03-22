'use strict';

var React = require('react');

// enables JSX requires
require('node-jsx').install({ extension: '.jsx' });
//var Server = require('../js/server.jsx');
//var ServerFactory = React.createFactory(Index);
//var renderedComponent = React.renderToString(
  //ServerFactory({})
//);

//var Handlebars = require('handlebars');
//var fs = require('fs');

//var fileData = fs.readFileSync(__dirname + '/templates/layout.handlebars').toString();
//var layoutTemplate = Handlebars.compile(fileData);

//var renderedLayout = layoutTemplate({
  //content: renderedComponent
//});

var express = require('express');
var app = express();

app.get('*', function(req, res) {
  //var path = require('path');
  //var pathToIndex = path.resolve(__dirname, 'templates/index.html');
  //console.log(pathToIndex);
  res.sendFile(__dirname + '/templates/index.html');
  //res.sendFile(renderedLayout);
});

var server = app.listen(5000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Backend app listening at http://%s:%s', host, port);
});
