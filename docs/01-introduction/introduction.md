---
sidebar_position: 1
sidebar_label: Home
title: contextFirst
description: A context-first system that keeps architecture, intent, and product decisions aligned across sessions.
slug: /
---

# Introduction

<div style={{
  marginBottom: '2rem',
  borderRadius: '8px',
  overflow: 'hidden',
  boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
}}>
  <img 
    src="/img/new-hero-img.png"
    alt="contextFirst Hero" 
    style={{
      width: '100%',
      height: 'auto',
      display: 'block'
    }} 
  />
</div>

<div style={{ 
  padding: '1rem', 
  borderLeft: '4px solid var(--ifm-color-primary)',
  background: 'var(--ifm-background-color-contrast)',
  marginBottom: '2rem'
}}>
  <h2 style={{ margin: '0 0 0.5rem 0' }}>About contextFirst</h2>
  <p style={{ margin: 0, fontSize: '1.1rem', opacity: 0.9 }}>
    A context-first system that keeps architecture, intent, and product decisions aligned across AI development sessions.
  </p>
</div>

**contextFirst** is a proposal for disciplined AI engineering. It is not a rigid product, but an agnostic framework that you can activate to bring structure to Gen-AI chaos in your software projects. Once active, the AI assistant guides you to keep mental load to a minimum while significantly improving your software quality and process predictability.

It helps you maintain ownership of your codebase by ensuring that your AI assistant (Cursor, Copilot, Windsurf) respects your architecture and product intent - even weeks into a project. 

> **"Context Awareness is what keeps AI aligned over time."**

:::tip Magic Moment
**Don't worry about writing documentation manually.** The AI acts as your scribe, interviewing you to generate the necessary context files (Project Brief, Specs) automatically before writing a single line of code.
:::

## The Reality Check: Why "Magic" Breaks

Building software with AI feels magical at first. It’s like **"Vibe Coding"** (a la Lovable/v0) - fast, visual, and impressive.

But purely generative coding is **Debt-on-Demand**.
*   The codebase becomes a black box you are afraid to touch.
*   The AI forgets its own decisions from yesterday.
*   You trade **Construction Time** (fast) for **Debugging Time** (slow).

**If AI is a Ferrari engine, contextFirst is the steering wheel.**
Without it, adding more power (better models) just means you crash faster.

## The Missing Piece: Context

This is not a library or a rigid SaaS product. It is a **methodology** for your AI Editor.

It creates a "Constitution" that forces the AI to behave like a Senior Engineer rather than an impulsive Junior.

| Comparison | "Vibe Coding" / Chat | contextFirst |
| :--- | :--- | :--- |
| **Mindset** | "Generate this for me." | **"Limit the scope to this."** |
| **Analogy** | A **Freelancer** who ghosts you. | A **Partner** who documents everything. |
| **Outcome** | A demo that breaks tomorrow. | **A product that scales.** |
| **Logic** | Implicit ("Guess what I want") | **Explicit** ("Refuse until I spec it") |
## Strategic Fit

This approach is meant as an operating model for professionals prioritizing long-term stability over short-term speed.

| Role | Why this matters |
| :--- | :--- |
| **Senior Developers & Founders** | Acts as an architectural memory layer. It prevents you from explaining the same context twice, allowing you to **operate as a CTO rather than just a coder**. |
| **Engineering Leads** | Mitigates "architectural drift". The system enforces your **established patterns and design principles** before any new code is written. |
| **Product Managers** | Turns requirements into strict constraints. Your product definitions actively steer the implementation, **closing the gap between intent and execution**. |

**The Trade-off**: You invest 5% more effort in defining intent to gain stability and sustained velocity as complexity grows.
## The Strategy: Manage the Machine

As a Senior Leader, you know that **typing code is the cheapest part of development**. The scarce resources are **Clarity, Architecture, and Consistency**.

This kit enforces a "Managerial Loop":

1.  **Define Context:** No code is written without a `Project Brief`. Use the AI to *interview you*, not just to output code.
2.  **Enforce Quality:** The AI actively checks `Standards` before proposing solutions. It is allowed to **challenge you**.
3.  **Capture Knowledge:** Mistakes are recorded in `Lessons Learned`. We don't solve the same bug twice.

> **"It turns the AI from a text generator into a systems thinker."**

## A Personal Note

I developed this system for myself over the course of 3 years working intensively with AI-assited coding. 

I realized that my projects suffered from architectural drifts and that I needed to delegate the "typing" but keep a tight grip on the "thinking". This kit is the result of that investigation: A way to leverage the massive efficiency-boost of AI without sacrificing the quality standards of professional engineering.

It is opinionated, meaningful, and, I think, most likely a bit anti-hype.

---

## Where to start

*   **[Quickstart](../02-getting-started/new-project.md)**: If you just want to see it work.
*   **[The Rules](../07-templates/cursor-rules-template.md)**: Read the brain of the system (`.cursorrules`).
*   **[The Workflow](../05-workflows/feature-development.md)**: See how an AI Feature Cycle works properly.

:::warning To put this into perspective
This kit is comprehensive, but you don't need to use everything. Furthermore, the system does not enforce anything automatically (yet). It requires the user's acceptance to follow the suggested steps by the contextFirst assistant. 
:::

**The "Zero to Hero" Path:**

1.  **Essential (Start here)**
    *   `docs/project-brief.md` (What are we building?)
    *   `.cursorrules` (The System Enforcer)
    *   `docs/active-feature.md` (The execution engine)
    
2.  **Recommended (For complex apps)**
    *   `docs/architecture/*.md` (ADRs, State, Domain Model)
    *   `docs/lessons-learned.md` (Project Memory)

3.  **Optional (For visual products)**
    *   `docs/specs/*.md` (UI/UX definitions)

---

## Ready to start?

Go to [Getting Started](../02-getting-started/index.md) to set up your repository in 2 minutes. The contextFirst system will guide you from there on. 





## This is an Invitation (Not a Dogma)

I am not a "Guru". I am simply an engineer who got tired of debugging AI hallucinations.

This system represents my personal "Operating System" for surviving the AI age. It works for me. It gives me peace of mind that my codebase won't collapse under its own weight after three sprints.

**But development is a personal craft.**
*   **Take what works.**
*   **Ignore what doesn't.**
*   **Improve it.**

For sure, "Vibe coding" is fun for weekend hacks. But if you are building something that needs to survive longer than 4 weeks (and generate revenue), you need a system. This is mine. I hope it helps you build yours.

---

## License and Usage
Use freely, adapt consciously, and improve deliberately. Tipp: If you change the rules, do so explicitly and document why.

<div align="center">
  <p>Got questions, suggestions, or just want to connect?</p>
  <a className="button button--secondary button--lg" href="mailto:joscha.gbm@gmail.com">Contact Me</a>
</div>

<br />

## 📚 Quick Navigation

- **[Standards](../06-standards/index.md)**: Best practices for Clean Code and Testing.
- **[Core Concepts](./core-concepts.md)**: How we integrate AI into daily coding.
