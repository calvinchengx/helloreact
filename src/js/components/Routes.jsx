/** @jsx React.DOM */
'use strict';

var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = require('./App');
var Home = require('./Home');
var About = require('./About');

var Routes = (
    <Route path="/" name="App" handler={App}>       
      <DefaultRoute name="home" handler={Home}/>    
      <Route name="about" handler={About}/>         
    </Route>                                        
);

module.exports = Routes;
