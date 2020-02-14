var Webhooks = require('./gen/webhooks');
/* jshint ignore:start */
var util = require('util');
var _ = require('lodash');

/**
 * Establishing a webhook is a two-part process. First, a simple HTTP POST
 * similar to any other resource creation. Since you could have multiple
 * webhooks we recommend specifying a unique local id for each target.
 *
 * Next comes the confirmation handshake. When a webhook is created, we will
 * send a test POST to the `target` with an `X-Hook-Secret` header as
 * described in the
 * [Resthooks Security documentation](http://resthooks.org/docs/security/).
 * The target must respond with a `200 OK` and a matching `X-Hook-Secret`
 * header to confirm that this webhook subscription is indeed expected.
 *
 * If you do not acknowledge the webhook's confirmation handshake it will
 * fail to setup, and you will receive an error in response to your attempt
 * to create it. This means you need to be able to receive and complete the
 * webhook *while* the POST request is in-flight.
 * @param {String} resource A resource ID to subscribe to. The resource can be a task or project.
 * @param {String} target The URL to receive the HTTP POST.
 * @param {Object} data Data for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Webhooks.prototype.create = function(
    resource,
    target,
    data,
    dispatchOptions
) {
    var path = util.format('/webhooks');

    data = _.extend({}, data || {}, {
        resource: resource,
        target: target
    });
    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Returns the compact representation of all webhooks your app has
 * registered for the authenticated user in the given workspace.
 * @param {String} workspace The workspace to query for webhooks in.
 * @param {Object} [params] Parameters for the request
 * @param {String} [params.resource] Only return webhooks for the given resource.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Webhooks.prototype.getAll = function(
    workspace,
    params,
    dispatchOptions
) {
    var path = util.format('/webhooks');

    params = _.extend({}, params || {}, {
        workspace: workspace
    });
    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the full record for the given webhook.
 * @param {String} webhook The webhook to get.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Webhooks.prototype.getById = function(
    webhook,
    params,
    dispatchOptions
) {
    var path = util.format('/webhooks/%s', webhook);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * This method permanently removes a webhook. Note that it may be possible
 * to receive a request that was already in flight after deleting the
 * webhook, but no further requests will be issued.
 * @param {String} webhook The webhook to delete.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Webhooks.prototype.deleteById = function(
    webhook,
    dispatchOptions
) {
    var path = util.format('/webhooks/%s', webhook);

    return this.dispatchDelete(path, dispatchOptions);
};

/* jshint ignore:end */
module.exports = Webhooks;
