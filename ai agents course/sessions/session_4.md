# Session 4: Decomposition & Planning Loops

*   **Duration:** 2 hours
*   **Key Taxonomy Area:** Planning & Self-Correction (Decomposition, ReAct Loop, Execution Trace)
*   **Pedagogical Split:** 30% Concepts, 70% PM Application & Hands-on Work

---

## 1. Conceptual Foundation (30 mins)

Standard LLMs act on "instinct"—they generate the next word immediately. Agents, however, use planning architectures to:
*   **Decompose Goals:** Break down a prompt like "Analyze this quarter's financial report and compare it to last quarter" into a list of 5 sub-tasks.
*   **ReAct Loop (Reasoning + Acting):** Alternating between thinking and executing.
    `Thought` $\rightarrow$ `Action` $\rightarrow$ `Observation` $\rightarrow$ `Thought` $\rightarrow$ `Action` $\rightarrow$ `Observation`
*   **Self-Correction:** Inspecting output against the original guidelines to see if any rules were broken, and running a correction loop.

---

## 2. Product Management Context (30 mins)

### Designing the Agent State Machine
As a PM, you are responsible for defining the system instructions that manage these planning loops. You must design:
*   **Maximum Iterations:** Setting strict limits (e.g. max 5 steps) to prevent run-away loops that exhaust API tokens.
*   **Interaction Milestones:** Prompting the agent to update the user on what step it is currently executing, avoiding the UX black hole of "loading spinners".
*   **Graceful Exit States:** How the agent handles tasks it cannot complete (e.g., passing control back to a human agent).

---

## 3. Instructor Live Demo (30 mins)

### Setup Instructions
1.  Open ChatGPT with Code Interpreter enabled, or a Custom GPT.
2.  We will show students how the agent plans its actions and reacts to unexpected outcomes.

### Demo Script
*   **Step 1:** Upload a text file with a list of random names.
*   **Step 2:** Prompt the agent:
    ```
    Sort this list of names alphabetically, count the total number of vowels, and write a summary.
    Show me your step-by-step plan before you run the code.
    ```
*   **Step 3:** Observe the agent outputting a plan (Step 1: Read file, Step 2: Sort, Step 3: Count vowels, Step 4: Summarize).
*   **Step 4:** Watch it execute a python code tool, check the results, and print the output. *This demonstrates the planning loop in action.*

---

## 4. Student Hands-on Exercise (20 mins)

### Instructions
1.  Create a custom agent (GPT or Gemini Gem) for "Complex Competitor Analysis".
2.  Write structured system instructions that force the agent to use a "Plan-then-Execute" loop.
3.  Inject this specific instruction:
    ```
    When given a company name, you must:
    1. First, search the web to find their core product.
    2. Second, think about their likely customer segment.
    3. Third, search the web for their pricing page.
    4. Write a comparison of pricing vs value.
    You must print "THOUGHT: I am now starting step X..." before each step.
    ```
4.  Test the agent with "Slack" or "Zoom". Verify that it follows the exact steps sequentially and prints its step-by-step thoughts.

---

## 5. Session Deliverable & Milestone (10 mins)

*   **Deliverable:** Design an "Agent State Machine & Instruction Map".
*   **Milestone:** Map out the planning loops for your final agent, showing the exact steps it will execute, what tools are mapped to each step, and when it should stop.
