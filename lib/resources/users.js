var util = require('util');

/**
 * Access to the Users resource
 * @class
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Users(dispatcher) {
  this.dispatcher = dispatcher;
}

/**
 * Returns all users that the dispatcher has access to
 * @param  {Object} [params] Extra params for the dispatcher
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}         The result of the API call
 */
Users.prototype.findAll = function(params, dispatchOptions) {
  return this.dispatcher.get('/users', params, dispatchOptions);
};

/**
 * Returns the current user of the dispatcher
 * @param  {Object} [params] Extra params for the dispatcher
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}         The result of the API call
 */
Users.prototype.me = function(params, dispatchOptions) {
  return this.dispatcher.get('/users/me', params, dispatchOptions);
};

/**
 * Finds a user by id
 * @param  {Number} userId   The user id
 * @param  {Object} [params] Extra params for the dispatcher
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}         The result of the API call
 */
Users.prototype.findById = function(userId, params, dispatchOptions) {
  var path = util.format('/users/%d', userId);
  return this.dispatcher.get(path, params, dispatchOptions);
};

/**
 * Finds a user by workspace
 * @param  {Number} workspaceId The workspace id
 * @param  {Object} [params]    Extra params for the dispatcher
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}            The result of the API call
 */
Users.prototype.findByWorkspace = function(workspaceId, params, dispatchOptions) {
  var path = util.format('/workspaces/%d/users', workspaceId); 
  return this.dispatcher.get(path, params, dispatchOptions);
};

module.exports = Users;