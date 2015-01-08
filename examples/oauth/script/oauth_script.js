/**
 * Usage:
 *
 *   export ASANA_CLIENT_ID=...
 *   export ASANA_CLIENT_SECRET=...
 *   node oauth_script.js
 */
var Asana = require('asana');

// Create a client, getting parameters from the environment.
var client = Asana.Client.create({
  clientId: process.env['ASANA_CLIENT_ID'],
  clientSecret: process.env['ASANA_CLIENT_SECRET']
});

// Configure the way we want to use Oauth. This autodetects that we are
// in a Node process, so uses the `NativeFlow` by default.
client.useOauth();

// When `authorize` is called it will prompt us to perform the authorization
// in a browser and copy in the code we got. It will then exchange that for
// a token.
client.authorize().then(function() {
  // The client is authorized! Make a simple request.
  return client.users.me().then(function(me) {
    console.log('Hello ' + me.name);
  });
}).catch(function(err) {
  console.log('An error occurred', err);
});
