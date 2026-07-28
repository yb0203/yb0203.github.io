> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Tools

> Connect pre-built integrations and custom tools to your agents.

Tools let your agents take actions beyond answering questions: sending emails, reading calendars, updating databases, posting to Slack, and calling any API. Tools are configured once in **Connections > Tools** and then attached to individual agents in the Agent Builder.

## What's available

* **Pre-built connectors**: 25+ ready-to-use integrations including Gmail, Slack, Google Calendar, Google Drive, Google Tasks, Notion, Outlook, ClickUp, Discord, GitHub, Twitter/X, Calendly, Spotify, YouTube, and more.
* **Custom OpenAPI tools**: Connect any REST API by uploading its OpenAPI spec.
* **Custom ACI tools**: Define tool logic for APIs with complex authentication requirements.
* **MCP servers**: Connect any Model Context Protocol server.

## Connecting a tool

1. Go to **Connections > Tools** in the sidebar.
2. Select an integration from the list.
3. Authenticate via OAuth or API key.
4. Add the tool to your agent in the Agent Builder.

When you add a tool to an agent, all of its actions are enabled by default, so the agent can use the full connector without further configuration. Deselect the actions you do not need to reduce token usage and latency.

## Auth modes

**Shared auth** means all users share the same credentials. Use this for internal tools and service accounts where individual identity does not matter.

**Per-user auth** means each end user authenticates independently. Use this for tools that act on behalf of individual users, for example sending email from a user's own Gmail account.

## Full tool reference

See [Tools and Connectors](../../agent-studio/tools/overview) in Integrations for per-tool setup guides, required OAuth scopes, and capability details.
