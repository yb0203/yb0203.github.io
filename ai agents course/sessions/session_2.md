# Session 2: Knowledge Augmentation & Memory (RAG)

*   **Duration:** 2 hours
*   **Key Taxonomy Area:** Memory / Context Management (Working Memory vs. RAG Semantic Memory)
*   **Pedagogical Split:** 30% Concepts, 70% PM Application & Hands-on Work

---

## 1. Conceptual Foundation (30 mins)

An agent is only as good as the information it can access. We demystify memory systems:

*   **Short-term (Working) Memory:** The model's context window. It stores the immediate chat history. Everything in this window is read on every turn.
*   **Long-term (Semantic) Memory:** External knowledge stores. Retrieval-Augmented Generation (RAG) is the mechanism where the agent queries a database (e.g., PDFs, product catalogs) to find relevant snippets and injects them into the short-term context.

```
                  ┌──────────────────────┐
                  │   User Query         │
                  └──────────────────────┘
                             │
                             ▼
 ┌──────────────┐   ┌──────────────────┐   ┌──────────────┐
 │ Vector DB    │──>│ Retrieve Snippets│──>│ System Prompt│
 │ (RAG Memory) │   └──────────────────┘   │ + Context    │
 └──────────────┘                          └──────────────┘
                                                  │
                                                  ▼
                                           ┌──────────────┐
                                           │ LLM (Brain)  │
                                           └──────────────┘
```

---

## 2. Product Management Context (30 mins)

### RAG Strategy for Product Managers
As a PM, you will frequently define the "Knowledge Base" for internal or customer-facing agents. You must balance:
*   **Cost vs. Context:** Injecting too much text into the prompt increases token counts and API bills.
*   **Chunking Strategy:** How files are split. If files are chunked poorly, the agent loses context (e.g. reading a table row without headers).
*   **Grounding:** Ensuring the agent only answers using the provided files, avoiding hallucinations.

---

## 3. Instructor Live Demo (30 mins)

### Setup Instructions
1.  Use Claude.ai Projects (or ChatGPT Custom GPTs).
2.  Prepare a mock PDF containing obscure product specs (e.g. "Widget X-100 has a voltage limit of 12V and is priced at $45").
3.  Do NOT upload the document to the agent initially.

### Demo Script
*   **Step 1:** Ask the agent: *"What is the voltage limit of Widget X-100 and how much does it cost?"*
    *Show that the agent hallucinates or admits it does not know.*
*   **Step 2:** Upload the mock spec PDF to the project knowledge base.
*   **Step 3:** Change the system instructions:
    `Answer questions using only the uploaded files. If the file does not contain the answer, say "I cannot find that in the official specifications."`
*   **Step 4:** Ask the same question. *Show that the agent retrieves the exact text and answers correctly.*
*   **Step 5:** Ask an out-of-scope question like: *"What is the capital of France?"* *Show that the agent stays grounded and refuses to answer, demonstrating hallucination containment.*

---

## 4. Student Hands-on Exercise (20 mins)

### Instructions
1.  Open [Claude.ai](https://claude.ai) and create a new **Project** (or use Custom GPTs in ChatGPT).
2.  Create a text file containing 5 custom rules for your company's product design (e.g. "Button padding must always be 16px," "Primary color hex is #4F46E5").
3.  Upload this text file to the project's knowledge base.
4.  Configure the project instructions:
    `You are a UX Review Agent. Evaluate the user's design choices based strictly on the uploaded styling guide. Flag any violations.`
5.  Test the agent by typing: *"I designed a button with 12px padding and red background. Does this pass?"* Verify that it correctly flags the padding violation.

---

## 5. Session Deliverable & Milestone (10 mins)

*   **Deliverable:** Design a "Knowledge Asset Optimization Plan".
*   **Milestone:** Identify which documents (PRDs, styling guides, user manuals) need to be formatted for your agent's memory layer and specify formatting rules (e.g., CSV vs. PDF).
