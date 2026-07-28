> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Google Docs

Google Docs is a cloud-based word processor that lets agents create, read, edit, and manage documents with support for rich formatting, tables, images, and real-time collaboration within Google Workspace.

## Setup

1. In Agent Studio, go to **Tools** → **Google Docs** → **Connect**
2. Sign in with your Google account and authorize access
3. Review the requested permissions and click **Allow**

## Available actions

| Action                                      | Description                                                                                                      |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `GOOGLEDOCS_COPY_DOCUMENT`                  | Creates a copy of an existing Google Document, useful for duplicating templates.                                 |
| `GOOGLEDOCS_CREATE_DOCUMENT`                | Creates a new Google Docs document with a specified title and optional initial text content.                     |
| `GOOGLEDOCS_CREATE_DOCUMENT_MARKDOWN`       | Creates a new Google Docs document initialized with content provided as Markdown text.                           |
| `GOOGLEDOCS_CREATE_FOOTER`                  | Adds a new footer to a Google Document, optionally scoped to a specific section.                                 |
| `GOOGLEDOCS_CREATE_FOOTNOTE`                | Inserts a footnote reference at a specified location or at the end of the document body.                         |
| `GOOGLEDOCS_CREATE_HEADER`                  | Adds a new header to a Google Document, optionally scoped to a specific section.                                 |
| `GOOGLEDOCS_CREATE_NAMED_RANGE`             | Assigns a name to a specific range of content in a document for easier programmatic reference.                   |
| `GOOGLEDOCS_CREATE_PARAGRAPH_BULLETS`       | Applies bullet formatting to paragraphs within a specified range in a document.                                  |
| `GOOGLEDOCS_DELETE_CONTENT_RANGE`           | Deletes a specific range of content (text or structural elements) from a document.                               |
| `GOOGLEDOCS_DELETE_FOOTER`                  | Removes a footer from a Google Document, either for the whole document or a specific section.                    |
| `GOOGLEDOCS_DELETE_HEADER`                  | Removes a header from a Google Document, either for the whole document or a specific section.                    |
| `GOOGLEDOCS_DELETE_NAMED_RANGE`             | Deletes a previously defined named range from a document by its ID or name.                                      |
| `GOOGLEDOCS_DELETE_PARAGRAPH_BULLETS`       | Removes bullet formatting from paragraphs within a specified range in a document.                                |
| `GOOGLEDOCS_DELETE_TABLE`                   | Deletes an entire table from a Google Document given the table's start and end indices.                          |
| `GOOGLEDOCS_DELETE_TABLE_COLUMN`            | Removes a specific column from an existing table in a Google Document.                                           |
| `GOOGLEDOCS_DELETE_TABLE_ROW`               | Removes a specific row from an existing table in a Google Document.                                              |
| `GOOGLEDOCS_GET_CHARTS_FROM_SPREADSHEET`    | Retrieves all charts from a Google Sheets spreadsheet, returning their IDs and specifications.                   |
| `GOOGLEDOCS_GET_DOCUMENT_BY_ID`             | Fetches the content and metadata of an existing Google Document by its ID.                                       |
| `GOOGLEDOCS_INSERT_INLINE_IMAGE`            | Inserts an image from a public URI into a Google Document at a specified location.                               |
| `GOOGLEDOCS_INSERT_PAGE_BREAK`              | Inserts a page break at a specified location or the end of the document body.                                    |
| `GOOGLEDOCS_INSERT_TABLE_ACTION`            | Inserts a new table with a given number of rows and columns at a specified location in a document.               |
| `GOOGLEDOCS_INSERT_TABLE_COLUMN`            | Adds a new column to an existing table in a Google Document at a specified position.                             |
| `GOOGLEDOCS_INSERT_TEXT_ACTION`             | Inserts a string of text at a specified index within an existing Google Document.                                |
| `GOOGLEDOCS_LIST_SPREADSHEET_CHARTS_ACTION` | Lists charts with their IDs and metadata from a Google Sheets spreadsheet for embedding into Docs.               |
| `GOOGLEDOCS_REPLACE_ALL_TEXT`               | Performs a global find-and-replace operation across all occurrences of a text string in a document.              |
| `GOOGLEDOCS_REPLACE_IMAGE`                  | Replaces an existing image in a document with a new image fetched from a provided URI.                           |
| `GOOGLEDOCS_SEARCH_DOCUMENTS`               | Searches for Google Documents using filters such as name, full-text content, date ranges, and sharing status.    |
| `GOOGLEDOCS_UNMERGE_TABLE_CELLS`            | Reverts previously merged table cells back to their individual cell states.                                      |
| `GOOGLEDOCS_UPDATE_DOCUMENT_MARKDOWN`       | Replaces the entire content of an existing Google Document with new Markdown-formatted text.                     |
| `GOOGLEDOCS_UPDATE_DOCUMENT_STYLE`          | Updates global document style settings such as page size, margins, and background.                               |
| `GOOGLEDOCS_UPDATE_EXISTING_DOCUMENT`       | Applies one or more programmatic edits (insert, delete, format) to a Google Document using the batch update API. |
| `GOOGLEDOCS_UPDATE_TABLE_ROW_STYLE`         | Updates the style of one or more table rows, such as minimum height or header designation.                       |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Google Docs**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated report generation**
An agent retrieves data from a source, then uses `GOOGLEDOCS_CREATE_DOCUMENT_MARKDOWN` to generate a formatted report document with headings, tables, and bullet points, ready to share with stakeholders.

**Document template population**
An agent copies a template document using `GOOGLEDOCS_COPY_DOCUMENT`, then uses `GOOGLEDOCS_REPLACE_ALL_TEXT` to swap placeholder tokens with real values such as client name, date, and project details.

**Content search and update workflow**
An agent uses `GOOGLEDOCS_SEARCH_DOCUMENTS` to find all documents matching a keyword, then applies `GOOGLEDOCS_UPDATE_DOCUMENT_MARKDOWN` to update their content or `GOOGLEDOCS_INSERT_TEXT_ACTION` to append new information to each one.
