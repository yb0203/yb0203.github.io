> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Agent Studio

> No-code and low-code environment for building, testing, deploying, and monitoring AI agents.

Lyzr Agent Studio is the no-code and low-code environment for building, testing, deploying, and monitoring AI agents. It is the primary UI layer on top of the Lyzr Agent Framework.

## What you can build in Studio

* **Single agents:** chatbots, Q\&A bots, data analysts, voice agents
* **Multi-agent systems:** Manager Agent (dynamic) or SuperFlow (DAG-based)
* **Knowledge bases:** Classic (RAG), Knowledge Graph (Neo4j), Semantic Model (Text-to-SQL)
* **Voice agents:** phone bots with Realtime or Pipeline engine, Twilio/Telnyx/Plivo telephony

## Core sections

| Sidebar item    | What it does                                        |
| --------------- | --------------------------------------------------- |
| Agents          | Create and manage single agents                     |
| Voice           | Build and monitor voice agents                      |
| Managerial      | View and interact with Manager Agent orchestrations |
| SuperFlow       | Build visual DAG-based workflows                    |
| Knowledge Base  | Manage Classic KB, Knowledge Graph, Semantic Model  |
| Tools           | Connect and manage tool integrations                |
| Skills          | Manage reusable skill packages                      |
| Responsible AI  | Create and manage guardrail policies                |
| Global Context  | Set org-wide agent instructions                     |
| Data Connectors | Connect databases and vector stores                 |
| Traces          | Monitor agent runs, latency, and token usage        |
| Manage          | Team settings, roles, audit log, billing            |

## How Studio relates to the API

Every agent you create in Studio is immediately accessible via REST API. Studio is
a UI layer over the same agent infrastructure that the ADK and API access directly.
You can build an agent in Studio and then manage it programmatically via the ADK
— they're the same underlying agent.

## Next steps

* [Build your first agent](./agents/studio)
* [Connect a Knowledge Base](./knowledgebase/studiokb)
* [Set up a multi-agent workflow](./manageragent/studio)
* [Add Responsible AI guardrails](./responsible-safe-ai/Responsible)
