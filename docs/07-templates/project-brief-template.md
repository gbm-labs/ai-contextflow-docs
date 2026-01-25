---
title: Project Brief Template
sidebar_position: 1
---

# Project Brief

## Purpose
This document defines the **shared understanding of the project** before any implementation begins.

It exists to make intent, constraints, risks, and assumptions explicit so that AI-assisted development remains **controlled, consistent, and maintainable**.

This template is designed to be used **interactively with AI**:
- You can provide this document to an AI system
- The AI should ask the questions section by section
- Your answers are then consolidated into the final Project Brief

---

## How to Use This Template (Important)

1. Provide this template to the AI.
2. Instruct the AI to act as a **Requirements Engineer**.
3. Ask the AI to go through each section **one by one**.
4. Answer the questions honestly.
5. Allow the AI to generate the finalized version of this document.

> Unknowns are acceptable. Hidden assumptions are not.

---

## 1. Project Overview

### 1.1 Project Name
- What is the working title of the project?

### 1.2 One-Sentence Description
- In one clear sentence: what does this product do?

### 1.3 Problem Statement
- What problem does this project solve?
- For whom does this problem exist?

---

## 2. Target Users and Stakeholders

### 2.1 Primary Users
- Who will use the system directly?
- What role or context are they in?

### 2.2 Secondary Stakeholders
- Who else is affected by this system?

### 2.3 User Value
- What measurable or perceivable value does the user gain?

---

## 3. Goals and Success Criteria

### 3.1 Primary Goal
- What must be true for this project to be considered successful?

### 3.2 Success Metrics
- How will success be measured?
- What indicators matter most?

### 3.3 Non-Goals
- What is explicitly out of scope for this project?

---

## 4. Risk Profile and Criticality

### 4.1 Failure Impact
- What would be the worst reasonable failure?
- What would be unacceptable?

### 4.2 Risk Tolerance
- Is this project risk-averse or experimentation-friendly?

### 4.3 Regulatory or Legal Constraints
- Are there compliance, legal, or regulatory requirements?

---

## 5. Business Model & Monetization (SaaS Context)
*How does this product capture value? This affects various Architectural Decisions.*
- [ ] **Model:** [Free / One-time / Subscription / Usage-based]
- [ ] **Tiers:** [e.g. Free, Pro, Enterprise] - *Does this affect the Data Model (Features per Plan)?*
- [ ] **Tenancy:** [Single User vs. Teams/Organizations]

---

## 7. User Experience & Design Strategy
*Defines the visual ambition.*
- [ ] **Interface Type:** [CLI / Web App / Mobile / API-only]
- [ ] **Design Expectations:** [Prototype / Standard Bootstrap / Custom Professional Brand]
- *If Custom/Professional:* Should we initialize the `ui-design-system.md` template?

---

## 8. Functional Requirements

### 6.1 Domain Description
- In which domain does this system operate?

### 5.2 Key Domain Concepts & Relationships
- What are the core entities? (e.g., Users, Orders, Items)
- What are the key rules/invariants connecting them? (e.g., "An Order cannot exist without a User")
- What terms must be unambiguous?

### 5.3 Existing Systems
- Does this integrate with or replace existing systems?

---

## 6. Technical Axioms & Constraints (The "Hard Rules")

### 6.1 Axioms & Non-Negotiables (Overrides)
*Specific constraints that override standard patterns for this project or guide the AI's decision making.*

- [ ] **Infrastructure Constraints:** (e.g., "Must run on Raspberry Pi", "No Cloud Services")
- [ ] **Legacy Integrations:** (e.g., "Must use the existing SQL Database Schema")
- [ ] **Tech Stack Decisions:** (e.g., "Use TailwindCSS, avoid CSS-in-JS")
- [ ] **Anti-Patterns:** (e.g., "Do NOT use Class Components, only Hooks")

### 6.2 Tech Stack & Preferences (Important)
- **Languages:** (e.g., TypeScript, Python)
- **Frameworks:** (e.g., React, Next.js, FastAPI)
- **Data:** (e.g., PostgreSQL, Supabase, Redis)
- **Infrastructure:** (e.g., Vercel, AWS, Docker)
- **Key Libraries:** (e.g., Tailwind, Zod, React Query)

### 6.3 System Constraints
- **Target Platform:** Web, mobile, desktop, backend service, embedded
- **Operational:** Performance, latency, offline capability, scalability, cost

---

## 7. Architecture Direction

### 7.1 Architectural Style
- Modular monolith, microservices, serverless, etc.

### 7.2 Core Patterns (State, API, Data)
- **State Management:** (e.g. Redux, Context, Zustand, Server State)
- **API Pattern:** (e.g. REST, GraphQL, TRPC, Server Actions)
- **Folder Structure Strategy:** (e.g. Feature-based, Type-based)

### 7.3 Key Architectural Constraints
- Deployment model, multi-tenancy, real-time requirements
- Expected lifespan and growth of the system

---

## 8. Security and Privacy Considerations

### 8.1 Data Sensitivity
- What types of data are processed?

### 8.2 Security Criticality
- How severe would a security breach be?

### 8.3 Privacy Requirements
- Any specific privacy expectations or obligations?

---

## 9. Operational Expectations

### 9.1 Availability
- Expected uptime or tolerance for downtime

### 9.2 Observability
- Logging, monitoring, alerting expectations

### 9.3 Maintenance Model
- Who operates and maintains the system?

---

## 10. AI Collaboration Settings (Rules of Engagement)

### 10.1 "Product Strategist" Mode
- [x] **Enable Strategic Challenges** (Recommended)
  - *If checked:* The AI will question "Why" we are building features and suggest simpler MVPs.
  - *If unchecked:* The AI will execute tasks purely as ordered (Builder only).

### 10.2 "Security Guardian" Mode
- [x] **Enable Strict Security Audits**
  - *If checked:* The AI will auto-trigger the Security Engineer role for Auth/API/Data tasks.

### 10.3 Quality Expectations
- [ ] **Prototype:** Speed over structure. "Exploration Mode".
- [x] **Production:** Standards, Error Handling, Typesafety. (Default)

---

## 11. Open Questions and Assumptions

### 11.1 Open Questions
- What is currently unclear?

### 11.2 Explicit Assumptions
- What assumptions are being made?

---

## 12. Final Confirmation

- Is this document complete enough to start structured development?
- What would make it safer or clearer?

---

## Sign-Off

- Author:
- Date:
- Status: Draft / Approved
