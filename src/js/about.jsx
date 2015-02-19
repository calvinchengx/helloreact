/** @jsx React.DOM */
'use strict';

var React = require('react');
var Router = require('react-router') ;

var RouteHandler = Router.RouteHandler;

var About = React.createClass({
  render: function() {
    return (
      <div>
        About
      </div>
    );
  }
});

module.exports = About;
