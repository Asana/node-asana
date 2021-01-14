var UserTaskLists = require('./gen/user_task_lists');
/* jshint ignore:start */
var util = require('util');

/**
 * Returns the full record for the user task list for the given user
 * @param {String} user An identifier for the user. Can be one of an email address,
 * the globally unique identifier for the user, or the keyword `me`
 * to indicate the current user making the request.
 * @param {Object} [params] Parameters for the request
 * @param {String} params.workspace Globally unique identifier for the workspace or organization.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
UserTaskLists.prototype.findByUser = function(
    user,
    params,
    dispatchOptions
) {
    var path = util.format('/users/%s/user_task_list', user);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * Returns the full record for a user task list.
 * @param {String} userTaskList Globally unique identifier for the user task list.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
UserTaskLists.prototype.findById = function(
    userTaskList,
    params,
    dispatchOptions
) {
    var path = util.format('/user_task_lists/%s', userTaskList);

    return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * Returns the compact list of tasks in a user's My Tasks list. The returned
 * tasks will be in order within each assignee status group of `Inbox`,
 * `Today`, and `Upcoming`.
 *
 * **Note:** tasks in `Later` have a different ordering in the Asana web app
 * than the other assignee status groups; this endpoint will still return
 * them in list order in `Later` (differently than they show up in Asana,
 * but the same order as in Asana's mobile apps).
 *
 * **Note:** Access control is enforced for this endpoint as with all Asana
 * API endpoints, meaning a user's private tasks will be filtered out if the
 * API-authenticated user does not have access to them.
 *
 * **Note:** Both complete and incomplete tasks are returned by default
 * unless they are filtered out (for example, setting `completed_since=now`
 * will return only incomplete tasks, which is the default view for "My
 * Tasks" in Asana.)
 * @param {String} userTaskList The user task list in which to search for tasks.
 * @param {Object} [params] Parameters for the request
 * @param {String} [params.completed_since] Only return tasks that are either incomplete or that have been
 * completed since this time.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
UserTaskLists.prototype.tasks = function(
    userTaskList,
    params,
    dispatchOptions
) {
    var path = util.format('/user_task_lists/%s/tasks', userTaskList);

    return this.dispatchGetCollection(path, params, dispatchOptions);
};

/* jshint ignore:end */
module.exports = UserTaskLists;
