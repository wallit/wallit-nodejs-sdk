/**
 * @file the test for the GetProperty option
 */

var chai = require('chai'),
    expect = chai.expect,
    GetProperty = require('../../../lib/options/manage/get-property');

describe('GetProperty', function() {
    it('Creates a proper endpoint', function() {
        var getProperty = new GetProperty();
        getProperty.setAccessKey('access-key-here');
        expect(getProperty.getEndPoint()).to.equal('/api/Property/access-key-here');
    });
    it('Should give a request type of GET', function() {
        var getProperty = new GetProperty();
        expect(getProperty.getRequestType()).to.equal('get');
    });
    it('Should give a manageapi base url', function() {
        var getProperty = new GetProperty();
        expect(getProperty.getApiBaseURL()).to.equal('https://manageapi.imoneza.com');
    });
});