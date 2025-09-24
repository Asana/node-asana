# Asana.ReactionsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getReactionsOnObject**](ReactionsApi.md#getReactionsOnObject) | **GET** /reactions | Get reactions with an emoji base on an object.

<a name="getReactionsOnObject"></a>
# **getReactionsOnObject**

Get reactions with an emoji base on an object.

Returns the reactions with a specified emoji base character on the object.

([more information](https://developers.asana.com/reference/getreactionsonobject))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let reactionsApiInstance = new Asana.ReactionsApi();
let target = "159874"; // String | Globally unique identifier for object to fetch reactions from. Must be a GID for a status update or story.
let emoji_base = "👍"; // String | Only return reactions with this emoji base character.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9"
};
reactionsApiInstance.getReactionsOnObject(target, emoji_base, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **target** | **String**| Globally unique identifier for object to fetch reactions from. Must be a GID for a status update or story. | 
 **emoji_base** | **String**| Only return reactions with this emoji base character. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. *Note: You can only pass in an offset that was returned to you via a previously paginated request.* | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

