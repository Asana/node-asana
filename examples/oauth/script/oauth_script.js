/**
 * Setup:
 *
 * 1. Create an application in Asana.
 * 2. Set the application's redirect URI to be the special native app URI:
 *      `urn:ietf:wg:oauth:2.0:oob`
 * 3. Note the app's client ID and secret key for use when running the
 *    web server.
 *
 * Usage:
 *
 *   export ASANA_CLIENT_ID=...
 *   export ASANA_CLIENT_SECRET=...
 *   node oauth_script.js
 */
var Asana = require('asana');

var client = Asana.Client.create({
  clientId: process.env['ASANA_CLIENT_ID'],
  clientSecret: process.env['ASANA_CLIENT_SECRET']
});
client.useOauth();

client.authorize().then(function() {
  return client.users.me().then(function(me) {
    console.log(me);
  });
}).catch(function(err) {
  console.log("An error occurred", err);
});
