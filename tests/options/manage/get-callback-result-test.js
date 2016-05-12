/**
 * @file the test for the GetCallbackResult option
 */

var chai = require('chai'),
    expect = chai.expect,
    GetCallbackResult = require('../../../lib/options/manage/get-callback-result');

describe('GetCallbackResult', function() {
    it('Creates a proper endpoint', function() {
        var getCallbackResult = new GetCallbackResult();
        expect(getCallbackResult.setAccessKey('access-key-here')).to.be.an.instanceof(GetCallbackResult);
        expect(getCallbackResult.setCallbackToken('token-here')).to.be.an.instanceof(GetCallbackResult);
        expect(getCallbackResult.getEndPoint()).to.equal('/api/Property/access-key-here/CallbackResult/token-here');
    });
    it('Should give a request type of GET', function() {
        var getCallbackResult = new GetCallbackResult();
        expect(getCallbackResult.getRequestType()).to.equal('get');
    });
    it('Should give a manageapi base url', function() {
        var getCallbackResult = new GetCallbackResult();
        expect(getCallbackResult.getApiBaseURL()).to.equal('https://manageapi.imoneza.com');
    });
});