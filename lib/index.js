/**
 * @file main file for iMoneza
 */

module.exports = {
    connection: require('./connection'),
    options: {
        manage: {
            getProperty: require('./options/manage/get-property'),
            getResource: require('./options/manage/get-resource'),
            getResourcesFromProperty: require('./options/manage/get-resources-from-property'),
            saveResource: require('./options/manage/save-resource'),
            getCallbackResult: require('./options/manage/get-callback-result')
        },
        access: {
            getResourceAccessFromResourceKey: require('./options/access/get-resource-access-from-resource-key'),
            getResourceAccessFromTemporaryUserToken: require('./options/access/get-resource-access-from-temporary-user-token')
        }
    }
};