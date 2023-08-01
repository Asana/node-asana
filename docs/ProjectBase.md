# Asana.ProjectBase

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
**workspace** | [**ProjectBaseWorkspace**](ProjectBaseWorkspace.md) |  | [optional] 

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

