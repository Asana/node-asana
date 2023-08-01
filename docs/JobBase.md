# Asana.JobBase

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**resource_subtype** | **String** | The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. | [optional] 
**status** | **String** | The current status of this job. The value is one of: &#x60;not_started&#x60;, &#x60;in_progress&#x60;, &#x60;succeeded&#x60;, or &#x60;failed&#x60;. | [optional] 
**new_project** | [**JobBaseNewProject**](JobBaseNewProject.md) |  | [optional] 
**new_task** | [**JobBaseNewTask**](JobBaseNewTask.md) |  | [optional] 
**new_project_template** | [**JobBaseNewProjectTemplate**](JobBaseNewProjectTemplate.md) |  | [optional] 

<a name="StatusEnum"></a>
## Enum: StatusEnum

* `not_started` (value: `"not_started"`)
* `in_progress` (value: `"in_progress"`)
* `succeeded` (value: `"succeeded"`)
* `failed` (value: `"failed"`)

