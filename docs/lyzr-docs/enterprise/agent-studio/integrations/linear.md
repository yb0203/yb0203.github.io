> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Linear

Linear is a streamlined issue tracking and project planning tool for modern software teams, offering fast workflows, keyboard shortcuts, and deep integrations to manage issues, cycles, and projects in one place.

## Setup

1. In Agent Studio, go to **Tools** → **Linear** → **Connect**
2. Sign in with your Linear account and authorize access
3. Review the requested permissions and click **Allow**

## Available actions

| Action                               | Description                                                                                                                                                 |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `LINEAR_CREATE_LINEAR_ATTACHMENT`    | Creates a new attachment and associates it with a specific existing Linear issue.                                                                           |
| `LINEAR_CREATE_LINEAR_COMMENT`       | Creates a new comment on a specified Linear issue.                                                                                                          |
| `LINEAR_CREATE_LINEAR_ISSUE`         | Creates a new issue in a specified Linear project and team with a title, description, and optional properties like assignee, state, priority, and due date. |
| `LINEAR_CREATE_LINEAR_ISSUE_DETAILS` | Fetches a Linear team's default issue estimate and state, useful for pre-filling new issue forms.                                                           |
| `LINEAR_CREATE_LINEAR_LABEL`         | Creates a new label for a specified team to categorize and organize issues.                                                                                 |
| `LINEAR_DELETE_LINEAR_ISSUE`         | Archives an existing Linear issue by its ID, which is Linear's standard way of deleting issues.                                                             |
| `LINEAR_GET_ALL_LINEAR_TEAMS`        | Retrieves all teams from the Linear workspace.                                                                                                              |
| `LINEAR_GET_ATTACHMENTS`             | Downloads a specific attachment from a Linear issue by its ID and file name.                                                                                |
| `LINEAR_GET_CURRENT_USER`            | Gets the currently authenticated user's ID, name, email, and other profile information.                                                                     |
| `LINEAR_GET_CYCLES_BY_TEAM_ID`       | Retrieves all cycles (sprints) for a specified Linear team.                                                                                                 |
| `LINEAR_GET_LINEAR_ISSUE`            | Retrieves comprehensive details for an existing Linear issue, including title, description, attachments, and comments.                                      |
| `LINEAR_LIST_LINEAR_CYCLES`          | Retrieves all cycles from the Linear account without any filters applied.                                                                                   |
| `LINEAR_LIST_LINEAR_ISSUES`          | Lists non-archived Linear issues, optionally filtered by project or assignee.                                                                               |
| `LINEAR_LIST_LINEAR_LABELS`          | Retrieves all labels associated with a given team in Linear.                                                                                                |
| `LINEAR_LIST_LINEAR_PROJECTS`        | Retrieves all projects from the Linear account.                                                                                                             |
| `LINEAR_LIST_LINEAR_STATES`          | Retrieves all workflow states for a specified team, representing the stages an issue progresses through.                                                    |
| `LINEAR_LIST_LINEAR_TEAMS`           | Retrieves all teams and filters each team's associated projects by a provided project ID.                                                                   |
| `LINEAR_LIST_LINEAR_USERS`           | Lists all users in the Linear workspace with their IDs, names, emails, and active status.                                                                   |
| `LINEAR_REMOVE_ISSUE_LABEL`          | Removes a specified label from an existing Linear issue using their IDs.                                                                                    |
| `LINEAR_RUN_QUERY_OR_MUTATION`       | Executes any GraphQL query or mutation against the Linear API as a fallback for operations not covered by other actions.                                    |
| `LINEAR_UPDATE_ISSUE`                | Updates an existing Linear issue's properties such as title, state, assignee, priority, labels, or due date.                                                |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Linear**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated bug triage from support tickets**
When a customer support ticket is escalated, the agent automatically creates a Linear issue with the relevant details, assigns it to the appropriate team, and sets the priority based on the ticket severity.

**Sprint planning assistant**
An agent retrieves all open issues for a team, checks current cycle assignments, and helps the team move prioritized issues into the active sprint cycle while updating estimates and assignees.

**Cross-tool issue synchronization**
When a GitHub pull request is merged or a Slack message is flagged, the agent updates the corresponding Linear issue's state to "Done" or adds a comment summarizing the linked activity.
