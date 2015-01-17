var util = require('util');
var Resource = require('./resource');

/**
 * Access to the Teams resource
 * @class
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Teams(dispatcher) {
  Resource.call(this, dispatcher);
}
util.inherits(Teams, Resource);

/**
 * Finds all teams that the user has access to
 * @param  {Number} organizationId The organization id
 * @param  {Object} [params]       Extra params for the dispatcher
 * @return {Promise}               The result of the API call
 */
Teams.prototype.findByOrganization = function(organizationId, params) {
  var path = util.format('/organizations/%d/teams', organizationId);
  return this.getCollection(path, params);
};

module.exports = Teams;