# Asana.ProjectBaseCurrentStatusUpdate

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**title** | **String** | The title of the status update. | [optional] 
**resource_subtype** | **String** | The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The &#x60;resource_subtype&#x60;s for &#x60;status&#x60; objects represent the type of their parent. | [optional] 

<a name="ResourceSubtypeEnum"></a>
## Enum: ResourceSubtypeEnum

* `project_status_update` (value: `"project_status_update"`)
* `portfolio_status_update` (value: `"portfolio_status_update"`)
* `goal_status_update` (value: `"goal_status_update"`)

