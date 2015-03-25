'use strict';

var React = require('react');

// Handle the HTML rendering on the server
var Html = React.createClass({
  render: function() {
    return (
      <html>
        <head>
          <title>HelloReact</title>
        </head>
        <body>
          <div id="wrap" dangerouslySetInnerHTML={{__html: this.props.markup}}></div>
        </body>
        <script src="/js/vendors.js"></script>
        <script src="/js/bundle.js"></script>
      </html>
    );
  }
});

module.exports = Html;
