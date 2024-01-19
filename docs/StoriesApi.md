# Asana.StoriesApi

All URIs are relative to *https://app.asana.com/api/1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createStoryForTask**](StoriesApi.md#createStoryForTask) | **POST** /tasks/{task_gid}/stories | Create a story on a task
[**deleteStory**](StoriesApi.md#deleteStory) | **DELETE** /stories/{story_gid} | Delete a story
[**getStoriesForTask**](StoriesApi.md#getStoriesForTask) | **GET** /tasks/{task_gid}/stories | Get stories from a task
[**getStory**](StoriesApi.md#getStory) | **GET** /stories/{story_gid} | Get a story
[**updateStory**](StoriesApi.md#updateStory) | **PUT** /stories/{story_gid} | Update a story

<a name="createStoryForTask"></a>
# **createStoryForTask**

Create a story on a task

Adds a story to a task. This endpoint currently only allows for comment stories to be created. The comment will be authored by the currently authenticated user, and timestamped when the server receives the request.  Returns the full record for the new story added to the task.

([more information](https://developers.asana.com/reference/createstoryfortask))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let storiesApiInstance = new Asana.StoriesApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The story to create.
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'opt_fields': "assignee,assignee.name,created_at,created_by,created_by.name,custom_field,custom_field.date_value,custom_field.date_value.date,custom_field.date_value.date_time,custom_field.display_value,custom_field.enabled,custom_field.enum_options,custom_field.enum_options.color,custom_field.enum_options.enabled,custom_field.enum_options.name,custom_field.enum_value,custom_field.enum_value.color,custom_field.enum_value.enabled,custom_field.enum_value.name,custom_field.is_formula_field,custom_field.multi_enum_values,custom_field.multi_enum_values.color,custom_field.multi_enum_values.enabled,custom_field.multi_enum_values.name,custom_field.name,custom_field.number_value,custom_field.resource_subtype,custom_field.text_value,custom_field.type,dependency,dependency.created_by,dependency.name,dependency.resource_subtype,duplicate_of,duplicate_of.created_by,duplicate_of.name,duplicate_of.resource_subtype,duplicated_from,duplicated_from.created_by,duplicated_from.name,duplicated_from.resource_subtype,follower,follower.name,hearted,hearts,hearts.user,hearts.user.name,html_text,is_editable,is_edited,is_pinned,liked,likes,likes.user,likes.user.name,new_approval_status,new_date_value,new_dates,new_dates.due_at,new_dates.due_on,new_dates.start_on,new_enum_value,new_enum_value.color,new_enum_value.enabled,new_enum_value.name,new_multi_enum_values,new_multi_enum_values.color,new_multi_enum_values.enabled,new_multi_enum_values.name,new_name,new_number_value,new_people_value,new_people_value.name,new_resource_subtype,new_section,new_section.name,new_text_value,num_hearts,num_likes,old_approval_status,old_date_value,old_dates,old_dates.due_at,old_dates.due_on,old_dates.start_on,old_enum_value,old_enum_value.color,old_enum_value.enabled,old_enum_value.name,old_multi_enum_values,old_multi_enum_values.color,old_multi_enum_values.enabled,old_multi_enum_values.name,old_name,old_number_value,old_people_value,old_people_value.name,old_resource_subtype,old_section,old_section.name,old_text_value,previews,previews.fallback,previews.footer,previews.header,previews.header_link,previews.html_text,previews.text,previews.title,previews.title_link,project,project.name,resource_subtype,source,sticker_name,story,story.created_at,story.created_by,story.created_by.name,story.resource_subtype,story.text,tag,tag.name,target,target.created_by,target.name,target.resource_subtype,task,task.created_by,task.name,task.resource_subtype,text,type"
};
storiesApiInstance.createStoryForTask(body, task_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The story to create. | 
 **task_gid** | **String**| The task to operate on. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

<a name="deleteStory"></a>
# **deleteStory**

Delete a story

Deletes a story. A user can only delete stories they have created.  Returns an empty data record.

([more information](https://developers.asana.com/reference/deletestory))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let storiesApiInstance = new Asana.StoriesApi();
let story_gid = "35678"; // String | Globally unique identifier for the story.

storiesApiInstance.deleteStory(story_gid).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **story_gid** | **String**| Globally unique identifier for the story. | 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getStoriesForTask"></a>
# **getStoriesForTask**

Get stories from a task

Returns the compact records for all stories on the task.

([more information](https://developers.asana.com/reference/getstoriesfortask))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let storiesApiInstance = new Asana.StoriesApi();
let task_gid = "321654"; // String | The task to operate on.
let opts = { 
    'limit': 50, 
    'offset': "eyJ0eXAiOJiKV1iQLCJhbGciOiJIUzI1NiJ9", 
    'opt_fields': "assignee,assignee.name,created_at,created_by,created_by.name,custom_field,custom_field.date_value,custom_field.date_value.date,custom_field.date_value.date_time,custom_field.display_value,custom_field.enabled,custom_field.enum_options,custom_field.enum_options.color,custom_field.enum_options.enabled,custom_field.enum_options.name,custom_field.enum_value,custom_field.enum_value.color,custom_field.enum_value.enabled,custom_field.enum_value.name,custom_field.is_formula_field,custom_field.multi_enum_values,custom_field.multi_enum_values.color,custom_field.multi_enum_values.enabled,custom_field.multi_enum_values.name,custom_field.name,custom_field.number_value,custom_field.resource_subtype,custom_field.text_value,custom_field.type,dependency,dependency.created_by,dependency.name,dependency.resource_subtype,duplicate_of,duplicate_of.created_by,duplicate_of.name,duplicate_of.resource_subtype,duplicated_from,duplicated_from.created_by,duplicated_from.name,duplicated_from.resource_subtype,follower,follower.name,hearted,hearts,hearts.user,hearts.user.name,html_text,is_editable,is_edited,is_pinned,liked,likes,likes.user,likes.user.name,new_approval_status,new_date_value,new_dates,new_dates.due_at,new_dates.due_on,new_dates.start_on,new_enum_value,new_enum_value.color,new_enum_value.enabled,new_enum_value.name,new_multi_enum_values,new_multi_enum_values.color,new_multi_enum_values.enabled,new_multi_enum_values.name,new_name,new_number_value,new_people_value,new_people_value.name,new_resource_subtype,new_section,new_section.name,new_text_value,num_hearts,num_likes,offset,old_approval_status,old_date_value,old_dates,old_dates.due_at,old_dates.due_on,old_dates.start_on,old_enum_value,old_enum_value.color,old_enum_value.enabled,old_enum_value.name,old_multi_enum_values,old_multi_enum_values.color,old_multi_enum_values.enabled,old_multi_enum_values.name,old_name,old_number_value,old_people_value,old_people_value.name,old_resource_subtype,old_section,old_section.name,old_text_value,path,previews,previews.fallback,previews.footer,previews.header,previews.header_link,previews.html_text,previews.text,previews.title,previews.title_link,project,project.name,resource_subtype,source,sticker_name,story,story.created_at,story.created_by,story.created_by.name,story.resource_subtype,story.text,tag,tag.name,target,target.created_by,target.name,target.resource_subtype,task,task.created_by,task.name,task.resource_subtype,text,type,uri"
};
storiesApiInstance.getStoriesForTask(task_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task_gid** | **String**| The task to operate on. | 
 **limit** | **Number**| Results per page. The number of objects to return per page. The value must be between 1 and 100. | [optional] 
 **offset** | **String**| Offset token. An offset to the next page returned by the API. A pagination request will return an offset token, which can be used as an input parameter to the next request. If an offset is not passed in, the API will return the first page of results. &#x27;Note: You can only pass in an offset that was returned to you via a previously paginated request.&#x27; | [optional] 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="getStory"></a>
# **getStory**

Get a story

Returns the full record for a single story.

([more information](https://developers.asana.com/reference/getstory))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let storiesApiInstance = new Asana.StoriesApi();
let story_gid = "35678"; // String | Globally unique identifier for the story.
let opts = { 
    'opt_fields': "assignee,assignee.name,created_at,created_by,created_by.name,custom_field,custom_field.date_value,custom_field.date_value.date,custom_field.date_value.date_time,custom_field.display_value,custom_field.enabled,custom_field.enum_options,custom_field.enum_options.color,custom_field.enum_options.enabled,custom_field.enum_options.name,custom_field.enum_value,custom_field.enum_value.color,custom_field.enum_value.enabled,custom_field.enum_value.name,custom_field.is_formula_field,custom_field.multi_enum_values,custom_field.multi_enum_values.color,custom_field.multi_enum_values.enabled,custom_field.multi_enum_values.name,custom_field.name,custom_field.number_value,custom_field.resource_subtype,custom_field.text_value,custom_field.type,dependency,dependency.created_by,dependency.name,dependency.resource_subtype,duplicate_of,duplicate_of.created_by,duplicate_of.name,duplicate_of.resource_subtype,duplicated_from,duplicated_from.created_by,duplicated_from.name,duplicated_from.resource_subtype,follower,follower.name,hearted,hearts,hearts.user,hearts.user.name,html_text,is_editable,is_edited,is_pinned,liked,likes,likes.user,likes.user.name,new_approval_status,new_date_value,new_dates,new_dates.due_at,new_dates.due_on,new_dates.start_on,new_enum_value,new_enum_value.color,new_enum_value.enabled,new_enum_value.name,new_multi_enum_values,new_multi_enum_values.color,new_multi_enum_values.enabled,new_multi_enum_values.name,new_name,new_number_value,new_people_value,new_people_value.name,new_resource_subtype,new_section,new_section.name,new_text_value,num_hearts,num_likes,old_approval_status,old_date_value,old_dates,old_dates.due_at,old_dates.due_on,old_dates.start_on,old_enum_value,old_enum_value.color,old_enum_value.enabled,old_enum_value.name,old_multi_enum_values,old_multi_enum_values.color,old_multi_enum_values.enabled,old_multi_enum_values.name,old_name,old_number_value,old_people_value,old_people_value.name,old_resource_subtype,old_section,old_section.name,old_text_value,previews,previews.fallback,previews.footer,previews.header,previews.header_link,previews.html_text,previews.text,previews.title,previews.title_link,project,project.name,resource_subtype,source,sticker_name,story,story.created_at,story.created_by,story.created_by.name,story.resource_subtype,story.text,tag,tag.name,target,target.created_by,target.name,target.resource_subtype,task,task.created_by,task.name,task.resource_subtype,text,type"
};
storiesApiInstance.getStory(story_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **story_gid** | **String**| Globally unique identifier for the story. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=UTF-8

<a name="updateStory"></a>
# **updateStory**

Update a story

Updates the story and returns the full record for the updated story. Only comment stories can have their text updated, and only comment stories and attachment stories can be pinned. Only one of `text` and `html_text` can be specified.

([more information](https://developers.asana.com/reference/updatestory))

### Example
```javascript
const Asana = require('asana');

let client = Asana.ApiClient.instance;
let token = client.authentications['token'];
token.accessToken = '<YOUR_ACCESS_TOKEN>';

let storiesApiInstance = new Asana.StoriesApi();
let body = {"data": {"<PARAM_1>": "<VALUE_1>", "<PARAM_2>": "<VALUE_2>",}}; // Object | The comment story to update.
let story_gid = "35678"; // String | Globally unique identifier for the story.
let opts = { 
    'opt_fields': "assignee,assignee.name,created_at,created_by,created_by.name,custom_field,custom_field.date_value,custom_field.date_value.date,custom_field.date_value.date_time,custom_field.display_value,custom_field.enabled,custom_field.enum_options,custom_field.enum_options.color,custom_field.enum_options.enabled,custom_field.enum_options.name,custom_field.enum_value,custom_field.enum_value.color,custom_field.enum_value.enabled,custom_field.enum_value.name,custom_field.is_formula_field,custom_field.multi_enum_values,custom_field.multi_enum_values.color,custom_field.multi_enum_values.enabled,custom_field.multi_enum_values.name,custom_field.name,custom_field.number_value,custom_field.resource_subtype,custom_field.text_value,custom_field.type,dependency,dependency.created_by,dependency.name,dependency.resource_subtype,duplicate_of,duplicate_of.created_by,duplicate_of.name,duplicate_of.resource_subtype,duplicated_from,duplicated_from.created_by,duplicated_from.name,duplicated_from.resource_subtype,follower,follower.name,hearted,hearts,hearts.user,hearts.user.name,html_text,is_editable,is_edited,is_pinned,liked,likes,likes.user,likes.user.name,new_approval_status,new_date_value,new_dates,new_dates.due_at,new_dates.due_on,new_dates.start_on,new_enum_value,new_enum_value.color,new_enum_value.enabled,new_enum_value.name,new_multi_enum_values,new_multi_enum_values.color,new_multi_enum_values.enabled,new_multi_enum_values.name,new_name,new_number_value,new_people_value,new_people_value.name,new_resource_subtype,new_section,new_section.name,new_text_value,num_hearts,num_likes,old_approval_status,old_date_value,old_dates,old_dates.due_at,old_dates.due_on,old_dates.start_on,old_enum_value,old_enum_value.color,old_enum_value.enabled,old_enum_value.name,old_multi_enum_values,old_multi_enum_values.color,old_multi_enum_values.enabled,old_multi_enum_values.name,old_name,old_number_value,old_people_value,old_people_value.name,old_resource_subtype,old_section,old_section.name,old_text_value,previews,previews.fallback,previews.footer,previews.header,previews.header_link,previews.html_text,previews.text,previews.title,previews.title_link,project,project.name,resource_subtype,source,sticker_name,story,story.created_at,story.created_by,story.created_by.name,story.resource_subtype,story.text,tag,tag.name,target,target.created_by,target.name,target.resource_subtype,task,task.created_by,task.name,task.resource_subtype,text,type"
};
storiesApiInstance.updateStory(body, story_gid, opts).then((result) => {
    console.log('API called successfully. Returned data: ' + JSON.stringify(result.data, null, 2));
}, (error) => {
    console.error(error.response.body);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Object**| The comment story to update. | 
 **story_gid** | **String**| Globally unique identifier for the story. | 
 **opt_fields** | **Object**| This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include. | [optional] 

### Return type

object

### HTTP request headers

 - **Content-Type**: application/json; charset=UTF-8
 - **Accept**: application/json; charset=UTF-8

