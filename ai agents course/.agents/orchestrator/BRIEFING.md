# BRIEFING — 2026-07-12T16:03:00Z

## Mission
Orchestrate the research and creation of the Applied AI Agents Course syllabus, playbooks, course audit, and templates.

## 🔒 My Identity
- Archetype: Orchestrator
- Roles: orchestrator, user_liaison, human_reporter, successor
- Working directory: /Users/hkc/Documents/job-prep/ai agents course/.agents/orchestrator/
- Original parent: parent (Sentinel)
- Original parent conversation ID: d5ed5c0f-f9ea-4202-b780-c808f0a1c421

## 🔒 My Workflow
- **Pattern**: Project
- **Scope document**: /Users/hkc/Documents/job-prep/ai agents course/PROJECT.md
1. **Decompose**: Decompose the project into sequential milestones to research, draft, review, and finalize all course deliverables.
2. **Dispatch & Execute** (pick ONE):
   - **Direct (iteration loop)**: Spawn worker to write content, reviewer to check quality, and auditor to verify requirements sequentially.
3. **On failure** (in this order):
   - Retry: nudge stuck agent or re-send task
   - Replace: spawn fresh agent with partial progress
   - Skip: proceed without (only if non-critical)
   - Redistribute: split stuck agent's remaining work
   - Redesign: re-partition decomposition
   - Escalate: report to parent (sub-orchestrators only, last resort)
4. **Succession**: Self-succeed at 16 spawns, write handoff.md, spawn successor.
- **Work items**:
  1. Comparative Course Audit (`audit_report.md`) [pending]
  2. Applied AI Agents Syllabus (`syllabus.md`) [pending]
  3. Session 1-3 Playbooks (`sessions/session_1-3.md`) [pending]
  4. Session 4-6 Playbooks (`sessions/session_4-6.md`) [pending]
  5. PM Deliverables Templates (`templates/`) [pending]
- **Current phase**: 1
- **Current focus**: Milestone 1 - Comparative Course Audit

## 🔒 Key Constraints
- Cover 5 taxonomy areas: Brain/Reasoning, Planning, Memory/RAG, Tool Use, and Collaboration/Multi-Agent systems.
- Balance theory (30%) and PM strategy/application (70%).
- Zero-code web interface hands-on exercise in every session.
- Max 1 active concurrent subagent. Keep execution sequential.
- Write progress updates to .agents/orchestrator/progress.md.

## Current Parent
- Conversation ID: d5ed5c0f-f9ea-4202-b780-c808f0a1c421
- Updated: not yet

## Key Decisions Made
- Chose 5 milestones to sequentially address the audit, syllabus, playbooks, templates, and final alignment.

## Team Roster
| Agent | Type | Work Item | Status | Conv ID |
|-------|------|-----------|--------|---------|
| worker_audit_failed | teamwork_preview_worker | Course Audit research and writing | failed | 6913b493-80c4-4077-9cc7-eef06d0b6e83 |
| worker_audit_2 | teamwork_preview_worker | Course Audit research and writing | failed | 595092c0-8707-4a9a-9f20-df08f78b91c3 |
| worker_audit_3 | teamwork_preview_worker | Course Audit research and writing | failed | 34c94d9f-9181-4046-88b0-c05d411631b9 |
| worker_audit_4 | teamwork_preview_worker | Course Audit research and writing | in-progress | 8b2c8ca2-d8ea-4271-988d-502db579897e |

## Succession Status
- Succession required: no
- Spawn count: 4 / 16
- Pending subagents: 8b2c8ca2-d8ea-4271-988d-502db579897e
- Predecessor: none
- Successor: not yet spawned

## Active Timers
- Heartbeat cron: task-41
- Safety timer: none
- On succession: kill all timers before spawning successor
- On context truncation: run `manage_task(Action="list")` — re-create if missing

## Artifact Index
- /Users/hkc/Documents/job-prep/ai agents course/ORIGINAL_REQUEST.md — Original request and constraints
- /Users/hkc/Documents/job-prep/ai agents course/.agents/orchestrator/ORIGINAL_REQUEST.md — Local copy of original request
