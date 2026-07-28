> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Discord

Connect Discord to let agents send messages, read channels, and interact with
your Discord community or team server.

## Setup

1. **Tools** → **Discord** → **Connect**
2. Authorize the Discord bot for your server
3. Grant access to specific channels as needed

## Available actions

| Action                        | Description                         |
| ----------------------------- | ----------------------------------- |
| `DISCORD_GET_GUILD_INFO`      | Get server (guild) details          |
| `DISCORD_LIST_GUILD_CHANNELS` | List all channels in a server       |
| `DISCORD_FETCH_MESSAGES`      | Read recent messages from a channel |
| `DISCORD_SEND_MESSAGE`        | Post a message to a channel         |
| `DISCORD_CREATE_CHANNEL`      | Create a new text or voice channel  |
| `DISCORD_DELETE_MESSAGE`      | Delete a specific message           |
| `DISCORD_ADD_ROLE_TO_USER`    | Assign a role to a server member    |

## Example use cases

**Community support bot**: Monitors a #support channel, answers questions using
KB, and escalates unanswered issues to moderators.

**Release notifier**: Posts release notes to #announcements whenever a new
deployment is completed.

**Onboarding assistant**: Sends a welcome DM to new server members with links,
resources, and next steps.
