/**
 * @file Get the Resource access from the Resource Key
 */

'use strict';

var _ = require('lodash'),
    AccessAbstract = require('./_abstract');

/**
 * @constructor
 */
function GetResourceAccessFromResourceKey() {
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
    var userToken = '';

    /**
     * @var string the request IP
     */
    var IP = '';

    /**
     * Set the resource key
     * @param param
     * @returns {GetResourceAccessFromResourceKey}
     */
    this.setResourceKey = function(param) {
        resourceKey = param;
        return this;
    };

    /**
     * Set the resource url
     * @param param
     * @returns {GetResourceAccessFromResourceKey}
     */
    this.setResourceUrl = function(param) {
        resourceUrl = param;
        return this;
    };
    
    /**
     * Set the optional user token
     * @param param
     * @returns {GetResourceAccessFromResourceKey}
     */
    this.setUserToken = function(param) {
        userToken = param;
        return this;
    };

    /**
     * Set the optional user IP
     * @param param
     * @returns {GetResourceAccessFromResourceKey}
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
        return "/api/Resource/" + this.getAccessKey() + "/" + resourceKey;
    };

    /**
     * This builds the populated values - note, the object keys are of the case the API requires
     * @returns {*}
     */
    this.getPopulatedValues = function() {
        return {
            ResourceURL: resourceUrl,
            UserToken: userToken,
            IP: IP
        };
    };
}

/**
 * Configure the abstract
 * @type {GetResourceAccessFromResourceKey}
 */
GetResourceAccessFromResourceKey.prototype = _.create(AccessAbstract.prototype, {
    'constructor': GetResourceAccessFromResourceKey
});

module.exports = GetResourceAccessFromResourceKey;