/**
 * @file Save a Resource
 */

'use strict';

var _ = require('lodash'),
    ManageAbstract = require('./_abstract');

/**
 * @constructor
 * @class
 * @property {string} PRICING_MODEL_INHERIT
 * @property {string} PRICING_MODEL_FREE
 * @property {string} PRICING_MODEL_AUTHENTICATION_REQUIRED
 * @property {string} PRICING_MODEL_FIXED_PRICE
 * @property {string} PRICING_MODEL_VARIABLE_PRICE
 * @property {string} PRICING_MODEL_TIME_TIERED
 * @property {string} PRICING_MODEL_VIEW_TIERED
 * @property {string} PRICING_MODEL_SUBSCRIPTION_ONLY
 * @property {string} PRICING_MODEL_TARGET_CONVERSION
 * @property {string} EXPIRATION_PERIOD_NEVER
 * @property {string} EXPIRATION_PERIOD_YEARS
 * @property {string} EXPIRATION_PERIOD_MONTHS
 * @property {string} EXPIRATION_PERIOD_WEEKS
 * @property {string} EXPIRATION_PERIOD_DAYS
 */
function SaveResource() {
    /** call the abstract class **/
    ManageAbstract.call(this);

    /**
     * the put request type
     * @type {string}
     */
    const REQUEST_TYPE_PUT = 'put';
    
    /**
     * the resource key
     * @type {string}
     */
    var externalKey;

    /**
     * resource name
     * @type {string}
     */
    var name;

    /**
     * resource title
     * @type {string}
     */
    var title;

    /**
     * pricing group ID
     * @type {string}
     */
    var pricingGroupId;

    /**
     * @type {boolean} whether this is active or not
     */
    var active;

    /**
     * @type {string} the URL of this resource
     */
    var url;

    /**
     * @type {string} the by line
     */
    var byline;

    /**
     * @type {string} description of this item
     */
    var description;

    /**
     * @type {Date} the publication date of this item
     */
    var publicationDate;

    /**
     * @type {string} the model
     */
    var pricingModel;

    /**
     * @type {float} the price
     */
    var price;

    /**
     * @type {string} the unit
     */
    var expirationPeriodUnit;

    /**
     * @type {int} the period value
     */
    var expirationPeriodValue;

    /**
     * @type {float} the rate
     */
    var targetConversionRate;

    /**
     * @type {float} the lowest
     */
    var targetConversionPriceFloor;

    /**
     * @type {int} number of hits required
     */
    var targetConversionHitsPerRecalculationPeriod;

    /**
     * @type {string} the paywall description for this resource
     */
    var paywallDescription;

    /**
     * @type {string} the short description for this resource
     */
    var paywallShortDescription;

    /**
     * @param param
     * @returns {SaveResource}
     */
    this.setExternalKey = function(param) {
        externalKey = param;
        return this;
    };

    /**
     * @param param
     * @returns {SaveResource}
     */
    this.setName = function(param) {
        name = param;
        return this;
    };

    /**
     * @param param
     * @returns {SaveResource}
     */
    this.setTitle = function(param) {
        title = param;
        return this;
    };

    /**
     * @param param
     * @returns {SaveResource}
     */
    this.setPricingGroupId = function(param) {
        pricingGroupId = param;
        return this;
    };

    /**
     * @param param
     * @returns {SaveResource}
     */
    this.setActive = function(param) {
        active = param;
        return this;
    };

    /**
     * @param param
     * @returns {SaveResource}
     */
    this.setUrl = function(param) {
        url = param;
        return this;
    };

    /**
     * @param param
     * @returns {SaveResource}
     */
    this.setByline = function(param) {
        byline = param;
        return this;
    };

    /**
     * @param param
     * @returns {SaveResource}
     */
    this.setDescription = function(param) {
        description = param;
        return this;
    };

    /**
     * @param dateObject
     * @returns {SaveResource}
     */
    this.setPublicationDate = function(dateObject) {
        publicationDate = dateObject;
        return this;
    };

    /**
     * @param param
     * @returns {SaveResource}
     */
    this.setPricingModel = function(param) {
        pricingModel = param;
        return this;
    };

    /**
     * @param param
     * @returns {SaveResource}
     */
    this.setPrice = function(param) {
        price = param;
        return this;
    };

    /**
     * @param param
     * @returns {SaveResource}
     */
    this.setExpirationPeriodUnit = function(param) {
        expirationPeriodUnit = param;
        return this;
    };

    /**
     * @param param
     * @returns {SaveResource}
     */
    this.setExpirationPeriodValue = function(param) {
        expirationPeriodValue = param;
        return this;
    };

    /**
     * @param param
     * @returns {SaveResource}
     */
    this.setTargetConversionRate = function(param) {
        targetConversionRate = param;
        return this;
    };

    /**
     * @param param
     * @returns {SaveResource}
     */
    this.setTargetConversionPriceFloor = function(param) {
        targetConversionPriceFloor = param;
        return this;
    };

    /**
     * @param param
     * @returns {SaveResource}
     */
    this.setTargetConversionHitsPerRecalculationPeriod = function(param) {
        targetConversionHitsPerRecalculationPeriod = param;
        return this;
    };

    /**
     * @param param
     * @returns {SaveResource}
     */
    this.setPaywallDescription = function(param) {
        paywallDescription = param;
        return this;
    };

    /**
     * @param param
     * @returns {SaveResource}
     */
    this.setPaywallShortDescription = function(param) {
        paywallShortDescription = param;
        return this;
    };
    
    /**
     * Get the endpoint for this request
     * @returns {string}
     */
    this.getEndPoint = function() {
        return "/api/Property/" + this.getAccessKey() + "/Resource/" + externalKey;
    };

    /**
     * Get the request type
     * @returns {string}
     */
    this.getRequestType = function() {
        return REQUEST_TYPE_PUT;
    };

    /**
     * This builds the populated values - note, the object keys are of the case the API requires
     * @todo is there a better way to do this? (kinda how the PHP one does it?)
     * @returns {*}
     */
    this.getPopulatedValues = function() {
        var values = {};
        if (externalKey != null) {
            values['ExternalKey'] = externalKey;
        }
        if (name != null) {
            values['Name'] = name;
        }
        if (title != null) {
            values['Title'] = title;
        }
        if (pricingGroupId != null) {
            values['PricingGroup'] = {
                'PricingGroupID': pricingGroupId
            };
        }
        if (active != null) {
            values['Active'] = active;
        }
        if (url != null) {
            values['URL'] = url;
        }
        if (byline != null) {
            values['Byline'] = byline;
        }
        if (description != null) {
            values['Description'] = description;
        }
        if (pricingModel != null) {
            values['PricingModel'] = pricingModel;
        }
        if (price != null) {
            values['Price'] = price;
        }
        if (expirationPeriodUnit != null) {
            values['ExpirationPeriodUnit'] = expirationPeriodUnit;
        }
        if (expirationPeriodValue != null) {
            values['ExpirationPeriodValue'] = expirationPeriodValue;
        }
        if (targetConversionRate != null) {
            values['TargetConversionRate'] = targetConversionRate;
        }
        if (targetConversionPriceFloor != null) {
            values['TargetConversionPriceFloor'] = targetConversionPriceFloor;
        }
        if (targetConversionHitsPerRecalculationPeriod != null) {
            values['TargetConversionHitsPerRecalculationPeriod'] = targetConversionHitsPerRecalculationPeriod;
        }
        if (publicationDate != null) {
            values['ExternalKey'] = publicationDate.toISOString();
        }
        if (paywallDescription != null) {
            values['PaywallDescription'] = paywallDescription;
        }
        if (paywallShortDescription != null) {
            values['PaywallShortDescription'] = paywallShortDescription;
        }
        return values;
    };
}

/**
 * Configure the abstract
 * @type {SaveResource}
 */
SaveResource.prototype = _.create(ManageAbstract.prototype, {
    'constructor': SaveResource
});

Object.defineProperty(SaveResource, 'PRICING_MODEL_INHERIT', {
    value: "Inherit",
    writable: false,
    enumerable: true
});
Object.defineProperty(SaveResource, 'PRICING_MODEL_FREE', {
    value: "Free",
    writable: false,
    enumerable: true
});
Object.defineProperty(SaveResource, 'PRICING_MODEL_AUTHENTICATION_REQUIRED', {
    value: "AuthenticationRequired",
    writable: false,
    enumerable: true
});
Object.defineProperty(SaveResource, 'PRICING_MODEL_FIXED_PRICE', {
    value: "FixedPrice",
    writable: false,
    enumerable: true
});
Object.defineProperty(SaveResource, 'PRICING_MODEL_VARIABLE_PRICE', {
    value: "VariablePrice",
    writable: false,
    enumerable: true
});
Object.defineProperty(SaveResource, 'PRICING_MODEL_TIME_TIERED', {
    value: "TimeTiered",
    writable: false,
    enumerable: true
});
Object.defineProperty(SaveResource, 'PRICING_MODEL_VIEW_TIERED', {
    value: "ViewTiered",
    writable: false,
    enumerable: true
});
Object.defineProperty(SaveResource, 'PRICING_MODEL_SUBSCRIPTION_ONLY', {
    value: "SubscriptionOnly",
    writable: false,
    enumerable: true
});
Object.defineProperty(SaveResource, 'PRICING_MODEL_TARGET_CONVERSION', {
    value: "TargetConversion",
    writable: false,
    enumerable: true
});

Object.defineProperty(SaveResource, 'EXPIRATION_PERIOD_NEVER', {
    value: "Never",
    writable: false,
    enumerable: true
});
Object.defineProperty(SaveResource, 'EXPIRATION_PERIOD_YEARS', {
    value: "Years",
    writable: false,
    enumerable: true
});
Object.defineProperty(SaveResource, 'EXPIRATION_PERIOD_MONTHS', {
    value: "Months",
    writable: false,
    enumerable: true
});
Object.defineProperty(SaveResource, 'EXPIRATION_PERIOD_WEEKS', {
    value: "Weeks",
    writable: false,
    enumerable: true
});
Object.defineProperty(SaveResource, 'EXPIRATION_PERIOD_DAYS', {
    value: "Days",
    writable: false,
    enumerable: true
});

module.exports = SaveResource;