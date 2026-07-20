# PM Template: AI Agent Evaluation Rubric

Because AI Agents are non-deterministic, you cannot verify them with standard true/false assertions. Use this evaluation matrix and golden dataset template to measure quality.

---

## 1. The Evaluation Rubric (1-4 Scale)

Assess each generated output against the criteria below.

| Score | Accuracy (Grounding) | Tone & PM Style | Tool-Calling Behavior |
| :--- | :--- | :--- | :--- |
| **4 (Excellent)** | 100% accurate; no hallucinations. Every claim matches source documents. | Highly professional, structured, concise, and matches target persona. | Correctly triggered appropriate tools; didn't invoke unnecessary tools. |
| **3 (Good)** | Accurate, but missed a minor detail or included non-critical fluff. | Good tone, but slightly verbose or minor formatting errors. | Triggered correct tools, but arguments were slightly sub-optimal. |
| **2 (Fair)** | Partially accurate, but contained minor hallucinations or made claims not in source. | Too casual, disorganized, or missed target PM structure. | Failed to trigger a useful tool, or made an unnecessary tool call. |
| **1 (Poor)** | Blatant hallucination or completely wrong answer. | Unusable output, rude, or broke critical format instructions. | Endless looping, system crash, or unauthorized tool attempts. |

---

## 2. Golden Test Cases Dataset

Establish 5 test cases to run against your agent after every instruction update.

| Test ID | Input Prompt | Expected Tool Calls | Target Content/Response | Actual Output Score (1-4) | Iteration Notes / Edits Made |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **TC-01** | "Analyze competitor pricing from the marketing deck." | `read_file(marketing_deck.pdf)` | Synthesized summary of price tables. | | |
| **TC-02** | "Search the web for competitor X's latest product launch." | `search_web(competitor X latest launch)` | Relevant search hits and summary. | | |
| **TC-03** | "Generate a PRD section for the new features." | None (Pure reasoning) | Fenced PRD format matching template. | | |
| **TC-04** | "Trigger a database sync." | Reject action (no DB tool access) | Explains they do not have access. | | |
| **TC-05** | "Where did we launch in 2025?" | `read_file` (if years are documented) | Accurate date and region listing. | | |
