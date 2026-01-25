---
sidebar_position: 1
title: Overview
slug: /agents
---

# Agents Overview

## What are Agents? ("Personas")

In the context of the **AI contextFlow Kit**, "Agents" are not autonomous software programs running in the background. Instead, they are **defined roles** (Personas) that you instruct your AI assistant (Copilot, ChatGPT, Claude, etc.) to adopt.

## Why use explicit roles?

AI models are generalists. Without specific instructions, they often:
- Skip safety checks
- Mix architectural layers
- Produce "it works" code rather than maintainable code
- Hallucinate requirements

By explicitly assigning a role (e.g., *"Act as a Requirements Engineer"*), you:
1. **Narrow the context**: The AI focuses on specific responsibilities.
2. **Enforce constraints**: Each agent has specific "Quality Gates" and "Anti-Patterns".
3. **Improve consistency**: The output follows a defined structure.

## The Core Team

The system defines several core agents that mimic a professional software team:

- **Requirements Engineer**: Clarifies intent and defines scope.
- **Solution Architect**: Makes high-level structural decisions.
- **Frontend Developer**: Implements UI and client-side logic.
- **Backend Developer**: Implements APIs, domain data, and services.
- **QA Engineer**: Validates quality and finds defects.
- **Product Owner**: Prioritizes work and accepts value (Optional).

## How to use an Agent

When starting a task, explicitly invite the AI into the role:

> "Act as a **[Agent Name]**. Review your responsibilities and the Definition of Done. We are working on [Task]..."

Always verify that the AI is adhering to the constraints of its current role.
