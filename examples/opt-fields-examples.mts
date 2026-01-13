/**
 * opt_fields Examples
 *
 * Demonstrates how the TypeScript types change based on how you specify
 * opt_fields:
 *
 * 1. No opt_fields     → All fields optional (default set is unspecified)
 * 2. String opt_fields  → Only gid is guaranteed, everything else optional
 * 3. Array opt_fields with `as const` → Requested fields become required
 */

import * as Asana from "asana";
import type { WithOptFields } from "asana";

const client = new Asana.ApiClient();
client.authentications.token.accessToken = process.env.ASANA_TOKEN!;

const tasksApi = new Asana.TasksApi(client);

// ============================================================================
// CASE 1: No opt_fields
// All fields optional — the API returns a default set, but the exact set is
// not specified, so the type conservatively marks everything as optional.
// ============================================================================

async function noOptFields(taskGid: string) {
  const result = await tasksApi.getTask(taskGid);

  // Type: DataResponse<WithGid<Task>> — gid is guaranteed, all other fields optional
  const task = result.data;

  const gid = task.gid; // string
  const name = task.name; // string | undefined
  const resourceType = task.resource_type; // string | undefined

  return { gid, name, resourceType };
}

// ============================================================================
// CASE 2: String opt_fields
// Only gid is guaranteed, everything else is optional (Partial<Task>)
// Use this when opt_fields comes from a variable or user input
// ============================================================================

async function stringOptFields(taskGid: string, fieldsFromUser: string) {
  const result = await tasksApi.getTask(taskGid, {
    opt_fields: fieldsFromUser,
  });

  // Type: DataResponse<{ gid: string } & Partial<Task>>
  const task = result.data;

  const gid = task.gid; // string (gid is always guaranteed)
  const assignee = task.assignee; // { gid?: string; name?: string; ... } | null | undefined
  const dueOn = task.due_on; // string | null | undefined
  const completed = task.completed; // boolean | undefined
  const name = task.name; // string | undefined

  if (task.assignee) {
    // { gid?: string; name?: string; resource_type?: string }
    console.log(`Assigned to: ${task.assignee.name}`); // string | undefined
  }

  return { gid, assignee, dueOn, completed, name };
}

// Another string example - hardcoded string (still treated as string type)
async function hardcodedStringOptFields(taskGid: string) {
  const result = await tasksApi.getTask(taskGid, {
    opt_fields: "assignee,due_on,completed",
  });

  const task = result.data;
  const gid = task.gid; // string (guaranteed)
  const assignee = task.assignee; // { gid?: string; name?: string; ... } | null | undefined
  const dueOn = task.due_on; // string | null | undefined

  return { gid, assignee, dueOn };
}

// ============================================================================
// CASE 3: Array opt_fields with `as const`
// Requested fields become REQUIRED in the return type
// This is the recommended approach for best type safety
// ============================================================================

async function arrayOptFieldsWithAsConst(taskGid: string) {
  const result = await tasksApi.getTask(taskGid, {
    opt_fields: [
      "assignee",
      "assignee.name",
      "due_on",
      "completed",
      "name",
    ] as const, // `as const` is IMPORTANT!
  });

  const task = result.data;

  const gid = task.gid; // string (gid is always guaranteed)
  const assignee = task.assignee; // { gid?: string; name?: string; ... } | null (NOT undefined)
  const dueOn = task.due_on; // string | null (NOT undefined)
  const completed = task.completed; // boolean (NOT undefined)
  const name = task.name; // string (NOT undefined)

  console.log(`Task: ${name}`); // string
  console.log(`Completed: ${completed}`); // boolean

  if (assignee) {
    // { gid?: string; name?: string; resource_type?: string }
    console.log(`Assigned to: ${assignee.name}`); // string | undefined
  }

  return { gid, assignee, dueOn, completed, name };
}

// You can also define the array separately (but must still use `as const`)
async function separateArrayOptFields(taskGid: string) {
  const optFields = ["assignee", "due_on", "projects", "tags"] as const;

  const result = await tasksApi.getTask(taskGid, {
    opt_fields: optFields,
  });

  const task = result.data;

  const gid = task.gid; // string (gid is always guaranteed)
  const assignee = task.assignee; // { gid?: string; name?: string; ... } | null
  const dueOn = task.due_on; // string | null
  const projects = task.projects; // { gid?: string; name?: string; ... }[] | undefined
  const tags = task.tags; // { gid?: string; name?: string; ... }[] | undefined

  return { gid, assignee, dueOn, projects, tags };
}

// ============================================================================
// CASE 4: Dot-notation fields
// The Asana API supports requesting nested fields like "assignee.name".
// These are accepted by the type system and the top-level key ("assignee")
// becomes required in the result type.
// ============================================================================

async function dotNotationOptFields(taskGid: string) {
  const result = await tasksApi.getTask(taskGid, {
    opt_fields: [
      "assignee",
      "assignee.name",
      "due_on",
      "projects",
      "projects.name",
    ] as const,
  });

  const task = result.data;
  const gid = task.gid; // string (gid is always guaranteed)

  const assignee = task.assignee; // { gid?: string; name?: string; ... } | null
  const dueOn = task.due_on; // string | null
  const projects = task.projects; // { gid?: string; name?: string; ... }[] | undefined

  if (assignee) {
    // { gid?: string; name?: string; resource_type?: string }
    console.log(`Assigned to: ${assignee.name}`); // string | undefined
  }
  console.log(`Due: ${dueOn ?? "No due date"}`); // string
  for (const project of projects ?? []) {
    console.log(`In project: ${project.name}`); // string | undefined
  }

  return { gid, assignee, dueOn, projects };
}

// ============================================================================
// CASE 5: Array opt_fields WITHOUT `as const` (AVOID THIS)
// Without `as const`, you need to join into a string or add `as const`
// ============================================================================

async function arrayWithoutAsConst(taskGid: string) {
  // Without `as const`, this is typed as string[] which doesn't match
  // the array overload — you must fall back to string form.
  const optFields = ["assignee", "due_on", "completed"];

  const result = await tasksApi.getTask(taskGid, {
    opt_fields: optFields.join(","),
  });

  const task = result.data;
  const gid = task.gid; // string (gid is always guaranteed)
  const assignee = task.assignee; // { gid?: string; name?: string; ... } | null | undefined
  const dueOn = task.due_on; // string | null | undefined

  return { gid, assignee, dueOn };
}

// Recommended fix: add `as const` from the start
async function arrayWithAsConstFromStart(taskGid: string) {
  const optFields = ["assignee", "due_on", "completed"] as const;

  const result = await tasksApi.getTask(taskGid, {
    opt_fields: optFields,
  });

  const task = result.data;
  const gid = task.gid; // string (gid is always guaranteed)
  const assignee = task.assignee; // { gid?: string; name?: string; ... } | null
  const dueOn = task.due_on; // string | null
  const completed = task.completed; // boolean

  return { gid, assignee, dueOn, completed };
}

// ============================================================================
// Collection Methods with opt_fields
// The same patterns apply to methods that return collections
// ============================================================================

async function collectionWithOptFields(projectGid: string) {
  const result = await tasksApi.getTasksForProject(projectGid, {
    opt_fields: ["name", "completed", "due_on", "assignee"] as const,
  });

  for (const task of result.data) {
    const gid = task.gid; // string (gid is always guaranteed)
    const name: string = task.name; // string
    const completed: boolean = task.completed; // boolean
    const dueOn = task.due_on; // string | null

    console.log(`${name}: ${completed ? "Done" : "Pending"}`);
    console.log(gid, dueOn);

    if (task.assignee) {
      // { gid?: string; name?: string; resource_type?: string }
      console.log(`  Assigned to: ${task.assignee.name}`); // string | undefined
    }
  }

  return result.data;
}

// ============================================================================
// Type Aliases for Reuse
// You can create type aliases for common opt_fields patterns
// ============================================================================

const TASK_DETAIL_FIELDS = [
  "name",
  "completed",
  "due_on",
  "due_at",
  "assignee",
  "assignee.name",
  "projects",
  "projects.name",
  "tags",
  "tags.name",
  "notes",
] as const;

type TaskWithDetails = WithOptFields<Asana.Task, typeof TASK_DETAIL_FIELDS>;

async function getTaskWithDetails(taskGid: string): Promise<TaskWithDetails> {
  const result = await tasksApi.getTask(taskGid, {
    opt_fields: TASK_DETAIL_FIELDS,
  });

  return result.data;
}

async function useTaskWithDetails(taskGid: string) {
  const task = await getTaskWithDetails(taskGid);

  console.log(`Task: ${task.name}`); // string
  console.log(`Completed: ${task.completed}`); // boolean
  console.log(`Notes: ${task.notes}`); // string

  if (task.assignee) {
    // { gid?: string; name?: string; resource_type?: string }
    console.log(`Assigned to: ${task.assignee.name}`); // string | undefined
  }

  for (const project of task.projects ?? []) {
    console.log(`In project: ${project.name}`); // string | undefined
  }
}

export {
  noOptFields,
  stringOptFields,
  hardcodedStringOptFields,
  arrayOptFieldsWithAsConst,
  separateArrayOptFields,
  dotNotationOptFields,
  arrayWithoutAsConst,
  arrayWithAsConstFromStart,
  collectionWithOptFields,
  getTaskWithDetails,
  useTaskWithDetails,
};
