/** @jsx React.DOM */
'use strict';

var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <header>
          <ul>
              <li><Link to="app">Home</Link></li>
          </ul>
          Logged in as Calvin
        </header>

        {/* this is the important part */}
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/">
    <DefaultRoute handler={App}/>
  </Route>
);

module.exports = routes;
