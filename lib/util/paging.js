//xcxc comment, test

function nextPage(dispatcher, response, dispatchOptions) {
  /* jshint camelcase:false */
  var nextPage = response.next_page;
  if (nextPage === null) {
    // No more results.
    return null;
  } else if (typeof(nextPage) === 'object') {
    var url = nextPage.uri;
    return dispatcher.dispatch({
      method: 'GET',
      url: url,
      json: true
    }, dispatchOptions);
  } else {
    // We got a successful response back but it did not appear to contain
    // an array of items. So maybe we did not fetch a collection.
    throw new Error(
        "Cannot fetch next page of response that does not have paging info");
  }
}

exports.nextPage = nextPage;
