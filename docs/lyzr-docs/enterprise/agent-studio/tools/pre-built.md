> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Pre-built Tools (Composio Integration)

> 30+ ready-to-use tool integrations powered by Composio.

Lyzr provides 30+ pre-built tool integrations powered by Composio. These cover the most common SaaS tools for communication, productivity, project management, CRM, and more.

## Available tools

### Communication

| Tool            | Key actions                                            |
| --------------- | ------------------------------------------------------ |
| Gmail           | Read emails, send emails, create drafts, manage labels |
| Slack           | Send messages, read channels, create channels, search  |
| Microsoft Teams | Send messages, read channels, manage meetings          |
| Discord         | Send messages, read channels, manage server            |
| Telegram        | Send messages, read chats, manage bots                 |

### Calendar & Tasks

| Tool            | Key actions                                         |
| --------------- | --------------------------------------------------- |
| Google Calendar | Read events, create events, update/delete events    |
| Calendly        | List event types, get availability, manage bookings |
| Google Tasks    | Create tasks, list tasks, update status             |

### Files & Docs

| Tool         | Key actions                                        |
| ------------ | -------------------------------------------------- |
| Google Drive | List files, read files, create files, search       |
| Google Docs  | Read documents, create documents, update content   |
| Notion       | Read pages, create pages, update databases, search |
| Dropbox      | Upload files, list files, share links              |
| Confluence   | Read pages, create pages, search spaces            |
| Excel        | Read spreadsheets, write data, manage sheets       |

### Project Management

| Tool    | Key actions                                         |
| ------- | --------------------------------------------------- |
| ClickUp | Create/update tasks, list tasks, manage spaces      |
| Asana   | Create tasks, manage projects, track progress       |
| Jira    | Create issues, update tickets, manage sprints       |
| Trello  | Create cards, manage boards, update lists           |
| Linear  | Create issues, manage cycles, update project status |

### CRM & Sales

| Tool       | Key actions                                         |
| ---------- | --------------------------------------------------- |
| HubSpot    | Manage contacts, deals, companies, and pipelines    |
| Salesforce | Read/update records, manage leads and opportunities |
| Apollo     | Search contacts, manage sequences, enrich data      |
| LinkedIn   | Search profiles, manage connections, send messages  |
| Instantly  | Manage email campaigns, sequences, and leads        |

### Developer & Research

| Tool          | Key actions                                        |
| ------------- | -------------------------------------------------- |
| GitHub        | Read repos, create issues, manage PRs, search code |
| Perplexity AI | Run web searches, get cited answers                |

### Media & Social

| Tool        | Key actions                                        |
| ----------- | -------------------------------------------------- |
| YouTube     | Search videos, get video details, manage playlists |
| Twitter / X | Post tweets, read timeline, search tweets          |

### Customer Support

| Tool      | Key actions                                       |
| --------- | ------------------------------------------------- |
| Freshdesk | Create tickets, update status, manage contacts    |
| Zendesk   | Create tickets, manage agents, read conversations |

## Connecting a tool

1. In the **Tools** sidebar, find the tool and click **Connect**.
2. Complete the OAuth flow. You will be redirected to the tool's authorization page.
3. Grant only the permissions your agent needs.
4. The tool will appear as **Connected** and become available in all agent builders.

Re-authentication is automatic; Lyzr handles token refresh.

## Tool actions

When you add a pre-built tool to an agent, every action the tool supports is enabled by default. You do not have to select individual actions before the agent can use the tool, which keeps setup close to plug-and-play: connect the tool and start talking to the agent.

If you know exactly which capabilities a tool requires, you can select or deselect specific actions to control the agent's entitlement, latency, and token usage.
