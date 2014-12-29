var util = require('util');

/**
 * Access to the Tags resource
 * @class
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Tags(dispatcher) {
  this.dispatcher = dispatcher;
}

/**
 * Creates a new tag
 * @param  {Object} data              The data for the tag
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}                  The result of the API call
 */
Tags.prototype.create = function(data, dispatchOptions) {
  return this.dispatcher.post('/tags', data, dispatchOptions);
};

/**
 * Creates a new tag in the workspace
 * @param  {Number} workspaceId       The workspace id
 * @param  {Object} data              The data for the tag
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}                  The result of the API call
 */
Tags.prototype.createInWorkspace = function(workspaceId, data, dispatchOptions) {
  var path = util.format('/workspaces/%d/tags', workspaceId);
  return this.dispatcher.post(path, data, dispatchOptions);
};

/**
 * Returns the tag
 * @param  {Number} tagId             The tag id
 * @param  {Object} [params]          Extra params for the dispatcher
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}                  The result of the API call
 */
Tags.prototype.findById = function(tagId, params, dispatchOptions) {
  var path = util.format('/tags/%d', tagId);
  return this.dispatcher.get(path, params, dispatchOptions);
};

/**
 * Returns all tags that the dispatcher has access to
 * @param  {Object} [params]          Extra params for the dispatcher
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}                  The result of the API call
 */
Tags.prototype.findAll = function(params, dispatchOptions) {
  return this.dispatcher.get('/tags', params, dispatchOptions);
};

/**
 * Finds a tag by workspace
 * @param  {Number} workspaceId         The workspace id
 * @param  {Object} [params]            Extra params for the dispatcher
 * @param  {Object} [dispatchOptions]   The options to run the dispatcher with
 * @return {Promise}                    The result of the API call
 */
Tags.prototype.findByWorkspace = function(workspaceId, params, dispatchOptions) {
  var path = util.format('/workspaces/%d/tags', workspaceId); 
  return this.dispatcher.get(path, params, dispatchOptions);
};

/**
 * Update a tag
 * @param  {Number} tagId             The tag id
 * @param  {Object} data              The data to be sent to the workspace
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}                  The result of the API call
 */
Tags.prototype.update = function(tagId, data, dispatchOptions) {
  var path = util.format('/tags/%d', tagId);
  return this.dispatcher.put(path, data, dispatchOptions);
};

module.exports = Tags;