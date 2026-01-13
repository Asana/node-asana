/**
 * TypeScript type definitions for the Asana Node.js SDK
 * @packageDocumentation
 */

export * from './generated';
import type { components, operations } from './generated';
export { components, operations };

// --- Utility types --------------------------------------------------------

/**
 * Extracts the top-level key from a dot-notation opt_field string.
 * "assignee.name" → "assignee", "due_on" → "due_on"
 */
type TopLevelKey<S extends string> = S extends `${infer K}.${string}` ? K : S;

/**
 * Extracts the valid opt_fields union for an operation from the generated types.
 * Falls back to `string` when the operation has no opt_fields parameter.
 */
type OptFieldsOf<Op> =
  Op extends { parameters: { query?: infer Q } }
    ? NonNullable<Q> extends { opt_fields?: (infer E)[] }
      ? E extends string ? E : string
      : string
    : string;

/**
 * The Asana API always returns `gid` regardless of opt_fields, but the OpenAPI
 * spec marks it optional because *all* Response schema fields are optional.
 * This type corrects that by making `gid` required.
 */
export type WithGid<T> = { gid: string } & T;

/**
 * For array opt_fields with `as const` — requested top-level fields become
 * required. The API returns gid + the fields you explicitly request.
 * Dot-notation fields (e.g. "assignee.name") are accepted but only affect
 * the top-level key ("assignee") in the result type.
 */
export type WithOptFields<Full, F extends readonly string[]> =
  { gid: string } & Required<Pick<Full, TopLevelKey<F[number]> & keyof Full>>;

/**
 * For string opt_fields — only gid is guaranteed, everything else optional.
 */
export type WithStringOptFields<Full> = { gid: string } & Partial<Full>;

export interface OptionsWithStringOptFields {
  opt_fields?: string;
  [key: string]: unknown;
}

export interface OptionsWithArrayOptFields<F extends readonly string[]> {
  opt_fields: F;
  [key: string]: unknown;
}

export interface Collection<T> {
  data: T[];
  next_page?: { offset: string; path: string; uri: string } | null;
  nextPage(): Promise<Collection<T> | null>;
  stream(): { [Symbol.asyncIterator](): AsyncIterableIterator<T> };
}

export interface DataResponse<T> {
  data: T;
}

// --- Resource types -------------------------------------------------------

export type AccessRequest = WithGid<components["schemas"]["AccessRequestResponse"]>;
export type Allocation = WithGid<components["schemas"]["AllocationResponse"]>;
export type Attachment = WithGid<components["schemas"]["AttachmentResponse"]>;
export type Batch = WithGid<components["schemas"]["BatchResponse"]>;
export type BudgetActual = WithGid<components["schemas"]["BudgetActualResponse"]>;
export type BudgetEstimate = WithGid<components["schemas"]["BudgetEstimateResponse"]>;
export type Budget = WithGid<components["schemas"]["BudgetResponse"]>;
export type BudgetTotal = WithGid<components["schemas"]["BudgetTotalResponse"]>;
export type CustomFieldMembership = WithGid<components["schemas"]["CustomFieldMembershipResponse"]>;
export type CustomField = WithGid<components["schemas"]["CustomFieldResponse"]>;
export type CustomFieldSetting = WithGid<components["schemas"]["CustomFieldSettingResponse"]>;
export type CustomTypeMembership = WithGid<components["schemas"]["CustomTypeMembershipResponse"]>;
export type CustomType = WithGid<components["schemas"]["CustomTypeResponse"]>;
export type CustomTypeStatusOption = WithGid<components["schemas"]["CustomTypeStatusOptionResponse"]>;
export type DeprecatedPortfolioMembership = WithGid<components["schemas"]["DeprecatedPortfolioMembershipResponse"]>;
export type Event = WithGid<components["schemas"]["EventResponse"]>;
export type GoalMembership = WithGid<components["schemas"]["GoalMembershipResponse"]>;
export type GoalRelationship = WithGid<components["schemas"]["GoalRelationshipResponse"]>;
export type Goal = WithGid<components["schemas"]["GoalResponse"]>;
export type GraphExport = WithGid<components["schemas"]["GraphExportResponse"]>;
export type Job = WithGid<components["schemas"]["JobResponse"]>;
export type Membership = WithGid<components["schemas"]["MembershipResponse"]>;
export type OrganizationExport = WithGid<components["schemas"]["OrganizationExportResponse"]>;
export type PortfolioMembershipCompact = WithGid<components["schemas"]["PortfolioMembershipCompactResponse"]>;
export type PortfolioMembership = WithGid<components["schemas"]["PortfolioMembershipResponse"]>;
export type Portfolio = WithGid<components["schemas"]["PortfolioResponse"]>;
export type ProjectBrief = WithGid<components["schemas"]["ProjectBriefResponse"]>;
export type ProjectMembershipCompact = WithGid<components["schemas"]["ProjectMembershipCompactResponse"]>;
export type ProjectMembershipNormal = WithGid<components["schemas"]["ProjectMembershipNormalResponse"]>;
export type Project = WithGid<components["schemas"]["ProjectResponse"]>;
export type ProjectStatus = WithGid<components["schemas"]["ProjectStatusResponse"]>;
export type ProjectTemplate = WithGid<components["schemas"]["ProjectTemplateResponse"]>;
export type Rate = WithGid<components["schemas"]["RateResponse"]>;
export type RbacRole = WithGid<components["schemas"]["RbacRoleResponse"]>;
export type ResourceExport = WithGid<components["schemas"]["ResourceExportResponse"]>;
export type RuleTrigger = WithGid<components["schemas"]["RuleTriggerResponse"]>;
export type Section = WithGid<components["schemas"]["SectionResponse"]>;
export type StatusUpdate = WithGid<components["schemas"]["StatusUpdateResponse"]>;
export type Story = WithGid<components["schemas"]["StoryResponse"]>;
export type Tag = WithGid<components["schemas"]["TagResponse"]>;
export type TaskCount = WithGid<components["schemas"]["TaskCountResponse"]>;
export type Task = WithGid<components["schemas"]["TaskResponse"]>;
export type TaskTemplate = WithGid<components["schemas"]["TaskTemplateResponse"]>;
export type TeamMembership = WithGid<components["schemas"]["TeamMembershipResponse"]>;
export type Team = WithGid<components["schemas"]["TeamResponse"]>;
export type TimePeriod = WithGid<components["schemas"]["TimePeriodResponse"]>;
export type UserBase = WithGid<components["schemas"]["UserBaseResponse"]>;
export type User = WithGid<components["schemas"]["UserResponse"]>;
export type UserTaskList = WithGid<components["schemas"]["UserTaskListResponse"]>;
export type Webhook = WithGid<components["schemas"]["WebhookResponse"]>;
export type WorkspaceMembership = WithGid<components["schemas"]["WorkspaceMembershipResponse"]>;
export type Workspace = WithGid<components["schemas"]["WorkspaceResponse"]>;

// --- ApiClient ------------------------------------------------------------

export interface ApiClientConfig {
  basePath?: string;
  defaultHeaders?: Record<string, string>;
  timeout?: number;
}

export interface AuthConfig {
  accessToken?: string;
}

export class ApiClient {
  static instance: ApiClient;
  basePath: string;
  defaultHeaders: Record<string, string>;
  timeout: number;
  authentications: { token: AuthConfig };
  constructor();
}

// --- API classes ----------------------------------------------------------

type ApproveAccessRequestOptFields = OptFieldsOf<operations["approveAccessRequest"]>;
type CreateAccessRequestOptFields = OptFieldsOf<operations["createAccessRequest"]>;
type GetAccessRequestsOptFields = OptFieldsOf<operations["getAccessRequests"]>;
type RejectAccessRequestOptFields = OptFieldsOf<operations["rejectAccessRequest"]>;
type CreateAllocationOptFields = OptFieldsOf<operations["createAllocation"]>;
type DeleteAllocationOptFields = OptFieldsOf<operations["deleteAllocation"]>;
type GetAllocationOptFields = OptFieldsOf<operations["getAllocation"]>;
type GetAllocationsOptFields = OptFieldsOf<operations["getAllocations"]>;
type UpdateAllocationOptFields = OptFieldsOf<operations["updateAllocation"]>;
type CreateAttachmentForObjectOptFields = OptFieldsOf<operations["createAttachmentForObject"]>;
type DeleteAttachmentOptFields = OptFieldsOf<operations["deleteAttachment"]>;
type GetAttachmentOptFields = OptFieldsOf<operations["getAttachment"]>;
type GetAttachmentsForObjectOptFields = OptFieldsOf<operations["getAttachmentsForObject"]>;
type CreateBatchRequestOptFields = OptFieldsOf<operations["createBatchRequest"]>;
type CreateBudgetOptFields = OptFieldsOf<operations["createBudget"]>;
type DeleteBudgetOptFields = OptFieldsOf<operations["deleteBudget"]>;
type GetBudgetOptFields = OptFieldsOf<operations["getBudget"]>;
type GetBudgetsOptFields = OptFieldsOf<operations["getBudgets"]>;
type UpdateBudgetOptFields = OptFieldsOf<operations["updateBudget"]>;
type GetCustomFieldSettingsForGoalOptFields = OptFieldsOf<operations["getCustomFieldSettingsForGoal"]>;
type GetCustomFieldSettingsForPortfolioOptFields = OptFieldsOf<operations["getCustomFieldSettingsForPortfolio"]>;
type GetCustomFieldSettingsForProjectOptFields = OptFieldsOf<operations["getCustomFieldSettingsForProject"]>;
type GetCustomFieldSettingsForTeamOptFields = OptFieldsOf<operations["getCustomFieldSettingsForTeam"]>;
type CreateCustomFieldOptFields = OptFieldsOf<operations["createCustomField"]>;
type CreateEnumOptionForCustomFieldOptFields = OptFieldsOf<operations["createEnumOptionForCustomField"]>;
type DeleteCustomFieldOptFields = OptFieldsOf<operations["deleteCustomField"]>;
type GetCustomFieldOptFields = OptFieldsOf<operations["getCustomField"]>;
type GetCustomFieldsForWorkspaceOptFields = OptFieldsOf<operations["getCustomFieldsForWorkspace"]>;
type InsertEnumOptionForCustomFieldOptFields = OptFieldsOf<operations["insertEnumOptionForCustomField"]>;
type UpdateCustomFieldOptFields = OptFieldsOf<operations["updateCustomField"]>;
type UpdateEnumOptionOptFields = OptFieldsOf<operations["updateEnumOption"]>;
type GetCustomTypeOptFields = OptFieldsOf<operations["getCustomType"]>;
type GetCustomTypesOptFields = OptFieldsOf<operations["getCustomTypes"]>;
type GetEventsOptFields = OptFieldsOf<operations["getEvents"]>;
type AddSupportingRelationshipOptFields = OptFieldsOf<operations["addSupportingRelationship"]>;
type GetGoalRelationshipOptFields = OptFieldsOf<operations["getGoalRelationship"]>;
type GetGoalRelationshipsOptFields = OptFieldsOf<operations["getGoalRelationships"]>;
type RemoveSupportingRelationshipOptFields = OptFieldsOf<operations["removeSupportingRelationship"]>;
type UpdateGoalRelationshipOptFields = OptFieldsOf<operations["updateGoalRelationship"]>;
type AddCustomFieldSettingForGoalOptFields = OptFieldsOf<operations["addCustomFieldSettingForGoal"]>;
type AddFollowersOptFields = OptFieldsOf<operations["addFollowers"]>;
type CreateGoalOptFields = OptFieldsOf<operations["createGoal"]>;
type CreateGoalMetricOptFields = OptFieldsOf<operations["createGoalMetric"]>;
type DeleteGoalOptFields = OptFieldsOf<operations["deleteGoal"]>;
type GetGoalOptFields = OptFieldsOf<operations["getGoal"]>;
type GetGoalsOptFields = OptFieldsOf<operations["getGoals"]>;
type GetParentGoalsForGoalOptFields = OptFieldsOf<operations["getParentGoalsForGoal"]>;
type RemoveCustomFieldSettingForGoalOptFields = OptFieldsOf<operations["removeCustomFieldSettingForGoal"]>;
type RemoveFollowersOptFields = OptFieldsOf<operations["removeFollowers"]>;
type UpdateGoalOptFields = OptFieldsOf<operations["updateGoal"]>;
type UpdateGoalMetricOptFields = OptFieldsOf<operations["updateGoalMetric"]>;
type GetJobOptFields = OptFieldsOf<operations["getJob"]>;
type CreateMembershipOptFields = OptFieldsOf<operations["createMembership"]>;
type DeleteMembershipOptFields = OptFieldsOf<operations["deleteMembership"]>;
type GetMembershipOptFields = OptFieldsOf<operations["getMembership"]>;
type GetMembershipsOptFields = OptFieldsOf<operations["getMemberships"]>;
type UpdateMembershipOptFields = OptFieldsOf<operations["updateMembership"]>;
type CreateOrganizationExportOptFields = OptFieldsOf<operations["createOrganizationExport"]>;
type GetOrganizationExportOptFields = OptFieldsOf<operations["getOrganizationExport"]>;
type GetPortfolioMembershipOptFields = OptFieldsOf<operations["getPortfolioMembership"]>;
type GetPortfolioMembershipsOptFields = OptFieldsOf<operations["getPortfolioMemberships"]>;
type GetPortfolioMembershipsForPortfolioOptFields = OptFieldsOf<operations["getPortfolioMembershipsForPortfolio"]>;
type AddCustomFieldSettingForPortfolioOptFields = OptFieldsOf<operations["addCustomFieldSettingForPortfolio"]>;
type AddItemForPortfolioOptFields = OptFieldsOf<operations["addItemForPortfolio"]>;
type AddMembersForPortfolioOptFields = OptFieldsOf<operations["addMembersForPortfolio"]>;
type CreatePortfolioOptFields = OptFieldsOf<operations["createPortfolio"]>;
type DeletePortfolioOptFields = OptFieldsOf<operations["deletePortfolio"]>;
type GetItemsForPortfolioOptFields = OptFieldsOf<operations["getItemsForPortfolio"]>;
type GetPortfolioOptFields = OptFieldsOf<operations["getPortfolio"]>;
type GetPortfoliosOptFields = OptFieldsOf<operations["getPortfolios"]>;
type RemoveCustomFieldSettingForPortfolioOptFields = OptFieldsOf<operations["removeCustomFieldSettingForPortfolio"]>;
type RemoveItemForPortfolioOptFields = OptFieldsOf<operations["removeItemForPortfolio"]>;
type RemoveMembersForPortfolioOptFields = OptFieldsOf<operations["removeMembersForPortfolio"]>;
type UpdatePortfolioOptFields = OptFieldsOf<operations["updatePortfolio"]>;
type CreateProjectBriefOptFields = OptFieldsOf<operations["createProjectBrief"]>;
type DeleteProjectBriefOptFields = OptFieldsOf<operations["deleteProjectBrief"]>;
type GetProjectBriefOptFields = OptFieldsOf<operations["getProjectBrief"]>;
type UpdateProjectBriefOptFields = OptFieldsOf<operations["updateProjectBrief"]>;
type GetProjectMembershipOptFields = OptFieldsOf<operations["getProjectMembership"]>;
type GetProjectMembershipsForProjectOptFields = OptFieldsOf<operations["getProjectMembershipsForProject"]>;
type CreateProjectStatusForProjectOptFields = OptFieldsOf<operations["createProjectStatusForProject"]>;
type DeleteProjectStatusOptFields = OptFieldsOf<operations["deleteProjectStatus"]>;
type GetProjectStatusOptFields = OptFieldsOf<operations["getProjectStatus"]>;
type GetProjectStatusesForProjectOptFields = OptFieldsOf<operations["getProjectStatusesForProject"]>;
type DeleteProjectTemplateOptFields = OptFieldsOf<operations["deleteProjectTemplate"]>;
type GetProjectTemplateOptFields = OptFieldsOf<operations["getProjectTemplate"]>;
type GetProjectTemplatesOptFields = OptFieldsOf<operations["getProjectTemplates"]>;
type GetProjectTemplatesForTeamOptFields = OptFieldsOf<operations["getProjectTemplatesForTeam"]>;
type InstantiateProjectOptFields = OptFieldsOf<operations["instantiateProject"]>;
type AddCustomFieldSettingForProjectOptFields = OptFieldsOf<operations["addCustomFieldSettingForProject"]>;
type AddFollowersForProjectOptFields = OptFieldsOf<operations["addFollowersForProject"]>;
type AddMembersForProjectOptFields = OptFieldsOf<operations["addMembersForProject"]>;
type CreateProjectOptFields = OptFieldsOf<operations["createProject"]>;
type CreateProjectForTeamOptFields = OptFieldsOf<operations["createProjectForTeam"]>;
type CreateProjectForWorkspaceOptFields = OptFieldsOf<operations["createProjectForWorkspace"]>;
type DeleteProjectOptFields = OptFieldsOf<operations["deleteProject"]>;
type DuplicateProjectOptFields = OptFieldsOf<operations["duplicateProject"]>;
type GetProjectOptFields = OptFieldsOf<operations["getProject"]>;
type GetProjectsOptFields = OptFieldsOf<operations["getProjects"]>;
type GetProjectsForTaskOptFields = OptFieldsOf<operations["getProjectsForTask"]>;
type GetProjectsForTeamOptFields = OptFieldsOf<operations["getProjectsForTeam"]>;
type GetProjectsForWorkspaceOptFields = OptFieldsOf<operations["getProjectsForWorkspace"]>;
type GetTaskCountsForProjectOptFields = OptFieldsOf<operations["getTaskCountsForProject"]>;
type ProjectSaveAsTemplateOptFields = OptFieldsOf<operations["projectSaveAsTemplate"]>;
type RemoveCustomFieldSettingForProjectOptFields = OptFieldsOf<operations["removeCustomFieldSettingForProject"]>;
type RemoveFollowersForProjectOptFields = OptFieldsOf<operations["removeFollowersForProject"]>;
type RemoveMembersForProjectOptFields = OptFieldsOf<operations["removeMembersForProject"]>;
type UpdateProjectOptFields = OptFieldsOf<operations["updateProject"]>;
type CreateRateOptFields = OptFieldsOf<operations["createRate"]>;
type DeleteRateOptFields = OptFieldsOf<operations["deleteRate"]>;
type GetRateOptFields = OptFieldsOf<operations["getRate"]>;
type GetRatesOptFields = OptFieldsOf<operations["getRates"]>;
type UpdateRateOptFields = OptFieldsOf<operations["updateRate"]>;
type CreateRoleOptFields = OptFieldsOf<operations["createRole"]>;
type DeleteRoleOptFields = OptFieldsOf<operations["deleteRole"]>;
type GetRoleOptFields = OptFieldsOf<operations["getRole"]>;
type GetRolesOptFields = OptFieldsOf<operations["getRoles"]>;
type UpdateRoleOptFields = OptFieldsOf<operations["updateRole"]>;
type AddTaskForSectionOptFields = OptFieldsOf<operations["addTaskForSection"]>;
type CreateSectionForProjectOptFields = OptFieldsOf<operations["createSectionForProject"]>;
type DeleteSectionOptFields = OptFieldsOf<operations["deleteSection"]>;
type GetSectionOptFields = OptFieldsOf<operations["getSection"]>;
type GetSectionsForProjectOptFields = OptFieldsOf<operations["getSectionsForProject"]>;
type InsertSectionForProjectOptFields = OptFieldsOf<operations["insertSectionForProject"]>;
type UpdateSectionOptFields = OptFieldsOf<operations["updateSection"]>;
type CreateStatusForObjectOptFields = OptFieldsOf<operations["createStatusForObject"]>;
type DeleteStatusOptFields = OptFieldsOf<operations["deleteStatus"]>;
type GetStatusOptFields = OptFieldsOf<operations["getStatus"]>;
type GetStatusesForObjectOptFields = OptFieldsOf<operations["getStatusesForObject"]>;
type CreateStoryForTaskOptFields = OptFieldsOf<operations["createStoryForTask"]>;
type DeleteStoryOptFields = OptFieldsOf<operations["deleteStory"]>;
type GetStoriesForTaskOptFields = OptFieldsOf<operations["getStoriesForTask"]>;
type GetStoryOptFields = OptFieldsOf<operations["getStory"]>;
type UpdateStoryOptFields = OptFieldsOf<operations["updateStory"]>;
type CreateTagOptFields = OptFieldsOf<operations["createTag"]>;
type CreateTagForWorkspaceOptFields = OptFieldsOf<operations["createTagForWorkspace"]>;
type DeleteTagOptFields = OptFieldsOf<operations["deleteTag"]>;
type GetTagOptFields = OptFieldsOf<operations["getTag"]>;
type GetTagsOptFields = OptFieldsOf<operations["getTags"]>;
type GetTagsForTaskOptFields = OptFieldsOf<operations["getTagsForTask"]>;
type GetTagsForWorkspaceOptFields = OptFieldsOf<operations["getTagsForWorkspace"]>;
type UpdateTagOptFields = OptFieldsOf<operations["updateTag"]>;
type DeleteTaskTemplateOptFields = OptFieldsOf<operations["deleteTaskTemplate"]>;
type GetTaskTemplateOptFields = OptFieldsOf<operations["getTaskTemplate"]>;
type GetTaskTemplatesOptFields = OptFieldsOf<operations["getTaskTemplates"]>;
type InstantiateTaskOptFields = OptFieldsOf<operations["instantiateTask"]>;
type AddDependenciesForTaskOptFields = OptFieldsOf<operations["addDependenciesForTask"]>;
type AddDependentsForTaskOptFields = OptFieldsOf<operations["addDependentsForTask"]>;
type AddFollowersForTaskOptFields = OptFieldsOf<operations["addFollowersForTask"]>;
type AddProjectForTaskOptFields = OptFieldsOf<operations["addProjectForTask"]>;
type AddTagForTaskOptFields = OptFieldsOf<operations["addTagForTask"]>;
type CreateSubtaskForTaskOptFields = OptFieldsOf<operations["createSubtaskForTask"]>;
type CreateTaskOptFields = OptFieldsOf<operations["createTask"]>;
type DeleteTaskOptFields = OptFieldsOf<operations["deleteTask"]>;
type DuplicateTaskOptFields = OptFieldsOf<operations["duplicateTask"]>;
type GetDependenciesForTaskOptFields = OptFieldsOf<operations["getDependenciesForTask"]>;
type GetDependentsForTaskOptFields = OptFieldsOf<operations["getDependentsForTask"]>;
type GetSubtasksForTaskOptFields = OptFieldsOf<operations["getSubtasksForTask"]>;
type GetTaskOptFields = OptFieldsOf<operations["getTask"]>;
type GetTaskForCustomIDOptFields = OptFieldsOf<operations["getTaskForCustomID"]>;
type GetTasksOptFields = OptFieldsOf<operations["getTasks"]>;
type GetTasksForProjectOptFields = OptFieldsOf<operations["getTasksForProject"]>;
type GetTasksForSectionOptFields = OptFieldsOf<operations["getTasksForSection"]>;
type GetTasksForTagOptFields = OptFieldsOf<operations["getTasksForTag"]>;
type GetTasksForUserTaskListOptFields = OptFieldsOf<operations["getTasksForUserTaskList"]>;
type RemoveDependenciesForTaskOptFields = OptFieldsOf<operations["removeDependenciesForTask"]>;
type RemoveDependentsForTaskOptFields = OptFieldsOf<operations["removeDependentsForTask"]>;
type RemoveFollowerForTaskOptFields = OptFieldsOf<operations["removeFollowerForTask"]>;
type RemoveProjectForTaskOptFields = OptFieldsOf<operations["removeProjectForTask"]>;
type RemoveTagForTaskOptFields = OptFieldsOf<operations["removeTagForTask"]>;
type SearchTasksForWorkspaceOptFields = OptFieldsOf<operations["searchTasksForWorkspace"]>;
type SetParentForTaskOptFields = OptFieldsOf<operations["setParentForTask"]>;
type UpdateTaskOptFields = OptFieldsOf<operations["updateTask"]>;
type GetTeamMembershipOptFields = OptFieldsOf<operations["getTeamMembership"]>;
type GetTeamMembershipsOptFields = OptFieldsOf<operations["getTeamMemberships"]>;
type GetTeamMembershipsForTeamOptFields = OptFieldsOf<operations["getTeamMembershipsForTeam"]>;
type GetTeamMembershipsForUserOptFields = OptFieldsOf<operations["getTeamMembershipsForUser"]>;
type AddUserForTeamOptFields = OptFieldsOf<operations["addUserForTeam"]>;
type CreateTeamOptFields = OptFieldsOf<operations["createTeam"]>;
type GetTeamOptFields = OptFieldsOf<operations["getTeam"]>;
type GetTeamsForUserOptFields = OptFieldsOf<operations["getTeamsForUser"]>;
type GetTeamsForWorkspaceOptFields = OptFieldsOf<operations["getTeamsForWorkspace"]>;
type RemoveUserForTeamOptFields = OptFieldsOf<operations["removeUserForTeam"]>;
type UpdateTeamOptFields = OptFieldsOf<operations["updateTeam"]>;
type GetTimePeriodOptFields = OptFieldsOf<operations["getTimePeriod"]>;
type GetTimePeriodsOptFields = OptFieldsOf<operations["getTimePeriods"]>;
type CreateTimeTrackingEntryOptFields = OptFieldsOf<operations["createTimeTrackingEntry"]>;
type DeleteTimeTrackingEntryOptFields = OptFieldsOf<operations["deleteTimeTrackingEntry"]>;
type GetTimeTrackingEntriesOptFields = OptFieldsOf<operations["getTimeTrackingEntries"]>;
type GetTimeTrackingEntriesForTaskOptFields = OptFieldsOf<operations["getTimeTrackingEntriesForTask"]>;
type GetTimeTrackingEntryOptFields = OptFieldsOf<operations["getTimeTrackingEntry"]>;
type UpdateTimeTrackingEntryOptFields = OptFieldsOf<operations["updateTimeTrackingEntry"]>;
type TypeaheadForWorkspaceOptFields = OptFieldsOf<operations["typeaheadForWorkspace"]>;
type GetUserTaskListOptFields = OptFieldsOf<operations["getUserTaskList"]>;
type GetUserTaskListForUserOptFields = OptFieldsOf<operations["getUserTaskListForUser"]>;
type GetFavoritesForUserOptFields = OptFieldsOf<operations["getFavoritesForUser"]>;
type GetUserOptFields = OptFieldsOf<operations["getUser"]>;
type GetUserForWorkspaceOptFields = OptFieldsOf<operations["getUserForWorkspace"]>;
type GetUsersOptFields = OptFieldsOf<operations["getUsers"]>;
type GetUsersForTeamOptFields = OptFieldsOf<operations["getUsersForTeam"]>;
type GetUsersForWorkspaceOptFields = OptFieldsOf<operations["getUsersForWorkspace"]>;
type UpdateUserOptFields = OptFieldsOf<operations["updateUser"]>;
type UpdateUserForWorkspaceOptFields = OptFieldsOf<operations["updateUserForWorkspace"]>;
type CreateWebhookOptFields = OptFieldsOf<operations["createWebhook"]>;
type DeleteWebhookOptFields = OptFieldsOf<operations["deleteWebhook"]>;
type GetWebhookOptFields = OptFieldsOf<operations["getWebhook"]>;
type GetWebhooksOptFields = OptFieldsOf<operations["getWebhooks"]>;
type UpdateWebhookOptFields = OptFieldsOf<operations["updateWebhook"]>;
type GetWorkspaceMembershipOptFields = OptFieldsOf<operations["getWorkspaceMembership"]>;
type GetWorkspaceMembershipsForUserOptFields = OptFieldsOf<operations["getWorkspaceMembershipsForUser"]>;
type GetWorkspaceMembershipsForWorkspaceOptFields = OptFieldsOf<operations["getWorkspaceMembershipsForWorkspace"]>;
type AddUserForWorkspaceOptFields = OptFieldsOf<operations["addUserForWorkspace"]>;
type GetWorkspaceOptFields = OptFieldsOf<operations["getWorkspace"]>;
type GetWorkspaceEventsOptFields = OptFieldsOf<operations["getWorkspaceEvents"]>;
type GetWorkspacesOptFields = OptFieldsOf<operations["getWorkspaces"]>;
type RemoveUserForWorkspaceOptFields = OptFieldsOf<operations["removeUserForWorkspace"]>;
type UpdateWorkspaceOptFields = OptFieldsOf<operations["updateWorkspace"]>;

export class AccessRequestsApi {
  constructor(apiClient?: ApiClient);
  approveAccessRequest(access_request_gid: string): Promise<DataResponse<unknown>>;
  approveAccessRequest(access_request_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  approveAccessRequest<F extends readonly ApproveAccessRequestOptFields[]>(access_request_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  createAccessRequest(body: string): Promise<DataResponse<AccessRequest>>;
  createAccessRequest(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<AccessRequest>>>;
  createAccessRequest<F extends readonly CreateAccessRequestOptFields[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<AccessRequest, F>>>;
  getAccessRequests(target: string): Promise<Collection<AccessRequest>>;
  getAccessRequests(target: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<AccessRequest>>>;
  getAccessRequests<F extends readonly GetAccessRequestsOptFields[]>(target: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<AccessRequest, F>>>;
  rejectAccessRequest(access_request_gid: string): Promise<DataResponse<unknown>>;
  rejectAccessRequest(access_request_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  rejectAccessRequest<F extends readonly RejectAccessRequestOptFields[]>(access_request_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
}

export class AllocationsApi {
  constructor(apiClient?: ApiClient);
  createAllocation(body: string): Promise<DataResponse<Allocation>>;
  createAllocation(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Allocation>>>;
  createAllocation<F extends readonly CreateAllocationOptFields[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Allocation, F>>>;
  deleteAllocation(allocation_gid: string): Promise<DataResponse<unknown>>;
  deleteAllocation(allocation_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteAllocation<F extends readonly DeleteAllocationOptFields[]>(allocation_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getAllocation(allocation_gid: string): Promise<DataResponse<Allocation>>;
  getAllocation(allocation_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Allocation>>>;
  getAllocation<F extends readonly GetAllocationOptFields[]>(allocation_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Allocation, F>>>;
  getAllocations(): Promise<Collection<Allocation>>;
  getAllocations(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Allocation>>>;
  getAllocations<F extends readonly GetAllocationsOptFields[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Allocation, F>>>;
  updateAllocation(body: string, allocation_gid: string): Promise<DataResponse<Allocation>>;
  updateAllocation(body: string, allocation_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Allocation>>>;
  updateAllocation<F extends readonly UpdateAllocationOptFields[]>(body: string, allocation_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Allocation, F>>>;
}

export class AttachmentsApi {
  constructor(apiClient?: ApiClient);
  createAttachmentForObject(): Promise<DataResponse<Attachment>>;
  createAttachmentForObject(opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Attachment>>>;
  createAttachmentForObject<F extends readonly CreateAttachmentForObjectOptFields[]>(opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Attachment, F>>>;
  deleteAttachment(attachment_gid: string): Promise<DataResponse<unknown>>;
  deleteAttachment(attachment_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteAttachment<F extends readonly DeleteAttachmentOptFields[]>(attachment_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getAttachment(attachment_gid: string): Promise<DataResponse<Attachment>>;
  getAttachment(attachment_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Attachment>>>;
  getAttachment<F extends readonly GetAttachmentOptFields[]>(attachment_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Attachment, F>>>;
  getAttachmentsForObject(parent: string): Promise<Collection<Attachment>>;
  getAttachmentsForObject(parent: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Attachment>>>;
  getAttachmentsForObject<F extends readonly GetAttachmentsForObjectOptFields[]>(parent: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Attachment, F>>>;
}

export class AuditLogAPIApi {
  constructor(apiClient?: ApiClient);
  getAuditLogEvents(workspace_gid: string): Promise<Collection<unknown>>;
}

export class BatchAPIApi {
  constructor(apiClient?: ApiClient);
  createBatchRequest(body: string): Promise<Collection<Batch>>;
  createBatchRequest(body: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Batch>>>;
  createBatchRequest<F extends readonly CreateBatchRequestOptFields[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Batch, F>>>;
}

export class BudgetsApi {
  constructor(apiClient?: ApiClient);
  createBudget(body: string): Promise<DataResponse<Budget>>;
  createBudget(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Budget>>>;
  createBudget<F extends readonly CreateBudgetOptFields[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Budget, F>>>;
  deleteBudget(budget_gid: string): Promise<DataResponse<unknown>>;
  deleteBudget(budget_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteBudget<F extends readonly DeleteBudgetOptFields[]>(budget_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getBudget(budget_gid: string): Promise<DataResponse<Budget>>;
  getBudget(budget_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Budget>>>;
  getBudget<F extends readonly GetBudgetOptFields[]>(budget_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Budget, F>>>;
  getBudgets(parent: string): Promise<Collection<Budget>>;
  getBudgets(parent: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Budget>>>;
  getBudgets<F extends readonly GetBudgetsOptFields[]>(parent: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Budget, F>>>;
  updateBudget(body: string, budget_gid: string): Promise<DataResponse<Budget>>;
  updateBudget(body: string, budget_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Budget>>>;
  updateBudget<F extends readonly UpdateBudgetOptFields[]>(body: string, budget_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Budget, F>>>;
}

export class CustomFieldSettingsApi {
  constructor(apiClient?: ApiClient);
  getCustomFieldSettingsForGoal(goal_gid: string): Promise<Collection<CustomFieldSetting>>;
  getCustomFieldSettingsForGoal(goal_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<CustomFieldSetting>>>;
  getCustomFieldSettingsForGoal<F extends readonly GetCustomFieldSettingsForGoalOptFields[]>(goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<CustomFieldSetting, F>>>;
  getCustomFieldSettingsForPortfolio(portfolio_gid: string): Promise<Collection<CustomFieldSetting>>;
  getCustomFieldSettingsForPortfolio(portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<CustomFieldSetting>>>;
  getCustomFieldSettingsForPortfolio<F extends readonly GetCustomFieldSettingsForPortfolioOptFields[]>(portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<CustomFieldSetting, F>>>;
  getCustomFieldSettingsForProject(project_gid: string): Promise<Collection<CustomFieldSetting>>;
  getCustomFieldSettingsForProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<CustomFieldSetting>>>;
  getCustomFieldSettingsForProject<F extends readonly GetCustomFieldSettingsForProjectOptFields[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<CustomFieldSetting, F>>>;
  getCustomFieldSettingsForTeam(team_gid: string): Promise<Collection<CustomFieldSetting>>;
  getCustomFieldSettingsForTeam(team_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<CustomFieldSetting>>>;
  getCustomFieldSettingsForTeam<F extends readonly GetCustomFieldSettingsForTeamOptFields[]>(team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<CustomFieldSetting, F>>>;
}

export class CustomFieldsApi {
  constructor(apiClient?: ApiClient);
  createCustomField(body: string): Promise<DataResponse<CustomField>>;
  createCustomField(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<CustomField>>>;
  createCustomField<F extends readonly CreateCustomFieldOptFields[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<CustomField, F>>>;
  createEnumOptionForCustomField(custom_field_gid: string): Promise<DataResponse<unknown>>;
  createEnumOptionForCustomField(custom_field_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  createEnumOptionForCustomField<F extends readonly CreateEnumOptionForCustomFieldOptFields[]>(custom_field_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  deleteCustomField(custom_field_gid: string): Promise<DataResponse<unknown>>;
  deleteCustomField(custom_field_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteCustomField<F extends readonly DeleteCustomFieldOptFields[]>(custom_field_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getCustomField(custom_field_gid: string): Promise<DataResponse<CustomField>>;
  getCustomField(custom_field_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<CustomField>>>;
  getCustomField<F extends readonly GetCustomFieldOptFields[]>(custom_field_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<CustomField, F>>>;
  getCustomFieldsForWorkspace(workspace_gid: string): Promise<Collection<CustomField>>;
  getCustomFieldsForWorkspace(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<CustomField>>>;
  getCustomFieldsForWorkspace<F extends readonly GetCustomFieldsForWorkspaceOptFields[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<CustomField, F>>>;
  insertEnumOptionForCustomField(custom_field_gid: string): Promise<DataResponse<unknown>>;
  insertEnumOptionForCustomField(custom_field_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  insertEnumOptionForCustomField<F extends readonly InsertEnumOptionForCustomFieldOptFields[]>(custom_field_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  updateCustomField(custom_field_gid: string): Promise<DataResponse<CustomField>>;
  updateCustomField(custom_field_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<CustomField>>>;
  updateCustomField<F extends readonly UpdateCustomFieldOptFields[]>(custom_field_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<CustomField, F>>>;
  updateEnumOption(enum_option_gid: string): Promise<DataResponse<unknown>>;
  updateEnumOption(enum_option_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  updateEnumOption<F extends readonly UpdateEnumOptionOptFields[]>(enum_option_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
}

export class CustomTypesApi {
  constructor(apiClient?: ApiClient);
  getCustomType(custom_type_gid: string): Promise<DataResponse<CustomType>>;
  getCustomType(custom_type_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<CustomType>>>;
  getCustomType<F extends readonly GetCustomTypeOptFields[]>(custom_type_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<CustomType, F>>>;
  getCustomTypes(project: string): Promise<Collection<CustomType>>;
  getCustomTypes(project: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<CustomType>>>;
  getCustomTypes<F extends readonly GetCustomTypesOptFields[]>(project: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<CustomType, F>>>;
}

export class EventsApi {
  constructor(apiClient?: ApiClient);
  getEvents(resource: string): Promise<Collection<Event>>;
  getEvents(resource: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Event>>>;
  getEvents<F extends readonly GetEventsOptFields[]>(resource: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Event, F>>>;
}

export class ExportsApi {
  constructor(apiClient?: ApiClient);
  createGraphExport(body: string): Promise<DataResponse<GraphExport>>;
  createResourceExport(body: string): Promise<DataResponse<ResourceExport>>;
}

export class GoalRelationshipsApi {
  constructor(apiClient?: ApiClient);
  addSupportingRelationship(body: string, goal_gid: string): Promise<DataResponse<GoalRelationship>>;
  addSupportingRelationship(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<GoalRelationship>>>;
  addSupportingRelationship<F extends readonly AddSupportingRelationshipOptFields[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<GoalRelationship, F>>>;
  getGoalRelationship(goal_relationship_gid: string): Promise<DataResponse<GoalRelationship>>;
  getGoalRelationship(goal_relationship_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<GoalRelationship>>>;
  getGoalRelationship<F extends readonly GetGoalRelationshipOptFields[]>(goal_relationship_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<GoalRelationship, F>>>;
  getGoalRelationships(supported_goal: string): Promise<Collection<GoalRelationship>>;
  getGoalRelationships(supported_goal: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<GoalRelationship>>>;
  getGoalRelationships<F extends readonly GetGoalRelationshipsOptFields[]>(supported_goal: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<GoalRelationship, F>>>;
  removeSupportingRelationship(body: string, goal_gid: string): Promise<DataResponse<unknown>>;
  removeSupportingRelationship(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  removeSupportingRelationship<F extends readonly RemoveSupportingRelationshipOptFields[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  updateGoalRelationship(body: string, goal_relationship_gid: string): Promise<DataResponse<GoalRelationship>>;
  updateGoalRelationship(body: string, goal_relationship_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<GoalRelationship>>>;
  updateGoalRelationship<F extends readonly UpdateGoalRelationshipOptFields[]>(body: string, goal_relationship_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<GoalRelationship, F>>>;
}

export class GoalsApi {
  constructor(apiClient?: ApiClient);
  addCustomFieldSettingForGoal(body: string, goal_gid: string): Promise<DataResponse<CustomFieldSetting>>;
  addCustomFieldSettingForGoal(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<CustomFieldSetting>>>;
  addCustomFieldSettingForGoal<F extends readonly AddCustomFieldSettingForGoalOptFields[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<CustomFieldSetting, F>>>;
  addFollowers(body: string, goal_gid: string): Promise<DataResponse<Goal>>;
  addFollowers(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Goal>>>;
  addFollowers<F extends readonly AddFollowersOptFields[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Goal, F>>>;
  createGoal(body: string): Promise<DataResponse<Goal>>;
  createGoal(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Goal>>>;
  createGoal<F extends readonly CreateGoalOptFields[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Goal, F>>>;
  createGoalMetric(body: string, goal_gid: string): Promise<DataResponse<Goal>>;
  createGoalMetric(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Goal>>>;
  createGoalMetric<F extends readonly CreateGoalMetricOptFields[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Goal, F>>>;
  deleteGoal(goal_gid: string): Promise<DataResponse<unknown>>;
  deleteGoal(goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteGoal<F extends readonly DeleteGoalOptFields[]>(goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getGoal(goal_gid: string): Promise<DataResponse<Goal>>;
  getGoal(goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Goal>>>;
  getGoal<F extends readonly GetGoalOptFields[]>(goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Goal, F>>>;
  getGoals(): Promise<Collection<Goal>>;
  getGoals(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Goal>>>;
  getGoals<F extends readonly GetGoalsOptFields[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Goal, F>>>;
  getParentGoalsForGoal(goal_gid: string): Promise<Collection<Goal>>;
  getParentGoalsForGoal(goal_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Goal>>>;
  getParentGoalsForGoal<F extends readonly GetParentGoalsForGoalOptFields[]>(goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Goal, F>>>;
  removeCustomFieldSettingForGoal(body: string, goal_gid: string): Promise<DataResponse<unknown>>;
  removeCustomFieldSettingForGoal(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  removeCustomFieldSettingForGoal<F extends readonly RemoveCustomFieldSettingForGoalOptFields[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  removeFollowers(body: string, goal_gid: string): Promise<DataResponse<Goal>>;
  removeFollowers(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Goal>>>;
  removeFollowers<F extends readonly RemoveFollowersOptFields[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Goal, F>>>;
  updateGoal(body: string, goal_gid: string): Promise<DataResponse<Goal>>;
  updateGoal(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Goal>>>;
  updateGoal<F extends readonly UpdateGoalOptFields[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Goal, F>>>;
  updateGoalMetric(body: string, goal_gid: string): Promise<DataResponse<Goal>>;
  updateGoalMetric(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Goal>>>;
  updateGoalMetric<F extends readonly UpdateGoalMetricOptFields[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Goal, F>>>;
}

export class JobsApi {
  constructor(apiClient?: ApiClient);
  getJob(job_gid: string): Promise<DataResponse<Job>>;
  getJob(job_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Job>>>;
  getJob<F extends readonly GetJobOptFields[]>(job_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Job, F>>>;
}

export class MembershipsApi {
  constructor(apiClient?: ApiClient);
  createMembership(): Promise<DataResponse<Membership>>;
  createMembership(opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Membership>>>;
  createMembership<F extends readonly CreateMembershipOptFields[]>(opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Membership, F>>>;
  deleteMembership(membership_gid: string): Promise<DataResponse<unknown>>;
  deleteMembership(membership_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteMembership<F extends readonly DeleteMembershipOptFields[]>(membership_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getMembership(membership_gid: string): Promise<DataResponse<Membership>>;
  getMembership(membership_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Membership>>>;
  getMembership<F extends readonly GetMembershipOptFields[]>(membership_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Membership, F>>>;
  getMemberships(): Promise<Collection<Membership>>;
  getMemberships(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Membership>>>;
  getMemberships<F extends readonly GetMembershipsOptFields[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Membership, F>>>;
  updateMembership(body: string, membership_gid: string): Promise<DataResponse<Membership>>;
  updateMembership(body: string, membership_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Membership>>>;
  updateMembership<F extends readonly UpdateMembershipOptFields[]>(body: string, membership_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Membership, F>>>;
}

export class OrganizationExportsApi {
  constructor(apiClient?: ApiClient);
  createOrganizationExport(body: string): Promise<DataResponse<OrganizationExport>>;
  createOrganizationExport(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<OrganizationExport>>>;
  createOrganizationExport<F extends readonly CreateOrganizationExportOptFields[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<OrganizationExport, F>>>;
  getOrganizationExport(organization_export_gid: string): Promise<DataResponse<OrganizationExport>>;
  getOrganizationExport(organization_export_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<OrganizationExport>>>;
  getOrganizationExport<F extends readonly GetOrganizationExportOptFields[]>(organization_export_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<OrganizationExport, F>>>;
}

export class PortfolioMembershipsApi {
  constructor(apiClient?: ApiClient);
  getPortfolioMembership(portfolio_membership_gid: string): Promise<DataResponse<DeprecatedPortfolioMembership>>;
  getPortfolioMembership(portfolio_membership_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<DeprecatedPortfolioMembership>>>;
  getPortfolioMembership<F extends readonly GetPortfolioMembershipOptFields[]>(portfolio_membership_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<DeprecatedPortfolioMembership, F>>>;
  getPortfolioMemberships(): Promise<Collection<DeprecatedPortfolioMembership>>;
  getPortfolioMemberships(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<DeprecatedPortfolioMembership>>>;
  getPortfolioMemberships<F extends readonly GetPortfolioMembershipsOptFields[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<DeprecatedPortfolioMembership, F>>>;
  getPortfolioMembershipsForPortfolio(portfolio_gid: string): Promise<Collection<DeprecatedPortfolioMembership>>;
  getPortfolioMembershipsForPortfolio(portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<DeprecatedPortfolioMembership>>>;
  getPortfolioMembershipsForPortfolio<F extends readonly GetPortfolioMembershipsForPortfolioOptFields[]>(portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<DeprecatedPortfolioMembership, F>>>;
}

export class PortfoliosApi {
  constructor(apiClient?: ApiClient);
  addCustomFieldSettingForPortfolio(body: string, portfolio_gid: string): Promise<DataResponse<CustomFieldSetting>>;
  addCustomFieldSettingForPortfolio(body: string, portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<CustomFieldSetting>>>;
  addCustomFieldSettingForPortfolio<F extends readonly AddCustomFieldSettingForPortfolioOptFields[]>(body: string, portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<CustomFieldSetting, F>>>;
  addItemForPortfolio(body: string, portfolio_gid: string): Promise<DataResponse<unknown>>;
  addItemForPortfolio(body: string, portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  addItemForPortfolio<F extends readonly AddItemForPortfolioOptFields[]>(body: string, portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  addMembersForPortfolio(body: string, portfolio_gid: string): Promise<DataResponse<Portfolio>>;
  addMembersForPortfolio(body: string, portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Portfolio>>>;
  addMembersForPortfolio<F extends readonly AddMembersForPortfolioOptFields[]>(body: string, portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Portfolio, F>>>;
  createPortfolio(body: string): Promise<DataResponse<Portfolio>>;
  createPortfolio(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Portfolio>>>;
  createPortfolio<F extends readonly CreatePortfolioOptFields[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Portfolio, F>>>;
  deletePortfolio(portfolio_gid: string): Promise<DataResponse<unknown>>;
  deletePortfolio(portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deletePortfolio<F extends readonly DeletePortfolioOptFields[]>(portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getItemsForPortfolio(portfolio_gid: string): Promise<Collection<Project>>;
  getItemsForPortfolio(portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Project>>>;
  getItemsForPortfolio<F extends readonly GetItemsForPortfolioOptFields[]>(portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Project, F>>>;
  getPortfolio(portfolio_gid: string): Promise<DataResponse<Portfolio>>;
  getPortfolio(portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Portfolio>>>;
  getPortfolio<F extends readonly GetPortfolioOptFields[]>(portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Portfolio, F>>>;
  getPortfolios(workspace: string): Promise<Collection<Portfolio>>;
  getPortfolios(workspace: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Portfolio>>>;
  getPortfolios<F extends readonly GetPortfoliosOptFields[]>(workspace: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Portfolio, F>>>;
  removeCustomFieldSettingForPortfolio(body: string, portfolio_gid: string): Promise<DataResponse<unknown>>;
  removeCustomFieldSettingForPortfolio(body: string, portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  removeCustomFieldSettingForPortfolio<F extends readonly RemoveCustomFieldSettingForPortfolioOptFields[]>(body: string, portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  removeItemForPortfolio(body: string, portfolio_gid: string): Promise<DataResponse<unknown>>;
  removeItemForPortfolio(body: string, portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  removeItemForPortfolio<F extends readonly RemoveItemForPortfolioOptFields[]>(body: string, portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  removeMembersForPortfolio(body: string, portfolio_gid: string): Promise<DataResponse<Portfolio>>;
  removeMembersForPortfolio(body: string, portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Portfolio>>>;
  removeMembersForPortfolio<F extends readonly RemoveMembersForPortfolioOptFields[]>(body: string, portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Portfolio, F>>>;
  updatePortfolio(body: string, portfolio_gid: string): Promise<DataResponse<Portfolio>>;
  updatePortfolio(body: string, portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Portfolio>>>;
  updatePortfolio<F extends readonly UpdatePortfolioOptFields[]>(body: string, portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Portfolio, F>>>;
}

export class ProjectBriefsApi {
  constructor(apiClient?: ApiClient);
  createProjectBrief(body: string, project_gid: string): Promise<DataResponse<ProjectBrief>>;
  createProjectBrief(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectBrief>>>;
  createProjectBrief<F extends readonly CreateProjectBriefOptFields[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectBrief, F>>>;
  deleteProjectBrief(project_brief_gid: string): Promise<DataResponse<unknown>>;
  deleteProjectBrief(project_brief_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteProjectBrief<F extends readonly DeleteProjectBriefOptFields[]>(project_brief_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getProjectBrief(project_brief_gid: string): Promise<DataResponse<ProjectBrief>>;
  getProjectBrief(project_brief_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectBrief>>>;
  getProjectBrief<F extends readonly GetProjectBriefOptFields[]>(project_brief_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectBrief, F>>>;
  updateProjectBrief(body: string, project_brief_gid: string): Promise<DataResponse<ProjectBrief>>;
  updateProjectBrief(body: string, project_brief_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectBrief>>>;
  updateProjectBrief<F extends readonly UpdateProjectBriefOptFields[]>(body: string, project_brief_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectBrief, F>>>;
}

export class ProjectMembershipsApi {
  constructor(apiClient?: ApiClient);
  getProjectMembership(project_membership_gid: string): Promise<DataResponse<ProjectMembershipNormal>>;
  getProjectMembership(project_membership_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectMembershipNormal>>>;
  getProjectMembership<F extends readonly GetProjectMembershipOptFields[]>(project_membership_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectMembershipNormal, F>>>;
  getProjectMembershipsForProject(project_gid: string): Promise<Collection<ProjectMembershipCompact>>;
  getProjectMembershipsForProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<ProjectMembershipCompact>>>;
  getProjectMembershipsForProject<F extends readonly GetProjectMembershipsForProjectOptFields[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<ProjectMembershipCompact, F>>>;
}

export class ProjectStatusesApi {
  constructor(apiClient?: ApiClient);
  createProjectStatusForProject(body: string, project_gid: string): Promise<DataResponse<ProjectStatus>>;
  createProjectStatusForProject(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectStatus>>>;
  createProjectStatusForProject<F extends readonly CreateProjectStatusForProjectOptFields[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectStatus, F>>>;
  deleteProjectStatus(project_status_gid: string): Promise<DataResponse<unknown>>;
  deleteProjectStatus(project_status_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteProjectStatus<F extends readonly DeleteProjectStatusOptFields[]>(project_status_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getProjectStatus(project_status_gid: string): Promise<DataResponse<ProjectStatus>>;
  getProjectStatus(project_status_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectStatus>>>;
  getProjectStatus<F extends readonly GetProjectStatusOptFields[]>(project_status_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectStatus, F>>>;
  getProjectStatusesForProject(project_gid: string): Promise<Collection<ProjectStatus>>;
  getProjectStatusesForProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<ProjectStatus>>>;
  getProjectStatusesForProject<F extends readonly GetProjectStatusesForProjectOptFields[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<ProjectStatus, F>>>;
}

export class ProjectTemplatesApi {
  constructor(apiClient?: ApiClient);
  deleteProjectTemplate(project_template_gid: string): Promise<DataResponse<unknown>>;
  deleteProjectTemplate(project_template_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteProjectTemplate<F extends readonly DeleteProjectTemplateOptFields[]>(project_template_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getProjectTemplate(project_template_gid: string): Promise<DataResponse<ProjectTemplate>>;
  getProjectTemplate(project_template_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectTemplate>>>;
  getProjectTemplate<F extends readonly GetProjectTemplateOptFields[]>(project_template_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectTemplate, F>>>;
  getProjectTemplates(): Promise<Collection<ProjectTemplate>>;
  getProjectTemplates(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<ProjectTemplate>>>;
  getProjectTemplates<F extends readonly GetProjectTemplatesOptFields[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<ProjectTemplate, F>>>;
  getProjectTemplatesForTeam(team_gid: string): Promise<Collection<ProjectTemplate>>;
  getProjectTemplatesForTeam(team_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<ProjectTemplate>>>;
  getProjectTemplatesForTeam<F extends readonly GetProjectTemplatesForTeamOptFields[]>(team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<ProjectTemplate, F>>>;
  instantiateProject(project_template_gid: string): Promise<DataResponse<Job>>;
  instantiateProject(project_template_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Job>>>;
  instantiateProject<F extends readonly InstantiateProjectOptFields[]>(project_template_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Job, F>>>;
}

export class ProjectsApi {
  constructor(apiClient?: ApiClient);
  addCustomFieldSettingForProject(body: string, project_gid: string): Promise<DataResponse<CustomFieldSetting>>;
  addCustomFieldSettingForProject(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<CustomFieldSetting>>>;
  addCustomFieldSettingForProject<F extends readonly AddCustomFieldSettingForProjectOptFields[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<CustomFieldSetting, F>>>;
  addFollowersForProject(body: string, project_gid: string): Promise<DataResponse<Project>>;
  addFollowersForProject(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Project>>>;
  addFollowersForProject<F extends readonly AddFollowersForProjectOptFields[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Project, F>>>;
  addMembersForProject(body: string, project_gid: string): Promise<DataResponse<Project>>;
  addMembersForProject(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Project>>>;
  addMembersForProject<F extends readonly AddMembersForProjectOptFields[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Project, F>>>;
  createProject(body: string): Promise<DataResponse<Project>>;
  createProject(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Project>>>;
  createProject<F extends readonly CreateProjectOptFields[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Project, F>>>;
  createProjectForTeam(body: string, team_gid: string): Promise<DataResponse<Project>>;
  createProjectForTeam(body: string, team_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Project>>>;
  createProjectForTeam<F extends readonly CreateProjectForTeamOptFields[]>(body: string, team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Project, F>>>;
  createProjectForWorkspace(body: string, workspace_gid: string): Promise<DataResponse<Project>>;
  createProjectForWorkspace(body: string, workspace_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Project>>>;
  createProjectForWorkspace<F extends readonly CreateProjectForWorkspaceOptFields[]>(body: string, workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Project, F>>>;
  deleteProject(project_gid: string): Promise<DataResponse<unknown>>;
  deleteProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteProject<F extends readonly DeleteProjectOptFields[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  duplicateProject(project_gid: string): Promise<DataResponse<Job>>;
  duplicateProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Job>>>;
  duplicateProject<F extends readonly DuplicateProjectOptFields[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Job, F>>>;
  getProject(project_gid: string): Promise<DataResponse<Project>>;
  getProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Project>>>;
  getProject<F extends readonly GetProjectOptFields[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Project, F>>>;
  getProjects(): Promise<Collection<Project>>;
  getProjects(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Project>>>;
  getProjects<F extends readonly GetProjectsOptFields[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Project, F>>>;
  getProjectsForTask(task_gid: string): Promise<Collection<Project>>;
  getProjectsForTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Project>>>;
  getProjectsForTask<F extends readonly GetProjectsForTaskOptFields[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Project, F>>>;
  getProjectsForTeam(team_gid: string): Promise<Collection<Project>>;
  getProjectsForTeam(team_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Project>>>;
  getProjectsForTeam<F extends readonly GetProjectsForTeamOptFields[]>(team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Project, F>>>;
  getProjectsForWorkspace(workspace_gid: string): Promise<Collection<Project>>;
  getProjectsForWorkspace(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Project>>>;
  getProjectsForWorkspace<F extends readonly GetProjectsForWorkspaceOptFields[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Project, F>>>;
  getTaskCountsForProject(project_gid: string): Promise<DataResponse<TaskCount>>;
  getTaskCountsForProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TaskCount>>>;
  getTaskCountsForProject<F extends readonly GetTaskCountsForProjectOptFields[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TaskCount, F>>>;
  projectSaveAsTemplate(body: string, project_gid: string): Promise<DataResponse<Job>>;
  projectSaveAsTemplate(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Job>>>;
  projectSaveAsTemplate<F extends readonly ProjectSaveAsTemplateOptFields[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Job, F>>>;
  removeCustomFieldSettingForProject(body: string, project_gid: string): Promise<DataResponse<unknown>>;
  removeCustomFieldSettingForProject(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  removeCustomFieldSettingForProject<F extends readonly RemoveCustomFieldSettingForProjectOptFields[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  removeFollowersForProject(body: string, project_gid: string): Promise<DataResponse<Project>>;
  removeFollowersForProject(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Project>>>;
  removeFollowersForProject<F extends readonly RemoveFollowersForProjectOptFields[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Project, F>>>;
  removeMembersForProject(body: string, project_gid: string): Promise<DataResponse<Project>>;
  removeMembersForProject(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Project>>>;
  removeMembersForProject<F extends readonly RemoveMembersForProjectOptFields[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Project, F>>>;
  updateProject(body: string, project_gid: string): Promise<DataResponse<Project>>;
  updateProject(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Project>>>;
  updateProject<F extends readonly UpdateProjectOptFields[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Project, F>>>;
}

export class RatesApi {
  constructor(apiClient?: ApiClient);
  createRate(body: string): Promise<DataResponse<Rate>>;
  createRate(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Rate>>>;
  createRate<F extends readonly CreateRateOptFields[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Rate, F>>>;
  deleteRate(rate_gid: string): Promise<DataResponse<unknown>>;
  deleteRate(rate_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteRate<F extends readonly DeleteRateOptFields[]>(rate_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getRate(rate_gid: string): Promise<DataResponse<Rate>>;
  getRate(rate_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Rate>>>;
  getRate<F extends readonly GetRateOptFields[]>(rate_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Rate, F>>>;
  getRates(): Promise<Collection<unknown>>;
  getRates(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<unknown>>>;
  getRates<F extends readonly GetRatesOptFields[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<unknown, F>>>;
  updateRate(body: string, rate_gid: string): Promise<DataResponse<Rate>>;
  updateRate(body: string, rate_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Rate>>>;
  updateRate<F extends readonly UpdateRateOptFields[]>(body: string, rate_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Rate, F>>>;
}

export class ReactionsApi {
  constructor(apiClient?: ApiClient);
  getReactionsOnObject(target: string, emoji_base: string): Promise<Collection<unknown>>;
}

export class RolesApi {
  constructor(apiClient?: ApiClient);
  createRole(body: string): Promise<DataResponse<RbacRole>>;
  createRole(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<RbacRole>>>;
  createRole<F extends readonly CreateRoleOptFields[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<RbacRole, F>>>;
  deleteRole(role_gid: string): Promise<DataResponse<unknown>>;
  deleteRole(role_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteRole<F extends readonly DeleteRoleOptFields[]>(role_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getRole(role_gid: string): Promise<DataResponse<RbacRole>>;
  getRole(role_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<RbacRole>>>;
  getRole<F extends readonly GetRoleOptFields[]>(role_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<RbacRole, F>>>;
  getRoles(): Promise<Collection<RbacRole>>;
  getRoles(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<RbacRole>>>;
  getRoles<F extends readonly GetRolesOptFields[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<RbacRole, F>>>;
  updateRole(body: string, role_gid: string): Promise<DataResponse<RbacRole>>;
  updateRole(body: string, role_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<RbacRole>>>;
  updateRole<F extends readonly UpdateRoleOptFields[]>(body: string, role_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<RbacRole, F>>>;
}

export class RulesApi {
  constructor(apiClient?: ApiClient);
  triggerRule(body: string, rule_trigger_gid: string): Promise<DataResponse<RuleTrigger>>;
}

export class SectionsApi {
  constructor(apiClient?: ApiClient);
  addTaskForSection(section_gid: string): Promise<DataResponse<unknown>>;
  addTaskForSection(section_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  addTaskForSection<F extends readonly AddTaskForSectionOptFields[]>(section_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  createSectionForProject(project_gid: string): Promise<DataResponse<Section>>;
  createSectionForProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Section>>>;
  createSectionForProject<F extends readonly CreateSectionForProjectOptFields[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Section, F>>>;
  deleteSection(section_gid: string): Promise<DataResponse<unknown>>;
  deleteSection(section_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteSection<F extends readonly DeleteSectionOptFields[]>(section_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getSection(section_gid: string): Promise<DataResponse<Section>>;
  getSection(section_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Section>>>;
  getSection<F extends readonly GetSectionOptFields[]>(section_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Section, F>>>;
  getSectionsForProject(project_gid: string): Promise<Collection<Section>>;
  getSectionsForProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Section>>>;
  getSectionsForProject<F extends readonly GetSectionsForProjectOptFields[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Section, F>>>;
  insertSectionForProject(project_gid: string): Promise<DataResponse<unknown>>;
  insertSectionForProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  insertSectionForProject<F extends readonly InsertSectionForProjectOptFields[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  updateSection(section_gid: string): Promise<DataResponse<Section>>;
  updateSection(section_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Section>>>;
  updateSection<F extends readonly UpdateSectionOptFields[]>(section_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Section, F>>>;
}

export class StatusUpdatesApi {
  constructor(apiClient?: ApiClient);
  createStatusForObject(body: string): Promise<DataResponse<StatusUpdate>>;
  createStatusForObject(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<StatusUpdate>>>;
  createStatusForObject<F extends readonly CreateStatusForObjectOptFields[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<StatusUpdate, F>>>;
  deleteStatus(status_update_gid: string): Promise<DataResponse<unknown>>;
  deleteStatus(status_update_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteStatus<F extends readonly DeleteStatusOptFields[]>(status_update_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getStatus(status_update_gid: string): Promise<DataResponse<StatusUpdate>>;
  getStatus(status_update_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<StatusUpdate>>>;
  getStatus<F extends readonly GetStatusOptFields[]>(status_update_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<StatusUpdate, F>>>;
  getStatusesForObject(parent: string): Promise<Collection<StatusUpdate>>;
  getStatusesForObject(parent: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<StatusUpdate>>>;
  getStatusesForObject<F extends readonly GetStatusesForObjectOptFields[]>(parent: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<StatusUpdate, F>>>;
}

export class StoriesApi {
  constructor(apiClient?: ApiClient);
  createStoryForTask(body: string, task_gid: string): Promise<DataResponse<Story>>;
  createStoryForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Story>>>;
  createStoryForTask<F extends readonly CreateStoryForTaskOptFields[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Story, F>>>;
  deleteStory(story_gid: string): Promise<DataResponse<unknown>>;
  deleteStory(story_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteStory<F extends readonly DeleteStoryOptFields[]>(story_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getStoriesForTask(task_gid: string): Promise<Collection<Story>>;
  getStoriesForTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Story>>>;
  getStoriesForTask<F extends readonly GetStoriesForTaskOptFields[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Story, F>>>;
  getStory(story_gid: string): Promise<DataResponse<Story>>;
  getStory(story_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Story>>>;
  getStory<F extends readonly GetStoryOptFields[]>(story_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Story, F>>>;
  updateStory(body: string, story_gid: string): Promise<DataResponse<Story>>;
  updateStory(body: string, story_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Story>>>;
  updateStory<F extends readonly UpdateStoryOptFields[]>(body: string, story_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Story, F>>>;
}

export class TagsApi {
  constructor(apiClient?: ApiClient);
  createTag(body: string): Promise<DataResponse<Tag>>;
  createTag(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Tag>>>;
  createTag<F extends readonly CreateTagOptFields[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Tag, F>>>;
  createTagForWorkspace(body: string, workspace_gid: string): Promise<DataResponse<Tag>>;
  createTagForWorkspace(body: string, workspace_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Tag>>>;
  createTagForWorkspace<F extends readonly CreateTagForWorkspaceOptFields[]>(body: string, workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Tag, F>>>;
  deleteTag(tag_gid: string): Promise<DataResponse<unknown>>;
  deleteTag(tag_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteTag<F extends readonly DeleteTagOptFields[]>(tag_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getTag(tag_gid: string): Promise<DataResponse<Tag>>;
  getTag(tag_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Tag>>>;
  getTag<F extends readonly GetTagOptFields[]>(tag_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Tag, F>>>;
  getTags(): Promise<Collection<Tag>>;
  getTags(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Tag>>>;
  getTags<F extends readonly GetTagsOptFields[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Tag, F>>>;
  getTagsForTask(task_gid: string): Promise<Collection<Tag>>;
  getTagsForTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Tag>>>;
  getTagsForTask<F extends readonly GetTagsForTaskOptFields[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Tag, F>>>;
  getTagsForWorkspace(workspace_gid: string): Promise<Collection<Tag>>;
  getTagsForWorkspace(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Tag>>>;
  getTagsForWorkspace<F extends readonly GetTagsForWorkspaceOptFields[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Tag, F>>>;
  updateTag(body: string, tag_gid: string): Promise<DataResponse<Tag>>;
  updateTag(body: string, tag_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Tag>>>;
  updateTag<F extends readonly UpdateTagOptFields[]>(body: string, tag_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Tag, F>>>;
}

export class TaskTemplatesApi {
  constructor(apiClient?: ApiClient);
  deleteTaskTemplate(task_template_gid: string): Promise<DataResponse<unknown>>;
  deleteTaskTemplate(task_template_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteTaskTemplate<F extends readonly DeleteTaskTemplateOptFields[]>(task_template_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getTaskTemplate(task_template_gid: string): Promise<DataResponse<TaskTemplate>>;
  getTaskTemplate(task_template_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TaskTemplate>>>;
  getTaskTemplate<F extends readonly GetTaskTemplateOptFields[]>(task_template_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TaskTemplate, F>>>;
  getTaskTemplates(): Promise<Collection<TaskTemplate>>;
  getTaskTemplates(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TaskTemplate>>>;
  getTaskTemplates<F extends readonly GetTaskTemplatesOptFields[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TaskTemplate, F>>>;
  instantiateTask(task_template_gid: string): Promise<DataResponse<Job>>;
  instantiateTask(task_template_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Job>>>;
  instantiateTask<F extends readonly InstantiateTaskOptFields[]>(task_template_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Job, F>>>;
}

export class TasksApi {
  constructor(apiClient?: ApiClient);
  addDependenciesForTask(body: string, task_gid: string): Promise<DataResponse<unknown>>;
  addDependenciesForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  addDependenciesForTask<F extends readonly AddDependenciesForTaskOptFields[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  addDependentsForTask(body: string, task_gid: string): Promise<DataResponse<unknown>>;
  addDependentsForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  addDependentsForTask<F extends readonly AddDependentsForTaskOptFields[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  addFollowersForTask(body: string, task_gid: string): Promise<DataResponse<Task>>;
  addFollowersForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Task>>>;
  addFollowersForTask<F extends readonly AddFollowersForTaskOptFields[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Task, F>>>;
  addProjectForTask(body: string, task_gid: string): Promise<DataResponse<unknown>>;
  addProjectForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  addProjectForTask<F extends readonly AddProjectForTaskOptFields[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  addTagForTask(body: string, task_gid: string): Promise<DataResponse<unknown>>;
  addTagForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  addTagForTask<F extends readonly AddTagForTaskOptFields[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  createSubtaskForTask(body: string, task_gid: string): Promise<DataResponse<Task>>;
  createSubtaskForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Task>>>;
  createSubtaskForTask<F extends readonly CreateSubtaskForTaskOptFields[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Task, F>>>;
  createTask(body: string): Promise<DataResponse<Task>>;
  createTask(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Task>>>;
  createTask<F extends readonly CreateTaskOptFields[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Task, F>>>;
  deleteTask(task_gid: string): Promise<DataResponse<unknown>>;
  deleteTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteTask<F extends readonly DeleteTaskOptFields[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  duplicateTask(body: string, task_gid: string): Promise<DataResponse<Job>>;
  duplicateTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Job>>>;
  duplicateTask<F extends readonly DuplicateTaskOptFields[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Job, F>>>;
  getDependenciesForTask(task_gid: string): Promise<Collection<Task>>;
  getDependenciesForTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Task>>>;
  getDependenciesForTask<F extends readonly GetDependenciesForTaskOptFields[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Task, F>>>;
  getDependentsForTask(task_gid: string): Promise<Collection<Task>>;
  getDependentsForTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Task>>>;
  getDependentsForTask<F extends readonly GetDependentsForTaskOptFields[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Task, F>>>;
  getSubtasksForTask(task_gid: string): Promise<Collection<Task>>;
  getSubtasksForTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Task>>>;
  getSubtasksForTask<F extends readonly GetSubtasksForTaskOptFields[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Task, F>>>;
  getTask(task_gid: string): Promise<DataResponse<Task>>;
  getTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Task>>>;
  getTask<F extends readonly GetTaskOptFields[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Task, F>>>;
  getTaskForCustomID(workspace_gid: string, custom_id: string): Promise<DataResponse<Task>>;
  getTaskForCustomID(workspace_gid: string, custom_id: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Task>>>;
  getTaskForCustomID<F extends readonly GetTaskForCustomIDOptFields[]>(workspace_gid: string, custom_id: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Task, F>>>;
  getTasks(): Promise<Collection<Task>>;
  getTasks(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Task>>>;
  getTasks<F extends readonly GetTasksOptFields[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Task, F>>>;
  getTasksForProject(project_gid: string): Promise<Collection<Task>>;
  getTasksForProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Task>>>;
  getTasksForProject<F extends readonly GetTasksForProjectOptFields[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Task, F>>>;
  getTasksForSection(section_gid: string): Promise<Collection<Task>>;
  getTasksForSection(section_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Task>>>;
  getTasksForSection<F extends readonly GetTasksForSectionOptFields[]>(section_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Task, F>>>;
  getTasksForTag(tag_gid: string): Promise<Collection<Task>>;
  getTasksForTag(tag_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Task>>>;
  getTasksForTag<F extends readonly GetTasksForTagOptFields[]>(tag_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Task, F>>>;
  getTasksForUserTaskList(user_task_list_gid: string): Promise<Collection<Task>>;
  getTasksForUserTaskList(user_task_list_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Task>>>;
  getTasksForUserTaskList<F extends readonly GetTasksForUserTaskListOptFields[]>(user_task_list_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Task, F>>>;
  removeDependenciesForTask(body: string, task_gid: string): Promise<DataResponse<unknown>>;
  removeDependenciesForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  removeDependenciesForTask<F extends readonly RemoveDependenciesForTaskOptFields[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  removeDependentsForTask(body: string, task_gid: string): Promise<DataResponse<unknown>>;
  removeDependentsForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  removeDependentsForTask<F extends readonly RemoveDependentsForTaskOptFields[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  removeFollowerForTask(body: string, task_gid: string): Promise<DataResponse<Task>>;
  removeFollowerForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Task>>>;
  removeFollowerForTask<F extends readonly RemoveFollowerForTaskOptFields[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Task, F>>>;
  removeProjectForTask(body: string, task_gid: string): Promise<DataResponse<unknown>>;
  removeProjectForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  removeProjectForTask<F extends readonly RemoveProjectForTaskOptFields[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  removeTagForTask(body: string, task_gid: string): Promise<DataResponse<unknown>>;
  removeTagForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  removeTagForTask<F extends readonly RemoveTagForTaskOptFields[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  searchTasksForWorkspace(workspace_gid: string): Promise<Collection<Task>>;
  searchTasksForWorkspace(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Task>>>;
  searchTasksForWorkspace<F extends readonly SearchTasksForWorkspaceOptFields[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Task, F>>>;
  setParentForTask(body: string, task_gid: string): Promise<DataResponse<Task>>;
  setParentForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Task>>>;
  setParentForTask<F extends readonly SetParentForTaskOptFields[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Task, F>>>;
  updateTask(body: string, task_gid: string): Promise<DataResponse<Task>>;
  updateTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Task>>>;
  updateTask<F extends readonly UpdateTaskOptFields[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Task, F>>>;
}

export class TeamMembershipsApi {
  constructor(apiClient?: ApiClient);
  getTeamMembership(team_membership_gid: string): Promise<DataResponse<TeamMembership>>;
  getTeamMembership(team_membership_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TeamMembership>>>;
  getTeamMembership<F extends readonly GetTeamMembershipOptFields[]>(team_membership_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TeamMembership, F>>>;
  getTeamMemberships(): Promise<Collection<TeamMembership>>;
  getTeamMemberships(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TeamMembership>>>;
  getTeamMemberships<F extends readonly GetTeamMembershipsOptFields[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TeamMembership, F>>>;
  getTeamMembershipsForTeam(team_gid: string): Promise<Collection<TeamMembership>>;
  getTeamMembershipsForTeam(team_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TeamMembership>>>;
  getTeamMembershipsForTeam<F extends readonly GetTeamMembershipsForTeamOptFields[]>(team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TeamMembership, F>>>;
  getTeamMembershipsForUser(user_gid: string, workspace: string): Promise<Collection<TeamMembership>>;
  getTeamMembershipsForUser(user_gid: string, workspace: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TeamMembership>>>;
  getTeamMembershipsForUser<F extends readonly GetTeamMembershipsForUserOptFields[]>(user_gid: string, workspace: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TeamMembership, F>>>;
}

export class TeamsApi {
  constructor(apiClient?: ApiClient);
  addUserForTeam(body: string, team_gid: string): Promise<DataResponse<TeamMembership>>;
  addUserForTeam(body: string, team_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TeamMembership>>>;
  addUserForTeam<F extends readonly AddUserForTeamOptFields[]>(body: string, team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TeamMembership, F>>>;
  createTeam(body: string): Promise<DataResponse<Team>>;
  createTeam(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Team>>>;
  createTeam<F extends readonly CreateTeamOptFields[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Team, F>>>;
  getTeam(team_gid: string): Promise<DataResponse<Team>>;
  getTeam(team_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Team>>>;
  getTeam<F extends readonly GetTeamOptFields[]>(team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Team, F>>>;
  getTeamsForUser(user_gid: string, organization: string): Promise<Collection<Team>>;
  getTeamsForUser(user_gid: string, organization: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Team>>>;
  getTeamsForUser<F extends readonly GetTeamsForUserOptFields[]>(user_gid: string, organization: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Team, F>>>;
  getTeamsForWorkspace(workspace_gid: string): Promise<Collection<Team>>;
  getTeamsForWorkspace(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Team>>>;
  getTeamsForWorkspace<F extends readonly GetTeamsForWorkspaceOptFields[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Team, F>>>;
  removeUserForTeam(body: string, team_gid: string): Promise<DataResponse<unknown>>;
  removeUserForTeam(body: string, team_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  removeUserForTeam<F extends readonly RemoveUserForTeamOptFields[]>(body: string, team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  updateTeam(body: string, team_gid: string): Promise<DataResponse<Team>>;
  updateTeam(body: string, team_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Team>>>;
  updateTeam<F extends readonly UpdateTeamOptFields[]>(body: string, team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Team, F>>>;
}

export class TimePeriodsApi {
  constructor(apiClient?: ApiClient);
  getTimePeriod(time_period_gid: string): Promise<DataResponse<TimePeriod>>;
  getTimePeriod(time_period_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TimePeriod>>>;
  getTimePeriod<F extends readonly GetTimePeriodOptFields[]>(time_period_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TimePeriod, F>>>;
  getTimePeriods(workspace: string): Promise<Collection<TimePeriod>>;
  getTimePeriods(workspace: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TimePeriod>>>;
  getTimePeriods<F extends readonly GetTimePeriodsOptFields[]>(workspace: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TimePeriod, F>>>;
}

export class TimeTrackingEntriesApi {
  constructor(apiClient?: ApiClient);
  createTimeTrackingEntry(body: string, task_gid: string): Promise<DataResponse<unknown>>;
  createTimeTrackingEntry(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  createTimeTrackingEntry<F extends readonly CreateTimeTrackingEntryOptFields[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  deleteTimeTrackingEntry(time_tracking_entry_gid: string): Promise<DataResponse<unknown>>;
  deleteTimeTrackingEntry(time_tracking_entry_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteTimeTrackingEntry<F extends readonly DeleteTimeTrackingEntryOptFields[]>(time_tracking_entry_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getTimeTrackingEntries(): Promise<Collection<unknown>>;
  getTimeTrackingEntries(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<unknown>>>;
  getTimeTrackingEntries<F extends readonly GetTimeTrackingEntriesOptFields[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<unknown, F>>>;
  getTimeTrackingEntriesForTask(task_gid: string): Promise<Collection<unknown>>;
  getTimeTrackingEntriesForTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<unknown>>>;
  getTimeTrackingEntriesForTask<F extends readonly GetTimeTrackingEntriesForTaskOptFields[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<unknown, F>>>;
  getTimeTrackingEntry(time_tracking_entry_gid: string): Promise<DataResponse<unknown>>;
  getTimeTrackingEntry(time_tracking_entry_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  getTimeTrackingEntry<F extends readonly GetTimeTrackingEntryOptFields[]>(time_tracking_entry_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  updateTimeTrackingEntry(body: string, time_tracking_entry_gid: string): Promise<DataResponse<unknown>>;
  updateTimeTrackingEntry(body: string, time_tracking_entry_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  updateTimeTrackingEntry<F extends readonly UpdateTimeTrackingEntryOptFields[]>(body: string, time_tracking_entry_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
}

export class TypeaheadApi {
  constructor(apiClient?: ApiClient);
  typeaheadForWorkspace(workspace_gid: string, resource_type: string): Promise<Collection<unknown>>;
  typeaheadForWorkspace(workspace_gid: string, resource_type: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<unknown>>>;
  typeaheadForWorkspace<F extends readonly TypeaheadForWorkspaceOptFields[]>(workspace_gid: string, resource_type: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<unknown, F>>>;
}

export class UserTaskListsApi {
  constructor(apiClient?: ApiClient);
  getUserTaskList(user_task_list_gid: string): Promise<DataResponse<UserTaskList>>;
  getUserTaskList(user_task_list_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<UserTaskList>>>;
  getUserTaskList<F extends readonly GetUserTaskListOptFields[]>(user_task_list_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<UserTaskList, F>>>;
  getUserTaskListForUser(user_gid: string, workspace: string): Promise<DataResponse<UserTaskList>>;
  getUserTaskListForUser(user_gid: string, workspace: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<UserTaskList>>>;
  getUserTaskListForUser<F extends readonly GetUserTaskListForUserOptFields[]>(user_gid: string, workspace: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<UserTaskList, F>>>;
}

export class UsersApi {
  constructor(apiClient?: ApiClient);
  getFavoritesForUser(user_gid: string, resource_type: string, workspace: string): Promise<Collection<unknown>>;
  getFavoritesForUser(user_gid: string, resource_type: string, workspace: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<unknown>>>;
  getFavoritesForUser<F extends readonly GetFavoritesForUserOptFields[]>(user_gid: string, resource_type: string, workspace: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<unknown, F>>>;
  getUser(user_gid: string): Promise<DataResponse<User>>;
  getUser(user_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<User>>>;
  getUser<F extends readonly GetUserOptFields[]>(user_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<User, F>>>;
  getUserForWorkspace(workspace_gid: string, user_gid: string): Promise<DataResponse<User>>;
  getUserForWorkspace(workspace_gid: string, user_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<User>>>;
  getUserForWorkspace<F extends readonly GetUserForWorkspaceOptFields[]>(workspace_gid: string, user_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<User, F>>>;
  getUsers(): Promise<Collection<User>>;
  getUsers(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<User>>>;
  getUsers<F extends readonly GetUsersOptFields[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<User, F>>>;
  getUsersForTeam(team_gid: string): Promise<Collection<User>>;
  getUsersForTeam(team_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<User>>>;
  getUsersForTeam<F extends readonly GetUsersForTeamOptFields[]>(team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<User, F>>>;
  getUsersForWorkspace(workspace_gid: string): Promise<Collection<User>>;
  getUsersForWorkspace(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<User>>>;
  getUsersForWorkspace<F extends readonly GetUsersForWorkspaceOptFields[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<User, F>>>;
  updateUser(body: string, user_gid: string): Promise<DataResponse<User>>;
  updateUser(body: string, user_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<User>>>;
  updateUser<F extends readonly UpdateUserOptFields[]>(body: string, user_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<User, F>>>;
  updateUserForWorkspace(body: string, workspace_gid: string, user_gid: string): Promise<DataResponse<User>>;
  updateUserForWorkspace(body: string, workspace_gid: string, user_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<User>>>;
  updateUserForWorkspace<F extends readonly UpdateUserForWorkspaceOptFields[]>(body: string, workspace_gid: string, user_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<User, F>>>;
}

export class WebhooksApi {
  constructor(apiClient?: ApiClient);
  createWebhook(body: string): Promise<DataResponse<Webhook>>;
  createWebhook(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Webhook>>>;
  createWebhook<F extends readonly CreateWebhookOptFields[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Webhook, F>>>;
  deleteWebhook(webhook_gid: string): Promise<DataResponse<unknown>>;
  deleteWebhook(webhook_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  deleteWebhook<F extends readonly DeleteWebhookOptFields[]>(webhook_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  getWebhook(webhook_gid: string): Promise<DataResponse<Webhook>>;
  getWebhook(webhook_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Webhook>>>;
  getWebhook<F extends readonly GetWebhookOptFields[]>(webhook_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Webhook, F>>>;
  getWebhooks(workspace: string): Promise<Collection<Webhook>>;
  getWebhooks(workspace: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Webhook>>>;
  getWebhooks<F extends readonly GetWebhooksOptFields[]>(workspace: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Webhook, F>>>;
  updateWebhook(body: string, webhook_gid: string): Promise<DataResponse<Webhook>>;
  updateWebhook(body: string, webhook_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Webhook>>>;
  updateWebhook<F extends readonly UpdateWebhookOptFields[]>(body: string, webhook_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Webhook, F>>>;
}

export class WorkspaceMembershipsApi {
  constructor(apiClient?: ApiClient);
  getWorkspaceMembership(workspace_membership_gid: string): Promise<DataResponse<WorkspaceMembership>>;
  getWorkspaceMembership(workspace_membership_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<WorkspaceMembership>>>;
  getWorkspaceMembership<F extends readonly GetWorkspaceMembershipOptFields[]>(workspace_membership_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<WorkspaceMembership, F>>>;
  getWorkspaceMembershipsForUser(user_gid: string): Promise<Collection<WorkspaceMembership>>;
  getWorkspaceMembershipsForUser(user_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<WorkspaceMembership>>>;
  getWorkspaceMembershipsForUser<F extends readonly GetWorkspaceMembershipsForUserOptFields[]>(user_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<WorkspaceMembership, F>>>;
  getWorkspaceMembershipsForWorkspace(workspace_gid: string): Promise<Collection<WorkspaceMembership>>;
  getWorkspaceMembershipsForWorkspace(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<WorkspaceMembership>>>;
  getWorkspaceMembershipsForWorkspace<F extends readonly GetWorkspaceMembershipsForWorkspaceOptFields[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<WorkspaceMembership, F>>>;
}

export class WorkspacesApi {
  constructor(apiClient?: ApiClient);
  addUserForWorkspace(body: string, workspace_gid: string): Promise<DataResponse<UserBase>>;
  addUserForWorkspace(body: string, workspace_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<UserBase>>>;
  addUserForWorkspace<F extends readonly AddUserForWorkspaceOptFields[]>(body: string, workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<UserBase, F>>>;
  getWorkspace(workspace_gid: string): Promise<DataResponse<Workspace>>;
  getWorkspace(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Workspace>>>;
  getWorkspace<F extends readonly GetWorkspaceOptFields[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Workspace, F>>>;
  getWorkspaceEvents(workspace_gid: string): Promise<Collection<Event>>;
  getWorkspaceEvents(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Event>>>;
  getWorkspaceEvents<F extends readonly GetWorkspaceEventsOptFields[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Event, F>>>;
  getWorkspaces(): Promise<Collection<Workspace>>;
  getWorkspaces(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<Workspace>>>;
  getWorkspaces<F extends readonly GetWorkspacesOptFields[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<Workspace, F>>>;
  removeUserForWorkspace(body: string, workspace_gid: string): Promise<DataResponse<unknown>>;
  removeUserForWorkspace(body: string, workspace_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;
  removeUserForWorkspace<F extends readonly RemoveUserForWorkspaceOptFields[]>(body: string, workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;
  updateWorkspace(body: string, workspace_gid: string): Promise<DataResponse<Workspace>>;
  updateWorkspace(body: string, workspace_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<Workspace>>>;
  updateWorkspace<F extends readonly UpdateWorkspaceOptFields[]>(body: string, workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<Workspace, F>>>;
}

