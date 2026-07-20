# 1B. Regulatory & Compliance Context

## ⚡ TL;DR
- RBI Outsourcing guidelines mandate that core decision-making cannot be delegated to third-party software, requiring a strict "Human-in-the-Loop" architecture.
- The Digital Personal Data Protection (DPDP) Act 2023 requires explicit consent mechanisms and strict data localization inside India.
- Regulatory constraints are framed as a competitive moat: building for RBI compliance out-of-the-box blocks US-centric SaaS competitors.

## 🗺️ Where This Fits
[Layer 1 Regulations → Feeds into Layer 3B Feature Gaps and Layer 4C Adoption Barriers]

## 📖 Full Detail

### Key Regulatory Frameworks
1. **RBI Guidelines on Outsourcing of Financial Services**: Banks cannot outsource core management or decision-making. Legal Owl must position itself strictly as a drafting and review assistant, not an autonomous agent. Every action must end with a human sign-off ("Approve-before-act" primitive).
2. **Digital Personal Data Protection (DPDP) Act, 2023**: Mandates absolute data residency within India. No customer financial details or legal documents can leave the bank's Virtual Private Cloud (VPC) or local servers.
3. **RBI Master Direction on IT Governance and Information Security (2023)**: Requires banks to run regular vulnerability assessments and audits on all vendor software. Legal Owl must support offline operations or deploy within the bank's secure network perimeter.
4. **Bar Council of India Rules**: Corporate entities cannot practice law. Legal Owl must be styled as an internal productivity system for in-house legal departments, avoiding any messaging around "replacing lawyers."
5. **PMLA (Prevention of Money Laundering Act) & KYC compliance rules**: Legal departments constantly audit loan and trade finance transactions. The tool must run locally on contract databases to identify compliance gaps without leaking transaction history.

### Turning Constraints into a Moat
By designing Legal Owl from day one to deploy on local private infrastructure (such as AWS Mumbai VPC or local private datacenters) with zero external API calls, we bypass the heavy compliance hurdles that block cloud-based US competitors.

## 🔑 Key Decisions / Open Questions
- [ ] Does the target bank require a Docker-based air-gapped installation, or will an AWS/Azure private network link suffice?

## 🔗 Cross-Links
- Upstream: [L1_market_intel/README.md](./README.md)
- Downstream: [L3_solution_space/3B_feature_gap_analysis.md](../L3_solution_space/3B_feature_gap_analysis.md) | [L4_stakeholder_map/4C_adoption_barriers.md](../L4_stakeholder_map/4C_adoption_barriers.md)\n