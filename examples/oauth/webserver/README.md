# Webserver Oauth Example

This example demonstrates how to use Oauth from a webserver built with Node.
It uses the `express` library, which is a common way of building
webservers, but it should be easy to apply to other frameworks.

This simple server has a home page that attempts to render a web page containing
the authorized user's name. If the user is not authorized, it redirects to
Asana to get credentials. When the user is redirected back, the credentials
are stored in a cookie and

Unlike the other uses of Oauth in JS, there is no "flow" associated with this
usage of Oauth. Instead, you make use of a few utility methods in the Asana
client library:

  * `client.app.asanaAuthorizeUrl` will return the Asana url that the
    user should visit to obtain authorization. The example server redirects
    to this url.
  * `client.app.accessTokenFromCode` will make a request to the Asana API to
    exchange an Oauth authorization code for an access token. The example
    app then stores these credentials in a cookie to use when configuring
    the Asana client on subsequent requests.

## Setup

To run the Webserver example:

  1. Create a developer application in Asana (http://developer.asana.com/documentation/#AsanaConnect)
  2. Set the application's redirect URI to point to the Oauth callback endpoint in the example app: `http://localhost:8338/oauth_callback`
  3. Note the app's **Client ID** and **Client Secret** for use when running the web server (below).

## Running

Run the following commands, substituting the **Client ID** and **Client Secret** from the app configuration.

    export ASANA_CLIENT_ID=...
    export ASANA_CLIENT_SECRET=...
    node server.js

Then visit `http://localhost:8338/` to interact with the server. It stores
the Oauth token in a cookie named `token`, so you can clear that cookie from
the browser to reset the state.
