---
title: AI Roles (Agents)
sidebar_label: AI Roles
---

# AI Roles (Agents)

AI Roles (formerly Agents) are specific personas you instruct the AI to adopt.

:::tip Integrated in .cursorrules
If you use the [**.cursorrules**](../07-templates/cursor-rules-template.md) file, you often don't need to manually invoke these. The system automatically switches roles based on your task (e.g. Planning → Architect, Coding → Builder).
:::

By assigning a clear role, you limit the AI's search space and force it to adopt professional constraints.

## Available Agents

- **[Overview](overview.md)**: Why use personas?
- **[Requirements Engineer](requirements-engineer.md)**: Clarifies intent, creates User Stories.
- **[Solution Architect](solution-architect.md)**: Designs systems, makes trade-offs (ADRs).
- **[Frontend Developer](frontend-developer.md)**: Implements UI/UX with strict component rules.
- **[Backend Developer](backend-developer.md)**: Implements logic, API, and database schemas.
- **[QA Engineer](qa-engineer.md)**: Writes tests, analyzes defects, creates reproduction steps.

## How to use

Start every significant session with:
> "Act as a [Role Name]. Context: [Project Context]..."
