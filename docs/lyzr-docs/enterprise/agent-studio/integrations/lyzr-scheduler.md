> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Lyzr Scheduler

Lyzr Scheduler lets you create and manage time-based agent executions using cron expressions, with full support for pausing, resuming, and monitoring scheduled runs.

## Setup

1. In Agent Studio, go to **Tools** → **Lyzr Scheduler** → **Connect**
2. Paste your API key from the Lyzr Scheduler dashboard

## Available actions

| Action                            | Description                                                                         |
| --------------------------------- | ----------------------------------------------------------------------------------- |
| `LYZR_SCHEDULER__CREATE_SCHEDULE` | Create a new agent schedule using a cron expression, timezone, and message payload. |
| `LYZR_SCHEDULER__LIST_SCHEDULES`  | List all schedules with support for pagination.                                     |
| `LYZR_SCHEDULER__GET_SCHEDULE`    | Retrieve the details of a specific schedule by its ID.                              |
| `LYZR_SCHEDULER__GET_LOGS`        | Fetch execution logs for a given schedule.                                          |
| `LYZR_SCHEDULER__DELETE_SCHEDULE` | Permanently delete a schedule.                                                      |
| `LYZR_SCHEDULER__PAUSE_SCHEDULE`  | Pause an active schedule so it stops running until resumed.                         |
| `LYZR_SCHEDULER__RESUME_SCHEDULE` | Resume a previously paused schedule.                                                |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Lyzr Scheduler**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated daily report generation**
Schedule an agent to run every morning using a cron expression, have it compile data from connected sources, and deliver a summary, without any manual trigger.

**Pause campaigns during off-hours**
Use the pause and resume actions to automatically halt agent-driven outreach or processing jobs outside business hours, then restart them at the start of the next working day.

**Monitor and audit scheduled runs**
Retrieve execution logs for any schedule to audit agent activity, diagnose failures, and verify that time-sensitive workflows are completing successfully.
