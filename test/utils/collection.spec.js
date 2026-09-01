/*
 * Test for Collection pagination fix
 * This test verifies that next_page information is properly exposed at the top level
 */

var expect = require('expect.js');
var Collection = require('../../src/utils/collection');

describe('Collection', function() {
  describe('pagination', function() {
    var mockApiClient;
    var mockApiRequestData;
    var mockResponseWithPagination;
    var mockResponseWithoutPagination;

    beforeEach(function() {
      mockApiClient = {
        RETURN_COLLECTION: true,
        callApi: function() {
          return Promise.resolve(mockResponseWithPagination);
        }
      };

      mockApiRequestData = {
        path: '/users',
        httpMethod: 'GET',
        pathParams: {},
        queryParams: { limit: 1 },
        headerParams: {},
        formParams: {},
        bodyParam: null,
        authNames: ['personalAccessToken'],
        contentTypes: [],
        accepts: ['application/json; charset=UTF-8'],
        returnType: 'Blob'
      };

      mockResponseWithPagination = {
        data: {
          data: [
            { gid: '123', name: 'Test User 1', resource_type: 'user' },
            { gid: '456', name: 'Test User 2', resource_type: 'user' }
          ],
          next_page: {
            offset: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
            path: '/users?limit=2&offset=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9',
            uri: 'https://app.asana.com/api/1.0/users?limit=2&offset=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9'
          }
        }
      };

      mockResponseWithoutPagination = {
        data: {
          data: [
            { gid: '789', name: 'Last User', resource_type: 'user' }
          ]
          // No next_page property - indicates last page
        }
      };
    });

    it('should expose next_page at top level when pagination exists', function() {
      var collection = new Collection(mockResponseWithPagination, mockApiClient, mockApiRequestData);
      
      // Verify data is accessible
      expect(collection.data).to.be.an('array');
      expect(collection.data).to.have.length(2);
      expect(collection.data[0].gid).to.be('123');
      expect(collection.data[1].gid).to.be('456');
      
      // Verify next_page is exposed at top level
      expect(collection.next_page).to.be.an('object');
      expect(collection.next_page.offset).to.be('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9');
      expect(collection.next_page.path).to.be('/users?limit=2&offset=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9');
      expect(collection.next_page.uri).to.be('https://app.asana.com/api/1.0/users?limit=2&offset=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9');
      
      // Verify backward compatibility - _response still contains next_page
      expect(collection._response.next_page).to.be.an('object');
      expect(collection._response.next_page.offset).to.be('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9');
      
      // Verify both references point to the same object
      expect(collection.next_page).to.be(collection._response.next_page);
    });

    it('should not have next_page property when no pagination exists', function() {
      var collection = new Collection(mockResponseWithoutPagination, mockApiClient, mockApiRequestData);
      
      // Verify data is accessible
      expect(collection.data).to.be.an('array');
      expect(collection.data).to.have.length(1);
      expect(collection.data[0].gid).to.be('789');
      
      // Verify next_page is not present at top level
      expect(collection.next_page).to.be(undefined);
      
      // Verify _response also doesn't have next_page
      expect(collection._response.next_page).to.be(undefined);
    });

    it('should support nextPage() method for pagination', function(done) {
      var collection = new Collection(mockResponseWithPagination, mockApiClient, mockApiRequestData);
      
      // Mock the next page response
      var nextPageResponse = {
        data: {
          data: [
            { gid: '999', name: 'Next Page User', resource_type: 'user' }
          ]
          // No next_page - this is the last page
        }
      };
      
      // Override callApi to return next page response
      mockApiClient.callApi = function(path, method, pathParams, queryParams) {
        expect(queryParams.offset).to.be('eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9');
        return Promise.resolve(nextPageResponse);
      };
      
      collection.nextPage().then(function(nextCollection) {
        expect(nextCollection.data).to.be.an('array');
        expect(nextCollection.data).to.have.length(1);
        expect(nextCollection.data[0].gid).to.be('999');
        expect(nextCollection.next_page).to.be(undefined);
        done();
      }).catch(done);
    });

    it('should return null when calling nextPage() on collection without pagination', function(done) {
      var collection = new Collection(mockResponseWithoutPagination, mockApiClient, mockApiRequestData);
      
      collection.nextPage().then(function(result) {
        expect(result.data).to.be(null);
        done();
      }).catch(done);
    });

    it('should handle empty collections', function() {
      var emptyResponse = {
        data: {
          data: []
        }
      };
      
      var collection = new Collection(emptyResponse, mockApiClient, mockApiRequestData);
      
      expect(collection.data).to.be.an('array');
      expect(collection.data).to.have.length(0);
      expect(collection.next_page).to.be(undefined);
    });

    it('should maintain all internal properties for backward compatibility', function() {
      var collection = new Collection(mockResponseWithPagination, mockApiClient, mockApiRequestData);
      
      // Verify all internal properties are still present
      expect(collection._response).to.be.an('object');
      expect(collection._apiClient).to.be(mockApiClient);
      expect(collection._apiRequestData).to.be(mockApiRequestData);
      
      // Verify the fix doesn't break existing functionality
      expect(collection._response.data).to.be.an('array');
      expect(collection._response.data).to.have.length(2);
    });
  });
});