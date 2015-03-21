'use strict';

var path = require('path');
var express = require('express');
var app = express();

app.get('*', function(req, res) {
  var pathToIndex = path.resolve(__dirname, '..', 'index.html');
  res.sendFile(pathToIndex);
});

var server = app.listen(5000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Backend app listening at http://%s:%s', host, port);
});
