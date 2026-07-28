> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# HubSpot

HubSpot is an inbound marketing, sales, and customer service platform that lets agents manage contacts, deals, campaigns, tickets, and CRM data programmatically.

## Setup

1. In Agent Studio, go to **Tools** → **HubSpot** → **Connect**
2. Sign in with your HubSpot account and authorize access
3. Review the requested permissions and click **Allow**

## Available actions

| Action                                                    | Description                                                                                                           |
| --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| `HUBSPOT_ADD_ASSET_ASSOCIATION`                           | Associates an existing asset (form, object list, or external web URL) with a specified HubSpot marketing campaign.    |
| `HUBSPOT_ADD_TOKEN_TO_EVENT_TEMPLATE`                     | Adds a new custom data token to an existing event template for a specified HubSpot application.                       |
| `HUBSPOT_ARCHIVE`                                         | Archives the HubSpot email specified by emailId by moving it to the recycling bin.                                    |
| `HUBSPOT_ARCHIVE_A_BATCH_OF_EMAILS_BY_ID`                 | Archives multiple HubSpot CRM emails by ID.                                                                           |
| `HUBSPOT_ARCHIVE_A_BATCH_OF_QUOTES_BY_ID`                 | Archives a batch of existing, non-archived quotes by their IDs.                                                       |
| `HUBSPOT_ARCHIVE_BATCH_OF_COMPANIES_BY_ID`                | Archives a batch of companies by their unique IDs.                                                                    |
| `HUBSPOT_ARCHIVE_BATCH_OF_CONTACTS_BY_ID`                 | Archives a batch of existing contacts by their HubSpot CRM IDs, rendering them inactive.                              |
| `HUBSPOT_ARCHIVE_BATCH_OF_DEALS_BY_ID`                    | Archives a batch of existing deals by their unique HubSpot IDs, removing them from active views and reports.          |
| `HUBSPOT_ARCHIVE_BATCH_OF_FEEDBACK_SUBMISSIONS_BY_ID`     | Asynchronously archives a batch of HubSpot feedback submissions using their unique IDs.                               |
| `HUBSPOT_ARCHIVE_BATCH_OF_LINE_ITEMS_BY_ID`               | Archives a batch of existing line items by their unique IDs in HubSpot CRM.                                           |
| `HUBSPOT_ARCHIVE_BATCH_OF_OBJECTS_BY_ID`                  | Archives a batch of existing, non-archived CRM objects of a specified type by their IDs.                              |
| `HUBSPOT_ARCHIVE_BATCH_OF_PROPERTIES`                     | Archives a batch of properties by their internal names for a specified HubSpot CRM object type.                       |
| `HUBSPOT_ARCHIVE_BATCH_OF_TICKETS_BY_ID`                  | Archives a batch of existing, unarchived HubSpot CRM tickets by their unique IDs.                                     |
| `HUBSPOT_ARCHIVE_BATCH_PRODUCTS_BY_ID`                    | Archives a batch of existing, unarchived HubSpot products by their IDs.                                               |
| `HUBSPOT_ARCHIVE_COMPANY`                                 | Archives an existing company in HubSpot CRM by its companyId, moving it to a recycling bin.                           |
| `HUBSPOT_ARCHIVE_CONTACT_BY_ID`                           | Archives a contact in HubSpot CRM by its ID, moving it to the recycling bin.                                          |
| `HUBSPOT_ARCHIVE_CRM_OBJECT_BY_ID`                        | Archives a specific HubSpot CRM object by its type and ID, moving it to the recycling bin.                            |
| `HUBSPOT_ARCHIVE_EMAILS`                                  | Archives multiple HubSpot emails by their IDs.                                                                        |
| `HUBSPOT_ARCHIVE_FEEDBACK_SUBMISSION`                     | Archives an existing, non-archived feedback submission in HubSpot CRM by its ID.                                      |
| `HUBSPOT_ARCHIVE_LINE_ITEM_BY_ID`                         | Archives a specific HubSpot line item by its ID, moving it to a recoverable state.                                    |
| `HUBSPOT_ARCHIVE_PRODUCT`                                 | Archives a HubSpot product by its ID.                                                                                 |
| `HUBSPOT_ARCHIVE_PRODUCT_BY_PRODUCT_ID`                   | Archives an existing product in HubSpot CRM by its productId, moving it to an archived state.                         |
| `HUBSPOT_ARCHIVE_PRODUCTS`                                | Archives multiple HubSpot products by their IDs.                                                                      |
| `HUBSPOT_ARCHIVE_PROPERTY_BY_OBJECT_TYPE_AND_NAME`        | Archives a specified CRM property by its object type and name, moving it to the recycling bin.                        |
| `HUBSPOT_ARCHIVE_PROPERTY_GROUP`                          | Archives a HubSpot property group, making it inactive and hidden from CRM views.                                      |
| `HUBSPOT_ARCHIVE_QUOTE_OBJECT_BY_ID`                      | Archives a HubSpot quote object by ID to the recycling bin.                                                           |
| `HUBSPOT_ARCHIVE_TICKET`                                  | Archives a HubSpot ticket by its ID.                                                                                  |
| `HUBSPOT_ARCHIVE_TICKET_BY_ID`                            | Archives an existing HubSpot ticket by its ID, moving it to the recycling bin.                                        |
| `HUBSPOT_ARCHIVE_TICKETS`                                 | Archives multiple HubSpot tickets by their IDs.                                                                       |
| `HUBSPOT_AUDIT_PIPELINE_CHANGES_BY_ID`                    | Retrieves a reverse chronological audit log of all changes for a specific HubSpot CRM pipeline.                       |
| `HUBSPOT_BATCH_READ_COMPANIES_BY_PROPERTIES`              | Batch-retrieves HubSpot company records by their IDs with support for custom properties and historical data.          |
| `HUBSPOT_BATCH_READ_EMAILS_ACTION`                        | Retrieves a batch of HubSpot email objects by their internal IDs or unique property values.                           |
| `HUBSPOT_BATCH_UPDATE_QUOTES`                             | Updates multiple existing HubSpot quotes in a batch identified by object ID or custom unique property.                |
| `HUBSPOT_CAMPAIGN_SEARCH`                                 | Searches for and retrieves a paginated list of HubSpot marketing campaigns.                                           |
| `HUBSPOT_CANCEL_ACTIVE_IMPORT`                            | Cancels an active HubSpot data import job using its importId.                                                         |
| `HUBSPOT_CLONE_MARKETING_EMAIL`                           | Duplicates an existing HubSpot marketing email into a new draft with an optional custom name.                         |
| `HUBSPOT_CONFIGURE_CALLING_EXTENSION_SETTINGS`            | Configures or updates settings for a HubSpot app's calling extension, including name, UI URL, and iframe dimensions.  |
| `HUBSPOT_CREATE`                                          | Creates a new email engagement record in HubSpot with portal-specific properties and associations.                    |
| `HUBSPOT_CREATE_A_BATCH_OF_CAMPAIGNS`                     | Creates up to 50 marketing campaigns in a single batch operation.                                                     |
| `HUBSPOT_CREATE_A_BATCH_OF_COMPANIES`                     | Creates multiple company records in HubSpot CRM in a single batch of up to 100 companies.                             |
| `HUBSPOT_CREATE_A_BATCH_OF_EMAILS`                        | Creates multiple email objects for record-keeping within HubSpot CRM in a single batch.                               |
| `HUBSPOT_CREATE_AB_TEST_VARIATION`                        | Creates a new A/B test variation for an existing HubSpot email using its contentId.                                   |
| `HUBSPOT_CREATE_A_CAMPAIGN`                               | Creates a new marketing campaign in HubSpot with specified properties, returning the created campaign data.           |
| `HUBSPOT_CREATE_AND_RETURN_A_NEW_PROPERTY_GROUP`          | Creates a new, empty property group for a specified CRM object type in HubSpot.                                       |
| `HUBSPOT_CREATE_A_NEW_MARKETING_EMAIL`                    | Creates a new marketing email in HubSpot with comprehensive configuration of content, recipients, and sender details. |
| `HUBSPOT_CREATE_ASSOCIATION_FOR_OBJECT_TYPE`              | Creates the definition (schema) of a new association in HubSpot specifying how two CRM object types relate.           |
| `HUBSPOT_CREATE_BATCH_OF_CONTACTS`                        | Creates up to 100 new contact records in HubSpot CRM with optional associations to existing CRM objects.              |
| `HUBSPOT_CREATE_BATCH_OF_DEALS`                           | Creates multiple deals in HubSpot CRM with specified stages, pipelines, and associations.                             |
| `HUBSPOT_CREATE_BATCH_OF_FEEDBACK_SUBMISSIONS`            | Creates a batch of feedback submissions in HubSpot, ideal for bulk imports.                                           |
| `HUBSPOT_CREATE_BATCH_OF_LINE_ITEMS`                      | Creates multiple HubSpot line items in a batch with specified properties and CRM associations.                        |
| `HUBSPOT_CREATE_BATCH_OF_OBJECTS`                         | Creates multiple CRM objects of a specified type in a single batch operation.                                         |
| `HUBSPOT_CREATE_BATCH_OF_PROPERTIES`                      | Efficiently creates multiple CRM properties in a single batch for a specified HubSpot object type.                    |
| `HUBSPOT_CREATE_BATCH_OF_QUOTES`                          | Creates multiple HubSpot CRM quotes in a batch, ideal for bulk operations.                                            |
| `HUBSPOT_CREATE_BATCH_OF_TICKET`                          | Creates multiple HubSpot tickets in a batch, each with its own properties and associations.                           |
| `HUBSPOT_CREATE_CAMPAIGN`                                 | Creates a new HubSpot campaign.                                                                                       |
| `HUBSPOT_CREATE_CAMPAIGNS`                                | Creates multiple HubSpot campaigns in a single batch operation.                                                       |
| `HUBSPOT_CREATE_COMPANY`                                  | Creates a new HubSpot company.                                                                                        |
| `HUBSPOT_CREATE_COMPANY_OBJECT`                           | Creates a new company object in HubSpot CRM with specified properties and associations.                               |
| `HUBSPOT_CREATE_CONTACT`                                  | Creates a new HubSpot contact.                                                                                        |
| `HUBSPOT_CREATE_CONTACT_OBJECT_WITH_PROPERTIES`           | Creates a new HubSpot contact with specified properties and optional associations.                                    |
| `HUBSPOT_CREATE_CRM_OBJECT_WITH_PROPERTIES`               | Creates a new HubSpot CRM object with specified properties and associations to existing objects.                      |
| `HUBSPOT_CREATE_DEAL`                                     | Creates a new HubSpot deal.                                                                                           |
| `HUBSPOT_CREATE_EMAIL`                                    | Creates a new HubSpot email.                                                                                          |
| `HUBSPOT_CREATE_EMAILS`                                   | Creates multiple HubSpot emails in a single batch operation.                                                          |
| `HUBSPOT_CREATE_EVENT_TEMPLATE_FOR_APP`                   | Creates a new event template for a HubSpot app, defining the structure and appearance of custom timeline events.      |
| `HUBSPOT_CREATE_FEEDBACK_SUBMISSION`                      | Creates a new HubSpot feedback submission to record customer feedback such as survey responses.                       |
| `HUBSPOT_CREATE_LINE_ITEM`                                | Creates a new HubSpot line item.                                                                                      |
| `HUBSPOT_CREATE_LINE_ITEM_OBJECT`                         | Creates a new HubSpot line item with all required properties and optional CRM associations.                           |
| `HUBSPOT_CREATE_LINE_ITEMS`                               | Creates multiple HubSpot line items in a single batch operation.                                                      |
| `HUBSPOT_CREATE_MULTIPLE_TIMELINE_EVENTS_BATCH`           | Creates multiple immutable timeline events in a batch, ideal for bulk data imports or real-time synchronizations.     |
| `HUBSPOT_CREATE_NEW_DEAL_OBJECT`                          | Creates a new deal in HubSpot CRM with specified properties and associations.                                         |
| `HUBSPOT_CREATE_NEW_OBJECT_SCHEMA_WITH_CUSTOM_PROPERTIES` | Creates a new custom object schema in HubSpot CRM with unique naming and defined display and searchable properties.   |
| `HUBSPOT_CREATE_OR_UPDATE_DRAFT_VERSION`                  | Creates or updates the draft version of a marketing email, creating a new draft if one does not exist.                |
| `HUBSPOT_CREATE_PIPELINE_FOR_OBJECT_TYPE`                 | Creates a new HubSpot pipeline for a specified CRM object type such as deals or tickets.                              |
| `HUBSPOT_CREATE_PIPELINE_STAGE`                           | Creates a new stage in a specified HubSpot CRM pipeline for a given object type.                                      |
| `HUBSPOT_CREATE_PRODUCT`                                  | Creates a new HubSpot product.                                                                                        |
| `HUBSPOT_CREATE_PRODUCT_BATCH`                            | Creates multiple products in HubSpot CRM in a batch with unique properties and associations per product.              |
| `HUBSPOT_CREATE_PRODUCT_OBJECT`                           | Creates a new product in HubSpot with specified properties and optional associations.                                 |
| `HUBSPOT_CREATE_PRODUCTS`                                 | Creates multiple HubSpot products in a single batch operation.                                                        |
| `HUBSPOT_CREATE_PROPERTY_FOR_SPECIFIED_OBJECT_TYPE`       | Creates a new custom property for a specified HubSpot CRM object type.                                                |
| `HUBSPOT_CREATE_QUOTE_OBJECT`                             | Creates a new quote object in HubSpot CRM with specified properties and associations.                                 |
| `HUBSPOT_CREATE_TICKET`                                   | Creates a new HubSpot ticket.                                                                                         |
| `HUBSPOT_CREATE_TICKET_OBJECT`                            | Creates a new ticket in HubSpot with specified properties and associations.                                           |
| `HUBSPOT_CREATE_TICKETS`                                  | Creates multiple HubSpot tickets in a batch, each with its own properties and associations.                           |
| `HUBSPOT_CREATE_TIMELINE_EVENT_BASED_ON_TEMPLATE`         | Creates an immutable custom timeline event on a CRM object's record using a specified event template.                 |
| `HUBSPOT_CREATE_WORKFLOW`                                 | Creates a new HubSpot workflow to automate processes with defined enrollment criteria and actions.                    |
| `HUBSPOT_DELETE_A_BATCH_OF_CAMPAIGNS`                     | Archives a batch of up to 50 marketing campaigns, hiding them from active views.                                      |
| `HUBSPOT_DELETE_A_MARKETING_EMAIL`                        | Deletes an existing marketing email, either permanently or by archiving.                                              |
| `HUBSPOT_DELETE_CALLING_EXTENSION_SETTINGS`               | Permanently deletes the settings for a calling extension app by its appId.                                            |
| `HUBSPOT_DELETE_CAMPAIGN`                                 | Permanently deletes a marketing campaign from HubSpot using its campaignGuid.                                         |
| `HUBSPOT_DELETE_CONTACT_FOR_GDPR_COMPLIANCE`              | Irreversibly deletes a HubSpot contact for GDPR compliance.                                                           |
| `HUBSPOT_DELETE_PIPELINE_BY_ID`                           | Permanently deletes a HubSpot pipeline and all its stages by pipelineId and objectType.                               |
| `HUBSPOT_DELETE_PIPELINE_STAGE_BY_ID`                     | Permanently deletes a specific pipeline stage for an object type that supports pipelines.                             |
| `HUBSPOT_DELETE_SCHEMA_BY_OBJECT_TYPE`                    | Permanently deletes a HubSpot custom object schema after all associated CRM records have been deleted.                |
| `HUBSPOT_DELETE_TIMELINE_EVENT_TEMPLATE`                  | Permanently and irreversibly deletes a specific timeline event template by its eventTemplateId.                       |
| `HUBSPOT_DELETE_VIDEO_CONFERENCING_APP_SETTINGS`          | Irreversibly deletes all settings for a video conferencing application identified by its appId in HubSpot.            |
| `HUBSPOT_DELETE_WORKFLOW`                                 | Permanently deletes a HubSpot workflow by its ID.                                                                     |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **HubSpot**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated lead capture and contact enrichment**
When a new lead fills out a form, the agent creates a HubSpot contact with full profile details, associates it with the relevant company, and assigns it to the correct deal pipeline stage, eliminating manual data entry.

**Sales pipeline management**
An agent monitors deal progress and automatically creates or updates deals, moves them through pipeline stages, and generates quotes for prospects when they reach a defined stage in the sales process.

**Customer support ticket triage**
When a support request comes in, the agent creates a HubSpot ticket with the appropriate priority and category, associates it with the customer's contact record, and logs a timeline event to track the interaction history.
