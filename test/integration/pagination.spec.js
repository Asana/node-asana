/*
 * Integration test for pagination functionality
 * This test simulates real-world usage of the UsersApi with pagination
 */

var expect = require('expect.js');
var sinon = require('sinon');
var { ApiClient } = require('../../src/ApiClient');
var { UsersApi } = require('../../src/api/UsersApi');

describe('UsersApi Pagination Integration', function() {
  var apiClient;
  var usersApi;
  var callApiStub;

  beforeEach(function() {
    apiClient = new ApiClient();
    usersApi = new UsersApi(apiClient);
    
    // Stub the callApi method to simulate API responses
    callApiStub = sinon.stub(apiClient, 'callApi');
  });

  afterEach(function() {
    callApiStub.restore();
  });

  it('should handle pagination correctly in getUsers()', function(done) {
    // Mock first page response
    var firstPageResponse = {
      data: {
        data: [
          { gid: '1001', name: 'User 1', resource_type: 'user' },
          { gid: '1002', name: 'User 2', resource_type: 'user' }
        ],
        next_page: {
          offset: 'page2_token',
          path: '/users?team=123&limit=2&offset=page2_token',
          uri: 'https://app.asana.com/api/1.0/users?team=123&limit=2&offset=page2_token'
        }
      }
    };

    // Mock second page response (last page)
    var secondPageResponse = {
      data: {
        data: [
          { gid: '1003', name: 'User 3', resource_type: 'user' }
        ]
        // No next_page - indicates last page
      }
    };

    // Setup stub to return different responses based on call count
    callApiStub.onFirstCall().resolves(firstPageResponse);
    callApiStub.onSecondCall().resolves(secondPageResponse);

    // Test the pagination workflow
    var opts = {
      team: '123',
      limit: 2
    };

    usersApi.getUsers(opts).then(function(firstResult) {
      // Verify first page structure
      expect(firstResult.data).to.be.an('array');
      expect(firstResult.data).to.have.length(2);
      expect(firstResult.data[0].gid).to.be('1001');
      expect(firstResult.data[1].gid).to.be('1002');
      
      // Verify next_page is accessible at top level (the fix we implemented)
      expect(firstResult.next_page).to.be.an('object');
      expect(firstResult.next_page.offset).to.be('page2_token');
      
      // Verify backward compatibility
      expect(firstResult._response.next_page).to.be.an('object');
      expect(firstResult._response.next_page.offset).to.be('page2_token');

      // Get next page using the exposed next_page information
      var nextOpts = {
        team: '123',
        limit: 2,
        offset: firstResult.next_page.offset
      };

      return usersApi.getUsers(nextOpts);
    }).then(function(secondResult) {
      // Verify second page structure
      expect(secondResult.data).to.be.an('array');
      expect(secondResult.data).to.have.length(1);
      expect(secondResult.data[0].gid).to.be('1003');
      
      // Verify no more pages
      expect(secondResult.next_page).to.be(undefined);
      expect(secondResult._response.next_page).to.be(undefined);
      
      done();
    }).catch(done);
  });

  it('should work with the improved pagination helper function', function(done) {
    // Mock multiple pages of responses
    var responses = [
      {
        data: {
          data: [{ gid: '1', name: 'User 1', resource_type: 'user' }],
          next_page: { offset: 'token1', path: '/users?offset=token1', uri: 'https://app.asana.com/api/1.0/users?offset=token1' }
        }
      },
      {
        data: {
          data: [{ gid: '2', name: 'User 2', resource_type: 'user' }],
          next_page: { offset: 'token2', path: '/users?offset=token2', uri: 'https://app.asana.com/api/1.0/users?offset=token2' }
        }
      },
      {
        data: {
          data: [{ gid: '3', name: 'User 3', resource_type: 'user' }]
          // No next_page - last page
        }
      }
    ];

    responses.forEach(function(response, index) {
      callApiStub.onCall(index).resolves(response);
    });

    // Improved pagination function (no need for fallback to _response)
    async function getAllUsersForTeam(team) {
      const users = [];
      let res;
      while (!res || res.next_page) {
        res = await usersApi.getUsers({
          team: team,
          limit: 1,
          offset: res?.next_page?.offset,
        });
        users.push(...res.data);
      }
      return users;
    }

    getAllUsersForTeam('test-team').then(function(allUsers) {
      expect(allUsers).to.be.an('array');
      expect(allUsers).to.have.length(3);
      expect(allUsers[0].gid).to.be('1');
      expect(allUsers[1].gid).to.be('2');
      expect(allUsers[2].gid).to.be('3');
      
      // Verify all three API calls were made
      expect(callApiStub.callCount).to.be(3);
      
      done();
    }).catch(done);
  });

  it('should handle single page results without pagination', function(done) {
    var singlePageResponse = {
      data: {
        data: [
          { gid: '999', name: 'Only User', resource_type: 'user' }
        ]
        // No next_page property
      }
    };

    callApiStub.resolves(singlePageResponse);

    usersApi.getUsers({ team: '456' }).then(function(result) {
      expect(result.data).to.be.an('array');
      expect(result.data).to.have.length(1);
      expect(result.data[0].gid).to.be('999');
      
      // Verify no pagination info
      expect(result.next_page).to.be(undefined);
      expect(result._response.next_page).to.be(undefined);
      
      done();
    }).catch(done);
  });
});