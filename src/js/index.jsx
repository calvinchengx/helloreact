/** @jsx React.DOM */
'use strict';

// load sass/scss
require('../sass/styles.scss');
// load plain css
// require('../css/styles.css'); 

var React = require('react');
var Router = require('react-router');
var Routes = require('./components/Routes');

var rootInstance = null;

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
