> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Zendesk

Zendesk provides customer support software with ticketing, live chat, and knowledge base features, enabling agents to manage helpdesk operations, engage customers, and resolve support requests efficiently.

## Setup

1. In Agent Studio, go to **Tools** → **Zendesk** → **Connect**
2. Sign in with your Zendesk account and authorize access
3. Review the requested permissions and click **Allow**

## Available actions

| Action                                  | Description                                                                                                                        |
| --------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `ZENDESK_COUNT_ZENDESK_ORGANIZATIONS`   | Returns the total number of organizations in a Zendesk account as a single numeric value.                                          |
| `ZENDESK_CREATE_ZENDESK_ORGANIZATION`   | Creates a new organization in Zendesk with a unique name and optional external ID.                                                 |
| `ZENDESK_CREATE_ZENDESK_TICKET`         | Creates a support ticket in Zendesk with full field support including subject, description, priority, assignee, and custom fields. |
| `ZENDESK_CREATE_ZENDESK_USER`           | Creates a new user in Zendesk with a specified name, email, role, and optional profile details.                                    |
| `ZENDESK_DELETE_ZENDESK_ORGANIZATION`   | Permanently deletes a Zendesk organization by its ID; this action is irreversible.                                                 |
| `ZENDESK_DELETE_ZENDESK_TICKET`         | Permanently deletes a Zendesk ticket and its entire conversation history by ticket ID.                                             |
| `ZENDESK_DELETE_ZENDESK_USER`           | Permanently removes a user account from Zendesk by user ID.                                                                        |
| `ZENDESK_DESTROY_MANY_ORGANIZATIONS`    | Bulk-deletes up to 100 Zendesk organizations in a single asynchronous operation using IDs or external IDs.                         |
| `ZENDESK_GET_ABOUT_ME`                  | Returns profile and permission details for the currently authenticated Zendesk user.                                               |
| `ZENDESK_GET_ALL_ZENDESK_ORGANIZATIONS` | Retrieves the full list of organizations in a Zendesk account, requiring client-side filtering for name or domain.                 |
| `ZENDESK_GET_USER`                      | Fetches complete profile details for a single Zendesk user by their numeric ID.                                                    |
| `ZENDESK_GET_ZENDESK_ORGANIZATION`      | Retrieves metadata for a specific Zendesk organization by its numeric ID.                                                          |
| `ZENDESK_GET_ZENDESK_TICKET_BY_ID`      | Fetches full details of a Zendesk ticket by ID, including comments and attachments.                                                |
| `ZENDESK_LIST_ZENDESK_TICKETS`          | Lists Zendesk tickets with support for pagination, sorting, and filtering by external ID.                                          |
| `ZENDESK_LIST_ZENDESK_USERS`            | Lists Zendesk users with pagination and optional filtering by role or external ID.                                                 |
| `ZENDESK_REPLY_ZENDESK_TICKET`          | Adds a public reply or internal note to an existing Zendesk ticket by ticket ID.                                                   |
| `ZENDESK_SEARCH_ZENDESK`                | Searches for tickets, users, organizations, and groups in Zendesk using Zendesk query syntax.                                      |
| `ZENDESK_SEARCH_ZENDESK_USERS`          | Searches Zendesk users by email or name, returning matching user records across all roles.                                         |
| `ZENDESK_UPDATE_ZENDESK_ORGANIZATION`   | Updates the fields of an existing Zendesk organization, such as name, notes, or domain names.                                      |
| `ZENDESK_UPDATE_ZENDESK_TICKET`         | Updates an existing Zendesk ticket's fields including status, priority, assignee, and custom fields, with optional comment.        |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Zendesk**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated ticket triage and routing**
An agent monitors incoming support tickets, reads their subject and description, and automatically sets priority and assigns them to the appropriate group based on keywords or category, reducing manual triage time.

**Customer onboarding support automation**
When a new customer signs up, an agent creates a Zendesk user, links them to the correct organization, and opens a welcome ticket so the support team can proactively reach out and confirm a smooth onboarding experience.

**Escalation and status update notifications**
An agent periodically lists open tickets sorted by update time, identifies those stale beyond a threshold, updates their status or priority, and adds an internal note to alert the assigned agent, ensuring no request goes unresolved.
