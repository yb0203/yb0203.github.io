> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# ClickUp

Connect ClickUp to let agents manage tasks, read project status, and update
work items across your ClickUp workspace.

## Setup

1. **Tools** → **ClickUp** → **Connect**
2. Authenticate with your ClickUp account
3. Authorize workspace access

## Available actions

| Action                        | Description                                                          |
| ----------------------------- | -------------------------------------------------------------------- |
| `CLICKUP_GET_TASKS_IN_A_LIST` | List tasks in a specific list or space                               |
| `CLICKUP_CREATE_A_TASK`       | Create a new task (name, description, assignees, due date, priority) |
| `CLICKUP_UPDATE_A_TASK`       | Update an existing task (status, assignee, priority, dates)          |
| `CLICKUP_GET_TASK_DETAILS`    | Get full details of a specific task                                  |
| `CLICKUP_SEARCH_TASKS`        | Search tasks by keyword across the workspace                         |
| `CLICKUP_GET_WORKSPACES`      | List accessible workspaces                                           |
| `CLICKUP_ADD_COMMENT_TO_TASK` | Add a comment to a task                                              |

## Example use cases

**Sprint reporter**: Queries all tasks in the current sprint, groups by
status, and generates a daily standup report.

**Bug triage agent**: Reads bug reports (from email or Slack), creates
ClickUp tasks with appropriate priority and assignee based on classification.

**Project health monitor**: Reviews overdue tasks weekly, notifies assignees
via Slack, and updates task due dates based on team capacity.
