> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Google Tasks

Connect Google Tasks to let agents create, read, update, and complete tasks
synced with Google's task management system.

## Setup

1. **Tools** → **Google Tasks** → **Connect**
2. Authenticate with Google account
3. Grant tasks access

## Available actions

| Action                        | Description                                |
| ----------------------------- | ------------------------------------------ |
| `GOOGLETASKS_LIST_TASKS`      | List tasks in a task list                  |
| `GOOGLETASKS_CREATE_TASK`     | Create a new task (title, notes, due date) |
| `GOOGLETASKS_UPDATE_TASK`     | Modify an existing task                    |
| `GOOGLETASKS_DELETE_TASK`     | Delete a task                              |
| `GOOGLETASKS_LIST_TASK_LISTS` | List all task lists in the account         |

## Example use cases

**Action item extractor**: Reads meeting notes (from email or a KB) and creates
tasks for each identified action item with owner and due date.

**Daily task reviewer**: At end of day, lists incomplete tasks, asks the user
which to carry forward, and updates due dates accordingly.
