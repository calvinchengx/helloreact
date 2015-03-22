/** @jsx React.DOM */
'use strict';

// load styles via the sass loader 
require('../sass/styles.scss');

// Run our App
var runAppWithRouter = require('./client');

document.addEventListener('DOMContentLoaded', function() {
    runAppWithRouter();
});
