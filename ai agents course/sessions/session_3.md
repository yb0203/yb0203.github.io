# Session 3: Actions & Tool Calling (MCP & Execution)

*   **Duration:** 2 hours
*   **Key Taxonomy Area:** Tool Use & The Action Layer (Function Calling & Model Context Protocol)
*   **Pedagogical Split:** 30% Concepts, 70% PM Application & Hands-on Work

---

## 1. Conceptual Foundation (30 mins)

Agents are passive until they can execute changes in the external world. This capability is managed through **Tool Use** (or Function Calling).

```
   ┌──────────┐                     ┌─────────────┐
   │          │  1. Tool Definition │             │
   │          │ ──────────────────> │             │
   │          │  (JSON Function)    │             │
   │          │                     │             │
   │  LLM     │  2. Decide Call     │ Application │
   │ (Brain)  │ ──────────────────> │ Orchestrator│
   │          │  (Name & Arguments) │ (e.g., App) │
   │          │                     │             │
   │          │  3. Return Result   │             │
   │          │ <────────────────── │             │
   └──────────┘                     └─────────────┘
```

1.  **Function Calling:** The LLM does not run APIs directly. Instead, it outputs a structured JSON object containing a function name and arguments (e.g., `{"name": "get_weather", "arguments": {"location": "San Francisco"}}`).
2.  **Execution:** The hosting system (e.g., the web browser, server, or application) catches this JSON output, runs the actual API call, and feeds the results back into the LLM's context.
3.  **Model Context Protocol (MCP):** A new standard that makes it easy for agents to connect directly to secure databases, local files, and web APIs.

---

## 2. Product Management Context (30 mins)

### Designing Tool Integrations
When defining tools for an agentic feature, PMs must address:
*   **Security:** How do we prevent the agent from triggering destructive actions (e.g. deleting a user account)?
*   **Latency:** Every API call adds seconds of wait time. How do we design the UI to keep users engaged during execution?
*   **Fallback Paths:** If the third-party API is down or times out, how should the agent respond without crashing?

---

## 3. Instructor Live Demo (30 mins)

### Setup Instructions
1.  Open OpenAI ChatGPT custom GPT editor.
2.  Click on the **Actions** button at the bottom of the configuration panel.
3.  We will show the students how a tool JSON schema defines the parameters the agent is allowed to send.

### Demo Script
*   **Step 1:** Show a sample JSON schema representing a simple weather api:
    ```json
    {
      "openapi": "3.1.0",
      "info": {
        "title": "Weather API",
        "version": "1.0.0"
      },
      "paths": {
        "/weather": {
          "get": {
            "operationId": "getWeather",
            "parameters": [
              {
                "name": "location",
                "in": "query",
                "required": true,
                "schema": { "type": "string" }
              }
            ]
          }
        }
      }
    }
    ```
*   **Step 2:** Paste this schema into the GPT Actions panel.
*   **Step 3:** Ask the GPT: *"Can you check the weather in Tokyo?"*
    *Show that the GPT automatically parses the prompt and generates a structured tool request, asking for permission to call the endpoint.*

---

## 4. Student Hands-on Exercise (20 mins)

### Instructions
1.  Imagine you are building a "Lead Capture Agent" that saves user information to Google Sheets.
2.  Your task is to write the system prompt instructives that define **when** and **how** the agent should ask the user for data before writing to the sheet.
3.  Write instructions requiring the agent to collect:
    *   Full Name
    *   Work Email (validate that it contains '@' and a domain)
    *   Company Name
4.  Strict Rule: The agent *must* confirm all three fields with the user before triggering the mock tool `write_to_leads_sheet`.
5.  Test the prompt in a new chat. Type: *"Hi, I am Sarah and my company is Acme."* Verify that the agent does *not* call the tool, but instead prompts you to provide your work email first.

---

## 5. Session Deliverable & Milestone (10 mins)

*   **Deliverable:** Complete the "API Function Specifications" section in your course project draft.
*   **Milestone:** Define 2 external tools your course agent will need, including their input parameters, trigger conditions, and safety guardrails.
