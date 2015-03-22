'use strict';

var React = require('react');

// Handle the HTML rendering on the server
var Html = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>{ this.props.title }</title>
        </head>
        <body dangerouslySetInnerHTML={{__html: this.props.markup}}>
        </body>
        <script src="/js/vendors.js"></script>
        <script src="/js/bundle.js"></script>
      </html>
    );
  }
});

module.exports = Html;
