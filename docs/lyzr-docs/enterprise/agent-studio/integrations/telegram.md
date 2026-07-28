> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Telegram

Telegram is a cloud-based messaging platform that lets you build bots to send messages, manage chats, run polls, and interact with users at scale.

## Setup

1. In Agent Studio, go to **Tools** → **Telegram** → **Connect**
2. Paste your API key from the [Telegram BotFather](https://t.me/BotFather) dashboard

## Available actions

| Action                             | Description                                                                                                                  |
| ---------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `TELEGRAM_ANSWER_CALLBACK_QUERY`   | Send an answer to a callback query triggered by an inline keyboard button, displayed as a notification or alert to the user. |
| `TELEGRAM_DELETE_MESSAGE`          | Delete a specified message from a chat, subject to Telegram's deletion limitations.                                          |
| `TELEGRAM_EDIT_MESSAGE`            | Edit the text of a message previously sent by the bot.                                                                       |
| `TELEGRAM_EXPORT_CHAT_INVITE_LINK` | Generate a new primary invite link for a chat, revoking any previously generated primary link.                               |
| `TELEGRAM_FORWARD_MESSAGE`         | Forward any non-service message from one chat to another.                                                                    |
| `TELEGRAM_GET_CHAT`                | Retrieve up-to-date information about a chat, including its name, username, and other details.                               |
| `TELEGRAM_GET_CHAT_ADMINISTRATORS` | Get a list of all administrators (excluding bots) in a specified chat.                                                       |
| `TELEGRAM_GET_CHAT_HISTORY`        | Retrieve recent or historical messages from a chat using the bot's updates stream.                                           |
| `TELEGRAM_GET_CHAT_MEMBERS_COUNT`  | Get the total number of members in a specified chat.                                                                         |
| `TELEGRAM_GET_ME`                  | Retrieve basic profile information about the bot itself.                                                                     |
| `TELEGRAM_GET_UPDATES`             | Receive incoming updates for the bot using long polling.                                                                     |
| `TELEGRAM_SEND_DOCUMENT`           | Send a file or document to a Telegram chat by file ID, URL, or upload.                                                       |
| `TELEGRAM_SEND_LOCATION`           | Send a map location or live location pin to a Telegram chat.                                                                 |
| `TELEGRAM_SEND_MESSAGE`            | Send a text message to a specified Telegram chat or channel.                                                                 |
| `TELEGRAM_SEND_PHOTO`              | Send a photo to a Telegram chat by file ID, URL, or upload.                                                                  |
| `TELEGRAM_SEND_POLL`               | Send a native poll or quiz to a Telegram chat with configurable options and settings.                                        |
| `TELEGRAM_SET_MY_COMMANDS`         | Update the list of commands visible in the bot's command menu.                                                               |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Telegram**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Automated customer support notifications**
Connect your support pipeline to Telegram so that when a ticket is created or updated, the agent automatically sends a message to the relevant user or support channel with the latest status.

**Community engagement with polls**
Run scheduled polls in a Telegram group to gather user feedback or votes on upcoming features, then collect and summarize responses using `TELEGRAM_SEND_POLL` and `TELEGRAM_GET_UPDATES`.

**Alert broadcasting to channels**
Configure the agent to monitor an external data source (such as error logs or market data) and use `TELEGRAM_SEND_MESSAGE` to broadcast real-time alerts to a Telegram channel when thresholds are crossed.
