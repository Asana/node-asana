var util = require('util');
var Resource = require('./resource');

/**
 * Access to the Users resource
 * @class
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Users(dispatcher) {
  Resource.call(this, dispatcher);
}
util.inherits(Users, Resource);

/**
 * Returns all users that the dispatcher has access to
 * @param  {Object} [params] Extra params for the dispatcher
 * @return {Promise}         The result of the API call
 */
Users.prototype.findAll = function(params) {
  return this.getCollection('/users', params);
};

/**
 * Returns the current user of the dispatcher
 * @param  {Object} [params] Extra params for the dispatcher
 * @return {Promise}         The result of the API call
 */
Users.prototype.me = function(params) {
  return this.get('/users/me', params);
};

/**
 * Finds a user by id
 * @param  {Number} userId   The user id
 * @param  {Object} [params] Extra params for the dispatcher
 * @return {Promise}         The result of the API call
 */
Users.prototype.findById = function(userId, params) {
  var path = util.format('/users/%d', userId);
  return this.get(path, params);
};

/**
 * Finds all users by workspace
 * @param  {Number} workspaceId The workspace id
 * @param  {Object} [params]    Extra params for the dispatcher
 * @return {Promise}            The result of the API call
 */
Users.prototype.findByWorkspace = function(workspaceId, params) {
  var path = util.format('/workspaces/%d/users', workspaceId); 
  return this.getCollection(path, params);
};

module.exports = Users;