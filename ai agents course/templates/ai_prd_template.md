# PM Template: AI Product Requirements Document (PRD)

This template adapts standard software PRDs to specify agentic, non-deterministic systems. It focuses on the cognitive architecture, tool interfaces, error recovery, and performance budgets.

---

## 1. Problem Statement & Goal
*   **User Problem:** [What friction does the user experience?]
*   **Agent Mission:** [What is the objective given to the agent's Brain?]

---

## 2. Agent Architecture Specifications

### A. The Brain (Reasoning Layer)
*   **Primary Model:** [e.g., GPT-4o-mini for speed/cost, GPT-4o for complex planning]
*   **Fallback Model:** [If the primary model times out or errors]
*   **System Instructions (The Prompt):** [Paste the high-level role, task, constraints, and formatting directives]

### B. Memory & RAG Layer
*   **Static Knowledge Base:** [What PDF, CSV, or text documentation must be uploaded?]
*   **Retrieval Threshold:** [How does the agent search context? e.g. top 5 search hits]
*   **Working Memory Retention:** [Does the agent remember conversation history across restarts?]

### C. Tooling & Actions
List all external tools the agent is permitted to invoke:

| Tool Name | Trigger Condition | JSON Schema / Parameters | Security Guardrail |
| :--- | :--- | :--- | :--- |
| `search_web` | When user asks for live news or current price data | `query` (string) | Only allow specific whitelisted domains |
| `update_sheet` | When user requests to save a synthesized summary | `sheet_id`, `row_data` | Require human approval click before write |

---

## 3. Non-Deterministic Behavior & Edge Cases
*   **Hallucination Containment:** How should the agent behave when it does not know the answer? (e.g., "Must output: 'I cannot find this information in my source files.'")
*   **Inactivity / Stuck Loops:** How to handle an agent that is repeating tools? (e.g., limit execution steps to a maximum of 5 tool-calling turns).
*   **User-in-the-Loop Gates:** List which actions require explicit human confirmation.

---

## 4. Performance & Resource Budgets

*   **Target Latency:**
    *   *First Token Response:* [< 1.5 seconds]
    *   *Task Completion:* [< 8 seconds]
*   **Cost Budget (per task):** [e.g., < $0.05 per session]
*   **Success Metric (Accuracy):** [e.g., > 92% correct classification verified by eval rubric]
