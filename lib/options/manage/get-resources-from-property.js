/**
 * @file Get all property resources
 */

'use strict';

var _ = require('lodash'),
    ManageAbstract = require('./_abstract');

/**
 * @constructor
 */
function GetResourcesFromProperty() {
    /** call the abstract class **/
    ManageAbstract.call(this);
    
    /**
     * Get the endpoint for this request
     * @returns {string}
     */
    this.getEndPoint = function() {
        return "/api/Property/" + this.getAccessKey()  + "/Resource"
    };
}

/**
 * Configure the abstract
 * @type {ManageAbstract}
 */
GetResourcesFromProperty.prototype = _.create(ManageAbstract.prototype, {
    'constructor': GetResourcesFromProperty
});

module.exports = GetResourcesFromProperty;