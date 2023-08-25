# Asana.ProjectMembershipCompact

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**parent** | [**JobBaseNewProject**](JobBaseNewProject.md) |  | [optional] 
**member** | [**MembershipCompactMember**](MembershipCompactMember.md) |  | [optional] 
**access_level** | **String** | Whether the member has admin, editor, commenter, or viewer access to the project. | [optional] 

<a name="AccessLevelEnum"></a>
## Enum: AccessLevelEnum

* `admin` (value: `"admin"`)
* `editor` (value: `"editor"`)
* `commenter` (value: `"commenter"`)
* `viewer` (value: `"viewer"`)

