> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Freshdesk

Freshdesk is a customer support platform that lets your agents create, update, retrieve, and reply to helpdesk tickets directly from within Lyzr Agent Studio.

## Setup

1. In Agent Studio, go to **Tools** → **Freshdesk** → **Connect**
2. Paste your API key from the Freshdesk dashboard
3. Your Freshdesk account is now connected and ready to use

## Available actions

| Action                       | Description                                                                                                                                      |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `FRESHDESK_CREATE_TICKET`    | Creates a new support ticket in Freshdesk with the specified subject, description, and optional metadata such as priority, status, and assignee. |
| `FRESHDESK_DELETE_TICKET`    | Permanently deletes an existing ticket from Freshdesk by ticket ID.                                                                              |
| `FRESHDESK_GET_TICKETS`      | Retrieves a filtered and paginated list of tickets from Freshdesk based on criteria such as status, priority, agent, or requester email.         |
| `FRESHDESK_LIST_ALL_TICKETS` | Lists all tickets in the connected Freshdesk account without any filters applied.                                                                |
| `FRESHDESK_REPLY_TICKET`     | Posts a reply to an existing ticket, with optional CC and BCC recipients and file attachments.                                                   |
| `FRESHDESK_UPDATE_TICKET`    | Updates the fields of an existing ticket such as status, priority, assignee, tags, or custom fields.                                             |
| `FRESHDESK_VIEW_TICKET`      | Fetches the full details of a single ticket by its ID.                                                                                           |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Freshdesk**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated ticket creation from inbound requests**
When a customer submits a request through a chat interface or form, an agent can automatically call `FRESHDESK_CREATE_TICKET` to open a ticket with the correct priority and assignment, eliminating manual data entry for support staff.

**Intelligent ticket triage and status updates**
An agent can use `FRESHDESK_GET_TICKETS` to fetch open tickets, analyze their content, and then call `FRESHDESK_UPDATE_TICKET` to reassign or reprioritize them based on urgency, keeping queues organized without human intervention.

**Automated follow-up replies**
After detecting that a ticket has gone unanswered for a set period, an agent can use `FRESHDESK_REPLY_TICKET` to send a proactive follow-up to the customer, improving response times and customer satisfaction.
