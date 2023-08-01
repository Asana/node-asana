# Asana.PortfolioResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**name** | **String** | The name of the portfolio. | [optional] 
**color** | **String** | Color of the portfolio. | [optional] 
**created_at** | **Date** | The time at which this resource was created. | [optional] 
**created_by** | [**CustomFieldResponsePeopleValue**](CustomFieldResponsePeopleValue.md) |  | [optional] 
**custom_field_settings** | [**[PortfolioResponseCustomFieldSettings]**](PortfolioResponseCustomFieldSettings.md) | Array of custom field settings applied to the portfolio. | [optional] 
**current_status_update** | [**PortfolioResponseCurrentStatusUpdate**](PortfolioResponseCurrentStatusUpdate.md) |  | [optional] 
**due_on** | **Date** | The localized day on which this portfolio is due. This takes a date with format YYYY-MM-DD. | [optional] 
**custom_fields** | [**[PortfolioResponseCustomFields]**](PortfolioResponseCustomFields.md) | Array of Custom Fields. | [optional] 
**members** | [**[CustomFieldResponsePeopleValue]**](CustomFieldResponsePeopleValue.md) |  | [optional] 
**owner** | [**CustomFieldResponsePeopleValue**](CustomFieldResponsePeopleValue.md) |  | [optional] 
**start_on** | **Date** | The day on which work for this portfolio begins, or null if the portfolio has no start date. This takes a date with &#x60;YYYY-MM-DD&#x60; format. *Note: &#x60;due_on&#x60; must be present in the request when setting or unsetting the &#x60;start_on&#x60; parameter. Additionally, &#x60;start_on&#x60; and &#x60;due_on&#x60; cannot be the same date.* | [optional] 
**workspace** | [**PortfolioResponseWorkspace**](PortfolioResponseWorkspace.md) |  | [optional] 
**permalink_url** | **String** | A url that points directly to the object within Asana. | [optional] 
**_public** | **Boolean** | True if the portfolio is public to its workspace members. | [optional] 
**project_templates** | [**[JobBaseNewProjectTemplate]**](JobBaseNewProjectTemplate.md) | Array of project templates that are in the portfolio | [optional] 

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

