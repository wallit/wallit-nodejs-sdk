/**
 * @file Get a Callback result
 */

'use strict';

var _ = require('lodash'),
    ManageAbstract = require('./_abstract');

/**
 * @constructor
 */
function GetCallbackResult() {
    /** call the abstract class **/
    ManageAbstract.call(this);

    /**
     * The token
     * @type {string}
     */
    var callbackToken = '';

    /**
     * Setter
     * @param param
     * @returns {GetCallbackResult}
     */
    this.setCallbackToken = function(param) {
        callbackToken = param;
        return this;
    };
    
    /**
     * Get the endpoint for this request
     * @returns {string}
     */
    this.getEndPoint = function() {
        return "/api/Property/" + this.getAccessKey() + "/CallbackResult/" + callbackToken;
    };
}

/**
 * Configure the abstract
 * @type {ManageAbstract}
 */
GetCallbackResult.prototype = _.create(ManageAbstract.prototype, {
    'constructor': GetCallbackResult
});

module.exports = GetCallbackResult;