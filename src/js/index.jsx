'use strict';
var React = require('react');
var Hello = require('./Hello');
var rootInstance = null;

rootInstance = React.render(<Hello />, document.getElementById('container'));

if (module.hot) {
  require('react-hot-loader/Injection').RootInstanceProvider.injectProvider({
    getRootInstances: function() {
      // Help React Hot Loader figure out the root component instances on the page
      return [rootInstance];
    } 
  });
}
