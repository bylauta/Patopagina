# Skill Registry — PatoPagina

Generated: 2026-04-07

## User Skills

| Skill | Trigger | Source |
|-------|---------|--------|
| branch-pr | PR creation, opening PRs, preparing changes for review | `~/.claude/skills/branch-pr/SKILL.md` |
| issue-creation | Creating GitHub issues, bug reports, feature requests | `~/.claude/skills/issue-creation/SKILL.md` |
| judgment-day | "judgment day", "dual review", "doble review", adversarial review | `~/.claude/skills/judgment-day/SKILL.md` |
| go-testing | Go tests, Bubbletea TUI testing, teatest | `~/.claude/skills/go-testing/SKILL.md` |
| skill-creator | Creating new AI skills, agent instructions | `~/.claude/skills/skill-creator/SKILL.md` |

## System Skills (GSAP)

| Skill | Trigger |
|-------|---------|
| gsap-core | GSAP animations, gsap.to(), gsap.from(), easing, stagger |
| gsap-react | GSAP in React/Next.js, useGSAP hook |
| gsap-scrolltrigger | Scroll-based animations, parallax, pinning |
| gsap-timeline | Animation sequencing, gsap.timeline() |
| gsap-plugins | GSAP plugins: ScrollSmoother, Flip, Draggable, SplitText |
| gsap-performance | Animation performance, 60fps, will-change |
| gsap-frameworks | GSAP in Vue, Svelte, non-React frameworks |
| gsap-utils | gsap.utils helpers: clamp, mapRange, snap, toArray |

## Compact Rules

### branch-pr
- Follow issue-first enforcement: every PR must reference an issue
- Use `gh pr create` with structured body (Summary, Test Plan)

### issue-creation
- Issues must have clear title, description, and acceptance criteria
- Use `gh issue create` with structured body

### judgment-day
- Launches 2 independent blind judge sub-agents in parallel
- Synthesizes findings, applies fixes, re-judges (max 2 iterations)

### GSAP (all sub-skills)
- Register plugins before use: `gsap.registerPlugin(ScrollTrigger)`
- React: use `useGSAP()` hook for cleanup, never raw useEffect
- ScrollTrigger: always set `trigger`, use `scrub` for scroll-linked
- Timelines: use position parameter for sequencing (`"<"`, `"+=0.5"`)
- Performance: prefer transforms, avoid layout properties, use `will-change` sparingly

## Project Conventions

No project-level convention files detected (no CLAUDE.md, .cursorrules, AGENTS.md in project root).
