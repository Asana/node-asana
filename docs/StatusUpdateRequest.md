# Asana.StatusUpdateRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**title** | **String** | The title of the status update. | [optional] 
**resource_subtype** | **String** | The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. The &#x60;resource_subtype&#x60;s for &#x60;status&#x60; objects represent the type of their parent. | [optional] 
**text** | **String** | The text content of the status update. | 
**html_text** | **String** | [Opt In](/docs/inputoutput-options). The text content of the status update with formatting as HTML. | [optional] 
**status_type** | **String** | The type associated with the status update. This represents the current state of the object this object is on. | 
**parent** | **String** | The id of parent to send this status update to. This can be a project, goal or portfolio. | 

<a name="ResourceSubtypeEnum"></a>
## Enum: ResourceSubtypeEnum

* `project_status_update` (value: `"project_status_update"`)
* `portfolio_status_update` (value: `"portfolio_status_update"`)
* `goal_status_update` (value: `"goal_status_update"`)


<a name="StatusTypeEnum"></a>
## Enum: StatusTypeEnum

* `on_track` (value: `"on_track"`)
* `at_risk` (value: `"at_risk"`)
* `off_track` (value: `"off_track"`)
* `on_hold` (value: `"on_hold"`)
* `complete` (value: `"complete"`)
* `achieved` (value: `"achieved"`)
* `partial` (value: `"partial"`)
* `missed` (value: `"missed"`)
* `dropped` (value: `"dropped"`)

