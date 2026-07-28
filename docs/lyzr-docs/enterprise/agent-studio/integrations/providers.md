> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Tool Providers

Lyzr pre-built tools are powered by two integration providers: **Composio** and **ACI**. When you add a tool to an agent, the underlying provider handles authentication, action routing, and API calls on your behalf.

## What is Composio?

Composio is an integration platform that provides a broad library of pre-built connectors to SaaS tools. Composio-sourced tools offer the widest action coverage and are best suited for workflow automation, task orchestration, and multi-step business processes.

* **Action coverage**: Most tools expose 20 to 100+ distinct actions.
* **Authentication**: Standardized OAuth 2.0 flow for most integrations.
* **Best for**: Workflow automation, data sync, and multi-step agent tasks.

## What is ACI?

ACI (Agent Computer Interface) is Lyzr's own integration layer optimized for AI agents. ACI-sourced tools are designed for precise, API-level operations with predictable inputs and outputs, making them well-suited for agents that need reliable, targeted actions.

* **Action coverage**: Focused action sets tuned for AI agent use.
* **Authentication**: Supports OAuth 2.0, API key, and no-auth integrations.
* **Best for**: Search, data retrieval, code execution, and scheduling.

## Choosing a provider for dual-provider tools

Five tools are available through both providers. When you see two variants in the tools list, use this guide:

| Tool           | Use Composio when...                                         | Use ACI when...                                            |
| -------------- | ------------------------------------------------------------ | ---------------------------------------------------------- |
| **Gmail**      | You need full mailbox management (labels, threads, drafts)   | You only need to send emails via API                       |
| **GitHub**     | You need PR management, issue tracking, workflow automation  | You need repository metadata or targeted API calls         |
| **Notion**     | You need page/database CRUD and complex workspace operations | You need simple workspace reads or targeted content access |
| **YouTube**    | You need channel management, uploads, or playlist automation | You need video search and feed retrieval                   |
| **SharePoint** | You need document management and intranet content automation | You need site/list/library reads via Microsoft Graph       |

## Tool provider reference

| Tool                  | Provider | Auth      | Description                                         |
| --------------------- | -------- | --------- | --------------------------------------------------- |
| Apollo                | Composio | API Key   | CRM and lead generation                             |
| ArXiv                 | ACI      | No Auth   | Retrieve academic papers from ArXiv                 |
| Brave Search          | ACI      | API Key   | Web search via Brave Search API                     |
| Browserbase           | ACI      | API Key   | Run headless browsers for web automation            |
| Calendly              | Composio | OAuth 2.0 | Schedule and manage meetings                        |
| ClickUp               | Composio | OAuth 2.0 | Task and project management                         |
| Confluence            | Composio | OAuth 2.0 | Team collaboration and knowledge management         |
| Discord               | Composio | OAuth 2.0 | Messaging and voice communication                   |
| Dropbox               | Composio | OAuth 2.0 | Cloud file storage and sharing                      |
| E2B                   | ACI      | API Key   | Execute AI-generated code in secure cloud sandboxes |
| Excel                 | Composio | OAuth 2.0 | Microsoft Excel spreadsheet management              |
| Freshdesk             | Composio | API Key   | Customer support ticketing and helpdesk             |
| GitHub (Composio)     | Composio | OAuth 2.0 | Repository, PR, and issue management                |
| GitHub (ACI)          | ACI      | OAuth 2.0 | GitHub API for repository and code operations       |
| Gmail (Composio)      | Composio | OAuth 2.0 | Full Gmail mailbox management                       |
| Gmail (ACI)           | ACI      | OAuth 2.0 | Send and read emails via Gmail API                  |
| Google Calendar       | Composio | OAuth 2.0 | Time management and scheduling                      |
| Google Docs           | Composio | OAuth 2.0 | Cloud-based document creation and editing           |
| Google Drive          | Composio | OAuth 2.0 | File storage and management                         |
| Google Maps           | ACI      | API Key   | Navigation, geocoding, and place search             |
| Google Sheets         | ACI      | OAuth 2.0 | Spreadsheet read/write via Google Sheets API        |
| Google Tasks          | Composio | OAuth 2.0 | Task list management                                |
| Hacker News           | ACI      | No Auth   | Fetch stories and posts from Hacker News            |
| HubSpot               | Composio | OAuth 2.0 | CRM, marketing, and sales platform                  |
| Instantly             | Composio | API Key   | Cold email outreach automation                      |
| Jira                  | Composio | API Key   | Issue tracking and agile project management         |
| Linear                | Composio | OAuth 2.0 | Issue tracking for engineering teams                |
| LinkedIn              | Composio | OAuth 2.0 | Professional networking and content publishing      |
| Lyzr Scheduler        | ACI      | API Key   | Schedule and manage Lyzr agent executions           |
| Microsoft Outlook     | ACI      | OAuth 2.0 | Email and calendar management via Microsoft Graph   |
| Microsoft Teams       | Composio | OAuth 2.0 | Team chat, meetings, and file collaboration         |
| Notion (ACI)          | ACI      | OAuth 2.0 | Notion workspace management via ACI                 |
| Notion (Composio)     | Composio | OAuth 2.0 | Notion pages, databases, and workspace automation   |
| Perplexity AI         | Composio | API Key   | AI-powered search and research                      |
| Salesforce            | Composio | OAuth 2.0 | CRM, sales, and service cloud                       |
| SharePoint (ACI)      | ACI      | OAuth 2.0 | SharePoint sites and libraries via Microsoft Graph  |
| SharePoint (Composio) | Composio | OAuth 2.0 | Document management and intranet automation         |
| Slack                 | Composio | OAuth 2.0 | Channel-based team messaging                        |
| Snowflake             | ACI      | OAuth 2.0 | SQL query execution on Snowflake databases          |
| Telegram              | Composio | API Key   | Cloud-based messaging and bot interactions          |
| Trello                | Composio | OAuth 2.0 | Kanban-style project management                     |
| Twitter               | Composio | OAuth 2.0 | Twitter social media management                     |
| YouTube (Composio)    | Composio | OAuth 2.0 | YouTube channel and video management                |
| YouTube (ACI)         | ACI      | OAuth 2.0 | YouTube video search and feed retrieval             |
