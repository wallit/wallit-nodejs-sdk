/**
 * @file the test for the GetResource option
 */

var chai = require('chai'),
    expect = chai.expect,
    GetResource = require('../../../lib/options/manage/get-resource');

describe('GetResource', function() {
    it('Creates a proper endpoint', function() {
        var getResource = new GetResource();
        expect(getResource.setAccessKey('access-key-here')).to.be.an.instanceof(GetResource);
        expect(getResource.setResourceKey('resource-key-here')).to.be.an.instanceof(GetResource);
        expect(getResource.getEndPoint()).to.equal('/api/Property/access-key-here/Resource/resource-key-here');
    });
    it('Should give a request type of GET', function() {
        var getResource = new GetResource();
        expect(getResource.getRequestType()).to.equal('get');
    });
    it('Should give a manageapi base url', function() {
        var getResource = new GetResource();
        expect(getResource.getApiBaseURL()).to.equal('https://manageapi.imoneza.com');
    });
});