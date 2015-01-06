/**
 * Usage:
 *
 * 1. Set up an application in Asana.
 *   * Set the redirect URI to be a page served by your server
 *   * Record its client ID for use below
 *
 * 2. In the page served by your server:
 *
 *   <script src="//oauth-browser-redirect.js"></script>
 *   <script>
 *     connect(123);  // use your real client ID
 *   </script>
 */
function connect(clientId) {
  var client = Asana.Client.oauth({
    clientId: clientId
  });
  client.authorize().then(function() {
    client.users.me().then(function(me) {
      console.log(me);
    });
  });
}
