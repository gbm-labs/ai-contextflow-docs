---
title: Pull Request Template (GitHub/GitLab)
sidebar_position: 9
---

# Pull Request Template

Use this template in `.github/pull_request_template.md` to enforce quality checks before merging.

```markdown
## Description
<!-- What does this PR do? Link the ticket/issue. -->
This PR implements [Feature Name] defined in `docs/active-feature.md`.

## Type of Change
- [ ] New Feature
- [ ] Bug Fix
- [ ] Refactor
- [ ] Documentation Update

## 🛡️ Trust & Safety Checks
<!-- Force yourself to answer these before asking for review -->

### 1. Context Verification
- [ ] I have read the `docs/project-brief.md` constraints.
- [ ] `docs/active-feature.md` is up-to-date with reality.

### 2. Testing Strategy
- [ ] **Automated Tests:** I added/updated tests for this change.
- [ ] **Manual Verification:** I ran the app and clicked through the flow.
*   *If NO tests:* I certify that this is a trivial change (e.g. CSS, Text).

### 3. Architecture & Security
- [ ] No secrets (API Keys) committed.
- [ ] No breaking database changes (or migration is included).
- [ ] All `any` types are removed.

## 📸 Screenshots (if UI change)
<!-- Paste before/after images here -->
```
