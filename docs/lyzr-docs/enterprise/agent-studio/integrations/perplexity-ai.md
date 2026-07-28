> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Perplexity AI

Connect Perplexity AI to give your agents real-time web search capabilities
with cited answers.

## Setup

1. **Tools** → **Perplexity AI** → **Connect**
2. Enter your Perplexity API key
3. The tool is immediately available in all agent builders

Get an API key at [perplexity.ai/settings/api](https://www.perplexity.ai/settings/api).

## Available actions

| Action                              | Description                                                 |
| ----------------------------------- | ----------------------------------------------------------- |
| `PERPLEXITYAI_PERPLEXITY_AI_SEARCH` | Run a web search and return an answer with source citations |

## Configuration

When adding Perplexity to an agent, you can instruct it to:

* Search for recent news and developments on a topic
* Verify facts against current sources
* Research competitors or market landscape
* Find documentation or technical specifications

## Example use cases

**Research agent**: Takes a company name or topic, searches Perplexity for
recent news and analysis, and returns a structured briefing with sources.

**Fact-checker**: When an agent's KB answer contains a claim that may be
outdated, uses Perplexity to verify against current web sources.

**Competitive intelligence**: Monitors competitor activity by searching
Perplexity for announcements, product launches, and press coverage weekly.

## Note

Unlike tools that call structured APIs, Perplexity returns natural language
answers with citations. Structure the agent's instructions to extract specific
data points from the response if you need structured output.
