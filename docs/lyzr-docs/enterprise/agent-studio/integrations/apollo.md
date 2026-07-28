> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Apollo

Apollo enables agents to perform CRM and lead generation tasks, including searching and enriching contacts and organizations, managing accounts and deals, running email sequences, and logging call activity.

## Setup

1. In Agent Studio, go to **Tools** → **Apollo** → **Connect**
2. Paste your API key from the Apollo dashboard
3. Save the connection, your agent is now authorized to interact with your Apollo account

## Available actions

| Action                                     | Description                                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| `APOLLO_ADD_CONTACTS_TO_SEQUENCE`          | Adds one or more contacts to a specified Apollo email sequence.                                   |
| `APOLLO_BULK_ORGANIZATION_ENRICHMENT`      | Enriches data for up to 10 organizations simultaneously using their company domains.              |
| `APOLLO_BULK_PEOPLE_ENRICHMENT`            | Enriches multiple person profiles simultaneously with comprehensive data from Apollo's database.  |
| `APOLLO_BULK_UPDATE_ACCOUNT_STAGE`         | Bulk updates the pipeline stage for a set of existing Apollo accounts.                            |
| `APOLLO_CREATE_ACCOUNT`                    | Creates a new account (company) record in Apollo.                                                 |
| `APOLLO_CREATE_BULK_ACCOUNTS`              | Creates up to 100 accounts in Apollo with a single API call.                                      |
| `APOLLO_CREATE_BULK_CONTACTS`              | Creates up to 100 contacts in Apollo with a single API call.                                      |
| `APOLLO_CREATE_CALL_RECORD`                | Logs a call record in Apollo from an external dialing system.                                     |
| `APOLLO_CREATE_CONTACT`                    | Creates a new contact in Apollo, linked to an account and sales stage.                            |
| `APOLLO_CREATE_CUSTOM_FIELD`               | Creates a new custom field definition for contacts, accounts, or opportunities in Apollo.         |
| `APOLLO_CREATE_DEAL`                       | Creates a new sales opportunity (deal) in Apollo linked to an account and pipeline stage.         |
| `APOLLO_CREATE_TASK`                       | Creates a task in Apollo assigned to a team member for a specific contact.                        |
| `APOLLO_GET_ACCOUNT`                       | Retrieves full details of a specific account by its Apollo ID.                                    |
| `APOLLO_GET_AUTH_STATUS`                   | Checks whether the provided Apollo API key is valid.                                              |
| `APOLLO_GET_CONTACT`                       | Retrieves detailed information about a specific contact by ID.                                    |
| `APOLLO_GET_DEAL`                          | Retrieves information about a specific deal by its Apollo ID.                                     |
| `APOLLO_GET_LABELS`                        | Retrieves all labels used for organizing contacts and accounts in Apollo.                         |
| `APOLLO_GET_OPPORTUNITY_STAGES`            | Retrieves all configured opportunity (deal) stages from the Apollo account.                       |
| `APOLLO_GET_ORGANIZATION`                  | Retrieves complete information about a specific organization by its Apollo ID.                    |
| `APOLLO_GET_ORGANIZATION_JOB_POSTINGS`     | Retrieves paginated job postings for a specified organization.                                    |
| `APOLLO_GET_TYPED_CUSTOM_FIELDS`           | Retrieves all typed custom field definitions available in the Apollo instance.                    |
| `APOLLO_LIST_ACCOUNT_STAGES`               | Retrieves all available account stages and their IDs.                                             |
| `APOLLO_LIST_CONTACT_STAGES`               | Retrieves all available contact stages and their IDs.                                             |
| `APOLLO_LIST_DEALS`                        | Retrieves a paginated list of deals from Apollo.                                                  |
| `APOLLO_LIST_EMAIL_ACCOUNTS`               | Retrieves all email accounts configured for the authenticated user.                               |
| `APOLLO_LIST_FIELDS`                       | Retrieves all field definitions in Apollo, including system, custom, and CRM-synced fields.       |
| `APOLLO_LIST_USERS`                        | Retrieves a list of all team members associated with the Apollo account.                          |
| `APOLLO_ORGANIZATION_ENRICHMENT`           | Fetches comprehensive enrichment data for a single company by domain.                             |
| `APOLLO_ORGANIZATION_SEARCH`               | Searches Apollo's database for organizations using filters like name, location, size, and domain. |
| `APOLLO_PEOPLE_ENRICHMENT`                 | Enriches a single person's profile with detailed data from Apollo's database.                     |
| `APOLLO_PEOPLE_SEARCH`                     | Searches Apollo's contact database for people using filters like title, location, and company.    |
| `APOLLO_SEARCH_ACCOUNTS`                   | Searches for accounts within your existing Apollo database using various criteria.                |
| `APOLLO_SEARCH_CALLS`                      | Searches call records in Apollo using filters like date range, direction, users, and outcomes.    |
| `APOLLO_SEARCH_CONTACTS`                   | Searches Apollo contacts using keywords, stage IDs, and sorting options.                          |
| `APOLLO_SEARCH_NEWS_ARTICLES`              | Searches for recent news articles about companies using their Apollo organization IDs.            |
| `APOLLO_SEARCH_OUTREACH_EMAILS`            | Searches for outreach emails sent through Apollo email sequences.                                 |
| `APOLLO_SEARCH_SEQUENCES`                  | Searches for email sequences (automated campaigns) in Apollo.                                     |
| `APOLLO_SEARCH_TASKS`                      | Searches for tasks in Apollo using filters like keywords, priorities, types, and date ranges.     |
| `APOLLO_UPDATE_ACCOUNT`                    | Updates specified attributes of an existing account in Apollo.                                    |
| `APOLLO_UPDATE_ACCOUNT_OWNERS`             | Bulk reassigns ownership of multiple Apollo accounts to a specified user.                         |
| `APOLLO_UPDATE_CALL_RECORD`                | Updates details of a previously logged call record in Apollo.                                     |
| `APOLLO_UPDATE_CONTACT`                    | Updates an existing contact's information such as name, email, title, or organization.            |
| `APOLLO_UPDATE_CONTACT_OWNERSHIP`          | Transfers ownership of specified contacts to a given Apollo user.                                 |
| `APOLLO_UPDATE_CONTACTS_BULK`              | Bulk updates multiple contacts in Apollo with the same or different values per contact.           |
| `APOLLO_UPDATE_CONTACT_STAGE`              | Updates the sales stage for one or more contacts in Apollo.                                       |
| `APOLLO_UPDATE_CONTACT_STATUS_IN_SEQUENCE` | Updates a contact's status within a designated Apollo email sequence.                             |
| `APOLLO_UPDATE_DEALS`                      | Updates specified fields of an existing Apollo deal.                                              |
| `APOLLO_VIEW_API_USAGE_STATS`              | Fetches Apollo API usage statistics and rate limits for the connected team.                       |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Apollo**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated lead enrichment pipeline**
When new contacts are added to your CRM, use `APOLLO_PEOPLE_ENRICHMENT` and `APOLLO_ORGANIZATION_ENRICHMENT` to automatically fill in missing details like job title, company size, and contact information before routing leads to sales reps.

**Outbound prospecting and sequence enrollment**
Use `APOLLO_PEOPLE_SEARCH` and `APOLLO_ORGANIZATION_SEARCH` to identify target accounts and decision-makers matching your ICP, then create contacts with `APOLLO_CREATE_CONTACT` and enroll them in the right outreach sequence using `APOLLO_ADD_CONTACTS_TO_SEQUENCE`.

**Sales pipeline management and reporting**
Query deals with `APOLLO_LIST_DEALS` and accounts with `APOLLO_SEARCH_ACCOUNTS`, then automatically advance stages using `APOLLO_BULK_UPDATE_ACCOUNT_STAGE` or `APOLLO_UPDATE_DEALS` based on activity signals or CRM events to keep your pipeline data accurate.
