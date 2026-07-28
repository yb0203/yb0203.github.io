> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Salesforce

Salesforce is a leading CRM platform that integrates sales, service, marketing, and analytics, enabling agents to manage accounts, contacts, leads, opportunities, campaigns, and activities programmatically.

## Setup

1. In Agent Studio, go to **Tools** → **Salesforce** → **Connect**
2. Sign in with your Salesforce account and authorize access
3. Review the requested permissions and click **Allow**

## Available actions

| Action                                       | Description                                                                                                                |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `SALESFORCE_ADD_CONTACT_TO_CAMPAIGN`         | Adds a contact to a campaign by creating a CampaignMember record to track campaign engagement.                             |
| `SALESFORCE_ADD_LEAD_TO_CAMPAIGN`            | Adds a lead to a campaign by creating a CampaignMember record to track campaign engagement.                                |
| `SALESFORCE_ADD_OPPORTUNITY_LINE_ITEM`       | Adds a product (line item) to an opportunity using a pricebook entry associated with the opportunity.                      |
| `SALESFORCE_APPLY_LEAD_ASSIGNMENT_RULES`     | Applies configured lead assignment rules to a specific lead, automatically routing it to the appropriate owner.            |
| `SALESFORCE_ASSOCIATE_CONTACT_TO_ACCOUNT`    | Associates a contact with an account by updating the contact's AccountId field.                                            |
| `SALESFORCE_CLONE_OPPORTUNITY_WITH_PRODUCTS` | Clones an opportunity and optionally its line items, creating a new opportunity with the same field values.                |
| `SALESFORCE_CLONE_RECORD`                    | Creates a copy of an existing Salesforce record, with the option to apply field updates to the clone.                      |
| `SALESFORCE_COMPLETE_TASK`                   | Marks a task as completed with optional completion notes.                                                                  |
| `SALESFORCE_CREATE_ACCOUNT`                  | Creates a new account in Salesforce with the specified information.                                                        |
| `SALESFORCE_CREATE_CAMPAIGN`                 | Creates a new campaign in Salesforce with the specified information.                                                       |
| `SALESFORCE_CREATE_CONTACT`                  | Creates a new contact in Salesforce with the specified information.                                                        |
| `SALESFORCE_CREATE_LEAD`                     | Creates a new lead in Salesforce with the specified information.                                                           |
| `SALESFORCE_CREATE_NOTE`                     | Creates a new note attached to a Salesforce record with the specified title and content.                                   |
| `SALESFORCE_CREATE_OPPORTUNITY`              | Creates a new opportunity in Salesforce with the specified information.                                                    |
| `SALESFORCE_CREATE_TASK`                     | Creates a new task in Salesforce to track activities, to-dos, and follow-ups related to contacts, leads, or other records. |
| `SALESFORCE_DELETE_ACCOUNT`                  | Permanently deletes an account from Salesforce.                                                                            |
| `SALESFORCE_DELETE_CAMPAIGN`                 | Permanently deletes a campaign from Salesforce.                                                                            |
| `SALESFORCE_DELETE_CONTACT`                  | Permanently deletes a contact from Salesforce.                                                                             |
| `SALESFORCE_DELETE_LEAD`                     | Permanently deletes a lead from Salesforce.                                                                                |
| `SALESFORCE_DELETE_NOTE`                     | Permanently deletes a note from Salesforce.                                                                                |
| `SALESFORCE_DELETE_OPPORTUNITY`              | Permanently deletes an opportunity from Salesforce.                                                                        |
| `SALESFORCE_GET_ACCOUNT`                     | Retrieves a specific account by ID from Salesforce, returning all available fields.                                        |
| `SALESFORCE_GET_CAMPAIGN`                    | Retrieves a specific campaign by ID from Salesforce, returning all available fields.                                       |
| `SALESFORCE_GET_CONTACT`                     | Retrieves a specific contact by ID from Salesforce, returning all available fields.                                        |
| `SALESFORCE_GET_DASHBOARD`                   | Gets detailed metadata for a specific dashboard including its components, layout, and filters.                             |
| `SALESFORCE_GET_LEAD`                        | Retrieves a specific lead by ID from Salesforce, returning all available fields.                                           |
| `SALESFORCE_GET_NOTE`                        | Retrieves a specific note by ID from Salesforce, returning all available fields.                                           |
| `SALESFORCE_GET_OPPORTUNITY`                 | Retrieves a specific opportunity by ID from Salesforce, returning all available fields.                                    |
| `SALESFORCE_GET_REPORT`                      | Gets detailed metadata for a specific report including its structure, columns, filters, and groupings.                     |
| `SALESFORCE_GET_REPORT_INSTANCE`             | Gets the results of a previously run report instance, including completion status.                                         |
| `SALESFORCE_GET_USER_INFO`                   | Retrieves information about the current user or a specific user in Salesforce.                                             |
| `SALESFORCE_LIST_ACCOUNTS`                   | Lists accounts from Salesforce using a SOQL query with flexible filtering, sorting, and field selection.                   |
| `SALESFORCE_LIST_CAMPAIGNS`                  | Lists campaigns from Salesforce using a SOQL query with flexible filtering, sorting, and field selection.                  |
| `SALESFORCE_LIST_CONTACTS`                   | Lists contacts from Salesforce using a SOQL query with flexible filtering, sorting, and field selection.                   |
| `SALESFORCE_LIST_DASHBOARDS`                 | Lists all dashboards available in Salesforce with basic metadata including name, ID, and URLs.                             |
| `SALESFORCE_LIST_EMAIL_TEMPLATES`            | Lists available email templates in Salesforce with filtering and search capabilities.                                      |
| `SALESFORCE_LIST_LEADS`                      | Lists leads from Salesforce using a SOQL query with flexible filtering, sorting, and field selection.                      |
| `SALESFORCE_LIST_NOTES`                      | Lists notes from Salesforce using a SOQL query with flexible filtering, sorting, and field selection.                      |
| `SALESFORCE_LIST_OPPORTUNITIES`              | Lists opportunities from Salesforce using a SOQL query with flexible filtering, sorting, and field selection.              |
| `SALESFORCE_LIST_REPORTS`                    | Lists all reports available in Salesforce with basic metadata including name, ID, and URLs.                                |
| `SALESFORCE_LOG_CALL`                        | Logs a completed phone call as a task in Salesforce with call-specific details like duration, type, and disposition.       |
| `SALESFORCE_LOG_EMAIL_ACTIVITY`              | Creates an EmailMessage record to log email activity in Salesforce, associating it with related records.                   |
| `SALESFORCE_MASS_TRANSFER_OWNERSHIP`         | Transfers ownership of multiple records to a new owner in a single operation using the Salesforce Composite API.           |
| `SALESFORCE_REMOVE_FROM_CAMPAIGN`            | Removes a lead or contact from a campaign by deleting the CampaignMember record.                                           |
| `SALESFORCE_RUN_REPORT`                      | Runs a report and returns the results by creating a report instance that can be checked for completion.                    |
| `SALESFORCE_RUN_SOQL_QUERY`                  | Executes a SOQL query against Salesforce data, returning matching records with pagination support.                         |
| `SALESFORCE_SEARCH_ACCOUNTS`                 | Searches for Salesforce accounts using multiple criteria like name, industry, type, location, or contact information.      |
| `SALESFORCE_SEARCH_CAMPAIGNS`                | Searches for Salesforce campaigns using multiple criteria like name, type, status, date range, or active status.           |
| `SALESFORCE_SEARCH_CONTACTS`                 | Searches for Salesforce contacts using multiple criteria like name, email, phone, account, or title.                       |
| `SALESFORCE_SEARCH_LEADS`                    | Searches for Salesforce leads using multiple criteria like name, email, company, title, status, or lead source.            |
| `SALESFORCE_SEARCH_NOTES`                    | Searches for Salesforce notes using multiple criteria like title, body content, parent record, owner, or creation date.    |
| `SALESFORCE_SEARCH_OPPORTUNITIES`            | Searches for Salesforce opportunities using multiple criteria like name, account, stage, amount, or close date.            |
| `SALESFORCE_SEARCH_TASKS`                    | Searches for Salesforce tasks using multiple criteria like subject, status, priority, assigned user, or related records.   |
| `SALESFORCE_SEND_EMAIL`                      | Sends an email through Salesforce with options for recipients, attachments, and activity logging.                          |
| `SALESFORCE_SEND_EMAIL_FROM_TEMPLATE`        | Sends an email using a predefined Salesforce email template with merge field support.                                      |
| `SALESFORCE_SEND_MASS_EMAIL`                 | Sends bulk emails to multiple recipients using a template or custom content, processed in batches for performance.         |
| `SALESFORCE_UPDATE_ACCOUNT`                  | Updates an existing account in Salesforce with the specified changes, leaving unspecified fields untouched.                |
| `SALESFORCE_UPDATE_CAMPAIGN`                 | Updates an existing campaign in Salesforce with the specified changes, leaving unspecified fields untouched.               |
| `SALESFORCE_UPDATE_CONTACT`                  | Updates an existing contact in Salesforce with the specified changes, leaving unspecified fields untouched.                |
| `SALESFORCE_UPDATE_LEAD`                     | Updates an existing lead in Salesforce with the specified changes, leaving unspecified fields untouched.                   |
| `SALESFORCE_UPDATE_NOTE`                     | Updates an existing note in Salesforce with the specified changes, leaving unspecified fields untouched.                   |
| `SALESFORCE_UPDATE_OPPORTUNITY`              | Updates an existing opportunity in Salesforce with the specified changes, leaving unspecified fields untouched.            |
| `SALESFORCE_UPDATE_TASK`                     | Updates an existing task in Salesforce with new information, leaving unspecified fields untouched.                         |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Salesforce**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated lead qualification and routing**
When a new lead is created via a web form or marketing campaign, an agent can search for existing contacts with matching details, update the lead with enriched data, apply assignment rules to route it to the right sales rep, and add it to the relevant campaign, all without manual intervention.

**Opportunity pipeline management**
An agent can monitor open opportunities, update deal stages based on activity or external triggers, log calls and emails as activities, add product line items when quotes are confirmed, and alert the team when high-value deals approach their close dates.

**Mass customer outreach with personalized emails**
Using stored email templates and contact lists, an agent can search for contacts meeting specific criteria (e.g., churned customers, upsell candidates), send personalized emails via `SALESFORCE_SEND_EMAIL_FROM_TEMPLATE`, and log each interaction as an email activity against the relevant account or contact record.
