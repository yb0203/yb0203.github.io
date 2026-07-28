> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Brave Search

Brave Search gives your agents access to Brave's independent search index, enabling web, image, video, and news searches without relying on third-party data providers.

## Setup

1. In Agent Studio, go to **Tools** → **Brave Search** → **Connect**
2. Paste your API key from the [Brave Search API dashboard](https://api.search.brave.com/)

## Available actions

| Action                       | Description                                                                    |
| ---------------------------- | ------------------------------------------------------------------------------ |
| `BRAVE_SEARCH__WEB_SEARCH`   | Searches the web using Brave's index and returns ranked results with snippets. |
| `BRAVE_SEARCH__IMAGE_SEARCH` | Searches for images on the web using Brave's search index.                     |
| `BRAVE_SEARCH__VIDEO_SEARCH` | Searches for videos on the web using Brave's search index.                     |
| `BRAVE_SEARCH__NEWS_SEARCH`  | Searches for recent news articles using Brave's search index.                  |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **Brave Search**
3. Select only the actions your agent needs
4. Set auth mode: **Shared** (agent acts on one account) or **Per-user** (each end-user connects their own account)

## Example use cases

**Real-time research assistant**
Build an agent that answers user questions by running live web searches through Brave, returning up-to-date information that goes beyond the model's training data.

**News monitoring and summarization**
Use the news search action to have an agent track breaking stories on specific topics, such as competitor activity or industry trends, and deliver daily digests to your team.

**Visual content discovery**
Combine image and video search actions to build an agent that finds relevant visual assets or reference media for creative briefs, marketing campaigns, or product research tasks.
