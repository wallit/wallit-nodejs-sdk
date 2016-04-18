# iMoneza NodeJS API Documentation

## Options Objects

The first parameter of the `Connection.request()` method requires an options object of the type `ManageOptionsAbstract`
or `AccessOptionsAbstract` in order to determine what the job of this connection will be.

There are a number of public methods that are used in order to facilitate this connection.  You should be mainly concerned
with any setters that are exposed, however.  This is how you will configure this particular object - if it needs to be configured, that is.

The names of the objects tend to verbosely reflect the nature of their request.

The options are spit between the Access and the Management APIs.  Let's look through them.

### Options Object Definitions

#### `Manage.GetProperty`

This is used to retrieve the current property details.  This uses your API key to determine the property.  There are no
setters that you'll need to access.
