# Asana [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

A node.js client for the 1.0 version of the Asana API.

## Design Decisions

- **Thin Wrapper** This client is a thin wrapper which means that the client
  makes no attempt to verify the validity of the arguments locally. All errors
  are reported by the server. We include custom Error types which will contain
  the response from the server.
- **Promises** Promises with [bluebird][bluebird] seem like the most neutral way
  to support node's various async paradigms. If you want promises, you get them 
  by default. If you want callbacks, bluebird promises support `nodeify` which
  takes a callback as parameter. For generators and streams, [co][co] and
  [highland][highland] also support promises respectively. Beyond that, other
  major libraries such as mongoose, mocha, and elastic search also support
  promises through bluebird.

## Examples

### Find all incomplete tasks assigned to me for today across my workspaces

```js
var asana = require('asana');
var util = require('util');

var client = asana.Client.basicAuth(process.env.ASANA_API_KEY);

client.users.me().then(function(user) {
  return user.workspaces.map(function(workspace) {
    return {
      user: user.id,
      workspace: workspace.id,
      completed_since: 'now'
    };
  });
}).map(function(data) {
  return client.tasks.findAll({
    assignee: data.user,
    workspace: data.workspace,
    opt_fields: 'id,name,assignee_status,completed'
  }).filter(function(task) {
    return task.assignee_status === 'today' && !task.completed;
  });
}).reduce(function(list, tasks) {
  return list.concat(tasks);
}, []).then(function(list) {
  console.log(util.inspect(list, {
    colors: true,
    depth: null
  }));
});
```

## Installation

Install with npm

```sh
npm install asana --save
```

## Documentation

The code is thoroughly documented with JsDoc tags and online documentation can
be found [here][jsdoc]. Also, the  [Official Asana Documentation][asana-doc] is
a great resource since this is just a thin wrapper for the API.

## Contributing

Feel free to fork and submit pull requests for the code. Please follow the
existing code as an example of style and make sure that all your code passes
lint and test. For a sanity check

```sh
git clone git@github.com:pspeter3/node-asana.git
cd node-asana
npm install
npm test
```

[travis-url]: http://travis-ci.org/pspeter3/node-asana
[travis-image]: http://img.shields.io/travis/pspeter3/node-asana.svg?style=flat

[depstat-url]: https://gemnasium.com/pspeter3/node-asana
[depstat-image]: http://img.shields.io/gemnasium/pspeter3/node-asana.svg?style=flat

[bluebird]: https://github.com/petkaantonov/bluebird
[co]: https://github.com/visionmedia/co
[highland]: http://highlandjs.org/

[jsdoc]: http://pspeter3.com/node-asana
[asana-doc]: http://developer.asana.com/documentation/