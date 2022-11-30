/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var UserTaskList = require('../../lib/resources/user_task_lists');

describe('User Task Lists', function() {
    describe('#getUserTaskListForUser', function() {
        it('should hit the /users/{user_gid}/user_task_list endpoint',
            function() {
                var dispatcher = {};
                var userTaskLists = new UserTaskList(dispatcher);
                userTaskLists.dispatchGet = sinon.stub();

                var id = 134679;
                userTaskLists.getUserTaskListForUser(id);

                assert(userTaskLists.dispatchGet.calledWith(
                  '/users/' + id + '/user_task_list'));
            });
    });

    describe('#getUserTaskList', function() {
        it('should hit the /user_task_list/{user_task_list_gid} endpoint',
            function() {
                var dispatcher = {};
                var userTaskLists = new UserTaskList(dispatcher);
                userTaskLists.dispatchGet = sinon.stub();

                var id = 134679;
                userTaskLists.getUserTaskList(id);

                assert(userTaskLists.dispatchGet.calledWith(
                  '/user_task_lists/' + id));
            });
    });

    describe('#tasks', function() {
        it('should hit the /user_task_list/{user_task_list_gid}/tasks endpoint',
            function() {
                var dispatcher = {};
                var userTaskLists = new UserTaskList(dispatcher);
                userTaskLists.dispatchGetCollection = sinon.stub();

                var id = 134679;
                userTaskLists.tasks(id);

                assert(userTaskLists.dispatchGetCollection.calledWith(
                    '/user_task_lists/' + id + '/tasks'));
            });
    });
});
