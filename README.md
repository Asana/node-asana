Asana
=====

A node.js client for the 1.0 version of the Asana API.

Examples
--------

### Finding information about the default user

```js
var asana = require('asana');
var util = require('util');

var dump = function(value) {
  console.log(util.inspect(value, {
    colors: true,
    depth: null
  }));
};

var client = asana.Client.basicAuth(process.env.ASANA_API_KEY);
client.users.me.then(dump);
```

Installation
------------

Install with npm

```sh
npm install asana --save
```
