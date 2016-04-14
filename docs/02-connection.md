# iMoneza NodeJS API Documentation

## Connection Object

The connection object is responsible for accepting your credentials, sending a request, retrieving a response and emitting
any errors.  To use the connection object, you must have access to both API's (access and management).  You may also need
a [Bunyan](https://www.npmjs.com/package/bunyan) compatible logger if you'd like to have logs (highly recommended.)

### Constructing the Connection Object

The connection can be created like this:

    var iMoneza = require('@imoneza/imoneza-nodejs-api');
    var connection = new iMoneza.connection(manageApiKey, manageApiSecret, accessApiKey, accessApiSecret, log);

**log** It is recommended to pass in Bunyan as the logger.  This argument is not required, however.  _Debug_ issues the
most data, _info_ has general workflow notices.  When an exception is issued, a _error_ is recorded as well.

**managementApiKey** and **managementSecret** are your management API key and secret respectively.

**accessApiKey** and **accessSecret** are your access API key and secret respectively.

### Sending a request

In order to send a request, you can call the `request` method of the object.  This method requires a `ManageOptionsAbstract`
or `AccessOptionsAbstract` object as the first parameter, and a standard NodeJS callback as the second parameter.  The first object
contains all of the options for the request.  The callback will receive a first parameter of error status, and a second
parameter of a possible standard javascript object response.

For example, note this code:

    var GetPropery = new iMoneza.options.manage.getProperty();
    connection.request(GetProperty, function(err, data) {});

If there is an error, the callback `err` will be populated with a javascript object that is either a custom error or the
standard javascript Error object.  If this is a successful request, the `data` object will be populated with a standard
javascript object.

### Errors

The `request()` method callback will populate the first parameter, the `err` parameter, when there is a problem.
Detailed below are the custom Error objects and what they mean.

- `AccessDeniedError` is equivalent to an HTTP 403 error.  The request is not authorized.  Check to make sure
that you are sending an API Key and Secret.

- `AuthenticationFailureError` means that the api key or the secret is invalid.

- `NotFoundError` means that the resource you're requesting is not found.  This could mean it was moved, it changed
somehow or that it never existed.  Commonly this is issued when a resource key is invalid.

- `Error` means that the transfer between iMoneza and you failed in some capacity that was not already captured by a
previous named exception above.

You might try an example like this:

    function myCallback(err, data) {
        if (err) {
            if (err instanceof NotFoundError) {
                console.log('Ruh roh - 404!');
            }
            else {
                console.log('Something else bad happened!');
            }
        }
        else {
            console.log('woo! Data is populated!');
        }
    }

    var iMoneza = require('@imoneza/imoneza-nodejs-api');
    var connection = new iMoneza.connection(manageApiKey, manageApiSecret, accessApiKey, accessApiSecret, log);
    var GetPropery = new iMoneza.options.manage.getProperty();
    connection.request(GetProperty, myCallback);

