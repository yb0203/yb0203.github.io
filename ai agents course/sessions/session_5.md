# Session 5: Orchestrating Multi-Agent Collaboration

*   **Duration:** 2 hours
*   **Key Taxonomy Area:** Collaboration & Multi-Agent Topologies
*   **Pedagogical Split:** 30% Concepts, 70% PM Application & Hands-on Work

---

## 1. Conceptual Foundation (30 mins)

As agentic tasks scale, a single agent prompt becomes bloated and unreliable. We introduce **Multi-Agent Systems**:

```
               ┌───────────────────────┐
               │    Supervisor Agent   │
               └───────────────────────┘
                 │                   │
                 ▼                   ▼
        ┌────────────────┐   ┌────────────────┐
        │ Researcher Bot │   │  Writer Bot    │
        │ (Web Tools)    │   │ (Style Guide)  │
        └────────────────┘   └────────────────┘
```

*   **Single-Agent vs. Multi-Agent:** Instead of one LLM trying to do research, writing, formatting, and analysis, we split the workflow among specialized bots.
*   **Topologies:**
    *   *Sequential Chain:* Agent A outputs to Agent B, which outputs to Agent C.
    *   *Supervisor-Worker:* A central coordinator routes tasks to sub-agents and reviews their outputs.
    *   *Choreography/Graph:* Agents subscribe to shared state events and act autonomously when their conditions are met.

---

## 2. Product Management Context (30 mins)

### When to Decompose Workflows
Multi-agent architectures are powerful but have high product costs:
*   **Latency Multipliers:** Three agents running in sequence means the user waits three times longer.
*   **Cost Accumulation:** Tokens are spent for every handoff.
*   **State Drift:** Data can be lost or misconstrued during agent-to-agent transitions.

PMs must learn to run **cost-benefit analyses** before splitting a feature into a multi-agent system.

---

## 3. Instructor Live Demo (30 mins)

### Setup Instructions
1.  Open two separate browser tabs or custom instructions windows.
2.  We will simulate a Multi-Agent loop manually by copying inputs/outputs between a "Researcher Agent" and a "Summary Editor Agent" to show how specialized prompts yield better results.

### Demo Script
*   **Step 1:** Create "Agent A" (Researcher):
    `Your only task is to find and extract raw facts and data about the user's topic. Do not write intros or summaries.`
*   **Step 2:** Create "Agent B" (Editor):
    `Your only task is to take raw data and format it into a clean, bulleted executive summary matching professional PM standards.`
*   **Step 3:** Input into Agent A: *"Research Slack's key features."* Copy its raw fact list.
*   **Step 4:** Paste Agent A's output into Agent B: *"Format this."*
*   **Step 5:** Compare this structured output to what a single general-purpose chat interface outputs for the same prompt. *Highlight the clarity and quality improvements of specialized agents.*

---

## 4. Student Hands-on Exercise (20 mins)

### Instructions
1.  Map out a multi-agent system for a "Press Release Generator".
2.  Define the system instructions for two agents:
    *   **Agent 1 (The Interviewer):** Asks the user questions to gather the core announcement facts.
    *   **Agent 2 (The PR Writer):** Takes those facts and drafts a press release.
3.  Write the handoff instructions for Agent 1:
    `When you have collected the date, product name, and main benefit, output: 'HANDOFF: [Facts]'.`
4.  Test this by simulating both agents in your chat tools.

---

## 5. Session Deliverable & Milestone (10 mins)

*   **Deliverable:** Design a "Multi-Agent Coordination Flowchart".
*   **Milestone:** Map the communication flow of a two-agent system, detailing the handoff protocol, required parameters, and how errors are flagged.
