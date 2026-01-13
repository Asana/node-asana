/**
 * Type Generation Script for node-asana SDK
 *
 * This script:
 * 1. Fetches the OpenAPI spec from GitHub
 * 2. Generates base types using openapi-typescript
 * 3. Post-processes to create utility types and API method overloads
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import openapiTS, { astToString } from "openapi-typescript";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const OPENAPI_SPEC_URL =
  "https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_sdk_oas.yaml";

const TYPES_DIR = path.join(__dirname, "..", "types");
const GENERATED_TYPES_FILE = path.join(TYPES_DIR, "generated.d.ts");
const INDEX_FILE = path.join(TYPES_DIR, "index.d.ts");
const SRC_DIR = path.join(__dirname, "..", "src");
const API_DIR = path.join(SRC_DIR, "api");

interface ApiMethod {
  name: string;
  params: string[];
  hasOptFields: boolean;
  returnType: string;
  resourceType: string;
  isCollection: boolean;
}

interface ApiClass {
  name: string;
  methods: ApiMethod[];
}

async function fetchOpenAPISpec(): Promise<string> {
  console.log("Fetching OpenAPI spec from:", OPENAPI_SPEC_URL);
  const response = await fetch(OPENAPI_SPEC_URL);
  if (!response.ok) {
    throw new Error(`Failed to fetch OpenAPI spec: ${response.statusText}`);
  }
  return response.text();
}

async function generateBaseTypes(specContent: string): Promise<string> {
  console.log("Generating base types from OpenAPI spec...");

  // Parse YAML to get the spec object
  const specUrl = new URL(OPENAPI_SPEC_URL);
  const ast = await openapiTS(specUrl, {
    exportType: true,
    alphabetize: true,
  });

  // Convert AST nodes to string
  return astToString(ast);
}

function extractResourceTypes(generatedTypes: string): Map<string, string[]> {
  /**
   * Extract resource types and their fields from the generated types.
   * Returns a map of resource name -> field names
   */
  const resourceTypes = new Map<string, string[]>();

  // Match schema type definitions like: TaskCompact: { ... }
  const schemaRegex =
    /(\w+(?:Compact|Response|Base))\s*:\s*\{([^}]+(?:\{[^}]*\}[^}]*)*)\}/g;
  let match;

  while ((match = schemaRegex.exec(generatedTypes)) !== null) {
    const typeName = match[1];
    const typeBody = match[2];

    // Extract field names from the type body
    const fieldRegex = /(\w+)\??:/g;
    const fields: string[] = [];
    let fieldMatch;

    while ((fieldMatch = fieldRegex.exec(typeBody)) !== null) {
      fields.push(fieldMatch[1]);
    }

    resourceTypes.set(typeName, fields);
  }

  return resourceTypes;
}

function parseApiFiles(): ApiClass[] {
  /**
   * Parse API files to extract method signatures and identify which methods
   * have opt_fields parameters and what resource types they return.
   */
  const apiClasses: ApiClass[] = [];
  const apiFiles = fs
    .readdirSync(API_DIR)
    .filter((f: string) => f.endsWith("Api.js"));

  for (const file of apiFiles) {
    const content = fs.readFileSync(path.join(API_DIR, file), "utf-8");
    const className = file.replace(".js", "");

    const methods: ApiMethod[] = [];

    // Match method definitions with JSDoc comments
    const methodRegex =
      /\/\*\*[\s\S]*?@return\s+\{Promise\}[^*]*\{@link\s+module:model\/(\w+)\}[\s\S]*?\*\/\s+(\w+)\(([^)]*)\)\s*\{/g;
    let match;

    while ((match = methodRegex.exec(content)) !== null) {
      const returnType = match[1];
      const methodName = match[2];
      const paramsStr = match[3];

      // Skip WithHttpInfo methods
      if (methodName.endsWith("WithHttpInfo")) continue;

      // Parse parameters
      const params = paramsStr
        .split(",")
        .map((p) => p.trim())
        .filter((p) => p);

      // Check if this method has opt_fields (usually in opts parameter)
      const hasOptFields =
        content.includes(`${methodName}WithHttpInfo`) &&
        content.includes("opts.opt_fields");

      // Determine if it returns a collection
      const isCollection =
        returnType.endsWith("Array") || returnType.includes("Collection");

      // Extract base resource type
      let resourceType = returnType
        .replace("ResponseData", "")
        .replace("ResponseArray", "")
        .replace("Response", "")
        .replace("Array", "")
        .replace("Data", "");

      methods.push({
        name: methodName,
        params,
        hasOptFields,
        returnType,
        resourceType,
        isCollection,
      });
    }

    if (methods.length > 0) {
      apiClasses.push({ name: className, methods });
    }
  }

  return apiClasses;
}

function generateUtilityTypes(): string {
  return `
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
 * For array opt_fields with \`as const\` - requested fields become required.
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
`;
}

type ResourceGroup = { compact?: string; response?: string; base?: string };

function extractResourceGroups(
  generatedTypes: string
): Map<string, ResourceGroup> {
  /**
   * Extract resource groups (Compact + Full) from the OpenAPI-generated types.
   * We extract schema names that follow the pattern: *Compact, *Response, *Base
   */

  // Find the main schemas section (in components)
  // The schemas section is indented with 4 spaces and the responses section follows
  const schemasMatch = generatedTypes.match(/^\s{4}schemas:\s*\{([\s\S]*?)^\s{4}\};?\s*$/m);
  let schemasSection = generatedTypes;

  if (schemasMatch) {
    schemasSection = schemasMatch[1];
  } else {
    // Fallback: extract text between "schemas: {" at indent level 4 and "responses: {" at same level
    const start = generatedTypes.indexOf("    schemas: {");
    const end = generatedTypes.indexOf("    responses: {");
    if (start !== -1 && end !== -1 && end > start) {
      schemasSection = generatedTypes.slice(start, end);
    }
  }

  // Find all schema types from the schemas section - match patterns like "TaskCompact: {"
  const schemaNames: Set<string> = new Set();

  // Match schema definitions like: TaskCompact: {, TaskResponse: {, etc.
  const schemaRegex = /^\s+(\w+(?:Compact|Response|Base)):\s*\{/gm;
  let match;

  while ((match = schemaRegex.exec(schemasSection)) !== null) {
    const name = match[1];
    // Exclude ResponseArray and ResponseData patterns
    if (!name.endsWith("ResponseArray") && !name.endsWith("ResponseData")) {
      schemaNames.add(name);
    }
  }

  console.log(`  Found ${schemaNames.size} resource schemas`);

  // Group resources by base name
  const resourceGroups = new Map<string, ResourceGroup>();

  for (const name of schemaNames) {
    let baseName: string;

    if (name.endsWith("Compact")) {
      baseName = name.replace("Compact", "");
    } else if (name.endsWith("Response")) {
      baseName = name.replace("Response", "");
    } else if (name.endsWith("Base")) {
      baseName = name.replace("Base", "");
    } else {
      continue;
    }

    if (!resourceGroups.has(baseName)) {
      resourceGroups.set(baseName, {});
    }

    const group = resourceGroups.get(baseName)!;
    if (name.endsWith("Compact")) {
      group.compact = name;
    } else if (name.endsWith("Response")) {
      group.response = name;
    } else if (name.endsWith("Base")) {
      group.base = name;
    }
  }

  console.log(`  Grouped into ${resourceGroups.size} resource types`);

  return resourceGroups;
}

function generateResourceTypes(
  resourceGroups: Map<string, ResourceGroup>
): string {

  // Generate type aliases for each resource
  let output = `
// ============================================================================
// Resource Types (Compact and Full versions)
// ============================================================================

`;

  for (const [baseName, group] of resourceGroups) {
    const fullType = group.response || group.base || group.compact;

    if (fullType) {
      output += `/**
 * Full ${baseName} type with all possible fields.
 * Use with opt_fields to get typed access to requested fields.
 */
export type ${baseName}Full = components["schemas"]["${fullType}"];

`;
    }

    if (group.compact) {
      output += `/**
 * Compact ${baseName} type with default fields.
 * Returned when opt_fields is not specified.
 */
export type ${baseName}Compact = components["schemas"]["${group.compact}"];

`;
    }
  }

  return output;
}

// Set of resources that have both Compact and Full types
const resourcesWithCompact = new Set<string>();

function generateApiClassTypes(
  apiClasses: ApiClass[],
  resourceGroups: Map<string, ResourceGroup>
): string {
  /**
   * Generate TypeScript interface declarations for API classes with overloaded
   * method signatures for opt_fields support.
   */

  let output = `
// ============================================================================
// API Class Type Definitions
// ============================================================================

`;

  // Build resource type map from actual discovered resources
  const resourceTypeMap: Record<string, { full: string; compact: string }> = {};

  for (const [baseName, group] of resourceGroups) {
    const hasFull = group.response || group.base;
    const hasCompact = group.compact;

    if (hasFull) {
      resourceTypeMap[baseName] = {
        full: `${baseName}Full`,
        // If no compact, fall back to full
        compact: hasCompact ? `${baseName}Compact` : `${baseName}Full`,
      };
      if (hasCompact) {
        resourcesWithCompact.add(baseName);
      }
    }
  }

  for (const apiClass of apiClasses) {
    output += `/**
 * ${apiClass.name} provides methods for interacting with ${apiClass.name.replace("Api", "")} resources.
 */
export class ${apiClass.name} {
  constructor(apiClient?: ApiClient);

`;

    for (const method of apiClass.methods) {
      const typeInfo = resourceTypeMap[method.resourceType];
      const fullTypeName = typeInfo?.full || "unknown";
      const compactTypeName = typeInfo?.compact || "unknown";

      // Generate parameter list (excluding opts for now)
      const requiredParams = method.params
        .filter((p) => p !== "opts")
        .map((p) => `${p}: string`)
        .join(", ");

      if (method.hasOptFields) {
        // Generate overloaded signatures for methods with opt_fields

        if (method.isCollection) {
          output += `  /**
   * ${method.name} - Returns compact representation by default
   */
  ${method.name}(${requiredParams}): Promise<Collection<${compactTypeName}>>;

  /**
   * ${method.name} - With string opt_fields (only gid guaranteed)
   */
  ${method.name}(${requiredParams ? requiredParams + ", " : ""}opts: OptionsWithStringOptFields): Promise<Collection<WithStringOptFields<${fullTypeName}>>>;

  /**
   * ${method.name} - With array opt_fields (requested fields become required)
   */
  ${method.name}<F extends readonly (keyof ${fullTypeName})[]>(${requiredParams ? requiredParams + ", " : ""}opts: OptionsWithArrayOptFields<F>): Promise<Collection<WithOptFields<${fullTypeName}, F>>>;

`;
        } else {
          output += `  /**
   * ${method.name} - Returns compact representation by default
   */
  ${method.name}(${requiredParams}): Promise<DataResponse<${compactTypeName}>>;

  /**
   * ${method.name} - With string opt_fields (only gid guaranteed)
   */
  ${method.name}(${requiredParams ? requiredParams + ", " : ""}opts: OptionsWithStringOptFields): Promise<DataResponse<WithStringOptFields<${fullTypeName}>>>;

  /**
   * ${method.name} - With array opt_fields (requested fields become required)
   */
  ${method.name}<F extends readonly (keyof ${fullTypeName})[]>(${requiredParams ? requiredParams + ", " : ""}opts: OptionsWithArrayOptFields<F>): Promise<DataResponse<WithOptFields<${fullTypeName}, F>>>;

`;
        }
      } else {
        // Simple method without opt_fields
        const returnType = method.isCollection
          ? `Promise<Collection<${compactTypeName}>>`
          : `Promise<DataResponse<${compactTypeName}>>`;

        output += `  /**
   * ${method.name}
   */
  ${method.name}(${requiredParams}): ${returnType};

`;
      }
    }

    output += `}

`;
  }

  return output;
}

function generateApiClientType(): string {
  return `
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
`;
}

async function main() {
  console.log("Starting type generation for node-asana SDK...\n");

  // Ensure types directory exists
  if (!fs.existsSync(TYPES_DIR)) {
    fs.mkdirSync(TYPES_DIR, { recursive: true });
  }

  // Step 1: Fetch and generate base types from OpenAPI spec
  const specContent = await fetchOpenAPISpec();
  const generatedTypes = await generateBaseTypes(specContent);

  // Write the raw generated types
  fs.writeFileSync(GENERATED_TYPES_FILE, generatedTypes);
  console.log(`✓ Generated base types: ${GENERATED_TYPES_FILE}`);

  // Step 2: Parse API files to understand method signatures
  console.log("\nParsing API files...");
  const apiClasses = parseApiFiles();
  console.log(`✓ Found ${apiClasses.length} API classes`);

  // Step 3: Extract resource groups from generated types
  console.log("\nExtracting resource types...");
  const resourceGroups = extractResourceGroups(generatedTypes);

  // Step 4: Generate the main types file
  console.log("\nGenerating type definitions...");

  const indexContent = `/**
 * TypeScript type definitions for the Asana Node.js SDK
 *
 * @packageDocumentation
 */

// Re-export generated types from OpenAPI spec
export * from './generated';

// Import components for use in type definitions
import type { components } from './generated';

${generateUtilityTypes()}

${generateResourceTypes(resourceGroups)}

${generateApiClientType()}

${generateApiClassTypes(apiClasses, resourceGroups)}

// ============================================================================
// Module Exports
// ============================================================================

export {
  // Re-export for convenience
  components,
};
`;

  fs.writeFileSync(INDEX_FILE, indexContent);
  console.log(`✓ Generated index types: ${INDEX_FILE}`);

  console.log("\n✅ Type generation complete!");
  console.log("\nGenerated files:");
  console.log(`  - ${GENERATED_TYPES_FILE}`);
  console.log(`  - ${INDEX_FILE}`);
}

main().catch((error) => {
  console.error("Error generating types:", error);
  process.exit(1);
});
