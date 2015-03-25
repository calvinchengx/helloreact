'use strict';

var React = require('react');
var Router = require('react-router');
var Routes = require('./components/Routes');

var Html = require('./components/Html');

var Server = function(req, res, next) {
  Router.run(Routes, req.url, function(Handler, state) {
    var markup = React.renderToString(<Handler />);
    var html = React.renderToStaticMarkup(<Html title='HelloReact' markup={markup} />);
    res.send('<!DOCTYPE html>' + html);
  });
};

module.exports = Server;
