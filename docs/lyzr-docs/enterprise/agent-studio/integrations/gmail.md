> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Gmail

Gmail lets your agents send, read, and manage emails through your Google account, supporting full message and thread operations, drafts, labels, and contact lookup.

## Setup

1. In Agent Studio, go to **Tools** → **Gmail** → **Connect**
2. Sign in with your Google account and authorize access
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

| Action                              | Description                                                                                                               |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| `GMAIL_ADD_LABEL_TO_EMAIL`          | Adds or removes specified labels from a Gmail message.                                                                    |
| `GMAIL_CREATE_EMAIL_DRAFT`          | Creates a Gmail draft with support for to/cc/bcc, subject, plain or HTML body, attachments, and thread replies.           |
| `GMAIL_CREATE_LABEL`                | Creates a new label with a unique name in the user's Gmail account.                                                       |
| `GMAIL_DELETE_DRAFT`                | Permanently deletes a specific Gmail draft by its ID.                                                                     |
| `GMAIL_DELETE_MESSAGE`              | Permanently deletes a specific email message from a Gmail mailbox.                                                        |
| `GMAIL_FETCH_EMAILS`                | Fetches a list of email messages from a Gmail account with support for filtering, pagination, and full content retrieval. |
| `GMAIL_FETCH_MESSAGE_BY_MESSAGE_ID` | Fetches a specific email message by its ID.                                                                               |
| `GMAIL_FETCH_MESSAGE_BY_THREAD_ID`  | Retrieves all messages in a Gmail thread using the thread ID.                                                             |
| `GMAIL_GET_ATTACHMENT`              | Retrieves a specific attachment by ID from a Gmail message.                                                               |
| `GMAIL_GET_CONTACTS`                | Fetches contacts from the authenticated Google account, with support for field selection and pagination.                  |
| `GMAIL_GET_PEOPLE`                  | Retrieves details for a specific person or lists other contacts from the Google People API.                               |
| `GMAIL_GET_PROFILE`                 | Retrieves key Gmail profile information including email address and message/thread totals.                                |
| `GMAIL_LIST_DRAFTS`                 | Retrieves a paginated list of email drafts from the user's Gmail account.                                                 |
| `GMAIL_LIST_LABELS`                 | Retrieves a list of all system and user-created labels in the Gmail account.                                              |
| `GMAIL_LIST_THREADS`                | Retrieves a list of email threads from a Gmail account with filtering and pagination support.                             |
| `GMAIL_MODIFY_THREAD_LABELS`        | Adds or removes labels from all messages in a Gmail thread.                                                               |
| `GMAIL_MOVE_TO_TRASH`               | Moves an email message to the trash.                                                                                      |
| `GMAIL_PATCH_LABEL`                 | Updates the display name, color, or visibility settings of an existing Gmail label.                                       |
| `GMAIL_REMOVE_LABEL`                | Permanently deletes a user-created Gmail label by its ID.                                                                 |
| `GMAIL_REPLY_TO_THREAD`             | Sends a reply within a specific Gmail thread, with support for attachments.                                               |
| `GMAIL_SEARCH_PEOPLE`               | Searches contacts by matching a query against names, emails, phone numbers, and organizations.                            |
| `GMAIL_SEND_DRAFT`                  | Sends an existing draft to the recipients defined in its headers.                                                         |
| `GMAIL_SEND_EMAIL`                  | Sends an email via the Gmail API, supporting HTML body, attachments, and multiple recipients.                             |

## Available actions: ACI

| Action                    | Description                                                                       |
| ------------------------- | --------------------------------------------------------------------------------- |
| `GMAIL__SEND_EMAIL`       | Sends an email on behalf of the authenticated user.                               |
| `GMAIL__MESSAGES_LIST`    | Lists messages in the user's mailbox, with optional filtering by query and label. |
| `GMAIL__MESSAGES_GET`     | Retrieves the full content of a specific message by its ID.                       |
| `GMAIL__MESSAGES_TRASH`   | Moves a specific message to the trash.                                            |
| `GMAIL__MESSAGES_UNTRASH` | Removes a specific message from the trash.                                        |
| `GMAIL__MESSAGES_MODIFY`  | Adds or removes labels on a specific message.                                     |
| `GMAIL__LABELS_LIST`      | Lists all labels in the user's mailbox.                                           |
| `GMAIL__LABELS_GET`       | Retrieves a specific label by its ID.                                             |
| `GMAIL__LABELS_CREATE`    | Creates a new label in the user's Gmail account.                                  |
| `GMAIL__LABELS_UPDATE`    | Updates the name, color, or visibility of an existing label.                      |
| `GMAIL__LABELS_DELETE`    | Deletes the specified label.                                                      |
| `GMAIL__DRAFTS_LIST`      | Lists all drafts in the user's mailbox.                                           |
| `GMAIL__DRAFTS_CREATE`    | Creates an email draft on behalf of the user.                                     |
| `GMAIL__DRAFTS_GET`       | Retrieves a specific draft by its ID.                                             |
| `GMAIL__DRAFTS_UPDATE`    | Updates the content of an existing draft.                                         |
| `GMAIL__DRAFTS_DELETE`    | Permanently deletes a specific draft.                                             |
| `GMAIL__DRAFTS_SEND`      | Sends an existing draft by its ID.                                                |
| `GMAIL__THREADS_LIST`     | Lists email threads in the user's mailbox with optional filtering.                |
| `GMAIL__THREADS_GET`      | Retrieves all messages in a specific thread.                                      |
| `GMAIL__THREADS_MODIFY`   | Adds or removes labels applied to an entire thread.                               |
| `GMAIL__THREADS_TRASH`    | Moves a specific thread to the trash.                                             |
| `GMAIL__THREADS_UNTRASH`  | Removes a specific thread from the trash.                                         |
| `GMAIL__THREADS_DELETE`   | Immediately and permanently deletes a specific thread.                            |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Gmail**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated customer support responses**
An agent monitors the inbox for incoming support emails using `GMAIL_FETCH_EMAILS`, categorizes them by topic, and sends replies using `GMAIL_SEND_EMAIL`, reducing response time without manual intervention.

**Email digest and summarization**
An agent fetches unread threads each morning with `GMAIL_LIST_THREADS`, reads the full content of each with `GMAIL_FETCH_MESSAGE_BY_THREAD_ID`, and sends a summarized digest to a team Slack channel or back to the user's inbox.

**Automated follow-up drafts**
An agent detects unanswered emails older than 48 hours using `GMAIL_FETCH_EMAILS` with a date filter, creates follow-up drafts with `GMAIL_CREATE_EMAIL_DRAFT`, and applies a custom label via `GMAIL_ADD_LABEL_TO_EMAIL` to track pending responses.
