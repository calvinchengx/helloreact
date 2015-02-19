var React = require('react');
var Router = require('react-router') ;

var RouteHandler = Router.RouteHandler;

var About = React.createClass({
  render: function() {
    return (
      <div>
        About
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = About;
