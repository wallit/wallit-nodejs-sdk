/**
 * @file Get the Resource access from the temporary user token
 */

'use strict';

var _ = require('lodash'),
    AccessAbstract = require('./_abstract');

/**
 * @constructor
 */
function GetResourceAccessFromTemporaryUserToken() {
    /** call the abstract class **/
    AccessAbstract.call(this);

    /**
     * @var string the resource key
     */
    var resourceKey = '';

    /**
     * @var string the resource URL
     */
    var resourceUrl = '';

    /**
     * @var string the user's token
     */
    var temporaryUserToken = '';

    /**
     * @var string the request IP
     */
    var IP = '';

    /**
     * Set the resource key
     * @param param
     * @returns {GetResourceAccessFromTemporaryUserToken}
     */
    this.setResourceKey = function(param) {
        resourceKey = param;
        return this;
    };

    /**
     * Set the resource url
     * @param param
     * @returns {GetResourceAccessFromTemporaryUserToken}
     */
    this.setResourceUrl = function(param) {
        resourceUrl = param;
        return this;
    };
    
    /**
     * Set the temporary user token
     * @param param
     * @returns {GetResourceAccessFromTemporaryUserToken}
     */
    this.setTemporaryUserToken = function(param) {
        temporaryUserToken = param;
        return this;
    };

    /**
     * Set the optional user IP
     * @param param
     * @returns {GetResourceAccessFromTemporaryUserToken}
     */
    this.setIP = function(param) {
        IP = param;
        return this;
    };
    
    /**
     * Get the endpoint for this request
     * @returns {string}
     */
    this.getEndPoint = function() {
        return "/api/TemporaryUserToken/" + this.getAccessKey() + "/" + temporaryUserToken;
    };

    /**
     * This builds the populated values - note, the object keys are of the case the API requires
     * @returns {*}
     */
    this.getPopulatedValues = function() {
        return {
            ResourceKey: resourceKey,
            ResourceURL: resourceUrl,
            IP: IP
        };
    };
}

/**
 * Configure the abstract
 * @type {GetResourceAccessFromTemporaryUserToken}
 */
GetResourceAccessFromTemporaryUserToken.prototype = _.create(AccessAbstract.prototype, {
    'constructor': GetResourceAccessFromTemporaryUserToken
});

module.exports = GetResourceAccessFromTemporaryUserToken;