/**
 * Setup:
 *
 * 1. Create an application in Asana.
 * 2. Set the application's redirect URI to be:
 *      `http://localhost:8338/oauth_callback`
 * 3. Note the app's client ID and secret key for use when running the
 *    web server.
 *
 * Usage:
 *
 *   export ASANA_CLIENT_ID=...
 *   export ASANA_CLIENT_SECRET=...
 *   [export PORT=...]
 *   node oauth_webserver.js
 */
var Asana = require('asana');
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

var clientId = process.env['ASANA_CLIENT_ID'];
var clientSecret = process.env['ASANA_CLIENT_SECRET'];
var port = process.env['PORT'] || 8338;

// Create an Asana client.
var client = Asana.Client.create({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: 'http://localhost:' + port + '/oauth_callback',
  asanaBaseUrl: 'https://localhost.asana.com:8180/'  //xcxc
});

// Causes request cookies to be parsed, populating `req.cookies`.
app.use(cookieParser());

app.get('/', function(req, res) {

  // If token in cookie, use it to show info.
  var token = req.cookies.token;
  if (token) {
    client.useOauth({
      credentials: { access_token: token }
    });
    client.authorize().then(function() {
      return client.users.me().then(function(me) {
        res.end('Hello ' + me.name);
      });
    });
  } else {
    // Otherwise redirect to authorization.
    res.redirect(client.app.asanaAuthorizeUrl());
  }

});

app.get('/oauth_callback', function(req, res) {
  // Receive authorization code.
  // NOTE: If authorization was denied, there will be error parameters instead.
  // For brevity we're not checking those.
  var code = req.param('code');

  // Get token. Store it in the cookie and redirect home.
  client.app.accessTokenFromCode(code).then(function(credentials) {
    // The credentials contain the refresh token as well. If you use it, keep
    // it safe on the server! Here we just use the access token, and store it
    // in the cookie for an hour.
    res.cookie('token', credentials.access_token, { maxAge: 60 * 60 * 1000 });
    // Redirect back home, where we should now have access to Asana data.
    res.redirect('/');
  });
});

// Run the server!
var server = app.listen(port, function() {
  console.log("Listening on port " + port);
});

