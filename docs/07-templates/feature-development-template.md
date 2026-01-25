---
title: Active Feature (Single Source of Truth)
sidebar_position: 2
---

# Active Feature Template

This is the **most important file** in your project. It is the "Brain" of the current session.
Whenever you start work, you copy this to `docs/active-feature.md` and fill it out.

```markdown
# Active Feature: [Feature Name]

**Status:** [Draft / In-Progress / Review / Done]
**Related Ticket:** [Link or ID]

## 1. Goal & Context
> What are we building and why? (1-2 sentences)
> Reference: `project-brief.md` for big picture.

## 2. Acceptance Criteria (The "Definition of Done")
*   [ ] User can...
*   [ ] User sees...
*   [ ] Error handled when...

## 3. Technical Approach (The Plan)
- **Frontend Components:** 
    - `components/NewFeature.tsx` (New)
- **Backend/API:**
    - `POST /api/feature`
- **Data Models:**
    - `interface Feature { id: string; ... }`

## 4. Work Log / Progress
*   [x] Step 1: Defined Interfaces
*   [ ] Step 2: Created Mock API
*   [ ] Step 3: Implemented UI
*   [ ] Step 4: Connected Real API

## 5. Verification
*   [ ] **Manual Test:** Verified that clicking X does Y.
*   [ ] **Automated Test:** Added test case in `tests/feature.test.ts`.
*   [ ] **No Regressions:** Checked that existing features still work.

## 6. Outcome & Closing (The Ritual)
> **Force yourself to answer these before closing.**

### 📦 Scope Delivered
*   **Built:** [Summary of delivered value]
*   **Consciously cut:** [What did we decide NOT to build? e.g. Animations, Mobile View]

### ⚖️ Trade-offs & Risks
*   **Accepted Debt:** [e.g. No caching yet, hardcoded keys]
*   **Unresolved Risks:** [e.g. N+1 query on large datasets]

### ⏭️ Follow-up
*   [ ] Created ticket for remaining work: [Link]
```
