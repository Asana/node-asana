var CustomFields = require('./gen/custom_fields');
/* jshint ignore:start */
var util = require('util');

/**
 * Creates a new custom field in a workspace. Every custom field is required to be created in a specific workspace, and this workspace cannot be changed once set.
 *
 * A custom field's `name` must be unique within a workspace and not conflict with names of existing task properties such as 'Due Date' or 'Assignee'. A custom field's `type` must be one of  'text', 'enum', or 'number'.
 *
 * Returns the full record of the newly created custom field.
 * @param {Object} data Data for the request
 * @param {String} data.workspace The workspace to create a custom field in.
 * @param {String} data.resource_subtype The type of the custom field. Must be one of the given values.
 * @param {String} [data.type] **Deprecated: New integrations should prefer the `resource_subtype` parameter.**
 * @param {String} data.name The name of the custom field.
 * @param {String} [data.description] The description of the custom field.
 * @param {Integer} [data.precision] The number of decimal places for the numerical values. Required if the custom field is of type 'number'.
 * @param {String} [data.enum_options] The discrete values the custom field can assume. Required if the custom field is of type 'enum'.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
CustomFields.prototype.create = function(
    data,
    dispatchOptions
) {
    var path = util.format('/custom_fields');

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Returns the complete definition of a custom field's metadata.
 * @param {String} custom_field Globally unique identifier for the custom field.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
CustomFields.prototype.findById = function(
    customField,
    params,
    dispatchOptions
) {
    var path = util.format('/custom_fields/%s', customField);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * Returns a list of the compact representation of all of the custom fields in a workspace.
 * @param {String} workspace The workspace or organization to find custom field definitions in.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
CustomFields.prototype.findByWorkspace = function(
    workspace,
    params,
    dispatchOptions
) {
    var path = util.format('/workspaces/%s/custom_fields', workspace);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * A specific, existing custom field can be updated by making a PUT request on the URL for that custom field. Only the fields provided in the `data` block will be updated; any unspecified fields will remain unchanged
 *
 * When using this method, it is best to specify only those fields you wish to change, or else you may overwrite changes made by another user since you last retrieved the custom field.
 *
 * An enum custom field's `enum_options` cannot be updated with this endpoint. Instead see "Work With Enum Options" for information on how to update `enum_options`.
 *
 * Locked custom fields can only be updated by the user who locked the field.
 *
 * Returns the complete updated custom field record.
 * @param {String} custom_field Globally unique identifier for the custom field.
 * @param {Object} data Data for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
CustomFields.prototype.update = function(
    customField,
    data,
    dispatchOptions
) {
    var path = util.format('/custom_fields/%s', customField);

    return this.dispatchPut(path, data, dispatchOptions);
};

/**
 * A specific, existing custom field can be deleted by making a DELETE request on the URL for that custom field.
 *
 * Locked custom fields can only be deleted by the user who locked the field.
 *
 * Returns an empty data record.
 * @param {String} custom_field Globally unique identifier for the custom field.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
CustomFields.prototype.delete = function(
    customField,
    dispatchOptions
) {
    var path = util.format('/custom_fields/%s', customField);

    return this.dispatchDelete(path, dispatchOptions);
};

/**
 * Creates an enum option and adds it to this custom field's list of enum options. A custom field can have at most 50 enum options (including disabled options). By default new enum options are inserted at the end of a custom field's list.
 *
 * Locked custom fields can only have enum options added by the user who locked the field.
 *
 * Returns the full record of the newly created enum option.
 * @param {String} custom_field Globally unique identifier for the custom field.
 * @param {Object} data Data for the request
 * @param {String} data.name The name of the enum option.
 * @param {String} [data.color] The color of the enum option. Defaults to 'none'.
 * @param {String} [data.insert_before] An existing enum option within this custom field before which the new enum option should be inserted. Cannot be provided together with after_enum_option.
 * @param {String} [data.insert_after] An existing enum option within this custom field after which the new enum option should be inserted. Cannot be provided together with before_enum_option.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
CustomFields.prototype.createEnumOption = function(
    customField,
    data,
    dispatchOptions
) {
    var path = util.format('/custom_fields/%s/enum_options', customField);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Updates an existing enum option. Enum custom fields require at least one enabled enum option.
 *
 * Locked custom fields can only be updated by the user who locked the field.
 *
 * Returns the full record of the updated enum option.
 * @param {String} enum_option Globally unique identifier for the enum option.
 * @param {Object} data Data for the request
 * @param {String} data.name The name of the enum option.
 * @param {String} [data.color] The color of the enum option. Defaults to 'none'.
 * @param {Boolean} [data.enabled] Whether or not the enum option is a selectable value for the custom field.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
CustomFields.prototype.updateEnumOption = function(
    enumOption,
    data,
    dispatchOptions
) {
    var path = util.format('/enum_options/%s', enumOption);

    return this.dispatchPut(path, data, dispatchOptions);
};

/**
 * Moves a particular enum option to be either before or after another specified enum option in the custom field.
 *
 * Locked custom fields can only be reordered by the user who locked the field.
 * @param {String} custom_field Globally unique identifier for the custom field.
 * @param {Object} data Data for the request
 * @param {String} data.enum_option The ID of the enum option to relocate.
 * @param {String} data.name The name of the enum option.
 * @param {String} [data.color] The color of the enum option. Defaults to 'none'.
 * @param {String} [data.before_enum_option] An existing enum option within this custom field before which the new enum option should be inserted. Cannot be provided together with after_enum_option.
 * @param {String} [data.after_enum_option] An existing enum option within this custom field after which the new enum option should be inserted. Cannot be provided together with before_enum_option.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
CustomFields.prototype.insertEnumOption = function(
    customField,
    data,
    dispatchOptions
) {
    var path = util.format('/custom_fields/%s/enum_options/insert', customField);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * This is for compatibility reasons. Please use createEnumOption.
 */
CustomFields.prototype.addEnumOption = CustomFields.prototype.createEnumOption;

/**
 * This is for compatibility reasons. Please use createEnumOption.
 */
CustomFields.prototype.reorderEnumOption =
    CustomFields.prototype.insertEnumOption;


/* jshint ignore:end */
module.exports = CustomFields;
