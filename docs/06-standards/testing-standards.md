---
title: Testing Standards
sidebar_position: 3
---

# Testing Standards

## Purpose
These standards define how testing is approached to achieve **enterprise-grade reliability** without wasting effort on meaningless coverage.

Testing exists to:
- preserve behavior while enabling change
- prevent regressions and production incidents
- provide confidence for refactoring and upgrades

---

## Scope
Applies to all code changes:
- features
- defect fixes
- refactorings
- performance and security changes

In case of conflict, the **Definition of Done** remains the final gate.

---

## Core Principles

1. **Risk-based testing**: test effort must match business and technical risk.
2. **Fast feedback first**: most confidence should come from fast, deterministic tests.
3. **Tests are products**: tests must be readable, maintainable, and trustworthy.
4. **Prefer prevention over detection**: design for testability and clear boundaries.

---

## Test Strategy Model

### The Expected Mix
- **Unit tests**: default for pure logic and invariants (fast, isolated)
- **Component tests** (UI/service level): validate interactions and edge cases at boundaries
- **Integration tests**: validate module/service boundaries and important integrations
- **End-to-end tests**: limited set for critical user journeys and release confidence

> If you can’t test something, treat that as a design problem.

---

## What Must Be Tested (Minimum)

### Always
- critical domain rules and invariants
- error handling paths (not only happy path)
- input validation at boundaries
- persistence or serialization behavior (where relevant)
- security-sensitive logic (authn/authz, permission checks)

### For UI
- critical user flows (login, checkout, core workflow)
- form validation behavior and error messaging
- accessibility-critical interactions (keyboard navigation/focus for key flows)

### For APIs
- contract behavior (request/response shape, status codes)
- idempotency and concurrency edge cases (where applicable)

---

## Determinism and Reliability

### Non-Negotiables
- Tests must be deterministic. Flaky tests are treated as defects.
- No test should depend on real network services by default.
- Time, randomness, and external state must be controlled.

### Flaky Test Policy
- If a test flakes: fix it or quarantine it immediately.
- Quarantined tests must have an owner and a plan to restore.

---

## Boundaries and Mocking Policy

### Preferred Approach
- **Unit tests** may mock dependencies, but only at well-defined boundaries.
- **Integration tests** should use real implementations inside the system.
- Avoid mocking internal implementation details.

### Rules
- Mock **unstable or external** dependencies (third-party APIs, email/SMS providers, payment gateways).
- Prefer fakes/stubs over deep mocks when behavior matters.
- If a mock requires knowledge of internals, the design is too coupled.

---

## Coverage Philosophy

- Do not optimize for a number.
- Optimize for **confidence in critical paths** and **change safety**.

---

## Testing in the Age of AI

AI is excellent at generating boilerplate tests, but terrible at judging their value.

:::warning The "Green Build" Illusion
AI often generates "tautologies"—tests that mirror the implementation so closely that they pass even if the logic is fundamentally wrong.
:::

### 1. The "Test-First" Prompt Pattern
Do not ask AI to "write tests for this code."
Instead, ask:
> "Act as QA. Write a test case that fails if [Requirement X] is not met. Do not implement the code yet."

### 2. Validating AI-Generated Tests
When AI generates a test suite, audit it for:
- **Mocking Extravaganza:** Did it mock the `database.save()` method to force a success, proving nothing?
- **Assertion Weakness:** Did it just check `expect(result).toBeDefined()` instead of checking the actual data integrity?

### 3. "Poor Man's Mutation Testing"
To verify an AI test suite, deliberately break your source code (e.g., flip a `<` to `>`).
If the AI-generated tests still pass, they are worthless. Delete them.

Coverage targets (if used) must:
- be risk-adjusted
- exclude generated code
- not incentivize meaningless tests

---

## Test Naming and Structure

- Names must describe behavior and outcome.
- Prefer **Given / When / Then** style for clarity.
- Tests must be readable without requiring mental simulation of the code.

---

## CI Expectations

For a change to be accepted:
- relevant test suites must run in CI
- tests must pass consistently
- the change must not introduce new flakes or slow down the suite unreasonably

---

## Test Data and Environments

- Use synthetic, minimal test data by default.
- Avoid real personal data in tests.
- Tests must not require special local setup beyond documented prerequisites.

---

## Documentation

When a system behavior is subtle or critical:
- document the intent in the feature file and/or ADR
- ensure tests reflect the documented behavior

---

## Quality Gates

A change meets Testing Standards only if:
- critical logic and failure scenarios are covered
- tests are deterministic and maintainable
- mocking respects boundaries
- CI can run tests reliably

---

## Anti-Patterns

- Testing only the happy path
- Excessive mocking of internals
- Snapshot tests used as a substitute for meaningful assertions
- Flaky tests tolerated as “normal”
- Coverage-driven test writing without risk justification
