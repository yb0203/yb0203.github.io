# Session 1: Anatomy & Taxonomy of AI Agents

*   **Duration:** 2 hours
*   **Key Taxonomy Area:** Cognitive Architectures (Brain, Planning, Memory, Tools)
*   **Pedagogical Split:** 30% Concepts, 70% PM Application & Hands-on Work

---

## 1. Conceptual Foundation (30 mins)

In this foundational session, we break down the transition from stateless conversational systems (standard LLMs) to stateful, goal-directed systems (AI Agents).

```
   ┌──────────────────────────────────────────────────┐
   │                  THE AGENT LOOP                  │
   │                                                  │
   │  ┌─────────┐     ┌──────────┐     ┌───────────┐  │
   │  │ Perceive│ ──> │ Reason   │ ──> │ Act       │  │
   │  └─────────┘     │ (Brain & │     │ (External │  │
   │       ▲          │ Planning)│     │ Tools)    │  │
   │       │          └──────────┘     └───────────┘  │
   │       │                │                │        │
   │       └────────────────┴────────────────┘        │
   │                   Memory & State                 │
   └──────────────────────────────────────────────────┘
```

An agentic architecture consists of:
1.  **The Brain (Reasoning Layer):** The LLM core that interprets semantic patterns, handles context, and decides what actions to take.
2.  **Planning Module:** Techniques like Chain-of-Thought (CoT) and ReAct that break complex requests down into sequential tasks.
3.  **Memory Layer:** Short-term (chat threads) and long-term (vector embeddings/databases).
4.  **Action Layer (Tool calling):** The interface via which the brain communicates with external systems (APIs, calculators, code sandboxes).

---

## 2. Product Management Context (30 mins)

### The PM Shift: From Deterministic to Non-Deterministic Features
Traditional product features are deterministic: `If user clicks A, do B`. Agentic features are non-deterministic: `Given user goal A, let the model decide the best steps to achieve it`.

As a PM, you must learn to:
*   Write system instructions (the "prompt") rather than coding logic.
*   Manage safety risks (e.g. prompt injection, unauthorized API triggers).
*   Assess unit economics: agent loops use multiple times more tokens than standard search, resulting in higher API costs.

---

## 3. Instructor Live Demo (30 mins)

### Setup Instructions
1.  Open any standard LLM interface (e.g., ChatGPT Plus or Claude).
2.  Open the Custom GPT / Project instructions editing panel.
3.  Prepare two system prompts to demonstrate the difference between a "Passive Assistant" and a "Proactive Agent".

### Demo Script
*   **Step 1:** Demonstrate a *Passive Assistant*. Use this system prompt:
    `You are a customer support agent. Answer customer questions politely.`
    Type in the chat: *"My billing address is incorrect, and I need a refund."*
    *Show that the assistant only outputs text instructions on how the user can fix it themselves.*
*   **Step 2:** Demonstrate an *Agentic Setup*. Change the system prompt to:
    ```
    You are an automated support agent. Your goal is to guide the user through correcting billing errors.
    Always follow this loop:
    1. Ask the user for their account ID and invoice number.
    2. Suggest the user check the database (simulate a search).
    3. Ask if they want you to draft a refund request.
    Do not answer other questions. Take control of the flow.
    ```
    Type the same input. *Show that the LLM now actively directs the conversation and executes a structured process, taking charge of the workflow.*

---

## 4. Student Hands-on Exercise (20 mins)

### Instructions
1.  Open a free account on [ChatGPT](https://chat.openai.com) or [Claude](https://claude.ai).
2.  Your task is to write a system instruction block for an "Interview Prep Agent".
3.  Configure the agent so that it:
    *   Never outputs long paragraphs of advice.
    *   Asks the user for the job description first.
    *   Asks one interview question at a time.
    *   Evaluates the user's response and gives feedback on a scale of 1-5 before asking the next question.
4.  Test your agent by feeding it a sample PM job description and answering the first question terribly to see if it catches the mistake.

---

## 5. Session Deliverable & Milestone (10 mins)

*   **Deliverable:** Complete the [Build vs. Buy Scorecard](file:///Users/hkc/Documents/job-prep/ai%20agents%20course/templates/build_vs_buy_scorecard.md) for a hypothetical "Resume Reviewer Agent" feature.
*   **Milestone:** Define the goal, constraints, and target platform for the agent.
