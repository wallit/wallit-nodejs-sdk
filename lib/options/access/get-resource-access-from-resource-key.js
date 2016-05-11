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
     * @var string the user's token
     */
    var userToken = '';
    
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
     * Get the endpoint for this request
     * @returns {string}
     */
    this.getEndPoint = function() {
        return "/api/Resource/" + this.getAccessKey() + "/" + this.getResourceKey();
    };

    /**
     * This builds the populated values - note, the object keys are of the case the API requires
     * @returns {*}
     */
    this.getPopulatedValues = function() {
        return {
            ResourceURL: this.getResourceUrl(),
            UserToken: userToken,
            IP: this.getIP()
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