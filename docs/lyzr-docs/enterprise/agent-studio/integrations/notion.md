> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Notion

Connect agents to Notion to create, read, update, and search pages, databases, and workspace content programmatically.

## Setup

1. In Agent Studio, go to **Tools** → **Notion** → **Connect**
2. Sign in with your Notion account and authorize access
3. Review the requested permissions and click **Allow**

## Composio vs ACI: Which provider to use?

This tool is available through two providers. Both connect to the same underlying service but differ in action coverage and auth handling.

|                     | Composio                                   | ACI                                         |
| ------------------- | ------------------------------------------ | ------------------------------------------- |
| **Provider source** | Composio                                   | ACI                                         |
| **Auth type**       | oauth2                                     | oauth2                                      |
| **Best for**        | Broad action coverage, workflow automation | Targeted integrations, API-level operations |

Choose **Composio** when you need the widest selection of actions and deep workflow automation. Choose **ACI** when you need direct API-level control or a specific action not covered by Composio.

## Available actions: Composio

| Action                              | Description                                                                                                                               |
| ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `NOTION_ADD_MULTIPLE_PAGE_CONTENT`  | Adds multiple content blocks to a Notion page in a single call with automatic markdown parsing, supporting up to 100 blocks per request.  |
| `NOTION_APPEND_BLOCK_CHILDREN`      | Appends complex blocks using the full Notion block structure to a parent block or page, for advanced scenarios requiring precise control. |
| `NOTION_ARCHIVE_NOTION_PAGE`        | Archives or restores a specified Notion page by toggling its archived status.                                                             |
| `NOTION_CREATE_COMMENT`             | Adds a comment to a Notion page or to an existing discussion thread.                                                                      |
| `NOTION_CREATE_DATABASE`            | Creates a new Notion database as a subpage under a specified parent page with a defined properties schema.                                |
| `NOTION_CREATE_NOTION_PAGE`         | Creates a new empty page in a Notion workspace under a specified parent page or database.                                                 |
| `NOTION_DELETE_BLOCK`               | Archives a Notion block, page, or database by its ID, which can be restored later.                                                        |
| `NOTION_DUPLICATE_PAGE`             | Duplicates a Notion page including all its content, properties, and nested blocks under a specified parent.                               |
| `NOTION_FETCH_BLOCK_CONTENTS`       | Retrieves a paginated list of direct child block objects and their contents for a given parent block or page.                             |
| `NOTION_FETCH_BLOCK_METADATA`       | Fetches metadata for a Notion block or page using its UUID.                                                                               |
| `NOTION_FETCH_COMMENTS`             | Fetches unresolved comments for a specified Notion block or page.                                                                         |
| `NOTION_FETCH_DATA`                 | Fetches Notion pages and/or databases from the workspace, optionally filtered by a search query.                                          |
| `NOTION_FETCH_DATABASE`             | Fetches a Notion database's structural metadata such as properties and title via its database ID.                                         |
| `NOTION_FETCH_ROW`                  | Retrieves a Notion database row's properties and metadata using the row's page ID.                                                        |
| `NOTION_GET_ABOUT_ME`               | Retrieves the bot user object associated with the current Notion integration token.                                                       |
| `NOTION_GET_ABOUT_USER`             | Retrieves detailed information about a specific Notion user by their unique user ID.                                                      |
| `NOTION_GET_PAGE_PROPERTY_ACTION`   | Retrieves a specific property from a Notion page using the page ID and property ID, with pagination support.                              |
| `NOTION_INSERT_ROW_DATABASE`        | Creates a new page (row) in a specified Notion database with the given property values.                                                   |
| `NOTION_LIST_USERS`                 | Retrieves a paginated list of users (excluding guests) from the Notion workspace.                                                         |
| `NOTION_QUERY_DATABASE`             | Queries a Notion database for pages (rows) with optional sorting and pagination.                                                          |
| `NOTION_RETRIEVE_COMMENT`           | Retrieves the details of a specific comment by its ID.                                                                                    |
| `NOTION_RETRIEVE_DATABASE_PROPERTY` | Retrieves a specific property object from a Notion database by database ID and property ID.                                               |
| `NOTION_SEARCH_NOTION_PAGE`         | Searches Notion pages and databases by title, returning all accessible items if no query is provided.                                     |
| `NOTION_UPDATE_BLOCK`               | Updates the textual content or type-specific properties of an existing Notion block by its ID.                                            |
| `NOTION_UPDATE_PAGE`                | Updates the properties, icon, cover, or archive status of an existing Notion page.                                                        |
| `NOTION_UPDATE_ROW_DATABASE`        | Updates or archives an existing Notion database row (page) including its icon, cover, and properties.                                     |
| `NOTION_UPDATE_SCHEMA_DATABASE`     | Updates an existing Notion database's title, description, or property schema.                                                             |

## Available actions: ACI

| Action                        | Description                                                                                      |
| ----------------------------- | ------------------------------------------------------------------------------------------------ |
| `NOTION__GET_PAGE`            | Retrieves a Notion page object using its ID, returning page properties but not page content.     |
| `NOTION__SEARCH_PAGES`        | Searches all pages shared with the integration and returns those with titles matching the query. |
| `NOTION__TOGGLE_PAGE_ARCHIVE` | Archives or restores a Notion page by setting its archived status to true or false.              |
| `NOTION__RESTORE_PAGE`        | Restores a Notion page from trash by setting its archived property to false.                     |
| `NOTION__LIST_USERS`          | Returns a paginated list of users in the workspace, excluding guests.                            |
| `NOTION__GET_USER`            | Retrieves a specific Notion user by their user ID.                                               |
| `NOTION__GET_ME`              | Retrieves the bot user associated with the API token provided in the authorization header.       |
| `NOTION__CREATE_PAGE`         | Creates a new page as a child of an existing page or database, with optional content blocks.     |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Notion**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated meeting notes to Notion**
After a meeting, an agent creates a new Notion page under a specified parent using `NOTION_CREATE_NOTION_PAGE`, then appends structured meeting notes with action items using `NOTION_ADD_MULTIPLE_PAGE_CONTENT`.

**Project tracker database management**
An agent uses `NOTION_QUERY_DATABASE` to fetch open tasks from a project tracker, updates task statuses with `NOTION_UPDATE_ROW_DATABASE`, and inserts new tasks from external sources using `NOTION_INSERT_ROW_DATABASE`.

**Knowledge base search and retrieval**
An agent searches the Notion workspace for relevant documentation using `NOTION_SEARCH_NOTION_PAGE` or `NOTION_FETCH_DATA`, then retrieves the full content of matching pages using `NOTION_FETCH_BLOCK_CONTENTS` to answer user questions.
