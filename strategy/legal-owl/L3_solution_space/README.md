# Layer 3: Solution Space — Executive Summary

## ⚡ TL;DR
- The Platform addresses top banking pain points with three core modules: Docket Sync, Template Deviation Checker, and Policy Auditor.
- A critical technical principle is "Approve-Before-Act" workflows and citation-grounded LLM layers to prevent hallucinations and compliance errors.
- The product backlog is structured to support local secure private cloud deployment (VPC) out-of-the-box.

## 🗺️ Where This Fits
[Layer 3 Solution Space → Feeds into Layer 4 Stakeholder Map and Layer 6 Product Lifecycle]

## 📖 Full Detail

### Solution Architecture Summary
The Platform uses a multi-agent system combined with local vector databases to execute tasks. By utilizing small, domain-specialized language models hosted inside the bank's secure network, it ensures zero external data leakages while maintaining low latency.

### Priority Document Callout
**MANDATORY READ**: [3A_capability_mapping.md](./3A_capability_mapping.md) shows how the top prioritized pain points are resolved by specific product capabilities, explaining the mechanics of the citation system.

### Layer 3 Documents Overview
| Document | One-Line Summary | Key Output |
| :--- | :--- | :--- |
| [3A_capability_mapping.md](./3A_capability_mapping.md) | Maps top pain points to software features | Core module architecture specification |
| [3B_feature_gap_analysis.md](./3B_feature_gap_analysis.md) | Identifies technical and integration gaps | Risk register and mitigation plans for local VPCs |
| [3C_product_backlog.md](./3C_product_backlog.md) | Lists 20 prioritized backlog items | MoSCoW backlog defining MVP roadmap |

## 🔑 Key Decisions / Open Questions
- [ ] Choose the base LLM model family for on-prem fine-tuning (e.g., Llama-3-8B-Instruct or Mistral-7B).

## 🔗 Cross-Links
- Upstream: [L2_problem_space/README.md](../L2_problem_space/README.md)
- Downstream: [L4_stakeholder_map/README.md](../L4_stakeholder_map/README.md) | [L6_product_lifecycle/README.md](../L6_product_lifecycle/README.md)\n