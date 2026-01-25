---
title: Documentation Standards
sidebar_position: 7
---

# Documentation Standards

## Purpose
These standards define how documentation is created and maintained to support **long-term maintainability, onboarding, and operational clarity**.

Documentation is treated as a **first-class artifact**, not an afterthought.

---

## Scope
Applies to:
- developer documentation
- architecture and decision records
- configuration and operational notes
- user-facing technical documentation (where applicable)

---

## Core Principles

1. **Document intent, not implementation details**.
2. **Keep documentation close to the code and decisions**.
3. **Prefer concise clarity over exhaustive detail**.
4. **Outdated documentation is worse than missing documentation**.

---

## What Must Be Documented

### Always
- public or externally visible behavior
- non-obvious domain rules or invariants
- architectural boundaries and long-term decisions
- configuration options that affect behavior or security

### When Relevant
- trade-offs and rejected alternatives (ADR)
- performance-sensitive behavior
- security-relevant constraints or assumptions

---

## Documentation Types

### Feature Documentation
- high-level description of behavior
- acceptance criteria and constraints
- known limitations

### Architecture Documentation
- Architecture Principles (global)
- Architecture Decision Records (project-level)

### Operational Documentation
- setup and deployment prerequisites
- environment configuration notes
- failure modes and recovery hints

---

## Documentation Triggers

Documentation must be updated when:
- behavior changes
- interfaces change
- configuration changes
- architectural decisions change
- assumptions are invalidated

---

## Quality Standards

- Documentation must be understandable without deep code inspection.
- Avoid duplicating information that is likely to drift.
- Use clear language and consistent terminology.
- Keep examples minimal and relevant.

---

## Ownership and Maintenance

- Documentation changes should be reviewed alongside code changes.
- Each document must have a clear owner (role or team).
- Deprecated documentation must be removed or clearly marked.

---

## CI and Review Expectations

Where applicable:
- documentation changes should be part of the same change as code
- missing required documentation may block completion

---

## Anti-Patterns

- Large README files that mix unrelated topics
- Outdated documentation left “for later”
- Documenting obvious code instead of intent
- Copying documentation between projects without validation

---

## Quality Gates

A change meets Documentation Standards only if:
- required documentation exists and is updated
- documentation reflects current behavior
- critical decisions and assumptions are captured
- Definition of Done is satisfied
