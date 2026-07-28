> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Tool Integrations

> Connect pre-built and custom tools to your Lyzr agents.

Tools let your agents take actions, beyond answering questions. A tool call happens
when the LLM decides that answering the user's request requires calling an external
system (sending an email, querying a calendar, creating a task, reading a file).

## Tool types

| Type                 | Description                                                 | When to use                              |
| -------------------- | ----------------------------------------------------------- | ---------------------------------------- |
| Pre-built (Composio) | 25+ ready-to-use OAuth integrations                         | Fastest path; covers most SaaS tools     |
| Custom Tools         | Your own API defined via OpenAPI spec or ACI Python snippet | Private APIs, internal systems           |
| MCP Servers          | Any Model Context Protocol server                           | Broad tool ecosystems, community servers |

## Adding a tool to an agent

1. Go to **Tools** in the sidebar
2. Find the tool and click **Connect** (OAuth flow or API key)
3. Open the agent → enable **Tools** in Core Features
4. Select the connected tool(s) from the list
5. Choose specific actions to expose to the agent

Select only the actions your agent needs. Fewer actions = less decision overhead for
the LLM. An email agent doesn't need calendar write access.

## Auth modes

**Shared**: All users share the same credentials (service account). Best for internal
tools where all users should act as the same identity.

**Per-user**: Each end user authenticates individually. The agent uses that user's own
credentials when calling the tool. Best for personal productivity tools (email, calendar).

Per-user auth works even when end users are not Lyzr Studio users, the OAuth flow
happens at inference time.

## Security

OAuth tokens and API keys are encrypted at rest and scoped to your organization.
Tool credentials are never included in agent responses or traces.

Lyzr's open-source tooling layer is available via [ACI.dev](https://aci.dev).
On-premise deployments can self-host the tooling layer to keep all OAuth tokens
within their own infrastructure.
