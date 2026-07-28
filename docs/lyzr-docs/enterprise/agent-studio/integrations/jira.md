> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Jira

Jira is a project management tool for bug tracking, issue tracking, and agile project planning that lets agents create, update, search, and manage issues, sprints, and projects programmatically.

## Setup

1. In Agent Studio, go to **Tools** → **Jira** → **Connect**
2. Paste your API key from the Jira dashboard
3. Your Jira instance URL and account email will also be required to authenticate requests

## Available actions

| Action                                  | Description                                                                                                   |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `JIRA_ADD_ATTACHMENT`                   | Uploads and attaches a file to a Jira issue.                                                                  |
| `JIRA_ADD_COMMENT`                      | Adds a rich-text comment to an existing Jira issue using Atlassian Document Format.                           |
| `JIRA_ADD_WATCHER_TO_ISSUE`             | Adds a user to an issue's watcher list by account ID.                                                         |
| `JIRA_ASSIGN_ISSUE`                     | Assigns a Jira issue to a user, the default assignee, or unassigns it.                                        |
| `JIRA_BULK_CREATE_ISSUE`                | Creates up to 50 Jira issues in a single call with full field support.                                        |
| `JIRA_CREATE_ISSUE`                     | Creates a new Jira issue such as a bug, task, or story in a specified project.                                |
| `JIRA_CREATE_ISSUE_LINK`                | Links two Jira issues together using a specified relationship type with an optional comment.                  |
| `JIRA_CREATE_PROJECT`                   | Creates a new Jira project with a required lead, template, and project type configuration.                    |
| `JIRA_CREATE_SPRINT`                    | Creates a new sprint on a Jira board with optional start and end dates and a goal.                            |
| `JIRA_CREATE_VERSION`                   | Creates a new version for releases or milestones in a Jira project.                                           |
| `JIRA_DELETE_COMMENT`                   | Deletes a specific comment from a Jira issue by comment ID.                                                   |
| `JIRA_DELETE_ISSUE`                     | Deletes a Jira issue by its ID or key, with optional subtask deletion.                                        |
| `JIRA_DELETE_VERSION`                   | Deletes a Jira version and optionally reassigns its associated issues to another version.                     |
| `JIRA_DELETE_WORKLOG`                   | Deletes a worklog entry from a Jira issue with configurable estimate adjustment.                              |
| `JIRA_EDIT_ISSUE`                       | Updates fields on an existing Jira issue including summary, description, assignee, priority, and more.        |
| `JIRA_FIND_USERS`                       | Searches for Jira users by email, display name, or username to retrieve their account IDs.                    |
| `JIRA_GET_ALL_ISSUE_TYPE_SCHEMES`       | Retrieves all Jira issue type schemes with optional ID filtering and pagination.                              |
| `JIRA_GET_ALL_PROJECTS`                 | Retrieves all visible Jira projects using the paginated API with server-side filtering support.               |
| `JIRA_GET_ALL_STATUSES`                 | Retrieves all available issue statuses from the Jira instance.                                                |
| `JIRA_GET_ALL_USERS`                    | Retrieves all users from the Jira instance including active and inactive accounts with pagination.            |
| `JIRA_GET_COMMENT`                      | Retrieves a specific comment by ID from a Jira issue with optional content expansions.                        |
| `JIRA_GET_CURRENT_USER`                 | Retrieves detailed profile information about the currently authenticated Jira user.                           |
| `JIRA_GET_ISSUE`                        | Retrieves a Jira issue by ID or key with customizable fields and expansion options.                           |
| `JIRA_GET_ISSUE_LINK_TYPES`             | Retrieves all configured issue link types available in the Jira instance.                                     |
| `JIRA_GET_ISSUE_PROPERTY`               | Retrieves a custom property value from a Jira issue by property key.                                          |
| `JIRA_GET_ISSUE_RESOLUTIONS`            | Retrieves all available issue resolution types from Jira.                                                     |
| `JIRA_GET_ISSUE_TYPES`                  | Retrieves all Jira issue types available to the authenticated user.                                           |
| `JIRA_GET_ISSUE_TYPE_SCHEME`            | Retrieves a Jira issue type scheme by ID along with all its associated issue types.                           |
| `JIRA_GET_ISSUE_WATCHERS`               | Retrieves the list of users watching a Jira issue for update notifications.                                   |
| `JIRA_GET_ISSUE_WORKLOGS`               | Retrieves worklogs for a Jira issue with optional time-range filtering and pagination.                        |
| `JIRA_GET_PROJECT_VERSIONS`             | Retrieves all versions defined for a Jira project with optional expansion.                                    |
| `JIRA_GET_REMOTE_ISSUE_LINKS`           | Retrieves links from a Jira issue to external resources, with optional filtering by global ID.                |
| `JIRA_GET_TRANSITIONS`                  | Retrieves the available workflow transitions for a Jira issue.                                                |
| `JIRA_GET_VOTES`                        | Fetches voting details for a Jira issue, including the vote count and voters.                                 |
| `JIRA_GET_WORKLOG`                      | Retrieves worklog entries for a specified Jira issue with optional pagination and date filters.               |
| `JIRA_LIST_BOARDS`                      | Retrieves paginated Jira boards with optional filtering by name, type, or project.                            |
| `JIRA_LIST_ISSUE_COMMENTS`              | Retrieves paginated comments from a Jira issue with optional ordering and rendering.                          |
| `JIRA_LIST_SPRINTS`                     | Retrieves paginated sprints from a Jira board with optional state filtering.                                  |
| `JIRA_MOVE_ISSUE_TO_SPRINT`             | Moves one or more Jira issues into a specified active sprint.                                                 |
| `JIRA_REMOVE_WATCHER_FROM_ISSUE`        | Removes a user from an issue's watcher list by account ID.                                                    |
| `JIRA_SEARCH_FOR_ISSUES_USING_JQL_GET`  | Searches for Jira issues using a JQL query via GET request with pagination and field selection.               |
| `JIRA_SEARCH_FOR_ISSUES_USING_JQL_POST` | Searches for Jira issues using a JQL query via POST request, ideal for long or complex queries.               |
| `JIRA_SEARCH_ISSUES`                    | Advanced issue search supporting structured filters such as assignee, status, and priority alongside raw JQL. |
| `JIRA_SEND_NOTIFICATION_FOR_ISSUE`      | Sends a customized email notification for a Jira issue to specified users, groups, or roles.                  |
| `JIRA_TRANSITION_ISSUE`                 | Transitions a Jira issue to a different workflow state with support for comment and assignee updates.         |
| `JIRA_UPDATE_COMMENT`                   | Updates the text content or visibility settings of an existing comment on a Jira issue.                       |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Jira**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated bug triage from user reports**
When a user submits a support request, the agent creates a Jira bug issue using `JIRA_CREATE_ISSUE`, assigns it to the relevant team member via `JIRA_ASSIGN_ISSUE`, and adds a comment with reproduction steps using `JIRA_ADD_COMMENT`.

**Sprint planning assistant**
The agent uses `JIRA_SEARCH_ISSUES` to find all open high-priority issues in a project, then calls `JIRA_MOVE_ISSUE_TO_SPRINT` to populate an upcoming sprint and `JIRA_CREATE_SPRINT` to set up the sprint with goals and dates.

**Release readiness reporter**
The agent queries issues tied to an upcoming version using `JIRA_SEARCH_FOR_ISSUES_USING_JQL_POST`, checks their statuses, and sends a summary notification to stakeholders using `JIRA_SEND_NOTIFICATION_FOR_ISSUE` to surface any blockers before release.
