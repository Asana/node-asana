
var util = require('util');
var _ = require('lodash');

module.exports = function(SuperType) {

  /**
   * A _team_ is used to group related projects and people together within an
   * organization. Each project in an organization is associated with a team.
   * @class
   * @param {Dispatcher} dispatcher The API dispatcher
   */
  function Teams(dispatcher) {
    SuperType.call(this, dispatcher);
  }
  util.inherits(Teams, SuperType);

  
  /**
   * Returns the full record for a single team.
   * @param {Number} team Globally unique identifier for the team.
   * @param {Object} [params] Parameters for the request
   * @return {Promise} The requested resource
   */
  Teams.prototype.findById = function(
      team,
      params
  ) {
    var path = util.format('/teams/%d', team);
    
    return this.dispatchGet(path, params);
  };

  /**
   * Returns the compact records for all teams in the organization visible to
   * the authorized user.
   * @param {Number} team Globally unique identifier for the team.
   * @param {Object} [params] Parameters for the request
   * @return {Promise} The response from the API
   */
  Teams.prototype.findByOrganization = function(
      team,
      params
  ) {
    var path = util.format('/organizations/%d/teams', team);
    
    return this.dispatchGetCollection(path, params);
  };

  /**
   * Returns the compact records for all users that are members of the team.
   * @param {Number} team Globally unique identifier for the team.
   * @param {Object} [params] Parameters for the request
   * @return {Promise} The response from the API
   */
  Teams.prototype.users = function(
      team,
      params
  ) {
    var path = util.format('/team/%d/users', team);
    
    return this.dispatchGetCollection(path, params);
  };


  return Teams;
};
