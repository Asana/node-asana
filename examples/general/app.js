/**
 * Usage:
 *
 *   export ASANA_API_KEY=...
 *   node app.js
 */
var asana = require('asana');

// Arguments / constants
var accessToken = process.env.ASANA_ACCESS_TOKEN;

// Set up a client using personal access token
var client = asana.Client.create().useAccessToken(accessToken);

client.users.findAll({workspace: }).then(function(users){
    console.log(users);
});