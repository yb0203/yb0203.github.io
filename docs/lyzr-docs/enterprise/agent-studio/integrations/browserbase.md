> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Browserbase

Browserbase is a cloud platform for running and managing headless browser sessions, enabling agents to automate web browsing with configurable fingerprinting, proxy support, persistent contexts, and full session observability.

## Setup

1. In Agent Studio, go to **Tools** → **Browserbase** → **Connect**
2. Paste your API key from the [Browserbase dashboard](https://www.browserbase.com)

## Available actions

| Action                               | Description                                                                                                           |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------- |
| `BROWSERBASE__CREATE_SESSION`        | Create a new cloud browser session with configurable settings such as region, proxy, fingerprinting, and ad blocking. |
| `BROWSERBASE__LIST_SESSIONS`         | List all browser sessions for a project, with optional filtering by status or user metadata.                          |
| `BROWSERBASE__GET_SESSION`           | Retrieve detailed metadata for a specific browser session by its ID.                                                  |
| `BROWSERBASE__UPDATE_SESSION`        | Update a browser session's status, such as requesting early release to avoid additional charges.                      |
| `BROWSERBASE__GET_SESSION_DEBUG`     | Retrieve Chrome DevTools Protocol debug URLs and page inspection interfaces for a specific session.                   |
| `BROWSERBASE__GET_SESSION_DOWNLOADS` | Get the list of files downloaded during a specific browser session.                                                   |
| `BROWSERBASE__GET_SESSION_LOGS`      | Retrieve the activity logs for a specific browser session.                                                            |
| `BROWSERBASE__GET_SESSION_RECORDING` | Get the recorded event timeline for a specific browser session.                                                       |
| `BROWSERBASE__LIST_PROJECTS`         | List all projects associated with your Browserbase account.                                                           |
| `BROWSERBASE__GET_PROJECT`           | Retrieve detailed information about a specific project by its ID.                                                     |
| `BROWSERBASE__GET_PROJECT_USAGE`     | Retrieve resource usage statistics for a specific project.                                                            |
| `BROWSERBASE__CREATE_CONTEXT`        | Create a persistent browser context (profile) that can be reused across multiple sessions.                            |
| `BROWSERBASE__GET_CONTEXT`           | Retrieve metadata for a specific browser context by its ID.                                                           |
| `BROWSERBASE__UPDATE_CONTEXT`        | Update a browser context to refresh its encryption keys and security parameters.                                      |
| `BROWSERBASE__GET_EXTENSION`         | Retrieve details about a specific browser extension by its ID.                                                        |
| `BROWSERBASE__DELETE_EXTENSION`      | Delete a specific browser extension by its ID.                                                                        |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Browserbase**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated web scraping with persistent sessions**
An agent creates a Browserbase session with stealth mode and proxy enabled, navigates target websites to extract structured data, and retrieves downloaded files at the end of the session, all without triggering bot detection.

**Monitoring and auditing browser automation workflows**
An agent lists recent sessions filtered by status, fetches logs and recordings for any errored sessions, and surfaces debugging information to help diagnose and fix automation failures.

**Reusable authenticated browsing contexts**
An agent creates a persistent browser context to store login state, then spins up multiple sessions that reuse the same context, avoiding repeated authentication flows across tasks.
