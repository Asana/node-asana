var Tasks = require('./gen/tasks');
/* jshint ignore:start */
var util = require('util');
var _ = require('lodash');

/**
 * Returns the task named by the given external ID
 * @param  {String}  externalId   The task id
 * @param  {Object} [params] Extra params for the dispatcher
 * @return {Promise}         The result of the API call
 */
Tasks.prototype.findByExternalId = function(externalId, params) {
  var path = util.format(
      '/tasks/%s', encodeURIComponent('external:' + externalId));
  return this.dispatchGet(path, params);
};

/**
 * Changes the parent of a task. Each task may only be a subtask of a single
 * parent, or no parent task at all. Returns an empty data block.
 * @param {String} task The task to change the parent of.
 * @param {String} parent The new parent of the task, or `null` for no parent.
 * @param {Object} [data] Data for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.setParent = function(
    task,
    parent,
    data
    ) {
  var path = util.format('/tasks/%s/setParent', task);

  data = _.extend({}, data || {}, {
    parent: parent !== null ? String(parent) : null
  });
  return this.dispatchPost(path, data);
};

/**
 * Creating a new task is as easy as POSTing to the `/tasks` endpoint
 * with a data block containing the fields you'd like to set on the task.
 * Any unspecified fields will take on default values.
 *
 * Every task is required to be created in a specific workspace, and this
 * workspace cannot be changed once set. The workspace need not be set
 * explicitly if you specify `projects` or a `parent` task instead.
 *
 * `projects` can be a comma separated list of projects, or just a single
 * project the task should belong to.
 * @param {Object} data Data for the request
 * @param {String} [data.workspace] The workspace to create a task in.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.create = function(
    data,
    dispatchOptions
) {
  var path = util.format('/tasks');

  return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Creating a new task is as easy as POSTing to the `/tasks` endpoint
 * with a data block containing the fields you'd like to set on the task.
 * Any unspecified fields will take on default values.
 *
 * Every task is required to be created in a specific workspace, and this
 * workspace cannot be changed once set. The workspace need not be set
 * explicitly if you specify a `project` or a `parent` task instead.
 * @param {String} workspace The workspace to create a task in.
 * @param {Object} data Data for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.createInWorkspace = function(
    workspace,
    data,
    dispatchOptions
) {
  var path = util.format('/workspaces/%s/tasks', workspace);

  return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Returns the complete task record for a single task.
 * @param {String} task The task to get.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Tasks.prototype.findById = function(
    task,
    params,
    dispatchOptions
) {
  var path = util.format('/tasks/%s', task);

  return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * A specific, existing task can be updated by making a PUT request on the
 * URL for that task. Only the fields provided in the `data` block will be
 * updated; any unspecified fields will remain unchanged.
 *
 * When using this method, it is best to specify only those fields you wish
 * to change, or else you may overwrite changes made by another user since
 * you last retrieved the task.
 *
 * Returns the complete updated task record.
 * @param {String} task The task to update.
 * @param {Object} data Data for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.update = function(
    task,
    data,
    dispatchOptions
) {
  var path = util.format('/tasks/%s', task);

  return this.dispatchPut(path, data, dispatchOptions);
};

/**
 * A specific, existing task can be deleted by making a DELETE request on the
 * URL for that task. Deleted tasks go into the "trash" of the user making
 * the delete request. Tasks can be recovered from the trash within a period
 * of 30 days; afterward they are completely removed from the system.
 *
 * Returns an empty data record.
 * @param {String} task The task to delete.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.delete = function(
    task,
    dispatchOptions
) {
  var path = util.format('/tasks/%s', task);

  return this.dispatchDelete(path, dispatchOptions);
};

/**
 * Creates and returns a job that will asynchronously handle the duplication.
 * @param {String} task The task to duplicate.
 * @param {Object} data Data for the request
 * @param {String} data.name The name of the new task.
 * @param {Array} [data.include] The fields that will be duplicated to the new task.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.duplicateTask = function(
    task,
    data,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/duplicate', task);

  return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Returns the compact task records for all tasks within the given project,
 * ordered by their priority within the project.
 * @param {String} project The project in which to search for tasks.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.findByProject = function(
    project,
    params,
    dispatchOptions
) {
  var path = util.format('/projects/%s/tasks', project);

  return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the compact task records for all tasks with the given tag.
 * @param {String} tag The tag in which to search for tasks.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.findByTag = function(
    tag,
    params,
    dispatchOptions
) {
  var path = util.format('/tags/%s/tasks', tag);

  return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * <b>Board view only:</b> Returns the compact section records for all tasks within the given section.
 * @param {String} section The section in which to search for tasks.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.findBySection = function(
    section,
    params,
    dispatchOptions
) {
  var path = util.format('/sections/%s/tasks', section);

  return this.dispatchGetCollection(path, params, dispatchOptions);
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
 * @param {String} user_task_list The user task list in which to search for tasks.
 * @param {Object} [params] Parameters for the request
 * @param {String} [params.completed_since] Only return tasks that are either incomplete or that have been
 * completed since this time.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.findByUserTaskList = function(
    userTaskList,
    params,
    dispatchOptions
) {
  var path = util.format('/user_task_lists/%s/tasks', userTaskList);

  return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the compact task records for some filtered set of tasks. Use one
 * or more of the parameters provided to filter the tasks returned. You must
 * specify a `project`, `section`, `tag`, or `user_task_list` if you do not
 * specify `assignee` and `workspace`.
 * @param {Object} [params] Parameters for the request
 * @param {String} [params.assignee] The assignee to filter tasks on.
 * @param {String} [params.workspace] The workspace or organization to filter tasks on.
 * @param {String} [params.project] The project to filter tasks on.
 * @param {String} [params.section] The section to filter tasks on.
 * @param {String} [params.tag] The tag to filter tasks on.
 * @param {String} [params.user_task_list] The user task list to filter tasks on.
 * @param {String} [params.completed_since] Only return tasks that are either incomplete or that have been
 * completed since this time.
 * @param {String} [params.modified_since] Only return tasks that have been modified since the given time.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.findAll = function(
    params,
    dispatchOptions
) {
  var path = util.format('/tasks');

  return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the compact task records for all tasks with the given tag.
 * Tasks can have more than one tag at a time.
 * @param {String} tag The tag to fetch tasks from.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.getTasksWithTag = function(
    tag,
    params,
    dispatchOptions
) {
  var path = util.format('/tags/%s/tasks', tag);

  return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * The search endpoint allows you to build complex queries to find and fetch exactly the data you need from Asana. For a more comprehensive description of all the query parameters and limitations of this endpoint, see our [long-form documentation](/developers/documentation/getting-started/search-api) for this feature.
 * @param {String} workspace The workspace or organization in which to search for tasks.
 * @param {Object} [params] Parameters for the request
 * @param {String} [params.resource_subtype] Filters results by the task's resource_subtype.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.searchInWorkspace = function(
    workspace,
    params,
    dispatchOptions
) {
  var path = util.format('/workspaces/%s/tasks/search', workspace);

  return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Returns the compact representations of all of the dependencies of a task.
 * @param {String} task The task to get dependencies on.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Tasks.prototype.dependencies = function(
    task,
    params,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/dependencies', task);

  return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * Returns the compact representations of all of the dependents of a task.
 * @param {String} task The task to get dependents on.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The requested resource
 */
Tasks.prototype.dependents = function(
    task,
    params,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/dependents', task);

  return this.dispatchGet(path, params, dispatchOptions);
};

/**
 * Marks a set of tasks as dependencies of this task, if they are not
 * already dependencies. *A task can have at most 15 dependencies.*
 * @param {String} task The task to add dependencies to.
 * @param {Object} data Data for the request
 * @param {Array} data.dependencies An array of task IDs that this task should depend on.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.addDependencies = function(
    task,
    data,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/addDependencies', task);

  return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Marks a set of tasks as dependents of this task, if they are not already
 * dependents. *A task can have at most 30 dependents.*
 * @param {String} task The task to add dependents to.
 * @param {Object} data Data for the request
 * @param {Array} data.dependents An array of task IDs that should depend on this task.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.addDependents = function(
    task,
    data,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/addDependents', task);

  return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Unlinks a set of dependencies from this task.
 * @param {String} task The task to remove dependencies from.
 * @param {Object} data Data for the request
 * @param {Array} data.dependencies An array of task IDs to remove as dependencies.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.removeDependencies = function(
    task,
    data,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/removeDependencies', task);

  return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Unlinks a set of dependents from this task.
 * @param {String} task The task to remove dependents from.
 * @param {Object} data Data for the request
 * @param {Array} data.dependents An array of task IDs to remove as dependents.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.removeDependents = function(
    task,
    data,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/removeDependents', task);

  return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Adds each of the specified followers to the task, if they are not already
 * following. Returns the complete, updated record for the affected task.
 * @param {String} task The task to add followers to.
 * @param {Object} data Data for the request
 * @param {Array} data.followers An array of followers to add to the task.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.addFollowers = function(
    task,
    data,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/addFollowers', task);

  return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Removes each of the specified followers from the task if they are
 * following. Returns the complete, updated record for the affected task.
 * @param {String} task The task to remove followers from.
 * @param {Object} data Data for the request
 * @param {Array} data.followers An array of followers to remove from the task.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.removeFollowers = function(
    task,
    data,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/removeFollowers', task);

  return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Returns a compact representation of all of the projects the task is in.
 * @param {String} task The task to get projects on.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.projects = function(
    task,
    params,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/projects', task);

  return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Adds the task to the specified project, in the optional location
 * specified. If no location arguments are given, the task will be added to
 * the end of the project.
 *
 * `addProject` can also be used to reorder a task within a project or section that
 * already contains it.
 *
 * At most one of `insert_before`, `insert_after`, or `section` should be
 * specified. Inserting into a section in an non-order-dependent way can be
 * done by specifying `section`, otherwise, to insert within a section in a
 * particular place, specify `insert_before` or `insert_after` and a task
 * within the section to anchor the position of this task.
 *
 * Returns an empty data block.
 * @param {String} task The task to add to a project.
 * @param {Object} data Data for the request
 * @param {String} data.project The project to add the task to.
 * @param {String} [data.insert_after] A task in the project to insert the task after, or `null` to
 * insert at the beginning of the list.
 * @param {String} [data.insert_before] A task in the project to insert the task before, or `null` to
 * insert at the end of the list.
 * @param {String} [data.section] A section in the project to insert the task into. The task will be
 * inserted at the bottom of the section.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.addProject = function(
    task,
    data,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/addProject', task);

  return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Removes the task from the specified project. The task will still exist
 * in the system, but it will not be in the project anymore.
 *
 * Returns an empty data block.
 * @param {String} task The task to remove from a project.
 * @param {Object} data Data for the request
 * @param {String} data.project The project to remove the task from.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.removeProject = function(
    task,
    data,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/removeProject', task);

  return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Returns a compact representation of all of the tags the task has.
 * @param {String} task The task to get tags on.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.tags = function(
    task,
    params,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/tags', task);

  return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Adds a tag to a task. Returns an empty data block.
 * @param {String} task The task to add a tag to.
 * @param {Object} data Data for the request
 * @param {String} data.tag The tag to add to the task.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.addTag = function(
    task,
    data,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/addTag', task);

  return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Removes a tag from the task. Returns an empty data block.
 * @param {String} task The task to remove a tag from.
 * @param {Object} data Data for the request
 * @param {String} data.tag The tag to remove from the task.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.removeTag = function(
    task,
    data,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/removeTag', task);

  return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Returns a compact representation of all of the subtasks of a task.
 * @param {String} task The task to get the subtasks of.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.subtasks = function(
    task,
    params,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/subtasks', task);

  return this.dispatchGetCollection(path, params, dispatchOptions);
};

/**
 * Creates a new subtask and adds it to the parent task. Returns the full record
 * for the newly created subtask.
 * @param {String} task The task to add a subtask to.
 * @param {Object} data Data for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.addSubtask = function(
    task,
    data,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/subtasks', task);

  return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Returns a compact representation of all of the stories on the task.
 * @param {String} task The task containing the stories to get.
 * @param {Object} [params] Parameters for the request
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.stories = function(
    task,
    params,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/stories', task);

  return this.dispatchGetCollection(path, params, dispatchOptions);
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
Tasks.prototype.addComment = function(
    task,
    data,
    dispatchOptions
) {
  var path = util.format('/tasks/%s/stories', task);

  return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * Insert or reorder tasks in a user's My Tasks list. If the task was not
 * assigned to the owner of the user task list it will be reassigned when
 * this endpoint is called. If neither `insert_before` nor `insert_after`
 * are provided the task will be inserted at the top of the assignee's
 * inbox.
 *
 * Returns an empty data block.
 * @param {String} user_task_list Globally unique identifier for the user task list.
 * @param {Object} data Data for the request
 * @param {String} data.task Globally unique identifier for the task.
 * @param {String} [data.insert_before] Insert the task before the task specified by this field. The inserted
 * task will inherit the `assignee_status` of this task. `insert_before`
 * and `insert_after` parameters cannot both be specified.
 * @param {String} [data.insert_after] Insert the task after the task specified by this field. The inserted
 * task will inherit the `assignee_status` of this task. `insert_before`
 * and `insert_after` parameters cannot both be specified.
 * @param {Object} [dispatchOptions] Options, if any, to pass the dispatcher for the request
 * @return {Promise} The response from the API
 */
Tasks.prototype.insertInUserTaskList = function(
    userTaskList,
    data,
    dispatchOptions
) {
  var path = util.format('/user_task_lists/%s/tasks/insert', userTaskList);

  return this.dispatchPost(path, data, dispatchOptions);
};

/**
 * This is for compatibility reasons. Please use searchInWorkspace.
 */
Tasks.prototype.search = Tasks.prototype.searchInWorkspace;

/* jshint ignore:end */
module.exports = Tasks;
