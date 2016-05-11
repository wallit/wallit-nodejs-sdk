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
     * @var string the user's token
     */
    var temporaryUserToken = '';
    
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
            ResourceKey: this.getResourceKey(),
            ResourceURL: this.getResourceUrl(),
            IP: this.getIP(),
            AdBlockerStatus: this.getAdBlockerStatus()
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