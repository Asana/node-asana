# Asana.OrganizationExportBase

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**created_at** | **Date** | The time at which this resource was created. | [optional] 
**download_url** | **String** | Download this URL to retreive the full export of the organization in JSON format. It will be compressed in a gzip (.gz) container.  *Note: May be null if the export is still in progress or failed.  If present, this URL may only be valid for 1 hour from the time of retrieval. You should avoid persisting this URL somewhere and rather refresh on demand to ensure you do not keep stale URLs.* | [optional] 
**state** | **String** | The current state of the export. | [optional] 
**organization** | [**GoalResponseWorkspace**](GoalResponseWorkspace.md) |  | [optional] 

<a name="StateEnum"></a>
## Enum: StateEnum

* `pending` (value: `"pending"`)
* `started` (value: `"started"`)
* `finished` (value: `"finished"`)
* `error` (value: `"error"`)

