> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Microsoft Teams

Microsoft Teams integrates chat, video meetings, file storage, and team collaboration within Microsoft 365, enabling agents to send messages, manage teams and channels, schedule meetings, and coordinate with users across your organization.

## Setup

1. In Agent Studio, go to **Tools** → **Microsoft Teams** → **Connect**
2. Sign in with your Microsoft account and authorize access
3. Review the requested permissions and click **Allow**

## Available actions

| Action                                       | Description                                                                                                |
| -------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| `MICROSOFT_TEAMS_ADD_MEMBER_TO_TEAM`         | Adds a user to a Microsoft Teams team, optionally assigning them as an owner.                              |
| `MICROSOFT_TEAMS_ARCHIVE_TEAM`               | Archives a Microsoft Teams team, making it read-only while preserving its content.                         |
| `MICROSOFT_TEAMS_CHATS_GET_ALL_CHATS`        | Retrieves all chats a specified user is part of, with support for filtering and pagination.                |
| `MICROSOFT_TEAMS_CHATS_GET_ALL_MESSAGES`     | Retrieves all messages from a specified chat, with support for filtering and pagination.                   |
| `MICROSOFT_TEAMS_CREATE_MEETING`             | Schedules a new standalone Microsoft Teams online meeting with specified participants and time.            |
| `MICROSOFT_TEAMS_CREATE_TEAM`                | Creates a new Microsoft Teams team with optional template, channels, and initial members.                  |
| `MICROSOFT_TEAMS_DELETE_TEAM`                | Permanently deletes a Microsoft Teams team by its unique identifier.                                       |
| `MICROSOFT_TEAMS_GET_CHANNEL`                | Retrieves details for a specific channel within a team using its team and channel IDs.                     |
| `MICROSOFT_TEAMS_GET_CHAT_MESSAGE`           | Retrieves a specific message from a chat using its chat and message IDs.                                   |
| `MICROSOFT_TEAMS_GET_TEAM`                   | Retrieves full details of a specific Microsoft Teams team by its ID.                                       |
| `MICROSOFT_TEAMS_LIST_MESSAGE_REPLIES`       | Lists replies to a specific channel message using the team, channel, and message IDs.                      |
| `MICROSOFT_TEAMS_LIST_TEAM_MEMBERS`          | Lists all members of a Microsoft Teams team, useful for auditing or notifications.                         |
| `MICROSOFT_TEAMS_LIST_TEAMS_TEMPLATES`       | Retrieves available Microsoft Teams templates for use during team creation or customization.               |
| `MICROSOFT_TEAMS_LIST_USERS`                 | Lists all users in the organization directory with support for filtering, pagination, and field selection. |
| `MICROSOFT_TEAMS_TEAMS_CREATE_CHANNEL`       | Creates a new standard, private, or shared channel within a specified team.                                |
| `MICROSOFT_TEAMS_TEAMS_CREATE_CHAT`          | Creates a new one-on-one or group chat between specified users.                                            |
| `MICROSOFT_TEAMS_TEAMS_GET_MESSAGE`          | Retrieves a specific message from a Teams channel using the team, channel, and message IDs.                |
| `MICROSOFT_TEAMS_TEAMS_LIST`                 | Retrieves all Microsoft Teams accessible to the authenticated user, with filtering and pagination support. |
| `MICROSOFT_TEAMS_TEAMS_LIST_CHANNELS`        | Retrieves all channels for a specified team, including optional shared channels.                           |
| `MICROSOFT_TEAMS_TEAMS_LIST_CHAT_MESSAGES`   | Retrieves messages from a chat in reverse chronological order using the chat ID.                           |
| `MICROSOFT_TEAMS_TEAMS_LIST_PEOPLE`          | Retrieves a list of people relevant to a specified user from the Microsoft Graph people API.               |
| `MICROSOFT_TEAMS_TEAMS_POST_CHANNEL_MESSAGE` | Posts a new text or HTML message to a specified channel in a Microsoft Teams team.                         |
| `MICROSOFT_TEAMS_TEAMS_POST_CHAT_MESSAGE`    | Sends a text or HTML message to an existing Microsoft Teams chat.                                          |
| `MICROSOFT_TEAMS_TEAMS_POST_MESSAGE_REPLY`   | Sends a reply to an existing message in a Teams channel thread.                                            |
| `MICROSOFT_TEAMS_UNARCHIVE_TEAM`             | Restores an archived Microsoft Teams team back to active status.                                           |
| `MICROSOFT_TEAMS_UPDATE_CHANNEL_MESSAGE`     | Updates the content of an existing message in a Teams channel.                                             |
| `MICROSOFT_TEAMS_UPDATE_CHAT_MESSAGE`        | Updates the content of a specific message in a Teams chat.                                                 |
| `MICROSOFT_TEAMS_UPDATE_TEAM`                | Modifies team settings including member permissions, messaging policies, and fun settings.                 |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Microsoft Teams**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated meeting scheduler:** An agent collects availability from stakeholders and uses `MICROSOFT_TEAMS_CREATE_MEETING` to schedule a Teams meeting, then sends a confirmation via `MICROSOFT_TEAMS_TEAMS_POST_CHAT_MESSAGE` to each participant.

**Onboarding team provisioning:** When a new team is created for a project, an agent uses `MICROSOFT_TEAMS_CREATE_TEAM` and `MICROSOFT_TEAMS_TEAMS_CREATE_CHANNEL` to set up the workspace structure, then calls `MICROSOFT_TEAMS_ADD_MEMBER_TO_TEAM` to add all relevant team members automatically.

**Incident response notifications:** An agent monitors for alerts and uses `MICROSOFT_TEAMS_TEAMS_POST_CHANNEL_MESSAGE` to broadcast incident updates to an on-call channel, then threads follow-up details using `MICROSOFT_TEAMS_TEAMS_POST_MESSAGE_REPLY` as the situation evolves.
