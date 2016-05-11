/**
 * @file the test for the Get Resource Access class
 */

var chai = require('chai'),
    expect = chai.expect,
    GetResourceAccessFromResourceKey = require('../../../lib/options/access/get-resource-access-from-resource-key');

describe('GetResourceAccessFromResourceKey', function() {
    it('Should give a request type of GET', function() {
        var getResourceAccessFromResourceKey = new GetResourceAccessFromResourceKey();
        expect(getResourceAccessFromResourceKey.getRequestType()).to.equal('get');
    });
    it('Should give a accessapi base url', function() {
        var getResourceAccessFromResourceKey = new GetResourceAccessFromResourceKey();
        expect(getResourceAccessFromResourceKey.getApiBaseURL()).to.equal('https://accessapi.imoneza.com');
    });
    it('Should generate an endpoint using resource and access key', function() {
        var getResourceAccessFromResourceKey = new GetResourceAccessFromResourceKey();
        getResourceAccessFromResourceKey.setResourceKey('custom-resource-key').setAccessKey('some-access-key');
        expect(getResourceAccessFromResourceKey.getEndPoint()).to.equal('/api/Resource/some-access-key/custom-resource-key');
    });
    it('Should be fluent with all public methods', function() {
        var getResourceAccessFromResourceKey = new GetResourceAccessFromResourceKey();
        expect(getResourceAccessFromResourceKey.setIP('123.123.123.123')).to.be.an.instanceof(GetResourceAccessFromResourceKey);
        expect(getResourceAccessFromResourceKey.setResourceKey('key')).to.be.an.instanceof(GetResourceAccessFromResourceKey);
        expect(getResourceAccessFromResourceKey.setResourceUrl('some-url')).to.be.an.instanceof(GetResourceAccessFromResourceKey);
        expect(getResourceAccessFromResourceKey.setUserToken('user-token')).to.be.an.instanceof(GetResourceAccessFromResourceKey);
    });
    it('Should populate all the values using setters', function() {
        var getResourceAccessFromResourceKey = new GetResourceAccessFromResourceKey();
        getResourceAccessFromResourceKey.setIP('123.123.0.1').setUserToken('user-token-here').setResourceUrl('http://monkey.com');
        expect(getResourceAccessFromResourceKey.getPopulatedValues()).to.deep.equal({
            'ResourceURL': 'http://monkey.com',
            'UserToken': 'user-token-here',
            'IP': '123.123.0.1'
        });
    });
});