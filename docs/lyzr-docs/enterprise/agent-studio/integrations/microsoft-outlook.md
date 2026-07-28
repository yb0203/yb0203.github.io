> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Microsoft Outlook

The Microsoft Outlook tool connects your agents to the Microsoft Graph Outlook API, enabling them to read, send, organize, and manage emails and mail folders in a user's Outlook mailbox.

## Setup

1. In Agent Studio, go to **Tools** → **Microsoft Outlook** → **Connect**
2. Sign in with your Microsoft account and authorize access
3. Review the requested permissions and click **Allow**

## Available actions

| Action                                        | Description                                                                                                             |
| --------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `MICROSOFT_OUTLOOK__LIST_MESSAGES`            | List email messages from the user's inbox.                                                                              |
| `MICROSOFT_OUTLOOK__GET_MESSAGE`              | Retrieve a specific email message by ID with full details including sender, recipients, subject, body, and attachments. |
| `MICROSOFT_OUTLOOK__CREATE_DRAFT_MESSAGE`     | Create a new email draft saved to the Drafts folder, with support for recipients, subject, body, and importance level.  |
| `MICROSOFT_OUTLOOK__CREATE_MESSAGE_IN_FOLDER` | Create a new message directly in a specified mail folder, with full recipient and body configuration.                   |
| `MICROSOFT_OUTLOOK__SEND`                     | Send an existing draft message and save it to the Sent Items folder.                                                    |
| `MICROSOFT_OUTLOOK__REPLY`                    | Send an immediate reply to the sender of a message, saving it to the Sent Items folder.                                 |
| `MICROSOFT_OUTLOOK__REPLY_ALL`                | Send an immediate reply to all recipients of a message and save it to the Sent Items folder.                            |
| `MICROSOFT_OUTLOOK__CREATE_REPLY`             | Create a draft reply to an existing message, pre-populated with the original sender as the recipient.                   |
| `MICROSOFT_OUTLOOK__CREATE_REPLY_ALL`         | Create a draft reply-all to an existing message, automatically including all original To and CC recipients.             |
| `MICROSOFT_OUTLOOK__FORWARD`                  | Forward a message immediately to specified recipients with an optional comment.                                         |
| `MICROSOFT_OUTLOOK__CREATE_FORWARD`           | Create a draft forward of an existing message that can be edited before sending.                                        |
| `MICROSOFT_OUTLOOK__COPY_MESSAGE`             | Copy a message to another folder in the mailbox using a folder ID or well-known folder name.                            |
| `MICROSOFT_OUTLOOK__DELETE_MESSAGE`           | Move a specific email message to the Deleted Items folder.                                                              |
| `MICROSOFT_OUTLOOK__PERMANENT_DELETE`         | Permanently delete a message, placing it in the purges folder where it cannot be recovered by email clients.            |
| `MICROSOFT_OUTLOOK__LIST_MAIL_FOLDERS`        | List all mail folders directly under the root of the user's mailbox, with optional support for hidden folders.          |
| `MICROSOFT_OUTLOOK__GET_MAIL_FOLDER`          | Retrieve the properties and relationships of a specific mail folder by its ID.                                          |
| `MICROSOFT_OUTLOOK__CREATE_MAIL_FOLDER`       | Create a new mail folder at the root of the user's mailbox with a specified display name.                               |
| `MICROSOFT_OUTLOOK__UPDATE_MAIL_FOLDER`       | Rename an existing mail folder by updating its display name.                                                            |
| `MICROSOFT_OUTLOOK__DELETE_MAIL_FOLDER`       | Delete a mail folder by its ID or well-known folder name.                                                               |
| `MICROSOFT_OUTLOOK__COPY_MAIL_FOLDER`         | Copy a mail folder and all its contents to another mail folder.                                                         |
| `MICROSOFT_OUTLOOK__CREATE_CHILD_FOLDER`      | Create a new subfolder under a specified parent mail folder for hierarchical organization.                              |
| `MICROSOFT_OUTLOOK__LIST_CHILD_FOLDERS`       | List all child folders under a specified parent mail folder, with optional hidden folder support.                       |
| `MICROSOFT_OUTLOOK__LIST_MESSAGES_IN_FOLDER`  | Retrieve all messages in a specified mail folder with support for filtering, sorting, and pagination.                   |
| `MICROSOFT_OUTLOOK__DELTA_MAIL_FOLDERS`       | Get incremental changes to mail folders since the last sync, enabling efficient mailbox synchronization.                |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Microsoft Outlook**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated email triage and routing**
An agent monitors the inbox using `MICROSOFT_OUTLOOK__LIST_MESSAGES`, reads each message with `MICROSOFT_OUTLOOK__GET_MESSAGE`, and moves or copies emails to the appropriate folder based on content, such as routing support requests to a dedicated folder.

**Draft and send follow-up emails**
A sales assistant agent uses `MICROSOFT_OUTLOOK__CREATE_DRAFT_MESSAGE` to compose personalized follow-up emails after customer interactions, then calls `MICROSOFT_OUTLOOK__SEND` to dispatch them once reviewed.

**Incremental mailbox synchronization**
A workflow automation agent uses `MICROSOFT_OUTLOOK__DELTA_MAIL_FOLDERS` to efficiently track new or changed folders without fetching the entire mailbox on every run, keeping downstream systems up to date with minimal API calls.
