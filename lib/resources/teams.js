var util = require('util');

/**
 * Access to the Teams resource
 * @constructor
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Teams(dispatcher) {
  this.dispatcher = dispatcher;
}

/**
 * Finds all teams that the user has access to
 * @param  {Number} organizationId The organization id
 * @param  {Object} [params]       Extra params for the dispatcher
 * @return {Promise}               The result of the API call
 */
Teams.prototype.findByOrganization = function(organizationId, params) {
  var path = util.format('/organizations/%d/teams', organizationId);
  return this.dispatcher.get(path, params);
};

module.exports = Teams;