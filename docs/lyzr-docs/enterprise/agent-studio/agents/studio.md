> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Building Agents in Studio

> Create, configure, test, and manage agents using the full Studio Builder.

Use the Studio Builder when you need full control over an agent's model, prompt, features, tools, knowledge base, and deployment settings. If you want to describe your agent in plain English first and let Studio generate an initial configuration, start with the [Conversational Builder](conversational-builder) and switch to Studio for fine-tuning.

## Create an agent

Navigate to **Agents** in the sidebar and select **New Agent**.

### Required fields

**Name** is the internal identifier shown in the agents list and in API responses.

**Model** is the LLM provider and model. Select based on latency, cost, reasoning depth, and compliance requirements. Once you have written the agent's instructions, you can select the **auto-select model** icon instead of choosing a model yourself. Auto-select reads the instructions, gauges the complexity of the task, and picks an appropriate model for it.

**Role** sets the agent's domain and persona. A specific role produces better output than a generic one.

**Goal** is the agent's high-level objective. Keep it to one clear sentence.

**Instructions** define behavior, output format, edge cases, constraints, and step-by-step logic.

<img src="https://mintcdn.com/lyzrinc/KL0td225zOmlZ1fc/assets/images/studio/new-single-agent.png?fit=max&auto=format&n=KL0td225zOmlZ1fc&q=85&s=652895c324bad9de115bcfbad1a338bb" alt="Screenshot of the Agent Builder form showing the Name, Model, Role, Goal, and Instructions fields." width="1914" height="884" data-path="assets/images/studio/new-single-agent.png" />

## Optional features

| Feature           | Config options                            | Notes                                                       |
| ----------------- | ----------------------------------------- | ----------------------------------------------------------- |
| Memory            | Cognis, Lyzr Memory, or Bedrock AgentCore | Cognis is recommended for new agents                        |
| Knowledge Base    | Select one or more KBs                    | Classic, Graph, or Semantic                                 |
| Tools             | Pre-built, custom, or MCP tools           | Choose shared or per-user auth                              |
| Skills            | Built-in or uploaded skills               | Adds reusable multi-step logic                              |
| Responsible AI    | Select a guardrail policy                 | Policies are created in the Responsible AI section          |
| Global Context    | Select a context document                 | Injects org-wide instructions without per-agent duplication |
| Structured Output | Define a JSON schema                      | Forces machine-readable output                              |
| Data Query        | Select a Semantic Model                   | Enables natural-language-to-SQL queries                     |
| Scheduler         | Configure a time trigger                  | Use for recurring agent runs                                |
| Webhook           | Configure an event trigger                | Use for event-driven runs                                   |

## Test your agent in the Playground

The Playground lets you send messages, upload files, and iterate on instructions before deployment. Cover the following scenarios before going to production:

* The primary use case with a typical user input
* Ambiguous or underspecified inputs to check graceful handling
* Requests the agent should decline, such as unsafe or out-of-scope queries
* Tool calls: verify the agent selects the correct tool and passes valid arguments
* Knowledge retrieval: verify the agent returns grounded, cited answers from the connected KB

<img src="https://mintcdn.com/lyzrinc/KL0td225zOmlZ1fc/assets/images/studio/new-playground.png?fit=max&auto=format&n=KL0td225zOmlZ1fc&q=85&s=af8608acbe717c9e5741a0fbe9d6433e" alt="Screenshot of the Agent Playground showing an HR Support Agent with suggested prompts and a chat input." width="2206" height="1550" data-path="assets/images/studio/new-playground.png" />

## Save and versions

Every save creates a new version snapshot. You can review and restore previous versions from the **Version History** panel, accessible via the history icon in the top-right of the agent builder.

<img src="https://mintcdn.com/lyzrinc/KL0td225zOmlZ1fc/assets/images/studio/new-version-history.png?fit=max&auto=format&n=KL0td225zOmlZ1fc&q=85&s=652cde21674c82ccccdbae476a4a4552" alt="Screenshot of the Version History panel showing version timestamps, a Current badge, and Today/This Week/All Time filter tabs." width="710" height="410" data-path="assets/images/studio/new-version-history.png" />

## Deploy your agent

Once you are satisfied with the Playground results, select **Deploy** in the top navigation. The Deploy tab confirms the agent is live and gives you everything you need to integrate it.

<img src="https://mintcdn.com/lyzrinc/KL0td225zOmlZ1fc/assets/images/studio/new-deploy.png?fit=max&auto=format&n=KL0td225zOmlZ1fc&q=85&s=9edab6dededf516daa912fa9efaa3a07" alt="Screenshot of the Deploy tab showing the three-step integration guide: Copy the cURL, Drop it in, Go live, with the Agent API tab and cURL command visible below." width="2270" height="1384" data-path="assets/images/studio/new-deploy.png" />

The Deploy tab provides three tabs for integration:

* **Agent API:** The primary cURL command for calling your agent. Copy it and paste it into your app, site, or backend using the request format shown.
* **Agent JSON:** The full agent configuration as JSON, for importing or version-controlling the agent definition.
* **How to use:** Inline guidance on passing user input and rendering the response.

The three-step integration flow is: copy the cURL from the **Agent API** tab, drop it into your application code, then pass user input and render the response.

To publish the agent to the Lyzr App Store without writing integration code, select **Publish** from the banner on the Deploy tab.

## Update an agent

Select the agent from the **Agents** list to open its configuration. Modify any field and select **Update** to apply the changes. Re-run tests in the Playground to confirm the updates produce the intended behavior.

## Tags and metadata

You can annotate an agent with free-form tags and metadata to organize it and make it searchable. Open the agent's **...** menu in the Agent Registry and select **Tags & metadata**.

* **Custom tags** are labels you add one at a time. Type a tag and press Enter to add it. Tags appear on the agent's card in the Agent Registry and make the agent searchable, which helps you find a specific agent in an organization that runs many of them.
* **Custom metadata** is a free-form field for any notes or structured metadata you want to attach to the agent.

Select **Save** to apply the tags and metadata.

<img src="https://mintcdn.com/lyzrinc/gJ-JvEv_pj1wz6yL/assets/images/lyzr-studio/builder-tags.png?fit=max&auto=format&n=gJ-JvEv_pj1wz6yL&q=85&s=9a147d7a1ef14bdd70bcb0d881b48189" alt="The Tags and metadata dialog showing a Custom tags input and a Custom metadata text area." width="1000" height="864" data-path="assets/images/lyzr-studio/builder-tags.png" />

## Deactivate an agent

You can deactivate a productionized agent to take it out of service without deleting it. Open the agent's **...** menu in the Agent Registry and select **Deactivate**. While an agent is deactivated, any user who queries it receives a message that the agent is inactive and cannot respond. Reactivate the agent from the same menu to restore normal behavior.

<img src="https://mintcdn.com/lyzrinc/gJ-JvEv_pj1wz6yL/assets/images/lyzr-studio/builder-deactivate.png?fit=max&auto=format&n=gJ-JvEv_pj1wz6yL&q=85&s=18ff61470c03cbdf1706e0ae826fe963" alt="The agent card actions menu showing the Deactivate option alongside Edit, Tags & metadata, Share, Clone agent, and other actions." width="620" height="694" data-path="assets/images/lyzr-studio/builder-deactivate.png" />

## Next steps

* [Connect a Knowledge Base](../knowledgebase/studiokb)
* [Configure tools](../tools/overview)
* [Set up Responsible AI guardrails](../responsible-safe-ai/Responsible)
* [Evaluate your agent](../agent%20eval/agentsimulation)
