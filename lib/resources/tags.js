var util = require('util');
var Resource = require('./resource');

/**
 * Access to the Tags resource
 * @class
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Tags(dispatcher) {
  Resource.call(this, dispatcher);
}
util.inherits(Tags, Resource);

/**
 * Creates a new tag
 * @param  {Object} data The data for the tag
 * @return {Promise}     The result of the API call
 */
Tags.prototype.create = function(data) {
  return this.post('/tags', data);
};

/**
 * Creates a new tag in the workspace
 * @param  {Number} workspaceId The workspace id
 * @param  {Object} data        The data for the tag
 * @return {Promise}            The result of the API call
 */
Tags.prototype.createInWorkspace = function(workspaceId, data) {
  var path = util.format('/workspaces/%d/tags', workspaceId);
  return this.post(path, data);
};

/**
 * Returns the tag
 * @param  {Number} tagId    The tag id
 * @param  {Object} [params] Extra params for the dispatcher
 * @return {Promise}         The result of the API call
 */
Tags.prototype.findById = function(tagId, params) {
  var path = util.format('/tags/%d', tagId);
  return this.get(path, params);
};

/**
 * Returns all tags that the dispatcher has access to
 * @param  {Object} [params] Extra params for the dispatcher
 * @return {Promise}         The result of the API call
 */
Tags.prototype.findAll = function(params) {
  return this.getCollection('/tags', params);
};

/**
 * Finds all tags by workspace
 * @param  {Number} workspaceId The workspace id
 * @param  {Object} [params]    Extra params for the dispatcher
 * @return {Promise}            The result of the API call
 */
Tags.prototype.findByWorkspace = function(workspaceId, params) {
  var path = util.format('/workspaces/%d/tags', workspaceId); 
  return this.getCollection(path, params);
};

/**
 * Update a tag
 * @param  {Number} tagId The tag id
 * @param  {Object} data  The data to be sent to the workspace
 * @return {Promise}      The result of the API call
 */
Tags.prototype.update = function(tagId, data) {
  var path = util.format('/tags/%d', tagId);
  return this.put(path, data);
};

module.exports = Tags;