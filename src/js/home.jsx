var React = require('react');
var Router = require('react-router') ;

var RouteHandler = Router.RouteHandler;

var Home = React.createClass({
  render: function() {
    return (
      <div>
        Home
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = Home;
