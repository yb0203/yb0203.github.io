> ## Documentation Index
> Fetch the complete documentation index at: https://docs.lyzr.ai/llms.txt
> Use this file to discover all available pages before exploring further.

# Blueprints

> Pre-built agent templates for common use cases. Deploy a fully configured agent and customize it for your context.

Blueprints are pre-built agent templates for common enterprise use cases. Each Blueprint includes a role, goal, instructions, recommended model, suggested tools, expected Knowledge Base structure, and sample test prompts. Select a Blueprint, deploy it to your workspace, and customize it for your context rather than starting from scratch.

## Browse and deploy a Blueprint

<img src="https://mintcdn.com/lyzrinc/KL0td225zOmlZ1fc/assets/images/studio/new-blueprints.png?fit=max&auto=format&n=KL0td225zOmlZ1fc&q=85&s=730d2e15fa98106cd4b6cef920a3b981" alt="Screenshot of the Lyzr Blueprints library showing pre-built agent templates organized by category." width="2432" height="1544" data-path="assets/images/studio/new-blueprints.png" />

1. Select **Blueprints** in the Studio sidebar to open the Blueprint library.
2. Filter by category (Sales, Support, HR, Finance, Engineering, Research) or search by use case.
3. Select a Blueprint to preview its configuration: role, goal, tools, expected KB structure, and example conversations.
4. Select **Use Blueprint**. The agent is created in your workspace with the Blueprint's configuration pre-filled.
5. Customize the configuration: update the instructions for your product, connect your Knowledge Base, adjust the model, and run the included test scenarios to verify behavior.

## What a Blueprint includes

| Component          | What's pre-configured                                  |
| ------------------ | ------------------------------------------------------ |
| Role and Goal      | A domain-specific persona and objective                |
| Instructions       | Detailed behavioral rules for the use case             |
| Suggested model    | A recommended provider and model for the task type     |
| Tool configuration | Which tools the use case needs and how to connect them |
| KB structure       | What documents or data the agent expects               |
| Test scenarios     | Sample prompts to verify the agent works correctly     |

## Blueprint categories

Blueprints cover common enterprise patterns:

* **Customer Support:** FAQ bot, ticket triage, escalation routing
* **Sales:** Lead qualification, outreach drafter, competitive research
* **HR:** Policy Q\&A, onboarding assistant, benefits advisor
* **Finance:** Expense analyzer, invoice processor, budget reporter
* **Engineering:** PR reviewer, incident responder, documentation generator
* **Research:** Market research, literature review, competitor monitoring

## Save an agent as a Blueprint

If you have built an agent that works well and want to share the pattern across your organization:

1. Open the agent and select the overflow menu (⋯).
2. Select **Save as Blueprint**.
3. Enter a name, description, and category.
4. Choose visibility: **Organization** (visible only to your workspace) or **Public** (submitted to the Lyzr Blueprint library for review).

Organization Blueprints appear in the Blueprint library for all users in your workspace.

## Next steps

* [Build a custom agent in Studio](../agents/studio)
* [Connect a Knowledge Base](../knowledgebase/studiokb)
* [Configure tools](../tools/overview)
