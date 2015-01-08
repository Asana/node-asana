# Script Oauth Example

This example demonstrates how to use Oauth from a command-line script in Node.
All Asana authorization requires a web browser to visit UI presented by Asana.
Scripts run at the command line so they cannot easily request and receive this
authorization programmatically, but they can prompt the user to get it and
enter it manually. This example uses the `NativeFlow` for this.

## Setup

To run the Script example:

  1. Create a developer application in Asana (http://developer.asana.com/documentation/#AsanaConnect)
  2. Set the application's redirect URI to be the special native app URI: `urn:ietf:wg:oauth:2.0:oob`
  3. Note the app's **Client ID** and **Client Secret** for use when running the web server (below).

## Running

Run the following commands, substituting the **Client ID** and **Client Secret** from the app configuration.

    export ASANA_CLIENT_ID=...
    export ASANA_CLIENT_SECRET=...
    node oauth_script.js

The script should instruct you to open a web browser to a specific URL and
follow the instructions there. It will ask you to copy an *authorization code*
into the console, which it will exchange for a token. Then it will demonstrate
access to your data by printing your name.
