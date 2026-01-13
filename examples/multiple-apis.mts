/**
 * Multiple APIs Example
 *
 * Demonstrates using different Asana APIs with TypeScript types,
 * showing how the same opt_fields patterns apply across all resources.
 */

import * as Asana from "asana";

const client = new Asana.ApiClient();
client.authentications.token.accessToken = process.env.ASANA_TOKEN!;

const tasksApi = new Asana.TasksApi(client);
const projectsApi = new Asana.ProjectsApi(client);
const usersApi = new Asana.UsersApi(client);
const teamsApi = new Asana.TeamsApi(client);
const workspacesApi = new Asana.WorkspacesApi(client);
const tagsApi = new Asana.TagsApi(client);
const sectionsApi = new Asana.SectionsApi(client);
const storiesApi = new Asana.StoriesApi(client);

// ============================================================================
// Projects API
// ============================================================================

async function getProjectDetails(projectGid: string) {
  const result = await projectsApi.getProject(projectGid, {
    opt_fields: [
      "name",
      "notes",
      "color",
      "archived",
      "owner",
      "team",
      "team.name",
      "members",
      "members.name",
      "followers",
      "followers.name",
      "created_at",
      "modified_at",
    ] as const,
  });

  const project = result.data;

  console.log(`Project: ${project.name}`); // string
  console.log(`Notes: ${project.notes}`); // string
  console.log(`Color: ${project.color}`); // "dark-pink" | "dark-green" | ... | "none" | null
  console.log(`Archived: ${project.archived}`); // boolean
  console.log(`Created: ${project.created_at}`); // string

  if (project.owner) {
    // { readonly gid?: string; name?: string; readonly resource_type?: string }
    console.log(`Owner: ${project.owner.name}`); // string | undefined
  }

  if (project.team) {
    // { readonly gid?: string; name?: string; readonly resource_type?: string }
    console.log(`Team: ${project.team.name}`); // string | undefined
  }

  return project;
}

async function listProjectsInWorkspace(workspaceGid: string) {
  const result = await projectsApi.getProjects({
    workspace: workspaceGid,
    opt_fields: ["name", "color", "archived", "owner"] as const,
  });

  for (const project of result.data) {
    console.log(`${project.name} (${project.color})`); // string, color enum | null
  }

  return result.data;
}

// ============================================================================
// Users API
// ============================================================================

async function getCurrentUser() {
  const result = await usersApi.getUser("me", {
    opt_fields: [
      "name",
      "email",
      "photo",
      "workspaces",
      "workspaces.name",
    ] as const,
  });

  const user = result.data;

  console.log(`Name: ${user.name}`); // string
  console.log(`Email: ${user.email}`); // string

  if (user.photo) {
    // { image_21x21?: string; image_27x27?: string; ...; image_1024x1024?: string }
    console.log(`Photo: ${user.photo.image_128x128}`); // string | undefined
  }

  for (const workspace of user.workspaces ?? []) {
    // { gid?: string; name?: string; ... }[]
    console.log(`Workspace: ${workspace.name}`); // string | undefined
  }

  return user;
}

async function listUsersInWorkspace(workspaceGid: string) {
  const result = await usersApi.getUsers({
    workspace: workspaceGid,
    opt_fields: ["name", "email"] as const,
  });

  return result.data;
}

// ============================================================================
// Teams API
// ============================================================================

async function getTeamDetails(teamGid: string) {
  const result = await teamsApi.getTeam(teamGid, {
    opt_fields: ["name", "description", "organization"] as const,
  });

  const team = result.data;

  console.log(`Team: ${team.name}`); // string
  console.log(`Description: ${team.description}`); // string

  return team;
}

async function listTeamsInWorkspace(workspaceGid: string) {
  const result = await teamsApi.getTeamsForWorkspace(workspaceGid);

  const teams = result.data; // all fields optional except gid (no opt_fields)

  return teams;
}

// ============================================================================
// Workspaces API
// ============================================================================

async function getWorkspaceDetails(workspaceGid: string) {
  const result = await workspacesApi.getWorkspace(workspaceGid, {
    opt_fields: ["name", "is_organization", "email_domains"] as const,
  });

  const workspace = result.data;

  console.log(`Workspace: ${workspace.name}`); // string
  console.log(`Is Organization: ${workspace.is_organization}`); // boolean

  return workspace;
}

async function listWorkspaces() {
  const result = await workspacesApi.getWorkspaces({
    opt_fields: ["name", "is_organization"] as const,
  });

  return result.data;
}

// ============================================================================
// Tags API
// ============================================================================

async function getTagDetails(tagGid: string) {
  const result = await tagsApi.getTag(tagGid, {
    opt_fields: [
      "name",
      "color",
      "notes",
      "workspace",
      "workspace.name",
    ] as const,
  });

  const tag = result.data;

  console.log(`Tag: ${tag.name}`); // string
  console.log(`Color: ${tag.color}`); // "dark-pink" | "dark-green" | ... | "none" | null

  return tag;
}

async function listTagsInWorkspace(workspaceGid: string) {
  const result = await tagsApi.getTags({
    workspace: workspaceGid,
    opt_fields: ["name", "color"] as const,
  });

  return result.data;
}

// ============================================================================
// Sections API
// ============================================================================

async function getSectionDetails(sectionGid: string) {
  const result = await sectionsApi.getSection(sectionGid, {
    opt_fields: ["name", "project", "project.name", "created_at"] as const,
  });

  const section = result.data;

  console.log(`Section: ${section.name}`); // string
  console.log(`Created: ${section.created_at}`); // string

  if (section.project) {
    // { readonly gid?: string; name?: string; readonly resource_type?: string }
    console.log(`In Project: ${section.project.name}`); // string | undefined
  }

  return section;
}

async function listSectionsInProject(projectGid: string) {
  const result = await sectionsApi.getSectionsForProject(projectGid, {
    opt_fields: ["name"] as const,
  });

  return result.data;
}

// ============================================================================
// Stories API (Comments and Activity)
// ============================================================================

async function getStoryDetails(storyGid: string) {
  const result = await storiesApi.getStory(storyGid, {
    opt_fields: [
      "text",
      "created_at",
      "created_by",
      "created_by.name",
      "type",
    ] as const,
  });

  const story = result.data;

  console.log(`Type: ${story.type}`); // string
  console.log(`Text: ${story.text}`); // string
  console.log(`Created: ${story.created_at}`); // string

  if (story.created_by) {
    // { readonly gid?: string; name?: string; readonly resource_type?: string }
    console.log(`By: ${story.created_by.name}`); // string | undefined
  }

  return story;
}

async function listStoriesForTask(taskGid: string) {
  const result = await storiesApi.getStoriesForTask(taskGid, {
    opt_fields: [
      "text",
      "type",
      "created_at",
      "created_by",
      "created_by.name",
    ] as const,
  });

  for (const story of result.data) {
    const author = story.created_by?.name ?? "Unknown"; // string
    console.log(`[${story.type}] ${author}: ${story.text}`); // string, string, string
  }

  return result.data;
}

// ============================================================================
// Combined Example: Get Full Task Context
// ============================================================================

async function getFullTaskContext(taskGid: string) {
  const taskResult = await tasksApi.getTask(taskGid, {
    opt_fields: [
      "name",
      "notes",
      "completed",
      "due_on",
      "assignee",
      "assignee.name",
      "projects",
      "projects.name",
      "tags",
      "tags.name",
      "parent",
      "parent.name",
      "num_subtasks",
    ] as const,
  });

  const task = taskResult.data;

  console.log("=== Task Details ===");
  console.log(`Name: ${task.name}`); // string
  console.log(`Completed: ${task.completed}`); // boolean
  console.log(`Due: ${task.due_on ?? "No due date"}`); // string | null

  if (task.assignee) {
    // { readonly gid?: string; name?: string; readonly resource_type?: string }
    console.log(`Assignee: ${task.assignee.name}`); // string | undefined
  }

  if (task.parent) {
    // { readonly gid?: string; name?: string; ... }
    console.log(`Parent Task: ${task.parent.name}`); // string | undefined
  }

  console.log(`Subtasks: ${task.num_subtasks}`); // number

  if (task.projects && task.projects.length > 0) {
    // { gid?: string; name?: string; ... }[]
    console.log("\n=== Projects ===");
    for (const project of task.projects) {
      console.log(`- ${project.name}`); // string | undefined
    }
  }

  if (task.tags && task.tags.length > 0) {
    // { gid?: string; name?: string; ... }[]
    console.log("\n=== Tags ===");
    for (const tag of task.tags) {
      console.log(`- ${tag.name}`); // string | undefined
    }
  }

  // Get comments/stories
  const storiesResult = await storiesApi.getStoriesForTask(taskGid, {
    opt_fields: [
      "text",
      "type",
      "created_by",
      "created_by.name",
      "created_at",
    ] as const,
  });

  const comments = storiesResult.data.filter((s) => s.type === "comment");

  if (comments.length > 0) {
    console.log("\n=== Comments ===");
    for (const comment of comments) {
      const author = comment.created_by?.name ?? "Unknown"; // string
      console.log(`[${comment.created_at}] ${author}: ${comment.text}`); // string, string, string
    }
  }

  return { task, comments };
}

export {
  getProjectDetails,
  listProjectsInWorkspace,
  getCurrentUser,
  listUsersInWorkspace,
  getTeamDetails,
  listTeamsInWorkspace,
  getWorkspaceDetails,
  listWorkspaces,
  getTagDetails,
  listTagsInWorkspace,
  getSectionDetails,
  listSectionsInProject,
  getStoryDetails,
  listStoriesForTask,
  getFullTaskContext,
};
