var util = require('util');

/**
 * Access to the Teams resource
 * @class
 * @param {Dispatcher} dispatcher The API dispatcher
 */
function Teams(dispatcher) {
  this.dispatcher = dispatcher;
}

/**
 * Finds all teams that the user has access to
 * @param  {Number} organizationId The organization id
 * @param  {Object} [params]       Extra params for the dispatcher
 * @param  {Object} [dispatchOptions] The options to run the dispatcher with
 * @return {Promise}               The result of the API call
 */
Teams.prototype.findByOrganization = function(organizationId, params, dispatchOptions) {
  var path = util.format('/organizations/%d/teams', organizationId);
  return this.dispatcher.get(path, params, dispatchOptions);
};

module.exports = Teams;