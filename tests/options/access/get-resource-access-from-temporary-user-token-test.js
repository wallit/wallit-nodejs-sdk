/**
 * @file the test for the Get Resource Access class
 */

var chai = require('chai'),
    expect = chai.expect,
    GetResourceAccessFromTemporaryUserToken = require('../../../lib/options/access/get-resource-access-from-temporary-user-token');

describe('GetResourceAccessFromTemporaryUserToken', function() {
    it('Should give a request type of GET', function() {
        var getResourceAccessFromTemporaryUserToken = new GetResourceAccessFromTemporaryUserToken();
        expect(getResourceAccessFromTemporaryUserToken.getRequestType()).to.equal('get');
    });
    it('Should give a accessapi base url', function() {
        var getResourceAccessFromTemporaryUserToken = new GetResourceAccessFromTemporaryUserToken();
        expect(getResourceAccessFromTemporaryUserToken.getApiBaseURL()).to.equal('https://accessapi.imoneza.com');
    });
    it('Should generate an endpoint using temporary user token and access key', function() {
        var getResourceAccessFromTemporaryUserToken = new GetResourceAccessFromTemporaryUserToken();
        getResourceAccessFromTemporaryUserToken.setTemporaryUserToken('temp-token').setAccessKey('some-access-key');
        expect(getResourceAccessFromTemporaryUserToken.getEndPoint()).to.equal('/api/TemporaryUserToken/some-access-key/temp-token');
    });
    it('Should be fluent with all public methods', function() {
        var getResourceAccessFromTemporaryUserToken = new GetResourceAccessFromTemporaryUserToken();
        expect(getResourceAccessFromTemporaryUserToken.setIP('123.123.123.123')).to.be.an.instanceof(GetResourceAccessFromTemporaryUserToken);
        expect(getResourceAccessFromTemporaryUserToken.setResourceKey('key')).to.be.an.instanceof(GetResourceAccessFromTemporaryUserToken);
        expect(getResourceAccessFromTemporaryUserToken.setResourceUrl('some-url')).to.be.an.instanceof(GetResourceAccessFromTemporaryUserToken);
        expect(getResourceAccessFromTemporaryUserToken.setTemporaryUserToken('user-token')).to.be.an.instanceof(GetResourceAccessFromTemporaryUserToken);
    });
    it('Should populate all the values using setters', function() {
        var getResourceAccessFromTemporaryUserToken = new GetResourceAccessFromTemporaryUserToken();
        getResourceAccessFromTemporaryUserToken.setIP('123.123.0.1').setResourceKey('resource-key').setResourceUrl('http://monkey.com');
        expect(getResourceAccessFromTemporaryUserToken.getPopulatedValues()).to.deep.equal({
            'ResourceURL': 'http://monkey.com',
            'ResourceKey': 'resource-key',
            'IP': '123.123.0.1'
        });
    });
});