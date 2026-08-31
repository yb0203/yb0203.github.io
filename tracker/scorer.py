#!/usr/bin/env python3
"""
Pillar 1: Automated Fit Scorer & Lead Qualifier (Recalibrated for Yashvi's Strategic Focus)
Prioritizes:
- Remote-First & India-based/Indian Founder Startups
- Small Teams, Early/Mid-Tier Orgs, & Bootstrapped/Series A-B Scaleups
- Contractual, Fractional, Advisory, & Full-Time AI PM / Founder's Office engagements
"""

import re
from dataclasses import dataclass
from typing import Dict, List, Tuple

@dataclass
class ScoreResult:
    fit_score: int
    priority: str  # P0, P1, P2
    track: str     # AI PM, Founder's Office, Technical PM
    domain_score: int
    seniority_score: int
    leverage_score: int
    preferences_bonus: int
    engagement_model: str  # Contractual, Full-time, Fractional
    reasons: List[str]
    leverage_hook: str
    recommended_pitch: str

class ProfileScorer:
    # 1. Target Domain Keywords & Weights
    AI_KEYWORDS = {
        "agent": 10, "agentic": 10, "rag": 10, "llm": 8, "genai": 8,
        "eval": 8, "evaluation": 8, "deepeval": 15, "prompt": 6,
        "safety": 7, "guardrail": 8, "citation": 10, "multimodal": 6,
        "langchain": 8, "pinecone": 8, "vector": 6, "model": 5
    }
    
    FOUNDERS_KEYWORDS = {
        "founder": 12, "founder's office": 15, "founders office": 15,
        "chief of staff": 15, "0-to-1": 10, "zero-to-one": 10,
        "generalist": 10, "strategy & ops": 8, "strategy and ops": 8,
        "high-agency": 10, "operator": 8, "cross-functional": 6, "growth ops": 7
    }
    
    FINTECH_DEVEX_KEYWORDS = {
        "fintech": 10, "banking": 10, "iso8583": 15, "payment": 8,
        "devex": 10, "developer experience": 10, "platform": 7,
        "bdd": 10, "cucumber": 8, "reporting": 6, "dynamodb": 6,
        "transaction": 7, "core banking": 10, "compliance": 6
    }
    
    # 2. Strategic Preferences Bonuses
    CONTRACT_KEYWORDS = {
        "contract": 15, "contractual": 15, "freelance": 15, "fractional": 15,
        "consultant": 12, "consulting": 12, "retainer": 12, "project-based": 15,
        "part-time": 10, "advisory": 12
    }
    
    INDIA_FOUNDER_KEYWORDS = {
        "india": 12, "bengaluru": 15, "bangalore": 15, "delhi": 10,
        "gurugram": 10, "gurgaon": 10, "mumbai": 10, "hyderabad": 10,
        "pune": 10, "noida": 10, "indian": 12, "peerlist": 15
    }
    
    SMALL_MID_STARTUP_KEYWORDS = {
        "seed": 12, "series a": 12, "series b": 10, "early stage": 12,
        "small team": 12, "founding team": 15, "bootstrapped": 12,
        "boutique": 10, "scaleup": 10, "mid-size": 8, "fast-paced": 8
    }

    REMOTE_KEYWORDS = {
        "remote": 10, "anywhere": 10, "work from anywhere": 10,
        "distributed": 8, "async": 8, "flexible": 6
    }

    # 3. Seniority & Track Matching
    SENIORITY_RANKS = {
        "founding product manager": 30, "lead product manager": 28,
        "founder's office": 30, "chief of staff": 30,
        "ai product manager": 28, "technical product manager": 26,
        "senior product manager": 25, "product manager": 22,
        "product operations": 20, "associate product manager": 18
    }

    # 4. Negative Keywords (Corporate Bloat & Unrelated Roles)
    NEGATIVE_KEYWORDS = [
        "intern", "internship", "sales rep", "sdr", "account executive",
        "graphic designer", "ui designer", "customer support agent", "hardware",
        "oracle dba", "mainframe", "clerk", "staffing agency"
    ]

    def score_job(self, title: str, description: str = "", tags: List[str] = None, location: str = "") -> ScoreResult:
        title_clean = title.lower()
        desc_clean = (description + " " + " ".join(tags or []) + " " + location).lower()
        full_text = f"{title_clean} {desc_clean}"
        
        reasons = []
        
        # Check Negative Keywords
        for neg in self.NEGATIVE_KEYWORDS:
            if re.search(r'\b' + re.escape(neg) + r'\b', title_clean):
                return ScoreResult(
                    fit_score=10, priority="P2", track="Unclassified",
                    domain_score=0, seniority_score=0, leverage_score=0,
                    preferences_bonus=0, engagement_model="Full-time",
                    reasons=[f"Disqualified by negative keyword '{neg}'"],
                    leverage_hook="", recommended_pitch=""
                )

        # 1. Compute Domain Score (Max 35)
        ai_pts = sum(pts for kw, pts in self.AI_KEYWORDS.items() if re.search(r'\b' + re.escape(kw) + r'\b', full_text))
        fo_pts = sum(pts for kw, pts in self.FOUNDERS_KEYWORDS.items() if re.search(r'\b' + re.escape(kw) + r'\b', full_text))
        fin_pts = sum(pts for kw, pts in self.FINTECH_DEVEX_KEYWORDS.items() if re.search(r'\b' + re.escape(kw) + r'\b', full_text))
        
        if fo_pts >= ai_pts and fo_pts >= fin_pts and fo_pts > 0:
            track = "Founder's Office"
            domain_score = min(35, fo_pts * 2)
            reasons.append(f"Founder's Office alignment (+{domain_score})")
        elif ai_pts >= fin_pts and ai_pts > 0:
            track = "AI PM"
            domain_score = min(35, ai_pts * 2)
            reasons.append(f"Applied AI / Agentic domain match (+{domain_score})")
        else:
            track = "Technical PM"
            domain_score = min(35, max(fin_pts * 2, 18))
            reasons.append(f"Fintech / Platform PM match (+{domain_score})")

        # 2. Compute Seniority / Role Fit (Max 25)
        seniority_score = 15
        for role_kw, score in self.SENIORITY_RANKS.items():
            if role_kw in title_clean:
                seniority_score = min(25, score)
                reasons.append(f"Role title matched '{role_kw}' (+{seniority_score})")
                break

        # 3. Compute Strategic Preference Bonuses (Max 25)
        pref_score = 0
        
        # Contractual / Fractional match
        is_contract = any(re.search(r'\b' + re.escape(kw) + r'\b', full_text) for kw in self.CONTRACT_KEYWORDS)
        if is_contract:
            pref_score += 15
            engagement_model = "Contractual / Fractional"
            reasons.append("⚡ Contractual / Fractional / Sprint-friendly (+15)")
        else:
            engagement_model = "Full-time (Open to Contract)"

        # India / Indian Founder match
        is_india = any(re.search(r'\b' + re.escape(kw) + r'\b', full_text) for kw in self.INDIA_FOUNDER_KEYWORDS)
        if is_india:
            pref_score += 12
            reasons.append("🇮🇳 Indian Founder / India Hub match (+12)")

        # Small Team / Mid-tier match
        is_small_mid = any(re.search(r'\b' + re.escape(kw) + r'\b', full_text) for kw in self.SMALL_MID_STARTUP_KEYWORDS)
        if is_small_mid:
            pref_score += 10
            reasons.append("🚀 Small Team / High-Velocity Scaleup (+10)")

        # Remote match
        is_remote = any(re.search(r'\b' + re.escape(kw) + r'\b', full_text) for kw in self.REMOTE_KEYWORDS)
        if is_remote:
            pref_score += 8
            reasons.append("🌐 Remote-First (+8)")

        preferences_bonus = min(25, pref_score)

        # 4. Compute Candidate Leverage Score (Max 20)
        leverage_score = 15
        if track == "AI PM":
            hook = "Architected multi-agent RAG with zero-hallucination citation ledger (Legal Owl); deployed DeepEval at Kotak Bank to evaluate 100+ banking safety metrics."
            pitch = "Pitch fast AI prototype delivery, agent verification guardrails (DeepEval), and high-reliability LLM pipelines."
        elif track == "Founder's Office":
            hook = "High-agency operator: built centralized reporting cutting query times by 95%, scaled internal BDD platform to 5+ teams, bridge engineering and business ops."
            pitch = "Pitch 0-to-1 operational execution, sprint unblocking, and cross-functional product ownership."
        else:
            hook = "Led core cash transaction capabilities across Finacle/TAS banking rails; 90% test cycle reduction via internal DevEx platforms."
            pitch = "Pitch core transaction rails, API platform architecture, and developer productivity systems."

        total_score = min(100, domain_score + seniority_score + preferences_bonus + leverage_score)

        # Priority Thresholds
        if total_score >= 80:
            priority = "P0"  # Immediate priority
        elif total_score >= 65:
            priority = "P1"  # High priority
        else:
            priority = "P2"  # Standard backlog

        return ScoreResult(
            fit_score=total_score,
            priority=priority,
            track=track,
            domain_score=domain_score,
            seniority_score=seniority_score,
            leverage_score=leverage_score,
            preferences_bonus=preferences_bonus,
            engagement_model=engagement_model,
            reasons=reasons,
            leverage_hook=hook,
            recommended_pitch=pitch
        )

# Global singleton
scorer = ProfileScorer()

if __name__ == "__main__":
    test_roles = [
        ("AI Product Manager (Contract)", "Early-stage AI startup in Bengaluru looking for a fractional or contract AI PM to ship RAG agents.", "Bengaluru / Remote"),
        ("Founder's Office - Growth & Operations", "Series A Indian fintech scaleup seeking high-agency operator.", "Remote / India"),
        ("Senior Product Manager - Enterprise Banking", "Fortune 500 bank looking for full time PM.", "New York, USA")
    ]
    print("🧪 Testing Recalibrated Profile Scorer:")
    for t, d, l in test_roles:
        res = scorer.score_job(t, d, location=l)
        print(f"\nRole: {t} [{l}]")
        print(f" -> Score: {res.fit_score}/100 | Priority: {res.priority} | Track: {res.track} | Engagement: {res.engagement_model}")
        print(f" -> Reasons: {', '.join(res.reasons)}")
