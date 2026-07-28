> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Trello

Trello is a web-based kanban-style project management application that lets you organize tasks into boards, lists, and cards to track work across teams and projects.

## Setup

1. In Agent Studio, go to **Tools** → **Trello** → **Connect**
2. Sign in with your Trello account and authorize access
3. Review the requested permissions and click **Allow**

## Available actions

| Action                                                             | Description                                                                                                                  |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `TRELLO_ADD_BOARDS`                                                | Creates a new Trello board with a required name and optional preferences.                                                    |
| `TRELLO_ADD_BOARDS_CALENDAR_KEY_GENERATE_BY_ID_BOARD`              | Generates a new calendar key for a Trello board, invalidating any previous key.                                              |
| `TRELLO_ADD_BOARDS_CHECKLISTS_BY_ID_BOARD`                         | Creates a new, initially empty checklist with a given name on an existing Trello board.                                      |
| `TRELLO_ADD_BOARDS_EMAIL_KEY_GENERATE_BY_ID_BOARD`                 | Generates a new email key for a board to enable or reset adding cards via email.                                             |
| `TRELLO_ADD_BOARDS_LABELS_BY_ID_BOARD`                             | Creates a new label on an existing Trello board.                                                                             |
| `TRELLO_ADD_BOARDS_LISTS_BY_ID_BOARD`                              | Creates a new, empty list on a specified Trello board to use as a column or category for cards.                              |
| `TRELLO_ADD_BOARDS_MARK_AS_VIEWED_BY_ID_BOARD`                     | Marks a Trello board as viewed for the current user, updating its position in user-specific lists.                           |
| `TRELLO_ADD_BOARDS_POWER_UPS_BY_ID_BOARD`                          | Enables a specified built-in Power-Up on a Trello board.                                                                     |
| `TRELLO_ADD_CARDS`                                                 | Creates a new card in a Trello list with optional due dates, labels, members, and description.                               |
| `TRELLO_ADD_CARDS_ACTIONS_COMMENTS_BY_ID_CARD`                     | Adds a new text comment, supporting @mentions, to a specified Trello card.                                                   |
| `TRELLO_ADD_CARDS_ATTACHMENTS_BY_ID_CARD`                          | Adds an attachment to a Trello card by uploading a file or linking a URL.                                                    |
| `TRELLO_ADD_CARDS_CHECKLIST_CHECK_ITEM_BY_ID_CARD_BY_ID_CHECKLIST` | Adds a new check item to an existing checklist on a specific Trello card.                                                    |
| `TRELLO_ADD_CARDS_CHECKLISTS_BY_ID_CARD`                           | Adds a checklist to a Trello card, either from scratch, by copying an existing one, or by referencing an existing checklist. |
| `TRELLO_ADD_CARDS_ID_LABELS_BY_ID_CARD`                            | Adds an existing board label to a Trello card by label ID.                                                                   |
| `TRELLO_ADD_CARDS_ID_MEMBERS_BY_ID_CARD`                           | Assigns a Trello member to a specific card by card ID and member ID.                                                         |
| `TRELLO_ADD_CARDS_LABELS_BY_ID_CARD`                               | Adds a label to an existing Trello card by name and color, creating a new board label if needed.                             |
| `TRELLO_ADD_CARDS_MEMBERS_VOTED_BY_ID_CARD`                        | Casts a vote for a specified member on a Trello card.                                                                        |
| `TRELLO_ADD_CARDS_STICKERS_BY_ID_CARD`                             | Adds a sticker to a Trello card with configurable position, rotation, and z-index.                                           |
| `TRELLO_ADD_CHECKLISTS`                                            | Creates a new checklist on a Trello card by name or by copying an existing checklist.                                        |
| `TRELLO_ADD_CHECKLISTS_CHECK_ITEMS_BY_ID_CHECKLIST`                | Adds a new check item to a specified Trello checklist.                                                                       |
| `TRELLO_ADD_LABELS`                                                | Creates a new named label with a color on a specified Trello board.                                                          |
| `TRELLO_ADD_LISTS`                                                 | Creates a new list on a specified Trello board with options to set position and copy from a source.                          |
| `TRELLO_ADD_LISTS_ARCHIVE_ALL_CARDS_BY_ID_LIST`                    | Archives all cards in a Trello list at once.                                                                                 |
| `TRELLO_ADD_LISTS_CARDS_BY_ID_LIST`                                | Creates a new card in a specified Trello list with optional name, description, due date, and members.                        |
| `TRELLO_ADD_LISTS_MOVE_ALL_CARDS_BY_ID_LIST`                       | Moves all cards from a Trello list to a different board, emptying the source list.                                           |
| `TRELLO_ADD_MEMBERS_AVATAR_BY_ID_MEMBER`                           | Updates a Trello member's avatar using a base64-encoded image.                                                               |
| `TRELLO_ADD_MEMBERS_BOARD_BACKGROUNDS_BY_ID_MEMBER`                | Adds a custom board background image to a Trello member's collection.                                                        |
| `TRELLO_ADD_MEMBERS_BOARD_STARS_BY_ID_MEMBER`                      | Stars a Trello board for a member to mark it as a favorite.                                                                  |
| `TRELLO_ADD_MEMBERS_CUSTOM_BOARD_BACKGROUNDS_BY_ID_MEMBER`         | Adds a new custom board background for a specified Trello member.                                                            |
| `TRELLO_ADD_MEMBERS_CUSTOM_EMOJI_BY_ID_MEMBER`                     | Adds a new custom emoji by image and name to a Trello member's account.                                                      |
| `TRELLO_ADD_MEMBERS_CUSTOM_STICKERS_BY_ID_MEMBER`                  | Uploads a custom sticker image to a Trello member's sticker collection.                                                      |
| `TRELLO_ADD_MEMBERS_SAVED_SEARCHES_BY_ID_MEMBER`                   | Creates a new saved search with a name and query for a Trello member.                                                        |
| `TRELLO_ADD_NOTIFICATIONS_ALL_READ`                                | Marks all Trello notifications for the authenticated user as read across all boards.                                         |
| `TRELLO_ADD_ORGANIZATIONS`                                         | Creates a new Trello organization (workspace) with a display name and optional settings.                                     |
| `TRELLO_ADD_ORGANIZATIONS_LOGO_BY_ID_ORG`                          | Sets or updates the logo image for a Trello organization.                                                                    |
| `TRELLO_ADD_SESSIONS`                                              | Creates or updates a Trello user session with an optional board association and activity status.                             |
| `TRELLO_ADD_TOKENS_WEBHOOKS_BY_TOKEN`                              | Creates a webhook for a Trello token to send notifications to a callback URL when a model changes.                           |
| `TRELLO_CONVERT_CHECKLIST_ITEM_TO_CARD`                            | Converts a checklist item into a new Trello card, promoting a subtask to a full card.                                        |
| `TRELLO_DELETE_ACTIONS_BY_ID_ACTION`                               | Deletes a specific Trello action (such as a comment) by its ID.                                                              |
| `TRELLO_DELETE_BOARDS_MEMBERS_BY_ID_BOARD_BY_ID_MEMBER`            | Permanently removes a member from a Trello board, revoking their access.                                                     |
| `TRELLO_DELETE_BOARDS_POWER_UPS_BY_ID_BOARD_BY_POWER_UP`           | Disables a Power-Up on a Trello board by board ID and Power-Up ID.                                                           |
| `TRELLO_DELETE_CARDS_ACTIONS_COMMENTS_BY_ID_CARD_BY_ID_ACTION`     | Deletes a specific comment from a Trello card by action ID.                                                                  |
| `TRELLO_DELETE_CARDS_ATTACHMENTS_BY_ID_CARD_BY_ID_ATTACHMENT`      | Permanently removes a specified attachment from a Trello card.                                                               |
| `TRELLO_DELETE_CARDS_BY_ID_CARD`                                   | Permanently deletes an archived Trello card by its ID.                                                                       |
| `TRELLO_DELETE_CARDS_CHECKLISTS_BY_ID_CARD_BY_ID_CHECKLIST`        | Permanently deletes a specific checklist from a Trello card.                                                                 |
| `TRELLO_DELETE_CARDS_ID_LABELS_BY_ID_CARD_BY_ID_LABEL`             | Removes a specific label from a Trello card without deleting the label from the board.                                       |
| `TRELLO_DELETE_CARDS_ID_MEMBERS_BY_ID_CARD_BY_ID_MEMBER`           | Removes an assigned member from a Trello card.                                                                               |
| `TRELLO_DELETE_CARDS_LABELS_BY_ID_CARD_BY_COLOR`                   | Removes a label of a specific color from a Trello card.                                                                      |
| `TRELLO_DELETE_CARDS_MEMBERS_VOTED_BY_ID_CARD_BY_ID_MEMBER`        | Removes a member's vote from a Trello card.                                                                                  |
| `TRELLO_DELETE_CARDS_STICKERS_BY_ID_CARD_BY_ID_STICKER`            | Permanently removes a specific sticker from a Trello card.                                                                   |
| `TRELLO_DELETE_CHECKLIST_ITEM`                                     | Permanently deletes a specific check item from a checklist on a Trello card.                                                 |
| `TRELLO_DELETE_CHECKLISTS_BY_ID_CHECKLIST`                         | Permanently deletes a Trello checklist and all its items.                                                                    |
| `TRELLO_DELETE_LABELS_BY_ID_LABEL`                                 | Permanently deletes an existing label from a Trello board by its ID.                                                         |
| `TRELLO_DELETE_MEMBER_BOARD_BACKGROUND`                            | Permanently deletes a custom board background belonging to a Trello member.                                                  |
| `TRELLO_DELETE_MEMBER_CUSTOM_STICKER`                              | Deletes a custom sticker from a Trello member's collection.                                                                  |
| `TRELLO_DELETE_MEMBER_SAVED_SEARCH`                                | Permanently deletes a specific saved search for a Trello member.                                                             |
| `TRELLO_DELETE_MEMBERS_BOARD_STARS_BY_ID_MEMBER_BY_ID_BOARD_STAR`  | Removes a specific starred board from a Trello member's favorites list.                                                      |
| `TRELLO_DELETE_ORGANIZATIONS_BY_ID_ORG`                            | Permanently deletes a Trello organization and all its associated data.                                                       |
| `TRELLO_DELETE_ORGANIZATIONS_LOGO_BY_ID_ORG`                       | Deletes a Trello organization's custom logo, restoring the default.                                                          |
| `TRELLO_DELETE_ORGANIZATIONS_MEMBERS_ALL_BY_ID_ORG_BY_ID_MEMBER`   | Removes a member entirely from a Trello organization including all its boards and cards.                                     |
| `TRELLO_DELETE_ORGANIZATIONS_MEMBERS_BY_ID_ORG_BY_ID_MEMBER`       | Permanently removes a member from a Trello organization, revoking all access.                                                |
| `TRELLO_DELETE_ORGANIZATIONS_PREFS_ORG_INVITE_RESTRICT_BY_ID_ORG`  | Removes a previously set email domain invitation restriction from a Trello organization.                                     |
| `TRELLO_DELETE_ORG_ASSOCIATED_DOMAIN`                              | Removes an associated email domain from a Trello organization's preferences.                                                 |
| `TRELLO_DELETE_TOKENS_BY_TOKEN`                                    | Permanently deletes a specific Trello API token, revoking its access.                                                        |
| `TRELLO_DELETE_TOKENS_WEBHOOKS_BY_TOKEN_BY_ID_WEBHOOK`             | Deletes an existing webhook by ID, stopping its notifications.                                                               |
| `TRELLO_DELETE_WEBHOOKS_BY_ID_WEBHOOK`                             | Permanently deletes an existing Trello webhook by its ID, stopping future notifications.                                     |
| `TRELLO_DISMISS_MEMBER_MESSAGE`                                    | Dismisses a specific one-time message for a Trello member so it is not displayed again.                                      |
| `TRELLO_GET_ACTIONS_BOARD_BY_ID_ACTION`                            | Retrieves details for the Trello board associated with a specific action ID.                                                 |
| `TRELLO_GET_ACTIONS_BOARD_BY_ID_ACTION_BY_FIELD`                   | Retrieves a specified field from the Trello board associated with a given action ID.                                         |
| `TRELLO_GET_ACTIONS_BY_ID_ACTION`                                  | Retrieves detailed information about a specific Trello action by its ID.                                                     |
| `TRELLO_GET_ACTIONS_BY_ID_ACTION_BY_FIELD`                         | Retrieves the value of a specific field from a Trello action by its ID.                                                      |
| `TRELLO_GET_ACTIONS_CARD_BY_ID_ACTION`                             | Retrieves Trello card details for a given action ID, for actions linked to a card.                                           |
| `TRELLO_GET_ACTIONS_CARD_BY_ID_ACTION_BY_FIELD`                    | Retrieves a specific field from the Trello card associated with a given action ID.                                           |
| `TRELLO_GET_ACTIONS_DISPLAY_BY_ID_ACTION`                          | Retrieves a display-friendly representation of a Trello action for UI or reporting purposes.                                 |
| `TRELLO_GET_ACTIONS_ENTITIES_BY_ID_ACTION`                         | Retrieves all entities (boards, lists, cards, members) associated with a specific Trello action.                             |
| `TRELLO_GET_ACTIONS_LIST_BY_ID_ACTION`                             | Retrieves the Trello list associated with a specific action ID, for actions linked to a list.                                |
| `TRELLO_GET_ACTIONS_LIST_BY_ID_ACTION_BY_FIELD`                    | Retrieves a specific field of the list associated with a Trello action.                                                      |
| `TRELLO_GET_ACTIONS_MEMBER_BY_ID_ACTION`                           | Retrieves details of the Trello member who performed a specific action.                                                      |
| `TRELLO_GET_ACTIONS_MEMBER_BY_ID_ACTION_BY_FIELD`                  | Fetches a specific field of a member associated with a given Trello action.                                                  |
| `TRELLO_GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION`                   | Retrieves details about the Trello member who created a specific action.                                                     |
| `TRELLO_GET_ACTIONS_MEMBER_CREATOR_BY_ID_ACTION_BY_FIELD`          | Gets a specific field for the creator of a Trello action.                                                                    |
| `TRELLO_GET_ACTIONS_ORGANIZATION_BY_ID_ACTION`                     | Fetches the organization details associated with a given Trello action.                                                      |
| `TRELLO_GET_ACTIONS_ORGANIZATION_BY_ID_ACTION_BY_FIELD`            | Retrieves the value of a specific field for the organization associated with a Trello action.                                |
| `TRELLO_GET_BATCH`                                                 | Executes multiple Trello API GET requests in a single batch operation for efficient bulk data retrieval.                     |
| `TRELLO_GET_BOARDS_ACTIONS_BY_ID_BOARD`                            | Retrieves actions such as card creations and comments for a Trello board, useful for activity tracking.                      |
| `TRELLO_GET_BOARDS_BOARD_STARS_BY_ID_BOARD`                        | Retrieves board stars (user-marked favorites) for a specified Trello board.                                                  |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Trello**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated sprint board management**
An agent monitors a project management tool and automatically creates Trello cards in the appropriate list when new tasks are assigned, adding due dates, labels, and member assignments so the board stays up to date without manual entry.

**Daily standup digest**
An agent retrieves all board actions from the past 24 hours using `TRELLO_GET_BOARDS_ACTIONS_BY_ID_BOARD`, summarizes card movements and new comments, and posts a structured standup update to a team channel each morning.

**Task promotion from checklists**
When a checklist item is flagged as a high-priority subtask, an agent uses `TRELLO_CONVERT_CHECKLIST_ITEM_TO_CARD` to promote it to a full card, then assigns the right team member and sets a due date so it receives proper attention in the backlog.
