/**
 * @file Get the Property
 */

'use strict';

var _ = require('lodash'),
    ManageAbstract = require('./_abstract');

/**
 * The Get Property Option
 * @constructor
 */
function GetProperty() {
    /** call the abstract class **/
    ManageAbstract.call(this);
    
    /**
     * Get the endpoint for this request
     * @returns {string}
     */
    this.getEndPoint = function() {
        return "/api/Property/" + this.getAccessKey();
    };
}

/**
 * Configure the abstract
 * @type {ManageAbstract}
 */
GetProperty.prototype = _.create(ManageAbstract.prototype, {
    'constructor': GetProperty
});

module.exports = GetProperty;