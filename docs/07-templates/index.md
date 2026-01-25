# Templates

Start your project on the right track with these standardized artifacts.

These templates ensure you don't start from a blank page. They force you to think about **Framing** before **Execution**.

## Quick Download

Get the full **AI contextFlow Kit** (Templates + Knowledge Base) to use offline or directly in your codebase.

<br />
<a className="button button--primary button--lg" href="https://github.com/gbm-labs/ai-contextflow/archive/refs/heads/main.zip" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 'fit-content', fontWeight: 'bold', textDecoration: 'none' }}>
  Download AI contextFlow (.zip)
</a>
<br /><br />

**What's inside the ZIP?**
1.  **⚙️ .cursorrules**: The "System Enforcer" that guides the AI.
2.  **📂 templates/**: Empty Markdown files for you to fill out (Project Brief, ADRs, etc.).
3.  **📂 knowledge-base/**: The full set of AI Roles, Guided Workflows, and Standards.

---

## What's Inside?

| Template | Purpose | When to use |
| :--- | :--- | :--- |
| **[Project Rules](cursor-rules-template.md)** | **The Coach**. Activates "Guided Mode" in your editor (Cursor/Copilot). | **Day 1**, setup in project root. |
| **[Active Feature](feature-development-template.md)** | **The Engine**. The single source of truth for current tasks. | **Every time** you code. |
| **[Project Roadmap](roadmap-template.md)** | **The Compass**. Tracks milestones and maturity. | **Weekly** or after major features. |
| **[Domain Model](domain-model-template.md)** | **The Skeleton**. Database schema and relationships. | **Day 1**, update on changes. |
| **[Project Brief](project-brief-template.md)** | Defines the "What" and "Why" of the project. | **Day 1**, before writing code. |
| **[System Instructions](system-instructions-template.md)** | Alternative for WebChat (ChatGPT/Claude). | If not using Cursor/Windsurf. |
| **[ADR (Architecture Decision)](adr-template.md)** | Records important technical choices. | whenever a major decision is made. |
| **[Refactoring Plan](refactoring-plan-template.md)** | Safe step-by-step guide for complex changes. | Before rewriting >100 lines of code. |
| **[UI Design Tokens](ui-design-system-template.md)** | Defines colors, spacing, and typography. | When starting frontend work. |
| **[PR Template](github-pr-template.md)** | Quality checklist for Pull Requests. | Setup in `.github/` folder. |

---

:::info Pro Tip
The `.cursorrules` file references the `knowledge-base`. Keep that folder in your project so the AI can "read up" on what a "QA Engineer" or "Solution Architect" role actually entails.
:::