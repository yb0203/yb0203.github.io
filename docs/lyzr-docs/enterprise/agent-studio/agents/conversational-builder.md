> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Conversational Builder

> Create and refine agents by describing what you want in plain English.

The Conversational Builder is the entry point on the Studio home screen. Describe what you want to build, Studio asks follow-up questions, and generates an initial agent configuration automatically. Use it to get a working draft quickly, then switch to the Studio Builder to fine-tune any setting the conversational flow does not expose.

## What the Conversational Builder configures

From a natural-language description, the builder can set up the following:

* Agent role, goal, and instructions
* Model selection
* Knowledge Base setup
* Tool connections
* Manager Agent orchestration for multi-agent setups

## Build an agent conversationally

1. On the Studio home screen, type a description of the agent you want to build. Be specific about the domain, the task, and who the agent is for.

2. Answer the follow-up questions Studio asks. These typically cover tone, tools the agent needs, what data it should have access to, and how it should handle edge cases.

3. Review the generated configuration. Studio populates the role, goal, and instructions based on your answers.

4. Continue refining in the same conversation. You can add constraints, adjust the persona, or request changes in plain English.

5. Select **Open in Builder** to switch to the full Studio Builder for any setting the conversational flow does not expose.

<img src="https://mintcdn.com/lyzrinc/KL0td225zOmlZ1fc/assets/images/studio/new-conversational-builder.png?fit=max&auto=format&n=KL0td225zOmlZ1fc&q=85&s=b63aae5101ce1ea086622dd68c5440a0" alt="Screenshot of the Conversational Builder interface in Agent Studio, showing a natural language prompt input and Studio follow-up questions below it." width="2926" height="1456" data-path="assets/images/studio/new-conversational-builder.png" />

## Conversational Builder vs. Studio Builder

Use the Conversational Builder to draft a new agent quickly, especially when you are not yet sure of the exact configuration. Switch to the Studio Builder for chunking strategies, retrieval settings, Responsible AI thresholds, structured output schemas, and any provider-specific controls that require precise values.

## Next steps

* [Fine-tune your agent in the Studio Builder](studio)
* [Connect a Knowledge Base](../knowledgebase/studiokb)
* [Configure tools](../tools/overview)
