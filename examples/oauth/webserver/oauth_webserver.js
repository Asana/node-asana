/**
 * Setup:
 *
 * 1. Create an application in Asana.
 * 2. Set the application's redirect URI to be:
 *      `http://localhost:8338/oauth_callback`
 * 3. Note the app's client ID and secret key for use when running the
 *    web server, below.
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

// Create an Asana client. Do this per request since it keeps state that
// shouldn't be shared across requests.
function createClient() {
  return Asana.Client.create({
    clientId: clientId,
    clientSecret: clientSecret,
    redirectUri: 'http://localhost:' + port + '/oauth_callback'
  });
}

// Causes request cookies to be parsed, populating `req.cookies`.
app.use(cookieParser());

// Home page - shows user name if authenticated, otherwise seeks authorization.
app.get('/', function(req, res) {
  var client = createClient();
  // If token is in the cookie, use it to show info.
  var token = req.cookies.token;
  if (token) {

    // Here's where we direct the client to use Oauth with the credentials
    // we have acquired.
    client.useOauth({ credentials: token });
    client.users.me().then(function(me) {
      res.end('Hello ' + me.name);
    }).catch(function(err) {
      res.end('Error fetching user: ' + err);
    });
  } else {
    // Otherwise redirect to authorization.
    res.redirect(client.app.asanaAuthorizeUrl());
  }

});

// Authorization callback - redirected to from Asana.
app.get('/oauth_callback', function(req, res) {
  var code = req.query.code;
  if (code) {
    // If we got a code back, then authorization succeeded.
    // Get token. Store it in the cookie and redirect home.
    var client = createClient();
    client.app.accessTokenFromCode(code).then(function(credentials) {
      // The credentials contain the refresh token as well. If you use it, keep
      // it safe on the server! Here we just use the access token, and store it
      // in the cookie for an hour.
      // Generally, if stored in a cookie it should be secure- and http-only
      // to prevent it from being stolen.
      res.cookie('token', credentials.access_token, { maxAge: 60 * 60 * 1000 });
      // Redirect back home, where we should now have access to Asana data.
      res.redirect('/');
    });
  } else {
    // Authorization could have failed. Show an error.
    res.end('Error getting authorization: ' + req.query.error);
  }

});

// Run the server!
var server = app.listen(port, function() {
  console.log("Listening on port " + port);
});

