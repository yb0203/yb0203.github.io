# PM & Founder's Office Behavioral Prep (STAR Method)

Use these templates to prepare for behavioral interviews. For PM and Founder's Office roles, focus your answers on **leadership, resolving alignment conflicts, unblocking bottlenecks, and driving business outcomes**.

---

## 🎯 Story 1: Core Platform Cash Transaction Delivery
**Core Competencies**: Stakeholder Management, Alignment, Regulated Environment Delivery

*   **Situation (S)**: At Kotak Mahindra Bank, our core banking system was launching a mission-critical Cash Transaction capability. This involved integrating complex transaction processing across Finacle and TAS systems. However, we faced immediate blockers because operations had different workflow constraints than engineering, and compliance had strict regulatory standards for auditing transactions.
*   **Task (T)**: My task was to drive the system integration delivery and align the business operations, compliance officers, and engineering teams to ensure a secure, high-throughput flow using ISO8583 and FIXML banking standards.
*   **Action (A)**: 
    1.  *Bridge the Gap*: I set up a cross-functional alignment council with operations leads and compliance auditors. I translated complex, technical ISO8583 standards into simple data flows showing how auditing and data masking would be handled.
    2.  *Define Requirements*: I documented and unified the compliance checklist directly into system requirements, preventing scope creep and engineering drift.
    3.  *Ensure Compliance*: I personally oversaw the audit trails configuration, satisfying security requirements while keeping latency minimal.
*   **Result (R)**: Successfully launched the Cash Transaction capability on schedule. The flow processes high-volume transactions with zero compliance infractions, maintaining absolute transactional integrity.

---

## 🚀 Story 2: Centralized Reporting Platform (0-to-1 Platform)
**Core Competencies**: Zero-to-One Initiative, Internal Product Management, DevEx, Scalability & ROI

*   **Situation (S)**: Engineering, business, and operations teams at Kotak Mahindra Bank were losing hours daily looking for system performance reports. They had to request logs from DBAs and wait for manual queries, creating an operational bottleneck. Report retrieval took minutes, sometimes hours, and storage costs were climbing.
*   **Task (T)**: I decided to build a centralized reporting platform from scratch to eliminate this bottleneck, boost cross-team visibility, and lower reporting data storage costs.
*   **Action (A)**:
    1.  *Internal Discovery*: I interviewed leads from 5+ engineering teams and operations departments to understand what report metrics they needed most.
    2.  *Product Development*: I engineered the platform using Spring Boot and DynamoDB. I designed an AI error triage agent with confidence-scored classification to automate root-cause analysis (RCA), and created automated APIs to compare releases automatically.
    3.  *ROI Optimization*: To address the storage issue without requesting additional budget, I implemented a log-control architecture that optimized data indexing and saved space.
*   **Result (R)**: 
    *   Boosted cross-team visibility and cut report retrieval times by **95%**.
    *   Reduced manual root-cause analysis effort by **90%** via the AI triage agent.
    *   Cut manual release comparison time by **90%**.
    *   Achieved a **99% reduction in data storage costs** per report, extending the platform's runway with $0 infrastructure overhead.

---

## 🛡️ Story 3: AI Security Evaluation & Trust Standards
**Core Competencies**: Policy Creation, Risk Management, AI Innovation leadership

*   **Situation (S)**: As our banking teams started experimenting with internal LLM agents, there was no standardized framework to evaluate whether these agents leaked customer data, were vulnerable to prompt injection, or violated banking compliance guidelines. Without safety guarantees, these agents could not be approved for production.
*   **Task (T)**: I took the initiative to establish the organization's first AI security evaluation standard and build a framework to validate LLM responses prior to deployment.
*   **Action (A)**:
    1.  *Establish Policies*: I researched the OWASP Top 10 vulnerabilities for LLMs and mapped them to banking risks.
    2.  *Build Framework*: I integrated DeepEval into our internal AI pipeline and partnered with compliance officers to define **100+ banking-specific domain metrics** (e.g., non-disclosure of PII, correct financial definitions).
    3.  *Vulnerability Scans*: I ran automated pentesting on internal agent candidates, catching vulnerabilities early.
*   **Result (R)**: Surfaced and resolved **8+ critical OWASP vulnerabilities** in internal agents before they reached production. Created a repeatable, self-serve security standard that now enables teams to fast-track safe AI internal rollouts.

---

## 💡 Key Behavioral Themes for "Founder's Office"

Founder's Office roles are less about structured engineering processes and more about **problem-solving velocity**. When answering questions for these roles, always emphasize:
1.  **Extreme Agency**: "No one asked me to build the AI triage agent or the security standard. I saw a major risk/inefficiency and built it."
2.  **Resourcefulness**: "I optimized database logging to save 99% storage space because I didn't want to wait for budget approval. I worked within constraints."
3.  **Low Ego / Multi-Disciplinary Adaptability**: "I worked with compliance leads, DBAs, operations managers, and developers. I will do whatever it takes to get the product out."
