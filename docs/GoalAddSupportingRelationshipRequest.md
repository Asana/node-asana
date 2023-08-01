# Asana.GoalAddSupportingRelationshipRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**supporting_resource** | **String** | The gid of the supporting resource to add to the parent goal. Must be the gid of a goal, project, or portfolio. | 
**insert_before** | **String** | An id of a subgoal of this parent goal. The new subgoal will be added before the one specified here. &#x60;insert_before&#x60; and &#x60;insert_after&#x60; parameters cannot both be specified. Currently only supported when adding a subgoal. | [optional] 
**insert_after** | **String** | An id of a subgoal of this parent goal. The new subgoal will be added after the one specified here. &#x60;insert_before&#x60; and &#x60;insert_after&#x60; parameters cannot both be specified. Currently only supported when adding a subgoal. | [optional] 
**contribution_weight** | **Number** | The weight that the supporting resource&#x27;s progress will contribute to the supported goal&#x27;s progress. This can only be 0 or 1. | [optional] 
