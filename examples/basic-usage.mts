/**
 * Basic Usage Example
 *
 * Demonstrates basic setup and usage of the Asana SDK with TypeScript types:
 * - Creating an API client
 * - Simple API calls (no opt_fields)
 * - Paginated collections
 */

import * as Asana from "asana";

// ============================================================================
// Setup
// ============================================================================

const client = new Asana.ApiClient();
client.authentications.token.accessToken = process.env.ASANA_TOKEN!;

const tasksApi = new Asana.TasksApi(client);
const projectsApi = new Asana.ProjectsApi(client);
const usersApi = new Asana.UsersApi(client);

// ============================================================================
// Basic API Calls - No opt_fields
// ============================================================================

async function getTaskBasic(taskGid: string) {
  // Without opt_fields, the return type has all fields optional — the API
  // returns a default set of fields, but exactly which ones is unspecified.
  const result = await tasksApi.getTask(taskGid);

  const task = result.data;

  const gid = task.gid; // string
  const name = task.name; // string | undefined
  const resourceType = task.resource_type; // string | undefined

  return { gid, name, resourceType };
}

async function getProjectBasic(projectGid: string) {
  const result = await projectsApi.getProject(projectGid);

  const project = result.data;
  const gid = project.gid; // string
  const name = project.name; // string | undefined

  return { gid, name };
}

async function getMeBasic() {
  const result = await usersApi.getUser("me");

  const user = result.data;
  const gid = user.gid; // string
  const name = user.name; // string | undefined

  return { gid, name };
}

// ============================================================================
// Collection Methods - Paginated Results
// ============================================================================

async function listTasksForProject(projectGid: string) {
  const result = await tasksApi.getTasksForProject(projectGid);

  const tasks = result.data;

  for (const task of tasks) {
    console.log(`Task: ${task.gid} - ${task.name}`); // gid: string, name: string | undefined
  }

  if (result.next_page) {
    console.log(`More results at offset: ${result.next_page.offset}`); // string
  }

  return tasks;
}

async function listProjects(workspaceGid: string) {
  const result = await projectsApi.getProjects({ workspace: workspaceGid });

  const projects = result.data;

  return projects.map((p) => ({
    gid: p.gid, // string
    name: p.name, // string | undefined
  }));
}

export {
  getTaskBasic,
  getProjectBasic,
  getMeBasic,
  listTasksForProject,
  listProjects,
};
