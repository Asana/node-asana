# Asana [![GitHub release][release-image]]() [![Build Status][travis-image]][travis-url] [![NPM Version][npm-image]][npm-url]

A JavaScript client (for both Node and browser) for the Asana API v1.0.

## Installation

### Node

Install with npm:

```sh
npm install asana --save
```

### Browser

Include the latest release directly from GitHub.

```html
<script src="https://github.com/Asana/node-asana/releases/download/<LATEST_RELEASE>/asana-min.js"></script>
```

**OR:**

1. Download the latest distribution in [releases](https://github.com/Asana/node-asana/releases).
2. Make sure to serve it from your webserver.
3. Include it on the client from a `<script>` tag.

## Design Decisions

- **Thin Wrapper** This client is a <dfn>thin wrapper</dfn>, which means that the client
  makes little attempt to verify the validity of the arguments locally. All errors
  are reported by the server. We include custom Error types which contain
  the response from the server.
- **Promises** Promises with [bluebird][bluebird] seem like the most neutral way
  to support node's various async paradigms. If you want Promises, you get them 
  by default. If you want callbacks, bluebird promises support `nodeify`, which
  takes a callback as parameter. For generators and streams, [co][co] and
  [highland][highland] also support promises, respectively. Beyond that, other
  major libraries such as mongoose, mocha, and elastic search (which uses 
  bluebird) also support Promises.

## Usage

To do anything, you'll need always an instance of an `Asana.Client` configured
with your preferred authentication method (see the Authentication section below
for more complex scenarios) and other options.

The most minimal example would be as follows:

```js
const asana = require('asana');
const client = asana.Client.create().useAccessToken('my_access_token');
client.users.me().then(function(me) {
  console.log(me);
});
```

All resources are exposed as properties of the `Asana.Client` instance (e.g. `client.workspaces`). See the [developer documentation][api-reference] for docs on each of them.

### Authentication

This module supports authenticating against the Asana API with either a Personal Access Token or through OAuth 2.0.

#### Personal Access Token

```js
const client = Asana.Client.create().useAccessToken('personal_access_token');
```

#### OAuth 2.0

Authenticating through OAuth2 is preferred. There are many ways you can do this.

In all cases, you should create a `Client` that contains your app information. The values in the below snippet should be substituted with the real properties from your application's settings.

```js
const client = Asana.Client.create({
  clientId: 123,
  clientSecret: 'my_client_secret',
  redirectUri: 'my_redirect_uri'
});
```

##### With a plain bearer token (doesn't support auto-refresh)

If you have a plain bearer token obtained somewhere else and you don't mind not
having your token auto-refresh, you can authenticate with it as follows:

```js
client.useOauth({
  credentials: 'my_access_token'
});
```

##### With a refresh token

If you obtained a refresh token (from a previous authorization), you can use it together with your client
credentials to authenticate:

```js
const credentials = {
  // access_token: 'my_access_token',
  refresh_token: 'my_refresh_token'
};
client.useOauth({
  credentials: credentials
});
```

See `examples/oauth/webserver` for a working example of this.

#### Client OAuth

Currently, Asana has removed support for implicit grant and client-side authorization code grant. To correctly implement
oauth in a browser, use your own server as the token exchange endpoint:

```js
Asana.Client.create({
    clientId: clientId,
    redirectUri: 'http://localhost:' + port + '/oauth_callback',
    tokenExchangeEndpoint: 'https://my-app-server.io/oauth_token'
  });
```

When a request comes to your server, verify it's a valid request (either using your own login cookie, cors, etc.). Then 
take the body, add your `client_secret` to it, and send a POST request with the body to 
`https://app.asana.com/-/oauth_token`. This will give your server the access and refresh tokens. Either return the 
access_token to the browser, or keep it on your server if your server handles requests to Asana.

Here is an [express example](https://github.com/Asana/devrel-examples/blob/master/javascript/pkce_oauth/server/index.js) 
for AWS Lambda that works as an app server.

Your client side code will look similar to the [webserver](https://github.com/Asana/node-asana/blob/master/examples/oauth/webserver/oauth_webserver.js)
example, but with client side routing instead of express.

### Collections

Whenever you ask for a collection of resources, you will receive a `Collection`
object which gives you access to a page of results at a time. You can provide
a number of results per page to fetch, between `1` and `100`. 

It defaults to `50` if you don't provide any.

```js
client.tasks.findByTag(tagId, { limit: 5 }).then(function(collection) {
  console.log(collection.data);
  // [ .. array of up to 5 task objects .. ]
});
```

Additionally, `Collection` has a few useful methods that can make them
more convenient to deal with.

#### Individual page iteration

To get the next page of a collection, you do not have to manually construct
the next request. The `nextPage()` method takes care of this for you:

```js
client.tasks.findByTag(tagId).then(firstPage => {
  console.log(firstPage.data);
  firstPage.nextPage().then(secondPage => {
    console.log(secondPage.data);
  });
});
```

#### Automatic page iteration

To automatically fetch a bunch of results and have the client transparently
request pages under the hood, use the `fetch()` method:

```js
client.tasks.findByTag(tagId).then(collection => {
  // Fetch up to 200 tasks, using multiple pages if necessary
  collection.fetch(200).then(tasks => {
    console.log(tasks);
  });
});
```

#### Streaming

You can also construct a `stream` from a collection. This will transparently
(and lazily) fetch the items in the collection in pages as you iterate
through them.

```js
client.tasks.findByTag(tagId).then(collection => {
  collection.stream().on('data', task => {
    console.log(task);
  });
});
```

### Debugging

To quickly debug raw requests. Set debug to true on the Asana dispatcher.
```js
client.dispatcher.debug(true);
```
We use the [request](https://github.com/request/request) library under the hood, and this is equivalent to setting `request.debug = true;`

### Error handling

In any request against the Asana API, there a number of errors that could
arise. Those are well documented in the [Asana API Documentation][api-reference], and
are represented as exceptions under the namespace `Asana.errors`.

## Options

To add global headers (like for our [deprecation framework](https://asana.com/developers/documentation/getting-started/deprecations)), you add them to the client.

```js
    asana.Client.create({"defaultHeaders": {"asana-enable": "string_ids,new_sections"}});
```

### Asana Change Warnings

You will receive warning logs if performing requests that may be affected by a deprecation. The warning contains a link that explains the deprecation.

If you receive one of these warnings, you should:
* Read about the deprecation.
* Resolve sections of your code that would be affected by the deprecation.
* Add the deprecation flag to your `"asana-enable"` header.

If you would rather suppress these warnings, you can do the following:

```js
    asana.Client.create({"logAsanaChangeWarnings": false});
```

## Examples

Various examples are in the repository under `examples/`, but some basic
concepts are illustrated here.

### Find some incomplete tasks assigned to me that are new or marked for today in my default workspace

```js
const Asana = require('asana');
const util = require('util');

// Using a PAT for basic authentication. This is reasonable to get
// started with, but Oauth is more secure and provides more features.

var client = Asana.Client.create().useAccessToken(process.env.ASANA_PAT);

client.users.me()
  .then(user => {
    const userId = user.gid;
    // The user's "default" workspace is the first one in the list, though
    // any user can have multiple workspaces so you can't always assume this
    // is the one you want to work with.
    const workspaceId = user.workspaces[0].gid;
    return client.tasks.findAll({
      assignee: userId,
      workspace: workspaceId,
      completed_since: 'now',
      opt_fields: 'id,name,assignee_status,completed'
    });
  })
  .then(response => {
    // There may be more pages of data, we could stream or return a promise
    // to request those here - for now, let's just return the first page
    // of items.
    return response.data;
  })
  .filter(task => {
    return task.assignee_status === 'today' ||
      task.assignee_status === 'new';
  })
  .then(list => {
    console.log(util.inspect(list, {
      colors: true,
      depth: null
    }));
  })
  .catch(e => {
    console.log(e);
  });
```

## Documentation

The code is thoroughly documented with JSDoc tags. The 
[Official Asana Documentation][asana-doc] is a great resource, since this is 
just a thin wrapper for the API.

## Contributing

Feel free to fork and submit pull requests for the code! Please follow the
existing code as an example of style, and make sure that all your code passes
lint and tests. 

For a sanity check:

```sh
git clone git@github.com:Asana/node-asana.git
cd node-asana
npm install
npm test
```

### Code generation

The specific Asana resource classes within the gen folder (`Tag`, `Workspace`, `Task`, etc.) are
generated code, hence they shouldn't be modified by hand. 

See our [openapi spec][https://github.com/Asana/developer-docs/blob/master/defs/asana_oas.yaml] and [swagger](https://github.com/swagger-api/swagger-codegen) for details.

### Deployment

**Repo Owners Only.** Take the following steps to issue a new release of the library.

  1. Merge in the desired changes into the `master` branch and commit them.
  2. Clone the repo; work on `master`.
  3. Bump the package version to indicate the [semantic version](http://semver.org) change, using one of: `gulp bump-patch`, `gulp bump-feature`, or `gulp bump-release`
  4. Push changes to origin, including tags:
     `git push origin master --tags` 

Travis CI will automatically build and deploy the tagged release.

[release-image]: https://img.shields.io/github/release/asana/node-asana.svg

[travis-url]: http://travis-ci.org/Asana/node-asana
[travis-image]: http://img.shields.io/travis/Asana/node-asana.svg?style=flat-square&branch=master

[npm-url]: https://www.npmjs.org/package/asana
[npm-image]: http://img.shields.io/npm/v/asana.svg?style=flat-square

[bluebird]: https://github.com/petkaantonov/bluebird
[co]: https://github.com/visionmedia/co
[highland]: http://highlandjs.org/

[asana-docs]: https://developers.asana.com/docs
