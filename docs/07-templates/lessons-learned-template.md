# Project Memory (Lessons Learned)

> **Purpose:** This file acts as the project's "Long-Term Memory".
> When we solve a tricky bug, discover a weird API quirk, or make a pattern decision, we record it here.
> **The AI Architect checks this file before starting new tasks.**

## 🚨 Critical Technical Constraints (The "Gotchas")
*Things that break if we don't follow them.*

*   [Example]: The Physics Engine must run on a separate WebWorker, or the Main Thread freezes.
*   [Example]: Don't use `z-index` on Canvas overlays; use the specific R3F `View` sorting order.

## 🏗️ Architectural Decisions (Soft ADRs)
*Smaller decisions that don't need a full ADR but are important.*

*   **State Management:** We use Zustand for UI, but raw Refs for the Frame Loop (Performance).
*   **Styling:** Always use Tailwind `gap-*` instead of margins for layouts.

## 🐛 Bug Patterns & Fixes
*Recurrent issues we solved, so we don't debug them twice.*

| Date | Issue | Solution / Pattern |
| :--- | :--- | :--- |
| YYYY-MM-DD | React Hot Reload broke the WebGL Context | Added `dispose()` cleanup in `useEffect` return. |
| | | |

## 📚 Terminology & Domain Dictionary
*Specific words we use in this project.*

*   **Story:** The whole container (Project).
*   **Sequence:** A timeline of changes.
*   **Clip:** A single property override in time.
