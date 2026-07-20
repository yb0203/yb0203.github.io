# Original User Request

## Initial Request — 2026-07-12T21:32:31Z

Research and draft a 6-session syllabus and session playbook for an "Applied AI Agents Course for Non-Developers (Aspiring PMs)", grounded in a comparative audit of top-tier industry/academic AI agent courses and modern agentic taxonomy.

Working directory: /Users/hkc/Documents/job-prep/ai agents course
Integrity mode: development

## Requirements

### R1. Comparative Course Audit
Perform research on top-tier AI agent courses (e.g., Stanford CS224R, UC Berkeley CS294, Reforge AI Foundations/Evals/Productivity, and Maven/Section cohorts) to synthesize common themes, structures, and applied AI taxonomy. Save these findings in `audit_report.md`.

### R2. Applied AI Agents Syllabus
Design a 6-session syllabus focused on applied AI agent concepts and hands-on building blocks using standard, zero-setup interfaces (e.g., Custom GPTs, Gemini Gems, Claude Projects). Save this in `syllabus.md`.

### R3. Session Playbooks
For each of the 6 sessions, write a detailed, step-by-step instruction playbook/lesson plan under `sessions/session_X.md`. Each session file must include:
- Conceptual foundations (grounded in taxonomy).
- PM context (relevance, product implications, latency/cost trade-offs).
- Step-by-step live demo setup and script for the instructor.
- Student hands-on exercise instructions (using ChatGPT/Claude/Gemini free tier).
- Key deliverables or milestones.

### R4. Product Manager Deliverables Template
Provide templates/scorecards for PM student exercises:
- A "Build vs. Buy" scorecard for agentic features.
- An "AI Product Requirements Document (PRD)" template customized for agentic systems.
- An "AI Agent Evaluation Rubric" template.

## Acceptance Criteria

### Content and Taxonomy Coverage
- [.] The course structure explicitly covers the 5 major taxonomy areas: Brain/Reasoning, Planning, Memory/RAG, Tool Use, and Collaboration/Multi-Agent systems.
- [.] The material balances conceptual theory (30%) with practical application and product management strategy (70%).
- [.] Every session has a dedicated hands-on student activity that requires zero code and uses standard LLM web interfaces.

### Document Deliverables
- [.] `audit_report.md` exists and details the findings from at least 3 distinct courses audited.
- [.] `syllabus.md` contains the high-level 6-session schedule and learning objectives.
- [.] The `sessions/` directory contains 6 markdown files (`session_1.md` through `session_6.md`), each exceeding 300 words of detailed instructional content.
- [.] A `templates/` directory exists with the 3 PM templates specified in R4.
