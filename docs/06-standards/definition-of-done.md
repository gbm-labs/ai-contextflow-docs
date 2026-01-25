---
title: Definition of Done
sidebar_position: 1
---

# Definition of Done

## Purpose
The Definition of Done (DoD) defines the **minimum acceptable quality bar** for all work produced using this system.

It exists to prevent ambiguity, quality erosion, and premature completion — especially in AI-assisted development environments where speed can easily override rigor.

In case of conflict, **this document takes precedence over all other documents**.

---

## Scope
This Definition of Done applies to:
- All features
- All refactorings
- All bug fixes
- All architectural or structural changes

No work may be considered complete unless all applicable criteria are met.

---

## Core Principle

> "Working" is not the same as "Done".

Done means:
- understandable
- testable
- maintainable
- secure
- operable
- documented

---

## 1. Functional Correctness

- The implemented behavior matches the defined requirements or acceptance criteria.
- Edge cases relevant to the domain have been considered.
- No known functional defects remain.

---

## 2. Code Quality

- Code is readable and intentionally structured.
- Naming clearly expresses intent.
- **Single Responsibility:** Each file should do one thing well.
- **Complexity Cap:** Files > 300 lines are a "Code Smell". Propose a split unless strictly necessary (e.g., auto-generated code).
- No commented-out code or dead logic.

---

## 3. Architecture & Design

- Architectural boundaries are respected.
- Dependencies follow defined architecture principles.
- No new coupling is introduced without justification.
- Significant structural decisions are documented as Architecture Decision Records (ADRs).

---

## 4. Testing

- Appropriate automated tests exist.
- Tests cover critical logic and failure scenarios.
- Tests are deterministic and reliable.
- The test suite passes consistently.

---

## 5. Security

- No secrets or credentials are committed.
- Input validation and error handling are in place where applicable.
- No obvious security vulnerabilities are introduced.
- Sensitive data is handled deliberately and minimally.

---

## 6. Observability & Operability

- Relevant logging is in place (without leaking sensitive data).
- Failures are detectable and diagnosable.
- The system can be reasonably operated and maintained.

---

## 7. Documentation

- Public behavior is documented where necessary.
- Internal complexity is explained when not obvious.
- Any change that affects usage, behavior, or structure is reflected in documentation.

---

## 8. Maintainability

- The change does not reduce overall system clarity.
- Future modifications can be made without disproportionate effort.
- Technical debt is not increased without explicit acknowledgment.

---

## 9. Compliance with Standards

- All relevant standards in this repository are followed.
- Any deviation is explicitly documented and justified.

---

## 10. Final Verification

Before declaring work complete, confirm:
- All applicable DoD items are satisfied.
- The change can be explained clearly to another developer.
- The system is at least as understandable as before the change.

---

## Authority

All Agents and workflows must enforce this Definition of Done.

AI systems must not declare work complete unless all applicable criteria are met.

---

## Status

This Definition of Done is intentionally strict.

If it feels restrictive, it is likely preventing a future problem.
