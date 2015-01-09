
/**
 * Get the next page of results in a collection.
 *
 * @param {Object} response Full payload from a response to a
 *     collection request.
 * @param {Dispatcher} dispatcher
 * @param {Object} [dispatchOptions]
 * @returns {Promise}
 */
function nextPage(response, dispatcher, dispatchOptions) {
  /* jshint camelcase:false */
  var next = response.next_page;
  if (next === null) {
    // No more results.
    return null;
  } else if (typeof(next) === 'object') {
    var url = next.uri;
    return dispatcher.dispatch({
      method: 'GET',
      url: url,
      json: true
    }, dispatchOptions);
  } else {
    // We got a successful response back but it did not appear to contain
    // an array of items. So maybe we did not fetch a collection.
    throw new Error(
        'Cannot fetch next page of response that does not have paging info');
  }
}

exports.nextPage = nextPage;
