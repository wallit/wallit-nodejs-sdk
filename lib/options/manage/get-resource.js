/**
 * @file Get a Resource
 */

'use strict';

var _ = require('lodash'),
    ManageAbstract = require('./_abstract');

/**
 * @constructor
 */
function GetResource() {
    /** call the abstract class **/
    ManageAbstract.call(this);

    /**
     * The resource key you'd like to retrieve
     * @type {string}
     */
    var resourceKey = '';

    /**
     * Set the resource key
     * @param param
     * @returns {GetResource}
     */
    this.setResourceKey = function(param) {
        resourceKey = param;
        return this;
    };
    
    /**
     * Get the endpoint for this request
     * @returns {string}
     */
    this.getEndPoint = function() {
        return "/api/Property/" + this.getAccessKey() + "/Resource/" + resourceKey;
    };
}

/**
 * Configure the abstract
 * @type {ManageAbstract}
 */
GetResource.prototype = _.create(ManageAbstract.prototype, {
    'constructor': GetResource
});

module.exports = GetResource;