---
title: Refactoring Plan Template
sidebar_position: 2
---

# Refactoring Plan

## Purpose
This document defines a **clear, step-by-step plan for a refactoring effort**.

It exists to prevent loss of direction, uncontrolled scope growth, and unsafe changes — especially when refactoring is supported by AI.

A refactoring must not start until this plan exists.

---

## How to Use This Template

1. Create a new file:
   - `refactors/refactor-<short-name>.md`
2. Use AI in the **Developer** or **Solution Architect** role to help draft the plan.
3. Keep the plan concise, explicit, and focused.
4. Update the plan only if scope changes are explicitly approved.

---

## 1. Refactoring Goal

**Why is this refactoring necessary?**

- What concrete problem does it solve? (complexity, coupling, duplication, testability, performance, maintainability)
- What negative outcome are we trying to avoid?

---

## 2. Success Criteria

**How will we know the refactoring was successful?**

- What measurable or observable improvement should exist afterward?
- What should be easier, safer, or clearer?

---

## 3. Scope

### In Scope
- Which modules, files, or components are explicitly included?

### Out of Scope (Required)
- What will *not* be touched, even if tempting?

---

## 4. Risk Assessment

- What could realistically go wrong?
- Is this code on a critical execution path?
- How severe would a regression be?

---

## 5. Safety Net (Tests)

**How is current behavior protected?**

- Existing tests that already cover this area
- New tests to be added before refactoring
- Characterization tests (if behavior is unclear)

---

## 6. Step-by-Step Refactoring Plan

Break the refactoring into **small, reviewable steps**.

Example:
1. Add missing tests for current behavior
2. Rename confusing identifiers
3. Extract function/module X
4. Introduce interface/adapter
5. Remove obsolete code

Each step should:
- be independently safe
- compile and pass tests
- be explainable

---

## 7. Validation Checklist

Before considering the refactor complete, confirm:
- All tests pass (unit + integration)
- Build succeeds
- No new warnings or lint errors
- Code is at least as understandable as before
- Definition of Done is satisfied

---

## 8. Rollback Strategy

If something goes wrong:
- How can we revert safely?
- Which commit(s) represent a safe restore point?

---

## 9. Notes and Follow-Ups

- Open questions
- Deferred improvements (explicitly *not* part of this refactor)

---

## Status

- Author:
- Date:
- Status: Draft / In Progress / Completed
