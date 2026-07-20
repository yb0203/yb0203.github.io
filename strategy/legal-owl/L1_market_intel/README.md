# Layer 1: Market Intelligence — Executive Summary

## ⚡ TL;DR
- Large Private Indian Banks represent the anchor segment (ICP) due to high volume, larger budgets, and faster procurement relative to PSU banks.
- Strict regulatory frameworks (RBI outsourcing, DPDP Act 2023) mandate on-prem/secured private cloud deployments, serving as a significant moat for compliant tools.
- Competitors like Harvey.ai and CoCounsel focus heavily on US/UK law, leaving a wide opening for an Indian banking regulatory-native tool.

## 🗺️ Where This Fits
[Layer 1 Market Intel → Feeds directly into Layer 2 Problem Space]

## 📖 Full Detail

### Market Summary
The Indian legal operations market in banking is expanding rapidly. The combination of increased regulatory scrutiny from the Reserve Bank of India (RBI) and the enforcement of the Digital Personal Data Protection (DPDP) Act of 2023 has forced banks to audit how customer data is processed within legal operations.

### Priority Document Callout
**CRITICAL READ**: [1B_regulatory_context.md](./1B_regulatory_context.md) is the most critical document in this layer. It details the specific RBI guidelines and DPDP requirements that must govern Legal Owl's architecture. Failing to align with these rules will result in immediate disqualification by banking IT Security teams.

### Layer 1 Documents Overview
| Document | One-Line Summary | Key Output |
| :--- | :--- | :--- |
| [1A_industry_segments.md](./1A_industry_segments.md) | Compares bank segments (Private, PSU, NBFC) | Anchor ICP: Large Private Banks |
| [1B_regulatory_context.md](./1B_regulatory_context.md) | Analyzes RBI, DPDP, and Bar Council rules | Regulatory Compliance Specs as a product moat |
| [1C_competitive_landscape.md](./1C_competitive_landscape.md) | Benchmarks Harvey, CoCounsel, Spellbook, Lexy | Differentiation strategy based on Indian case law |

## 🔑 Key Decisions / Open Questions
- [ ] Confirm if mid-sized NBFCs can be served via a secure SaaS variant or if all targets require dedicated VPC deployment.

## 🔗 Cross-Links
- Upstream: [Root README.md](../README.md)
- Downstream: [L2_problem_space/README.md](../L2_problem_space/README.md)\n