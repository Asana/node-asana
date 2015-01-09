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

  describe('#findByOrganization', function() {
    it('should handle without params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var teams = new Teams(dispatcher);
      var id = 1;
      teams.findByOrganization(id);
      assert(
        dispatcher.get.calledWithExactly('/organizations/1/teams', undefined));
    });

    it('should handle with params', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var teams = new Teams(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 1;
      teams.findByOrganization(id, params);
      assert(
        dispatcher.get.calledWithExactly('/organizations/1/teams', params));
    });

    it('should handle string numbers', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var teams = new Teams(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = '1';
      teams.findByOrganization(id, params);
      assert(
        dispatcher.get.calledWithExactly('/organizations/1/teams', params));
    });

    it('should do weird things with real strings', function() {
      var dispatcher = {
        get: sinon.stub()
      };
      var teams = new Teams(dispatcher);
      var params = {
        'opt_fields': 'id,name'
      };
      var id = 'foobar';
      teams.findByOrganization(id, params);
      assert(
        dispatcher.get.calledWithExactly('/organizations/NaN/teams', params));
    });
  });
});