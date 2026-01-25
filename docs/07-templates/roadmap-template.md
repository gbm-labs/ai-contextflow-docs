---
title: Project Roadmap
sidebar_position: 3
---

# Project Roadmap

## Purpose
This document tracks the **Macro-Level Progress** of the project.
Unlike `active-feature.md` (which is about *one* task), this file captures the **Sequence** and **Maturity** of the application.

**AI Interaction:**
- Ask the AI: *"Where are we in the roadmap?"* or *"What is next?"*
- Update this file when a major feature set is completed (Milestone reached).

---

## 1. Project Status Summary
**Current Phase:** [e.g. MVP / Alpha / Scaling]
**Overall Progress:** [e.g. 20%]
**Next Major Milestone:** [e.g. Public Beta Launch]

---

## 2. Phasing Strategy

### Phase 1: MVP (Foundation)
*Goal: Core value proposition, usable by friends.*
- [ ] **Infrastructure Setup** (Repo, CI/CD, Auth)
- [ ] **Core Domain Models** (User, Workspace, Item)
- [ ] **Key Feature A:** [Description]
- [ ] **Key Feature B:** [Description]

### Phase 2: Refinement (Alpha)
*Goal: Production-ready quality, removing "Happy Path Only" limits.*
- [ ] **Error Handling & Resilience**
- [ ] **User Settings & Profile**
- [ ] **Mobile Responsiveness**
- [ ] **Analytics & Logging**

### Phase 3: Scale (V1.0)
*Goal: Ready for public marketing.*
- [ ] **Performance Optimization**
- [ ] **Onboarding Flows**
- [ ] **Billing / Subscriptions**

---

## 3. Detailed Feature Backlog (Prioritized)

| Status | Priority | Feature | Description | Dependencies |
| :--- | :--- | :--- | :--- | :--- |
| 🟡 In Progress | P0 | User Auth | Login/Signup with Supabase | None |
| 🔴 Todo | P0 | Dashboard | View metrics | Auth |
| 🔴 Todo | P1 | Export PDF | Allow PDF download | Dashboard |
| 🟢 Done | P0 | UI Setup | Tailwind Implementation | None |

*(Status: 🔴 Todo, 🟡 In Progress, 🟢 Done, ⚪ Deprecated)*

---

## 4. Maturity Assessment (Self-Check)

**Architecture:**
- [ ] Core Data Model stable?
- [ ] API Boundaries defined?
- [ ] Authentication secure?

**Quality:**
- [ ] Critical paths tested?
- [ ] No major linter errors?
- [ ] CI pipeline passing?

**Process:**
- [ ] `project-brief.md` is up to date?
- [ ] `lessons-learned.md` is being used?

