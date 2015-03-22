'use strict';

// enables JSX requires
require('node-jsx').install({ extension: '.jsx' });
var serverRender = require('../js/server.jsx');

var express = require('express');
var app = express();

// use react routes
app.use('/', serverRender);

// simple static example
//app.get('*', function(req, res) {
  //res.sendFile(__dirname + '/templates/index.html');
//});

var server = app.listen(5000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Backend app listening at http://%s:%s', host, port);
});
