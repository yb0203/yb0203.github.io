> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Slack

Connect Slack to let your agents send notifications, post updates, search messages,
and interact with your team's workspace.

## Setup

1. **Tools** → **Slack** → **Connect**
2. Select the Slack workspace to authorize
3. Review bot permissions → click **Allow**

## Available actions

| Action                                     | Description                             |
| ------------------------------------------ | --------------------------------------- |
| `SLACK_SENDS_A_MESSAGE_TO_A_SLACK_CHANNEL` | Post a message to a channel             |
| `SLACK_CREATE_A_CHANNEL`                   | Create a new public or private channel  |
| `SLACK_LIST_ALL_SLACK_TEAM_CHANNELS`       | List all channels in the workspace      |
| `SLACK_GET_CHANNEL_MESSAGES`               | Retrieve recent messages from a channel |
| `SLACK_SEARCH_FOR_A_MESSAGE`               | Search messages across the workspace    |
| `SLACK_REPLY_TO_MESSAGE`                   | Reply to a specific thread              |

## Auth mode

Use **Shared auth** when the agent posts as a bot to shared channels (e.g., deployment
notifications, daily reports). Use **Per-user auth** when agents need to send
messages as individual users.

## Example use cases

**Deployment notifier**: After a SuperFlow workflow completes, posts a summary
to #deployments with status, duration, and any errors.

**Daily standup collector**: Posts a standup prompt to each team member at 9am,
collects responses via DM, and summarizes them in the team channel.

**Alert escalation**: Monitors a queue of events; when severity exceeds threshold,
pages the on-call engineer in their DM with full context.
