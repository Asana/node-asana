# Asana.TeamResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**name** | **String** | The name of the team. | [optional] 
**description** | **String** | [Opt In](/docs/inputoutput-options). The description of the team.  | [optional] 
**html_description** | **String** | [Opt In](/docs/inputoutput-options). The description of the team with formatting as HTML.  | [optional] 
**organization** | [**TeamResponseOrganization**](TeamResponseOrganization.md) |  | [optional] 
**permalink_url** | **String** | A url that points directly to the object within Asana. | [optional] 
**visibility** | **String** | The visibility of the team to users in the same organization  | [optional] 
**edit_team_name_or_description_access_level** | **String** | Controls who can edit team name and description  | [optional] 
**edit_team_visibility_or_trash_team_access_level** | **String** | Controls who can edit team visibility and trash teams  | [optional] 
**member_invite_management_access_level** | **String** | Controls who can accept or deny member invites for a given team  | [optional] 
**guest_invite_management_access_level** | **String** | Controls who can accept or deny guest invites for a given team  | [optional] 
**join_request_management_access_level** | **String** | Controls who can accept or deny join team requests for a Membership by Request team  | [optional] 
**team_member_removal_access_level** | **String** | Controls who can remove team members  | [optional] 

<a name="VisibilityEnum"></a>
## Enum: VisibilityEnum

* `secret` (value: `"secret"`)
* `request_to_join` (value: `"request_to_join"`)
* `_public` (value: `"public"`)


<a name="EditTeamNameOrDescriptionAccessLevelEnum"></a>
## Enum: EditTeamNameOrDescriptionAccessLevelEnum

* `all_team_members` (value: `"all_team_members"`)
* `only_team_admins` (value: `"only_team_admins"`)


<a name="EditTeamVisibilityOrTrashTeamAccessLevelEnum"></a>
## Enum: EditTeamVisibilityOrTrashTeamAccessLevelEnum

* `all_team_members` (value: `"all_team_members"`)
* `only_team_admins` (value: `"only_team_admins"`)


<a name="MemberInviteManagementAccessLevelEnum"></a>
## Enum: MemberInviteManagementAccessLevelEnum

* `all_team_members` (value: `"all_team_members"`)
* `only_team_admins` (value: `"only_team_admins"`)


<a name="GuestInviteManagementAccessLevelEnum"></a>
## Enum: GuestInviteManagementAccessLevelEnum

* `all_team_members` (value: `"all_team_members"`)
* `only_team_admins` (value: `"only_team_admins"`)


<a name="JoinRequestManagementAccessLevelEnum"></a>
## Enum: JoinRequestManagementAccessLevelEnum

* `all_team_members` (value: `"all_team_members"`)
* `only_team_admins` (value: `"only_team_admins"`)


<a name="TeamMemberRemovalAccessLevelEnum"></a>
## Enum: TeamMemberRemovalAccessLevelEnum

* `all_team_members` (value: `"all_team_members"`)
* `only_team_admins` (value: `"only_team_admins"`)

