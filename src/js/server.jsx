'use strict';

var React = require('react');
var Router = require('react-router');
var Routes = require('./components/Routes');

var DocumentTitle = require('react-document-title');
var Html = require('./components/Html');

var Server = function(req, res, next) {
  Router.run(Routes, req.url, function(Handler, state) {
    var title = DocumentTitle.rewind();
    var markup = React.renderToString(<Handler />);
    var html = React.renderToStaticMarkup(<Html title={title} markup={markup} />);
    res.send('<!DOCTYPE html>' + html);
  });
};

module.exports = Server;
