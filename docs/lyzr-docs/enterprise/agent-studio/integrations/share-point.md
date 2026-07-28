> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# SharePoint

SharePoint is a Microsoft platform that enables teams to manage documents, organize content in lists and libraries, collaborate on files, and control access across sites, all accessible through the Microsoft Graph API.

## Setup

1. In Agent Studio, go to **Tools** → **SharePoint** → **Connect**
2. Sign in with your Microsoft account and authorize access
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

| Action                                              | Description                                                                                                                  |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `SHARE_POINT_ADD_ATTACHMENT_TO_LIST_ITEM`           | Uploads a binary file as an attachment to a specified SharePoint list item.                                                  |
| `SHARE_POINT_ADD_FIELD_LINK_TO_CONTENT_TYPE`        | Associates an existing list field with a content type by adding a field link.                                                |
| `SHARE_POINT_ADD_ROLE_ASSIGNMENT_TO_ITEM`           | Grants specific permissions to a user or group on a list item, breaking inheritance if needed.                               |
| `SHARE_POINT_ADD_ROLE_ASSIGNMENT_TO_LIST`           | Grants permissions to a user or group on a specific SharePoint list.                                                         |
| `SHARE_POINT_BREAK_ROLE_INHERITANCE_ON_ITEM`        | Breaks permission inheritance on a list item so it can have unique permissions independent of its parent.                    |
| `SHARE_POINT_BREAK_ROLE_INHERITANCE_ON_LIST`        | Breaks permission inheritance on a SharePoint list so its permissions can be managed independently from the site.            |
| `SHARE_POINT_CHECK_IN_FILE`                         | Checks in a file to finalize changes and publish a new version to the document library.                                      |
| `SHARE_POINT_CREATE_CONTENT_TYPE`                   | Creates a new content type in SharePoint to define a custom metadata structure for lists or libraries.                       |
| `SHARE_POINT_CREATE_DRIVE_ITEM_SHARING_LINK`        | Generates a shareable link for a drive item with configurable permissions (view/edit/embed) and optional expiration.         |
| `SHARE_POINT_CREATE_LIST_FIELD`                     | Adds a new column to a SharePoint list by specifying its type, name, and other properties.                                   |
| `SHARE_POINT_CREATE_LIST_ITEM_BY_ID`                | Creates a new item in a SharePoint list using the list's GUID.                                                               |
| `SHARE_POINT_CREATE_LIST_ITEM_IN_FOLDER`            | Creates a new list item inside a specific folder within a SharePoint list (not document libraries).                          |
| `SHARE_POINT_CREATE_WEB`                            | Creates a new SharePoint subsite under the current site with configurable permissions and template.                          |
| `SHARE_POINT_DELETE_DRIVE_ITEM_VERSION_CONTENT`     | Removes the binary content for a specific version of a drive item while keeping the version metadata.                        |
| `SHARE_POINT_DELETE_FOLDER`                         | Permanently removes a folder from a SharePoint document library by moving it to the site recycle bin.                        |
| `SHARE_POINT_DELETE_LIST`                           | Deletes a SharePoint list by its GUID, removing it and all its contents.                                                     |
| `SHARE_POINT_DELETE_LIST_BY_TITLE`                  | Permanently removes a SharePoint list and all its contents by specifying the list title.                                     |
| `SHARE_POINT_DELETE_LIST_ITEM`                      | Permanently removes a specific item from a SharePoint list using its numeric ID.                                             |
| `SHARE_POINT_DELETE_RECYCLE_BIN_ITEM_PERMANENT`     | Permanently and irrevocably deletes a specific item from the SharePoint Recycle Bin by its GUID.                             |
| `SHARE_POINT_DOWNLOAD_FILE_BY_SERVER_RELATIVE_URL`  | Downloads the raw bytes of a SharePoint file using its server-relative path.                                                 |
| `SHARE_POINT_ENSURE_USER`                           | Adds a user to a SharePoint site if they don't already exist, returning their user info either way.                          |
| `SHARE_POINT_FOLLOW`                                | Makes the authenticated user follow a specified SharePoint user, document, site, or tag.                                     |
| `SHARE_POINT_GET_ALL_FOLDERS`                       | Retrieves all folders across the SharePoint site with support for OData filtering and pagination.                            |
| `SHARE_POINT_GET_CHANGES`                           | Retrieves the change log for a SharePoint list to process webhook notifications and track modifications.                     |
| `SHARE_POINT_GET_CONTENT_TYPE`                      | Returns detailed information about a specific content type by its ID, including fields and metadata.                         |
| `SHARE_POINT_GET_CONTENT_TYPES`                     | Lists all content types available on the current SharePoint site.                                                            |
| `SHARE_POINT_GET_CONTENT_TYPES_FOR_LIST`            | Returns all content types associated with a specific SharePoint list identified by its GUID.                                 |
| `SHARE_POINT_GET_CONTEXT_INFO`                      | Retrieves SharePoint context information including the form digest value required for write operations.                      |
| `SHARE_POINT_GET_CURRENT_USER`                      | Returns the profile and details of the currently authenticated SharePoint user.                                              |
| `SHARE_POINT_GET_DRIVE_ITEM_ANALYTICS`              | Returns view counts and unique viewer statistics for a file or folder in SharePoint or OneDrive.                             |
| `SHARE_POINT_GET_FILE_BY_SERVER_RELATIVE_URL`       | Retrieves file metadata (permissions, URLs, UniqueId) for a SharePoint file using its server-relative path.                  |
| `SHARE_POINT_GET_FOLDER_BY_SERVER_RELATIVE_URL`     | Fetches folder metadata for a specified server-relative URL path.                                                            |
| `SHARE_POINT_GET_GROUP_USERS`                       | Lists all members of a named SharePoint group including their IDs, emails, and login names.                                  |
| `SHARE_POINT_GET_GROUP_USERS_BY_ID`                 | Lists all members of a SharePoint group using its numeric group ID.                                                          |
| `SHARE_POINT_GET_ITEM_ATTACHMENT_CONTENT`           | Downloads the binary contents of a specific attachment on a SharePoint list item.                                            |
| `SHARE_POINT_GET_LIST_BY_GUID`                      | Retrieves metadata for a SharePoint list identified by its GUID.                                                             |
| `SHARE_POINT_GET_LIST_BY_TITLE`                     | Retrieves metadata for a SharePoint list identified by its display title.                                                    |
| `SHARE_POINT_GET_LIST_CONTENT_TYPE_BY_ID`           | Returns detailed information about a specific content type within a SharePoint list.                                         |
| `SHARE_POINT_GET_LIST_ITEM_BY_ID`                   | Fetches a specific item from a SharePoint list by its numeric ID.                                                            |
| `SHARE_POINT_GET_LIST_ITEM_ENTITY_TYPE_FULL_NAME`   | Returns the entity type name required for the `__metadata.type` field when creating or updating list items.                  |
| `SHARE_POINT_GET_LIST_ITEM_ETAG`                    | Fetches the ETag of a list item for use in concurrency control before update or delete operations.                           |
| `SHARE_POINT_GET_LIST_ITEMS`                        | Retrieves items from a SharePoint list with support for OData filtering, sorting, and pagination.                            |
| `SHARE_POINT_GET_LIST_ITEMS_BY_GUID`                | Retrieves items from a SharePoint list using the list's GUID with optional OData query parameters.                           |
| `SHARE_POINT_GET_LIST_ITEM_VERSION`                 | Retrieves a specific historical version of a SharePoint list item by version ID.                                             |
| `SHARE_POINT_GET_MY_FOLLOWED`                       | Returns the users, documents, sites, and tags currently followed by the authenticated user.                                  |
| `SHARE_POINT_GET_MY_FOLLOWERS`                      | Returns the list of SharePoint users who are following the authenticated user.                                               |
| `SHARE_POINT_GET_ROLE_DEFINITIONS`                  | Lists all permission levels (role definitions) defined at the SharePoint web level.                                          |
| `SHARE_POINT_GET_SITE_COLLECTION_INFO`              | Fetches site collection metadata including URL, ID, and root web URI.                                                        |
| `SHARE_POINT_GET_SITE_DRIVE_ITEM_BY_PATH`           | Retrieves metadata for a file or folder in a SharePoint site using its server-relative path.                                 |
| `SHARE_POINT_GET_SITE_PAGE_CONTENT`                 | Retrieves the structured content of modern SharePoint site pages from the Site Pages library.                                |
| `SHARE_POINT_GET_USER_EFFECTIVE_PERMISSIONS_ON_WEB` | Returns the combined permissions a specific user has on the current SharePoint site.                                         |
| `SHARE_POINT_GET_WEBHOOK_SUBSCRIPTION`              | Retrieves details for a specific webhook subscription on a SharePoint list by its ID.                                        |
| `SHARE_POINT_GET_WEBHOOK_SUBSCRIPTIONS`             | Returns all webhook subscriptions configured on a SharePoint list.                                                           |
| `SHARE_POINT_GET_WEB_INFO`                          | Retrieves metadata about the current SharePoint web including title, URL, and language settings.                             |
| `SHARE_POINT_GET_WEB_TITLE`                         | Returns the display title of the current SharePoint web or site.                                                             |
| `SHARE_POINT_IS_FOLLOWED`                           | Checks whether the authenticated user is currently following a specified SharePoint actor.                                   |
| `SHARE_POINT_LIST_ALL_LISTS`                        | Retrieves all lists and document libraries in the current SharePoint site with their metadata.                               |
| `SHARE_POINT_LIST_DRIVE_RECENT_ITEMS`               | Returns files and folders recently accessed by the user in a specified SharePoint drive.                                     |
| `SHARE_POINT_LIST_FILES_IN_FOLDER`                  | Lists all files within a SharePoint folder using its server-relative URL.                                                    |
| `SHARE_POINT_LIST_ITEM_ATTACHMENTS`                 | Returns the filenames and server-relative URLs of all attachments on a specific SharePoint list item.                        |
| `SHARE_POINT_LIST_LIST_COLUMNS`                     | Retrieves all column definitions for a SharePoint list including field names, types, and properties.                         |
| `SHARE_POINT_LIST_RECYCLE_BIN_ITEMS`                | Lists deleted items currently in the SharePoint Recycle Bin with support for pagination.                                     |
| `SHARE_POINT_LIST_SITE_CONTENT_TYPES`               | Retrieves all content type definitions available at the SharePoint site level.                                               |
| `SHARE_POINT_LIST_SITE_GROUPS`                      | Lists all permission groups in a SharePoint site collection along with their settings.                                       |
| `SHARE_POINT_LIST_SITE_PAGES`                       | Retrieves pages from a SharePoint site's Site Pages library with optional OData filtering.                                   |
| `SHARE_POINT_LIST_SITE_USERS`                       | Lists all users in the current SharePoint site collection.                                                                   |
| `SHARE_POINT_LIST_SUBFOLDERS_IN_FOLDER`             | Returns immediate child folders within a SharePoint folder by its server-relative URL.                                       |
| `SHARE_POINT_LOG_EVENT`                             | Logs a custom usage analytics event to SharePoint's analytics system for tracking user activities.                           |
| `SHARE_POINT_RECYCLE_FILE`                          | Moves a file to the SharePoint Recycle Bin as a soft-delete, preserving the ability to restore it.                           |
| `SHARE_POINT_RECYCLE_LIST_ITEM`                     | Moves a SharePoint list item to the Recycle Bin instead of permanently deleting it.                                          |
| `SHARE_POINT_RENAME_FOLDER`                         | Renames a SharePoint folder by updating its list item metadata with a new display name.                                      |
| `SHARE_POINT_RENDER_LIST_DATA_AS_STREAM`            | Retrieves list items with rich metadata and formatting, supporting CAML queries for filtering and sorting.                   |
| `SHARE_POINT_RESTORE_DRIVE_ITEM_VERSION`            | Reverts a SharePoint drive item to a specified earlier version.                                                              |
| `SHARE_POINT_RESTORE_RECYCLE_BIN_ITEM`              | Restores a deleted SharePoint item from the Recycle Bin to its original location.                                            |
| `SHARE_POINT_SEARCH_QUERY`                          | Searches SharePoint content using Keyword Query Language (KQL) across documents, list items, and folders.                    |
| `SHARE_POINT_SEARCH_SUGGEST`                        | Returns autocomplete query suggestions for a given search input.                                                             |
| `SHARE_POINT_SHAREPOINT_CHECK_OUT_FILE`             | Checks out a file in a document library to lock it before making changes.                                                    |
| `SHARE_POINT_SHAREPOINT_CREATE_FOLDER`              | Creates a new folder in SharePoint using the REST API.                                                                       |
| `SHARE_POINT_SHAREPOINT_CREATE_LIST`                | Creates a new SharePoint list using the REST API.                                                                            |
| `SHARE_POINT_SHAREPOINT_CREATE_LIST_ITEM`           | Creates a new item in a SharePoint list.                                                                                     |
| `SHARE_POINT_SHAREPOINT_CREATE_USER`                | Adds an existing Azure AD user to the SharePoint site collection, returning existing details if the user is already present. |
| `SHARE_POINT_SHAREPOINT_FIND_USER`                  | Searches for a user in the SharePoint site by email address and returns their profile if found.                              |
| `SHARE_POINT_SHAREPOINT_REMOVE_USER`                | Removes a user from SharePoint, completing silently if the user does not exist.                                              |
| `SHARE_POINT_UNDO_CHECKOUT_FILE`                    | Cancels a file checkout, discarding any uncommitted changes and unlocking the file.                                          |
| `SHARE_POINT_UPDATE_CONTENT_TYPE`                   | Updates a SharePoint content type's properties such as name, description, group, or visibility.                              |
| `SHARE_POINT_UPDATE_DRIVE_ITEM`                     | Updates properties of a drive item such as renaming it, changing its description, or moving it to another folder.            |
| `SHARE_POINT_UPDATE_DRIVES_LIST_ITEMS`              | Updates fields on a SharePoint list item in a document library via the drive endpoint.                                       |
| `SHARE_POINT_UPDATE_LIST`                           | Modifies metadata for an existing SharePoint list such as title, description, or versioning settings.                        |
| `SHARE_POINT_UPDATE_LIST_ITEM`                      | Updates fields on an existing SharePoint list item using ETag concurrency control.                                           |
| `SHARE_POINT_UPDATE_SITE`                           | Updates properties of the current SharePoint site such as title and description.                                             |
| `SHARE_POINT_UPLOAD_FILE`                           | Uploads a file to a SharePoint document library or folder.                                                                   |

## Available actions: ACI

| Action                                          | Description                                                                                          |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `SHARE_POINT__GET_FILE_METADATA`                | Retrieves metadata for a file in SharePoint including size, modified date, and other properties.     |
| `SHARE_POINT__SEARCH_FOR_SITES`                 | Searches across the SharePoint tenant for sites matching provided keywords.                          |
| `SHARE_POINT__GET_ROOT_SITE`                    | Returns the root site of a SharePoint tenant.                                                        |
| `SHARE_POINT__GET_SITE_BY_ID`                   | Returns details for a SharePoint site identified by its unique site ID.                              |
| `SHARE_POINT__GET_SITE_BY_PATH`                 | Retrieves a SharePoint site using its hostname and server-relative URL path.                         |
| `SHARE_POINT__LIST_SUBSITES_FOR_A_SITE`         | Lists all subsites under a specified SharePoint site.                                                |
| `SHARE_POINT__LIST_DRIVES_FOR_A_SITE`           | Lists all document libraries (drives) available in a specified SharePoint site.                      |
| `SHARE_POINT__SERACH_FOR_ITEMS_IN_A_SITE_DRIVE` | Searches for files and folders in a SharePoint site's document library matching a query string.      |
| `SHARE_POINT__CREATE_FOLDER_IN_SITE_DRIVE`      | Creates a new folder in a SharePoint site's document library.                                        |
| `SHARE_POINT__DELETE_ITEM_IN_SITE_DRIVE`        | Deletes a file or folder from a SharePoint site's document library using its item ID.                |
| `SHARE_POINT__CREATE_LIST_IN_A_SITE`            | Creates a new list in a SharePoint site with a specified template and display name.                  |
| `SHARE_POINT__LIST_FILES`                       | Lists files and folders in a SharePoint site's root drive with support for filtering and pagination. |
| `SHARE_POINT__UPLOAD_FILE`                      | Uploads a file to a specified path in a SharePoint site's document library.                          |
| `SHARE_POINT__DOWNLOAD_FILE`                    | Downloads a file from SharePoint using the site ID and file path.                                    |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **SharePoint**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated document intake and organization**
When a new file is uploaded to a monitored SharePoint folder, an agent can retrieve its metadata, move it to the appropriate document library, and create a corresponding list item to track its status, eliminating manual filing steps.

**Cross-site content discovery and reporting**
An agent can search across SharePoint sites using keyword queries, retrieve matching documents and list items, and compile a summary report, useful for compliance audits, knowledge management, or content gap analysis.

**Permission and access management**
An agent can check a user's effective permissions on a site, add them to the appropriate SharePoint group, assign role definitions on specific lists or items, and confirm the changes, automating onboarding workflows that previously required manual admin intervention.
