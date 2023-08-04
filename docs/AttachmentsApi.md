# Asana.AttachmentsApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAttachmentForObject**](AttachmentsApi.md#createAttachmentForObject) | **POST** /attachments | Upload an attachment
[**deleteAttachment**](AttachmentsApi.md#deleteAttachment) | **DELETE** /attachments/{attachment_gid} | Delete an attachment
[**getAttachment**](AttachmentsApi.md#getAttachment) | **GET** /attachments/{attachment_gid} | Get an attachment
[**getAttachmentsForObject**](AttachmentsApi.md#getAttachmentsForObject) | **GET** /attachments | Get attachments from an object

<a name="createAttachmentForObject"></a>
# **createAttachmentForObject**
> AttachmentResponseData createAttachmentForObject(opts)

Upload an attachment

Upload an attachment.  This method uploads an attachment on an object and returns the compact record for the created attachment object. This is possible by either:  - Providing the URL of the external resource being attached, or - Downloading the file content first and then uploading it as any other attachment. Note that it is not possible to attach files from third party services such as Dropbox, Box, Vimeo &amp; Google Drive via the API  The 100MB size limit on attachments in Asana is enforced on this endpoint.  This endpoint expects a multipart/form-data encoded request containing the full contents of the file to be uploaded.  Requests made should follow the HTTP/1.1 specification that line terminators are of the form &#x60;CRLF&#x60; or &#x60;\\r\\n&#x60; outlined [here](http://www.w3.org/Protocols/HTTP/1.1/draft-ietf-http-v11-spec-01#Basic-Rules) in order for the server to reliably and properly handle the request.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;
const fs = require("fs");

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.AttachmentsApi();
let opts = { 
  'resource_subtype': "external" // String | 
  'file': fs.createReadStream("file_example") // Blob | 
  'parent': "parent_example" // String | 
  'url': "url_example" // String | 
  'name': "name_example" // String | 
  'connect_to_app': true // Boolean | 
  'opt_fields': ["connected_to_app","created_at","download_url","host","name","parent","parent.created_by","parent.name","parent.resource_subtype","permanent_url","resource_subtype","size","view_url"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.createAttachmentForObject(opts, (error, data, response) => {
  if (error) {
  console.error(error);
  } else {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_subtype** | **String**|  | [optional] 
 **file** | **Blob**|  | [optional] 
 **parent** | **String**|  | [optional] 
 **url** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **connect_to_app** | **Boolean**|  | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**AttachmentResponseData**](AttachmentResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json; charset=UTF-8

<a name="deleteAttachment"></a>
# **deleteAttachment**
> EmptyResponseData deleteAttachment(attachment_gid)

Delete an attachment

Deletes a specific, existing attachment.  Returns an empty data record.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.AttachmentsApi();
let attachment_gid = "12345"; // String | Globally unique identifier for the attachment.

apiInstance.deleteAttachment(attachment_gid, (error, data, response) => {
  if (error) {
  console.error(error);
  } else {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attachment_gid** | **String**| Globally unique identifier for the attachment. | 

### Return type

[**EmptyResponseData**](EmptyResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getAttachment"></a>
# **getAttachment**
> AttachmentResponseData getAttachment(attachment_gid, opts)

Get an attachment

Get the full record for a single attachment.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.AttachmentsApi();
let attachment_gid = "12345"; // String | Globally unique identifier for the attachment.
let opts = { 
  'opt_fields': ["connected_to_app","created_at","download_url","host","name","parent","parent.created_by","parent.name","parent.resource_subtype","permanent_url","resource_subtype","size","view_url"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getAttachment(attachment_gid, opts, (error, data, response) => {
  if (error) {
  console.error(error);
  } else {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **attachment_gid** | **String**| Globally unique identifier for the attachment. | 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**AttachmentResponseData**](AttachmentResponseData.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getAttachmentsForObject"></a>
# **getAttachmentsForObject**
> AttachmentResponseArray getAttachmentsForObject(parent, opts)

Get attachments from an object

Returns the compact records for all attachments on the object.  There are three possible &#x60;parent&#x60; values for this request: &#x60;project&#x60;, &#x60;project_brief&#x60;, and &#x60;task&#x60;. For a project, an attachment refers to a file uploaded to the \&quot;Key resources\&quot; section in the project Overview. For a project brief, an attachment refers to inline files in the project brief itself. For a task, an attachment refers to a file directly associated to that task.  Note that within the Asana app, inline images in the task description do not appear in the index of image thumbnails nor as stories in the task. However, requests made to &#x60;GET /attachments&#x60; for a task will return all of the images in the task, including inline images.

### Example
```javascript
const Asana = require('asana');
let defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
let oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = '<YOUR_PERSONAL_ACCESS_TOKEN>';

let apiInstance = new Asana.AttachmentsApi();
let parent = "159874"; // String | Globally unique identifier for object to fetch statuses from. Must be a GID for a `project`, `project_brief`, or `task`.
let opts = { 
  'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
  'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", // String | Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. 'Note: You can only pass in an offset that was returned to you via a previously paginated request.'
  'opt_fields': ["connected_to_app","created_at","download_url","host","name","offset","parent","parent.created_by","parent.name","parent.resource_subtype","path","permanent_url","resource_subtype","size","uri","view_url"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};
apiInstance.getAttachmentsForObject(parent, opts, (error, data, response) => {
  if (error) {
  console.error(error);
  } else {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parent** | **String**| Globally unique identifier for object to fetch statuses from. Must be a GID for a &#x60;project&#x60;, &#x60;project_brief&#x60;, or &#x60;task&#x60;. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | [**[String]**](String.md)| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

[**AttachmentResponseArray**](AttachmentResponseArray.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

