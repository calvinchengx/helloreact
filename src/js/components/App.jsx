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
              <Link to="home">HelloReact</Link>
            </div>
            <div className="navButton"><a></a></div> 
            <div className="nav">
              <ul>
                <li><Link to="about">About</Link></li>
              </ul>
            </div>
          </div>
        </header>

        {/* this is the important part that executes the routing */}
        <div className="content">
          <RouteHandler />
        </div>
      </div>
    );
  }
});

module.exports = App 
