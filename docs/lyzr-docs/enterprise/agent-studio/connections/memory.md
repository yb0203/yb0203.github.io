> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Memory

> Configure agent memory: session context, cross-session persistence, and the Cognis memory provider.

Memory gives agents continuity. Without memory, every message starts a fresh context. With memory enabled, an agent maintains context across a conversation and, with Lyzr Cognis, across separate sessions entirely.

## Enabling memory on an agent

Memory is enabled per agent from the **Features** section in the Agent Builder, not from a global setting.

1. Open the agent in the Agent Builder.
2. Scroll to the **Features** section at the bottom of the Build tab.
3. Select the **Memory** card. It has a dashed border when enabled.
4. Select the settings icon on the Memory card to open the **Configure Memory** panel.
5. Choose a provider: Lyzr Cognis, Lyzr Memory, Amazon Bedrock AgentCore Memory, or another supported provider.
6. If using Amazon Bedrock, enter your AWS credentials and resource details.
7. Optionally add **Extraction Instructions** (see below).
8. Select **Update** to save.

<img src="https://mintcdn.com/lyzrinc/KL0td225zOmlZ1fc/assets/images/studio/new-memory.png?fit=max&auto=format&n=KL0td225zOmlZ1fc&q=85&s=a2a6ea00569389a421d21cc86a392d61" alt="Screenshot of the Agent Builder Features section showing Memory, Data Query, and Responsible AI feature cards, with Memory selected and highlighted with a dashed border." width="1134" height="1640" data-path="assets/images/studio/new-memory.png" />

## Extraction instructions

Extraction instructions tell the memory system what to pay attention to and store from each conversation. Without instructions, Cognis extracts memories automatically based on what it determines is significant. With instructions, you can tune what gets remembered for your specific use case.

Examples:

* "Remember the user's name, role, and preferred communication style."
* "Store any product names, pricing, or deal stages the user mentions."
* "Track action items and decisions the user commits to."

More specific extraction instructions improve recall precision, particularly for domain-specific agents where generic memory extraction may surface irrelevant context.

## Memory providers

### Lyzr Cognis (default)

Lyzr Cognis is the default memory provider for all agents in Lyzr Studio. It is designed for production workloads where cross-session context and temporal accuracy matter.

Key capabilities:

* **Cross-session persistence**: Cognis remembers users across separate sessions. If a user returns days or weeks later, the agent retains knowledge of previous interactions, preferences, and outcomes.
* **Temporal awareness**: Cognis understands the timing and sequence of interactions, so references like "last week" resolve correctly relative to the conversation history.
* **Matryoshka embeddings**: An embedding technique that optimizes both search accuracy and storage efficiency across retrieval tasks.

Benchmark results: 92.4% accuracy on LongMemEval (500 multi-session reasoning questions), highest F1 on LoCoMo in single-hop, multi-hop, temporal, and open-domain recall.

### Lyzr Memory

Standard built-in memory for simpler single-session use cases. Lower overhead than Cognis, suitable for agents that do not need long-term user context.

### Amazon Bedrock AgentCore Memory

For organizations that require data sovereignty, this option stores all memory data within your own AWS account. Requires valid AWS credentials (access key and secret key), an existing Bedrock AgentCore Memory resource, and IAM permissions for that resource.

### Additional providers

Lyzr Studio supports further memory providers beyond the three above. Most require their own credentials, which you enter in the **Configure Memory** panel after you select the provider.

| Provider              | Description                                                                                      |
| --------------------- | ------------------------------------------------------------------------------------------------ |
| GBrain                | Per-user isolated memory with hybrid search and graph traversal, built on Postgres and pgvector. |
| Mem0 Memory           | AI-powered memory layer with semantic search and automatic fact extraction.                      |
| SuperMemory           | Fast, scalable memory with RAG capabilities for context management.                              |
| Azure AI Foundry      | Managed long-term agent memory on Azure AI Foundry, using LLM-based extraction.                  |
| Vertex AI Memory Bank | Managed long-term memory using LLM-based extraction, on your own Google Cloud account.           |
| Vertex AI Sessions    | Managed raw conversation history for short-term context, on your own Google Cloud account.       |

## Memory vs. Knowledge Base

|                | Memory                                          | Knowledge Base                       |
| -------------- | ----------------------------------------------- | ------------------------------------ |
| What it stores | Conversation history and user profile           | Documents, websites, structured data |
| Updated by     | Conversations automatically                     | Manual upload or scheduled sync      |
| Retrieved by   | Session ID or user ID                           | Semantic search query                |
| Use case       | Personalizing responses, maintaining continuity | Grounding answers in source material |

## How memory works at runtime

1. The user sends a message. The agent looks up relevant memories by session ID or user ID.
2. Relevant memories are injected into the agent's context window alongside the current conversation and any Knowledge Base results.
3. The agent generates a response.
4. Cognis automatically stores and updates memories from the new interaction. Older memories are summarized; the most relevant are surfaced first.

## Cognis as a standalone service

Cognis is also available as a standalone API you can add to any agent framework outside Lyzr Studio. Access it via REST API (add, search, update, and delete memories programmatically) or via MCP Server (plug Cognis into Cursor, Claude Desktop, Zed, or any MCP-compatible host).

See [Cognis](../../lyzr-blocks/cognis/overview) in Lyzr Blocks for API endpoints, MCP setup, memory types, and advanced configuration.
