> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# MCP Servers

Model Context Protocol (MCP) is an open standard for connecting AI agents to
external tools and data sources. Lyzr supports MCP, letting you connect any
MCP server to your agents.

## Connection: Phase 1: Register the MCP Server

1. **Tools** → **Add MCP Server**
2. Enter the MCP Server URL
3. Select authentication method (API Key or OAuth)
4. Click **Connect**

The server is now registered and available across your organization.
Anyone in your workspace can add it to their agents.

### Authentication options

**API Key**
Enter the API key for the MCP server. Lyzr stores it encrypted and passes
it in the Authorization header automatically.

**OAuth**
Lyzr initiates the OAuth flow. After authorization, tokens are stored and
refreshed automatically.

## Connection: Phase 2: Link to an Agent

Registering an MCP server doesn't automatically give all agents access,
you explicitly select it per agent.

1. Open the agent → **Tools** → enable → select the MCP server
2. Review the actions exposed by the server
3. Select only the actions this agent should use
4. Save

**Principle of least privilege:** Only expose the specific MCP actions your
agent needs. An agent that reads project status doesn't need write access to
create or delete resources.

## Testing

After linking, use the test panel in the agent builder to verify the MCP
tools are callable. The trace will show MCP tool calls under **Tool Calls**
in the trace detail.

## Lyzr as an MCP server

Lyzr Cognis (memory) is available as an MCP server, letting external tools
like Cursor, Claude Desktop, Zed, and Opencode use Cognis for memory:
