/**
 * TypeScript type definitions for the Asana Node.js SDK
 *
 * @packageDocumentation
 */

// Re-export generated types from OpenAPI spec
export * from './generated';

// Import components for use in type definitions
import type { components } from './generated';


// ============================================================================
// Utility Types for opt_fields
// ============================================================================

/**
 * Base type representing just the gid field that is always returned by the API.
 */
export type AsanaResourceBase = {
  gid: string;
};

/**
 * For array opt_fields with `as const` - requested fields become required.
 * The API only returns gid + the fields you explicitly request.
 *
 * @example
 * const task = await client.tasks.getTask('123', {
 *   opt_fields: ['assignee', 'due_date'] as const
 * });
 * // task.gid - string (always present)
 * // task.assignee - User (required - you requested it)
 * // task.due_date - string (required - you requested it)
 * // task.name - ERROR (not present unless requested)
 */
export type WithOptFields<Full, F extends readonly (keyof Full)[]> =
  { gid: string } & Required<Pick<Full, F[number]>>;

/**
 * For string opt_fields - only gid is guaranteed, everything else optional.
 * TypeScript can't infer field names from a string at compile time.
 *
 * @example
 * const task = await client.tasks.getTask('123', {
 *   opt_fields: 'assignee,due_date'
 * });
 * // task.gid - string (always present)
 * // task.assignee - User | undefined (optional)
 */
export type WithStringOptFields<Full> = { gid: string } & Partial<Full>;

/**
 * Options object with string opt_fields
 */
export interface OptionsWithStringOptFields {
  opt_fields?: string;
  [key: string]: unknown;
}

/**
 * Options object with array opt_fields (for type inference)
 */
export interface OptionsWithArrayOptFields<F extends readonly string[]> {
  opt_fields: F;
  [key: string]: unknown;
}

/**
 * Collection type for paginated results
 */
export interface Collection<T> {
  data: T[];
  next_page?: {
    offset: string;
    path: string;
    uri: string;
  } | null;
  /** Fetch next page of results */
  nextPage(): Promise<Collection<T> | null>;
  /** Stream all items across all pages */
  stream(): { [Symbol.asyncIterator](): AsyncIterableIterator<T> };
}

/**
 * Response wrapper for single resource endpoints
 */
export interface DataResponse<T> {
  data: T;
}



// ============================================================================
// Resource Types (Compact and Full versions)
// ============================================================================

/**
 * Full AccessRequest type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type AccessRequestFull = components["schemas"]["AccessRequestResponse"];

/**
 * Full AccessRequestTargetId type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type AccessRequestTargetIdFull = components["schemas"]["AccessRequestTargetIdCompact"];

/**
 * Compact AccessRequestTargetId type with default fields.
 * Returned when opt_fields is not specified.
 */
export type AccessRequestTargetIdCompact = components["schemas"]["AccessRequestTargetIdCompact"];

/**
 * Full Allocation type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type AllocationFull = components["schemas"]["AllocationResponse"];

/**
 * Full Attachment type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type AttachmentFull = components["schemas"]["AttachmentResponse"];

/**
 * Compact Attachment type with default fields.
 * Returned when opt_fields is not specified.
 */
export type AttachmentCompact = components["schemas"]["AttachmentCompact"];

/**
 * Full Batch type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type BatchFull = components["schemas"]["BatchResponse"];

/**
 * Full BudgetActual type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type BudgetActualFull = components["schemas"]["BudgetActualResponse"];

/**
 * Full Budget type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type BudgetFull = components["schemas"]["BudgetResponse"];

/**
 * Compact Budget type with default fields.
 * Returned when opt_fields is not specified.
 */
export type BudgetCompact = components["schemas"]["BudgetCompact"];

/**
 * Full BudgetEstimate type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type BudgetEstimateFull = components["schemas"]["BudgetEstimateResponse"];

/**
 * Full BudgetTotal type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type BudgetTotalFull = components["schemas"]["BudgetTotalResponse"];

/**
 * Full CustomField type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type CustomFieldFull = components["schemas"]["CustomFieldResponse"];

/**
 * Compact CustomField type with default fields.
 * Returned when opt_fields is not specified.
 */
export type CustomFieldCompact = components["schemas"]["CustomFieldCompact"];

/**
 * Full CustomFieldMembership type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type CustomFieldMembershipFull = components["schemas"]["CustomFieldMembershipResponse"];

/**
 * Compact CustomFieldMembership type with default fields.
 * Returned when opt_fields is not specified.
 */
export type CustomFieldMembershipCompact = components["schemas"]["CustomFieldMembershipCompact"];

/**
 * Full CustomFieldSetting type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type CustomFieldSettingFull = components["schemas"]["CustomFieldSettingResponse"];

/**
 * Compact CustomFieldSetting type with default fields.
 * Returned when opt_fields is not specified.
 */
export type CustomFieldSettingCompact = components["schemas"]["CustomFieldSettingCompact"];

/**
 * Full CustomType type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type CustomTypeFull = components["schemas"]["CustomTypeResponse"];

/**
 * Compact CustomType type with default fields.
 * Returned when opt_fields is not specified.
 */
export type CustomTypeCompact = components["schemas"]["CustomTypeCompact"];

/**
 * Full CustomTypeStatusOption type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type CustomTypeStatusOptionFull = components["schemas"]["CustomTypeStatusOptionResponse"];

/**
 * Compact CustomTypeStatusOption type with default fields.
 * Returned when opt_fields is not specified.
 */
export type CustomTypeStatusOptionCompact = components["schemas"]["CustomTypeStatusOptionCompact"];

/**
 * Full DateVariable type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type DateVariableFull = components["schemas"]["DateVariableCompact"];

/**
 * Compact DateVariable type with default fields.
 * Returned when opt_fields is not specified.
 */
export type DateVariableCompact = components["schemas"]["DateVariableCompact"];

/**
 * Full DeprecatedPortfolioMembership type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type DeprecatedPortfolioMembershipFull = components["schemas"]["DeprecatedPortfolioMembershipResponse"];

/**
 * Compact DeprecatedPortfolioMembership type with default fields.
 * Returned when opt_fields is not specified.
 */
export type DeprecatedPortfolioMembershipCompact = components["schemas"]["DeprecatedPortfolioMembershipCompact"];

/**
 * Full EnumOption type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type EnumOptionFull = components["schemas"]["EnumOptionBase"];

/**
 * Full Error type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type ErrorFull = components["schemas"]["ErrorResponse"];

/**
 * Full Event type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type EventFull = components["schemas"]["EventResponse"];

/**
 * Full Goal type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type GoalFull = components["schemas"]["GoalResponse"];

/**
 * Compact Goal type with default fields.
 * Returned when opt_fields is not specified.
 */
export type GoalCompact = components["schemas"]["GoalCompact"];

/**
 * Full GoalMembership type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type GoalMembershipFull = components["schemas"]["GoalMembershipResponse"];

/**
 * Compact GoalMembership type with default fields.
 * Returned when opt_fields is not specified.
 */
export type GoalMembershipCompact = components["schemas"]["GoalMembershipCompact"];

/**
 * Full GoalMetric type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type GoalMetricFull = components["schemas"]["GoalMetricBase"];

/**
 * Full GoalRelationship type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type GoalRelationshipFull = components["schemas"]["GoalRelationshipResponse"];

/**
 * Compact GoalRelationship type with default fields.
 * Returned when opt_fields is not specified.
 */
export type GoalRelationshipCompact = components["schemas"]["GoalRelationshipCompact"];

/**
 * Full GoalRequest type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type GoalRequestFull = components["schemas"]["GoalRequestBase"];

/**
 * Full GraphExport type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type GraphExportFull = components["schemas"]["GraphExportResponse"];

/**
 * Compact GraphExport type with default fields.
 * Returned when opt_fields is not specified.
 */
export type GraphExportCompact = components["schemas"]["GraphExportCompact"];

/**
 * Full Job type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type JobFull = components["schemas"]["JobResponse"];

/**
 * Compact Job type with default fields.
 * Returned when opt_fields is not specified.
 */
export type JobCompact = components["schemas"]["JobCompact"];

/**
 * Full Member type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type MemberFull = components["schemas"]["MemberCompact"];

/**
 * Compact Member type with default fields.
 * Returned when opt_fields is not specified.
 */
export type MemberCompact = components["schemas"]["MemberCompact"];

/**
 * Full Membership type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type MembershipFull = components["schemas"]["MembershipResponse"];

/**
 * Compact Membership type with default fields.
 * Returned when opt_fields is not specified.
 */
export type MembershipCompact = components["schemas"]["MembershipCompact"];

/**
 * Full OrganizationExport type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type OrganizationExportFull = components["schemas"]["OrganizationExportResponse"];

/**
 * Compact OrganizationExport type with default fields.
 * Returned when opt_fields is not specified.
 */
export type OrganizationExportCompact = components["schemas"]["OrganizationExportCompact"];

/**
 * Full Placeholder type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type PlaceholderFull = components["schemas"]["PlaceholderCompact"];

/**
 * Compact Placeholder type with default fields.
 * Returned when opt_fields is not specified.
 */
export type PlaceholderCompact = components["schemas"]["PlaceholderCompact"];

/**
 * Full PlaceholderRate type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type PlaceholderRateFull = components["schemas"]["PlaceholderRateCompact"];

/**
 * Compact PlaceholderRate type with default fields.
 * Returned when opt_fields is not specified.
 */
export type PlaceholderRateCompact = components["schemas"]["PlaceholderRateCompact"];

/**
 * Full Portfolio type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type PortfolioFull = components["schemas"]["PortfolioResponse"];

/**
 * Compact Portfolio type with default fields.
 * Returned when opt_fields is not specified.
 */
export type PortfolioCompact = components["schemas"]["PortfolioCompact"];

/**
 * Full PortfolioMembership type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type PortfolioMembershipFull = components["schemas"]["PortfolioMembershipResponse"];

/**
 * Compact PortfolioMembership type with default fields.
 * Returned when opt_fields is not specified.
 */
export type PortfolioMembershipCompact = components["schemas"]["PortfolioMembershipCompact"];

/**
 * Full PortfolioMembershipCompact type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type PortfolioMembershipCompactFull = components["schemas"]["PortfolioMembershipCompactResponse"];

/**
 * Full Project type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type ProjectFull = components["schemas"]["ProjectResponse"];

/**
 * Compact Project type with default fields.
 * Returned when opt_fields is not specified.
 */
export type ProjectCompact = components["schemas"]["ProjectCompact"];

/**
 * Full ProjectBrief type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type ProjectBriefFull = components["schemas"]["ProjectBriefResponse"];

/**
 * Compact ProjectBrief type with default fields.
 * Returned when opt_fields is not specified.
 */
export type ProjectBriefCompact = components["schemas"]["ProjectBriefCompact"];

/**
 * Full ProjectMembership type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type ProjectMembershipFull = components["schemas"]["ProjectMembershipBase"];

/**
 * Compact ProjectMembership type with default fields.
 * Returned when opt_fields is not specified.
 */
export type ProjectMembershipCompact = components["schemas"]["ProjectMembershipCompact"];

/**
 * Full ProjectMembershipCompact type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type ProjectMembershipCompactFull = components["schemas"]["ProjectMembershipCompactResponse"];

/**
 * Full ProjectMembershipNormal type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type ProjectMembershipNormalFull = components["schemas"]["ProjectMembershipNormalResponse"];

/**
 * Full ProjectStatus type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type ProjectStatusFull = components["schemas"]["ProjectStatusResponse"];

/**
 * Compact ProjectStatus type with default fields.
 * Returned when opt_fields is not specified.
 */
export type ProjectStatusCompact = components["schemas"]["ProjectStatusCompact"];

/**
 * Full ProjectTemplate type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type ProjectTemplateFull = components["schemas"]["ProjectTemplateResponse"];

/**
 * Compact ProjectTemplate type with default fields.
 * Returned when opt_fields is not specified.
 */
export type ProjectTemplateCompact = components["schemas"]["ProjectTemplateCompact"];

/**
 * Full Rate type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type RateFull = components["schemas"]["RateResponse"];

/**
 * Compact Rate type with default fields.
 * Returned when opt_fields is not specified.
 */
export type RateCompact = components["schemas"]["RateCompact"];

/**
 * Full RateOrPlaceholder type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type RateOrPlaceholderFull = components["schemas"]["RateOrPlaceholderCompact"];

/**
 * Compact RateOrPlaceholder type with default fields.
 * Returned when opt_fields is not specified.
 */
export type RateOrPlaceholderCompact = components["schemas"]["RateOrPlaceholderCompact"];

/**
 * Full Reaction type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type ReactionFull = components["schemas"]["ReactionCompact"];

/**
 * Compact Reaction type with default fields.
 * Returned when opt_fields is not specified.
 */
export type ReactionCompact = components["schemas"]["ReactionCompact"];

/**
 * Full ReactionSummaryItem type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type ReactionSummaryItemFull = components["schemas"]["ReactionSummaryItemCompact"];

/**
 * Compact ReactionSummaryItem type with default fields.
 * Returned when opt_fields is not specified.
 */
export type ReactionSummaryItemCompact = components["schemas"]["ReactionSummaryItemCompact"];

/**
 * Full ResourceExport type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type ResourceExportFull = components["schemas"]["ResourceExportResponse"];

/**
 * Compact ResourceExport type with default fields.
 * Returned when opt_fields is not specified.
 */
export type ResourceExportCompact = components["schemas"]["ResourceExportCompact"];

/**
 * Full RuleTrigger type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type RuleTriggerFull = components["schemas"]["RuleTriggerResponse"];

/**
 * Full Section type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type SectionFull = components["schemas"]["SectionResponse"];

/**
 * Compact Section type with default fields.
 * Returned when opt_fields is not specified.
 */
export type SectionCompact = components["schemas"]["SectionCompact"];

/**
 * Full StatusUpdate type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type StatusUpdateFull = components["schemas"]["StatusUpdateResponse"];

/**
 * Compact StatusUpdate type with default fields.
 * Returned when opt_fields is not specified.
 */
export type StatusUpdateCompact = components["schemas"]["StatusUpdateCompact"];

/**
 * Full Story type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type StoryFull = components["schemas"]["StoryResponse"];

/**
 * Compact Story type with default fields.
 * Returned when opt_fields is not specified.
 */
export type StoryCompact = components["schemas"]["StoryCompact"];

/**
 * Full Tag type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type TagFull = components["schemas"]["TagResponse"];

/**
 * Compact Tag type with default fields.
 * Returned when opt_fields is not specified.
 */
export type TagCompact = components["schemas"]["TagCompact"];

/**
 * Full Task type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type TaskFull = components["schemas"]["TaskResponse"];

/**
 * Compact Task type with default fields.
 * Returned when opt_fields is not specified.
 */
export type TaskCompact = components["schemas"]["TaskCompact"];

/**
 * Full TaskCount type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type TaskCountFull = components["schemas"]["TaskCountResponse"];

/**
 * Full TaskTemplate type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type TaskTemplateFull = components["schemas"]["TaskTemplateResponse"];

/**
 * Compact TaskTemplate type with default fields.
 * Returned when opt_fields is not specified.
 */
export type TaskTemplateCompact = components["schemas"]["TaskTemplateCompact"];

/**
 * Full TaskTemplateRecipe type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type TaskTemplateRecipeFull = components["schemas"]["TaskTemplateRecipeCompact"];

/**
 * Compact TaskTemplateRecipe type with default fields.
 * Returned when opt_fields is not specified.
 */
export type TaskTemplateRecipeCompact = components["schemas"]["TaskTemplateRecipeCompact"];

/**
 * Full Team type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type TeamFull = components["schemas"]["TeamResponse"];

/**
 * Compact Team type with default fields.
 * Returned when opt_fields is not specified.
 */
export type TeamCompact = components["schemas"]["TeamCompact"];

/**
 * Full TeamMembership type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type TeamMembershipFull = components["schemas"]["TeamMembershipResponse"];

/**
 * Compact TeamMembership type with default fields.
 * Returned when opt_fields is not specified.
 */
export type TeamMembershipCompact = components["schemas"]["TeamMembershipCompact"];

/**
 * Full TimePeriod type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type TimePeriodFull = components["schemas"]["TimePeriodResponse"];

/**
 * Compact TimePeriod type with default fields.
 * Returned when opt_fields is not specified.
 */
export type TimePeriodCompact = components["schemas"]["TimePeriodCompact"];

/**
 * Full TimeTrackingEntry type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type TimeTrackingEntryFull = components["schemas"]["TimeTrackingEntryBase"];

/**
 * Compact TimeTrackingEntry type with default fields.
 * Returned when opt_fields is not specified.
 */
export type TimeTrackingEntryCompact = components["schemas"]["TimeTrackingEntryCompact"];

/**
 * Full User type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type UserFull = components["schemas"]["UserResponse"];

/**
 * Compact User type with default fields.
 * Returned when opt_fields is not specified.
 */
export type UserCompact = components["schemas"]["UserCompact"];

/**
 * Full UserBase type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type UserBaseFull = components["schemas"]["UserBaseResponse"];

/**
 * Full UserTaskList type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type UserTaskListFull = components["schemas"]["UserTaskListResponse"];

/**
 * Compact UserTaskList type with default fields.
 * Returned when opt_fields is not specified.
 */
export type UserTaskListCompact = components["schemas"]["UserTaskListCompact"];

/**
 * Full Webhook type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type WebhookFull = components["schemas"]["WebhookResponse"];

/**
 * Compact Webhook type with default fields.
 * Returned when opt_fields is not specified.
 */
export type WebhookCompact = components["schemas"]["WebhookCompact"];

/**
 * Full Workspace type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type WorkspaceFull = components["schemas"]["WorkspaceResponse"];

/**
 * Compact Workspace type with default fields.
 * Returned when opt_fields is not specified.
 */
export type WorkspaceCompact = components["schemas"]["WorkspaceCompact"];

/**
 * Full WorkspaceMembership type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type WorkspaceMembershipFull = components["schemas"]["WorkspaceMembershipResponse"];

/**
 * Compact WorkspaceMembership type with default fields.
 * Returned when opt_fields is not specified.
 */
export type WorkspaceMembershipCompact = components["schemas"]["WorkspaceMembershipCompact"];




// ============================================================================
// ApiClient Type Definition
// ============================================================================

/**
 * Configuration options for the ApiClient
 */
export interface ApiClientConfig {
  basePath?: string;
  defaultHeaders?: Record<string, string>;
  timeout?: number;
}

/**
 * Authentication configuration
 */
export interface AuthConfig {
  accessToken?: string;
}

/**
 * The ApiClient class manages low-level HTTP communications with the Asana API.
 */
export class ApiClient {
  static instance: ApiClient;

  basePath: string;
  defaultHeaders: Record<string, string>;
  timeout: number;
  authentications: {
    token: AuthConfig;
  };

  constructor();
}



// ============================================================================
// API Class Type Definitions
// ============================================================================

/**
 * AccessRequestsApi provides methods for interacting with AccessRequests resources.
 */
export class AccessRequestsApi {
  constructor(apiClient?: ApiClient);

  /**
   * approveAccessRequest - Returns compact representation by default
   */
  approveAccessRequest(access_request_gid: string): Promise<DataResponse<unknown>>;

  /**
   * approveAccessRequest - With string opt_fields (only gid guaranteed)
   */
  approveAccessRequest(access_request_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * approveAccessRequest - With array opt_fields (requested fields become required)
   */
  approveAccessRequest<F extends readonly (keyof unknown)[]>(access_request_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * createAccessRequest - Returns compact representation by default
   */
  createAccessRequest(body: string): Promise<DataResponse<AccessRequestFull>>;

  /**
   * createAccessRequest - With string opt_fields (only gid guaranteed)
   */
  createAccessRequest(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<AccessRequestFull>>>;

  /**
   * createAccessRequest - With array opt_fields (requested fields become required)
   */
  createAccessRequest<F extends readonly (keyof AccessRequestFull)[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<AccessRequestFull, F>>>;

  /**
   * getAccessRequests - Returns compact representation by default
   */
  getAccessRequests(target: string): Promise<Collection<AccessRequestFull>>;

  /**
   * getAccessRequests - With string opt_fields (only gid guaranteed)
   */
  getAccessRequests(target: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<AccessRequestFull>>>;

  /**
   * getAccessRequests - With array opt_fields (requested fields become required)
   */
  getAccessRequests<F extends readonly (keyof AccessRequestFull)[]>(target: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<AccessRequestFull, F>>>;

  /**
   * rejectAccessRequest - Returns compact representation by default
   */
  rejectAccessRequest(access_request_gid: string): Promise<DataResponse<unknown>>;

  /**
   * rejectAccessRequest - With string opt_fields (only gid guaranteed)
   */
  rejectAccessRequest(access_request_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * rejectAccessRequest - With array opt_fields (requested fields become required)
   */
  rejectAccessRequest<F extends readonly (keyof unknown)[]>(access_request_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

}

/**
 * AllocationsApi provides methods for interacting with Allocations resources.
 */
export class AllocationsApi {
  constructor(apiClient?: ApiClient);

  /**
   * createAllocation - Returns compact representation by default
   */
  createAllocation(body: string): Promise<DataResponse<AllocationFull>>;

  /**
   * createAllocation - With string opt_fields (only gid guaranteed)
   */
  createAllocation(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<AllocationFull>>>;

  /**
   * createAllocation - With array opt_fields (requested fields become required)
   */
  createAllocation<F extends readonly (keyof AllocationFull)[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<AllocationFull, F>>>;

  /**
   * deleteAllocation - Returns compact representation by default
   */
  deleteAllocation(allocation_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteAllocation - With string opt_fields (only gid guaranteed)
   */
  deleteAllocation(allocation_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteAllocation - With array opt_fields (requested fields become required)
   */
  deleteAllocation<F extends readonly (keyof unknown)[]>(allocation_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getAllocation - Returns compact representation by default
   */
  getAllocation(allocation_gid: string): Promise<DataResponse<AllocationFull>>;

  /**
   * getAllocation - With string opt_fields (only gid guaranteed)
   */
  getAllocation(allocation_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<AllocationFull>>>;

  /**
   * getAllocation - With array opt_fields (requested fields become required)
   */
  getAllocation<F extends readonly (keyof AllocationFull)[]>(allocation_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<AllocationFull, F>>>;

  /**
   * getAllocations - Returns compact representation by default
   */
  getAllocations(): Promise<Collection<AllocationFull>>;

  /**
   * getAllocations - With string opt_fields (only gid guaranteed)
   */
  getAllocations(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<AllocationFull>>>;

  /**
   * getAllocations - With array opt_fields (requested fields become required)
   */
  getAllocations<F extends readonly (keyof AllocationFull)[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<AllocationFull, F>>>;

  /**
   * updateAllocation - Returns compact representation by default
   */
  updateAllocation(body: string, allocation_gid: string): Promise<DataResponse<AllocationFull>>;

  /**
   * updateAllocation - With string opt_fields (only gid guaranteed)
   */
  updateAllocation(body: string, allocation_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<AllocationFull>>>;

  /**
   * updateAllocation - With array opt_fields (requested fields become required)
   */
  updateAllocation<F extends readonly (keyof AllocationFull)[]>(body: string, allocation_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<AllocationFull, F>>>;

}

/**
 * AttachmentsApi provides methods for interacting with Attachments resources.
 */
export class AttachmentsApi {
  constructor(apiClient?: ApiClient);

  /**
   * createAttachmentForObject - Returns compact representation by default
   */
  createAttachmentForObject(): Promise<DataResponse<AttachmentCompact>>;

  /**
   * createAttachmentForObject - With string opt_fields (only gid guaranteed)
   */
  createAttachmentForObject(opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<AttachmentFull>>>;

  /**
   * createAttachmentForObject - With array opt_fields (requested fields become required)
   */
  createAttachmentForObject<F extends readonly (keyof AttachmentFull)[]>(opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<AttachmentFull, F>>>;

  /**
   * deleteAttachment - Returns compact representation by default
   */
  deleteAttachment(attachment_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteAttachment - With string opt_fields (only gid guaranteed)
   */
  deleteAttachment(attachment_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteAttachment - With array opt_fields (requested fields become required)
   */
  deleteAttachment<F extends readonly (keyof unknown)[]>(attachment_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getAttachment - Returns compact representation by default
   */
  getAttachment(attachment_gid: string): Promise<DataResponse<AttachmentCompact>>;

  /**
   * getAttachment - With string opt_fields (only gid guaranteed)
   */
  getAttachment(attachment_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<AttachmentFull>>>;

  /**
   * getAttachment - With array opt_fields (requested fields become required)
   */
  getAttachment<F extends readonly (keyof AttachmentFull)[]>(attachment_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<AttachmentFull, F>>>;

  /**
   * getAttachmentsForObject - Returns compact representation by default
   */
  getAttachmentsForObject(parent: string): Promise<Collection<AttachmentCompact>>;

  /**
   * getAttachmentsForObject - With string opt_fields (only gid guaranteed)
   */
  getAttachmentsForObject(parent: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<AttachmentFull>>>;

  /**
   * getAttachmentsForObject - With array opt_fields (requested fields become required)
   */
  getAttachmentsForObject<F extends readonly (keyof AttachmentFull)[]>(parent: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<AttachmentFull, F>>>;

}

/**
 * AuditLogAPIApi provides methods for interacting with AuditLogAPI resources.
 */
export class AuditLogAPIApi {
  constructor(apiClient?: ApiClient);

  /**
   * getAuditLogEvents
   */
  getAuditLogEvents(workspace_gid: string): Promise<Collection<unknown>>;

}

/**
 * BatchAPIApi provides methods for interacting with BatchAPI resources.
 */
export class BatchAPIApi {
  constructor(apiClient?: ApiClient);

  /**
   * createBatchRequest - Returns compact representation by default
   */
  createBatchRequest(body: string): Promise<Collection<BatchFull>>;

  /**
   * createBatchRequest - With string opt_fields (only gid guaranteed)
   */
  createBatchRequest(body: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<BatchFull>>>;

  /**
   * createBatchRequest - With array opt_fields (requested fields become required)
   */
  createBatchRequest<F extends readonly (keyof BatchFull)[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<BatchFull, F>>>;

}

/**
 * BudgetsApi provides methods for interacting with Budgets resources.
 */
export class BudgetsApi {
  constructor(apiClient?: ApiClient);

  /**
   * createBudget - Returns compact representation by default
   */
  createBudget(body: string): Promise<DataResponse<BudgetCompact>>;

  /**
   * createBudget - With string opt_fields (only gid guaranteed)
   */
  createBudget(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<BudgetFull>>>;

  /**
   * createBudget - With array opt_fields (requested fields become required)
   */
  createBudget<F extends readonly (keyof BudgetFull)[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<BudgetFull, F>>>;

  /**
   * deleteBudget - Returns compact representation by default
   */
  deleteBudget(budget_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteBudget - With string opt_fields (only gid guaranteed)
   */
  deleteBudget(budget_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteBudget - With array opt_fields (requested fields become required)
   */
  deleteBudget<F extends readonly (keyof unknown)[]>(budget_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getBudget - Returns compact representation by default
   */
  getBudget(budget_gid: string): Promise<DataResponse<BudgetCompact>>;

  /**
   * getBudget - With string opt_fields (only gid guaranteed)
   */
  getBudget(budget_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<BudgetFull>>>;

  /**
   * getBudget - With array opt_fields (requested fields become required)
   */
  getBudget<F extends readonly (keyof BudgetFull)[]>(budget_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<BudgetFull, F>>>;

  /**
   * getBudgets - Returns compact representation by default
   */
  getBudgets(parent: string): Promise<Collection<BudgetCompact>>;

  /**
   * getBudgets - With string opt_fields (only gid guaranteed)
   */
  getBudgets(parent: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<BudgetFull>>>;

  /**
   * getBudgets - With array opt_fields (requested fields become required)
   */
  getBudgets<F extends readonly (keyof BudgetFull)[]>(parent: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<BudgetFull, F>>>;

  /**
   * updateBudget - Returns compact representation by default
   */
  updateBudget(body: string, budget_gid: string): Promise<DataResponse<BudgetCompact>>;

  /**
   * updateBudget - With string opt_fields (only gid guaranteed)
   */
  updateBudget(body: string, budget_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<BudgetFull>>>;

  /**
   * updateBudget - With array opt_fields (requested fields become required)
   */
  updateBudget<F extends readonly (keyof BudgetFull)[]>(body: string, budget_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<BudgetFull, F>>>;

}

/**
 * CustomFieldSettingsApi provides methods for interacting with CustomFieldSettings resources.
 */
export class CustomFieldSettingsApi {
  constructor(apiClient?: ApiClient);

  /**
   * getCustomFieldSettingsForGoal - Returns compact representation by default
   */
  getCustomFieldSettingsForGoal(goal_gid: string): Promise<Collection<CustomFieldSettingCompact>>;

  /**
   * getCustomFieldSettingsForGoal - With string opt_fields (only gid guaranteed)
   */
  getCustomFieldSettingsForGoal(goal_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<CustomFieldSettingFull>>>;

  /**
   * getCustomFieldSettingsForGoal - With array opt_fields (requested fields become required)
   */
  getCustomFieldSettingsForGoal<F extends readonly (keyof CustomFieldSettingFull)[]>(goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<CustomFieldSettingFull, F>>>;

  /**
   * getCustomFieldSettingsForPortfolio - Returns compact representation by default
   */
  getCustomFieldSettingsForPortfolio(portfolio_gid: string): Promise<Collection<CustomFieldSettingCompact>>;

  /**
   * getCustomFieldSettingsForPortfolio - With string opt_fields (only gid guaranteed)
   */
  getCustomFieldSettingsForPortfolio(portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<CustomFieldSettingFull>>>;

  /**
   * getCustomFieldSettingsForPortfolio - With array opt_fields (requested fields become required)
   */
  getCustomFieldSettingsForPortfolio<F extends readonly (keyof CustomFieldSettingFull)[]>(portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<CustomFieldSettingFull, F>>>;

  /**
   * getCustomFieldSettingsForProject - Returns compact representation by default
   */
  getCustomFieldSettingsForProject(project_gid: string): Promise<Collection<CustomFieldSettingCompact>>;

  /**
   * getCustomFieldSettingsForProject - With string opt_fields (only gid guaranteed)
   */
  getCustomFieldSettingsForProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<CustomFieldSettingFull>>>;

  /**
   * getCustomFieldSettingsForProject - With array opt_fields (requested fields become required)
   */
  getCustomFieldSettingsForProject<F extends readonly (keyof CustomFieldSettingFull)[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<CustomFieldSettingFull, F>>>;

  /**
   * getCustomFieldSettingsForTeam - Returns compact representation by default
   */
  getCustomFieldSettingsForTeam(team_gid: string): Promise<Collection<CustomFieldSettingCompact>>;

  /**
   * getCustomFieldSettingsForTeam - With string opt_fields (only gid guaranteed)
   */
  getCustomFieldSettingsForTeam(team_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<CustomFieldSettingFull>>>;

  /**
   * getCustomFieldSettingsForTeam - With array opt_fields (requested fields become required)
   */
  getCustomFieldSettingsForTeam<F extends readonly (keyof CustomFieldSettingFull)[]>(team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<CustomFieldSettingFull, F>>>;

}

/**
 * CustomFieldsApi provides methods for interacting with CustomFields resources.
 */
export class CustomFieldsApi {
  constructor(apiClient?: ApiClient);

  /**
   * createCustomField - Returns compact representation by default
   */
  createCustomField(body: string): Promise<DataResponse<CustomFieldCompact>>;

  /**
   * createCustomField - With string opt_fields (only gid guaranteed)
   */
  createCustomField(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<CustomFieldFull>>>;

  /**
   * createCustomField - With array opt_fields (requested fields become required)
   */
  createCustomField<F extends readonly (keyof CustomFieldFull)[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<CustomFieldFull, F>>>;

  /**
   * createEnumOptionForCustomField - Returns compact representation by default
   */
  createEnumOptionForCustomField(custom_field_gid: string): Promise<DataResponse<EnumOptionFull>>;

  /**
   * createEnumOptionForCustomField - With string opt_fields (only gid guaranteed)
   */
  createEnumOptionForCustomField(custom_field_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<EnumOptionFull>>>;

  /**
   * createEnumOptionForCustomField - With array opt_fields (requested fields become required)
   */
  createEnumOptionForCustomField<F extends readonly (keyof EnumOptionFull)[]>(custom_field_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<EnumOptionFull, F>>>;

  /**
   * deleteCustomField - Returns compact representation by default
   */
  deleteCustomField(custom_field_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteCustomField - With string opt_fields (only gid guaranteed)
   */
  deleteCustomField(custom_field_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteCustomField - With array opt_fields (requested fields become required)
   */
  deleteCustomField<F extends readonly (keyof unknown)[]>(custom_field_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getCustomField - Returns compact representation by default
   */
  getCustomField(custom_field_gid: string): Promise<DataResponse<CustomFieldCompact>>;

  /**
   * getCustomField - With string opt_fields (only gid guaranteed)
   */
  getCustomField(custom_field_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<CustomFieldFull>>>;

  /**
   * getCustomField - With array opt_fields (requested fields become required)
   */
  getCustomField<F extends readonly (keyof CustomFieldFull)[]>(custom_field_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<CustomFieldFull, F>>>;

  /**
   * getCustomFieldsForWorkspace - Returns compact representation by default
   */
  getCustomFieldsForWorkspace(workspace_gid: string): Promise<Collection<CustomFieldCompact>>;

  /**
   * getCustomFieldsForWorkspace - With string opt_fields (only gid guaranteed)
   */
  getCustomFieldsForWorkspace(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<CustomFieldFull>>>;

  /**
   * getCustomFieldsForWorkspace - With array opt_fields (requested fields become required)
   */
  getCustomFieldsForWorkspace<F extends readonly (keyof CustomFieldFull)[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<CustomFieldFull, F>>>;

  /**
   * insertEnumOptionForCustomField - Returns compact representation by default
   */
  insertEnumOptionForCustomField(custom_field_gid: string): Promise<DataResponse<EnumOptionFull>>;

  /**
   * insertEnumOptionForCustomField - With string opt_fields (only gid guaranteed)
   */
  insertEnumOptionForCustomField(custom_field_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<EnumOptionFull>>>;

  /**
   * insertEnumOptionForCustomField - With array opt_fields (requested fields become required)
   */
  insertEnumOptionForCustomField<F extends readonly (keyof EnumOptionFull)[]>(custom_field_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<EnumOptionFull, F>>>;

  /**
   * updateCustomField - Returns compact representation by default
   */
  updateCustomField(custom_field_gid: string): Promise<DataResponse<CustomFieldCompact>>;

  /**
   * updateCustomField - With string opt_fields (only gid guaranteed)
   */
  updateCustomField(custom_field_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<CustomFieldFull>>>;

  /**
   * updateCustomField - With array opt_fields (requested fields become required)
   */
  updateCustomField<F extends readonly (keyof CustomFieldFull)[]>(custom_field_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<CustomFieldFull, F>>>;

  /**
   * updateEnumOption - Returns compact representation by default
   */
  updateEnumOption(enum_option_gid: string): Promise<DataResponse<EnumOptionFull>>;

  /**
   * updateEnumOption - With string opt_fields (only gid guaranteed)
   */
  updateEnumOption(enum_option_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<EnumOptionFull>>>;

  /**
   * updateEnumOption - With array opt_fields (requested fields become required)
   */
  updateEnumOption<F extends readonly (keyof EnumOptionFull)[]>(enum_option_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<EnumOptionFull, F>>>;

}

/**
 * CustomTypesApi provides methods for interacting with CustomTypes resources.
 */
export class CustomTypesApi {
  constructor(apiClient?: ApiClient);

  /**
   * getCustomType - Returns compact representation by default
   */
  getCustomType(custom_type_gid: string): Promise<DataResponse<CustomTypeCompact>>;

  /**
   * getCustomType - With string opt_fields (only gid guaranteed)
   */
  getCustomType(custom_type_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<CustomTypeFull>>>;

  /**
   * getCustomType - With array opt_fields (requested fields become required)
   */
  getCustomType<F extends readonly (keyof CustomTypeFull)[]>(custom_type_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<CustomTypeFull, F>>>;

  /**
   * getCustomTypes - Returns compact representation by default
   */
  getCustomTypes(project: string): Promise<Collection<CustomTypeCompact>>;

  /**
   * getCustomTypes - With string opt_fields (only gid guaranteed)
   */
  getCustomTypes(project: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<CustomTypeFull>>>;

  /**
   * getCustomTypes - With array opt_fields (requested fields become required)
   */
  getCustomTypes<F extends readonly (keyof CustomTypeFull)[]>(project: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<CustomTypeFull, F>>>;

}

/**
 * EventsApi provides methods for interacting with Events resources.
 */
export class EventsApi {
  constructor(apiClient?: ApiClient);

  /**
   * getEvents - Returns compact representation by default
   */
  getEvents(resource: string): Promise<Collection<EventFull>>;

  /**
   * getEvents - With string opt_fields (only gid guaranteed)
   */
  getEvents(resource: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<EventFull>>>;

  /**
   * getEvents - With array opt_fields (requested fields become required)
   */
  getEvents<F extends readonly (keyof EventFull)[]>(resource: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<EventFull, F>>>;

}

/**
 * ExportsApi provides methods for interacting with Exports resources.
 */
export class ExportsApi {
  constructor(apiClient?: ApiClient);

  /**
   * createGraphExport
   */
  createGraphExport(body: string): Promise<DataResponse<GraphExportCompact>>;

  /**
   * createResourceExport
   */
  createResourceExport(body: string): Promise<DataResponse<ResourceExportCompact>>;

}

/**
 * GoalRelationshipsApi provides methods for interacting with GoalRelationships resources.
 */
export class GoalRelationshipsApi {
  constructor(apiClient?: ApiClient);

  /**
   * addSupportingRelationship - Returns compact representation by default
   */
  addSupportingRelationship(body: string, goal_gid: string): Promise<DataResponse<GoalRelationshipCompact>>;

  /**
   * addSupportingRelationship - With string opt_fields (only gid guaranteed)
   */
  addSupportingRelationship(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<GoalRelationshipFull>>>;

  /**
   * addSupportingRelationship - With array opt_fields (requested fields become required)
   */
  addSupportingRelationship<F extends readonly (keyof GoalRelationshipFull)[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<GoalRelationshipFull, F>>>;

  /**
   * getGoalRelationship - Returns compact representation by default
   */
  getGoalRelationship(goal_relationship_gid: string): Promise<DataResponse<GoalRelationshipCompact>>;

  /**
   * getGoalRelationship - With string opt_fields (only gid guaranteed)
   */
  getGoalRelationship(goal_relationship_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<GoalRelationshipFull>>>;

  /**
   * getGoalRelationship - With array opt_fields (requested fields become required)
   */
  getGoalRelationship<F extends readonly (keyof GoalRelationshipFull)[]>(goal_relationship_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<GoalRelationshipFull, F>>>;

  /**
   * getGoalRelationships - Returns compact representation by default
   */
  getGoalRelationships(supported_goal: string): Promise<Collection<GoalRelationshipCompact>>;

  /**
   * getGoalRelationships - With string opt_fields (only gid guaranteed)
   */
  getGoalRelationships(supported_goal: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<GoalRelationshipFull>>>;

  /**
   * getGoalRelationships - With array opt_fields (requested fields become required)
   */
  getGoalRelationships<F extends readonly (keyof GoalRelationshipFull)[]>(supported_goal: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<GoalRelationshipFull, F>>>;

  /**
   * removeSupportingRelationship - Returns compact representation by default
   */
  removeSupportingRelationship(body: string, goal_gid: string): Promise<DataResponse<unknown>>;

  /**
   * removeSupportingRelationship - With string opt_fields (only gid guaranteed)
   */
  removeSupportingRelationship(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * removeSupportingRelationship - With array opt_fields (requested fields become required)
   */
  removeSupportingRelationship<F extends readonly (keyof unknown)[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * updateGoalRelationship - Returns compact representation by default
   */
  updateGoalRelationship(body: string, goal_relationship_gid: string): Promise<DataResponse<GoalRelationshipCompact>>;

  /**
   * updateGoalRelationship - With string opt_fields (only gid guaranteed)
   */
  updateGoalRelationship(body: string, goal_relationship_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<GoalRelationshipFull>>>;

  /**
   * updateGoalRelationship - With array opt_fields (requested fields become required)
   */
  updateGoalRelationship<F extends readonly (keyof GoalRelationshipFull)[]>(body: string, goal_relationship_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<GoalRelationshipFull, F>>>;

}

/**
 * GoalsApi provides methods for interacting with Goals resources.
 */
export class GoalsApi {
  constructor(apiClient?: ApiClient);

  /**
   * addCustomFieldSettingForGoal - Returns compact representation by default
   */
  addCustomFieldSettingForGoal(body: string, goal_gid: string): Promise<DataResponse<CustomFieldSettingCompact>>;

  /**
   * addCustomFieldSettingForGoal - With string opt_fields (only gid guaranteed)
   */
  addCustomFieldSettingForGoal(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<CustomFieldSettingFull>>>;

  /**
   * addCustomFieldSettingForGoal - With array opt_fields (requested fields become required)
   */
  addCustomFieldSettingForGoal<F extends readonly (keyof CustomFieldSettingFull)[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<CustomFieldSettingFull, F>>>;

  /**
   * addFollowers - Returns compact representation by default
   */
  addFollowers(body: string, goal_gid: string): Promise<DataResponse<GoalCompact>>;

  /**
   * addFollowers - With string opt_fields (only gid guaranteed)
   */
  addFollowers(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<GoalFull>>>;

  /**
   * addFollowers - With array opt_fields (requested fields become required)
   */
  addFollowers<F extends readonly (keyof GoalFull)[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<GoalFull, F>>>;

  /**
   * createGoal - Returns compact representation by default
   */
  createGoal(body: string): Promise<DataResponse<GoalCompact>>;

  /**
   * createGoal - With string opt_fields (only gid guaranteed)
   */
  createGoal(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<GoalFull>>>;

  /**
   * createGoal - With array opt_fields (requested fields become required)
   */
  createGoal<F extends readonly (keyof GoalFull)[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<GoalFull, F>>>;

  /**
   * createGoalMetric - Returns compact representation by default
   */
  createGoalMetric(body: string, goal_gid: string): Promise<DataResponse<GoalCompact>>;

  /**
   * createGoalMetric - With string opt_fields (only gid guaranteed)
   */
  createGoalMetric(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<GoalFull>>>;

  /**
   * createGoalMetric - With array opt_fields (requested fields become required)
   */
  createGoalMetric<F extends readonly (keyof GoalFull)[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<GoalFull, F>>>;

  /**
   * deleteGoal - Returns compact representation by default
   */
  deleteGoal(goal_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteGoal - With string opt_fields (only gid guaranteed)
   */
  deleteGoal(goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteGoal - With array opt_fields (requested fields become required)
   */
  deleteGoal<F extends readonly (keyof unknown)[]>(goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getGoal - Returns compact representation by default
   */
  getGoal(goal_gid: string): Promise<DataResponse<GoalCompact>>;

  /**
   * getGoal - With string opt_fields (only gid guaranteed)
   */
  getGoal(goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<GoalFull>>>;

  /**
   * getGoal - With array opt_fields (requested fields become required)
   */
  getGoal<F extends readonly (keyof GoalFull)[]>(goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<GoalFull, F>>>;

  /**
   * getGoals - Returns compact representation by default
   */
  getGoals(): Promise<Collection<GoalCompact>>;

  /**
   * getGoals - With string opt_fields (only gid guaranteed)
   */
  getGoals(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<GoalFull>>>;

  /**
   * getGoals - With array opt_fields (requested fields become required)
   */
  getGoals<F extends readonly (keyof GoalFull)[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<GoalFull, F>>>;

  /**
   * getParentGoalsForGoal - Returns compact representation by default
   */
  getParentGoalsForGoal(goal_gid: string): Promise<Collection<GoalCompact>>;

  /**
   * getParentGoalsForGoal - With string opt_fields (only gid guaranteed)
   */
  getParentGoalsForGoal(goal_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<GoalFull>>>;

  /**
   * getParentGoalsForGoal - With array opt_fields (requested fields become required)
   */
  getParentGoalsForGoal<F extends readonly (keyof GoalFull)[]>(goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<GoalFull, F>>>;

  /**
   * removeCustomFieldSettingForGoal - Returns compact representation by default
   */
  removeCustomFieldSettingForGoal(body: string, goal_gid: string): Promise<DataResponse<unknown>>;

  /**
   * removeCustomFieldSettingForGoal - With string opt_fields (only gid guaranteed)
   */
  removeCustomFieldSettingForGoal(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * removeCustomFieldSettingForGoal - With array opt_fields (requested fields become required)
   */
  removeCustomFieldSettingForGoal<F extends readonly (keyof unknown)[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * removeFollowers - Returns compact representation by default
   */
  removeFollowers(body: string, goal_gid: string): Promise<DataResponse<GoalCompact>>;

  /**
   * removeFollowers - With string opt_fields (only gid guaranteed)
   */
  removeFollowers(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<GoalFull>>>;

  /**
   * removeFollowers - With array opt_fields (requested fields become required)
   */
  removeFollowers<F extends readonly (keyof GoalFull)[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<GoalFull, F>>>;

  /**
   * updateGoal - Returns compact representation by default
   */
  updateGoal(body: string, goal_gid: string): Promise<DataResponse<GoalCompact>>;

  /**
   * updateGoal - With string opt_fields (only gid guaranteed)
   */
  updateGoal(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<GoalFull>>>;

  /**
   * updateGoal - With array opt_fields (requested fields become required)
   */
  updateGoal<F extends readonly (keyof GoalFull)[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<GoalFull, F>>>;

  /**
   * updateGoalMetric - Returns compact representation by default
   */
  updateGoalMetric(body: string, goal_gid: string): Promise<DataResponse<GoalCompact>>;

  /**
   * updateGoalMetric - With string opt_fields (only gid guaranteed)
   */
  updateGoalMetric(body: string, goal_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<GoalFull>>>;

  /**
   * updateGoalMetric - With array opt_fields (requested fields become required)
   */
  updateGoalMetric<F extends readonly (keyof GoalFull)[]>(body: string, goal_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<GoalFull, F>>>;

}

/**
 * JobsApi provides methods for interacting with Jobs resources.
 */
export class JobsApi {
  constructor(apiClient?: ApiClient);

  /**
   * getJob - Returns compact representation by default
   */
  getJob(job_gid: string): Promise<DataResponse<JobCompact>>;

  /**
   * getJob - With string opt_fields (only gid guaranteed)
   */
  getJob(job_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<JobFull>>>;

  /**
   * getJob - With array opt_fields (requested fields become required)
   */
  getJob<F extends readonly (keyof JobFull)[]>(job_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<JobFull, F>>>;

}

/**
 * MembershipsApi provides methods for interacting with Memberships resources.
 */
export class MembershipsApi {
  constructor(apiClient?: ApiClient);

  /**
   * createMembership - Returns compact representation by default
   */
  createMembership(): Promise<DataResponse<MembershipCompact>>;

  /**
   * createMembership - With string opt_fields (only gid guaranteed)
   */
  createMembership(opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<MembershipFull>>>;

  /**
   * createMembership - With array opt_fields (requested fields become required)
   */
  createMembership<F extends readonly (keyof MembershipFull)[]>(opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<MembershipFull, F>>>;

  /**
   * deleteMembership - Returns compact representation by default
   */
  deleteMembership(membership_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteMembership - With string opt_fields (only gid guaranteed)
   */
  deleteMembership(membership_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteMembership - With array opt_fields (requested fields become required)
   */
  deleteMembership<F extends readonly (keyof unknown)[]>(membership_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getMembership - Returns compact representation by default
   */
  getMembership(membership_gid: string): Promise<DataResponse<MembershipCompact>>;

  /**
   * getMembership - With string opt_fields (only gid guaranteed)
   */
  getMembership(membership_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<MembershipFull>>>;

  /**
   * getMembership - With array opt_fields (requested fields become required)
   */
  getMembership<F extends readonly (keyof MembershipFull)[]>(membership_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<MembershipFull, F>>>;

  /**
   * getMemberships - Returns compact representation by default
   */
  getMemberships(): Promise<Collection<MembershipCompact>>;

  /**
   * getMemberships - With string opt_fields (only gid guaranteed)
   */
  getMemberships(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<MembershipFull>>>;

  /**
   * getMemberships - With array opt_fields (requested fields become required)
   */
  getMemberships<F extends readonly (keyof MembershipFull)[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<MembershipFull, F>>>;

  /**
   * updateMembership - Returns compact representation by default
   */
  updateMembership(body: string, membership_gid: string): Promise<DataResponse<MembershipCompact>>;

  /**
   * updateMembership - With string opt_fields (only gid guaranteed)
   */
  updateMembership(body: string, membership_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<MembershipFull>>>;

  /**
   * updateMembership - With array opt_fields (requested fields become required)
   */
  updateMembership<F extends readonly (keyof MembershipFull)[]>(body: string, membership_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<MembershipFull, F>>>;

}

/**
 * OrganizationExportsApi provides methods for interacting with OrganizationExports resources.
 */
export class OrganizationExportsApi {
  constructor(apiClient?: ApiClient);

  /**
   * createOrganizationExport - Returns compact representation by default
   */
  createOrganizationExport(body: string): Promise<DataResponse<OrganizationExportCompact>>;

  /**
   * createOrganizationExport - With string opt_fields (only gid guaranteed)
   */
  createOrganizationExport(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<OrganizationExportFull>>>;

  /**
   * createOrganizationExport - With array opt_fields (requested fields become required)
   */
  createOrganizationExport<F extends readonly (keyof OrganizationExportFull)[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<OrganizationExportFull, F>>>;

  /**
   * getOrganizationExport - Returns compact representation by default
   */
  getOrganizationExport(organization_export_gid: string): Promise<DataResponse<OrganizationExportCompact>>;

  /**
   * getOrganizationExport - With string opt_fields (only gid guaranteed)
   */
  getOrganizationExport(organization_export_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<OrganizationExportFull>>>;

  /**
   * getOrganizationExport - With array opt_fields (requested fields become required)
   */
  getOrganizationExport<F extends readonly (keyof OrganizationExportFull)[]>(organization_export_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<OrganizationExportFull, F>>>;

}

/**
 * PortfolioMembershipsApi provides methods for interacting with PortfolioMemberships resources.
 */
export class PortfolioMembershipsApi {
  constructor(apiClient?: ApiClient);

  /**
   * getPortfolioMembership - Returns compact representation by default
   */
  getPortfolioMembership(portfolio_membership_gid: string): Promise<DataResponse<DeprecatedPortfolioMembershipCompact>>;

  /**
   * getPortfolioMembership - With string opt_fields (only gid guaranteed)
   */
  getPortfolioMembership(portfolio_membership_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<DeprecatedPortfolioMembershipFull>>>;

  /**
   * getPortfolioMembership - With array opt_fields (requested fields become required)
   */
  getPortfolioMembership<F extends readonly (keyof DeprecatedPortfolioMembershipFull)[]>(portfolio_membership_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<DeprecatedPortfolioMembershipFull, F>>>;

  /**
   * getPortfolioMemberships - Returns compact representation by default
   */
  getPortfolioMemberships(): Promise<Collection<DeprecatedPortfolioMembershipCompact>>;

  /**
   * getPortfolioMemberships - With string opt_fields (only gid guaranteed)
   */
  getPortfolioMemberships(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<DeprecatedPortfolioMembershipFull>>>;

  /**
   * getPortfolioMemberships - With array opt_fields (requested fields become required)
   */
  getPortfolioMemberships<F extends readonly (keyof DeprecatedPortfolioMembershipFull)[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<DeprecatedPortfolioMembershipFull, F>>>;

  /**
   * getPortfolioMembershipsForPortfolio - Returns compact representation by default
   */
  getPortfolioMembershipsForPortfolio(portfolio_gid: string): Promise<Collection<DeprecatedPortfolioMembershipCompact>>;

  /**
   * getPortfolioMembershipsForPortfolio - With string opt_fields (only gid guaranteed)
   */
  getPortfolioMembershipsForPortfolio(portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<DeprecatedPortfolioMembershipFull>>>;

  /**
   * getPortfolioMembershipsForPortfolio - With array opt_fields (requested fields become required)
   */
  getPortfolioMembershipsForPortfolio<F extends readonly (keyof DeprecatedPortfolioMembershipFull)[]>(portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<DeprecatedPortfolioMembershipFull, F>>>;

}

/**
 * PortfoliosApi provides methods for interacting with Portfolios resources.
 */
export class PortfoliosApi {
  constructor(apiClient?: ApiClient);

  /**
   * addCustomFieldSettingForPortfolio - Returns compact representation by default
   */
  addCustomFieldSettingForPortfolio(body: string, portfolio_gid: string): Promise<DataResponse<CustomFieldSettingCompact>>;

  /**
   * addCustomFieldSettingForPortfolio - With string opt_fields (only gid guaranteed)
   */
  addCustomFieldSettingForPortfolio(body: string, portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<CustomFieldSettingFull>>>;

  /**
   * addCustomFieldSettingForPortfolio - With array opt_fields (requested fields become required)
   */
  addCustomFieldSettingForPortfolio<F extends readonly (keyof CustomFieldSettingFull)[]>(body: string, portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<CustomFieldSettingFull, F>>>;

  /**
   * addItemForPortfolio - Returns compact representation by default
   */
  addItemForPortfolio(body: string, portfolio_gid: string): Promise<DataResponse<unknown>>;

  /**
   * addItemForPortfolio - With string opt_fields (only gid guaranteed)
   */
  addItemForPortfolio(body: string, portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * addItemForPortfolio - With array opt_fields (requested fields become required)
   */
  addItemForPortfolio<F extends readonly (keyof unknown)[]>(body: string, portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * addMembersForPortfolio - Returns compact representation by default
   */
  addMembersForPortfolio(body: string, portfolio_gid: string): Promise<DataResponse<PortfolioCompact>>;

  /**
   * addMembersForPortfolio - With string opt_fields (only gid guaranteed)
   */
  addMembersForPortfolio(body: string, portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<PortfolioFull>>>;

  /**
   * addMembersForPortfolio - With array opt_fields (requested fields become required)
   */
  addMembersForPortfolio<F extends readonly (keyof PortfolioFull)[]>(body: string, portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<PortfolioFull, F>>>;

  /**
   * createPortfolio - Returns compact representation by default
   */
  createPortfolio(body: string): Promise<DataResponse<PortfolioCompact>>;

  /**
   * createPortfolio - With string opt_fields (only gid guaranteed)
   */
  createPortfolio(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<PortfolioFull>>>;

  /**
   * createPortfolio - With array opt_fields (requested fields become required)
   */
  createPortfolio<F extends readonly (keyof PortfolioFull)[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<PortfolioFull, F>>>;

  /**
   * deletePortfolio - Returns compact representation by default
   */
  deletePortfolio(portfolio_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deletePortfolio - With string opt_fields (only gid guaranteed)
   */
  deletePortfolio(portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deletePortfolio - With array opt_fields (requested fields become required)
   */
  deletePortfolio<F extends readonly (keyof unknown)[]>(portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getItemsForPortfolio - Returns compact representation by default
   */
  getItemsForPortfolio(portfolio_gid: string): Promise<Collection<ProjectCompact>>;

  /**
   * getItemsForPortfolio - With string opt_fields (only gid guaranteed)
   */
  getItemsForPortfolio(portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<ProjectFull>>>;

  /**
   * getItemsForPortfolio - With array opt_fields (requested fields become required)
   */
  getItemsForPortfolio<F extends readonly (keyof ProjectFull)[]>(portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<ProjectFull, F>>>;

  /**
   * getPortfolio - Returns compact representation by default
   */
  getPortfolio(portfolio_gid: string): Promise<DataResponse<PortfolioCompact>>;

  /**
   * getPortfolio - With string opt_fields (only gid guaranteed)
   */
  getPortfolio(portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<PortfolioFull>>>;

  /**
   * getPortfolio - With array opt_fields (requested fields become required)
   */
  getPortfolio<F extends readonly (keyof PortfolioFull)[]>(portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<PortfolioFull, F>>>;

  /**
   * getPortfolios - Returns compact representation by default
   */
  getPortfolios(workspace: string): Promise<Collection<PortfolioCompact>>;

  /**
   * getPortfolios - With string opt_fields (only gid guaranteed)
   */
  getPortfolios(workspace: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<PortfolioFull>>>;

  /**
   * getPortfolios - With array opt_fields (requested fields become required)
   */
  getPortfolios<F extends readonly (keyof PortfolioFull)[]>(workspace: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<PortfolioFull, F>>>;

  /**
   * removeCustomFieldSettingForPortfolio - Returns compact representation by default
   */
  removeCustomFieldSettingForPortfolio(body: string, portfolio_gid: string): Promise<DataResponse<unknown>>;

  /**
   * removeCustomFieldSettingForPortfolio - With string opt_fields (only gid guaranteed)
   */
  removeCustomFieldSettingForPortfolio(body: string, portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * removeCustomFieldSettingForPortfolio - With array opt_fields (requested fields become required)
   */
  removeCustomFieldSettingForPortfolio<F extends readonly (keyof unknown)[]>(body: string, portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * removeItemForPortfolio - Returns compact representation by default
   */
  removeItemForPortfolio(body: string, portfolio_gid: string): Promise<DataResponse<unknown>>;

  /**
   * removeItemForPortfolio - With string opt_fields (only gid guaranteed)
   */
  removeItemForPortfolio(body: string, portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * removeItemForPortfolio - With array opt_fields (requested fields become required)
   */
  removeItemForPortfolio<F extends readonly (keyof unknown)[]>(body: string, portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * removeMembersForPortfolio - Returns compact representation by default
   */
  removeMembersForPortfolio(body: string, portfolio_gid: string): Promise<DataResponse<PortfolioCompact>>;

  /**
   * removeMembersForPortfolio - With string opt_fields (only gid guaranteed)
   */
  removeMembersForPortfolio(body: string, portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<PortfolioFull>>>;

  /**
   * removeMembersForPortfolio - With array opt_fields (requested fields become required)
   */
  removeMembersForPortfolio<F extends readonly (keyof PortfolioFull)[]>(body: string, portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<PortfolioFull, F>>>;

  /**
   * updatePortfolio - Returns compact representation by default
   */
  updatePortfolio(body: string, portfolio_gid: string): Promise<DataResponse<PortfolioCompact>>;

  /**
   * updatePortfolio - With string opt_fields (only gid guaranteed)
   */
  updatePortfolio(body: string, portfolio_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<PortfolioFull>>>;

  /**
   * updatePortfolio - With array opt_fields (requested fields become required)
   */
  updatePortfolio<F extends readonly (keyof PortfolioFull)[]>(body: string, portfolio_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<PortfolioFull, F>>>;

}

/**
 * ProjectBriefsApi provides methods for interacting with ProjectBriefs resources.
 */
export class ProjectBriefsApi {
  constructor(apiClient?: ApiClient);

  /**
   * createProjectBrief - Returns compact representation by default
   */
  createProjectBrief(body: string, project_gid: string): Promise<DataResponse<ProjectBriefCompact>>;

  /**
   * createProjectBrief - With string opt_fields (only gid guaranteed)
   */
  createProjectBrief(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectBriefFull>>>;

  /**
   * createProjectBrief - With array opt_fields (requested fields become required)
   */
  createProjectBrief<F extends readonly (keyof ProjectBriefFull)[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectBriefFull, F>>>;

  /**
   * deleteProjectBrief - Returns compact representation by default
   */
  deleteProjectBrief(project_brief_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteProjectBrief - With string opt_fields (only gid guaranteed)
   */
  deleteProjectBrief(project_brief_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteProjectBrief - With array opt_fields (requested fields become required)
   */
  deleteProjectBrief<F extends readonly (keyof unknown)[]>(project_brief_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getProjectBrief - Returns compact representation by default
   */
  getProjectBrief(project_brief_gid: string): Promise<DataResponse<ProjectBriefCompact>>;

  /**
   * getProjectBrief - With string opt_fields (only gid guaranteed)
   */
  getProjectBrief(project_brief_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectBriefFull>>>;

  /**
   * getProjectBrief - With array opt_fields (requested fields become required)
   */
  getProjectBrief<F extends readonly (keyof ProjectBriefFull)[]>(project_brief_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectBriefFull, F>>>;

  /**
   * updateProjectBrief - Returns compact representation by default
   */
  updateProjectBrief(body: string, project_brief_gid: string): Promise<DataResponse<ProjectBriefCompact>>;

  /**
   * updateProjectBrief - With string opt_fields (only gid guaranteed)
   */
  updateProjectBrief(body: string, project_brief_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectBriefFull>>>;

  /**
   * updateProjectBrief - With array opt_fields (requested fields become required)
   */
  updateProjectBrief<F extends readonly (keyof ProjectBriefFull)[]>(body: string, project_brief_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectBriefFull, F>>>;

}

/**
 * ProjectMembershipsApi provides methods for interacting with ProjectMemberships resources.
 */
export class ProjectMembershipsApi {
  constructor(apiClient?: ApiClient);

  /**
   * getProjectMembership - Returns compact representation by default
   */
  getProjectMembership(project_membership_gid: string): Promise<DataResponse<ProjectMembershipNormalFull>>;

  /**
   * getProjectMembership - With string opt_fields (only gid guaranteed)
   */
  getProjectMembership(project_membership_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectMembershipNormalFull>>>;

  /**
   * getProjectMembership - With array opt_fields (requested fields become required)
   */
  getProjectMembership<F extends readonly (keyof ProjectMembershipNormalFull)[]>(project_membership_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectMembershipNormalFull, F>>>;

  /**
   * getProjectMembershipsForProject - Returns compact representation by default
   */
  getProjectMembershipsForProject(project_gid: string): Promise<Collection<ProjectMembershipCompactFull>>;

  /**
   * getProjectMembershipsForProject - With string opt_fields (only gid guaranteed)
   */
  getProjectMembershipsForProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<ProjectMembershipCompactFull>>>;

  /**
   * getProjectMembershipsForProject - With array opt_fields (requested fields become required)
   */
  getProjectMembershipsForProject<F extends readonly (keyof ProjectMembershipCompactFull)[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<ProjectMembershipCompactFull, F>>>;

}

/**
 * ProjectStatusesApi provides methods for interacting with ProjectStatuses resources.
 */
export class ProjectStatusesApi {
  constructor(apiClient?: ApiClient);

  /**
   * createProjectStatusForProject - Returns compact representation by default
   */
  createProjectStatusForProject(body: string, project_gid: string): Promise<DataResponse<ProjectStatusCompact>>;

  /**
   * createProjectStatusForProject - With string opt_fields (only gid guaranteed)
   */
  createProjectStatusForProject(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectStatusFull>>>;

  /**
   * createProjectStatusForProject - With array opt_fields (requested fields become required)
   */
  createProjectStatusForProject<F extends readonly (keyof ProjectStatusFull)[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectStatusFull, F>>>;

  /**
   * deleteProjectStatus - Returns compact representation by default
   */
  deleteProjectStatus(project_status_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteProjectStatus - With string opt_fields (only gid guaranteed)
   */
  deleteProjectStatus(project_status_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteProjectStatus - With array opt_fields (requested fields become required)
   */
  deleteProjectStatus<F extends readonly (keyof unknown)[]>(project_status_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getProjectStatus - Returns compact representation by default
   */
  getProjectStatus(project_status_gid: string): Promise<DataResponse<ProjectStatusCompact>>;

  /**
   * getProjectStatus - With string opt_fields (only gid guaranteed)
   */
  getProjectStatus(project_status_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectStatusFull>>>;

  /**
   * getProjectStatus - With array opt_fields (requested fields become required)
   */
  getProjectStatus<F extends readonly (keyof ProjectStatusFull)[]>(project_status_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectStatusFull, F>>>;

  /**
   * getProjectStatusesForProject - Returns compact representation by default
   */
  getProjectStatusesForProject(project_gid: string): Promise<Collection<ProjectStatusCompact>>;

  /**
   * getProjectStatusesForProject - With string opt_fields (only gid guaranteed)
   */
  getProjectStatusesForProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<ProjectStatusFull>>>;

  /**
   * getProjectStatusesForProject - With array opt_fields (requested fields become required)
   */
  getProjectStatusesForProject<F extends readonly (keyof ProjectStatusFull)[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<ProjectStatusFull, F>>>;

}

/**
 * ProjectTemplatesApi provides methods for interacting with ProjectTemplates resources.
 */
export class ProjectTemplatesApi {
  constructor(apiClient?: ApiClient);

  /**
   * deleteProjectTemplate - Returns compact representation by default
   */
  deleteProjectTemplate(project_template_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteProjectTemplate - With string opt_fields (only gid guaranteed)
   */
  deleteProjectTemplate(project_template_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteProjectTemplate - With array opt_fields (requested fields become required)
   */
  deleteProjectTemplate<F extends readonly (keyof unknown)[]>(project_template_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getProjectTemplate - Returns compact representation by default
   */
  getProjectTemplate(project_template_gid: string): Promise<DataResponse<ProjectTemplateCompact>>;

  /**
   * getProjectTemplate - With string opt_fields (only gid guaranteed)
   */
  getProjectTemplate(project_template_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectTemplateFull>>>;

  /**
   * getProjectTemplate - With array opt_fields (requested fields become required)
   */
  getProjectTemplate<F extends readonly (keyof ProjectTemplateFull)[]>(project_template_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectTemplateFull, F>>>;

  /**
   * getProjectTemplates - Returns compact representation by default
   */
  getProjectTemplates(): Promise<Collection<ProjectTemplateCompact>>;

  /**
   * getProjectTemplates - With string opt_fields (only gid guaranteed)
   */
  getProjectTemplates(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<ProjectTemplateFull>>>;

  /**
   * getProjectTemplates - With array opt_fields (requested fields become required)
   */
  getProjectTemplates<F extends readonly (keyof ProjectTemplateFull)[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<ProjectTemplateFull, F>>>;

  /**
   * getProjectTemplatesForTeam - Returns compact representation by default
   */
  getProjectTemplatesForTeam(team_gid: string): Promise<Collection<ProjectTemplateCompact>>;

  /**
   * getProjectTemplatesForTeam - With string opt_fields (only gid guaranteed)
   */
  getProjectTemplatesForTeam(team_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<ProjectTemplateFull>>>;

  /**
   * getProjectTemplatesForTeam - With array opt_fields (requested fields become required)
   */
  getProjectTemplatesForTeam<F extends readonly (keyof ProjectTemplateFull)[]>(team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<ProjectTemplateFull, F>>>;

  /**
   * instantiateProject - Returns compact representation by default
   */
  instantiateProject(project_template_gid: string): Promise<DataResponse<JobCompact>>;

  /**
   * instantiateProject - With string opt_fields (only gid guaranteed)
   */
  instantiateProject(project_template_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<JobFull>>>;

  /**
   * instantiateProject - With array opt_fields (requested fields become required)
   */
  instantiateProject<F extends readonly (keyof JobFull)[]>(project_template_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<JobFull, F>>>;

}

/**
 * ProjectsApi provides methods for interacting with Projects resources.
 */
export class ProjectsApi {
  constructor(apiClient?: ApiClient);

  /**
   * addCustomFieldSettingForProject - Returns compact representation by default
   */
  addCustomFieldSettingForProject(body: string, project_gid: string): Promise<DataResponse<CustomFieldSettingCompact>>;

  /**
   * addCustomFieldSettingForProject - With string opt_fields (only gid guaranteed)
   */
  addCustomFieldSettingForProject(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<CustomFieldSettingFull>>>;

  /**
   * addCustomFieldSettingForProject - With array opt_fields (requested fields become required)
   */
  addCustomFieldSettingForProject<F extends readonly (keyof CustomFieldSettingFull)[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<CustomFieldSettingFull, F>>>;

  /**
   * addFollowersForProject - Returns compact representation by default
   */
  addFollowersForProject(body: string, project_gid: string): Promise<DataResponse<ProjectCompact>>;

  /**
   * addFollowersForProject - With string opt_fields (only gid guaranteed)
   */
  addFollowersForProject(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectFull>>>;

  /**
   * addFollowersForProject - With array opt_fields (requested fields become required)
   */
  addFollowersForProject<F extends readonly (keyof ProjectFull)[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectFull, F>>>;

  /**
   * addMembersForProject - Returns compact representation by default
   */
  addMembersForProject(body: string, project_gid: string): Promise<DataResponse<ProjectCompact>>;

  /**
   * addMembersForProject - With string opt_fields (only gid guaranteed)
   */
  addMembersForProject(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectFull>>>;

  /**
   * addMembersForProject - With array opt_fields (requested fields become required)
   */
  addMembersForProject<F extends readonly (keyof ProjectFull)[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectFull, F>>>;

  /**
   * createProject - Returns compact representation by default
   */
  createProject(body: string): Promise<DataResponse<ProjectCompact>>;

  /**
   * createProject - With string opt_fields (only gid guaranteed)
   */
  createProject(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectFull>>>;

  /**
   * createProject - With array opt_fields (requested fields become required)
   */
  createProject<F extends readonly (keyof ProjectFull)[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectFull, F>>>;

  /**
   * createProjectForTeam - Returns compact representation by default
   */
  createProjectForTeam(body: string, team_gid: string): Promise<DataResponse<ProjectCompact>>;

  /**
   * createProjectForTeam - With string opt_fields (only gid guaranteed)
   */
  createProjectForTeam(body: string, team_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectFull>>>;

  /**
   * createProjectForTeam - With array opt_fields (requested fields become required)
   */
  createProjectForTeam<F extends readonly (keyof ProjectFull)[]>(body: string, team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectFull, F>>>;

  /**
   * createProjectForWorkspace - Returns compact representation by default
   */
  createProjectForWorkspace(body: string, workspace_gid: string): Promise<DataResponse<ProjectCompact>>;

  /**
   * createProjectForWorkspace - With string opt_fields (only gid guaranteed)
   */
  createProjectForWorkspace(body: string, workspace_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectFull>>>;

  /**
   * createProjectForWorkspace - With array opt_fields (requested fields become required)
   */
  createProjectForWorkspace<F extends readonly (keyof ProjectFull)[]>(body: string, workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectFull, F>>>;

  /**
   * deleteProject - Returns compact representation by default
   */
  deleteProject(project_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteProject - With string opt_fields (only gid guaranteed)
   */
  deleteProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteProject - With array opt_fields (requested fields become required)
   */
  deleteProject<F extends readonly (keyof unknown)[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * duplicateProject - Returns compact representation by default
   */
  duplicateProject(project_gid: string): Promise<DataResponse<JobCompact>>;

  /**
   * duplicateProject - With string opt_fields (only gid guaranteed)
   */
  duplicateProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<JobFull>>>;

  /**
   * duplicateProject - With array opt_fields (requested fields become required)
   */
  duplicateProject<F extends readonly (keyof JobFull)[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<JobFull, F>>>;

  /**
   * getProject - Returns compact representation by default
   */
  getProject(project_gid: string): Promise<DataResponse<ProjectCompact>>;

  /**
   * getProject - With string opt_fields (only gid guaranteed)
   */
  getProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectFull>>>;

  /**
   * getProject - With array opt_fields (requested fields become required)
   */
  getProject<F extends readonly (keyof ProjectFull)[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectFull, F>>>;

  /**
   * getProjects - Returns compact representation by default
   */
  getProjects(): Promise<Collection<ProjectCompact>>;

  /**
   * getProjects - With string opt_fields (only gid guaranteed)
   */
  getProjects(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<ProjectFull>>>;

  /**
   * getProjects - With array opt_fields (requested fields become required)
   */
  getProjects<F extends readonly (keyof ProjectFull)[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<ProjectFull, F>>>;

  /**
   * getProjectsForTask - Returns compact representation by default
   */
  getProjectsForTask(task_gid: string): Promise<Collection<ProjectCompact>>;

  /**
   * getProjectsForTask - With string opt_fields (only gid guaranteed)
   */
  getProjectsForTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<ProjectFull>>>;

  /**
   * getProjectsForTask - With array opt_fields (requested fields become required)
   */
  getProjectsForTask<F extends readonly (keyof ProjectFull)[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<ProjectFull, F>>>;

  /**
   * getProjectsForTeam - Returns compact representation by default
   */
  getProjectsForTeam(team_gid: string): Promise<Collection<ProjectCompact>>;

  /**
   * getProjectsForTeam - With string opt_fields (only gid guaranteed)
   */
  getProjectsForTeam(team_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<ProjectFull>>>;

  /**
   * getProjectsForTeam - With array opt_fields (requested fields become required)
   */
  getProjectsForTeam<F extends readonly (keyof ProjectFull)[]>(team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<ProjectFull, F>>>;

  /**
   * getProjectsForWorkspace - Returns compact representation by default
   */
  getProjectsForWorkspace(workspace_gid: string): Promise<Collection<ProjectCompact>>;

  /**
   * getProjectsForWorkspace - With string opt_fields (only gid guaranteed)
   */
  getProjectsForWorkspace(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<ProjectFull>>>;

  /**
   * getProjectsForWorkspace - With array opt_fields (requested fields become required)
   */
  getProjectsForWorkspace<F extends readonly (keyof ProjectFull)[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<ProjectFull, F>>>;

  /**
   * getTaskCountsForProject - Returns compact representation by default
   */
  getTaskCountsForProject(project_gid: string): Promise<DataResponse<TaskCountFull>>;

  /**
   * getTaskCountsForProject - With string opt_fields (only gid guaranteed)
   */
  getTaskCountsForProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TaskCountFull>>>;

  /**
   * getTaskCountsForProject - With array opt_fields (requested fields become required)
   */
  getTaskCountsForProject<F extends readonly (keyof TaskCountFull)[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TaskCountFull, F>>>;

  /**
   * projectSaveAsTemplate - Returns compact representation by default
   */
  projectSaveAsTemplate(body: string, project_gid: string): Promise<DataResponse<JobCompact>>;

  /**
   * projectSaveAsTemplate - With string opt_fields (only gid guaranteed)
   */
  projectSaveAsTemplate(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<JobFull>>>;

  /**
   * projectSaveAsTemplate - With array opt_fields (requested fields become required)
   */
  projectSaveAsTemplate<F extends readonly (keyof JobFull)[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<JobFull, F>>>;

  /**
   * removeCustomFieldSettingForProject - Returns compact representation by default
   */
  removeCustomFieldSettingForProject(body: string, project_gid: string): Promise<DataResponse<unknown>>;

  /**
   * removeCustomFieldSettingForProject - With string opt_fields (only gid guaranteed)
   */
  removeCustomFieldSettingForProject(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * removeCustomFieldSettingForProject - With array opt_fields (requested fields become required)
   */
  removeCustomFieldSettingForProject<F extends readonly (keyof unknown)[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * removeFollowersForProject - Returns compact representation by default
   */
  removeFollowersForProject(body: string, project_gid: string): Promise<DataResponse<ProjectCompact>>;

  /**
   * removeFollowersForProject - With string opt_fields (only gid guaranteed)
   */
  removeFollowersForProject(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectFull>>>;

  /**
   * removeFollowersForProject - With array opt_fields (requested fields become required)
   */
  removeFollowersForProject<F extends readonly (keyof ProjectFull)[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectFull, F>>>;

  /**
   * removeMembersForProject - Returns compact representation by default
   */
  removeMembersForProject(body: string, project_gid: string): Promise<DataResponse<ProjectCompact>>;

  /**
   * removeMembersForProject - With string opt_fields (only gid guaranteed)
   */
  removeMembersForProject(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectFull>>>;

  /**
   * removeMembersForProject - With array opt_fields (requested fields become required)
   */
  removeMembersForProject<F extends readonly (keyof ProjectFull)[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectFull, F>>>;

  /**
   * updateProject - Returns compact representation by default
   */
  updateProject(body: string, project_gid: string): Promise<DataResponse<ProjectCompact>>;

  /**
   * updateProject - With string opt_fields (only gid guaranteed)
   */
  updateProject(body: string, project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<ProjectFull>>>;

  /**
   * updateProject - With array opt_fields (requested fields become required)
   */
  updateProject<F extends readonly (keyof ProjectFull)[]>(body: string, project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<ProjectFull, F>>>;

}

/**
 * RatesApi provides methods for interacting with Rates resources.
 */
export class RatesApi {
  constructor(apiClient?: ApiClient);

  /**
   * createRate - Returns compact representation by default
   */
  createRate(body: string): Promise<DataResponse<RateCompact>>;

  /**
   * createRate - With string opt_fields (only gid guaranteed)
   */
  createRate(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<RateFull>>>;

  /**
   * createRate - With array opt_fields (requested fields become required)
   */
  createRate<F extends readonly (keyof RateFull)[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<RateFull, F>>>;

  /**
   * deleteRate - Returns compact representation by default
   */
  deleteRate(rate_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteRate - With string opt_fields (only gid guaranteed)
   */
  deleteRate(rate_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteRate - With array opt_fields (requested fields become required)
   */
  deleteRate<F extends readonly (keyof unknown)[]>(rate_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getRate - Returns compact representation by default
   */
  getRate(rate_gid: string): Promise<DataResponse<RateCompact>>;

  /**
   * getRate - With string opt_fields (only gid guaranteed)
   */
  getRate(rate_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<RateFull>>>;

  /**
   * getRate - With array opt_fields (requested fields become required)
   */
  getRate<F extends readonly (keyof RateFull)[]>(rate_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<RateFull, F>>>;

  /**
   * getRates - Returns compact representation by default
   */
  getRates(): Promise<Collection<unknown>>;

  /**
   * getRates - With string opt_fields (only gid guaranteed)
   */
  getRates(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<unknown>>>;

  /**
   * getRates - With array opt_fields (requested fields become required)
   */
  getRates<F extends readonly (keyof unknown)[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<unknown, F>>>;

  /**
   * updateRate - Returns compact representation by default
   */
  updateRate(body: string, rate_gid: string): Promise<DataResponse<RateCompact>>;

  /**
   * updateRate - With string opt_fields (only gid guaranteed)
   */
  updateRate(body: string, rate_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<RateFull>>>;

  /**
   * updateRate - With array opt_fields (requested fields become required)
   */
  updateRate<F extends readonly (keyof RateFull)[]>(body: string, rate_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<RateFull, F>>>;

}

/**
 * ReactionsApi provides methods for interacting with Reactions resources.
 */
export class ReactionsApi {
  constructor(apiClient?: ApiClient);

  /**
   * getReactionsOnObject
   */
  getReactionsOnObject(target: string, emoji_base: string): Promise<Collection<unknown>>;

}

/**
 * RulesApi provides methods for interacting with Rules resources.
 */
export class RulesApi {
  constructor(apiClient?: ApiClient);

  /**
   * triggerRule
   */
  triggerRule(body: string, rule_trigger_gid: string): Promise<DataResponse<RuleTriggerFull>>;

}

/**
 * SectionsApi provides methods for interacting with Sections resources.
 */
export class SectionsApi {
  constructor(apiClient?: ApiClient);

  /**
   * addTaskForSection - Returns compact representation by default
   */
  addTaskForSection(section_gid: string): Promise<DataResponse<unknown>>;

  /**
   * addTaskForSection - With string opt_fields (only gid guaranteed)
   */
  addTaskForSection(section_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * addTaskForSection - With array opt_fields (requested fields become required)
   */
  addTaskForSection<F extends readonly (keyof unknown)[]>(section_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * createSectionForProject - Returns compact representation by default
   */
  createSectionForProject(project_gid: string): Promise<DataResponse<SectionCompact>>;

  /**
   * createSectionForProject - With string opt_fields (only gid guaranteed)
   */
  createSectionForProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<SectionFull>>>;

  /**
   * createSectionForProject - With array opt_fields (requested fields become required)
   */
  createSectionForProject<F extends readonly (keyof SectionFull)[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<SectionFull, F>>>;

  /**
   * deleteSection - Returns compact representation by default
   */
  deleteSection(section_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteSection - With string opt_fields (only gid guaranteed)
   */
  deleteSection(section_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteSection - With array opt_fields (requested fields become required)
   */
  deleteSection<F extends readonly (keyof unknown)[]>(section_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getSection - Returns compact representation by default
   */
  getSection(section_gid: string): Promise<DataResponse<SectionCompact>>;

  /**
   * getSection - With string opt_fields (only gid guaranteed)
   */
  getSection(section_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<SectionFull>>>;

  /**
   * getSection - With array opt_fields (requested fields become required)
   */
  getSection<F extends readonly (keyof SectionFull)[]>(section_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<SectionFull, F>>>;

  /**
   * getSectionsForProject - Returns compact representation by default
   */
  getSectionsForProject(project_gid: string): Promise<Collection<SectionCompact>>;

  /**
   * getSectionsForProject - With string opt_fields (only gid guaranteed)
   */
  getSectionsForProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<SectionFull>>>;

  /**
   * getSectionsForProject - With array opt_fields (requested fields become required)
   */
  getSectionsForProject<F extends readonly (keyof SectionFull)[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<SectionFull, F>>>;

  /**
   * insertSectionForProject - Returns compact representation by default
   */
  insertSectionForProject(project_gid: string): Promise<DataResponse<unknown>>;

  /**
   * insertSectionForProject - With string opt_fields (only gid guaranteed)
   */
  insertSectionForProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * insertSectionForProject - With array opt_fields (requested fields become required)
   */
  insertSectionForProject<F extends readonly (keyof unknown)[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * updateSection - Returns compact representation by default
   */
  updateSection(section_gid: string): Promise<DataResponse<SectionCompact>>;

  /**
   * updateSection - With string opt_fields (only gid guaranteed)
   */
  updateSection(section_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<SectionFull>>>;

  /**
   * updateSection - With array opt_fields (requested fields become required)
   */
  updateSection<F extends readonly (keyof SectionFull)[]>(section_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<SectionFull, F>>>;

}

/**
 * StatusUpdatesApi provides methods for interacting with StatusUpdates resources.
 */
export class StatusUpdatesApi {
  constructor(apiClient?: ApiClient);

  /**
   * createStatusForObject - Returns compact representation by default
   */
  createStatusForObject(body: string): Promise<DataResponse<StatusUpdateCompact>>;

  /**
   * createStatusForObject - With string opt_fields (only gid guaranteed)
   */
  createStatusForObject(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<StatusUpdateFull>>>;

  /**
   * createStatusForObject - With array opt_fields (requested fields become required)
   */
  createStatusForObject<F extends readonly (keyof StatusUpdateFull)[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<StatusUpdateFull, F>>>;

  /**
   * deleteStatus - Returns compact representation by default
   */
  deleteStatus(status_update_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteStatus - With string opt_fields (only gid guaranteed)
   */
  deleteStatus(status_update_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteStatus - With array opt_fields (requested fields become required)
   */
  deleteStatus<F extends readonly (keyof unknown)[]>(status_update_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getStatus - Returns compact representation by default
   */
  getStatus(status_update_gid: string): Promise<DataResponse<StatusUpdateCompact>>;

  /**
   * getStatus - With string opt_fields (only gid guaranteed)
   */
  getStatus(status_update_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<StatusUpdateFull>>>;

  /**
   * getStatus - With array opt_fields (requested fields become required)
   */
  getStatus<F extends readonly (keyof StatusUpdateFull)[]>(status_update_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<StatusUpdateFull, F>>>;

  /**
   * getStatusesForObject - Returns compact representation by default
   */
  getStatusesForObject(parent: string): Promise<Collection<StatusUpdateCompact>>;

  /**
   * getStatusesForObject - With string opt_fields (only gid guaranteed)
   */
  getStatusesForObject(parent: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<StatusUpdateFull>>>;

  /**
   * getStatusesForObject - With array opt_fields (requested fields become required)
   */
  getStatusesForObject<F extends readonly (keyof StatusUpdateFull)[]>(parent: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<StatusUpdateFull, F>>>;

}

/**
 * StoriesApi provides methods for interacting with Stories resources.
 */
export class StoriesApi {
  constructor(apiClient?: ApiClient);

  /**
   * createStoryForTask - Returns compact representation by default
   */
  createStoryForTask(body: string, task_gid: string): Promise<DataResponse<StoryCompact>>;

  /**
   * createStoryForTask - With string opt_fields (only gid guaranteed)
   */
  createStoryForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<StoryFull>>>;

  /**
   * createStoryForTask - With array opt_fields (requested fields become required)
   */
  createStoryForTask<F extends readonly (keyof StoryFull)[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<StoryFull, F>>>;

  /**
   * deleteStory - Returns compact representation by default
   */
  deleteStory(story_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteStory - With string opt_fields (only gid guaranteed)
   */
  deleteStory(story_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteStory - With array opt_fields (requested fields become required)
   */
  deleteStory<F extends readonly (keyof unknown)[]>(story_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getStoriesForTask - Returns compact representation by default
   */
  getStoriesForTask(task_gid: string): Promise<Collection<StoryCompact>>;

  /**
   * getStoriesForTask - With string opt_fields (only gid guaranteed)
   */
  getStoriesForTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<StoryFull>>>;

  /**
   * getStoriesForTask - With array opt_fields (requested fields become required)
   */
  getStoriesForTask<F extends readonly (keyof StoryFull)[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<StoryFull, F>>>;

  /**
   * getStory - Returns compact representation by default
   */
  getStory(story_gid: string): Promise<DataResponse<StoryCompact>>;

  /**
   * getStory - With string opt_fields (only gid guaranteed)
   */
  getStory(story_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<StoryFull>>>;

  /**
   * getStory - With array opt_fields (requested fields become required)
   */
  getStory<F extends readonly (keyof StoryFull)[]>(story_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<StoryFull, F>>>;

  /**
   * updateStory - Returns compact representation by default
   */
  updateStory(body: string, story_gid: string): Promise<DataResponse<StoryCompact>>;

  /**
   * updateStory - With string opt_fields (only gid guaranteed)
   */
  updateStory(body: string, story_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<StoryFull>>>;

  /**
   * updateStory - With array opt_fields (requested fields become required)
   */
  updateStory<F extends readonly (keyof StoryFull)[]>(body: string, story_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<StoryFull, F>>>;

}

/**
 * TagsApi provides methods for interacting with Tags resources.
 */
export class TagsApi {
  constructor(apiClient?: ApiClient);

  /**
   * createTag - Returns compact representation by default
   */
  createTag(body: string): Promise<DataResponse<TagCompact>>;

  /**
   * createTag - With string opt_fields (only gid guaranteed)
   */
  createTag(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TagFull>>>;

  /**
   * createTag - With array opt_fields (requested fields become required)
   */
  createTag<F extends readonly (keyof TagFull)[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TagFull, F>>>;

  /**
   * createTagForWorkspace - Returns compact representation by default
   */
  createTagForWorkspace(body: string, workspace_gid: string): Promise<DataResponse<TagCompact>>;

  /**
   * createTagForWorkspace - With string opt_fields (only gid guaranteed)
   */
  createTagForWorkspace(body: string, workspace_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TagFull>>>;

  /**
   * createTagForWorkspace - With array opt_fields (requested fields become required)
   */
  createTagForWorkspace<F extends readonly (keyof TagFull)[]>(body: string, workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TagFull, F>>>;

  /**
   * deleteTag - Returns compact representation by default
   */
  deleteTag(tag_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteTag - With string opt_fields (only gid guaranteed)
   */
  deleteTag(tag_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteTag - With array opt_fields (requested fields become required)
   */
  deleteTag<F extends readonly (keyof unknown)[]>(tag_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getTag - Returns compact representation by default
   */
  getTag(tag_gid: string): Promise<DataResponse<TagCompact>>;

  /**
   * getTag - With string opt_fields (only gid guaranteed)
   */
  getTag(tag_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TagFull>>>;

  /**
   * getTag - With array opt_fields (requested fields become required)
   */
  getTag<F extends readonly (keyof TagFull)[]>(tag_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TagFull, F>>>;

  /**
   * getTags - Returns compact representation by default
   */
  getTags(): Promise<Collection<TagCompact>>;

  /**
   * getTags - With string opt_fields (only gid guaranteed)
   */
  getTags(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TagFull>>>;

  /**
   * getTags - With array opt_fields (requested fields become required)
   */
  getTags<F extends readonly (keyof TagFull)[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TagFull, F>>>;

  /**
   * getTagsForTask - Returns compact representation by default
   */
  getTagsForTask(task_gid: string): Promise<Collection<TagCompact>>;

  /**
   * getTagsForTask - With string opt_fields (only gid guaranteed)
   */
  getTagsForTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TagFull>>>;

  /**
   * getTagsForTask - With array opt_fields (requested fields become required)
   */
  getTagsForTask<F extends readonly (keyof TagFull)[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TagFull, F>>>;

  /**
   * getTagsForWorkspace - Returns compact representation by default
   */
  getTagsForWorkspace(workspace_gid: string): Promise<Collection<TagCompact>>;

  /**
   * getTagsForWorkspace - With string opt_fields (only gid guaranteed)
   */
  getTagsForWorkspace(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TagFull>>>;

  /**
   * getTagsForWorkspace - With array opt_fields (requested fields become required)
   */
  getTagsForWorkspace<F extends readonly (keyof TagFull)[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TagFull, F>>>;

  /**
   * updateTag - Returns compact representation by default
   */
  updateTag(body: string, tag_gid: string): Promise<DataResponse<TagCompact>>;

  /**
   * updateTag - With string opt_fields (only gid guaranteed)
   */
  updateTag(body: string, tag_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TagFull>>>;

  /**
   * updateTag - With array opt_fields (requested fields become required)
   */
  updateTag<F extends readonly (keyof TagFull)[]>(body: string, tag_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TagFull, F>>>;

}

/**
 * TaskTemplatesApi provides methods for interacting with TaskTemplates resources.
 */
export class TaskTemplatesApi {
  constructor(apiClient?: ApiClient);

  /**
   * deleteTaskTemplate - Returns compact representation by default
   */
  deleteTaskTemplate(task_template_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteTaskTemplate - With string opt_fields (only gid guaranteed)
   */
  deleteTaskTemplate(task_template_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteTaskTemplate - With array opt_fields (requested fields become required)
   */
  deleteTaskTemplate<F extends readonly (keyof unknown)[]>(task_template_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getTaskTemplate - Returns compact representation by default
   */
  getTaskTemplate(task_template_gid: string): Promise<DataResponse<TaskTemplateCompact>>;

  /**
   * getTaskTemplate - With string opt_fields (only gid guaranteed)
   */
  getTaskTemplate(task_template_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TaskTemplateFull>>>;

  /**
   * getTaskTemplate - With array opt_fields (requested fields become required)
   */
  getTaskTemplate<F extends readonly (keyof TaskTemplateFull)[]>(task_template_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TaskTemplateFull, F>>>;

  /**
   * getTaskTemplates - Returns compact representation by default
   */
  getTaskTemplates(): Promise<Collection<TaskTemplateCompact>>;

  /**
   * getTaskTemplates - With string opt_fields (only gid guaranteed)
   */
  getTaskTemplates(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TaskTemplateFull>>>;

  /**
   * getTaskTemplates - With array opt_fields (requested fields become required)
   */
  getTaskTemplates<F extends readonly (keyof TaskTemplateFull)[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TaskTemplateFull, F>>>;

  /**
   * instantiateTask - Returns compact representation by default
   */
  instantiateTask(task_template_gid: string): Promise<DataResponse<JobCompact>>;

  /**
   * instantiateTask - With string opt_fields (only gid guaranteed)
   */
  instantiateTask(task_template_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<JobFull>>>;

  /**
   * instantiateTask - With array opt_fields (requested fields become required)
   */
  instantiateTask<F extends readonly (keyof JobFull)[]>(task_template_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<JobFull, F>>>;

}

/**
 * TasksApi provides methods for interacting with Tasks resources.
 */
export class TasksApi {
  constructor(apiClient?: ApiClient);

  /**
   * addDependenciesForTask - Returns compact representation by default
   */
  addDependenciesForTask(body: string, task_gid: string): Promise<DataResponse<unknown>>;

  /**
   * addDependenciesForTask - With string opt_fields (only gid guaranteed)
   */
  addDependenciesForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * addDependenciesForTask - With array opt_fields (requested fields become required)
   */
  addDependenciesForTask<F extends readonly (keyof unknown)[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * addDependentsForTask - Returns compact representation by default
   */
  addDependentsForTask(body: string, task_gid: string): Promise<DataResponse<unknown>>;

  /**
   * addDependentsForTask - With string opt_fields (only gid guaranteed)
   */
  addDependentsForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * addDependentsForTask - With array opt_fields (requested fields become required)
   */
  addDependentsForTask<F extends readonly (keyof unknown)[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * addFollowersForTask - Returns compact representation by default
   */
  addFollowersForTask(body: string, task_gid: string): Promise<DataResponse<TaskCompact>>;

  /**
   * addFollowersForTask - With string opt_fields (only gid guaranteed)
   */
  addFollowersForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TaskFull>>>;

  /**
   * addFollowersForTask - With array opt_fields (requested fields become required)
   */
  addFollowersForTask<F extends readonly (keyof TaskFull)[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TaskFull, F>>>;

  /**
   * addProjectForTask - Returns compact representation by default
   */
  addProjectForTask(body: string, task_gid: string): Promise<DataResponse<unknown>>;

  /**
   * addProjectForTask - With string opt_fields (only gid guaranteed)
   */
  addProjectForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * addProjectForTask - With array opt_fields (requested fields become required)
   */
  addProjectForTask<F extends readonly (keyof unknown)[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * addTagForTask - Returns compact representation by default
   */
  addTagForTask(body: string, task_gid: string): Promise<DataResponse<unknown>>;

  /**
   * addTagForTask - With string opt_fields (only gid guaranteed)
   */
  addTagForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * addTagForTask - With array opt_fields (requested fields become required)
   */
  addTagForTask<F extends readonly (keyof unknown)[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * createSubtaskForTask - Returns compact representation by default
   */
  createSubtaskForTask(body: string, task_gid: string): Promise<DataResponse<TaskCompact>>;

  /**
   * createSubtaskForTask - With string opt_fields (only gid guaranteed)
   */
  createSubtaskForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TaskFull>>>;

  /**
   * createSubtaskForTask - With array opt_fields (requested fields become required)
   */
  createSubtaskForTask<F extends readonly (keyof TaskFull)[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TaskFull, F>>>;

  /**
   * createTask - Returns compact representation by default
   */
  createTask(body: string): Promise<DataResponse<TaskCompact>>;

  /**
   * createTask - With string opt_fields (only gid guaranteed)
   */
  createTask(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TaskFull>>>;

  /**
   * createTask - With array opt_fields (requested fields become required)
   */
  createTask<F extends readonly (keyof TaskFull)[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TaskFull, F>>>;

  /**
   * deleteTask - Returns compact representation by default
   */
  deleteTask(task_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteTask - With string opt_fields (only gid guaranteed)
   */
  deleteTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteTask - With array opt_fields (requested fields become required)
   */
  deleteTask<F extends readonly (keyof unknown)[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * duplicateTask - Returns compact representation by default
   */
  duplicateTask(body: string, task_gid: string): Promise<DataResponse<JobCompact>>;

  /**
   * duplicateTask - With string opt_fields (only gid guaranteed)
   */
  duplicateTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<JobFull>>>;

  /**
   * duplicateTask - With array opt_fields (requested fields become required)
   */
  duplicateTask<F extends readonly (keyof JobFull)[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<JobFull, F>>>;

  /**
   * getDependenciesForTask - Returns compact representation by default
   */
  getDependenciesForTask(task_gid: string): Promise<Collection<TaskCompact>>;

  /**
   * getDependenciesForTask - With string opt_fields (only gid guaranteed)
   */
  getDependenciesForTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TaskFull>>>;

  /**
   * getDependenciesForTask - With array opt_fields (requested fields become required)
   */
  getDependenciesForTask<F extends readonly (keyof TaskFull)[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TaskFull, F>>>;

  /**
   * getDependentsForTask - Returns compact representation by default
   */
  getDependentsForTask(task_gid: string): Promise<Collection<TaskCompact>>;

  /**
   * getDependentsForTask - With string opt_fields (only gid guaranteed)
   */
  getDependentsForTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TaskFull>>>;

  /**
   * getDependentsForTask - With array opt_fields (requested fields become required)
   */
  getDependentsForTask<F extends readonly (keyof TaskFull)[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TaskFull, F>>>;

  /**
   * getSubtasksForTask - Returns compact representation by default
   */
  getSubtasksForTask(task_gid: string): Promise<Collection<TaskCompact>>;

  /**
   * getSubtasksForTask - With string opt_fields (only gid guaranteed)
   */
  getSubtasksForTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TaskFull>>>;

  /**
   * getSubtasksForTask - With array opt_fields (requested fields become required)
   */
  getSubtasksForTask<F extends readonly (keyof TaskFull)[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TaskFull, F>>>;

  /**
   * getTask - Returns compact representation by default
   */
  getTask(task_gid: string): Promise<DataResponse<TaskCompact>>;

  /**
   * getTask - With string opt_fields (only gid guaranteed)
   */
  getTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TaskFull>>>;

  /**
   * getTask - With array opt_fields (requested fields become required)
   */
  getTask<F extends readonly (keyof TaskFull)[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TaskFull, F>>>;

  /**
   * getTaskForCustomID - Returns compact representation by default
   */
  getTaskForCustomID(workspace_gid: string, custom_id: string): Promise<DataResponse<TaskCompact>>;

  /**
   * getTaskForCustomID - With string opt_fields (only gid guaranteed)
   */
  getTaskForCustomID(workspace_gid: string, custom_id: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TaskFull>>>;

  /**
   * getTaskForCustomID - With array opt_fields (requested fields become required)
   */
  getTaskForCustomID<F extends readonly (keyof TaskFull)[]>(workspace_gid: string, custom_id: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TaskFull, F>>>;

  /**
   * getTasks - Returns compact representation by default
   */
  getTasks(): Promise<Collection<TaskCompact>>;

  /**
   * getTasks - With string opt_fields (only gid guaranteed)
   */
  getTasks(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TaskFull>>>;

  /**
   * getTasks - With array opt_fields (requested fields become required)
   */
  getTasks<F extends readonly (keyof TaskFull)[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TaskFull, F>>>;

  /**
   * getTasksForProject - Returns compact representation by default
   */
  getTasksForProject(project_gid: string): Promise<Collection<TaskCompact>>;

  /**
   * getTasksForProject - With string opt_fields (only gid guaranteed)
   */
  getTasksForProject(project_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TaskFull>>>;

  /**
   * getTasksForProject - With array opt_fields (requested fields become required)
   */
  getTasksForProject<F extends readonly (keyof TaskFull)[]>(project_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TaskFull, F>>>;

  /**
   * getTasksForSection - Returns compact representation by default
   */
  getTasksForSection(section_gid: string): Promise<Collection<TaskCompact>>;

  /**
   * getTasksForSection - With string opt_fields (only gid guaranteed)
   */
  getTasksForSection(section_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TaskFull>>>;

  /**
   * getTasksForSection - With array opt_fields (requested fields become required)
   */
  getTasksForSection<F extends readonly (keyof TaskFull)[]>(section_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TaskFull, F>>>;

  /**
   * getTasksForTag - Returns compact representation by default
   */
  getTasksForTag(tag_gid: string): Promise<Collection<TaskCompact>>;

  /**
   * getTasksForTag - With string opt_fields (only gid guaranteed)
   */
  getTasksForTag(tag_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TaskFull>>>;

  /**
   * getTasksForTag - With array opt_fields (requested fields become required)
   */
  getTasksForTag<F extends readonly (keyof TaskFull)[]>(tag_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TaskFull, F>>>;

  /**
   * getTasksForUserTaskList - Returns compact representation by default
   */
  getTasksForUserTaskList(user_task_list_gid: string): Promise<Collection<TaskCompact>>;

  /**
   * getTasksForUserTaskList - With string opt_fields (only gid guaranteed)
   */
  getTasksForUserTaskList(user_task_list_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TaskFull>>>;

  /**
   * getTasksForUserTaskList - With array opt_fields (requested fields become required)
   */
  getTasksForUserTaskList<F extends readonly (keyof TaskFull)[]>(user_task_list_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TaskFull, F>>>;

  /**
   * removeDependenciesForTask - Returns compact representation by default
   */
  removeDependenciesForTask(body: string, task_gid: string): Promise<DataResponse<unknown>>;

  /**
   * removeDependenciesForTask - With string opt_fields (only gid guaranteed)
   */
  removeDependenciesForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * removeDependenciesForTask - With array opt_fields (requested fields become required)
   */
  removeDependenciesForTask<F extends readonly (keyof unknown)[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * removeDependentsForTask - Returns compact representation by default
   */
  removeDependentsForTask(body: string, task_gid: string): Promise<DataResponse<unknown>>;

  /**
   * removeDependentsForTask - With string opt_fields (only gid guaranteed)
   */
  removeDependentsForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * removeDependentsForTask - With array opt_fields (requested fields become required)
   */
  removeDependentsForTask<F extends readonly (keyof unknown)[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * removeFollowerForTask - Returns compact representation by default
   */
  removeFollowerForTask(body: string, task_gid: string): Promise<DataResponse<TaskCompact>>;

  /**
   * removeFollowerForTask - With string opt_fields (only gid guaranteed)
   */
  removeFollowerForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TaskFull>>>;

  /**
   * removeFollowerForTask - With array opt_fields (requested fields become required)
   */
  removeFollowerForTask<F extends readonly (keyof TaskFull)[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TaskFull, F>>>;

  /**
   * removeProjectForTask - Returns compact representation by default
   */
  removeProjectForTask(body: string, task_gid: string): Promise<DataResponse<unknown>>;

  /**
   * removeProjectForTask - With string opt_fields (only gid guaranteed)
   */
  removeProjectForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * removeProjectForTask - With array opt_fields (requested fields become required)
   */
  removeProjectForTask<F extends readonly (keyof unknown)[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * removeTagForTask - Returns compact representation by default
   */
  removeTagForTask(body: string, task_gid: string): Promise<DataResponse<unknown>>;

  /**
   * removeTagForTask - With string opt_fields (only gid guaranteed)
   */
  removeTagForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * removeTagForTask - With array opt_fields (requested fields become required)
   */
  removeTagForTask<F extends readonly (keyof unknown)[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * searchTasksForWorkspace - Returns compact representation by default
   */
  searchTasksForWorkspace(workspace_gid: string): Promise<Collection<TaskCompact>>;

  /**
   * searchTasksForWorkspace - With string opt_fields (only gid guaranteed)
   */
  searchTasksForWorkspace(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TaskFull>>>;

  /**
   * searchTasksForWorkspace - With array opt_fields (requested fields become required)
   */
  searchTasksForWorkspace<F extends readonly (keyof TaskFull)[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TaskFull, F>>>;

  /**
   * setParentForTask - Returns compact representation by default
   */
  setParentForTask(body: string, task_gid: string): Promise<DataResponse<TaskCompact>>;

  /**
   * setParentForTask - With string opt_fields (only gid guaranteed)
   */
  setParentForTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TaskFull>>>;

  /**
   * setParentForTask - With array opt_fields (requested fields become required)
   */
  setParentForTask<F extends readonly (keyof TaskFull)[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TaskFull, F>>>;

  /**
   * updateTask - Returns compact representation by default
   */
  updateTask(body: string, task_gid: string): Promise<DataResponse<TaskCompact>>;

  /**
   * updateTask - With string opt_fields (only gid guaranteed)
   */
  updateTask(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TaskFull>>>;

  /**
   * updateTask - With array opt_fields (requested fields become required)
   */
  updateTask<F extends readonly (keyof TaskFull)[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TaskFull, F>>>;

}

/**
 * TeamMembershipsApi provides methods for interacting with TeamMemberships resources.
 */
export class TeamMembershipsApi {
  constructor(apiClient?: ApiClient);

  /**
   * getTeamMembership - Returns compact representation by default
   */
  getTeamMembership(team_membership_gid: string): Promise<DataResponse<TeamMembershipCompact>>;

  /**
   * getTeamMembership - With string opt_fields (only gid guaranteed)
   */
  getTeamMembership(team_membership_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TeamMembershipFull>>>;

  /**
   * getTeamMembership - With array opt_fields (requested fields become required)
   */
  getTeamMembership<F extends readonly (keyof TeamMembershipFull)[]>(team_membership_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TeamMembershipFull, F>>>;

  /**
   * getTeamMemberships - Returns compact representation by default
   */
  getTeamMemberships(): Promise<Collection<TeamMembershipCompact>>;

  /**
   * getTeamMemberships - With string opt_fields (only gid guaranteed)
   */
  getTeamMemberships(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TeamMembershipFull>>>;

  /**
   * getTeamMemberships - With array opt_fields (requested fields become required)
   */
  getTeamMemberships<F extends readonly (keyof TeamMembershipFull)[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TeamMembershipFull, F>>>;

  /**
   * getTeamMembershipsForTeam - Returns compact representation by default
   */
  getTeamMembershipsForTeam(team_gid: string): Promise<Collection<TeamMembershipCompact>>;

  /**
   * getTeamMembershipsForTeam - With string opt_fields (only gid guaranteed)
   */
  getTeamMembershipsForTeam(team_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TeamMembershipFull>>>;

  /**
   * getTeamMembershipsForTeam - With array opt_fields (requested fields become required)
   */
  getTeamMembershipsForTeam<F extends readonly (keyof TeamMembershipFull)[]>(team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TeamMembershipFull, F>>>;

  /**
   * getTeamMembershipsForUser - Returns compact representation by default
   */
  getTeamMembershipsForUser(user_gid: string, workspace: string): Promise<Collection<TeamMembershipCompact>>;

  /**
   * getTeamMembershipsForUser - With string opt_fields (only gid guaranteed)
   */
  getTeamMembershipsForUser(user_gid: string, workspace: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TeamMembershipFull>>>;

  /**
   * getTeamMembershipsForUser - With array opt_fields (requested fields become required)
   */
  getTeamMembershipsForUser<F extends readonly (keyof TeamMembershipFull)[]>(user_gid: string, workspace: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TeamMembershipFull, F>>>;

}

/**
 * TeamsApi provides methods for interacting with Teams resources.
 */
export class TeamsApi {
  constructor(apiClient?: ApiClient);

  /**
   * addUserForTeam - Returns compact representation by default
   */
  addUserForTeam(body: string, team_gid: string): Promise<DataResponse<TeamMembershipCompact>>;

  /**
   * addUserForTeam - With string opt_fields (only gid guaranteed)
   */
  addUserForTeam(body: string, team_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TeamMembershipFull>>>;

  /**
   * addUserForTeam - With array opt_fields (requested fields become required)
   */
  addUserForTeam<F extends readonly (keyof TeamMembershipFull)[]>(body: string, team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TeamMembershipFull, F>>>;

  /**
   * createTeam - Returns compact representation by default
   */
  createTeam(body: string): Promise<DataResponse<TeamCompact>>;

  /**
   * createTeam - With string opt_fields (only gid guaranteed)
   */
  createTeam(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TeamFull>>>;

  /**
   * createTeam - With array opt_fields (requested fields become required)
   */
  createTeam<F extends readonly (keyof TeamFull)[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TeamFull, F>>>;

  /**
   * getTeam - Returns compact representation by default
   */
  getTeam(team_gid: string): Promise<DataResponse<TeamCompact>>;

  /**
   * getTeam - With string opt_fields (only gid guaranteed)
   */
  getTeam(team_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TeamFull>>>;

  /**
   * getTeam - With array opt_fields (requested fields become required)
   */
  getTeam<F extends readonly (keyof TeamFull)[]>(team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TeamFull, F>>>;

  /**
   * getTeamsForUser - Returns compact representation by default
   */
  getTeamsForUser(user_gid: string, organization: string): Promise<Collection<TeamCompact>>;

  /**
   * getTeamsForUser - With string opt_fields (only gid guaranteed)
   */
  getTeamsForUser(user_gid: string, organization: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TeamFull>>>;

  /**
   * getTeamsForUser - With array opt_fields (requested fields become required)
   */
  getTeamsForUser<F extends readonly (keyof TeamFull)[]>(user_gid: string, organization: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TeamFull, F>>>;

  /**
   * getTeamsForWorkspace - Returns compact representation by default
   */
  getTeamsForWorkspace(workspace_gid: string): Promise<Collection<TeamCompact>>;

  /**
   * getTeamsForWorkspace - With string opt_fields (only gid guaranteed)
   */
  getTeamsForWorkspace(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TeamFull>>>;

  /**
   * getTeamsForWorkspace - With array opt_fields (requested fields become required)
   */
  getTeamsForWorkspace<F extends readonly (keyof TeamFull)[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TeamFull, F>>>;

  /**
   * removeUserForTeam - Returns compact representation by default
   */
  removeUserForTeam(body: string, team_gid: string): Promise<DataResponse<unknown>>;

  /**
   * removeUserForTeam - With string opt_fields (only gid guaranteed)
   */
  removeUserForTeam(body: string, team_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * removeUserForTeam - With array opt_fields (requested fields become required)
   */
  removeUserForTeam<F extends readonly (keyof unknown)[]>(body: string, team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * updateTeam - Returns compact representation by default
   */
  updateTeam(body: string, team_gid: string): Promise<DataResponse<TeamCompact>>;

  /**
   * updateTeam - With string opt_fields (only gid guaranteed)
   */
  updateTeam(body: string, team_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TeamFull>>>;

  /**
   * updateTeam - With array opt_fields (requested fields become required)
   */
  updateTeam<F extends readonly (keyof TeamFull)[]>(body: string, team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TeamFull, F>>>;

}

/**
 * TimePeriodsApi provides methods for interacting with TimePeriods resources.
 */
export class TimePeriodsApi {
  constructor(apiClient?: ApiClient);

  /**
   * getTimePeriod - Returns compact representation by default
   */
  getTimePeriod(time_period_gid: string): Promise<DataResponse<TimePeriodCompact>>;

  /**
   * getTimePeriod - With string opt_fields (only gid guaranteed)
   */
  getTimePeriod(time_period_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<TimePeriodFull>>>;

  /**
   * getTimePeriod - With array opt_fields (requested fields become required)
   */
  getTimePeriod<F extends readonly (keyof TimePeriodFull)[]>(time_period_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<TimePeriodFull, F>>>;

  /**
   * getTimePeriods - Returns compact representation by default
   */
  getTimePeriods(workspace: string): Promise<Collection<TimePeriodCompact>>;

  /**
   * getTimePeriods - With string opt_fields (only gid guaranteed)
   */
  getTimePeriods(workspace: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<TimePeriodFull>>>;

  /**
   * getTimePeriods - With array opt_fields (requested fields become required)
   */
  getTimePeriods<F extends readonly (keyof TimePeriodFull)[]>(workspace: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<TimePeriodFull, F>>>;

}

/**
 * TimeTrackingEntriesApi provides methods for interacting with TimeTrackingEntries resources.
 */
export class TimeTrackingEntriesApi {
  constructor(apiClient?: ApiClient);

  /**
   * createTimeTrackingEntry - Returns compact representation by default
   */
  createTimeTrackingEntry(body: string, task_gid: string): Promise<DataResponse<unknown>>;

  /**
   * createTimeTrackingEntry - With string opt_fields (only gid guaranteed)
   */
  createTimeTrackingEntry(body: string, task_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * createTimeTrackingEntry - With array opt_fields (requested fields become required)
   */
  createTimeTrackingEntry<F extends readonly (keyof unknown)[]>(body: string, task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * deleteTimeTrackingEntry - Returns compact representation by default
   */
  deleteTimeTrackingEntry(time_tracking_entry_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteTimeTrackingEntry - With string opt_fields (only gid guaranteed)
   */
  deleteTimeTrackingEntry(time_tracking_entry_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteTimeTrackingEntry - With array opt_fields (requested fields become required)
   */
  deleteTimeTrackingEntry<F extends readonly (keyof unknown)[]>(time_tracking_entry_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getTimeTrackingEntries - Returns compact representation by default
   */
  getTimeTrackingEntries(): Promise<Collection<unknown>>;

  /**
   * getTimeTrackingEntries - With string opt_fields (only gid guaranteed)
   */
  getTimeTrackingEntries(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<unknown>>>;

  /**
   * getTimeTrackingEntries - With array opt_fields (requested fields become required)
   */
  getTimeTrackingEntries<F extends readonly (keyof unknown)[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<unknown, F>>>;

  /**
   * getTimeTrackingEntriesForTask - Returns compact representation by default
   */
  getTimeTrackingEntriesForTask(task_gid: string): Promise<Collection<unknown>>;

  /**
   * getTimeTrackingEntriesForTask - With string opt_fields (only gid guaranteed)
   */
  getTimeTrackingEntriesForTask(task_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<unknown>>>;

  /**
   * getTimeTrackingEntriesForTask - With array opt_fields (requested fields become required)
   */
  getTimeTrackingEntriesForTask<F extends readonly (keyof unknown)[]>(task_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<unknown, F>>>;

  /**
   * getTimeTrackingEntry - Returns compact representation by default
   */
  getTimeTrackingEntry(time_tracking_entry_gid: string): Promise<DataResponse<unknown>>;

  /**
   * getTimeTrackingEntry - With string opt_fields (only gid guaranteed)
   */
  getTimeTrackingEntry(time_tracking_entry_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * getTimeTrackingEntry - With array opt_fields (requested fields become required)
   */
  getTimeTrackingEntry<F extends readonly (keyof unknown)[]>(time_tracking_entry_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * updateTimeTrackingEntry - Returns compact representation by default
   */
  updateTimeTrackingEntry(body: string, time_tracking_entry_gid: string): Promise<DataResponse<unknown>>;

  /**
   * updateTimeTrackingEntry - With string opt_fields (only gid guaranteed)
   */
  updateTimeTrackingEntry(body: string, time_tracking_entry_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * updateTimeTrackingEntry - With array opt_fields (requested fields become required)
   */
  updateTimeTrackingEntry<F extends readonly (keyof unknown)[]>(body: string, time_tracking_entry_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

}

/**
 * TypeaheadApi provides methods for interacting with Typeahead resources.
 */
export class TypeaheadApi {
  constructor(apiClient?: ApiClient);

  /**
   * typeaheadForWorkspace - Returns compact representation by default
   */
  typeaheadForWorkspace(workspace_gid: string, resource_type: string): Promise<Collection<unknown>>;

  /**
   * typeaheadForWorkspace - With string opt_fields (only gid guaranteed)
   */
  typeaheadForWorkspace(workspace_gid: string, resource_type: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<unknown>>>;

  /**
   * typeaheadForWorkspace - With array opt_fields (requested fields become required)
   */
  typeaheadForWorkspace<F extends readonly (keyof unknown)[]>(workspace_gid: string, resource_type: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<unknown, F>>>;

}

/**
 * UserTaskListsApi provides methods for interacting with UserTaskLists resources.
 */
export class UserTaskListsApi {
  constructor(apiClient?: ApiClient);

  /**
   * getUserTaskList - Returns compact representation by default
   */
  getUserTaskList(user_task_list_gid: string): Promise<DataResponse<UserTaskListCompact>>;

  /**
   * getUserTaskList - With string opt_fields (only gid guaranteed)
   */
  getUserTaskList(user_task_list_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<UserTaskListFull>>>;

  /**
   * getUserTaskList - With array opt_fields (requested fields become required)
   */
  getUserTaskList<F extends readonly (keyof UserTaskListFull)[]>(user_task_list_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<UserTaskListFull, F>>>;

  /**
   * getUserTaskListForUser - Returns compact representation by default
   */
  getUserTaskListForUser(user_gid: string, workspace: string): Promise<DataResponse<UserTaskListCompact>>;

  /**
   * getUserTaskListForUser - With string opt_fields (only gid guaranteed)
   */
  getUserTaskListForUser(user_gid: string, workspace: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<UserTaskListFull>>>;

  /**
   * getUserTaskListForUser - With array opt_fields (requested fields become required)
   */
  getUserTaskListForUser<F extends readonly (keyof UserTaskListFull)[]>(user_gid: string, workspace: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<UserTaskListFull, F>>>;

}

/**
 * UsersApi provides methods for interacting with Users resources.
 */
export class UsersApi {
  constructor(apiClient?: ApiClient);

  /**
   * getFavoritesForUser - Returns compact representation by default
   */
  getFavoritesForUser(user_gid: string, resource_type: string, workspace: string): Promise<Collection<unknown>>;

  /**
   * getFavoritesForUser - With string opt_fields (only gid guaranteed)
   */
  getFavoritesForUser(user_gid: string, resource_type: string, workspace: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<unknown>>>;

  /**
   * getFavoritesForUser - With array opt_fields (requested fields become required)
   */
  getFavoritesForUser<F extends readonly (keyof unknown)[]>(user_gid: string, resource_type: string, workspace: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<unknown, F>>>;

  /**
   * getUser - Returns compact representation by default
   */
  getUser(user_gid: string): Promise<DataResponse<UserCompact>>;

  /**
   * getUser - With string opt_fields (only gid guaranteed)
   */
  getUser(user_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<UserFull>>>;

  /**
   * getUser - With array opt_fields (requested fields become required)
   */
  getUser<F extends readonly (keyof UserFull)[]>(user_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<UserFull, F>>>;

  /**
   * getUserForWorkspace - Returns compact representation by default
   */
  getUserForWorkspace(workspace_gid: string, user_gid: string): Promise<DataResponse<UserCompact>>;

  /**
   * getUserForWorkspace - With string opt_fields (only gid guaranteed)
   */
  getUserForWorkspace(workspace_gid: string, user_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<UserFull>>>;

  /**
   * getUserForWorkspace - With array opt_fields (requested fields become required)
   */
  getUserForWorkspace<F extends readonly (keyof UserFull)[]>(workspace_gid: string, user_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<UserFull, F>>>;

  /**
   * getUsers - Returns compact representation by default
   */
  getUsers(): Promise<Collection<UserCompact>>;

  /**
   * getUsers - With string opt_fields (only gid guaranteed)
   */
  getUsers(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<UserFull>>>;

  /**
   * getUsers - With array opt_fields (requested fields become required)
   */
  getUsers<F extends readonly (keyof UserFull)[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<UserFull, F>>>;

  /**
   * getUsersForTeam - Returns compact representation by default
   */
  getUsersForTeam(team_gid: string): Promise<Collection<UserCompact>>;

  /**
   * getUsersForTeam - With string opt_fields (only gid guaranteed)
   */
  getUsersForTeam(team_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<UserFull>>>;

  /**
   * getUsersForTeam - With array opt_fields (requested fields become required)
   */
  getUsersForTeam<F extends readonly (keyof UserFull)[]>(team_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<UserFull, F>>>;

  /**
   * getUsersForWorkspace - Returns compact representation by default
   */
  getUsersForWorkspace(workspace_gid: string): Promise<Collection<UserCompact>>;

  /**
   * getUsersForWorkspace - With string opt_fields (only gid guaranteed)
   */
  getUsersForWorkspace(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<UserFull>>>;

  /**
   * getUsersForWorkspace - With array opt_fields (requested fields become required)
   */
  getUsersForWorkspace<F extends readonly (keyof UserFull)[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<UserFull, F>>>;

  /**
   * updateUser - Returns compact representation by default
   */
  updateUser(body: string, user_gid: string): Promise<DataResponse<UserCompact>>;

  /**
   * updateUser - With string opt_fields (only gid guaranteed)
   */
  updateUser(body: string, user_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<UserFull>>>;

  /**
   * updateUser - With array opt_fields (requested fields become required)
   */
  updateUser<F extends readonly (keyof UserFull)[]>(body: string, user_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<UserFull, F>>>;

  /**
   * updateUserForWorkspace - Returns compact representation by default
   */
  updateUserForWorkspace(body: string, workspace_gid: string, user_gid: string): Promise<DataResponse<UserCompact>>;

  /**
   * updateUserForWorkspace - With string opt_fields (only gid guaranteed)
   */
  updateUserForWorkspace(body: string, workspace_gid: string, user_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<UserFull>>>;

  /**
   * updateUserForWorkspace - With array opt_fields (requested fields become required)
   */
  updateUserForWorkspace<F extends readonly (keyof UserFull)[]>(body: string, workspace_gid: string, user_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<UserFull, F>>>;

}

/**
 * WebhooksApi provides methods for interacting with Webhooks resources.
 */
export class WebhooksApi {
  constructor(apiClient?: ApiClient);

  /**
   * createWebhook - Returns compact representation by default
   */
  createWebhook(body: string): Promise<DataResponse<WebhookCompact>>;

  /**
   * createWebhook - With string opt_fields (only gid guaranteed)
   */
  createWebhook(body: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<WebhookFull>>>;

  /**
   * createWebhook - With array opt_fields (requested fields become required)
   */
  createWebhook<F extends readonly (keyof WebhookFull)[]>(body: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<WebhookFull, F>>>;

  /**
   * deleteWebhook - Returns compact representation by default
   */
  deleteWebhook(webhook_gid: string): Promise<DataResponse<unknown>>;

  /**
   * deleteWebhook - With string opt_fields (only gid guaranteed)
   */
  deleteWebhook(webhook_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * deleteWebhook - With array opt_fields (requested fields become required)
   */
  deleteWebhook<F extends readonly (keyof unknown)[]>(webhook_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * getWebhook - Returns compact representation by default
   */
  getWebhook(webhook_gid: string): Promise<DataResponse<WebhookCompact>>;

  /**
   * getWebhook - With string opt_fields (only gid guaranteed)
   */
  getWebhook(webhook_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<WebhookFull>>>;

  /**
   * getWebhook - With array opt_fields (requested fields become required)
   */
  getWebhook<F extends readonly (keyof WebhookFull)[]>(webhook_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<WebhookFull, F>>>;

  /**
   * getWebhooks - Returns compact representation by default
   */
  getWebhooks(workspace: string): Promise<Collection<WebhookCompact>>;

  /**
   * getWebhooks - With string opt_fields (only gid guaranteed)
   */
  getWebhooks(workspace: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<WebhookFull>>>;

  /**
   * getWebhooks - With array opt_fields (requested fields become required)
   */
  getWebhooks<F extends readonly (keyof WebhookFull)[]>(workspace: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<WebhookFull, F>>>;

  /**
   * updateWebhook - Returns compact representation by default
   */
  updateWebhook(body: string, webhook_gid: string): Promise<DataResponse<WebhookCompact>>;

  /**
   * updateWebhook - With string opt_fields (only gid guaranteed)
   */
  updateWebhook(body: string, webhook_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<WebhookFull>>>;

  /**
   * updateWebhook - With array opt_fields (requested fields become required)
   */
  updateWebhook<F extends readonly (keyof WebhookFull)[]>(body: string, webhook_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<WebhookFull, F>>>;

}

/**
 * WorkspaceMembershipsApi provides methods for interacting with WorkspaceMemberships resources.
 */
export class WorkspaceMembershipsApi {
  constructor(apiClient?: ApiClient);

  /**
   * getWorkspaceMembership - Returns compact representation by default
   */
  getWorkspaceMembership(workspace_membership_gid: string): Promise<DataResponse<WorkspaceMembershipCompact>>;

  /**
   * getWorkspaceMembership - With string opt_fields (only gid guaranteed)
   */
  getWorkspaceMembership(workspace_membership_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<WorkspaceMembershipFull>>>;

  /**
   * getWorkspaceMembership - With array opt_fields (requested fields become required)
   */
  getWorkspaceMembership<F extends readonly (keyof WorkspaceMembershipFull)[]>(workspace_membership_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<WorkspaceMembershipFull, F>>>;

  /**
   * getWorkspaceMembershipsForUser - Returns compact representation by default
   */
  getWorkspaceMembershipsForUser(user_gid: string): Promise<Collection<WorkspaceMembershipCompact>>;

  /**
   * getWorkspaceMembershipsForUser - With string opt_fields (only gid guaranteed)
   */
  getWorkspaceMembershipsForUser(user_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<WorkspaceMembershipFull>>>;

  /**
   * getWorkspaceMembershipsForUser - With array opt_fields (requested fields become required)
   */
  getWorkspaceMembershipsForUser<F extends readonly (keyof WorkspaceMembershipFull)[]>(user_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<WorkspaceMembershipFull, F>>>;

  /**
   * getWorkspaceMembershipsForWorkspace - Returns compact representation by default
   */
  getWorkspaceMembershipsForWorkspace(workspace_gid: string): Promise<Collection<WorkspaceMembershipCompact>>;

  /**
   * getWorkspaceMembershipsForWorkspace - With string opt_fields (only gid guaranteed)
   */
  getWorkspaceMembershipsForWorkspace(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<WorkspaceMembershipFull>>>;

  /**
   * getWorkspaceMembershipsForWorkspace - With array opt_fields (requested fields become required)
   */
  getWorkspaceMembershipsForWorkspace<F extends readonly (keyof WorkspaceMembershipFull)[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<WorkspaceMembershipFull, F>>>;

}

/**
 * WorkspacesApi provides methods for interacting with Workspaces resources.
 */
export class WorkspacesApi {
  constructor(apiClient?: ApiClient);

  /**
   * addUserForWorkspace - Returns compact representation by default
   */
  addUserForWorkspace(body: string, workspace_gid: string): Promise<DataResponse<UserBaseFull>>;

  /**
   * addUserForWorkspace - With string opt_fields (only gid guaranteed)
   */
  addUserForWorkspace(body: string, workspace_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<UserBaseFull>>>;

  /**
   * addUserForWorkspace - With array opt_fields (requested fields become required)
   */
  addUserForWorkspace<F extends readonly (keyof UserBaseFull)[]>(body: string, workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<UserBaseFull, F>>>;

  /**
   * getWorkspace - Returns compact representation by default
   */
  getWorkspace(workspace_gid: string): Promise<DataResponse<WorkspaceCompact>>;

  /**
   * getWorkspace - With string opt_fields (only gid guaranteed)
   */
  getWorkspace(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<WorkspaceFull>>>;

  /**
   * getWorkspace - With array opt_fields (requested fields become required)
   */
  getWorkspace<F extends readonly (keyof WorkspaceFull)[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<WorkspaceFull, F>>>;

  /**
   * getWorkspaceEvents - Returns compact representation by default
   */
  getWorkspaceEvents(workspace_gid: string): Promise<Collection<EventFull>>;

  /**
   * getWorkspaceEvents - With string opt_fields (only gid guaranteed)
   */
  getWorkspaceEvents(workspace_gid: string, opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<EventFull>>>;

  /**
   * getWorkspaceEvents - With array opt_fields (requested fields become required)
   */
  getWorkspaceEvents<F extends readonly (keyof EventFull)[]>(workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<EventFull, F>>>;

  /**
   * getWorkspaces - Returns compact representation by default
   */
  getWorkspaces(): Promise<Collection<WorkspaceCompact>>;

  /**
   * getWorkspaces - With string opt_fields (only gid guaranteed)
   */
  getWorkspaces(opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<WorkspaceFull>>>;

  /**
   * getWorkspaces - With array opt_fields (requested fields become required)
   */
  getWorkspaces<F extends readonly (keyof WorkspaceFull)[]>(opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<WorkspaceFull, F>>>;

  /**
   * removeUserForWorkspace - Returns compact representation by default
   */
  removeUserForWorkspace(body: string, workspace_gid: string): Promise<DataResponse<unknown>>;

  /**
   * removeUserForWorkspace - With string opt_fields (only gid guaranteed)
   */
  removeUserForWorkspace(body: string, workspace_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<unknown>>>;

  /**
   * removeUserForWorkspace - With array opt_fields (requested fields become required)
   */
  removeUserForWorkspace<F extends readonly (keyof unknown)[]>(body: string, workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<unknown, F>>>;

  /**
   * updateWorkspace - Returns compact representation by default
   */
  updateWorkspace(body: string, workspace_gid: string): Promise<DataResponse<WorkspaceCompact>>;

  /**
   * updateWorkspace - With string opt_fields (only gid guaranteed)
   */
  updateWorkspace(body: string, workspace_gid: string, opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<WorkspaceFull>>>;

  /**
   * updateWorkspace - With array opt_fields (requested fields become required)
   */
  updateWorkspace<F extends readonly (keyof WorkspaceFull)[]>(body: string, workspace_gid: string, opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<WorkspaceFull, F>>>;

}



// ============================================================================
// Module Exports
// ============================================================================

export {
  // Re-export for convenience
  components,
};
