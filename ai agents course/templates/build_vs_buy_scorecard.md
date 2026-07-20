# PM Template: Build vs. Buy Scorecard for AI Agentic Features

Use this scorecard to evaluate whether to build a custom AI Agent internally (using APIs, cognitive orchestration, and vector stores) or buy/integrate a pre-built SaaS solution.

---

## 1. Feature Definition
*   **Feature Name:** [e.g., Customer Support Autopilot Agent]
*   **Target User Goal:** [e.g., Resolve customer billing queries automatically without agent intervention]
*   **Primary Core Tech Needed:** [e.g., Retrieval-Augmented Generation (RAG) + Google Sheets Action API]

---

## 2. Evaluation Scorecard (1 to 5)
Rate each criterion from **1 (Strongly Favors Buy)** to **5 (Strongly Favors Build)**.

| Category | Assessment Question | Score (1-5) | Rationale |
| :--- | :--- | :--- | :--- |
| **Core Competency** | Is this agentic feature a source of long-term competitive advantage for our product? | | |
| **Data Privacy** | Does this agent require handling highly proprietary, customer-sensitive, or heavily regulated data? | | |
| **Workflow Specificity** | Are our business logic, edge cases, and internal system steps too unique for a generic SaaS tool? | | |
| **Custom Integrations** | Does this agent need to connect to multiple bespoke, home-grown databases or APIs? | | |
| **Cost & Scale** | Do our expected query volumes make a vendor's per-token or per-agent SaaS subscription cost-prohibitive? | | |
| **Engineering Bandwidth** | Do we have the developer resources to monitor, evaluate, and maintain the orchestration loop? | | |
| **Speed to Market** | Is launching in weeks critical to capture user feedback before competitors? | | |

### Scoring Matrix:
*   **Total Score 7 - 17:** **Strong Buy.** Integrate an out-of-the-box vendor solution (e.g., Relevance AI, Copilot Studio, or an API service). Focus resources elsewhere.
*   **Total Score 18 - 25:** **Hybrid Approach.** Use visual no-code platforms (e.g., Coze) or low-code frameworks to prototype before writing custom code.
*   **Total Score 26 - 35:** **Strong Build.** Develop a custom agentic pipeline using APIs and internal orchestration to retain full control over performance and data.
