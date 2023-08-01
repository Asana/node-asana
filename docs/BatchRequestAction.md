# Asana.BatchRequestAction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relative_path** | **String** | The path of the desired endpoint relative to the API’s base URL. Query parameters are not accepted here; put them in &#x60;data&#x60; instead. | 
**method** | **String** | The HTTP method you wish to emulate for the action. | 
**data** | **Object** | For &#x60;GET&#x60; requests, this should be a map of query parameters you would have normally passed in the URL. Options and pagination are not accepted here; put them in &#x60;options&#x60; instead. For &#x60;POST&#x60;, &#x60;PATCH&#x60;, and &#x60;PUT&#x60; methods, this should be the content you would have normally put in the data field of the body. | [optional] 
**options** | [**BatchRequestOptions**](BatchRequestOptions.md) |  | [optional] 

<a name="MethodEnum"></a>
## Enum: MethodEnum

* `get` (value: `"get"`)
* `post` (value: `"post"`)
* `put` (value: `"put"`)
* `_delete` (value: `"delete"`)
* `patch` (value: `"patch"`)
* `head` (value: `"head"`)

