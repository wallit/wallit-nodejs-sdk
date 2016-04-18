/**
 * @file the test for the GetResourcesFromProperty option
 */

var chai = require('chai'),
    expect = chai.expect,
    GetResourcesFromProperty = require('../../../lib/options/manage/get-resources-from-property');

describe('GetResourcesFromProperty', function() {
    it('Creates a proper endpoint', function() {
        var getResourcesFromProperty = new GetResourcesFromProperty();
        expect(getResourcesFromProperty.setAccessKey('access-key-here')).to.be.an.instanceof(GetResourcesFromProperty);
        expect(getResourcesFromProperty.getEndPoint()).to.equal('/api/Property/access-key-here/Resource');
    });
    it('Should give a request type of GET', function() {
        var getResourcesFromProperty = new GetResourcesFromProperty();
        expect(getResourcesFromProperty.getRequestType()).to.equal('get');
    });
    it('Should give a manageapi base url', function() {
        var getResourcesFromProperty = new GetResourcesFromProperty();
        expect(getResourcesFromProperty.getApiBaseURL()).to.equal('https://manageapi.imoneza.com');
    });
});