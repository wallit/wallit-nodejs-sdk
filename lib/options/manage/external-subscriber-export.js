/**
 * @file Submit an external Subscriber Export Request
 */

'use strict';

var _ = require('lodash'),
    ManageAbstract = require('./_abstract');

/**
 * @constructor
 */
function ExternalSubscriberExport() {
    /** call the abstract class **/
    ManageAbstract.call(this);

    /**
     * @const
     * @type {string}
     */
    const REQUEST_TYPE_POST = 'post';

    /**
     * Start Date
     * @type {Date}
     */
    var startDate;

    /**
     * End Date
     * @type {Date}
     */
    var endDate;

    /**
     * Set Start Date
     * @param date
     * @returns {ExternalSubscriberExport}
     */
    this.setStartDate = function(date) {
        startDate = date;
        return this;
    };

    /**
     * Set End Date
     * @param date
     * @returns {ExternalSubscriberExport}
     */
    this.setEndDate = function(date) {
        endDate = date;
        return this;
    };

    /**
     * This builds the populated values
     * @returns {*}
     */
    this.getPopulatedValues = function() {
        return {
            StartDate: startDate.toISOString(),
            EndDate: endDate.toISOString()
        };
    };
    
    /**
     * Get the endpoint for this request
     * @returns {string}
     */
    this.getEndPoint = function() {
        return "/api/Property/" + this.getAccessKey() + "/ExternalSubscriberExport"
    };

    /**
     * Get the request type
     * @returns {string}
     */
    this.getRequestType = function() {
        return REQUEST_TYPE_POST;
    };
}

/**
 * Configure the abstract
 * @type {ManageAbstract}
 */
ExternalSubscriberExport.prototype = _.create(ManageAbstract.prototype, {
    'constructor': ExternalSubscriberExport
});

module.exports = ExternalSubscriberExport;