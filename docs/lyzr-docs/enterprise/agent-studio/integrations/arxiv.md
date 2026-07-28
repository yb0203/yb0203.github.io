> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# ArXiv

ArXiv is an open-access repository tool that lets your agent search, retrieve metadata, download, and monitor the latest academic papers across scientific disciplines.

## Setup

1. In Agent Studio, go to **Tools** → **ArXiv** → **Connect**
2. No authentication required, the tool is ready to use immediately.

## Available actions

| Action                      | Description                                                                                                                                          |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ARXIV__SEARCH_PAPERS`      | Search for papers on arXiv using keywords, Boolean operators, field-specific queries, and category filters, with support for sorting and pagination. |
| `ARXIV__GET_PAPER_METADATA` | Retrieve detailed metadata for a specific arXiv paper by its ID, including title, authors, abstract, and publication date.                           |
| `ARXIV__DOWNLOAD_PAPER`     | Download a specific arXiv paper in PDF format using its arXiv ID.                                                                                    |
| `ARXIV__GET_CATEGORIES`     | Retrieve the full list of available subject categories on arXiv.                                                                                     |
| `ARXIV__GET_DAILY_UPDATES`  | Retrieve the most recently submitted papers from one or more arXiv categories, sorted by submission date.                                            |

## Adding to an agent

1. Open your agent in **Agent Studio → Agent Builder**
2. Go to **Tools** and enable **ArXiv**
3. Select only the actions your agent needs
4. Set auth mode: **No auth needed**

## Example use cases

**Daily research digest**
Configure an agent to call `ARXIV__GET_DAILY_UPDATES` each morning for categories like `cat:cs.AI` and `cat:cs.LG`, then summarize the most relevant new papers for your team.

**Literature review assistant**
Use `ARXIV__SEARCH_PAPERS` to find papers matching a research topic, then follow up with `ARXIV__GET_PAPER_METADATA` to collect structured details on each result for citation management or summarization.

**On-demand paper fetcher**
Build an agent that accepts an arXiv ID from a user, calls `ARXIV__GET_PAPER_METADATA` to confirm the paper, and uses `ARXIV__DOWNLOAD_PAPER` to retrieve the PDF for local storage or further processing.
