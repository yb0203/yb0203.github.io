# 3B. Feature Gap Analysis

## ⚡ TL;DR
- Legal Owl currently lacks on-premises orchestration tools (Kubernetes/Helm charts) required for banking VPCs.
- Active integration with legacy bank core database systems (Oracle, SQL Server) remains a key technical gap.
- We must build or partner to resolve these infrastructure gaps before running pilots at large private banks.

## 🗺️ Where This Fits
[Layer 3 Gaps → Feeds into Layer 4C Adoption Barriers and Layer 5C Sales Cycle]

## 📖 Full Detail

### Technical Gaps & Risk Register
| Gap Area | Impact on GTM | Build / Partner / Defer | Mitigation Strategy | Risk Level |
| :--- | :--- | :--- | :--- | :--- |
| **VPC Deployment Tools** | Blocks pilot launches because bank IT teams refuse external API calls | **Build** | Write standard Helm charts and Docker Compose files for local deployments | High |
| **Legacy Database Sync** | Restricts tool capability to static file uploads instead of live database lookups | **Partner** | Establish read-only database replicas for Legal Owl to access | Medium |
| **Offline Vector Database**| Ensures search queries do not travel over public networks | **Build** | Deploy an offline instance of PgVector or Milvus alongside the model | Low |
| **OCR for Vernacular Documents** | Local courts in India issue orders in regional languages (Hindi, Marathi, etc.) | **Partner** | Integrate specialized vernacular OCR engines (such as Tesseract or Indian cloud OCRs) | High |

### Strategic Decision
We will **build** the on-premise containerization tools immediately as it is a non-negotiable requirement for the banking sector. We will **partner** for OCR and vernacular translation to focus our development resources on the core agentic workflow logic.

## 🔑 Key Decisions / Open Questions
- [ ] Verify if target bank IT departments allow Docker container deployments on their local hardware without extensive security certifications.

## 🔗 Cross-Links
- Upstream: [L1_market_intel/1B_regulatory_context.md](../L1_market_intel/1B_regulatory_context.md)
- Downstream: [L5_business_lifecycle/5C_sales_cycle.md](../L5_business_lifecycle/5C_sales_cycle.md)\n