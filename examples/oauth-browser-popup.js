/**
 * Usage:
 *
 * 1. Set up an application in Asana.
 *   * Set the redirect URI to be a "receiver page" served by your server
 *   * Record its client ID for use below
 *
 * 2. In the receiver page served by your server:
 *
 *   <script src="//asana.js"></script>
 *   <script>
 *     Asana.auth.OauthFlowBrowserPopup.runReceiver();
 *   </script>
 *
 * 3. In the app page served by your server:
 *
 *   <script src="//asana.js"></script>
 *   <script src="//oauth-browser-popup.js"></script>
 *   <a href="#" onclick="connect(123);">Authorize</a> <!-- use client ID -->
 */
function connect(clientId) {
  var client = Asana.Client.oauth({
    clientId: clientId,
    flowType: Asana.auth.OauthFlowBrowserPopup
  });
  client.authorize().then(function() {
    client.users.me().then(function(me) {
      console.log(me);
    });
  });
}