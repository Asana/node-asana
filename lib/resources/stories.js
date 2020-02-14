var Stories = require('./gen/stories');
/* jshint ignore:start */
var util = require('util');

/**
 * Returns the compact records for all stories on the task.
 * @param {String} task Globally unique identifier for the task.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Stories.prototype.findByTask = function(
    task,
    params,
    dispatchOptions
) {
    var path = util.format('/tasks/%s/stories', task);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the full record for a single story.
 * @param {String} story Globally unique identifier for the story.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Stories.prototype.findById = function(
    story,
    params,
    dispatchOptions
) {
    var path = util.format('/stories/%s', story);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * Adds a comment to a task. The comment will be authored by the
 * currently authenticated user, and timestamped when the server receives
 * the request.
 *
 * Returns the full record for the new story added to the task.
 * @param {String} task Globally unique identifier for the task.
 * @param {Object} data Data for the request
 * @param {String} data.text The plain text of the comment to add.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Stories.prototype.createOnTask = function(
    task,
    data,
    dispatchOptions
) {
    var path = util.format('/tasks/%s/stories', task);

    return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Updates the story and returns the full record for the updated story.
 * Only comment stories can have their text updated, and only comment stories and
 * attachment stories can be pinned. Only one of `text` and `html_text` can be specified.
 * @param {String} story Globally unique identifier for the story.
 * @param {Object} data Data for the request
 * @param {String} [data.text] The plain text with which to update the comment.
 * @param {String} [data.html_text] The rich text with which to update the comment.
 * @param {Boolean} [data.is_pinned] Whether the story should be pinned on the resource.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Stories.prototype.update = function(
    story,
    data,
    dispatchOptions
) {
    var path = util.format('/stories/%s', story);

    return this.dispatchPut(path, data, dispatchOptions);
};

/**
 * Deletes a story. A user can only delete stories they have created. Returns an empty data record.
 * @param {String} story Globally unique identifier for the story.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Stories.prototype.delete = function(
    story,
    dispatchOptions
) {
    var path = util.format('/stories/%s', story);

    return this.dispatchDelete(path, dispatchOptions);
};

/* jshint ignore:end */
module.exports = Stories;
