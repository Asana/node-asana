# Browser Oauth Examples

These examples make use of a really simple Node Express server to serve up
some very basic HTML pages. The JavaScript on those pages connects to Asana,
authenticates a user, and accesses data without any intervention from another
web server.

## Redirect Example

This example shows how to use the `RedirectFlow` when using Oauth with Asana.
It demonstrates client-side JavaScript redirecting the page to Asana's
authorization page, and redirecting back to the app when authorization is
complete.

To use the Redirect example:

  1. Create a developer application in Asana (http://developer.asana.com/documentation/#AsanaConnect)
  2. Set the redirect URI to be the redirect HTML page, served by the server, e.g. `http://localhost:8338/redirect.html`.
  3. Take note of the app's **Client ID** and copy it into the file `dist/redirect.html`
  4. Run the server: `node server.js`
  5. Visit `http://localhost:8338/redirect.html`. You will be redirected to Asana for authorization. When you accept, you'll be redirected back to the HTML page, which will display your name.

## Popup Example

This example shows how to use the `PopupFlow` when using Oauth with Asana.
It demonstrates client-side JavaScript popping up an authorization prompt
on Asana's server in response to a user action.

To use the Popup example:

  1. Create a developer application in Asana (http://developer.asana.com/documentation/#AsanaConnect)
  2. Set the redirect URI to be a "receiver page" served by the server. In this example, the receiver page is `http://localhost:8338/popup_receiver.html`.
  3. Take note of the app's **Client ID** and copy it into the file `dist/popup.html`
  4. Run the server: `node server.js`
  5. Visit `http://localhost:8338/popup.html`. You will be presented with a link to click to begin authorization. When you accept, the popup will close and the original page will display your name.


