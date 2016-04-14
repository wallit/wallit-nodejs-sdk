# iMoneza NodeJS API

A NodeJS library to integrate iMoneza into your application.

Using your <http://imoneza.com> account, you can interact with all parts of the API using this library.  This library
was tested and is supported on NodeJS 5.* - but may be compatible with older versions.

## Installation

This library can be installed using npm.

**todo** submit to npm and include install command here

## Basic Usage

There are a number of ways to interact with the API.  But, the way of performing each task is relatively the same.  For
this example, let's get the Property information from iMoneza.

```javascript
var requestCallback = function(err, data) {
    if (err) {
        console.log("There was an error.");
        console.error(err);
    }
    else {
        console.log("It was successful.");
        console.info(data);
    }
};

var bunyan = require('bunyan');
var log = bunyan.createLogger({name: "iMoneza"});

var iMoneza = require('@imoneza/api-library');

var getProperty = new iMoneza.options.manage.getProperty();
var connection = new iMoneza.connection(manageApiKey, manageApiSecret, accessApiKey, accessApiSecret, log);
connection.request(getProperty, requestCallback);
```

## Documentation

[Introduction](docs/01-intro.md)
[The Connection Object](docs/02-connection.md)
[Options Objects](docs/03-options.md)
[Return Data: Main API documentation](http://imoneza.github.io/documentation/docs/api)

## Todo

You can view [the issues](https://github.com/iMoneza/imoneza-nodejs-api/issues) to see what features are still slated to
be completed.

## About

### Requirements

 - NodeJS 5+ (Only tested on 5, may work with older versions but not supported.)
 - iMoneza publisher account

### Bugs, Feature Requests and Testing

Bugs and feature request are tracked on [GitHub](https://github.com/iMoneza/imoneza-nodejs-api/issues).

### Author

[iMoneza, LLC](https://imoneza.com)

#### Contributors

[Aaron Saray](https://github.com/aaronsaray)

### License

This library is licensed under the LGPLv3 License - see the [LICENSE](LICENSE) file for details

