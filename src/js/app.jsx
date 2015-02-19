var React = require('react');
var Router = require('react-router');

var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
              <li><Link to="home">Home</Link></li>
              <li><Link to="about">About</Link></li>
          </ul>
        </header>

        {/* this is the important part */}
        <RouteHandler/>
      </div>
    );
  }
});

module.exports = App
