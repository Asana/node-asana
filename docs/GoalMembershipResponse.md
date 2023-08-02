# Asana.GoalMembershipResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**resource_subtype** | **String** | The type of membership. | [optional] 
**member** | [**MembershipCompactMember**](MembershipCompactMember.md) |  | [optional] 
**parent** | [**MembershipCompactParent**](MembershipCompactParent.md) |  | [optional] 
**role** | **String** | Describes if the member is a commenter or editor in goal. | [optional] 
**goal** | [**MembershipCompactGoal**](MembershipCompactGoal.md) |  | [optional] 
**user** | [**GoalMembershipResponseUser**](GoalMembershipResponseUser.md) |  | [optional] 
**workspace** | [**GoalMembershipResponseWorkspace**](GoalMembershipResponseWorkspace.md) |  | [optional] 

<a name="RoleEnum"></a>
## Enum: RoleEnum

* `commenter` (value: `"commenter"`)
* `editor` (value: `"editor"`)

