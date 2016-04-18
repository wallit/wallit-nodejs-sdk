/**
 * @file main file for iMoneza
 */

module.exports = {
    connection: require('./connection'),
    options: {
        manage: {
            getProperty: require('./options/manage/get-property')
        },
        access: {
            getResourceAccessFromResourceKey: require('./options/access/get-resource-access-from-resource-key')
        }
    }
};