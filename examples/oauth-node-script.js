/**
 * Setup:
 *
 *   First, create/configure an application in Asana and obtain the `CLIENT_ID`
 *   and `CLIENT_SECRET`.
 *
 * Usage:
 *
 *   node oauth-node-script.js CLIENT_ID CLIENT_SECRET
 */
var Asana = require("asana");

var args = process.argv.slice(2);
var client = Asana.Client.oauth({
  clientId: args[0],
  clientSecret: args[1]
});

client.authorize().then(function() {
  client.users.me().then(function(me) {
    console.log(me);
  });
});
