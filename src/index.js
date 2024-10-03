/*
 * Asana
 * This is the interface for interacting with the [Asana Platform](https://developers.asana.com). Our API reference is generated from our [OpenAPI spec] (https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_oas.yaml).
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.54
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from './ApiClient';
import {AllocationsApi} from './api/AllocationsApi';
import {AttachmentsApi} from './api/AttachmentsApi';
import {AuditLogAPIApi} from './api/AuditLogAPIApi';
import {BatchAPIApi} from './api/BatchAPIApi';
import {CustomFieldSettingsApi} from './api/CustomFieldSettingsApi';
import {CustomFieldsApi} from './api/CustomFieldsApi';
import {EventsApi} from './api/EventsApi';
import {GoalRelationshipsApi} from './api/GoalRelationshipsApi';
import {GoalsApi} from './api/GoalsApi';
import {JobsApi} from './api/JobsApi';
import {MembershipsApi} from './api/MembershipsApi';
import {OrganizationExportsApi} from './api/OrganizationExportsApi';
import {PortfolioMembershipsApi} from './api/PortfolioMembershipsApi';
import {PortfoliosApi} from './api/PortfoliosApi';
import {ProjectBriefsApi} from './api/ProjectBriefsApi';
import {ProjectMembershipsApi} from './api/ProjectMembershipsApi';
import {ProjectStatusesApi} from './api/ProjectStatusesApi';
import {ProjectTemplatesApi} from './api/ProjectTemplatesApi';
import {ProjectsApi} from './api/ProjectsApi';
import {RulesApi} from './api/RulesApi';
import {SectionsApi} from './api/SectionsApi';
import {StatusUpdatesApi} from './api/StatusUpdatesApi';
import {StoriesApi} from './api/StoriesApi';
import {TagsApi} from './api/TagsApi';
import {TaskTemplatesApi} from './api/TaskTemplatesApi';
import {TasksApi} from './api/TasksApi';
import {TeamMembershipsApi} from './api/TeamMembershipsApi';
import {TeamsApi} from './api/TeamsApi';
import {TimePeriodsApi} from './api/TimePeriodsApi';
import {TimeTrackingEntriesApi} from './api/TimeTrackingEntriesApi';
import {TypeaheadApi} from './api/TypeaheadApi';
import {UserTaskListsApi} from './api/UserTaskListsApi';
import {UsersApi} from './api/UsersApi';
import {WebhooksApi} from './api/WebhooksApi';
import {WorkspaceMembershipsApi} from './api/WorkspaceMembershipsApi';
import {WorkspacesApi} from './api/WorkspacesApi';

/**
* This_is_the_interface_for_interacting_with_the__Asana_Platform_httpsdevelopers_asana_com__Our_API_reference_is_generated_from_our__OpenAPI_spec__httpsraw_githubusercontent_comAsanaopenapimasterdefsasana_oas_yaml_.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Asana = require('index'); // See note below*.
* var xxxSvc = new Asana.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Asana.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Asana.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Asana.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 3.0.11
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient

    ,

    /**
    * The AllocationsApi service constructor.
    * @property {module:api/AllocationsApi}
    */
    AllocationsApi,

    /**
    * The AttachmentsApi service constructor.
    * @property {module:api/AttachmentsApi}
    */
    AttachmentsApi,

    /**
    * The AuditLogAPIApi service constructor.
    * @property {module:api/AuditLogAPIApi}
    */
    AuditLogAPIApi,

    /**
    * The BatchAPIApi service constructor.
    * @property {module:api/BatchAPIApi}
    */
    BatchAPIApi,

    /**
    * The CustomFieldSettingsApi service constructor.
    * @property {module:api/CustomFieldSettingsApi}
    */
    CustomFieldSettingsApi,

    /**
    * The CustomFieldsApi service constructor.
    * @property {module:api/CustomFieldsApi}
    */
    CustomFieldsApi,

    /**
    * The EventsApi service constructor.
    * @property {module:api/EventsApi}
    */
    EventsApi,

    /**
    * The GoalRelationshipsApi service constructor.
    * @property {module:api/GoalRelationshipsApi}
    */
    GoalRelationshipsApi,

    /**
    * The GoalsApi service constructor.
    * @property {module:api/GoalsApi}
    */
    GoalsApi,

    /**
    * The JobsApi service constructor.
    * @property {module:api/JobsApi}
    */
    JobsApi,

    /**
    * The MembershipsApi service constructor.
    * @property {module:api/MembershipsApi}
    */
    MembershipsApi,

    /**
    * The OrganizationExportsApi service constructor.
    * @property {module:api/OrganizationExportsApi}
    */
    OrganizationExportsApi,

    /**
    * The PortfolioMembershipsApi service constructor.
    * @property {module:api/PortfolioMembershipsApi}
    */
    PortfolioMembershipsApi,

    /**
    * The PortfoliosApi service constructor.
    * @property {module:api/PortfoliosApi}
    */
    PortfoliosApi,

    /**
    * The ProjectBriefsApi service constructor.
    * @property {module:api/ProjectBriefsApi}
    */
    ProjectBriefsApi,

    /**
    * The ProjectMembershipsApi service constructor.
    * @property {module:api/ProjectMembershipsApi}
    */
    ProjectMembershipsApi,

    /**
    * The ProjectStatusesApi service constructor.
    * @property {module:api/ProjectStatusesApi}
    */
    ProjectStatusesApi,

    /**
    * The ProjectTemplatesApi service constructor.
    * @property {module:api/ProjectTemplatesApi}
    */
    ProjectTemplatesApi,

    /**
    * The ProjectsApi service constructor.
    * @property {module:api/ProjectsApi}
    */
    ProjectsApi,

    /**
    * The RulesApi service constructor.
    * @property {module:api/RulesApi}
    */
    RulesApi,

    /**
    * The SectionsApi service constructor.
    * @property {module:api/SectionsApi}
    */
    SectionsApi,

    /**
    * The StatusUpdatesApi service constructor.
    * @property {module:api/StatusUpdatesApi}
    */
    StatusUpdatesApi,

    /**
    * The StoriesApi service constructor.
    * @property {module:api/StoriesApi}
    */
    StoriesApi,

    /**
    * The TagsApi service constructor.
    * @property {module:api/TagsApi}
    */
    TagsApi,

    /**
    * The TaskTemplatesApi service constructor.
    * @property {module:api/TaskTemplatesApi}
    */
    TaskTemplatesApi,

    /**
    * The TasksApi service constructor.
    * @property {module:api/TasksApi}
    */
    TasksApi,

    /**
    * The TeamMembershipsApi service constructor.
    * @property {module:api/TeamMembershipsApi}
    */
    TeamMembershipsApi,

    /**
    * The TeamsApi service constructor.
    * @property {module:api/TeamsApi}
    */
    TeamsApi,

    /**
    * The TimePeriodsApi service constructor.
    * @property {module:api/TimePeriodsApi}
    */
    TimePeriodsApi,

    /**
    * The TimeTrackingEntriesApi service constructor.
    * @property {module:api/TimeTrackingEntriesApi}
    */
    TimeTrackingEntriesApi,

    /**
    * The TypeaheadApi service constructor.
    * @property {module:api/TypeaheadApi}
    */
    TypeaheadApi,

    /**
    * The UserTaskListsApi service constructor.
    * @property {module:api/UserTaskListsApi}
    */
    UserTaskListsApi,

    /**
    * The UsersApi service constructor.
    * @property {module:api/UsersApi}
    */
    UsersApi,

    /**
    * The WebhooksApi service constructor.
    * @property {module:api/WebhooksApi}
    */
    WebhooksApi,

    /**
    * The WorkspaceMembershipsApi service constructor.
    * @property {module:api/WorkspaceMembershipsApi}
    */
    WorkspaceMembershipsApi,

    /**
    * The WorkspacesApi service constructor.
    * @property {module:api/WorkspacesApi}
    */
    WorkspacesApi
};
