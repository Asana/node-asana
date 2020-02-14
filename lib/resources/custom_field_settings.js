var CustomFieldSettings = require('./gen/custom_field_settings');
/* jshint ignore:start */
var util = require('util');

/**
 * Returns a list of all of the custom fields settings on a project.
 * @param {String} project The ID of the project for which to list custom field settings
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
CustomFieldSettings.prototype.findByProject = function(
    project,
    params,
    dispatchOptions
) {
    var path = util.format('/projects/%s/custom_field_settings', project);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns a list of all of the custom fields settings on a portfolio.
 * @param {String} portfolio The ID of the portfolio for which to list custom field settings
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
CustomFieldSettings.prototype.findByPortfolio = function(
    portfolio,
    params,
    dispatchOptions
) {
    var path = util.format('/portfolios/%s/custom_field_settings', portfolio);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};


/* jshint ignore:end */
module.exports = CustomFieldSettings;
