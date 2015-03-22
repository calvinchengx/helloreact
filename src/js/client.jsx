/** @jsx React.DOM */
'use strict';

var React = require('react');
var Router = require('react-router');
var Routes = require('./components/Routes');

var rootInstance = null;

var AppWithRouter = function() {
  // React Hot Loader
  Router.run(Routes, Router.HistoryLocation, function (Handler, state) {  // jshint ignore:line
    var params = state.params;
    rootInstance = React.render(<Handler params={params}/>, document.body);            // jshint ignore:line
  });

  if (module.hot) {
    require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
      getRootInstances: function() {
        // Help React Hot Loader figure out the root component instances on the page
        return [rootInstance];
      } 
    });
  }

}

module.exports = AppWithRouter;
