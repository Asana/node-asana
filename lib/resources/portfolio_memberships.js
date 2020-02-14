var PortfolioMemberships = require('./gen/portfolio_memberships');
/* jshint ignore:start */
var util = require('util');

/**
 * Returns the compact portfolio membership records for the portfolio. You must
 * specify `portfolio`, `portfolio` and `user`, or `workspace` and `user`.
 * @param {Object} [params] Parameters for the request
 * @param {String} [params.portfolio] The portfolio for which to fetch memberships.
 * @param {String} [params.workspace] The workspace for which to fetch memberships.
 * @param {String} [params.user] The user to filter the memberships to.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
PortfolioMemberships.prototype.findAll = function(
    params,
    dispatchOptions
) {
    var path = util.format('/portfolio_memberships');

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the compact portfolio membership records for the portfolio.
 * @param {String} portfolio The portfolio for which to fetch memberships.
 * @param {Object} [params] Parameters for the request
 * @param {String} [params.user] If present, the user to filter the memberships to.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
PortfolioMemberships.prototype.findByPortfolio = function(
    portfolio,
    params,
    dispatchOptions
) {
    var path = util.format('/portfolios/%s/portfolio_memberships', portfolio);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the portfolio membership record.
 * @param {String} portfolio_membership Globally unique identifier for the portfolio membership.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
PortfolioMemberships.prototype.findById = function(
    portfolioMembership,
    params,
    dispatchOptions
) {
    var path = util.format('/portfolio_memberships/%s', portfolioMembership);

    return this.dispatchGet(path, params, dispatchOptions);
};


/* jshint ignore:end */
module.exports = PortfolioMemberships;
