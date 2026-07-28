> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Instantly

Instantly is a cold email outreach platform that lets agents automate campaigns, manage leads, track deliverability, and handle inbox communications at scale.

## Setup

1. In Agent Studio, go to **Tools** → **Instantly** → **Connect**
2. Paste your API key from the Instantly dashboard
3. Save your credentials and confirm the connection is active

## Available actions

| Action                                                               | Description                                                                                        |
| -------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `INSTANTLY_CHECK_EMAIL_VERIFICATION_STATUS`                          | Checks the verification status of a submitted email address.                                       |
| `INSTANTLY_COUNT_UNREAD_EMAILS`                                      | Retrieves the total count of unread emails in your inbox.                                          |
| `INSTANTLY_CREATE_AI_ENRICHMENT`                                     | Creates an AI enrichment job to enhance leads in a campaign or list with model-generated insights. |
| `INSTANTLY_CREATE_API_KEY`                                           | Generates a new API key with specified permission scopes for programmatic access.                  |
| `INSTANTLY_CREATE_CAMPAIGN`                                          | Creates a new outreach campaign with scheduling, sequences, and sending configuration.             |
| `INSTANTLY_CREATE_INBOX_PLACEMENT_TEST`                              | Creates an inbox placement test to measure email deliverability across providers.                  |
| `INSTANTLY_CREATE_LEAD`                                              | Adds a new individual lead and optionally associates them with a campaign.                         |
| `INSTANTLY_CREATE_LEAD_LIST`                                         | Creates a new named lead list for organizing leads before importing them into campaigns.           |
| `INSTANTLY_CREATE_WEBHOOK`                                           | Registers a new webhook endpoint to receive Instantly event notifications via HTTP callbacks.      |
| `INSTANTLY_DELETE_API_KEY`                                           | Deletes a specific API key by its UUID.                                                            |
| `INSTANTLY_DELETE_CAMPAIGN`                                          | Permanently removes a campaign by its UUID.                                                        |
| `INSTANTLY_DELETE_LEAD`                                              | Deletes a specific lead by its UUID.                                                               |
| `INSTANTLY_DELETE_LEAD_LIST`                                         | Deletes a specific lead list by its UUID.                                                          |
| `INSTANTLY_DELETE_WEBHOOK`                                           | Removes a webhook subscription by its UUID.                                                        |
| `INSTANTLY_DISABLE_ACCOUNT_WARMUP`                                   | Stops the email warm-up process for one or more sending accounts.                                  |
| `INSTANTLY_ENABLE_ACCOUNT_WARMUP`                                    | Starts the email warm-up process for one or more sending accounts to improve deliverability.       |
| `INSTANTLY_GET_CAMPAIGN`                                             | Retrieves full configuration details for a campaign by its UUID.                                   |
| `INSTANTLY_GET_CAMPAIGN_ANALYTICS`                                   | Retrieves performance metrics for one or multiple campaigns with optional date filters.            |
| `INSTANTLY_GET_DAILY_CAMPAIGN_ANALYTICS`                             | Retrieves per-day analytics for campaigns within an optional date range.                           |
| `INSTANTLY_GET_EMAIL_SERVICE_PROVIDER_OPTIONS`                       | Retrieves available email service provider options for inbox placement tests.                      |
| `INSTANTLY_GET_INBOX_PLACEMENT_TEST`                                 | Retrieves results and details for a specific inbox placement test by ID.                           |
| `INSTANTLY_GET_LEAD`                                                 | Retrieves full metadata for a specific lead by its UUID.                                           |
| `INSTANTLY_GET_LEAD_LIST`                                            | Retrieves details and metadata for a specific lead list by its UUID.                               |
| `INSTANTLY_GET_VERIFICATION_STATS_FOR_LEAD_LIST`                     | Retrieves summary verification status counts for all leads in a specific lead list.                |
| `INSTANTLY_GET_WEBHOOK`                                              | Retrieves the full configuration of a specific webhook subscription by its UUID.                   |
| `INSTANTLY_GET_WEBHOOK_EVENT`                                        | Retrieves details of a specific webhook event by its UUID.                                         |
| `INSTANTLY_LIST_ACCOUNTS`                                            | Lists all email sending accounts for the authenticated user with optional filters.                 |
| `INSTANTLY_LIST_API_KEYS`                                            | Lists all API keys with optional pagination.                                                       |
| `INSTANTLY_LIST_CAMPAIGNS`                                           | Lists all campaigns with optional search, tag filters, and pagination.                             |
| `INSTANTLY_LIST_CUSTOM_TAGS`                                         | Lists custom tags with optional search and pagination.                                             |
| `INSTANTLY_LIST_DFY_EMAIL_ACCOUNT_ORDERS`                            | Lists Done-For-You email account orders with pagination.                                           |
| `INSTANTLY_LIST_EMAILS`                                              | Lists emails with optional filters for type, status, campaign, lead, and read state.               |
| `INSTANTLY_LIST_INBOX_PLACEMENT_BLACKLIST_AND_SPAM_ASSASSIN_REPORTS` | Lists blacklist and SpamAssassin reports for a specific inbox placement test.                      |
| `INSTANTLY_LIST_INBOX_PLACEMENT_TESTS`                               | Lists inbox placement tests with optional status filters and pagination.                           |
| `INSTANTLY_LIST_LEAD_LISTS`                                          | Lists all lead lists with optional search and enrichment task filters.                             |
| `INSTANTLY_LIST_LEADS`                                               | Lists leads with optional filters for campaign, list, status, and search query.                    |
| `INSTANTLY_LIST_THREADS`                                             | Lists email threads aggregated from inbox emails with optional unread filter and pagination.       |
| `INSTANTLY_LIST_WEBHOOK_EVENTS`                                      | Lists received webhook events with optional date, success, and search filters.                     |
| `INSTANTLY_LIST_WEBHOOKS`                                            | Lists configured webhook subscriptions with optional campaign and event type filters.              |
| `INSTANTLY_MARK_THREAD_AS_READ`                                      | Marks all emails in a specific thread as read.                                                     |
| `INSTANTLY_MERGE_LEADS`                                              | Merges a source lead into a destination lead, consolidating their data.                            |
| `INSTANTLY_SEARCH_CAMPAIGNS_BY_LEAD_EMAIL`                           | Searches for campaigns that contain a specific lead identified by their email address.             |
| `INSTANTLY_UPDATE_CAMPAIGN`                                          | Updates one or more configuration fields of an existing campaign.                                  |
| `INSTANTLY_UPDATE_LEAD`                                              | Updates fields such as name, company, phone, or interest status for an existing lead.              |
| `INSTANTLY_UPDATE_LEAD_INTEREST_STATUS`                              | Sets or resets the interest status of a lead by their email address.                               |
| `INSTANTLY_UPDATE_LEAD_LIST`                                         | Updates the name, owner, or enrichment settings of an existing lead list.                          |
| `INSTANTLY_VERIFY_EMAIL`                                             | Initiates an email deliverability verification and optionally sends results to a webhook.          |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Instantly**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated lead qualification and follow-up**
An agent monitors incoming replies via `INSTANTLY_LIST_EMAILS`, reads each thread, and uses `INSTANTLY_UPDATE_LEAD_INTEREST_STATUS` to tag leads as Interested or Not Interested, then triggers a follow-up sequence automatically.

**Campaign performance reporting**
An agent runs on a schedule to call `INSTANTLY_GET_CAMPAIGN_ANALYTICS` and `INSTANTLY_GET_DAILY_CAMPAIGN_ANALYTICS` across all active campaigns, compiling a daily summary of opens, replies, and bounce rates for the sales team.

**Lead list hygiene before campaign launch**
Before launching a new campaign, an agent iterates through a lead list using `INSTANTLY_VERIFY_EMAIL` and `INSTANTLY_CHECK_EMAIL_VERIFICATION_STATUS` to remove undeliverable addresses, then updates the list with `INSTANTLY_UPDATE_LEAD_LIST` and imports only verified leads.
