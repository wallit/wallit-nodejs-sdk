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

var iMoneza = require('@imoneza/imoneza-nodejs-api');

var getProperty = new iMoneza.options.manage.getProperty();
var connection = new iMoneza.connection(manageApiKey, manageApiSecret, accessApiKey, accessApiSecret, log);
connection.request(getProperty, requestCallback);
```

## Documentation

[Introduction](docs/01-intro.md)  
[The Connection Object](docs/02-connection.md)  
[Options Objects](docs/03-options.md)  
[Return Data: Main API documentation](http://imoneza.github.io/documentation/docs/api)  


## About

### Requirements

 - NodeJS 5+ (Only tested on 5, may work with older versions but not supported.)
 - iMoneza publisher account

### Bugs, Feature Requests and Testing

The features of this project are handled internally by iMoneza.  However, we do encourage you to visit [the issues section](https://github.com/iMoneza/imoneza-nodejs-api/issues)
here on GitHub if you have any suggestions, requests, or find a bug.

### Author

[iMoneza, LLC](https://imoneza.com)

#### Contributors

[Aaron Saray](https://github.com/aaronsaray)

### License

This library is licensed under the LGPLv3 License - see the [LICENSE](LICENSE) file for details

