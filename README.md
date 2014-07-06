# Asana [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

A node.js client for the 1.0 version of the Asana API. This client is a thin
client for the API which means it tries just to provide proxy methods for the 
API and does no local validation.

## Examples

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

## Installation

Install with npm

```sh
npm install asana --save
```

## Documentation

The code is thoroughly documented with JsDoc tags and online documentation can
be found [here](http://pspeter3.com/node-asana).

[travis-url]: http://travis-ci.org/pspeter3/node-asana
[travis-image]: http://img.shields.io/travis/pspeter3/node-asana.svg?style=flat

[depstat-url]: https://gemnasium.com/pspeter3/node-asana
[depstat-image]: http://img.shields.io/gemnasium/pspeter3/node-asana.svg?style=flat