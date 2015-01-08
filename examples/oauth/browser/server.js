/**
 * This file exists just to serve up some HTML/JS files to demo the
 * browser-side use of Oauth.
 *
 * Usage:
 *
 *   [export PORT=...]
 *   node server.js
 */
var express = require('express');
var app = express();

var port = process.env['PORT'] || 8338;

// Quick and dirty - expose all static files in this directory.
app.use('/', express.static(__dirname + '/dist'));

// Run the server!
var server = app.listen(port, function() {
  console.log("Listening on port " + port);
});

