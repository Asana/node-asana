# asana [![GitHub release][release-image]]() [![Build Status][github-actions-image]][github-actions-url] [![NPM Version][npm-image]][npm-url]

JavaScript client library for Asana.

- API version: 1.0
- Package version: 2.0.4

## Installation

### For [Node.js](https://nodejs.org/)

#### npm install from [npm](https://www.npmjs.com/package/asana)

```shell
npm install asana --save
```

### For browser

Include the latest release directly from GitHub:

```html
<script src="https://github.com/Asana/node-asana/releases/download/v2.0.4/asana-min.js"></script>
```

Example usage:

```html
<script>
    const defaultClient = Asana.ApiClient.instance;
    const oauth2 = defaultClient.authentications["oauth2"];
    oauth2.accessToken = "<YOUR_PERSONAL_ACCESS_TOKEN>";

    let usersApiInstance = new Asana.UsersApi();
    let user_gid = "me";
    let opts = {};

    usersApiInstance.getUser(user_gid, opts, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log(
            "API called successfully. Returned data: " + JSON.stringify(data, null, 2)
            );
        }
    });
</script>
```

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
const Asana = require('asana');
const defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "<YOUR_PERSONAL_ACCESS_TOKEN>";

let usersApiInstance = new Asana.UsersApi()
let user_gid = "me"; // String | A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.
let opts = { 
    'opt_fields': ["email","name","photo","photo.image_1024x1024","photo.image_128x128","photo.image_21x21","photo.image_27x27","photo.image_36x36","photo.image_60x60","workspaces","workspaces.name"] // [String] | Properties to include in the response. Set this query parameter to a comma-separated list of the properties you wish to include.
};

usersApiInstance.getUser(user_gid, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
    }
});
```

### Example: GET, POST, PUT, DELETE on tasks

#### GET - get multiple tasks
```javascript
const Asana = require('asana');
const defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "<YOUR_PERSONAL_ACCESS_TOKEN>";

let tasksApiInstance = new Asana.TasksApi()
let opts = { 
    'limit': 50, // Number | Results per page. The number of objects to return per page. The value must be between 1 and 100.
    'project': "<YOUR_PROJECT_GID>", // String | The project to filter tasks on.
    'modified_since': new Date("2012-02-22T02:06:58.158Z"), // Date | Only return tasks that have been modified since the given time.  *Note: A task is considered “modified” if any of its properties change, or associations between it and other objects are modified (e.g.  a task being added to a project). A task is not considered modified just because another object it is associated with (e.g. a subtask) is modified. Actions that count as modifying the task include assigning, renaming, completing, and adding stories.*
    'opt_fields': ["actual_time_minutes","approval_status","assignee","assignee.name","assignee_section","assignee_section.name","assignee_status","completed","completed_at","completed_by","completed_by.name","created_at","custom_fields","custom_fields.asana_created_field","custom_fields.created_by","custom_fields.created_by.name","custom_fields.currency_code","custom_fields.custom_label","custom_fields.custom_label_position","custom_fields.date_value","custom_fields.date_value.date","custom_fields.date_value.date_time","custom_fields.description","custom_fields.display_value","custom_fields.enabled","custom_fields.enum_options","custom_fields.enum_options.color","custom_fields.enum_options.enabled","custom_fields.enum_options.name","custom_fields.enum_value","custom_fields.enum_value.color","custom_fields.enum_value.enabled","custom_fields.enum_value.name","custom_fields.format","custom_fields.has_notifications_enabled","custom_fields.is_formula_field","custom_fields.is_global_to_workspace","custom_fields.is_value_read_only","custom_fields.multi_enum_values","custom_fields.multi_enum_values.color","custom_fields.multi_enum_values.enabled","custom_fields.multi_enum_values.name","custom_fields.name","custom_fields.number_value","custom_fields.people_value","custom_fields.people_value.name","custom_fields.precision","custom_fields.resource_subtype","custom_fields.text_value","custom_fields.type","dependencies","dependents","due_at","due_on","external","external.data","followers","followers.name","hearted","hearts","hearts.user","hearts.user.name","html_notes","is_rendered_as_separator","liked","likes","likes.user","likes.user.name","memberships","memberships.project","memberships.project.name","memberships.section","memberships.section.name","modified_at","name","notes","num_hearts","num_likes","num_subtasks","offset","parent","parent.name","parent.resource_subtype","path","permalink_url","projects","projects.name","resource_subtype","start_at","start_on","tags","tags.name","uri","workspace","workspace.name"] // [String] | This endpoint returns a compact resource, which excludes some properties by default. To include those optional properties, set this query parameter to a comma-separated list of the properties you wish to include.
};

// GET - get multiple tasks
tasksApiInstance.getTasks(opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
    }
});
```

#### POST - create a task
```javascript
const Asana = require('asana');
const defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "<YOUR_PERSONAL_ACCESS_TOKEN>";

let tasksApiInstance = new Asana.TasksApi()
let body = new Asana.TasksBody.constructFromObject({
    data: {
        name: "New Task",
        approval_status: "pending",
        assignee_status: "upcoming",
        completed: false,
        external: {
            gid: "1234",
            data: "A blob of information.",
        },
        html_notes: "<body>Mittens <em>really</em> likes the stuff from Humboldt.</body>",
        is_rendered_as_separator: false,
        liked: true,
        assignee: "me",
        projects: ["<YOUR_PROJECT_GID>"],
    },
});
let opts = {};

// POST - Create a task
tasksApiInstance.createTask(body, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully. Returned data: " + JSON.stringify(data, null, 2));
    }
});
```

#### PUT - update a task
```javascript
const Asana = require('asana');
const defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "<YOUR_PERSONAL_ACCESS_TOKEN>";

let tasksApiInstance = new Asana.TasksApi()
let task_gid = "<YOUR_TASK_GID>";
let body = new Asana.TasksTaskGidBody.constructFromObject({
    data: {
        name: "Updated Task",
    },
});
let opts = {};

// PUT - Update a task
tasksApiInstance.updateTask(body, task_gid, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully. Returned data: " + JSON.stringify(data, null, 2));
    }
});
```

#### DELETE - delete a task
```javascript
const Asana = require('asana');
const defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "<YOUR_PERSONAL_ACCESS_TOKEN>";

let tasksApiInstance = new Asana.TasksApi()
let task_gid = "<YOUR_TASK_GID>";

// DELETE - Delete a task
tasksApiInstance.deleteTask(task_gid, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        console.log("API called successfully. Returned data: " + JSON.stringify(data, null, 2));
    }
});
```

## Documentation for API Endpoints

All URIs are relative to *https://app.asana.com/api/1.0*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*Asana.AttachmentsApi* | [**createAttachmentForObject**](docs/AttachmentsApi.md#createAttachmentForObject) | **POST** /attachments | Upload an attachment
*Asana.AttachmentsApi* | [**deleteAttachment**](docs/AttachmentsApi.md#deleteAttachment) | **DELETE** /attachments/{attachment_gid} | Delete an attachment
*Asana.AttachmentsApi* | [**getAttachment**](docs/AttachmentsApi.md#getAttachment) | **GET** /attachments/{attachment_gid} | Get an attachment
*Asana.AttachmentsApi* | [**getAttachmentsForObject**](docs/AttachmentsApi.md#getAttachmentsForObject) | **GET** /attachments | Get attachments from an object
*Asana.AuditLogAPIApi* | [**getAuditLogEvents**](docs/AuditLogAPIApi.md#getAuditLogEvents) | **GET** /workspaces/{workspace_gid}/audit_log_events | Get audit log events
*Asana.BatchAPIApi* | [**createBatchRequest**](docs/BatchAPIApi.md#createBatchRequest) | **POST** /batch | Submit parallel requests
*Asana.CustomFieldSettingsApi* | [**getCustomFieldSettingsForPortfolio**](docs/CustomFieldSettingsApi.md#getCustomFieldSettingsForPortfolio) | **GET** /portfolios/{portfolio_gid}/custom_field_settings | Get a portfolio&#x27;s custom fields
*Asana.CustomFieldSettingsApi* | [**getCustomFieldSettingsForProject**](docs/CustomFieldSettingsApi.md#getCustomFieldSettingsForProject) | **GET** /projects/{project_gid}/custom_field_settings | Get a project&#x27;s custom fields
*Asana.CustomFieldsApi* | [**createCustomField**](docs/CustomFieldsApi.md#createCustomField) | **POST** /custom_fields | Create a custom field
*Asana.CustomFieldsApi* | [**createEnumOptionForCustomField**](docs/CustomFieldsApi.md#createEnumOptionForCustomField) | **POST** /custom_fields/{custom_field_gid}/enum_options | Create an enum option
*Asana.CustomFieldsApi* | [**deleteCustomField**](docs/CustomFieldsApi.md#deleteCustomField) | **DELETE** /custom_fields/{custom_field_gid} | Delete a custom field
*Asana.CustomFieldsApi* | [**getCustomField**](docs/CustomFieldsApi.md#getCustomField) | **GET** /custom_fields/{custom_field_gid} | Get a custom field
*Asana.CustomFieldsApi* | [**getCustomFieldsForWorkspace**](docs/CustomFieldsApi.md#getCustomFieldsForWorkspace) | **GET** /workspaces/{workspace_gid}/custom_fields | Get a workspace&#x27;s custom fields
*Asana.CustomFieldsApi* | [**insertEnumOptionForCustomField**](docs/CustomFieldsApi.md#insertEnumOptionForCustomField) | **POST** /custom_fields/{custom_field_gid}/enum_options/insert | Reorder a custom field&#x27;s enum
*Asana.CustomFieldsApi* | [**updateCustomField**](docs/CustomFieldsApi.md#updateCustomField) | **PUT** /custom_fields/{custom_field_gid} | Update a custom field
*Asana.CustomFieldsApi* | [**updateEnumOption**](docs/CustomFieldsApi.md#updateEnumOption) | **PUT** /enum_options/{enum_option_gid} | Update an enum option
*Asana.EventsApi* | [**getEvents**](docs/EventsApi.md#getEvents) | **GET** /events | Get events on a resource
*Asana.GoalRelationshipsApi* | [**addSupportingRelationship**](docs/GoalRelationshipsApi.md#addSupportingRelationship) | **POST** /goals/{goal_gid}/addSupportingRelationship | Add a supporting goal relationship
*Asana.GoalRelationshipsApi* | [**getGoalRelationship**](docs/GoalRelationshipsApi.md#getGoalRelationship) | **GET** /goal_relationships/{goal_relationship_gid} | Get a goal relationship
*Asana.GoalRelationshipsApi* | [**getGoalRelationships**](docs/GoalRelationshipsApi.md#getGoalRelationships) | **GET** /goal_relationships | Get goal relationships
*Asana.GoalRelationshipsApi* | [**removeSupportingRelationship**](docs/GoalRelationshipsApi.md#removeSupportingRelationship) | **POST** /goals/{goal_gid}/removeSupportingRelationship | Removes a supporting goal relationship
*Asana.GoalRelationshipsApi* | [**updateGoalRelationship**](docs/GoalRelationshipsApi.md#updateGoalRelationship) | **PUT** /goal_relationships/{goal_relationship_gid} | Update a goal relationship
*Asana.GoalsApi* | [**addFollowers**](docs/GoalsApi.md#addFollowers) | **POST** /goals/{goal_gid}/addFollowers | Add a collaborator to a goal
*Asana.GoalsApi* | [**createGoal**](docs/GoalsApi.md#createGoal) | **POST** /goals | Create a goal
*Asana.GoalsApi* | [**createGoalMetric**](docs/GoalsApi.md#createGoalMetric) | **POST** /goals/{goal_gid}/setMetric | Create a goal metric
*Asana.GoalsApi* | [**deleteGoal**](docs/GoalsApi.md#deleteGoal) | **DELETE** /goals/{goal_gid} | Delete a goal
*Asana.GoalsApi* | [**getGoal**](docs/GoalsApi.md#getGoal) | **GET** /goals/{goal_gid} | Get a goal
*Asana.GoalsApi* | [**getGoals**](docs/GoalsApi.md#getGoals) | **GET** /goals | Get goals
*Asana.GoalsApi* | [**getParentGoalsForGoal**](docs/GoalsApi.md#getParentGoalsForGoal) | **GET** /goals/{goal_gid}/parentGoals | Get parent goals from a goal
*Asana.GoalsApi* | [**removeFollowers**](docs/GoalsApi.md#removeFollowers) | **POST** /goals/{goal_gid}/removeFollowers | Remove a collaborator from a goal
*Asana.GoalsApi* | [**updateGoal**](docs/GoalsApi.md#updateGoal) | **PUT** /goals/{goal_gid} | Update a goal
*Asana.GoalsApi* | [**updateGoalMetric**](docs/GoalsApi.md#updateGoalMetric) | **POST** /goals/{goal_gid}/setMetricCurrentValue | Update a goal metric
*Asana.JobsApi* | [**getJob**](docs/JobsApi.md#getJob) | **GET** /jobs/{job_gid} | Get a job by id
*Asana.MembershipsApi* | [**createMembership**](docs/MembershipsApi.md#createMembership) | **POST** /memberships | Create a membership
*Asana.MembershipsApi* | [**deleteMembership**](docs/MembershipsApi.md#deleteMembership) | **DELETE** /memberships/{membership_gid} | Delete a membership
*Asana.MembershipsApi* | [**getMembership**](docs/MembershipsApi.md#getMembership) | **GET** /memberships/{membership_gid} | Get a membership
*Asana.MembershipsApi* | [**getMemberships**](docs/MembershipsApi.md#getMemberships) | **GET** /memberships | Get multiple memberships
*Asana.OrganizationExportsApi* | [**createOrganizationExport**](docs/OrganizationExportsApi.md#createOrganizationExport) | **POST** /organization_exports | Create an organization export request
*Asana.OrganizationExportsApi* | [**getOrganizationExport**](docs/OrganizationExportsApi.md#getOrganizationExport) | **GET** /organization_exports/{organization_export_gid} | Get details on an org export request
*Asana.PortfolioMembershipsApi* | [**getPortfolioMembership**](docs/PortfolioMembershipsApi.md#getPortfolioMembership) | **GET** /portfolio_memberships/{portfolio_membership_gid} | Get a portfolio membership
*Asana.PortfolioMembershipsApi* | [**getPortfolioMemberships**](docs/PortfolioMembershipsApi.md#getPortfolioMemberships) | **GET** /portfolio_memberships | Get multiple portfolio memberships
*Asana.PortfolioMembershipsApi* | [**getPortfolioMembershipsForPortfolio**](docs/PortfolioMembershipsApi.md#getPortfolioMembershipsForPortfolio) | **GET** /portfolios/{portfolio_gid}/portfolio_memberships | Get memberships from a portfolio
*Asana.PortfoliosApi* | [**addCustomFieldSettingForPortfolio**](docs/PortfoliosApi.md#addCustomFieldSettingForPortfolio) | **POST** /portfolios/{portfolio_gid}/addCustomFieldSetting | Add a custom field to a portfolio
*Asana.PortfoliosApi* | [**addItemForPortfolio**](docs/PortfoliosApi.md#addItemForPortfolio) | **POST** /portfolios/{portfolio_gid}/addItem | Add a portfolio item
*Asana.PortfoliosApi* | [**addMembersForPortfolio**](docs/PortfoliosApi.md#addMembersForPortfolio) | **POST** /portfolios/{portfolio_gid}/addMembers | Add users to a portfolio
*Asana.PortfoliosApi* | [**createPortfolio**](docs/PortfoliosApi.md#createPortfolio) | **POST** /portfolios | Create a portfolio
*Asana.PortfoliosApi* | [**deletePortfolio**](docs/PortfoliosApi.md#deletePortfolio) | **DELETE** /portfolios/{portfolio_gid} | Delete a portfolio
*Asana.PortfoliosApi* | [**getItemsForPortfolio**](docs/PortfoliosApi.md#getItemsForPortfolio) | **GET** /portfolios/{portfolio_gid}/items | Get portfolio items
*Asana.PortfoliosApi* | [**getPortfolio**](docs/PortfoliosApi.md#getPortfolio) | **GET** /portfolios/{portfolio_gid} | Get a portfolio
*Asana.PortfoliosApi* | [**getPortfolios**](docs/PortfoliosApi.md#getPortfolios) | **GET** /portfolios | Get multiple portfolios
*Asana.PortfoliosApi* | [**removeCustomFieldSettingForPortfolio**](docs/PortfoliosApi.md#removeCustomFieldSettingForPortfolio) | **POST** /portfolios/{portfolio_gid}/removeCustomFieldSetting | Remove a custom field from a portfolio
*Asana.PortfoliosApi* | [**removeItemForPortfolio**](docs/PortfoliosApi.md#removeItemForPortfolio) | **POST** /portfolios/{portfolio_gid}/removeItem | Remove a portfolio item
*Asana.PortfoliosApi* | [**removeMembersForPortfolio**](docs/PortfoliosApi.md#removeMembersForPortfolio) | **POST** /portfolios/{portfolio_gid}/removeMembers | Remove users from a portfolio
*Asana.PortfoliosApi* | [**updatePortfolio**](docs/PortfoliosApi.md#updatePortfolio) | **PUT** /portfolios/{portfolio_gid} | Update a portfolio
*Asana.ProjectBriefsApi* | [**createProjectBrief**](docs/ProjectBriefsApi.md#createProjectBrief) | **POST** /projects/{project_gid}/project_briefs | Create a project brief
*Asana.ProjectBriefsApi* | [**deleteProjectBrief**](docs/ProjectBriefsApi.md#deleteProjectBrief) | **DELETE** /project_briefs/{project_brief_gid} | Delete a project brief
*Asana.ProjectBriefsApi* | [**getProjectBrief**](docs/ProjectBriefsApi.md#getProjectBrief) | **GET** /project_briefs/{project_brief_gid} | Get a project brief
*Asana.ProjectBriefsApi* | [**updateProjectBrief**](docs/ProjectBriefsApi.md#updateProjectBrief) | **PUT** /project_briefs/{project_brief_gid} | Update a project brief
*Asana.ProjectMembershipsApi* | [**getProjectMembership**](docs/ProjectMembershipsApi.md#getProjectMembership) | **GET** /project_memberships/{project_membership_gid} | Get a project membership
*Asana.ProjectMembershipsApi* | [**getProjectMembershipsForProject**](docs/ProjectMembershipsApi.md#getProjectMembershipsForProject) | **GET** /projects/{project_gid}/project_memberships | Get memberships from a project
*Asana.ProjectStatusesApi* | [**createProjectStatusForProject**](docs/ProjectStatusesApi.md#createProjectStatusForProject) | **POST** /projects/{project_gid}/project_statuses | Create a project status
*Asana.ProjectStatusesApi* | [**deleteProjectStatus**](docs/ProjectStatusesApi.md#deleteProjectStatus) | **DELETE** /project_statuses/{project_status_gid} | Delete a project status
*Asana.ProjectStatusesApi* | [**getProjectStatus**](docs/ProjectStatusesApi.md#getProjectStatus) | **GET** /project_statuses/{project_status_gid} | Get a project status
*Asana.ProjectStatusesApi* | [**getProjectStatusesForProject**](docs/ProjectStatusesApi.md#getProjectStatusesForProject) | **GET** /projects/{project_gid}/project_statuses | Get statuses from a project
*Asana.ProjectTemplatesApi* | [**deleteProjectTemplate**](docs/ProjectTemplatesApi.md#deleteProjectTemplate) | **DELETE** /project_templates/{project_template_gid} | Delete a project template
*Asana.ProjectTemplatesApi* | [**getProjectTemplate**](docs/ProjectTemplatesApi.md#getProjectTemplate) | **GET** /project_templates/{project_template_gid} | Get a project template
*Asana.ProjectTemplatesApi* | [**getProjectTemplates**](docs/ProjectTemplatesApi.md#getProjectTemplates) | **GET** /project_templates | Get multiple project templates
*Asana.ProjectTemplatesApi* | [**getProjectTemplatesForTeam**](docs/ProjectTemplatesApi.md#getProjectTemplatesForTeam) | **GET** /teams/{team_gid}/project_templates | Get a team&#x27;s project templates
*Asana.ProjectTemplatesApi* | [**instantiateProject**](docs/ProjectTemplatesApi.md#instantiateProject) | **POST** /project_templates/{project_template_gid}/instantiateProject | Instantiate a project from a project template
*Asana.ProjectsApi* | [**addCustomFieldSettingForProject**](docs/ProjectsApi.md#addCustomFieldSettingForProject) | **POST** /projects/{project_gid}/addCustomFieldSetting | Add a custom field to a project
*Asana.ProjectsApi* | [**addFollowersForProject**](docs/ProjectsApi.md#addFollowersForProject) | **POST** /projects/{project_gid}/addFollowers | Add followers to a project
*Asana.ProjectsApi* | [**addMembersForProject**](docs/ProjectsApi.md#addMembersForProject) | **POST** /projects/{project_gid}/addMembers | Add users to a project
*Asana.ProjectsApi* | [**createProject**](docs/ProjectsApi.md#createProject) | **POST** /projects | Create a project
*Asana.ProjectsApi* | [**createProjectForTeam**](docs/ProjectsApi.md#createProjectForTeam) | **POST** /teams/{team_gid}/projects | Create a project in a team
*Asana.ProjectsApi* | [**createProjectForWorkspace**](docs/ProjectsApi.md#createProjectForWorkspace) | **POST** /workspaces/{workspace_gid}/projects | Create a project in a workspace
*Asana.ProjectsApi* | [**deleteProject**](docs/ProjectsApi.md#deleteProject) | **DELETE** /projects/{project_gid} | Delete a project
*Asana.ProjectsApi* | [**duplicateProject**](docs/ProjectsApi.md#duplicateProject) | **POST** /projects/{project_gid}/duplicate | Duplicate a project
*Asana.ProjectsApi* | [**getProject**](docs/ProjectsApi.md#getProject) | **GET** /projects/{project_gid} | Get a project
*Asana.ProjectsApi* | [**getProjects**](docs/ProjectsApi.md#getProjects) | **GET** /projects | Get multiple projects
*Asana.ProjectsApi* | [**getProjectsForTask**](docs/ProjectsApi.md#getProjectsForTask) | **GET** /tasks/{task_gid}/projects | Get projects a task is in
*Asana.ProjectsApi* | [**getProjectsForTeam**](docs/ProjectsApi.md#getProjectsForTeam) | **GET** /teams/{team_gid}/projects | Get a team&#x27;s projects
*Asana.ProjectsApi* | [**getProjectsForWorkspace**](docs/ProjectsApi.md#getProjectsForWorkspace) | **GET** /workspaces/{workspace_gid}/projects | Get all projects in a workspace
*Asana.ProjectsApi* | [**getTaskCountsForProject**](docs/ProjectsApi.md#getTaskCountsForProject) | **GET** /projects/{project_gid}/task_counts | Get task count of a project
*Asana.ProjectsApi* | [**projectSaveAsTemplate**](docs/ProjectsApi.md#projectSaveAsTemplate) | **POST** /projects/{project_gid}/saveAsTemplate | Create a project template from a project
*Asana.ProjectsApi* | [**removeCustomFieldSettingForProject**](docs/ProjectsApi.md#removeCustomFieldSettingForProject) | **POST** /projects/{project_gid}/removeCustomFieldSetting | Remove a custom field from a project
*Asana.ProjectsApi* | [**removeFollowersForProject**](docs/ProjectsApi.md#removeFollowersForProject) | **POST** /projects/{project_gid}/removeFollowers | Remove followers from a project
*Asana.ProjectsApi* | [**removeMembersForProject**](docs/ProjectsApi.md#removeMembersForProject) | **POST** /projects/{project_gid}/removeMembers | Remove users from a project
*Asana.ProjectsApi* | [**updateProject**](docs/ProjectsApi.md#updateProject) | **PUT** /projects/{project_gid} | Update a project
*Asana.RulesApi* | [**triggerRule**](docs/RulesApi.md#triggerRule) | **POST** /rule_triggers/{rule_trigger_gid}/run | Trigger a rule
*Asana.SectionsApi* | [**addTaskForSection**](docs/SectionsApi.md#addTaskForSection) | **POST** /sections/{section_gid}/addTask | Add task to section
*Asana.SectionsApi* | [**createSectionForProject**](docs/SectionsApi.md#createSectionForProject) | **POST** /projects/{project_gid}/sections | Create a section in a project
*Asana.SectionsApi* | [**deleteSection**](docs/SectionsApi.md#deleteSection) | **DELETE** /sections/{section_gid} | Delete a section
*Asana.SectionsApi* | [**getSection**](docs/SectionsApi.md#getSection) | **GET** /sections/{section_gid} | Get a section
*Asana.SectionsApi* | [**getSectionsForProject**](docs/SectionsApi.md#getSectionsForProject) | **GET** /projects/{project_gid}/sections | Get sections in a project
*Asana.SectionsApi* | [**insertSectionForProject**](docs/SectionsApi.md#insertSectionForProject) | **POST** /projects/{project_gid}/sections/insert | Move or Insert sections
*Asana.SectionsApi* | [**updateSection**](docs/SectionsApi.md#updateSection) | **PUT** /sections/{section_gid} | Update a section
*Asana.StatusUpdatesApi* | [**createStatusForObject**](docs/StatusUpdatesApi.md#createStatusForObject) | **POST** /status_updates | Create a status update
*Asana.StatusUpdatesApi* | [**deleteStatus**](docs/StatusUpdatesApi.md#deleteStatus) | **DELETE** /status_updates/{status_update_gid} | Delete a status update
*Asana.StatusUpdatesApi* | [**getStatus**](docs/StatusUpdatesApi.md#getStatus) | **GET** /status_updates/{status_update_gid} | Get a status update
*Asana.StatusUpdatesApi* | [**getStatusesForObject**](docs/StatusUpdatesApi.md#getStatusesForObject) | **GET** /status_updates | Get status updates from an object
*Asana.StoriesApi* | [**createStoryForTask**](docs/StoriesApi.md#createStoryForTask) | **POST** /tasks/{task_gid}/stories | Create a story on a task
*Asana.StoriesApi* | [**deleteStory**](docs/StoriesApi.md#deleteStory) | **DELETE** /stories/{story_gid} | Delete a story
*Asana.StoriesApi* | [**getStoriesForTask**](docs/StoriesApi.md#getStoriesForTask) | **GET** /tasks/{task_gid}/stories | Get stories from a task
*Asana.StoriesApi* | [**getStory**](docs/StoriesApi.md#getStory) | **GET** /stories/{story_gid} | Get a story
*Asana.StoriesApi* | [**updateStory**](docs/StoriesApi.md#updateStory) | **PUT** /stories/{story_gid} | Update a story
*Asana.TagsApi* | [**createTag**](docs/TagsApi.md#createTag) | **POST** /tags | Create a tag
*Asana.TagsApi* | [**createTagForWorkspace**](docs/TagsApi.md#createTagForWorkspace) | **POST** /workspaces/{workspace_gid}/tags | Create a tag in a workspace
*Asana.TagsApi* | [**deleteTag**](docs/TagsApi.md#deleteTag) | **DELETE** /tags/{tag_gid} | Delete a tag
*Asana.TagsApi* | [**getTag**](docs/TagsApi.md#getTag) | **GET** /tags/{tag_gid} | Get a tag
*Asana.TagsApi* | [**getTags**](docs/TagsApi.md#getTags) | **GET** /tags | Get multiple tags
*Asana.TagsApi* | [**getTagsForTask**](docs/TagsApi.md#getTagsForTask) | **GET** /tasks/{task_gid}/tags | Get a task&#x27;s tags
*Asana.TagsApi* | [**getTagsForWorkspace**](docs/TagsApi.md#getTagsForWorkspace) | **GET** /workspaces/{workspace_gid}/tags | Get tags in a workspace
*Asana.TagsApi* | [**updateTag**](docs/TagsApi.md#updateTag) | **PUT** /tags/{tag_gid} | Update a tag
*Asana.TasksApi* | [**addDependenciesForTask**](docs/TasksApi.md#addDependenciesForTask) | **POST** /tasks/{task_gid}/addDependencies | Set dependencies for a task
*Asana.TasksApi* | [**addDependentsForTask**](docs/TasksApi.md#addDependentsForTask) | **POST** /tasks/{task_gid}/addDependents | Set dependents for a task
*Asana.TasksApi* | [**addFollowersForTask**](docs/TasksApi.md#addFollowersForTask) | **POST** /tasks/{task_gid}/addFollowers | Add followers to a task
*Asana.TasksApi* | [**addProjectForTask**](docs/TasksApi.md#addProjectForTask) | **POST** /tasks/{task_gid}/addProject | Add a project to a task
*Asana.TasksApi* | [**addTagForTask**](docs/TasksApi.md#addTagForTask) | **POST** /tasks/{task_gid}/addTag | Add a tag to a task
*Asana.TasksApi* | [**createSubtaskForTask**](docs/TasksApi.md#createSubtaskForTask) | **POST** /tasks/{task_gid}/subtasks | Create a subtask
*Asana.TasksApi* | [**createTask**](docs/TasksApi.md#createTask) | **POST** /tasks | Create a task
*Asana.TasksApi* | [**deleteTask**](docs/TasksApi.md#deleteTask) | **DELETE** /tasks/{task_gid} | Delete a task
*Asana.TasksApi* | [**duplicateTask**](docs/TasksApi.md#duplicateTask) | **POST** /tasks/{task_gid}/duplicate | Duplicate a task
*Asana.TasksApi* | [**getDependenciesForTask**](docs/TasksApi.md#getDependenciesForTask) | **GET** /tasks/{task_gid}/dependencies | Get dependencies from a task
*Asana.TasksApi* | [**getDependentsForTask**](docs/TasksApi.md#getDependentsForTask) | **GET** /tasks/{task_gid}/dependents | Get dependents from a task
*Asana.TasksApi* | [**getSubtasksForTask**](docs/TasksApi.md#getSubtasksForTask) | **GET** /tasks/{task_gid}/subtasks | Get subtasks from a task
*Asana.TasksApi* | [**getTask**](docs/TasksApi.md#getTask) | **GET** /tasks/{task_gid} | Get a task
*Asana.TasksApi* | [**getTasks**](docs/TasksApi.md#getTasks) | **GET** /tasks | Get multiple tasks
*Asana.TasksApi* | [**getTasksForProject**](docs/TasksApi.md#getTasksForProject) | **GET** /projects/{project_gid}/tasks | Get tasks from a project
*Asana.TasksApi* | [**getTasksForSection**](docs/TasksApi.md#getTasksForSection) | **GET** /sections/{section_gid}/tasks | Get tasks from a section
*Asana.TasksApi* | [**getTasksForTag**](docs/TasksApi.md#getTasksForTag) | **GET** /tags/{tag_gid}/tasks | Get tasks from a tag
*Asana.TasksApi* | [**getTasksForUserTaskList**](docs/TasksApi.md#getTasksForUserTaskList) | **GET** /user_task_lists/{user_task_list_gid}/tasks | Get tasks from a user task list
*Asana.TasksApi* | [**removeDependenciesForTask**](docs/TasksApi.md#removeDependenciesForTask) | **POST** /tasks/{task_gid}/removeDependencies | Unlink dependencies from a task
*Asana.TasksApi* | [**removeDependentsForTask**](docs/TasksApi.md#removeDependentsForTask) | **POST** /tasks/{task_gid}/removeDependents | Unlink dependents from a task
*Asana.TasksApi* | [**removeFollowerForTask**](docs/TasksApi.md#removeFollowerForTask) | **POST** /tasks/{task_gid}/removeFollowers | Remove followers from a task
*Asana.TasksApi* | [**removeProjectForTask**](docs/TasksApi.md#removeProjectForTask) | **POST** /tasks/{task_gid}/removeProject | Remove a project from a task
*Asana.TasksApi* | [**removeTagForTask**](docs/TasksApi.md#removeTagForTask) | **POST** /tasks/{task_gid}/removeTag | Remove a tag from a task
*Asana.TasksApi* | [**searchTasksForWorkspace**](docs/TasksApi.md#searchTasksForWorkspace) | **GET** /workspaces/{workspace_gid}/tasks/search | Search tasks in a workspace
*Asana.TasksApi* | [**setParentForTask**](docs/TasksApi.md#setParentForTask) | **POST** /tasks/{task_gid}/setParent | Set the parent of a task
*Asana.TasksApi* | [**updateTask**](docs/TasksApi.md#updateTask) | **PUT** /tasks/{task_gid} | Update a task
*Asana.TeamMembershipsApi* | [**getTeamMembership**](docs/TeamMembershipsApi.md#getTeamMembership) | **GET** /team_memberships/{team_membership_gid} | Get a team membership
*Asana.TeamMembershipsApi* | [**getTeamMemberships**](docs/TeamMembershipsApi.md#getTeamMemberships) | **GET** /team_memberships | Get team memberships
*Asana.TeamMembershipsApi* | [**getTeamMembershipsForTeam**](docs/TeamMembershipsApi.md#getTeamMembershipsForTeam) | **GET** /teams/{team_gid}/team_memberships | Get memberships from a team
*Asana.TeamMembershipsApi* | [**getTeamMembershipsForUser**](docs/TeamMembershipsApi.md#getTeamMembershipsForUser) | **GET** /users/{user_gid}/team_memberships | Get memberships from a user
*Asana.TeamsApi* | [**addUserForTeam**](docs/TeamsApi.md#addUserForTeam) | **POST** /teams/{team_gid}/addUser | Add a user to a team
*Asana.TeamsApi* | [**createTeam**](docs/TeamsApi.md#createTeam) | **POST** /teams | Create a team
*Asana.TeamsApi* | [**getTeam**](docs/TeamsApi.md#getTeam) | **GET** /teams/{team_gid} | Get a team
*Asana.TeamsApi* | [**getTeamsForUser**](docs/TeamsApi.md#getTeamsForUser) | **GET** /users/{user_gid}/teams | Get teams for a user
*Asana.TeamsApi* | [**getTeamsForWorkspace**](docs/TeamsApi.md#getTeamsForWorkspace) | **GET** /workspaces/{workspace_gid}/teams | Get teams in a workspace
*Asana.TeamsApi* | [**removeUserForTeam**](docs/TeamsApi.md#removeUserForTeam) | **POST** /teams/{team_gid}/removeUser | Remove a user from a team
*Asana.TeamsApi* | [**updateTeam**](docs/TeamsApi.md#updateTeam) | **PUT** /teams/{team_gid} | Update a team
*Asana.TimePeriodsApi* | [**getTimePeriod**](docs/TimePeriodsApi.md#getTimePeriod) | **GET** /time_periods/{time_period_gid} | Get a time period
*Asana.TimePeriodsApi* | [**getTimePeriods**](docs/TimePeriodsApi.md#getTimePeriods) | **GET** /time_periods | Get time periods
*Asana.TimeTrackingEntriesApi* | [**createTimeTrackingEntry**](docs/TimeTrackingEntriesApi.md#createTimeTrackingEntry) | **POST** /tasks/{task_gid}/time_tracking_entries | Create a time tracking entry
*Asana.TimeTrackingEntriesApi* | [**deleteTimeTrackingEntry**](docs/TimeTrackingEntriesApi.md#deleteTimeTrackingEntry) | **DELETE** /time_tracking_entries/{time_tracking_entry_gid} | Delete a time tracking entry
*Asana.TimeTrackingEntriesApi* | [**getTimeTrackingEntriesForTask**](docs/TimeTrackingEntriesApi.md#getTimeTrackingEntriesForTask) | **GET** /tasks/{task_gid}/time_tracking_entries | Get time tracking entries for a task
*Asana.TimeTrackingEntriesApi* | [**getTimeTrackingEntry**](docs/TimeTrackingEntriesApi.md#getTimeTrackingEntry) | **GET** /time_tracking_entries/{time_tracking_entry_gid} | Get a time tracking entry
*Asana.TimeTrackingEntriesApi* | [**updateTimeTrackingEntry**](docs/TimeTrackingEntriesApi.md#updateTimeTrackingEntry) | **PUT** /time_tracking_entries/{time_tracking_entry_gid} | Update a time tracking entry
*Asana.TypeaheadApi* | [**typeaheadForWorkspace**](docs/TypeaheadApi.md#typeaheadForWorkspace) | **GET** /workspaces/{workspace_gid}/typeahead | Get objects via typeahead
*Asana.UserTaskListsApi* | [**getUserTaskList**](docs/UserTaskListsApi.md#getUserTaskList) | **GET** /user_task_lists/{user_task_list_gid} | Get a user task list
*Asana.UserTaskListsApi* | [**getUserTaskListForUser**](docs/UserTaskListsApi.md#getUserTaskListForUser) | **GET** /users/{user_gid}/user_task_list | Get a user&#x27;s task list
*Asana.UsersApi* | [**getFavoritesForUser**](docs/UsersApi.md#getFavoritesForUser) | **GET** /users/{user_gid}/favorites | Get a user&#x27;s favorites
*Asana.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /users/{user_gid} | Get a user
*Asana.UsersApi* | [**getUsers**](docs/UsersApi.md#getUsers) | **GET** /users | Get multiple users
*Asana.UsersApi* | [**getUsersForTeam**](docs/UsersApi.md#getUsersForTeam) | **GET** /teams/{team_gid}/users | Get users in a team
*Asana.UsersApi* | [**getUsersForWorkspace**](docs/UsersApi.md#getUsersForWorkspace) | **GET** /workspaces/{workspace_gid}/users | Get users in a workspace or organization
*Asana.WebhooksApi* | [**createWebhook**](docs/WebhooksApi.md#createWebhook) | **POST** /webhooks | Establish a webhook
*Asana.WebhooksApi* | [**deleteWebhook**](docs/WebhooksApi.md#deleteWebhook) | **DELETE** /webhooks/{webhook_gid} | Delete a webhook
*Asana.WebhooksApi* | [**getWebhook**](docs/WebhooksApi.md#getWebhook) | **GET** /webhooks/{webhook_gid} | Get a webhook
*Asana.WebhooksApi* | [**getWebhooks**](docs/WebhooksApi.md#getWebhooks) | **GET** /webhooks | Get multiple webhooks
*Asana.WebhooksApi* | [**updateWebhook**](docs/WebhooksApi.md#updateWebhook) | **PUT** /webhooks/{webhook_gid} | Update a webhook
*Asana.WorkspaceMembershipsApi* | [**getWorkspaceMembership**](docs/WorkspaceMembershipsApi.md#getWorkspaceMembership) | **GET** /workspace_memberships/{workspace_membership_gid} | Get a workspace membership
*Asana.WorkspaceMembershipsApi* | [**getWorkspaceMembershipsForUser**](docs/WorkspaceMembershipsApi.md#getWorkspaceMembershipsForUser) | **GET** /users/{user_gid}/workspace_memberships | Get workspace memberships for a user
*Asana.WorkspaceMembershipsApi* | [**getWorkspaceMembershipsForWorkspace**](docs/WorkspaceMembershipsApi.md#getWorkspaceMembershipsForWorkspace) | **GET** /workspaces/{workspace_gid}/workspace_memberships | Get the workspace memberships for a workspace
*Asana.WorkspacesApi* | [**addUserForWorkspace**](docs/WorkspacesApi.md#addUserForWorkspace) | **POST** /workspaces/{workspace_gid}/addUser | Add a user to a workspace or organization
*Asana.WorkspacesApi* | [**getWorkspace**](docs/WorkspacesApi.md#getWorkspace) | **GET** /workspaces/{workspace_gid} | Get a workspace
*Asana.WorkspacesApi* | [**getWorkspaces**](docs/WorkspacesApi.md#getWorkspaces) | **GET** /workspaces | Get multiple workspaces
*Asana.WorkspacesApi* | [**removeUserForWorkspace**](docs/WorkspacesApi.md#removeUserForWorkspace) | **POST** /workspaces/{workspace_gid}/removeUser | Remove a user from a workspace or organization
*Asana.WorkspacesApi* | [**updateWorkspace**](docs/WorkspacesApi.md#updateWorkspace) | **PUT** /workspaces/{workspace_gid} | Update a workspace

## Documentation for Models

 - [Asana.AddCustomFieldSettingRequest](docs/AddCustomFieldSettingRequest.md)
 - [Asana.AddFollowersRequest](docs/AddFollowersRequest.md)
 - [Asana.AddMembersRequest](docs/AddMembersRequest.md)
 - [Asana.AllOfProjectResponseOwner](docs/AllOfProjectResponseOwner.md)
 - [Asana.AllOfProjectTemplateBaseOwner](docs/AllOfProjectTemplateBaseOwner.md)
 - [Asana.AllOfProjectTemplateResponseOwner](docs/AllOfProjectTemplateResponseOwner.md)
 - [Asana.AllOfStoryResponseNewDateValue](docs/AllOfStoryResponseNewDateValue.md)
 - [Asana.AllOfStoryResponseOldDateValue](docs/AllOfStoryResponseOldDateValue.md)
 - [Asana.AllOfUserTaskListBaseOwner](docs/AllOfUserTaskListBaseOwner.md)
 - [Asana.AllOfUserTaskListBaseWorkspace](docs/AllOfUserTaskListBaseWorkspace.md)
 - [Asana.AllOfUserTaskListCompactOwner](docs/AllOfUserTaskListCompactOwner.md)
 - [Asana.AllOfUserTaskListCompactWorkspace](docs/AllOfUserTaskListCompactWorkspace.md)
 - [Asana.AllOfUserTaskListRequestOwner](docs/AllOfUserTaskListRequestOwner.md)
 - [Asana.AllOfUserTaskListRequestWorkspace](docs/AllOfUserTaskListRequestWorkspace.md)
 - [Asana.AllOfUserTaskListResponseOwner](docs/AllOfUserTaskListResponseOwner.md)
 - [Asana.AllOfUserTaskListResponseWorkspace](docs/AllOfUserTaskListResponseWorkspace.md)
 - [Asana.AllOfWorkspaceMembershipResponseUserTaskListOwner](docs/AllOfWorkspaceMembershipResponseUserTaskListOwner.md)
 - [Asana.AllOfWorkspaceMembershipResponseUserTaskListWorkspace](docs/AllOfWorkspaceMembershipResponseUserTaskListWorkspace.md)
 - [Asana.AsanaNamedResource](docs/AsanaNamedResource.md)
 - [Asana.AsanaNamedResourceArray](docs/AsanaNamedResourceArray.md)
 - [Asana.AsanaResource](docs/AsanaResource.md)
 - [Asana.AttachmentBase](docs/AttachmentBase.md)
 - [Asana.AttachmentCompact](docs/AttachmentCompact.md)
 - [Asana.AttachmentRequest](docs/AttachmentRequest.md)
 - [Asana.AttachmentResponse](docs/AttachmentResponse.md)
 - [Asana.AttachmentResponseArray](docs/AttachmentResponseArray.md)
 - [Asana.AttachmentResponseData](docs/AttachmentResponseData.md)
 - [Asana.AttachmentResponseParent](docs/AttachmentResponseParent.md)
 - [Asana.AttachmentResponseParentCreatedBy](docs/AttachmentResponseParentCreatedBy.md)
 - [Asana.AuditLogEvent](docs/AuditLogEvent.md)
 - [Asana.AuditLogEventActor](docs/AuditLogEventActor.md)
 - [Asana.AuditLogEventArray](docs/AuditLogEventArray.md)
 - [Asana.AuditLogEventContext](docs/AuditLogEventContext.md)
 - [Asana.AuditLogEventDetails](docs/AuditLogEventDetails.md)
 - [Asana.AuditLogEventResource](docs/AuditLogEventResource.md)
 - [Asana.BatchBody](docs/BatchBody.md)
 - [Asana.BatchRequest](docs/BatchRequest.md)
 - [Asana.BatchRequestAction](docs/BatchRequestAction.md)
 - [Asana.BatchRequestActions](docs/BatchRequestActions.md)
 - [Asana.BatchRequestOptions](docs/BatchRequestOptions.md)
 - [Asana.BatchResponse](docs/BatchResponse.md)
 - [Asana.BatchResponseArray](docs/BatchResponseArray.md)
 - [Asana.CreateMembershipRequest](docs/CreateMembershipRequest.md)
 - [Asana.CreateTimeTrackingEntryRequest](docs/CreateTimeTrackingEntryRequest.md)
 - [Asana.CustomFieldBase](docs/CustomFieldBase.md)
 - [Asana.CustomFieldBaseDateValue](docs/CustomFieldBaseDateValue.md)
 - [Asana.CustomFieldBaseEnumOptions](docs/CustomFieldBaseEnumOptions.md)
 - [Asana.CustomFieldBaseEnumValue](docs/CustomFieldBaseEnumValue.md)
 - [Asana.CustomFieldCompact](docs/CustomFieldCompact.md)
 - [Asana.CustomFieldGidEnumOptionsBody](docs/CustomFieldGidEnumOptionsBody.md)
 - [Asana.CustomFieldRequest](docs/CustomFieldRequest.md)
 - [Asana.CustomFieldResponse](docs/CustomFieldResponse.md)
 - [Asana.CustomFieldResponseArray](docs/CustomFieldResponseArray.md)
 - [Asana.CustomFieldResponseCreatedBy](docs/CustomFieldResponseCreatedBy.md)
 - [Asana.CustomFieldResponseData](docs/CustomFieldResponseData.md)
 - [Asana.CustomFieldResponsePeopleValue](docs/CustomFieldResponsePeopleValue.md)
 - [Asana.CustomFieldSettingBase](docs/CustomFieldSettingBase.md)
 - [Asana.CustomFieldSettingCompact](docs/CustomFieldSettingCompact.md)
 - [Asana.CustomFieldSettingResponse](docs/CustomFieldSettingResponse.md)
 - [Asana.CustomFieldSettingResponseArray](docs/CustomFieldSettingResponseArray.md)
 - [Asana.CustomFieldSettingResponseCustomField](docs/CustomFieldSettingResponseCustomField.md)
 - [Asana.CustomFieldSettingResponseData](docs/CustomFieldSettingResponseData.md)
 - [Asana.CustomFieldSettingResponseParent](docs/CustomFieldSettingResponseParent.md)
 - [Asana.CustomFieldSettingResponseProject](docs/CustomFieldSettingResponseProject.md)
 - [Asana.CustomFieldsBody](docs/CustomFieldsBody.md)
 - [Asana.CustomFieldsCustomFieldGidBody](docs/CustomFieldsCustomFieldGidBody.md)
 - [Asana.DateVariableCompact](docs/DateVariableCompact.md)
 - [Asana.DateVariableRequest](docs/DateVariableRequest.md)
 - [Asana.EmptyResponse](docs/EmptyResponse.md)
 - [Asana.EmptyResponseData](docs/EmptyResponseData.md)
 - [Asana.EnumOption](docs/EnumOption.md)
 - [Asana.EnumOptionBase](docs/EnumOptionBase.md)
 - [Asana.EnumOptionData](docs/EnumOptionData.md)
 - [Asana.EnumOptionInsertRequest](docs/EnumOptionInsertRequest.md)
 - [Asana.EnumOptionRequest](docs/EnumOptionRequest.md)
 - [Asana.EnumOptionsEnumOptionGidBody](docs/EnumOptionsEnumOptionGidBody.md)
 - [Asana.EnumOptionsInsertBody](docs/EnumOptionsInsertBody.md)
 - [Asana.Error](docs/Error.md)
 - [Asana.ErrorResponse](docs/ErrorResponse.md)
 - [Asana.ErrorResponseErrors](docs/ErrorResponseErrors.md)
 - [Asana.EventResponse](docs/EventResponse.md)
 - [Asana.EventResponseArray](docs/EventResponseArray.md)
 - [Asana.EventResponseChange](docs/EventResponseChange.md)
 - [Asana.EventResponseParent](docs/EventResponseParent.md)
 - [Asana.EventResponseResource](docs/EventResponseResource.md)
 - [Asana.EventResponseUser](docs/EventResponseUser.md)
 - [Asana.GoalAddSubgoalRequest](docs/GoalAddSubgoalRequest.md)
 - [Asana.GoalAddSupportingRelationshipRequest](docs/GoalAddSupportingRelationshipRequest.md)
 - [Asana.GoalAddSupportingWorkRequest](docs/GoalAddSupportingWorkRequest.md)
 - [Asana.GoalBase](docs/GoalBase.md)
 - [Asana.GoalCompact](docs/GoalCompact.md)
 - [Asana.GoalGidAddFollowersBody](docs/GoalGidAddFollowersBody.md)
 - [Asana.GoalGidAddSupportingRelationshipBody](docs/GoalGidAddSupportingRelationshipBody.md)
 - [Asana.GoalGidRemoveFollowersBody](docs/GoalGidRemoveFollowersBody.md)
 - [Asana.GoalGidRemoveSupportingRelationshipBody](docs/GoalGidRemoveSupportingRelationshipBody.md)
 - [Asana.GoalGidSetMetricBody](docs/GoalGidSetMetricBody.md)
 - [Asana.GoalGidSetMetricCurrentValueBody](docs/GoalGidSetMetricCurrentValueBody.md)
 - [Asana.GoalMembershipBase](docs/GoalMembershipBase.md)
 - [Asana.GoalMembershipCompact](docs/GoalMembershipCompact.md)
 - [Asana.GoalMembershipResponse](docs/GoalMembershipResponse.md)
 - [Asana.GoalMembershipResponseUser](docs/GoalMembershipResponseUser.md)
 - [Asana.GoalMembershipResponseWorkspace](docs/GoalMembershipResponseWorkspace.md)
 - [Asana.GoalMetricBase](docs/GoalMetricBase.md)
 - [Asana.GoalMetricCurrentValueRequest](docs/GoalMetricCurrentValueRequest.md)
 - [Asana.GoalMetricRequest](docs/GoalMetricRequest.md)
 - [Asana.GoalRelationshipBase](docs/GoalRelationshipBase.md)
 - [Asana.GoalRelationshipBaseSupportedGoal](docs/GoalRelationshipBaseSupportedGoal.md)
 - [Asana.GoalRelationshipBaseSupportingResource](docs/GoalRelationshipBaseSupportingResource.md)
 - [Asana.GoalRelationshipCompact](docs/GoalRelationshipCompact.md)
 - [Asana.GoalRelationshipRequest](docs/GoalRelationshipRequest.md)
 - [Asana.GoalRelationshipResponse](docs/GoalRelationshipResponse.md)
 - [Asana.GoalRelationshipResponseArray](docs/GoalRelationshipResponseArray.md)
 - [Asana.GoalRelationshipResponseData](docs/GoalRelationshipResponseData.md)
 - [Asana.GoalRelationshipsGoalRelationshipGidBody](docs/GoalRelationshipsGoalRelationshipGidBody.md)
 - [Asana.GoalRemoveSubgoalRequest](docs/GoalRemoveSubgoalRequest.md)
 - [Asana.GoalRemoveSupportingRelationshipRequest](docs/GoalRemoveSupportingRelationshipRequest.md)
 - [Asana.GoalRequest](docs/GoalRequest.md)
 - [Asana.GoalRequestBase](docs/GoalRequestBase.md)
 - [Asana.GoalResponse](docs/GoalResponse.md)
 - [Asana.GoalResponseArray](docs/GoalResponseArray.md)
 - [Asana.GoalResponseCurrentStatusUpdate](docs/GoalResponseCurrentStatusUpdate.md)
 - [Asana.GoalResponseData](docs/GoalResponseData.md)
 - [Asana.GoalResponseLikes](docs/GoalResponseLikes.md)
 - [Asana.GoalResponseMetric](docs/GoalResponseMetric.md)
 - [Asana.GoalResponseTeam](docs/GoalResponseTeam.md)
 - [Asana.GoalResponseTimePeriod](docs/GoalResponseTimePeriod.md)
 - [Asana.GoalResponseWorkspace](docs/GoalResponseWorkspace.md)
 - [Asana.GoalUpdateRequest](docs/GoalUpdateRequest.md)
 - [Asana.GoalsBody](docs/GoalsBody.md)
 - [Asana.GoalsGoalGidBody](docs/GoalsGoalGidBody.md)
 - [Asana.InlineResponse412](docs/InlineResponse412.md)
 - [Asana.InlineResponse412Errors](docs/InlineResponse412Errors.md)
 - [Asana.JobBase](docs/JobBase.md)
 - [Asana.JobBaseNewProject](docs/JobBaseNewProject.md)
 - [Asana.JobBaseNewProjectTemplate](docs/JobBaseNewProjectTemplate.md)
 - [Asana.JobBaseNewTask](docs/JobBaseNewTask.md)
 - [Asana.JobCompact](docs/JobCompact.md)
 - [Asana.JobResponse](docs/JobResponse.md)
 - [Asana.JobResponseData](docs/JobResponseData.md)
 - [Asana.Like](docs/Like.md)
 - [Asana.MemberCompact](docs/MemberCompact.md)
 - [Asana.MembershipCompact](docs/MembershipCompact.md)
 - [Asana.MembershipCompactGoal](docs/MembershipCompactGoal.md)
 - [Asana.MembershipCompactMember](docs/MembershipCompactMember.md)
 - [Asana.MembershipCompactParent](docs/MembershipCompactParent.md)
 - [Asana.MembershipRequest](docs/MembershipRequest.md)
 - [Asana.MembershipResponse](docs/MembershipResponse.md)
 - [Asana.MembershipResponseArray](docs/MembershipResponseArray.md)
 - [Asana.MembershipResponseData](docs/MembershipResponseData.md)
 - [Asana.MembershipsBody](docs/MembershipsBody.md)
 - [Asana.ModifyDependenciesRequest](docs/ModifyDependenciesRequest.md)
 - [Asana.ModifyDependentsRequest](docs/ModifyDependentsRequest.md)
 - [Asana.NextPage](docs/NextPage.md)
 - [Asana.OrganizationExportBase](docs/OrganizationExportBase.md)
 - [Asana.OrganizationExportCompact](docs/OrganizationExportCompact.md)
 - [Asana.OrganizationExportRequest](docs/OrganizationExportRequest.md)
 - [Asana.OrganizationExportResponse](docs/OrganizationExportResponse.md)
 - [Asana.OrganizationExportResponseData](docs/OrganizationExportResponseData.md)
 - [Asana.OrganizationExportsBody](docs/OrganizationExportsBody.md)
 - [Asana.PortfolioAddItemRequest](docs/PortfolioAddItemRequest.md)
 - [Asana.PortfolioBase](docs/PortfolioBase.md)
 - [Asana.PortfolioCompact](docs/PortfolioCompact.md)
 - [Asana.PortfolioGidAddCustomFieldSettingBody](docs/PortfolioGidAddCustomFieldSettingBody.md)
 - [Asana.PortfolioGidAddItemBody](docs/PortfolioGidAddItemBody.md)
 - [Asana.PortfolioGidAddMembersBody](docs/PortfolioGidAddMembersBody.md)
 - [Asana.PortfolioGidRemoveCustomFieldSettingBody](docs/PortfolioGidRemoveCustomFieldSettingBody.md)
 - [Asana.PortfolioGidRemoveItemBody](docs/PortfolioGidRemoveItemBody.md)
 - [Asana.PortfolioGidRemoveMembersBody](docs/PortfolioGidRemoveMembersBody.md)
 - [Asana.PortfolioMembershipBase](docs/PortfolioMembershipBase.md)
 - [Asana.PortfolioMembershipBasePortfolio](docs/PortfolioMembershipBasePortfolio.md)
 - [Asana.PortfolioMembershipCompact](docs/PortfolioMembershipCompact.md)
 - [Asana.PortfolioMembershipResponse](docs/PortfolioMembershipResponse.md)
 - [Asana.PortfolioMembershipResponseArray](docs/PortfolioMembershipResponseArray.md)
 - [Asana.PortfolioMembershipResponseData](docs/PortfolioMembershipResponseData.md)
 - [Asana.PortfolioRemoveItemRequest](docs/PortfolioRemoveItemRequest.md)
 - [Asana.PortfolioRequest](docs/PortfolioRequest.md)
 - [Asana.PortfolioResponse](docs/PortfolioResponse.md)
 - [Asana.PortfolioResponseArray](docs/PortfolioResponseArray.md)
 - [Asana.PortfolioResponseCurrentStatusUpdate](docs/PortfolioResponseCurrentStatusUpdate.md)
 - [Asana.PortfolioResponseCustomFieldSettings](docs/PortfolioResponseCustomFieldSettings.md)
 - [Asana.PortfolioResponseCustomFields](docs/PortfolioResponseCustomFields.md)
 - [Asana.PortfolioResponseData](docs/PortfolioResponseData.md)
 - [Asana.PortfolioResponseWorkspace](docs/PortfolioResponseWorkspace.md)
 - [Asana.PortfoliosBody](docs/PortfoliosBody.md)
 - [Asana.PortfoliosPortfolioGidBody](docs/PortfoliosPortfolioGidBody.md)
 - [Asana.Preview](docs/Preview.md)
 - [Asana.ProjectBase](docs/ProjectBase.md)
 - [Asana.ProjectBaseCurrentStatus](docs/ProjectBaseCurrentStatus.md)
 - [Asana.ProjectBaseCurrentStatusUpdate](docs/ProjectBaseCurrentStatusUpdate.md)
 - [Asana.ProjectBriefBase](docs/ProjectBriefBase.md)
 - [Asana.ProjectBriefCompact](docs/ProjectBriefCompact.md)
 - [Asana.ProjectBriefRequest](docs/ProjectBriefRequest.md)
 - [Asana.ProjectBriefResponse](docs/ProjectBriefResponse.md)
 - [Asana.ProjectBriefResponseData](docs/ProjectBriefResponseData.md)
 - [Asana.ProjectBriefResponseProject](docs/ProjectBriefResponseProject.md)
 - [Asana.ProjectBriefsProjectBriefGidBody](docs/ProjectBriefsProjectBriefGidBody.md)
 - [Asana.ProjectCompact](docs/ProjectCompact.md)
 - [Asana.ProjectDuplicateRequest](docs/ProjectDuplicateRequest.md)
 - [Asana.ProjectDuplicateRequestScheduleDates](docs/ProjectDuplicateRequestScheduleDates.md)
 - [Asana.ProjectGidAddCustomFieldSettingBody](docs/ProjectGidAddCustomFieldSettingBody.md)
 - [Asana.ProjectGidAddFollowersBody](docs/ProjectGidAddFollowersBody.md)
 - [Asana.ProjectGidAddMembersBody](docs/ProjectGidAddMembersBody.md)
 - [Asana.ProjectGidDuplicateBody](docs/ProjectGidDuplicateBody.md)
 - [Asana.ProjectGidProjectBriefsBody](docs/ProjectGidProjectBriefsBody.md)
 - [Asana.ProjectGidProjectStatusesBody](docs/ProjectGidProjectStatusesBody.md)
 - [Asana.ProjectGidRemoveCustomFieldSettingBody](docs/ProjectGidRemoveCustomFieldSettingBody.md)
 - [Asana.ProjectGidRemoveFollowersBody](docs/ProjectGidRemoveFollowersBody.md)
 - [Asana.ProjectGidRemoveMembersBody](docs/ProjectGidRemoveMembersBody.md)
 - [Asana.ProjectGidSaveAsTemplateBody](docs/ProjectGidSaveAsTemplateBody.md)
 - [Asana.ProjectGidSectionsBody](docs/ProjectGidSectionsBody.md)
 - [Asana.ProjectMembershipBase](docs/ProjectMembershipBase.md)
 - [Asana.ProjectMembershipCompact](docs/ProjectMembershipCompact.md)
 - [Asana.ProjectMembershipCompactArray](docs/ProjectMembershipCompactArray.md)
 - [Asana.ProjectMembershipCompactResponse](docs/ProjectMembershipCompactResponse.md)
 - [Asana.ProjectMembershipCompactResponseData](docs/ProjectMembershipCompactResponseData.md)
 - [Asana.ProjectMembershipNormalResponse](docs/ProjectMembershipNormalResponse.md)
 - [Asana.ProjectMembershipNormalResponseData](docs/ProjectMembershipNormalResponseData.md)
 - [Asana.ProjectRequest](docs/ProjectRequest.md)
 - [Asana.ProjectResponse](docs/ProjectResponse.md)
 - [Asana.ProjectResponseArray](docs/ProjectResponseArray.md)
 - [Asana.ProjectResponseCompletedBy](docs/ProjectResponseCompletedBy.md)
 - [Asana.ProjectResponseCreatedFromTemplate](docs/ProjectResponseCreatedFromTemplate.md)
 - [Asana.ProjectResponseData](docs/ProjectResponseData.md)
 - [Asana.ProjectResponseProjectBrief](docs/ProjectResponseProjectBrief.md)
 - [Asana.ProjectResponseTeam](docs/ProjectResponseTeam.md)
 - [Asana.ProjectResponseWorkspace](docs/ProjectResponseWorkspace.md)
 - [Asana.ProjectSaveAsTemplateRequest](docs/ProjectSaveAsTemplateRequest.md)
 - [Asana.ProjectSectionInsertRequest](docs/ProjectSectionInsertRequest.md)
 - [Asana.ProjectStatusBase](docs/ProjectStatusBase.md)
 - [Asana.ProjectStatusCompact](docs/ProjectStatusCompact.md)
 - [Asana.ProjectStatusRequest](docs/ProjectStatusRequest.md)
 - [Asana.ProjectStatusResponse](docs/ProjectStatusResponse.md)
 - [Asana.ProjectStatusResponseArray](docs/ProjectStatusResponseArray.md)
 - [Asana.ProjectStatusResponseData](docs/ProjectStatusResponseData.md)
 - [Asana.ProjectTemplateBase](docs/ProjectTemplateBase.md)
 - [Asana.ProjectTemplateBaseRequestedDates](docs/ProjectTemplateBaseRequestedDates.md)
 - [Asana.ProjectTemplateBaseRequestedRoles](docs/ProjectTemplateBaseRequestedRoles.md)
 - [Asana.ProjectTemplateBaseTeam](docs/ProjectTemplateBaseTeam.md)
 - [Asana.ProjectTemplateCompact](docs/ProjectTemplateCompact.md)
 - [Asana.ProjectTemplateGidInstantiateProjectBody](docs/ProjectTemplateGidInstantiateProjectBody.md)
 - [Asana.ProjectTemplateInstantiateProjectRequest](docs/ProjectTemplateInstantiateProjectRequest.md)
 - [Asana.ProjectTemplateInstantiateProjectRequestRequestedDates](docs/ProjectTemplateInstantiateProjectRequestRequestedDates.md)
 - [Asana.ProjectTemplateInstantiateProjectRequestRequestedRoles](docs/ProjectTemplateInstantiateProjectRequestRequestedRoles.md)
 - [Asana.ProjectTemplateResponse](docs/ProjectTemplateResponse.md)
 - [Asana.ProjectTemplateResponseArray](docs/ProjectTemplateResponseArray.md)
 - [Asana.ProjectTemplateResponseData](docs/ProjectTemplateResponseData.md)
 - [Asana.ProjectUpdateRequest](docs/ProjectUpdateRequest.md)
 - [Asana.ProjectsBody](docs/ProjectsBody.md)
 - [Asana.ProjectsProjectGidBody](docs/ProjectsProjectGidBody.md)
 - [Asana.RemoveCustomFieldSettingRequest](docs/RemoveCustomFieldSettingRequest.md)
 - [Asana.RemoveFollowersRequest](docs/RemoveFollowersRequest.md)
 - [Asana.RemoveMembersRequest](docs/RemoveMembersRequest.md)
 - [Asana.RequestedRoleRequest](docs/RequestedRoleRequest.md)
 - [Asana.RuleTriggerGidRunBody](docs/RuleTriggerGidRunBody.md)
 - [Asana.RuleTriggerRequest](docs/RuleTriggerRequest.md)
 - [Asana.RuleTriggerResponse](docs/RuleTriggerResponse.md)
 - [Asana.RuleTriggerResponseData](docs/RuleTriggerResponseData.md)
 - [Asana.SectionBase](docs/SectionBase.md)
 - [Asana.SectionCompact](docs/SectionCompact.md)
 - [Asana.SectionGidAddTaskBody](docs/SectionGidAddTaskBody.md)
 - [Asana.SectionRequest](docs/SectionRequest.md)
 - [Asana.SectionResponse](docs/SectionResponse.md)
 - [Asana.SectionResponseArray](docs/SectionResponseArray.md)
 - [Asana.SectionResponseData](docs/SectionResponseData.md)
 - [Asana.SectionTaskInsertRequest](docs/SectionTaskInsertRequest.md)
 - [Asana.SectionsInsertBody](docs/SectionsInsertBody.md)
 - [Asana.SectionsSectionGidBody](docs/SectionsSectionGidBody.md)
 - [Asana.StatusUpdateBase](docs/StatusUpdateBase.md)
 - [Asana.StatusUpdateCompact](docs/StatusUpdateCompact.md)
 - [Asana.StatusUpdateRequest](docs/StatusUpdateRequest.md)
 - [Asana.StatusUpdateResponse](docs/StatusUpdateResponse.md)
 - [Asana.StatusUpdateResponseArray](docs/StatusUpdateResponseArray.md)
 - [Asana.StatusUpdateResponseData](docs/StatusUpdateResponseData.md)
 - [Asana.StatusUpdateResponseParent](docs/StatusUpdateResponseParent.md)
 - [Asana.StatusUpdatesBody](docs/StatusUpdatesBody.md)
 - [Asana.StoriesStoryGidBody](docs/StoriesStoryGidBody.md)
 - [Asana.StoryBase](docs/StoryBase.md)
 - [Asana.StoryCompact](docs/StoryCompact.md)
 - [Asana.StoryRequest](docs/StoryRequest.md)
 - [Asana.StoryResponse](docs/StoryResponse.md)
 - [Asana.StoryResponseArray](docs/StoryResponseArray.md)
 - [Asana.StoryResponseAssignee](docs/StoryResponseAssignee.md)
 - [Asana.StoryResponseCustomField](docs/StoryResponseCustomField.md)
 - [Asana.StoryResponseData](docs/StoryResponseData.md)
 - [Asana.StoryResponseDates](docs/StoryResponseDates.md)
 - [Asana.StoryResponseOldDates](docs/StoryResponseOldDates.md)
 - [Asana.StoryResponseOldEnumValue](docs/StoryResponseOldEnumValue.md)
 - [Asana.StoryResponseOldSection](docs/StoryResponseOldSection.md)
 - [Asana.StoryResponsePreviews](docs/StoryResponsePreviews.md)
 - [Asana.StoryResponseProject](docs/StoryResponseProject.md)
 - [Asana.StoryResponseStory](docs/StoryResponseStory.md)
 - [Asana.StoryResponseTag](docs/StoryResponseTag.md)
 - [Asana.StoryResponseTarget](docs/StoryResponseTarget.md)
 - [Asana.StoryResponseTask](docs/StoryResponseTask.md)
 - [Asana.TagBase](docs/TagBase.md)
 - [Asana.TagCompact](docs/TagCompact.md)
 - [Asana.TagRequest](docs/TagRequest.md)
 - [Asana.TagResponse](docs/TagResponse.md)
 - [Asana.TagResponseArray](docs/TagResponseArray.md)
 - [Asana.TagResponseData](docs/TagResponseData.md)
 - [Asana.TagsBody](docs/TagsBody.md)
 - [Asana.TaskAddFollowersRequest](docs/TaskAddFollowersRequest.md)
 - [Asana.TaskAddProjectRequest](docs/TaskAddProjectRequest.md)
 - [Asana.TaskAddTagRequest](docs/TaskAddTagRequest.md)
 - [Asana.TaskBase](docs/TaskBase.md)
 - [Asana.TaskBaseCompletedBy](docs/TaskBaseCompletedBy.md)
 - [Asana.TaskBaseDependencies](docs/TaskBaseDependencies.md)
 - [Asana.TaskBaseExternal](docs/TaskBaseExternal.md)
 - [Asana.TaskBaseMemberships](docs/TaskBaseMemberships.md)
 - [Asana.TaskBaseSection](docs/TaskBaseSection.md)
 - [Asana.TaskCompact](docs/TaskCompact.md)
 - [Asana.TaskCountResponse](docs/TaskCountResponse.md)
 - [Asana.TaskCountResponseData](docs/TaskCountResponseData.md)
 - [Asana.TaskDuplicateRequest](docs/TaskDuplicateRequest.md)
 - [Asana.TaskGidAddDependenciesBody](docs/TaskGidAddDependenciesBody.md)
 - [Asana.TaskGidAddDependentsBody](docs/TaskGidAddDependentsBody.md)
 - [Asana.TaskGidAddFollowersBody](docs/TaskGidAddFollowersBody.md)
 - [Asana.TaskGidAddProjectBody](docs/TaskGidAddProjectBody.md)
 - [Asana.TaskGidAddTagBody](docs/TaskGidAddTagBody.md)
 - [Asana.TaskGidDuplicateBody](docs/TaskGidDuplicateBody.md)
 - [Asana.TaskGidRemoveDependenciesBody](docs/TaskGidRemoveDependenciesBody.md)
 - [Asana.TaskGidRemoveDependentsBody](docs/TaskGidRemoveDependentsBody.md)
 - [Asana.TaskGidRemoveFollowersBody](docs/TaskGidRemoveFollowersBody.md)
 - [Asana.TaskGidRemoveProjectBody](docs/TaskGidRemoveProjectBody.md)
 - [Asana.TaskGidRemoveTagBody](docs/TaskGidRemoveTagBody.md)
 - [Asana.TaskGidSetParentBody](docs/TaskGidSetParentBody.md)
 - [Asana.TaskGidStoriesBody](docs/TaskGidStoriesBody.md)
 - [Asana.TaskGidSubtasksBody](docs/TaskGidSubtasksBody.md)
 - [Asana.TaskGidTimeTrackingEntriesBody](docs/TaskGidTimeTrackingEntriesBody.md)
 - [Asana.TaskRemoveFollowersRequest](docs/TaskRemoveFollowersRequest.md)
 - [Asana.TaskRemoveProjectRequest](docs/TaskRemoveProjectRequest.md)
 - [Asana.TaskRemoveTagRequest](docs/TaskRemoveTagRequest.md)
 - [Asana.TaskRequest](docs/TaskRequest.md)
 - [Asana.TaskResponse](docs/TaskResponse.md)
 - [Asana.TaskResponseArray](docs/TaskResponseArray.md)
 - [Asana.TaskResponseAssigneeSection](docs/TaskResponseAssigneeSection.md)
 - [Asana.TaskResponseCustomFields](docs/TaskResponseCustomFields.md)
 - [Asana.TaskResponseData](docs/TaskResponseData.md)
 - [Asana.TaskResponseParent](docs/TaskResponseParent.md)
 - [Asana.TaskResponseTags](docs/TaskResponseTags.md)
 - [Asana.TaskResponseWorkspace](docs/TaskResponseWorkspace.md)
 - [Asana.TaskSetParentRequest](docs/TaskSetParentRequest.md)
 - [Asana.TasksBody](docs/TasksBody.md)
 - [Asana.TasksTaskGidBody](docs/TasksTaskGidBody.md)
 - [Asana.TeamAddUserRequest](docs/TeamAddUserRequest.md)
 - [Asana.TeamBase](docs/TeamBase.md)
 - [Asana.TeamCompact](docs/TeamCompact.md)
 - [Asana.TeamGidAddUserBody](docs/TeamGidAddUserBody.md)
 - [Asana.TeamGidProjectsBody](docs/TeamGidProjectsBody.md)
 - [Asana.TeamGidRemoveUserBody](docs/TeamGidRemoveUserBody.md)
 - [Asana.TeamMembershipBase](docs/TeamMembershipBase.md)
 - [Asana.TeamMembershipCompact](docs/TeamMembershipCompact.md)
 - [Asana.TeamMembershipResponse](docs/TeamMembershipResponse.md)
 - [Asana.TeamMembershipResponseArray](docs/TeamMembershipResponseArray.md)
 - [Asana.TeamMembershipResponseData](docs/TeamMembershipResponseData.md)
 - [Asana.TeamRemoveUserRequest](docs/TeamRemoveUserRequest.md)
 - [Asana.TeamRequest](docs/TeamRequest.md)
 - [Asana.TeamResponse](docs/TeamResponse.md)
 - [Asana.TeamResponseArray](docs/TeamResponseArray.md)
 - [Asana.TeamResponseData](docs/TeamResponseData.md)
 - [Asana.TeamResponseOrganization](docs/TeamResponseOrganization.md)
 - [Asana.TeamsBody](docs/TeamsBody.md)
 - [Asana.TeamsTeamGidBody](docs/TeamsTeamGidBody.md)
 - [Asana.TemplateRole](docs/TemplateRole.md)
 - [Asana.TimePeriodBase](docs/TimePeriodBase.md)
 - [Asana.TimePeriodCompact](docs/TimePeriodCompact.md)
 - [Asana.TimePeriodResponse](docs/TimePeriodResponse.md)
 - [Asana.TimePeriodResponseArray](docs/TimePeriodResponseArray.md)
 - [Asana.TimePeriodResponseData](docs/TimePeriodResponseData.md)
 - [Asana.TimeTrackingEntriesTimeTrackingEntryGidBody](docs/TimeTrackingEntriesTimeTrackingEntryGidBody.md)
 - [Asana.TimeTrackingEntryBase](docs/TimeTrackingEntryBase.md)
 - [Asana.TimeTrackingEntryBaseData](docs/TimeTrackingEntryBaseData.md)
 - [Asana.TimeTrackingEntryCompact](docs/TimeTrackingEntryCompact.md)
 - [Asana.TimeTrackingEntryCompactArray](docs/TimeTrackingEntryCompactArray.md)
 - [Asana.UpdateTimeTrackingEntryRequest](docs/UpdateTimeTrackingEntryRequest.md)
 - [Asana.UserBase](docs/UserBase.md)
 - [Asana.UserBaseResponse](docs/UserBaseResponse.md)
 - [Asana.UserBaseResponseData](docs/UserBaseResponseData.md)
 - [Asana.UserBaseResponsePhoto](docs/UserBaseResponsePhoto.md)
 - [Asana.UserCompact](docs/UserCompact.md)
 - [Asana.UserRequest](docs/UserRequest.md)
 - [Asana.UserResponse](docs/UserResponse.md)
 - [Asana.UserResponseArray](docs/UserResponseArray.md)
 - [Asana.UserResponseData](docs/UserResponseData.md)
 - [Asana.UserTaskListBase](docs/UserTaskListBase.md)
 - [Asana.UserTaskListCompact](docs/UserTaskListCompact.md)
 - [Asana.UserTaskListRequest](docs/UserTaskListRequest.md)
 - [Asana.UserTaskListResponse](docs/UserTaskListResponse.md)
 - [Asana.UserTaskListResponseData](docs/UserTaskListResponseData.md)
 - [Asana.WebhookCompact](docs/WebhookCompact.md)
 - [Asana.WebhookCompactResource](docs/WebhookCompactResource.md)
 - [Asana.WebhookFilter](docs/WebhookFilter.md)
 - [Asana.WebhookRequest](docs/WebhookRequest.md)
 - [Asana.WebhookRequestFilters](docs/WebhookRequestFilters.md)
 - [Asana.WebhookResponse](docs/WebhookResponse.md)
 - [Asana.WebhookResponseArray](docs/WebhookResponseArray.md)
 - [Asana.WebhookResponseData](docs/WebhookResponseData.md)
 - [Asana.WebhookUpdateRequest](docs/WebhookUpdateRequest.md)
 - [Asana.WebhooksBody](docs/WebhooksBody.md)
 - [Asana.WebhooksWebhookGidBody](docs/WebhooksWebhookGidBody.md)
 - [Asana.WorkspaceAddUserRequest](docs/WorkspaceAddUserRequest.md)
 - [Asana.WorkspaceBase](docs/WorkspaceBase.md)
 - [Asana.WorkspaceCompact](docs/WorkspaceCompact.md)
 - [Asana.WorkspaceGidAddUserBody](docs/WorkspaceGidAddUserBody.md)
 - [Asana.WorkspaceGidProjectsBody](docs/WorkspaceGidProjectsBody.md)
 - [Asana.WorkspaceGidRemoveUserBody](docs/WorkspaceGidRemoveUserBody.md)
 - [Asana.WorkspaceGidTagsBody](docs/WorkspaceGidTagsBody.md)
 - [Asana.WorkspaceMembershipBase](docs/WorkspaceMembershipBase.md)
 - [Asana.WorkspaceMembershipCompact](docs/WorkspaceMembershipCompact.md)
 - [Asana.WorkspaceMembershipRequest](docs/WorkspaceMembershipRequest.md)
 - [Asana.WorkspaceMembershipResponse](docs/WorkspaceMembershipResponse.md)
 - [Asana.WorkspaceMembershipResponseArray](docs/WorkspaceMembershipResponseArray.md)
 - [Asana.WorkspaceMembershipResponseData](docs/WorkspaceMembershipResponseData.md)
 - [Asana.WorkspaceMembershipResponseUserTaskList](docs/WorkspaceMembershipResponseUserTaskList.md)
 - [Asana.WorkspaceMembershipResponseVacationDates](docs/WorkspaceMembershipResponseVacationDates.md)
 - [Asana.WorkspaceRemoveUserRequest](docs/WorkspaceRemoveUserRequest.md)
 - [Asana.WorkspaceRequest](docs/WorkspaceRequest.md)
 - [Asana.WorkspaceResponse](docs/WorkspaceResponse.md)
 - [Asana.WorkspaceResponseArray](docs/WorkspaceResponseArray.md)
 - [Asana.WorkspaceResponseData](docs/WorkspaceResponseData.md)
 - [Asana.WorkspacesWorkspaceGidBody](docs/WorkspacesWorkspaceGidBody.md)

## Documentation for Authorization


### oauth2

- **Type**: OAuth
- **Flow**: accessCode
- **Authorization URL**: https://app.asana.com/-/oauth_authorize
- **Scopes**: 
  - default: Provides access to all endpoints documented in our API reference. If no scopes are requested, this scope is assumed by default.
  - openid: Provides access to OpenID Connect ID tokens and the OpenID Connect user info endpoint.
  - email: Provides access to the user’s email through the OpenID Connect user info endpoint.
  - profile: Provides access to the user’s name and profile photo through the OpenID Connect user info endpoint.

## Getting events

In order to get events you will need a sync token. This sync token can be acquired in the error message from the initial
request to [getEvents](docs/EventsApi.md#getEvents).

```javascript
const Asana = require('asana');
const defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "<YOUR_PERSONAL_ACCESS_TOKEN>";

let eventsApiInstance = new Asana.EventsApi();
let resource = "12345"; // String | A resource ID to subscribe to. The resource can be a task or project.
let opts = {
    sync: ''
};

// Initial request to get the sync token
eventsApiInstance.getEvents(resource, opts, (error, data, response) => {
    // Set the sync token
    opts['sync'] = JSON.parse(response.text)['sync']
    // Follow up request to get events
    eventsApiInstance.getEvents(resource, opts, (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log('API called successfully. Returned data: ' + JSON.stringify(data, null, 2));
        }
    });
});
```

## Accessing repsonse data

By default, the client library returns a class object of the resource. You can use dot notation to access the response data.

TIP: look at the "Return type" section of the documented endpoint to understand which properties are accessible. (EX: [get_task](docs/TasksApi.md#get_task))

```javascript
.
.
.
tasksApiInstance.getTask(task_gid, opts, (error, task, response) => {
    if (error) {
        console.error(error);
    } else {
        let taskName = task.data.name
        let taskNotes = task.data.notes
    }
});
```

## Accessing response status code and headers

```javascript
const Asana = require('asana');
const defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "<YOUR_PERSONAL_ACCESS_TOKEN>";

let usersApiInstance = new Asana.UsersApi()
let user_gid = "me"; // String | A string identifying a user. This can either be the string \"me\", an email, or the gid of a user.
let opts = {};

usersApiInstance.getUser(user_gid, opts, (error, data, response) => {
    if (error) {
        console.error(error);
    } else {
        // Response Status
        console.log("Response Status:" + response.status)
        // Response Headers
        console.log("Response Headers": + JSON.stringify(response.headers))
    }
});
```

## Adding deprecation flag to your "asana-enable" header

```javascript
const Asana = require('asana');
const defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "<YOUR_PERSONAL_ACCESS_TOKEN>";

// Add asana-enable header for the client
defaultClient.defaultHeaders['asana-enable'] = 'string_ids';
```

## Documentation for Using the `callApi` method

Use this to make http calls when the endpoint does not exist in the current library version or has bugs

### Example: GET, POST, PUT, DELETE on tasks

#### GET - get a task
```javascript
const Asana = require('asana');
const defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "<YOUR_PERSONAL_ACCESS_TOKEN>";

// GET - get a task
defaultClient.callApi(
    "/tasks/{task_gid}",
    "GET",
    (pathParams = { task_gid: "<YOUR_TASK_GID>" }),
    (queryParams = {}),
    (headerParams = {}),
    (formParams = {}),
    (bodyParam = null),
    (authNames = ["oauth2"]),
    (contentTypes = []),
    (accepts = ["application/json; charset=UTF-8"]),
    (returnType = "Blob"), // Can be one of: "Blob", "String"
    (callback = (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully. Returned data: " + JSON.stringify(JSON.parse(data), null, 2));
        }
    })
);
```

#### GET - get multiple tasks -> with opt_fields
```javascript
defaultClient.callApi(
    "/tasks",
    "GET",
    (pathParams = {}),
    (queryParams = { opt_fields: "name,notes,projects" }),
    (headerParams = {}),
    (formParams = {}),
    (bodyParam = null),
    (authNames = ["oauth2"]),
    (contentTypes = []),
    (accepts = ["application/json; charset=UTF-8"]),
    (returnType = "Blob"), // Can be one of: "Blob", "String"
    (callback = (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully. Returned data: " + JSON.stringify(JSON.parse(data), null, 2));
        }
    })
);
```

#### POST - create a task
```javascript
const Asana = require('asana');
const defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "<YOUR_PERSONAL_ACCESS_TOKEN>";

// POST - create a task
defaultClient.callApi(
    "/tasks",
    "POST",
    (pathParams = {}),
    (queryParams = {}),
    (headerParams = {}),
    (formParams = {}),
    (bodyParam = {
        data: {
            name: "New Task",
            projects: ["<YOUR_PROJECT_GID>"],
        },
    }),
    (authNames = ["oauth2"]),
    (contentTypes = ["application/json; charset=UTF-8"]),
    (accepts = ["application/json; charset=UTF-8"]),
    (returnType = "Blob"), // Can be one of: "Blob", "String"
    (callback = (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully. Returned data: " + JSON.stringify(JSON.parse(data), null, 2));
        }
    })
);
```

#### PUT - update a task
```javascript
const Asana = require('asana');
const defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "<YOUR_PERSONAL_ACCESS_TOKEN>";

// PUT - update a task
defaultClient.callApi(
    "/tasks/{task_gid}",
    "PUT",
    (pathParams = { task_gid: "<YOUR_TASK_GID>" }),
    (queryParams = {}),
    (headerParams = {}),
    (formParams = {}),
    (bodyParam = {
        data: {
            name: "Updated Task",
        },
    }),
    (authNames = ["oauth2"]),
    (contentTypes = ["application/json; charset=UTF-8"]),
    (accepts = ["application/json; charset=UTF-8"]),
    (returnType = "Blob"), // Can be one of: "Blob", "String"
    (callback = (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully. Returned data: " + JSON.stringify(JSON.parse(data), null, 2));
        }
    })
);
```

#### DELETE - delete a task
```javascript
const Asana = require('asana');
const defaultClient = Asana.ApiClient.instance;

// Configure OAuth2 access token for authorization: oauth2
const oauth2 = defaultClient.authentications['oauth2'];
oauth2.accessToken = "<YOUR_PERSONAL_ACCESS_TOKEN>";

// DELETE - delete a task
defaultClient.callApi(
    "/tasks/{task_gid}",
    "DELETE",
    (pathParams = { task_gid: "<YOUR_TASK_GID>" }),
    (queryParams = {}),
    (headerParams = {}),
    (formParams = {}),
    (bodyParam = null),
    (authNames = ["oauth2"]),
    (contentTypes = []),
    (accepts = ["application/json; charset=UTF-8"]),
    (returnType = "Blob"), // Can be one of: "Blob", "String"
    (callback = (error, data, response) => {
        if (error) {
            console.error(error);
        } else {
            console.log("API called successfully. Returned data: " + JSON.stringify(JSON.parse(data), null, 2));
        }
    })
);
```


[release-image]: https://img.shields.io/github/release/asana/node-asana.svg

[github-actions-image]: https://github.com/Asana/node-asana/workflows/Build/badge.svg
[github-actions-url]: https://github.com/Asana/node-asana/actions

[npm-image]: http://img.shields.io/npm/v/asana.svg?style=flat-square
[npm-url]: https://www.npmjs.org/package/asana
