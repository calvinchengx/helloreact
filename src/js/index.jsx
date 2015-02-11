/** @jsx React.DOM */
'use strict';

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

var rootInstance = null;

console.log(routes);

Router.run(routes, function (Handler, state) {
    rootInstance = React.render(<Handler />, document.getElementById('container'));
});

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function() {
      // Help React Hot Loader figure out the root component instances on the page
      return [rootInstance];
    } 
  });
}
