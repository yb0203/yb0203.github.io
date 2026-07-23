# 1B. Regulatory & Compliance Context

## ⚡ TL;DR
- OCC/Fed/FDIC Interagency Guidelines on Third-Party Risk Management (TPRM) mandate that core decision-making cannot be delegated to third-party software, requiring a strict "Human-in-the-Loop" architecture.
- The Gramm-Leach-Bliley Act (GLBA) Safeguards Rule requires strict information security safeguards and customer data privacy protections.
- Regulatory constraints are framed as a competitive moat: building for federal compliance out-of-the-box blocks US-centric SaaS competitors.

## 🗺️ Where This Fits
[Layer 1 Regulations → Feeds into Layer 3B Feature Gaps and Layer 4C Adoption Barriers]

## 📖 Full Detail

### Key Regulatory Frameworks
1. **OCC/Fed/FDIC Interagency Guidance on Third-Party Risk Management (TPRM)**: Banks cannot outsource core management or decision-making. The Platform must position itself strictly as a drafting and review assistant, not an autonomous agent. Every action must end with a human sign-off ("Approve-before-act" primitive).
2. **Gramm-Leach-Bliley Act (GLBA) and CCPA**: Mandates absolute data residency within the US. No customer financial details or legal documents can leave the bank's Virtual Private Cloud (VPC) or local servers.
3. **FFIEC Information Security Guidelines & GLBA Safeguards Rule**: Requires banks to run regular vulnerability assessments and audits on all vendor software. The Platform must support offline operations or deploy within the bank's secure network perimeter.
4. **State Bar Association Rules on the Unauthorized Practice of Law (UPL)**: Corporate entities cannot practice law. The Platform must be styled as an internal productivity system for in-house legal departments, avoiding any messaging around "replacing lawyers."
5. **Bank Secrecy Act (BSA) & USA PATRIOT Act (AML/KYC compliance rules)**: Legal departments constantly audit loan and trade finance transactions. The tool must run locally on contract databases to identify compliance gaps without leaking transaction history.

### Turning Constraints into a Moat
By designing the Platform from day one to deploy on local private infrastructure (such as AWS New York VPC or local private datacenters) with zero external API calls, we bypass the heavy compliance hurdles that block cloud-based US competitors.

## 🔑 Key Decisions / Open Questions
- [ ] Does the target bank require a Docker-based air-gapped installation, or will an AWS/Azure private network link suffice?

## 🔗 Cross-Links
- Upstream: [L1_market_intel/README.md](./README.md)
- Downstream: [L3_solution_space/3B_feature_gap_analysis.md](../L3_solution_space/3B_feature_gap_analysis.md) | [L4_stakeholder_map/4C_adoption_barriers.md](../L4_stakeholder_map/4C_adoption_barriers.md)\n