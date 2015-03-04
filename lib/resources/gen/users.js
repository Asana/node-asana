
var util = require('util');
var _ = require('lodash');

module.exports = function(SuperType) {

  /**
   * A _user_ object represents an account in Asana that can be given access to
   * various workspaces, projects, and tasks.
   * 
   * Like other objects in the system, users are referred to by numerical IDs.
   * However, the special string identifier `me` can be used anywhere
   * a user ID is accepted, to refer to the current authenticated user.
   * @class
   * @param {Dispatcher} dispatcher The API dispatcher
   */
  function Users(dispatcher) {
    SuperType.call(this, dispatcher);
  }
  util.inherits(Users, SuperType);

  
  /**
   * Returns the full user record for the currently authenticated user.
   * @param {Object} [params] Parameters for the request
   * @return {Promise} The requested resource
   */
  Users.prototype.me = function(
      params
  ) {
    var path = util.format('/users/me');
    
    return this.dispatchGet(path, params);
  };

  /**
   * Returns the full user record for a single user.
   * @param {Number} user Globally unique identifier for the user.
   * @param {Object} [params] Parameters for the request
   * @return {Promise} The requested resource
   */
  Users.prototype.findById = function(
      user,
      params
  ) {
    var path = util.format('/users/%d', user);
    
    return this.dispatchGet(path, params);
  };

  /**
   * Returns the user records for all users in all workspaces and organizations
   * accessible to the authenticated user.
   * @param {Number} workspace The workspace in which to get users.
   * @param {Object} [params] Parameters for the request
   * @return {Promise} The response from the API
   */
  Users.prototype.findByWorkspace = function(
      workspace,
      params
  ) {
    var path = util.format('/workspaces/%d/users', workspace);
    
    return this.dispatchGetCollection(path, params);
  };

  /**
   * Returns the user records for all users in the specified workspace or
   * organization.
   * @param {Object} [params] Parameters for the request
   * @return {Promise} The response from the API
   */
  Users.prototype.findAll = function(
      params
  ) {
    var path = util.format('/users');
    
    return this.dispatchGetCollection(path, params);
  };


  return Users;
};
