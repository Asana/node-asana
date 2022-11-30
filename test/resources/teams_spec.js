/* jshint mocha:true */
var assert = require('assert');
var sinon = require('sinon');
var Teams = require('../../lib/resources/teams');

describe('Teams', function() {
  describe('#new', function() {
    it('should add the dispatcher to itself', function() {
      var dispatcher = sinon.stub();
      var teams = new Teams(dispatcher);
      assert.equal(teams.dispatcher, dispatcher);
    });
  });

  describe('#getTeamsForWorkspace', function() {
    it('should handle without params', function() {
      var dispatcher = {};
      var teams = new Teams(dispatcher);
      teams.dispatchGetCollection = sinon.stub();
      var id = 1;
      teams.getTeamsForWorkspace(id);
      assert(
        teams.dispatchGetCollection.calledWith(
            '/workspaces/1/teams', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {};
      var teams = new Teams(dispatcher);
      teams.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      teams.getTeamsForWorkspace(id, params);
      assert(
        teams.dispatchGetCollection.calledWith(
            '/workspaces/1/teams', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {};
      var teams = new Teams(dispatcher);
      teams.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      teams.getTeamsForWorkspace(id, params);
      assert(
        teams.dispatchGetCollection.calledWith(
            '/workspaces/1/teams', params));
    });

    it('should handle real strings', function() {
      var dispatcher = {};
      var teams = new Teams(dispatcher);
      teams.dispatchGetCollection = sinon.stub();
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      teams.getTeamsForWorkspace(id, params);
      assert(
        teams.dispatchGetCollection.calledWith(
            '/workspaces/foobar/teams', params));
    });
  });
});