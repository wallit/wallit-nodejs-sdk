/**
 * @file the Connection object
 */

var ManagementOptionsAbstract = require('./options/management/_abstract'),
    moment = require('moment'),
    crypto = require('crypto');

/**
 * Connection object
 *
 * @param manageApiKey
 * @param manageApiSecret
 * @param accessApiKey
 * @param accessApiSecret
 * @param logger
 * @constructor
 */
var Connection = function(manageApiKey, manageApiSecret, accessApiKey, accessApiSecret, logger) {
    var manageApi = {
        key: manageApiKey,
        secret: manageApiSecret
    },
    accessApi = {
        key: accessApiKey,
        secret: accessApiSecret
    },
    log = logger;

    /**
     * Request method
     *
     * @param options
     * @param callback(err, dataObject)
     */
    this.request = function(options, callback) {
        if (!(options instanceof ManagementOptionsAbstract)) {
            throw new Error('Please pass in a Management Options object.');
        }

        var keys = (options instanceof ManagementOptionsAbstract) ? manageApi : accessApi;
        options.setAccessKey(keys.key);

        var endPoint = options.getEndPoint(),
            requestType = options.getRequestType(),
            url = options.getApiBaseURL() + endPoint;

        log.debug("URL: " + url);

        var timestamp = moment().utc().format('ddd, DD MMM YYYY HH:mm:ss ') + 'GMT';

        var tokenValues = [
            requestType.toUpperCase(),
            timestamp,
            endPoint.toLowerCase(),
            ''
        ];

        log.debug({tokenValues: tokenValues}, 'Token values');

        var tokenValuesString = tokenValues.join("\n");
        var hmac = crypto.createHmac('sha256', keys.secret);
        hmac.setEncoding('binary');
        hmac.write(tokenValuesString);
        hmac.end();
        var token = hmac.read();
        
        log.debug("Token created: " + token);

        var authentication = keys.key + ":" + token;
        log.info("About to send to " + url + " via " + requestType + " with options of " + options.constructor.name);

        if (true) {
            callback(null, {});
        }
        else {
            callback({});
        }
    };
};

module.exports = Connection;