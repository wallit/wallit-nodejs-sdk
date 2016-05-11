/**
 * @file the abstract access class
 */

/**
 * Access Options
 * @constructor
 * @abstract
 */
function AccessOptionsAbstract() {

    /**
     * The get request type
     * @type {string}
     */
    const REQUEST_TYPE_GET = 'get';

    /**
     * The API Url for this type of Option request
     * @type {string}
     */
    var apiBaseURL = 'https://accessapi.imoneza.com';

    /**
     * The API's Key
     * @type {string}
     */
    var accessKey = '';

    /**
     * @var string the resource key
     */
    var resourceKey = '';

    /**
     * @var string the request IP
     */
    var IP = '';
    
    /**
     * @var string the resource URL
     */
    var resourceUrl = '';

    /**
     * Override the API key
     * @param url
     * @returns {AccessOptionsAbstract}
     */
    this.setApiBaseURL = function(url) {
        apiBaseURL = url;
        return this;
    };

    /**
     * Get the API key
     * @returns {string}
     */
    this.getApiBaseURL = function() {
        return apiBaseURL;
    };

    /**
     * Sets the API Access Key
     * @param key
     * @returns {AccessOptionsAbstract}
     */
    this.setAccessKey = function(key) {
        accessKey = key;
        return this;
    };

    /**
     * Get API Access Key
     * @returns {string}
     */
    this.getAccessKey = function() {
        return accessKey;
    };

    /**
     * Set the resource key
     * @param param
     * @returns {AccessOptionsAbstract}
     */
    this.setResourceKey = function(param) {
        resourceKey = param;
        return this;
    };

    /**
     * Get the resource key
     * @returns {string}
     */
    this.getResourceKey = function() {
        return resourceKey;
    };
    
    /**
     * Set the optional user IP
     * @param param
     * @returns {AccessOptionsAbstract}
     */
    this.setIP = function(param) {
        IP = param;
        return this;
    };

    /**
     * Get the IP
     * @returns {string}
     */
    this.getIP = function() {
        return IP;
    };
    
    /**
     * Set the resource url
     * @param param
     * @returns {AccessOptionsAbstract}
     */
    this.setResourceUrl = function(param) {
        resourceUrl = param;
        return this;
    };

    /**
     * Get the resource URL
     * @returns {string}
     */
    this.getResourceUrl = function() {
        return resourceUrl;
    };
    
    /**
     * Get the request type
     * @returns {string}
     */
    this.getRequestType = function() {
        return REQUEST_TYPE_GET;
    };

    this.getEndPoint = function() {
        throw new Error('This is an abstract method.');
    };

    this.getPopulatedValues = function() {
        return {};
    };
}

module.exports = AccessOptionsAbstract;