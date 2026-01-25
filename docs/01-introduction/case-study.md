---
title: 'Case Study: "The Vibe Trap"'
sidebar_position: 3
---

# Case Study: "The Vibe Trap"

### Why "Fast" is usually Slow

It is easy to misunderstand the value of this kit. To show you precisely **why** you need it, let's play through a realistic scenario.

**The Scenario:** You are building a **Task Management SaaS**.
**The Task:** "Add a 'Priority' badge to the Task Card component and let users filter by it."

---

## Path A: The "Vibe Coding" Approach (Without Kit)

You open your editor (Cursor/Windsurf) and type:
> *"Add a priority badge to the task card. High is red, Medium is yellow, Low is grey. Also add a filter dropdown at the top."*

### The "Magic" Result (Day 1)
The AI is brilliant. It edits `TaskCard.tsx`, adds a standard HTML `<select>` into `TaskList.tsx`, and modifies the local component state. It looks perfect. You commit and feel like a god.

### The Reality Check (Day 14)
The feature scope grows (as it always does).
*   **Request:** "We need the priority filter to persist in the URL so I can share the link."
*   **Request:** "The 'High Priority' red color must match our new Design System token, not standard red."
*   **Request:** "Priorities should be editable from the detailed view, not just the filter."

**And now, the crash:**
1.  **Hallucination:** You ask the AI to "update the filter state". It sees `TaskList.tsx` has local state, but doesn't know about your new URL-syncing library. It writes a **duplicate** state logic. Now the URL and the dropdown are out of sync.
2.  **Style Drift:** The AI hardcoded `#FF0000` for the badge. When you ask it to change it, it changes it in `TaskCard.tsx`, but forgets the `KanbanCard.tsx` that you created yesterday.
3.  **Spaghetti:** To fix the sync, the AI suggests wrapping everything in a new Context Provider inside `App.tsx`. Your root file is now 800 lines long.

**Result:** You are afraid to touch the code. You spend 4 hours debugging why the filter resets on refresh.

---

## Path B: The "Engineering" Approach (With Kit)

You open your editor. You have `.cursorrules` installed.

### Step 1: The Context Trigger
You type: "Feature: Add Priority Filtering".
The **Coach** intervenes:
> *"I see you want to add a feature. Let's load the **Active Feature Template**.
> Based on `project-brief.md`, we use **Zustand** for global filtering state and **Tailwind** for styling.
>
> **Question:** Should the filter interact with the existing URL parameters logic defined in `architecture/04-ui-ux.md`?"*

### Step 2: The Plan (5 Minutes)
You answer "Yes". The AI generates a tailored plan in `docs/active-feature.md`:
1.  **Update Domain:** Add `priority` field to `Task` interface (Schema First).
2.  **Update Store:** Modify `useTaskStore.ts` to include priority in the filter slice.
3.  **Update UI:** Create `PriorityBadge.tsx` (reusable) using the defined Design Tokens.

### Step 3: The Execution
You switch to **Frontend Developer** role.
> *"Implement the Domain and Store changes first."*

The AI writes code that **already integrates** with your URL syncing logic because it read the documentation. It doesn't hallucinate a new solution; it mimics the existing, correct pattern.

### Step 4: The Change
Later, when you need to change the color:
> *"Refactor: Update Priority Badge colors to use the new tokens."*
The AI checks `ui-design-system.md`, sees the new token, and updates the **single** `PriorityBadge.tsx` component.

---

## The Comparison

| Feature | Vibe Coding | Context-First Software Engineering |
| :--- | :--- | :--- |
| **Speed (First hour)** |  **Insane** (Instant result) |  **Slower** (Planning overhead) |
| **Speed (Week 2)** |  **Stuck** (Fixing bugs) |  **Steady** (Predictable growth) |
| **Knowledge** | Hidden in "Chat History" | Saved in `docs/` |
| **Reliability** | "Hope it works" | "Verified against Spec" |

### Conclusion

Vibe Coding is borrowing time from your future self.
**This Kit is paying it forward.**

If you are building a throwaway prototype, choose Path A.
If you are building a product, choose Path B.
