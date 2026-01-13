/**
 * Type generation script for the node-asana SDK.
 *
 * 1. Runs openapi-typescript against the Asana SDK OpenAPI spec → types/generated.d.ts
 * 2. Parses the JS SDK source to discover API classes and methods
 * 3. Emits types/index.d.ts with utility types, resource aliases, and typed overloads
 */

import * as fs from "node:fs";
import * as path from "node:path";
import openapiTS, { astToString } from "openapi-typescript";

const OPENAPI_SPEC_URL =
  "https://raw.githubusercontent.com/Asana/openapi/master/defs/asana_sdk_oas.yaml";

const ROOT_DIR = path.join(import.meta.dirname, "..");
const TYPES_DIR = path.join(ROOT_DIR, "types");
const API_DIR = path.join(ROOT_DIR, "src", "api");
const GENERATED_FILE = path.join(TYPES_DIR, "generated.d.ts");
const INDEX_FILE = path.join(TYPES_DIR, "index.d.ts");

// ---------------------------------------------------------------------------
// Step 1 – generate base types from the OpenAPI spec
// ---------------------------------------------------------------------------

async function generateBaseTypes(): Promise<string> {
  console.log("Fetching OpenAPI spec from:", OPENAPI_SPEC_URL);
  const ast = await openapiTS(new URL(OPENAPI_SPEC_URL), {
    exportType: true,
    alphabetize: true,
  });
  return astToString(ast);
}

// ---------------------------------------------------------------------------
// Step 2 – extract resource type aliases from generated types
// ---------------------------------------------------------------------------

// After openapi-typescript flattens `allOf` inheritance, the Compact/Base/Response
// variants for a resource are all identical (every field `?`). We only need one
// alias per resource, pointing at the Response schema (the one endpoints reference).
const EXCLUDED_RESPONSE_SCHEMAS = new Set([
  "ErrorResponse",
  "GenericErrorResponse",
]);

function extractResponseSchemas(generatedTypes: string): Map<string, string> {
  // Narrow to the `schemas:` block so we don't match things from `responses:`
  let schemasSection = generatedTypes;
  const schemasMatch = generatedTypes.match(
    /^\s{4}schemas:\s*\{([\s\S]*?)^\s{4}\};?\s*$/m,
  );
  if (schemasMatch?.[1]) {
    schemasSection = schemasMatch[1];
  } else {
    const start = generatedTypes.indexOf("    schemas: {");
    const end = generatedTypes.indexOf("    responses: {");
    if (start !== -1 && end !== -1 && end > start) {
      schemasSection = generatedTypes.slice(start, end);
    }
  }

  const schemas = new Map<string, string>();
  const nameRegex = /^\s+(\w+Response):\s*\{/gm;

  for (const [, schemaName] of schemasSection.matchAll(nameRegex)) {
    if (!schemaName) continue;
    if (schemaName.endsWith("ResponseArray") || schemaName.endsWith("ResponseData")) continue;
    if (EXCLUDED_RESPONSE_SCHEMAS.has(schemaName)) continue;

    const baseName = schemaName.replace(/Response$/, "");
    schemas.set(baseName, schemaName);
  }

  console.log(`  Found ${schemas.size} resource schemas`);
  return schemas;
}

function generateResourceTypes(schemas: Map<string, string>): string {
  let output = "";
  for (const [baseName, schemaName] of schemas) {
    output += `export type ${baseName} = WithGid<components["schemas"]["${schemaName}"]>;\n`;
  }
  return output;
}

// ---------------------------------------------------------------------------
// Step 3 – check which operations exist in the generated types
// ---------------------------------------------------------------------------

function extractOperationNames(generatedTypes: string): Set<string> {
  const ops = new Set<string>();
  const opRegex = /^\s{4}(\w+):\s*\{/gm;

  const opsMatch = generatedTypes.match(
    /^export interface operations\s*\{([\s\S]*?)^\}/m,
  );
  if (!opsMatch?.[1]) return ops;

  for (const [, name] of opsMatch[1].matchAll(opRegex)) {
    if (name) ops.add(name);
  }
  return ops;
}

// ---------------------------------------------------------------------------
// Step 4 – parse JS API files and emit typed class declarations
// ---------------------------------------------------------------------------

function generateApiClassTypes(
  schemas: Map<string, string>,
  operationNames: Set<string>,
): string {
  const methodRegex =
    /\/\*\*[\s\S]*?@return\s+\{Promise\}[^*]*\{@link\s+module:model\/(\w+)\}[\s\S]*?\*\/\s+(\w+)\(([^)]*)\)\s*\{/g;

  let typeAliases = "";
  let classes = "";
  const apiFiles = fs
    .readdirSync(API_DIR)
    .filter((f: string) => f.endsWith("Api.js"));

  for (const file of apiFiles) {
    const content = fs.readFileSync(path.join(API_DIR, file), "utf-8");
    const className = file.replace(".js", "");

    let methods = "";
    for (const [, rawReturnType, methodName, paramsStr] of content.matchAll(methodRegex)) {
      if (!rawReturnType || !methodName || !paramsStr) continue;
      if (methodName.endsWith("WithHttpInfo")) continue;

      const resourceType = rawReturnType.replace(
        /(?:Response)?(?:Data|Array)?$/,
        "",
      );
      const resourceAlias = schemas.has(resourceType) ? resourceType : "unknown";

      const isCollection =
        rawReturnType.endsWith("Array") || rawReturnType.includes("Collection");
      const wrapper = isCollection ? "Collection" : "DataResponse";

      const requiredParams = paramsStr
        .split(",")
        .map((p) => p.trim())
        .filter((p) => p && p !== "opts")
        .map((p) => `${p}: string`)
        .join(", ");
      const withTrailingComma = requiredParams ? `${requiredParams}, ` : "";

      const hasOptFields =
        content.includes(`${methodName}WithHttpInfo`) &&
        content.includes("opts.opt_fields");

      if (hasOptFields && operationNames.has(methodName)) {
        const optFieldsType = `${(methodName[0] ?? "").toUpperCase()}${methodName.slice(1)}OptFields`;
        typeAliases += `type ${optFieldsType} = OptFieldsOf<operations["${methodName}"]>;\n`;

        methods += `  ${methodName}(${requiredParams}): Promise<${wrapper}<${resourceAlias}>>;
  ${methodName}(${withTrailingComma}opts: OptionsWithStringOptFields): Promise<${wrapper}<WithStringOptFields<${resourceAlias}>>>;
  ${methodName}<F extends readonly ${optFieldsType}[]>(${withTrailingComma}opts: OptionsWithArrayOptFields<F>): Promise<${wrapper}<WithOptFields<${resourceAlias}, F>>>;
`;
      } else {
        methods += `  ${methodName}(${requiredParams}): Promise<${wrapper}<${resourceAlias}>>;
`;
      }
    }

    if (methods) {
      classes += `export class ${className} {
  constructor(apiClient?: ApiClient);
${methods}}

`;
    }
  }

  return typeAliases + "\n" + classes;
}

// ---------------------------------------------------------------------------
// Static type chunks
// ---------------------------------------------------------------------------

const UTILITY_TYPES = `\
/**
 * Extracts the top-level key from a dot-notation opt_field string.
 * "assignee.name" → "assignee", "due_on" → "due_on"
 */
type TopLevelKey<S extends string> = S extends \`\${infer K}.\${string}\` ? K : S;

/**
 * Extracts the valid opt_fields union for an operation from the generated types.
 * Falls back to \`string\` when the operation has no opt_fields parameter.
 */
type OptFieldsOf<Op> =
  Op extends { parameters: { query?: infer Q } }
    ? NonNullable<Q> extends { opt_fields?: (infer E)[] }
      ? E extends string ? E : string
      : string
    : string;

/**
 * The Asana API always returns \`gid\` regardless of opt_fields, but the OpenAPI
 * spec marks it optional because *all* Response schema fields are optional.
 * This type corrects that by making \`gid\` required.
 */
export type WithGid<T> = { gid: string } & T;

/**
 * For array opt_fields with \`as const\` — requested top-level fields become
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
`;

const API_CLIENT_TYPE = `\
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
`;

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log("Starting type generation for node-asana SDK...\n");

  fs.rmSync(TYPES_DIR, { recursive: true, force: true });
  fs.mkdirSync(TYPES_DIR, { recursive: true });

  const generatedTypes = await generateBaseTypes();
  fs.writeFileSync(GENERATED_FILE, generatedTypes);
  console.log(`✓ Generated base types → ${GENERATED_FILE}`);

  console.log("\nExtracting resource schemas...");
  const schemas = extractResponseSchemas(generatedTypes);

  console.log("\nExtracting operation names...");
  const operationNames = extractOperationNames(generatedTypes);
  console.log(`  Found ${operationNames.size} operations`);

  console.log("\nGenerating type definitions...");
  const apiClassOutput = generateApiClassTypes(schemas, operationNames);
  console.log(`✓ Parsed API classes from ${API_DIR}`);

  const indexContent = `\
/**
 * TypeScript type definitions for the Asana Node.js SDK
 * @packageDocumentation
 */

export * from './generated';
import type { components, operations } from './generated';
export { components, operations };

// --- Utility types --------------------------------------------------------

${UTILITY_TYPES}
// --- Resource types -------------------------------------------------------

${generateResourceTypes(schemas)}
// --- ApiClient ------------------------------------------------------------

${API_CLIENT_TYPE}
// --- API classes ----------------------------------------------------------

${apiClassOutput}`;

  fs.writeFileSync(INDEX_FILE, indexContent);
  console.log(`✓ Generated index types → ${INDEX_FILE}`);

  console.log("\nDone.");
}

main().catch((error) => {
  console.error("Error generating types:", error);
  process.exit(1);
});
