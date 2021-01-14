var Portfolios = require('./gen/portfolios');
/* jshint ignore:start */
var util = require('util');

/**
 * Creates a new portfolio in the given workspace with the supplied name.
 *
 * Note that portfolios created in the Asana UI may have some state
 * (like the "Priority" custom field) which is automatically added to the
 * portfolio when it is created. Portfolios created via our API will **not**
 * be created with the same initial state to allow integrations to create
 * their own starting state on a portfolio.
 * @param {Object} data Data for the request
 * @param {String} data.workspace The workspace or organization in which to create the portfolio.
 * @param {String} data.name The name of the newly-created portfolio
 * @param {String} [data.color] An optional color for the portfolio
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Portfolios.prototype.create = function(
    data,
    dispatchOptions
) {
    var path = util.format('/portfolios');

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Returns the complete record for a single portfolio.
 * @param {String} portfolio The portfolio to get.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Portfolios.prototype.findById = function(
    portfolio,
    params,
    dispatchOptions
) {
    var path = util.format('/portfolios/%s', portfolio);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * An existing portfolio can be updated by making a PUT request on the
 * URL for that portfolio. Only the fields provided in the `data` block will be
 * updated; any unspecified fields will remain unchanged.
 *
 * Returns the complete updated portfolio record.
 * @param {String} portfolio The portfolio to update.
 * @param {Object} data Data for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Portfolios.prototype.update = function(
    portfolio,
    data,
    dispatchOptions
) {
    var path = util.format('/portfolios/%s', portfolio);

    return this.dispatchPut(path, data, dispatchOptions);
};

/**
 * An existing portfolio can be deleted by making a DELETE request
 * on the URL for that portfolio.
 *
 * Returns an empty data record.
 * @param {String} portfolio The portfolio to delete.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Portfolios.prototype.delete = function(
    portfolio,
    dispatchOptions
) {
    var path = util.format('/portfolios/%s', portfolio);

    return this.dispatchDelete(path, dispatchOptions);
};

/**
 * Returns a list of the portfolios in compact representation that are owned
 * by the current API user.
 * @param {Object} [params] Parameters for the request
 * @param {String} params.workspace The workspace or organization to filter portfolios on.
 * @param {String} params.owner The user who owns the portfolio. Currently, API users can only get a
 * list of portfolios that they themselves own.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Portfolios.prototype.findAll = function(
    params,
    dispatchOptions
) {
    var path = util.format('/portfolios');

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Get a list of the items in compact form in a portfolio.
 * @param {String} portfolio The portfolio from which to get the list of items.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Portfolios.prototype.getItems = function(
    portfolio,
    params,
    dispatchOptions
) {
    var path = util.format('/portfolios/%s/items', portfolio);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * Add an item to a portfolio.
 *
 * Returns an empty data block.
 * @param {String} portfolio The portfolio to which to add an item.
 * @param {Object} data Data for the request
 * @param {String} data.item The item to add to the portfolio.
 * @param {String} [data.insert_before] An id of an item in this portfolio. The new item will be added before the one specified here.
 * `insert_before` and `insert_after` parameters cannot both be specified.
 * @param {String} [data.insert_after] An id of an item in this portfolio. The new item will be added after the one specified here.
 * `insert_before` and `insert_after` parameters cannot both be specified.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Portfolios.prototype.addItem = function(
    portfolio,
    data,
    dispatchOptions
) {
    var path = util.format('/portfolios/%s/addItem', portfolio);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Remove an item to a portfolio.
 *
 * Returns an empty data block.
 * @param {String} portfolio The portfolio from which to remove the item.
 * @param {Object} data Data for the request
 * @param {String} data.item The item to remove from the portfolio.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Portfolios.prototype.removeItem = function(
    portfolio,
    data,
    dispatchOptions
) {
    var path = util.format('/portfolios/%s/removeItem', portfolio);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Adds the specified list of users as members of the portfolio. Returns the updated portfolio record.
 * @param {String} portfolio The portfolio to add members to.
 * @param {Object} data Data for the request
 * @param {Array} data.members An array of user ids.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Portfolios.prototype.addMembers = function(
    portfolio,
    data,
    dispatchOptions
) {
    var path = util.format('/portfolios/%s/addMembers', portfolio);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Removes the specified list of members from the portfolio. Returns the updated portfolio record.
 * @param {String} portfolio The portfolio to remove members from.
 * @param {Object} data Data for the request
 * @param {Array} data.members An array of user ids.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Portfolios.prototype.removeMembers = function(
    portfolio,
    data,
    dispatchOptions
) {
    var path = util.format('/portfolios/%s/removeMembers', portfolio);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Get the custom field settings on a portfolio.
 * @param {String} portfolio The portfolio from which to get the custom field settings.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Portfolios.prototype.customFieldSettings = function(
    portfolio,
    params,
    dispatchOptions
) {
    var path = util.format('/portfolios/%s/custom_field_settings', portfolio);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * Create a new custom field setting on the portfolio. Returns the full
 * record for the new custom field setting.
 * @param {String} portfolio The portfolio onto which to add the custom field.
 * @param {Object} data Data for the request
 * @param {String} data.custom_field The id of the custom field to add to the portfolio.
 * @param {Boolean} [data.is_important] Whether this field should be considered important to this portfolio (for instance, to display in the list view of items in the portfolio).
 * @param {String} [data.insert_before] An id of a custom field setting on this portfolio. The new custom field setting will be added before this one.
 * `insert_before` and `insert_after` parameters cannot both be specified.
 * @param {String} [data.insert_after] An id of a custom field setting on this portfolio. The new custom field setting will be added after this one.
 * `insert_before` and `insert_after` parameters cannot both be specified.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Portfolios.prototype.addCustomFieldSetting = function(
    portfolio,
    data,
    dispatchOptions
) {
    var path = util.format('/portfolios/%s/addCustomFieldSetting', portfolio);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Remove a custom field setting on the portfolio. Returns an empty data
 * block.
 * @param {String} portfolio The portfolio from which to remove the custom field.
 * @param {Object} data Data for the request
 * @param {String} data.custom_field The id of the custom field to remove from this portfolio.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Portfolios.prototype.removeCustomFieldSetting = function(
    portfolio,
    data,
    dispatchOptions
) {
    var path = util.format('/portfolios/%s/removeCustomFieldSetting', portfolio);

    return this.dispatchPost(path, data, dispatchOptions);
};


/* jshint ignore:end */
module.exports = Portfolios;
