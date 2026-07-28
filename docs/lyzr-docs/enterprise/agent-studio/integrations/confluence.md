> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Confluence

Confluence is a team collaboration and knowledge management tool that lets agents create, read, update, and organize pages, blog posts, spaces, and other content within your Confluence instance.

## Setup

1. In Agent Studio, go to **Tools** → **Confluence** → **Connect**
2. Sign in with your Confluence account and authorize access
3. Review the requested permissions and click **Allow**

## Available actions

| Action                                                    | Description                                                                     |
| --------------------------------------------------------- | ------------------------------------------------------------------------------- |
| `CONFLUENCE_ADD_CONTENT_LABEL`                            | Adds one or more labels to a Confluence page or blog post.                      |
| `CONFLUENCE_CONFLUENCE_GET_SPACE_BY_ID`                   | Retrieves detailed metadata for a Confluence space by its ID.                   |
| `CONFLUENCE_CREATE_BLOGPOST`                              | Creates a new blog post in a specified Confluence space.                        |
| `CONFLUENCE_CREATE_BLOGPOST_PROPERTY`                     | Adds a custom metadata property to an existing blog post.                       |
| `CONFLUENCE_CREATE_CONTENT_PROPERTY_FOR_WHITEBOARD`       | Attaches a custom metadata property to a Confluence whiteboard.                 |
| `CONFLUENCE_CREATE_PAGE`                                  | Creates a new page in a specified Confluence space.                             |
| `CONFLUENCE_CREATE_PAGE_PROPERTY`                         | Adds a custom metadata property to a Confluence page.                           |
| `CONFLUENCE_CREATE_PRIVATE_SPACE`                         | Creates a private Confluence space visible only to its creator.                 |
| `CONFLUENCE_CREATE_SPACE`                                 | Creates a new Confluence space for organizing content.                          |
| `CONFLUENCE_CREATE_SPACE_PROPERTY`                        | Adds a custom metadata property to a Confluence space.                          |
| `CONFLUENCE_CREATE_WHITEBOARD`                            | Creates a new collaborative whiteboard in a Confluence space.                   |
| `CONFLUENCE_DELETE_BLOGPOST_PROPERTY`                     | Removes a custom metadata property from a specified blog post.                  |
| `CONFLUENCE_DELETE_CONTENT_PROPERTY_FOR_PAGE_BY_ID`       | Deletes a content property from a page by its property ID.                      |
| `CONFLUENCE_DELETE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID` | Removes a content property from a whiteboard by its property ID.                |
| `CONFLUENCE_DELETE_PAGE`                                  | Permanently deletes a Confluence page by its ID.                                |
| `CONFLUENCE_DELETE_SPACE`                                 | Permanently deletes a Confluence space by its key.                              |
| `CONFLUENCE_DELETE_SPACE_PROPERTY`                        | Removes a property from a Confluence space.                                     |
| `CONFLUENCE_GET_ATTACHMENT_LABELS`                        | Lists all labels associated with a specific Confluence attachment.              |
| `CONFLUENCE_GET_ATTACHMENTS`                              | Retrieves a paginated list of attachments for a Confluence page.                |
| `CONFLUENCE_GET_AUDIT_LOGS`                               | Fetches and filters Confluence audit records for compliance or troubleshooting. |
| `CONFLUENCE_GET_BLOGPOST_BY_ID`                           | Retrieves detailed metadata and content for a Confluence blog post by its ID.   |
| `CONFLUENCE_GET_BLOGPOST_LABELS`                          | Lists all labels on a specific Confluence blog post.                            |
| `CONFLUENCE_GET_BLOGPOST_LIKE_COUNT`                      | Returns the total number of likes for a Confluence blog post.                   |
| `CONFLUENCE_GET_BLOGPOST_OPERATIONS`                      | Retrieves the list of permitted operations for a Confluence blog post.          |
| `CONFLUENCE_GET_BLOGPOSTS`                                | Retrieves a paginated list of Confluence blog posts.                            |
| `CONFLUENCE_GET_BLOG_POSTS`                               | Retrieves a paginated list of Confluence blog posts.                            |
| `CONFLUENCE_GET_BLOG_POSTS_FOR_LABEL`                     | Lists all blog posts associated with a specific label ID.                       |
| `CONFLUENCE_GET_BLOGPOST_VERSION_DETAILS`                 | Retrieves metadata for a specific version of a Confluence blog post.            |
| `CONFLUENCE_GET_BLOGPOST_VERSIONS`                        | Lists all versions of a specific Confluence blog post.                          |
| `CONFLUENCE_GET_CHILD_PAGES`                              | Lists all direct child pages of a given Confluence page.                        |
| `CONFLUENCE_GET_CONTENT_PROPERTIES_FOR_BLOG_POST`         | Lists all metadata properties set on a specific Confluence blog post.           |
| `CONFLUENCE_GET_CONTENT_PROPERTIES_FOR_PAGE`              | Lists all metadata properties set on a specific Confluence page.                |
| `CONFLUENCE_GET_CONTENT_RESTRICTIONS`                     | Retrieves view and edit restrictions for a Confluence page or blog post.        |
| `CONFLUENCE_GET_CURRENT_USER`                             | Returns details about the currently authenticated Confluence user.              |
| `CONFLUENCE_GET_INLINE_COMMENTS_FOR_BLOG_POST`            | Retrieves inline comments for a Confluence blog post.                           |
| `CONFLUENCE_GET_LABELS`                                   | Retrieves a paginated list of all labels in a Confluence site.                  |
| `CONFLUENCE_GET_LABELS_FOR_PAGE`                          | Lists all labels applied to a specific Confluence page.                         |
| `CONFLUENCE_GET_LABELS_FOR_SPACE`                         | Lists all labels applied to a specific Confluence space.                        |
| `CONFLUENCE_GET_LABELS_FOR_SPACE_CONTENT`                 | Lists all labels applied to content within a specified Confluence space.        |
| `CONFLUENCE_GET_PAGE_ANCESTORS`                           | Retrieves the full ancestor hierarchy for a given Confluence page.              |
| `CONFLUENCE_GET_PAGE_BY_ID`                               | Retrieves detailed metadata and content for a Confluence page by its ID.        |
| `CONFLUENCE_GET_PAGE_LIKE_COUNT`                          | Returns the total number of likes for a Confluence page.                        |
| `CONFLUENCE_GET_PAGES`                                    | Retrieves a paginated, filterable list of Confluence pages.                     |
| `CONFLUENCE_GET_PAGE_VERSIONS`                            | Lists all versions of a specific Confluence page for audit purposes.            |
| `CONFLUENCE_GET_SPACE_BY_ID`                              | Retrieves detailed metadata for a Confluence space by its ID.                   |
| `CONFLUENCE_GET_SPACE_CONTENTS`                           | Lists pages, blog posts, or attachments within a Confluence space.              |
| `CONFLUENCE_GET_SPACE_PROPERTIES`                         | Retrieves custom metadata properties stored on a Confluence space.              |
| `CONFLUENCE_GET_SPACES`                                   | Retrieves a paginated, filterable list of Confluence spaces.                    |
| `CONFLUENCE_GET_USER_ANONYMOUS`                           | Retrieves information about the anonymous (guest) user.                         |
| `CONFLUENCE_SEARCH_CONTENT`                               | Searches for Confluence pages by title with intelligent relevance ranking.      |
| `CONFLUENCE_SEARCH_USERS`                                 | Searches for Confluence users using CQL-based user queries.                     |
| `CONFLUENCE_UPDATE_BLOGPOST`                              | Updates the title or content of an existing Confluence blog post.               |
| `CONFLUENCE_UPDATE_BLOGPOST_PROPERTY`                     | Updates a custom metadata property on a Confluence blog post.                   |
| `CONFLUENCE_UPDATE_CONTENT_PROPERTY_FOR_PAGE_BY_ID`       | Updates an existing metadata property on a Confluence page by property ID.      |
| `CONFLUENCE_UPDATE_CONTENT_PROPERTY_FOR_WHITEBOARD_BY_ID` | Updates a content property on a Confluence whiteboard.                          |
| `CONFLUENCE_UPDATE_PAGE`                                  | Updates the title or content of an existing Confluence page.                    |
| `CONFLUENCE_UPDATE_SPACE_PROPERTY`                        | Updates a custom metadata property on a Confluence space.                       |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Confluence**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated release notes publishing**
After a sprint or deployment, an agent can automatically create or update a Confluence page with release notes pulled from your issue tracker, keeping your team's documentation current without manual effort.

**Knowledge base search and Q\&A**
An agent can use `CONFLUENCE_SEARCH_CONTENT` and `CONFLUENCE_GET_PAGE_BY_ID` to find relevant pages and surface answers to team questions, acting as an always-available internal knowledge assistant.

**Content auditing and labeling**
An agent can iterate through spaces using `CONFLUENCE_GET_PAGES` and `CONFLUENCE_GET_LABELS_FOR_PAGE`, then apply consistent labels with `CONFLUENCE_ADD_CONTENT_LABEL` to enforce documentation standards across the organization.
