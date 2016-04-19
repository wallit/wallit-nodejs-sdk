/**
 * @file the test for the SaveResource option
 */

var chai = require('chai'),
    expect = chai.expect,
    SaveResource = require('../../../lib/options/manage/save-resource');

describe('SaveResource', function() {
    it('Creates a proper endpoint', function() {
        var saveResource = new SaveResource();
        expect(saveResource.setAccessKey('access-key-here')).to.be.an.instanceof(SaveResource);
        expect(saveResource.setExternalKey('external-key-here')).to.be.an.instanceof(SaveResource);
        expect(saveResource.getEndPoint()).to.equal('/api/Property/access-key-here/Resource/external-key-here');
    });
    it('Should give a request type of PUT', function() {
        var saveResource = new SaveResource();
        expect(saveResource.getRequestType()).to.equal('put');
    });
    it('Should give a manageapi base url', function() {
        var saveResource = new SaveResource();
        expect(saveResource.getApiBaseURL()).to.equal('https://manageapi.imoneza.com');
    });
    it('Should be fluent with all public methods', function() {
        var saveResource = new SaveResource();
        expect(saveResource.setExternalKey('some-value')).to.be.an.instanceof(SaveResource);
        expect(saveResource.setName('some-value')).to.be.an.instanceof(SaveResource);
        expect(saveResource.setTitle('some-value')).to.be.an.instanceof(SaveResource);
        expect(saveResource.setPricingGroupId('some-value')).to.be.an.instanceof(SaveResource);
        expect(saveResource.setActive('some-value')).to.be.an.instanceof(SaveResource);
        expect(saveResource.setUrl('some-value')).to.be.an.instanceof(SaveResource);
        expect(saveResource.setByline('some-value')).to.be.an.instanceof(SaveResource);
        expect(saveResource.setDescription('some-value')).to.be.an.instanceof(SaveResource);
        expect(saveResource.setPublicationDate(new Date())).to.be.an.instanceof(SaveResource);
        expect(saveResource.setPricingModel('some-value')).to.be.an.instanceof(SaveResource);
        expect(saveResource.setPrice('some-value')).to.be.an.instanceof(SaveResource);
        expect(saveResource.setExpirationPeriodUnit('some-value')).to.be.an.instanceof(SaveResource);
        expect(saveResource.setExpirationPeriodValue('some-value')).to.be.an.instanceof(SaveResource);
        expect(saveResource.setTargetConversionRate('some-value')).to.be.an.instanceof(SaveResource);
        expect(saveResource.setTargetConversionPriceFloor('some-value')).to.be.an.instanceof(SaveResource);
        expect(saveResource.setTargetConversionHitsPerRecalculationPeriod('some-value')).to.be.an.instanceof(SaveResource);
    });
});