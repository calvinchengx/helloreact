/** @jsx React.DOM */
'use strict';

var React = require('react');
var Router = require('react-router');

var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var App = require('./App');
var Home = require('./Home');
var About = require('./About');
var Page = require('./Page');
var NotFound = require('./NotFound');

var Routes = (
    <Route path="/" name="App" handler={App}>       
      <DefaultRoute name="home" handler={Home}/>    
      <Route name="about" handler={About}/>         
      <Route name="page" path="/page/:pageId" handler={Page}/>
      <NotFoundRoute name="notfound" handler={NotFound}/>
    </Route>                                        
);

module.exports = Routes;
