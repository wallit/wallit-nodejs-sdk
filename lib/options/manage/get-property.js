/**
 * @file Get the Property
 */

'use strict';

var _ = require('lodash'),
    ManagementAbstract = require('./_abstract');

/**
 * The Get Property Option
 * @constructor
 */
function GetProperty() {
    /** call the abstract class **/
    ManagementAbstract.call(this);
    
    /**
     * Get the endpoint for this request
     * @returns {string}
     */
    this.getEndPoint = function() {
        return "/api/Property/" + this.getAccessKey();
    };
};

/**
 * Configure the abstract
 * @type {ManagementAbstract}
 */
GetProperty.prototype = _.create(ManagementAbstract.prototype, {
    'constructor': GetProperty
});

module.exports = GetProperty;