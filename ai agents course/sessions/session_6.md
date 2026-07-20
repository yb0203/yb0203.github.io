# Session 6: AI Evaluation & Quality Control (Evals)

*   **Duration:** 2 hours
*   **Key Taxonomy Area:** Evaluation, Safety & Quality Control Loops
*   **Pedagogical Split:** 30% Concepts, 70% PM Application & Hands-on Work

---

## 1. Conceptual Foundation (30 mins)

Because agent outputs are non-deterministic, traditional software testing (which checks for exact matches) fails. We must use AI-specific evaluation methodologies:

*   **The Golden Dataset:** A curated set of inputs representing real-world prompts, paired with the desired target outputs or execution behaviors.
*   **LLM-as-a-Judge:** Using a highly capable model (like GPT-4o) to grade the agent's output based on a defined rubric.
*   **Evaluation Metrics:**
    *   *Faithfulness:* Is the answer grounded strictly in the source files?
    *   *Completeness:* Did the agent answer all parts of the user request?
    *   *Safety:* Did the agent reject toxic prompts or attempts at prompt injection?

---

## 2. Product Management Context (30 mins)

### Shipping AI Agents Responsibly
As the PM, you decide when an agentic feature is "ready to ship." You must establish the quality bar:
*   **Setting the Acceptable Score:** e.g., "The agent must score $\ge$ 3.5 out of 4 on accuracy across our golden dataset of 50 cases before deployment."
*   **Monitoring Drift:** Models change. LLM providers update their underlying weights, causing prompts that worked yesterday to behave differently today. Continuous evaluation is mandatory.
*   **Managing User Trust:** When the agent makes a mistake, how does the UI display it? Designing feedback loops (thumbs up/down) to collect user correction data.

---

## 3. Instructor Live Demo (30 mins)

### Setup Instructions
1.  Open any LLM interface.
2.  We will show students how to use the LLM-as-a-Judge technique to grade a simulated agent response against a scoring rubric.

### Demo Script
*   **Step 1:** Paste the following evaluation prompt:
    ```
    Evaluate this Agent Output based on the Source Context.
    
    Source Context: "Our return policy allows items to be returned within 30 days of purchase. Sale items are final sales and cannot be returned."
    
    Agent Output: "You can return your items within 30 days. If it was on sale, you can exchange it for store credit."
    
    Scoring Rubric:
    - Score 3: Accurate and grounded.
    - Score 2: Helpful, but makes claims not fully supported by context.
    - Score 1: Blatant hallucination or wrong information.
    
    Provide a Score and a 1-sentence explanation.
    ```
*   **Step 2:** Run the prompt. *Show that the LLM-as-a-judge correctly assigns a Score of 2 because the refund policy does not mention store credit exchanges for sale items.*

---

## 4. Student Hands-on Exercise (20 mins)

### Instructions
1.  Open your [AI Agent Evaluation Rubric](file:///Users/hkc/Documents/job-prep/ai%20agents%20course/templates/ai_eval_rubric.md) template.
2.  Run the "PM Knowledge Assistant" you configured in Session 2.
3.  Test it with these 3 prompts:
    *   *Prompt 1:* "Can I use button padding of 14px?" (Correct behavior: reject, must be 16px).
    *   *Prompt 2:* "What is the hex code of the primary color?" (Correct behavior: retrieve #4F46E5).
    *   *Prompt 3:* "Can you write an essay about dogs?" (Correct behavior: reject, out of scope).
4.  Grade the agent's actual responses using the 1-4 scale in the template.
5.  Edit the system instructions to fix any case that scored below 3, and re-test.

---

## 5. Session Deliverable & Milestone (10 mins)

*   **Deliverable:** Build your final [AI Product Requirements Document (PRD)](file:///Users/hkc/Documents/job-prep/ai%20agents%20course/templates/ai_prd_template.md).
*   **Milestone:** Complete the entire PRD and Evaluation Matrix for your course agent project, ready to present.
