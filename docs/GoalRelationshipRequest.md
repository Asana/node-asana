# Asana.GoalRelationshipRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**resource_subtype** | **String** | The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. | [optional] 
**supporting_resource** | [**GoalRelationshipBaseSupportingResource**](GoalRelationshipBaseSupportingResource.md) |  | [optional] 
**contribution_weight** | **Number** | The weight that the supporting resource&#x27;s progress contributes to the supported goal&#x27;s progress. This can only be 0 or 1. | [optional] 
**supported_goal** | [**GoalRelationshipBaseSupportedGoal**](GoalRelationshipBaseSupportedGoal.md) |  | [optional] 

<a name="ResourceSubtypeEnum"></a>
## Enum: ResourceSubtypeEnum

* `subgoal` (value: `"subgoal"`)
* `supporting_work` (value: `"supporting_work"`)

