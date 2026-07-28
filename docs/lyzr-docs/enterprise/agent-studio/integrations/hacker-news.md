> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Hacker News

Hacker News is a social news aggregator focused on computer science and entrepreneurship, run by Y Combinator, that lets agents read top stories, fetch individual items, and look up user profiles and submissions.

## Setup

1. In Agent Studio, go to **Tools** → **Hacker News** → **Connect**
2. No authentication required, the tool is ready to use immediately.

## Available actions

| Action                          | Description                                                         |
| ------------------------------- | ------------------------------------------------------------------- |
| `HACKERNEWS__TOP_STORIES_GET`   | Fetch the current list of top stories from Hacker News.             |
| `HACKERNEWS__ITEM_GET`          | Fetch a specific story or comment by its item ID.                   |
| `HACKERNEWS__USER_GET`          | Fetch profile information for a Hacker News user by their user ID.  |
| `HACKERNEWS__USER_STORIES_GET`  | Fetch all stories submitted by a specific Hacker News user.         |
| `HACKERNEWS__USER_RECEIVED_GET` | Fetch stories and comments received by a specific Hacker News user. |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Hacker News**
3. Select only the actions your agent needs
4. Set auth mode: **No auth needed**

## Example use cases

**Daily tech news briefing**
An agent fetches the current top stories from Hacker News each morning and summarizes the most relevant headlines for a developer team's daily standup digest.

**Story and discussion deep-dive**
Given a story ID shared in a Slack message, an agent retrieves the full item details and threads through comments to produce a concise summary of the community discussion.

**User activity research**
An agent looks up a Hacker News user's profile and submitted stories to quickly surface their posting history, karma, and areas of technical interest for outreach or research purposes.
