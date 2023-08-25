# Asana.ProjectResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**name** | **String** | Name of the project. This is generally a short sentence fragment that fits on a line in the UI for maximum readability. However, it can be longer. | [optional] 
**archived** | **Boolean** | True if the project is archived, false if not. Archived projects do not show in the UI by default and may be treated differently for queries. | [optional] 
**color** | **String** | Color of the project. | [optional] 
**created_at** | **Date** | The time at which this resource was created. | [optional] 
**current_status** | [**ProjectBaseCurrentStatus**](ProjectBaseCurrentStatus.md) |  | [optional] 
**current_status_update** | [**ProjectBaseCurrentStatusUpdate**](ProjectBaseCurrentStatusUpdate.md) |  | [optional] 
**custom_field_settings** | [**[PortfolioResponseCustomFieldSettings]**](PortfolioResponseCustomFieldSettings.md) | Array of Custom Field Settings (in compact form). | [optional] 
**default_view** | **String** | The default view (list, board, calendar, or timeline) of a project. | [optional] 
**due_date** | **Date** | *Deprecated: new integrations should prefer the &#x60;due_on&#x60; field.* | [optional] 
**due_on** | **Date** | The day on which this project is due. This takes a date with format YYYY-MM-DD. | [optional] 
**html_notes** | **String** | [Opt In](/docs/inputoutput-options). The notes of the project with formatting as HTML. | [optional] 
**members** | [**[CustomFieldResponsePeopleValue]**](CustomFieldResponsePeopleValue.md) | Array of users who are members of this project. | [optional] 
**modified_at** | **Date** | The time at which this project was last modified. *Note: This does not currently reflect any changes in associations such as tasks or comments that may have been added or removed from the project.* | [optional] 
**notes** | **String** | Free-form textual information associated with the project (ie., its description). | [optional] 
**_public** | **Boolean** | True if the project is public to its team. | [optional] 
**start_on** | **Date** | The day on which work for this project begins, or null if the project has no start date. This takes a date with &#x60;YYYY-MM-DD&#x60; format. *Note: &#x60;due_on&#x60; or &#x60;due_at&#x60; must be present in the request when setting or unsetting the &#x60;start_on&#x60; parameter. Additionally, &#x60;start_on&#x60; and &#x60;due_on&#x60; cannot be the same date.* | [optional] 
**default_access_level** | **String** | The default access for users or teams who join or are added as members to the project. | [optional] 
**minimum_access_level_for_customization** | **String** | The minimum access level needed for project members to modify this project&#x27;s workflow and appearance. | [optional] 
**minimum_access_level_for_sharing** | **String** | The minimum access level needed for project members to share the project and manage project memberships. | [optional] 
**custom_fields** | [**[PortfolioResponseCustomFields]**](PortfolioResponseCustomFields.md) | Array of Custom Fields. | [optional] 
**completed** | **Boolean** | True if the project is currently marked complete, false if not. | [optional] 
**completed_at** | **Date** | The time at which this project was completed, or null if the project is not completed. | [optional] 
**completed_by** | [**ProjectResponseCompletedBy**](ProjectResponseCompletedBy.md) |  | [optional] 
**followers** | [**[CustomFieldResponsePeopleValue]**](CustomFieldResponsePeopleValue.md) | Array of users following this project. Followers are a subset of members who have opted in to receive \&quot;tasks added\&quot; notifications for a project. | [optional] 
**owner** | **AllOfProjectResponseOwner** | The current owner of the project, may be null. | [optional] 
**team** | [**ProjectResponseTeam**](ProjectResponseTeam.md) |  | [optional] 
**icon** | **String** | The icon for a project. | [optional] 
**permalink_url** | **String** | A url that points directly to the object within Asana. | [optional] 
**project_brief** | [**ProjectResponseProjectBrief**](ProjectResponseProjectBrief.md) |  | [optional] 
**created_from_template** | [**ProjectResponseCreatedFromTemplate**](ProjectResponseCreatedFromTemplate.md) |  | [optional] 
**workspace** | [**ProjectResponseWorkspace**](ProjectResponseWorkspace.md) |  | [optional] 

<a name="ColorEnum"></a>
## Enum: ColorEnum

* `dark_pink` (value: `"dark-pink"`)
* `dark_green` (value: `"dark-green"`)
* `dark_blue` (value: `"dark-blue"`)
* `dark_red` (value: `"dark-red"`)
* `dark_teal` (value: `"dark-teal"`)
* `dark_brown` (value: `"dark-brown"`)
* `dark_orange` (value: `"dark-orange"`)
* `dark_purple` (value: `"dark-purple"`)
* `dark_warm_gray` (value: `"dark-warm-gray"`)
* `light_pink` (value: `"light-pink"`)
* `light_green` (value: `"light-green"`)
* `light_blue` (value: `"light-blue"`)
* `light_red` (value: `"light-red"`)
* `light_teal` (value: `"light-teal"`)
* `light_brown` (value: `"light-brown"`)
* `light_orange` (value: `"light-orange"`)
* `light_purple` (value: `"light-purple"`)
* `light_warm_gray` (value: `"light-warm-gray"`)
* `none` (value: `"none"`)
* `_null` (value: `"null"`)


<a name="DefaultViewEnum"></a>
## Enum: DefaultViewEnum

* `list` (value: `"list"`)
* `board` (value: `"board"`)
* `calendar` (value: `"calendar"`)
* `timeline` (value: `"timeline"`)


<a name="DefaultAccessLevelEnum"></a>
## Enum: DefaultAccessLevelEnum

* `admin` (value: `"admin"`)
* `editor` (value: `"editor"`)
* `commenter` (value: `"commenter"`)
* `viewer` (value: `"viewer"`)


<a name="MinimumAccessLevelForCustomizationEnum"></a>
## Enum: MinimumAccessLevelForCustomizationEnum

* `admin` (value: `"admin"`)
* `editor` (value: `"editor"`)


<a name="MinimumAccessLevelForSharingEnum"></a>
## Enum: MinimumAccessLevelForSharingEnum

* `admin` (value: `"admin"`)
* `editor` (value: `"editor"`)


<a name="IconEnum"></a>
## Enum: IconEnum

* `list` (value: `"list"`)
* `board` (value: `"board"`)
* `timeline` (value: `"timeline"`)
* `calendar` (value: `"calendar"`)
* `rocket` (value: `"rocket"`)
* `people` (value: `"people"`)
* `graph` (value: `"graph"`)
* `star` (value: `"star"`)
* `bug` (value: `"bug"`)
* `light_bulb` (value: `"light_bulb"`)
* `globe` (value: `"globe"`)
* `gear` (value: `"gear"`)
* `notebook` (value: `"notebook"`)
* `computer` (value: `"computer"`)
* `check` (value: `"check"`)
* `target` (value: `"target"`)
* `html` (value: `"html"`)
* `megaphone` (value: `"megaphone"`)
* `chat_bubbles` (value: `"chat_bubbles"`)
* `briefcase` (value: `"briefcase"`)
* `page_layout` (value: `"page_layout"`)
* `mountain_flag` (value: `"mountain_flag"`)
* `puzzle` (value: `"puzzle"`)
* `presentation` (value: `"presentation"`)
* `line_and_symbols` (value: `"line_and_symbols"`)
* `speed_dial` (value: `"speed_dial"`)
* `ribbon` (value: `"ribbon"`)
* `shoe` (value: `"shoe"`)
* `shopping_basket` (value: `"shopping_basket"`)
* `map` (value: `"map"`)
* `ticket` (value: `"ticket"`)
* `coins` (value: `"coins"`)

