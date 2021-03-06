# Wallit NodeJS SDK Documentation

## Options Objects

The first parameter of the `Connection.request()` method requires an options object of the type `ManageOptionsAbstract`
or `AccessOptionsAbstract` in order to determine what the job of this connection will be.

There are a number of public methods that are used in order to facilitate this connection.  You should be mainly concerned
with any setters that are exposed, however.  This is how you will configure this particular object - if it needs to be configured, that is.

The names of the objects tend to verbosely reflect the nature of their request.

The options are spit between the Access and the Management APIs.  Let's look through them.

### Options Object Definitions

#### `Access.GetResourceFromResourceKey`

This is used to retrieve resources from the external key (or resource key).  The following setters may be used:

- `setResourceKey()`  Use this to set the resource key for your resource you're attempting to retrieve.

- `setResourceURL()`  This is used to set the URL of the resource.

- `setUserToken()`  This is optional for the first request - but it should be used after the first request with all 
future requests.  This is how a user is identified.

- `setIP()`  This is optional but is recommended for logging and security.  

- `setAdBlockerStatus()`  Optionally indicate if any ad block status indication was performed.  The allowed values are
constant-like properties on the `AccessOptionsAbstract` object.

#### `Access.GetResourceFromTemporaryUserToken`

This is used to retrieve resources from the external key and user temp token.  The following setters may be used:

- `setResourceKey()`  Use this to set the resource key for your resource you're attempting to retrieve.

- `setResourceURL()`  This is used to set the URL of the resource.

- `setTemporaryUserToken()`  Set the temporary user token.

- `setIP()`  This is optional but is recommended for logging and security.  

- `setAdBlockerStatus()`  Optionally indicate if any ad block status indication was performed.  The allowed values are
constant-like properties on the `AccessOptionsAbstract` object.

#### `Manage.GetProperty`

This is used to retrieve the current property details.  This uses your API key to determine the property.  There are no
setters that you'll need to access.

#### `Manage.GetResource`

This is used to retrieve a resource from the current property.

- `setResourceKey()` Use this to set the resource key (or external ID) of the resource belonging to your property that you'd like to retrieve.

#### `Manage.GetResourcesFromProperty`

This is used to retrieve all the resources from the current property.  There are no setters that you'll need to access.

#### `Management.SaveResource`

This is used to save a new resource or update an existing one.  The following setters are available:

- `setExternalKey()` Use this to set the resource key (or external ID) of the resource.

- `setName()` Use this to set the the internal name of the resource.

- `setTitle()` Use this to set the title of the resource.

- `setPricingGroupId()` Use this to pass in the pricing group ID for this resource.

- `setActive()` Set a boolean whether this is active or not.

- `setURL()` Set the resource URL.

- `setByline()` The by-line of this element.

- `setDescription()` Set the description.

- `setPublicationDate()` Sets the publication date of this resource (use a Date object).

- `setPricingModel()` The pricing model for this resource. (There are public properties that act like constants for these values under the naming scheme `PRICING_MODEL_*`)

- `setPrice()` The price of this content.

- `setExpirationPeriodUnit()` What unit expirations should be measured in.

- `setExpirationPeriodValue()` What the value for expiration should be.

- `setTargetConversionRate()`

- `setTargetConversionPriceFloor()`

- `setTargetConversionHitsPerRecalculationPeriod()`

- `setPaywallDescription()`

- `setPaywallShortDescription()`

#### `Management.GetCAllbackResult`

This retrieves the result from a callback received from iMoneza.  The following setters are available:

- `setCallbackToken()` Set the token for the request.

#### `Management.ExternalSubscriberExport`

This initializes a request for an external subscriber export.  The export will be available after a callback is received.  The following setters are available:

- `setStartDate()` The start date of subscribers (use a Date Object)

- `setEndDate()` The end date of the subscriber export (user a Date Object)
