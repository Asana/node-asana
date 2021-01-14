var OrganizationExports = require('./gen/organization_exports');
/* jshint ignore:start */
var util = require('util');

/**
 * Returns details of a previously-requested Organization export.
 * @param {String} organization_export Globally unique identifier for the Organization export.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
OrganizationExports.prototype.findById = function(
    organizationExport,
    params,
    dispatchOptions
) {
    var path = util.format('/organization_exports/%s', organizationExport);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * This method creates a request to export an Organization. Asana will complete the export at some
 * point after you create the request.
 * @param {Object} data Data for the request
 * @param {String} data.organization Globally unique identifier for the workspace or organization.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
OrganizationExports.prototype.create = function(
    data,
    dispatchOptions
) {
    var path = util.format('/organization_exports');

    return this.dispatchPost(path, data, dispatchOptions);
};


/* jshint ignore:end */
module.exports = OrganizationExports;
