> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Asana

Asana is a work management platform that helps teams organize, track, and manage tasks, projects, and goals in one place.

## Setup

1. In Agent Studio, go to **Tools** → **Asana** → **Connect**
2. Sign in with your Asana account and authorize access
3. Review the requested permissions and click **Allow**

## Available actions

| Action                                      | Description                                                                                            |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| `ASANA_ADD_FOLLOWERS_TO_TASK`               | Adds one or more users as followers to a specific task so they receive update notifications.           |
| `ASANA_ADD_SUPPORTING_RELATIONSHIP`         | Links a project, task, portfolio, or goal as a supporting resource to a specific goal.                 |
| `ASANA_ADD_TASK_TO_SECTION`                 | Adds an existing task to a section, optionally positioning it before or after another task.            |
| `ASANA_CREATE_ALLOCATION`                   | Schedules a specific amount of a user's time per week to a task or project within a defined period.    |
| `ASANA_CREATE_A_PROJECT`                    | Creates a new Asana project associated with a workspace or team and returns the full project details.  |
| `ASANA_CREATE_A_TAG_IN_A_WORKSPACE`         | Creates a new tag within a specific Asana workspace to help categorize tasks.                          |
| `ASANA_CREATE_A_TASK`                       | Creates a new Asana task with optional assignment, due dates, followers, and project associations.     |
| `ASANA_CREATE_ATTACHMENT_FOR_TASK`          | Uploads and attaches a file to a specific task in Asana.                                               |
| `ASANA_CREATE_CUSTOM_FIELD`                 | Creates a new custom field in a workspace for tracking specific information on tasks.                  |
| `ASANA_CREATE_ENUM_OPTION_FOR_CUSTOM_FIELD` | Adds a new selectable option to an existing enum custom field.                                         |
| `ASANA_CREATE_PROJECT_STATUS_UPDATE`        | Posts a status update on a project to communicate current progress, blockers, or completion state.     |
| `ASANA_CREATE_SECTION_IN_PROJECT`           | Creates a new section within a project, optionally positioned relative to an existing section.         |
| `ASANA_CREATE_SUBTASK`                      | Creates a new subtask under an existing parent task with optional assignee, due date, and notes.       |
| `ASANA_CREATE_TASK_COMMENT`                 | Adds a plain text comment to an existing task's activity feed.                                         |
| `ASANA_CREATE_TEAM`                         | Creates a new team in an Asana workspace for organizing collaboration.                                 |
| `ASANA_DELETE_ALLOCATION`                   | Removes a specific resource allocation by its ID.                                                      |
| `ASANA_DELETE_ATTACHMENT`                   | Deletes an attachment from Asana by its globally unique identifier.                                    |
| `ASANA_DELETE_CUSTOM_FIELD`                 | Removes an existing custom field from Asana by its globally unique identifier.                         |
| `ASANA_DELETE_PROJECT`                      | Permanently deletes a project from Asana.                                                              |
| `ASANA_DELETE_TAG`                          | Removes an existing tag from Asana by its globally unique identifier.                                  |
| `ASANA_DELETE_TASK`                         | Permanently deletes a task from Asana.                                                                 |
| `ASANA_DUPLICATE_PROJECT`                   | Creates a copy of an existing project, optionally including members, notes, tasks, and scheduling.     |
| `ASANA_DUPLICATE_TASK`                      | Creates a duplicate of an existing task with selectable properties to copy.                            |
| `ASANA_GET_ALLOCATION`                      | Retrieves the details of a specific allocation by its ID.                                              |
| `ASANA_GET_ALLOCATIONS`                     | Retrieves a list of allocations, optionally filtered by project, user, or workspace.                   |
| `ASANA_GET_A_PROJECT`                       | Retrieves full details for a specific Asana project by its GID.                                        |
| `ASANA_GET_A_TASK`                          | Retrieves full details for a specific task by its GID.                                                 |
| `ASANA_GET_ATTACHMENT`                      | Retrieves details about a specific file attachment by its globally unique identifier.                  |
| `ASANA_GET_AUDIT_LOG_EVENTS`                | Retrieves a log of actions performed within a specific Asana workspace.                                |
| `ASANA_GET_A_USER_TASK_LIST`                | Retrieves a specific user's task list by its GID.                                                      |
| `ASANA_GET_CURRENT_USER`                    | Retrieves the authenticated user's full record including accessible workspaces.                        |
| `ASANA_GET_CUSTOM_FIELD`                    | Retrieves the complete metadata and properties of a specific custom field.                             |
| `ASANA_GET_CUSTOM_FIELDS_FOR_WORKSPACE`     | Retrieves a list of all custom fields associated with a specific workspace.                            |
| `ASANA_GET_EVENTS`                          | Retrieves events on a resource to monitor changes to tasks, projects, or tags.                         |
| `ASANA_GET_GOAL`                            | Retrieves the full record for a single goal by its GID.                                                |
| `ASANA_GET_GOAL_RELATIONSHIPS`              | Retrieves the relationships associated with a specific goal.                                           |
| `ASANA_GET_GOALS`                           | Retrieves a list of goals, optionally filtered by workspace, team, portfolio, project, or time period. |
| `ASANA_GET_MEMBERSHIPS`                     | Retrieves memberships for goals, projects, portfolios, or custom fields.                               |
| `ASANA_GET_MULTIPLE_PROJECTS`               | Returns a paginated list of projects, optionally filtered by workspace, team, or archived status.      |
| `ASANA_GET_MULTIPLE_TASKS`                  | Retrieves a list of tasks filterable by assignee, project, section, or completion status.              |
| `ASANA_GET_MULTIPLE_USERS`                  | Returns a list of users in an Asana workspace or organization.                                         |
| `ASANA_GET_MULTIPLE_WORKSPACES`             | Retrieves all workspaces accessible by the authenticated user.                                         |
| `ASANA_GET_PORTFOLIO`                       | Retrieves the full record for a single portfolio by its GID.                                           |
| `ASANA_GET_PORTFOLIO_ITEMS`                 | Retrieves the list of projects or portfolios contained within a portfolio.                             |
| `ASANA_GET_PORTFOLIO_MEMBERSHIPS`           | Retrieves membership records for a portfolio, listing its members.                                     |
| `ASANA_GET_PORTFOLIOS`                      | Retrieves a list of portfolios within a specific workspace.                                            |
| `ASANA_GET_PROJECT_BRIEF`                   | Retrieves the brief (what and why) for a specific project.                                             |
| `ASANA_GET_PROJECT_MEMBERSHIPS`             | Retrieves membership records for a project or for a user across projects.                              |
| `ASANA_GET_PROJECTS_FOR_TEAM`               | Retrieves a list of projects belonging to a specific team.                                             |
| `ASANA_GET_PROJECT_STATUS`                  | Retrieves the full record for a single project status update by its GID.                               |
| `ASANA_GET_PROJECT_STATUS_UPDATES`          | Retrieves the latest or historical status updates for a specific project.                              |
| `ASANA_GET_PROJECT_TEMPLATES`               | Retrieves a list of available project templates in a workspace or team.                                |
| `ASANA_GET_SECTION`                         | Retrieves the full record for a single section by its GID.                                             |
| `ASANA_GET_SECTIONS_IN_PROJECT`             | Returns compact records for all sections in a specified project.                                       |
| `ASANA_GET_STATUS_UPDATES`                  | Retrieves the latest or historical status updates from an Asana object.                                |
| `ASANA_GET_STORIES_FOR_TASK`                | Retrieves comments, status updates, and other stories from a task's activity feed.                     |
| `ASANA_GET_STORY`                           | Retrieves the complete record for a single story (comment or activity event).                          |
| `ASANA_GET_TAG`                             | Retrieves detailed information for a single tag by its globally unique identifier.                     |
| `ASANA_GET_TAGS`                            | Retrieves multiple tags in a workspace.                                                                |
| `ASANA_GET_TASK_ATTACHMENTS`                | Retrieves the list of attachments for a given task, project, or project brief.                         |
| `ASANA_GET_TASKS_FROM_A_PROJECT`            | Retrieves tasks from a specified project, optionally filtered by completion status.                    |
| `ASANA_GET_TASK_SUBTASKS`                   | Retrieves a list of subtasks for a given task.                                                         |
| `ASANA_GET_TASK_TEMPLATES`                  | Retrieves a list of available task templates from a workspace.                                         |
| `ASANA_GET_TEAM`                            | Retrieves details of a specific team by its GID.                                                       |
| `ASANA_GET_TEAM_MEMBERSHIPS`                | Retrieves compact team membership records, listing members of a team or teams a user belongs to.       |
| `ASANA_GET_TEAMS_IN_WORKSPACE`              | Returns compact records for all teams in a workspace visible to the authorized user.                   |
| `ASANA_GET_TIME_PERIODS`                    | Retrieves time period records for use with goals and reporting.                                        |
| `ASANA_GET_TYPEAHEAD_OBJECTS`               | Retrieves objects in a workspace via typeahead search for quick lookup.                                |
| `ASANA_GET_USER`                            | Retrieves a user's details by their ID.                                                                |
| `ASANA_GET_USERS_FOR_TEAM`                  | Retrieves a list of users belonging to a specific team.                                                |
| `ASANA_GET_USERS_FOR_WORKSPACE`             | Retrieves a list of users in a workspace or organization.                                              |
| `ASANA_GET_WORKSPACE`                       | Retrieves details of a specific workspace by its GID.                                                  |
| `ASANA_GET_WORKSPACE_MEMBERSHIPS`           | Retrieves the membership records for a specific workspace.                                             |
| `ASANA_GET_WORKSPACE_PROJECTS`              | Retrieves all projects associated with a specific workspace.                                           |
| `ASANA_INSERT_ENUM_OPTION_FOR_CUSTOM_FIELD` | Reorders or inserts an enum option for a custom field at a specific position.                          |
| `ASANA_REMOVE_FOLLOWER_FROM_TASK`           | Removes one or more followers from a task's follower list.                                             |
| `ASANA_SUBMIT_PARALLEL_REQUESTS`            | Submits multiple Asana API requests in parallel using the batch API for efficiency.                    |
| `ASANA_UPDATE_ALLOCATION`                   | Modifies details of an existing allocation such as schedule or minutes per week.                       |
| `ASANA_UPDATE_A_TASK`                       | Updates attributes of an existing task identified by its task GID.                                     |
| `ASANA_UPDATE_CUSTOM_FIELD`                 | Modifies the properties of an existing custom field by its globally unique identifier.                 |
| `ASANA_UPDATE_ENUM_OPTION`                  | Modifies the name, color, or enabled status of an existing enum option on a custom field.              |
| `ASANA_UPDATE_PROJECT`                      | Updates the details or settings of an existing project.                                                |
| `ASANA_UPDATE_TAG`                          | Updates the name, color, or notes of an existing tag.                                                  |
| `ASANA_UPDATE_TEAM`                         | Updates a team's name, description, or other details.                                                  |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Asana**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated project kickoff**
When a new client engagement begins, an agent can create a project in Asana, set up sections for each phase, and populate initial tasks with due dates and assignees, eliminating manual setup.

**Daily standup digest**
An agent can query tasks assigned to each team member that are due today or overdue, then compile a structured summary and post it to a shared channel, giving teams instant visibility without manual check-ins.

**Cross-tool incident tracking**
When a bug is reported in another system, an agent can automatically create an Asana task with the relevant details, assign it to the right team, attach supporting files, and post a comment linking back to the original report.
