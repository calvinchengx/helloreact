var React = require('react');
var Router = require('react-router');

var Page = React.createClass({
  mixins: [Router.State],
  render: function() {
    return (
      <div>woooooooooo {this.getParams().pageId}</div>
    )
  }
})

module.exports = Page;
