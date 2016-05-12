/**
 * @file the test for the ExternalSubscriberExport option
 */

var chai = require('chai'),
    expect = chai.expect,
    ExternalSubscriberExport = require('../../../lib/options/manage/external-subscriber-export');

describe('ExternalSubscriberExport', function() {
    it('Creates a proper endpoint', function() {
        var externalSubscriberExport = new ExternalSubscriberExport();
        expect(externalSubscriberExport.setAccessKey('access-key-here')).to.be.an.instanceof(ExternalSubscriberExport);
        expect(externalSubscriberExport.getEndPoint()).to.equal('/api/Property/access-key-here/ExternalSubscriberExport');
    });
    it('Should give a request type of POST', function() {
        var externalSubscriberExport = new ExternalSubscriberExport();
        expect(externalSubscriberExport.getRequestType()).to.equal('post');
    });
    it('Should give a manageapi base url', function() {
        var externalSubscriberExport = new ExternalSubscriberExport();
        expect(externalSubscriberExport.getApiBaseURL()).to.equal('https://manageapi.imoneza.com');
    });
    it('Should be fluent with all public methods', function() {
        var externalSubscriberExport = new ExternalSubscriberExport();
        expect(externalSubscriberExport.setStartDate(new Date())).to.be.an.instanceof(ExternalSubscriberExport);
        expect(externalSubscriberExport.setEndDate(new Date())).to.be.an.instanceof(ExternalSubscriberExport);
    });
});