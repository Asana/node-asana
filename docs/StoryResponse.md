# Asana.StoryResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | Globally unique identifier of the resource, as a string. | [optional] 
**resource_type** | **String** | The base type of this resource. | [optional] 
**created_at** | **Date** | The time at which this resource was created. | [optional] 
**resource_subtype** | **String** | The subtype of this resource. Different subtypes retain many of the same fields and behavior, but may render differently in Asana or represent resources with different semantic meaning. | [optional] 
**text** | **String** | The plain text of the comment to add. Cannot be used with html_text. | [optional] 
**html_text** | **String** | [Opt In](/docs/inputoutput-options). HTML formatted text for a comment. This will not include the name of the creator. | [optional] 
**is_pinned** | **Boolean** | *Conditional*. Whether the story should be pinned on the resource. | [optional] 
**sticker_name** | **String** | The name of the sticker in this story. &#x60;null&#x60; if there is no sticker. | [optional] 
**created_by** | [**CustomFieldResponsePeopleValue**](CustomFieldResponsePeopleValue.md) |  | [optional] 
**type** | **String** |  | [optional] 
**is_editable** | **Boolean** | *Conditional*. Whether the text of the story can be edited after creation. | [optional] 
**is_edited** | **Boolean** | *Conditional*. Whether the text of the story has been edited after creation. | [optional] 
**hearted** | **Boolean** | *Deprecated - please use likes instead* *Conditional*. True if the story is hearted by the authorized user, false if not. | [optional] 
**hearts** | [**[GoalResponseLikes]**](GoalResponseLikes.md) | *Deprecated - please use likes instead*  *Conditional*. Array of likes for users who have hearted this story. | [optional] 
**num_hearts** | **Number** | *Deprecated - please use likes instead*  *Conditional*. The number of users who have hearted this story. | [optional] 
**liked** | **Boolean** | *Conditional*. True if the story is liked by the authorized user, false if not. | [optional] 
**likes** | [**[GoalResponseLikes]**](GoalResponseLikes.md) | *Conditional*. Array of likes for users who have liked this story. | [optional] 
**num_likes** | **Number** | *Conditional*. The number of users who have liked this story. | [optional] 
**previews** | [**[StoryResponsePreviews]**](StoryResponsePreviews.md) | *Conditional*. A collection of previews to be displayed in the story.  *Note: This property only exists for comment stories.* | [optional] 
**old_name** | **String** | *Conditional*&#x27; | [optional] 
**new_name** | **String** | *Conditional* | [optional] 
**old_dates** | [**StoryResponseOldDates**](StoryResponseOldDates.md) |  | [optional] 
**new_dates** | [**StoryResponseOldDates**](StoryResponseOldDates.md) |  | [optional] 
**old_resource_subtype** | **String** | *Conditional* | [optional] 
**new_resource_subtype** | **String** | *Conditional* | [optional] 
**story** | [**StoryResponseStory**](StoryResponseStory.md) |  | [optional] 
**assignee** | [**StoryResponseAssignee**](StoryResponseAssignee.md) |  | [optional] 
**follower** | [**StoryResponseAssignee**](StoryResponseAssignee.md) |  | [optional] 
**old_section** | [**StoryResponseOldSection**](StoryResponseOldSection.md) |  | [optional] 
**new_section** | [**StoryResponseOldSection**](StoryResponseOldSection.md) |  | [optional] 
**task** | [**StoryResponseTask**](StoryResponseTask.md) |  | [optional] 
**project** | [**StoryResponseProject**](StoryResponseProject.md) |  | [optional] 
**tag** | [**StoryResponseTag**](StoryResponseTag.md) |  | [optional] 
**custom_field** | [**StoryResponseCustomField**](StoryResponseCustomField.md) |  | [optional] 
**old_text_value** | **String** | *Conditional* | [optional] 
**new_text_value** | **String** | *Conditional* | [optional] 
**old_number_value** | **Number** | *Conditional* | [optional] 
**new_number_value** | **Number** | *Conditional* | [optional] 
**old_enum_value** | [**StoryResponseOldEnumValue**](StoryResponseOldEnumValue.md) |  | [optional] 
**new_enum_value** | [**StoryResponseOldEnumValue**](StoryResponseOldEnumValue.md) |  | [optional] 
**old_date_value** | **AllOfStoryResponseOldDateValue** |  | [optional] 
**new_date_value** | **AllOfStoryResponseNewDateValue** |  | [optional] 
**old_people_value** | [**[CustomFieldResponsePeopleValue]**](CustomFieldResponsePeopleValue.md) | *Conditional*. The old value of a people custom field story. | [optional] 
**new_people_value** | [**[CustomFieldResponsePeopleValue]**](CustomFieldResponsePeopleValue.md) | *Conditional*. The new value of a people custom field story. | [optional] 
**old_multi_enum_values** | [**[CustomFieldBaseEnumOptions]**](CustomFieldBaseEnumOptions.md) | *Conditional*. The old value of a multi-enum custom field story. | [optional] 
**new_multi_enum_values** | [**[CustomFieldBaseEnumOptions]**](CustomFieldBaseEnumOptions.md) | *Conditional*. The new value of a multi-enum custom field story. | [optional] 
**new_approval_status** | **String** | *Conditional*. The new value of approval status. | [optional] 
**old_approval_status** | **String** | *Conditional*. The old value of approval status. | [optional] 
**duplicate_of** | [**StoryResponseTask**](StoryResponseTask.md) |  | [optional] 
**duplicated_from** | [**StoryResponseTask**](StoryResponseTask.md) |  | [optional] 
**dependency** | [**StoryResponseTask**](StoryResponseTask.md) |  | [optional] 
**source** | **String** | The component of the Asana product the user used to trigger the story. | [optional] 
**target** | [**StoryResponseTarget**](StoryResponseTarget.md) |  | [optional] 

<a name="StickerNameEnum"></a>
## Enum: StickerNameEnum

* `green_checkmark` (value: `"green_checkmark"`)
* `people_dancing` (value: `"people_dancing"`)
* `dancing_unicorn` (value: `"dancing_unicorn"`)
* `heart` (value: `"heart"`)
* `party_popper` (value: `"party_popper"`)
* `people_waving_flags` (value: `"people_waving_flags"`)
* `splashing_narwhal` (value: `"splashing_narwhal"`)
* `trophy` (value: `"trophy"`)
* `yeti_riding_unicorn` (value: `"yeti_riding_unicorn"`)
* `celebrating_people` (value: `"celebrating_people"`)
* `determined_climbers` (value: `"determined_climbers"`)
* `phoenix_spreading_love` (value: `"phoenix_spreading_love"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `comment` (value: `"comment"`)
* `system` (value: `"system"`)


<a name="SourceEnum"></a>
## Enum: SourceEnum

* `web` (value: `"web"`)
* `email` (value: `"email"`)
* `mobile` (value: `"mobile"`)
* `api` (value: `"api"`)
* `unknown` (value: `"unknown"`)

