/**
 * @fileoverview Comprehensive test suite for the Collection utility.
 * 
 * Tests cover:
 * - Basic functionality (construction, nextPage)
 * - Async iterator support (Symbol.asyncIterator)
 * - Functional helpers (map, filter, reduce, find, forEach)
 * - Edge cases and error handling
 * - Progress tracking and pagination metadata
 * 
 * @module test/utils/collection
 */

'use strict';

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['expect.js', 'sinon', '../../src/utils/collection'], factory);
    } else if (typeof module === 'object' && module.exports) {
        factory(require('expect.js'), require('sinon'), require('../../src/utils/collection'));
    } else {
        factory(root.expect, root.sinon, root.Collection);
    }
}(this, function(expect, sinon, Collection) {

    /**
     * Creates a mock API client for testing pagination
     */
    function createMockApiClient(pages) {
        var pageIndex = 0;
        
        return {
            callApi: sinon.stub().callsFake(function() {
                pageIndex++;
                if (pageIndex >= pages.length) {
                    return Promise.resolve({
                        data: {
                            data: pages[pages.length - 1].data,
                            next_page: null
                        }
                    });
                }
                return Promise.resolve({
                    data: pages[pageIndex]
                });
            })
        };
    }

    /**
     * Creates mock response data for testing
     */
    function createMockResponse(items, hasNextPage) {
        return {
            data: {
                data: items,
                next_page: hasNextPage ? { offset: 'next-offset-token' } : null
            }
        };
    }

    /**
     * Creates mock API request data
     */
    function createMockRequestData() {
        return {
            path: '/test',
            httpMethod: 'GET',
            pathParams: {},
            queryParams: { limit: 10 },
            headerParams: {},
            formParams: {},
            bodyParam: null,
            authNames: ['token'],
            contentTypes: [],
            accepts: ['application/json'],
            returnType: 'Blob'
        };
    }

    describe('Collection', function() {
        
        describe('Constructor', function() {
            it('should create a Collection from valid response', function() {
                var response = createMockResponse([{ gid: '1', name: 'Task 1' }], false);
                var client = createMockApiClient([]);
                var requestData = createMockRequestData();
                
                var collection = new Collection(response, client, requestData);
                
                expect(collection.data).to.be.an('array');
                expect(collection.data.length).to.be(1);
                expect(collection.data[0].name).to.be('Task 1');
            });

            it('should throw error for non-collection response', function() {
                var invalidResponse = {
                    data: {
                        data: 'not an array'
                    }
                };
                var client = createMockApiClient([]);
                var requestData = createMockRequestData();
                
                expect(function() {
                    new Collection(invalidResponse, client, requestData);
                }).to.throwError(/Cannot create Collection/);
            });

            it('should accept empty array as valid collection', function() {
                var response = createMockResponse([], false);
                var client = createMockApiClient([]);
                var requestData = createMockRequestData();
                
                var collection = new Collection(response, client, requestData);
                
                expect(collection.data).to.be.an('array');
                expect(collection.data.length).to.be(0);
            });
        });

        describe('isCollectionResponse', function() {
            it('should return true for array', function() {
                expect(Collection.isCollectionResponse([])).to.be(true);
                expect(Collection.isCollectionResponse([1, 2, 3])).to.be(true);
            });

            it('should return false for non-array', function() {
                expect(Collection.isCollectionResponse(null)).to.be(false);
                expect(Collection.isCollectionResponse(undefined)).to.be(false);
                expect(Collection.isCollectionResponse({})).to.be(false);
                expect(Collection.isCollectionResponse('string')).to.be(false);
                expect(Collection.isCollectionResponse(123)).to.be(false);
            });
        });

        describe('nextPage', function() {
            it('should fetch next page when available', function(done) {
                var page1 = { data: [{ gid: '1' }], next_page: { offset: 'token' } };
                var page2 = { data: [{ gid: '2' }], next_page: null };
                
                var client = createMockApiClient([page1, page2]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                collection.nextPage().then(function(nextCollection) {
                    expect(nextCollection.data).to.be.an('array');
                    expect(nextCollection.data[0].gid).to.be('2');
                    expect(client.callApi.calledOnce).to.be(true);
                    done();
                }).catch(done);
            });

            it('should return { data: null } when no more pages', function(done) {
                var page1 = { data: [{ gid: '1' }], next_page: null };
                
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                collection.nextPage().then(function(result) {
                    expect(result.data).to.be(null);
                    done();
                }).catch(done);
            });

            it('should track page numbers correctly', function(done) {
                var page1 = { data: [{ gid: '1' }], next_page: { offset: 'token' } };
                var page2 = { data: [{ gid: '2' }], next_page: null };
                
                var client = createMockApiClient([page1, page2]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                expect(collection.getPageNumber()).to.be(1);
                
                collection.nextPage().then(function(nextCollection) {
                    expect(nextCollection.getPageNumber()).to.be(2);
                    done();
                }).catch(done);
            });

            it('should track total fetched correctly', function(done) {
                var page1 = { data: [{ gid: '1' }, { gid: '2' }], next_page: { offset: 'token' } };
                var page2 = { data: [{ gid: '3' }], next_page: null };
                
                var client = createMockApiClient([page1, page2]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                expect(collection.getTotalFetched()).to.be(2);
                
                collection.nextPage().then(function(nextCollection) {
                    expect(nextCollection.getTotalFetched()).to.be(3);
                    done();
                }).catch(done);
            });
        });

        describe('hasNextPage', function() {
            it('should return true when next_page exists', function() {
                var response = createMockResponse([{ gid: '1' }], true);
                var client = createMockApiClient([]);
                var requestData = createMockRequestData();
                
                var collection = new Collection(response, client, requestData);
                
                expect(collection.hasNextPage()).to.be(true);
            });

            it('should return false when next_page is null', function() {
                var response = createMockResponse([{ gid: '1' }], false);
                var client = createMockApiClient([]);
                var requestData = createMockRequestData();
                
                var collection = new Collection(response, client, requestData);
                
                expect(collection.hasNextPage()).to.be(false);
            });

            it('should return false when data is empty', function() {
                var response = {
                    data: {
                        data: [],
                        next_page: { offset: 'token' } // Even with next_page token
                    }
                };
                var client = createMockApiClient([]);
                var requestData = createMockRequestData();
                
                var collection = new Collection(response, client, requestData);
                
                expect(collection.hasNextPage()).to.be(false);
            });
        });

        describe('Symbol.asyncIterator', function() {
            it('should iterate through all items in single page', async function() {
                var response = createMockResponse([
                    { gid: '1', name: 'Task 1' },
                    { gid: '2', name: 'Task 2' }
                ], false);
                var client = createMockApiClient([]);
                var requestData = createMockRequestData();
                
                var collection = new Collection(response, client, requestData);
                var items = [];
                
                for await (var item of collection) {
                    items.push(item);
                }
                
                expect(items.length).to.be(2);
                expect(items[0].gid).to.be('1');
                expect(items[1].gid).to.be('2');
            });

            it('should iterate through all items across multiple pages', async function() {
                var page1 = { data: [{ gid: '1' }], next_page: { offset: 'token' } };
                var page2 = { data: [{ gid: '2' }, { gid: '3' }], next_page: null };
                
                var client = createMockApiClient([page1, page2]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var items = [];
                for await (var item of collection) {
                    items.push(item);
                }
                
                expect(items.length).to.be(3);
                expect(items[0].gid).to.be('1');
                expect(items[1].gid).to.be('2');
                expect(items[2].gid).to.be('3');
            });

            it('should support early termination with break', async function() {
                var page1 = { data: [{ gid: '1' }, { gid: '2' }], next_page: { offset: 'token' } };
                var page2 = { data: [{ gid: '3' }], next_page: null };
                
                var client = createMockApiClient([page1, page2]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var items = [];
                for await (var item of collection) {
                    items.push(item);
                    if (items.length >= 2) break;
                }
                
                expect(items.length).to.be(2);
                // Should not have fetched page 2
                expect(client.callApi.called).to.be(false);
            });

            it('should handle empty collection', async function() {
                var response = createMockResponse([], false);
                var client = createMockApiClient([]);
                var requestData = createMockRequestData();
                
                var collection = new Collection(response, client, requestData);
                var items = [];
                
                for await (var item of collection) {
                    items.push(item);
                }
                
                expect(items.length).to.be(0);
            });
        });

        describe('toArray', function() {
            it('should collect all items from all pages', async function() {
                var page1 = { data: [{ gid: '1' }], next_page: { offset: 'token' } };
                var page2 = { data: [{ gid: '2' }], next_page: null };
                
                var client = createMockApiClient([page1, page2]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.toArray();
                
                expect(result.length).to.be(2);
                expect(result[0].gid).to.be('1');
                expect(result[1].gid).to.be('2');
            });

            it('should call onPage callback for each page', async function() {
                var page1 = { data: [{ gid: '1' }], next_page: { offset: 'token' } };
                var page2 = { data: [{ gid: '2' }, { gid: '3' }], next_page: null };
                
                var client = createMockApiClient([page1, page2]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var pageInfos = [];
                await collection.toArray({
                    onPage: function(info) {
                        pageInfos.push(info);
                    }
                });
                
                expect(pageInfos.length).to.be(2);
                expect(pageInfos[0].pageNumber).to.be(1);
                expect(pageInfos[0].itemsInPage).to.be(1);
                expect(pageInfos[0].totalItemsFetched).to.be(1);
                expect(pageInfos[0].hasNextPage).to.be(true);
                
                expect(pageInfos[1].pageNumber).to.be(2);
                expect(pageInfos[1].totalItemsFetched).to.be(3);
                expect(pageInfos[1].hasNextPage).to.be(false);
            });
        });

        describe('forEach', function() {
            it('should execute callback for each item', async function() {
                var page1 = { data: [{ gid: '1' }, { gid: '2' }], next_page: null };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var items = [];
                var indices = [];
                
                var count = await collection.forEach(function(item, index) {
                    items.push(item);
                    indices.push(index);
                });
                
                expect(count).to.be(2);
                expect(items.length).to.be(2);
                expect(indices).to.eql([0, 1]);
            });

            it('should support async callbacks', async function() {
                var page1 = { data: [{ gid: '1' }], next_page: null };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var results = [];
                
                await collection.forEach(async function(item) {
                    await new Promise(function(resolve) { setTimeout(resolve, 10); });
                    results.push(item.gid);
                });
                
                expect(results).to.eql(['1']);
            });
        });

        describe('map', function() {
            it('should transform all items', async function() {
                var page1 = { data: [{ gid: '1', name: 'A' }, { gid: '2', name: 'B' }], next_page: null };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.map(function(item) {
                    return item.name.toLowerCase();
                });
                
                expect(result).to.eql(['a', 'b']);
            });

            it('should support async transform', async function() {
                var page1 = { data: [{ gid: '1' }], next_page: null };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.map(async function(item) {
                    await new Promise(function(resolve) { setTimeout(resolve, 10); });
                    return item.gid + '-transformed';
                });
                
                expect(result).to.eql(['1-transformed']);
            });

            it('should provide index to transform function', async function() {
                var page1 = { data: [{ gid: 'a' }, { gid: 'b' }], next_page: null };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.map(function(item, index) {
                    return index + ':' + item.gid;
                });
                
                expect(result).to.eql(['0:a', '1:b']);
            });
        });

        describe('filter', function() {
            it('should filter items based on predicate', async function() {
                var page1 = { 
                    data: [
                        { gid: '1', completed: true },
                        { gid: '2', completed: false },
                        { gid: '3', completed: true }
                    ], 
                    next_page: null 
                };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.filter(function(item) {
                    return item.completed;
                });
                
                expect(result.length).to.be(2);
                expect(result[0].gid).to.be('1');
                expect(result[1].gid).to.be('3');
            });

            it('should filter across multiple pages', async function() {
                var page1 = { data: [{ gid: '1', v: 10 }], next_page: { offset: 'token' } };
                var page2 = { data: [{ gid: '2', v: 5 }, { gid: '3', v: 15 }], next_page: null };
                
                var client = createMockApiClient([page1, page2]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.filter(function(item) {
                    return item.v >= 10;
                });
                
                expect(result.length).to.be(2);
                expect(result[0].gid).to.be('1');
                expect(result[1].gid).to.be('3');
            });

            it('should support async predicate', async function() {
                var page1 = { data: [{ gid: '1' }], next_page: null };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.filter(async function(item) {
                    await new Promise(function(resolve) { setTimeout(resolve, 10); });
                    return true;
                });
                
                expect(result.length).to.be(1);
            });
        });

        describe('find', function() {
            it('should return first matching item', async function() {
                var page1 = { 
                    data: [
                        { gid: '1', name: 'A' },
                        { gid: '2', name: 'B' },
                        { gid: '3', name: 'B' }
                    ], 
                    next_page: null 
                };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.find(function(item) {
                    return item.name === 'B';
                });
                
                expect(result.gid).to.be('2');
            });

            it('should return undefined when no match', async function() {
                var page1 = { data: [{ gid: '1' }], next_page: null };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.find(function(item) {
                    return item.gid === 'nonexistent';
                });
                
                expect(result).to.be(undefined);
            });

            it('should stop fetching pages once found (early termination)', async function() {
                var page1 = { data: [{ gid: '1' }], next_page: { offset: 'token' } };
                var page2 = { data: [{ gid: '2' }], next_page: null };
                
                var client = createMockApiClient([page1, page2]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.find(function(item) {
                    return item.gid === '1';
                });
                
                expect(result.gid).to.be('1');
                // Should not have fetched page 2
                expect(client.callApi.called).to.be(false);
            });

            it('should search across pages if needed', async function() {
                var page1 = { data: [{ gid: '1' }], next_page: { offset: 'token' } };
                var page2 = { data: [{ gid: '2' }], next_page: null };
                
                var client = createMockApiClient([page1, page2]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.find(function(item) {
                    return item.gid === '2';
                });
                
                expect(result.gid).to.be('2');
                expect(client.callApi.calledOnce).to.be(true);
            });
        });

        describe('reduce', function() {
            it('should reduce items to single value', async function() {
                var page1 = { data: [{ v: 1 }, { v: 2 }, { v: 3 }], next_page: null };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.reduce(function(sum, item) {
                    return sum + item.v;
                }, 0);
                
                expect(result).to.be(6);
            });

            it('should reduce across multiple pages', async function() {
                var page1 = { data: [{ v: 1 }], next_page: { offset: 'token' } };
                var page2 = { data: [{ v: 2 }, { v: 3 }], next_page: null };
                
                var client = createMockApiClient([page1, page2]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.reduce(function(sum, item) {
                    return sum + item.v;
                }, 10);
                
                expect(result).to.be(16); // 10 + 1 + 2 + 3
            });

            it('should support object accumulator', async function() {
                var page1 = { 
                    data: [
                        { gid: '1', type: 'a' },
                        { gid: '2', type: 'b' },
                        { gid: '3', type: 'a' }
                    ], 
                    next_page: null 
                };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.reduce(function(groups, item) {
                    groups[item.type] = groups[item.type] || [];
                    groups[item.type].push(item.gid);
                    return groups;
                }, {});
                
                expect(result).to.eql({ a: ['1', '3'], b: ['2'] });
            });
        });

        describe('some', function() {
            it('should return true if any item matches', async function() {
                var page1 = { data: [{ completed: false }, { completed: true }], next_page: null };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.some(function(item) {
                    return item.completed;
                });
                
                expect(result).to.be(true);
            });

            it('should return false if no items match', async function() {
                var page1 = { data: [{ completed: false }, { completed: false }], next_page: null };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.some(function(item) {
                    return item.completed;
                });
                
                expect(result).to.be(false);
            });

            it('should use early termination', async function() {
                var page1 = { data: [{ v: 1 }], next_page: { offset: 'token' } };
                var page2 = { data: [{ v: 2 }], next_page: null };
                
                var client = createMockApiClient([page1, page2]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                await collection.some(function(item) {
                    return item.v === 1;
                });
                
                // Should not fetch page 2
                expect(client.callApi.called).to.be(false);
            });
        });

        describe('every', function() {
            it('should return true if all items match', async function() {
                var page1 = { data: [{ v: 5 }, { v: 10 }], next_page: null };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.every(function(item) {
                    return item.v >= 5;
                });
                
                expect(result).to.be(true);
            });

            it('should return false if any item does not match', async function() {
                var page1 = { data: [{ v: 5 }, { v: 3 }], next_page: null };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.every(function(item) {
                    return item.v >= 5;
                });
                
                expect(result).to.be(false);
            });

            it('should use early termination on first non-match', async function() {
                var page1 = { data: [{ v: 1 }], next_page: { offset: 'token' } };
                var page2 = { data: [{ v: 2 }], next_page: null };
                
                var client = createMockApiClient([page1, page2]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                await collection.every(function(item) {
                    return item.v > 5; // First item fails
                });
                
                // Should not fetch page 2
                expect(client.callApi.called).to.be(false);
            });

            it('should return true for empty collection', async function() {
                var page1 = { data: [], next_page: null };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.every(function() {
                    return false;
                });
                
                expect(result).to.be(true);
            });
        });

        describe('take', function() {
            it('should return first N items', async function() {
                var page1 = { data: [{ gid: '1' }, { gid: '2' }, { gid: '3' }], next_page: null };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.take(2);
                
                expect(result.length).to.be(2);
                expect(result[0].gid).to.be('1');
                expect(result[1].gid).to.be('2');
            });

            it('should span multiple pages if needed', async function() {
                var page1 = { data: [{ gid: '1' }], next_page: { offset: 'token' } };
                var page2 = { data: [{ gid: '2' }, { gid: '3' }], next_page: null };
                
                var client = createMockApiClient([page1, page2]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.take(2);
                
                expect(result.length).to.be(2);
                expect(result[0].gid).to.be('1');
                expect(result[1].gid).to.be('2');
            });

            it('should return all items if count exceeds total', async function() {
                var page1 = { data: [{ gid: '1' }], next_page: null };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var result = await collection.take(100);
                
                expect(result.length).to.be(1);
            });

            it('should return empty array for count <= 0', async function() {
                var page1 = { data: [{ gid: '1' }], next_page: null };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                expect(await collection.take(0)).to.eql([]);
                expect(await collection.take(-1)).to.eql([]);
            });
        });

        describe('batch', function() {
            it('should process items in batches', async function() {
                var page1 = { 
                    data: [{ gid: '1' }, { gid: '2' }, { gid: '3' }, { gid: '4' }, { gid: '5' }], 
                    next_page: null 
                };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var batches = [];
                var batchCount = await collection.batch(2, function(batch, index) {
                    batches.push({ index: index, items: batch.map(function(i) { return i.gid; }) });
                });
                
                expect(batchCount).to.be(3);
                expect(batches.length).to.be(3);
                expect(batches[0]).to.eql({ index: 0, items: ['1', '2'] });
                expect(batches[1]).to.eql({ index: 1, items: ['3', '4'] });
                expect(batches[2]).to.eql({ index: 2, items: ['5'] });
            });

            it('should work across multiple pages', async function() {
                var page1 = { data: [{ gid: '1' }, { gid: '2' }], next_page: { offset: 'token' } };
                var page2 = { data: [{ gid: '3' }], next_page: null };
                
                var client = createMockApiClient([page1, page2]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var batches = [];
                await collection.batch(2, function(batch) {
                    batches.push(batch.map(function(i) { return i.gid; }));
                });
                
                expect(batches).to.eql([['1', '2'], ['3']]);
            });

            it('should support async processor', async function() {
                var page1 = { data: [{ gid: '1' }, { gid: '2' }], next_page: null };
                var client = createMockApiClient([page1]);
                var requestData = createMockRequestData();
                var collection = new Collection({ data: page1 }, client, requestData);
                
                var processed = [];
                await collection.batch(2, async function(batch) {
                    await new Promise(function(resolve) { setTimeout(resolve, 10); });
                    processed.push(batch.length);
                });
                
                expect(processed).to.eql([2]);
            });
        });

        describe('getPageInfo', function() {
            it('should return correct page information', function() {
                var response = createMockResponse([{ gid: '1' }, { gid: '2' }], true);
                var client = createMockApiClient([]);
                var requestData = createMockRequestData();
                
                var collection = new Collection(response, client, requestData);
                var info = collection.getPageInfo();
                
                expect(info.pageNumber).to.be(1);
                expect(info.itemsInPage).to.be(2);
                expect(info.totalItemsFetched).to.be(2);
                expect(info.hasNextPage).to.be(true);
            });
        });

        describe('fromApiClient', function() {
            it('should create Collection from promise', async function() {
                var responsePromise = Promise.resolve({
                    data: {
                        data: [{ gid: '1' }],
                        next_page: null
                    }
                });
                var client = createMockApiClient([]);
                var requestData = createMockRequestData();
                
                var collection = await Collection.fromApiClient(responsePromise, client, requestData);
                
                expect(collection).to.be.a(Collection);
                expect(collection.data.length).to.be(1);
            });
        });
    });

}));

