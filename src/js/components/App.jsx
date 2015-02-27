'use strict';

var React = require('react');
var Router = require('react-router');

var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var App = React.createClass({
  render: function () {
    return (
      <div id="wrap">
        <header>
          <div id="header-wrap">
            <div className="logo">
              HelloReact
            </div>
            <div className="nav">
              <ul>
                <li><Link to="home">Home</Link></li>
                <li><Link to="about">About</Link></li>
              </ul>
            </div>
          </div>
        </header>

        {/* this is the important part that executes the routing */}
        <RouteHandler />
      </div>
    );
  }
});

module.exports = App 
