# Portfolio Project Context Document

**Last Updated**: December 2024  
**Project Path**: `/Users/lselinger/Documents/portfolio`  
**GitHub Repo**: https://github.com/lukeselinger/portfolio

---

## Background & Motivation

### Who is Luke?

Luke Selinger is a **Product Designer** (UX/UI) who works professionally on an application called **Portal**. Portal's codebase uses:
- React + TypeScript
- Tailwind CSS
- TanStack Query & TanStack Router
- Vite

Luke has working knowledge of Tailwind (enough to guide engineers and QA implementations) but wants to deepen his understanding of **CSS fundamentals** rather than just utility classes.

### Why This Project?

This personal website rebuild is a **"learn by doing"** project with multiple goals:

1. **Learn CSS Fundamentals** - Understand responsive conventions, styling decisions, and CSS architecture beyond Tailwind utilities
2. **Career Growth** - Gain front-end skills applicable beyond Portal, particularly with Next.js (industry standard)
3. **Reverse Engineering** - Analyze well-designed portfolio websites to understand what makes them work
4. **Rapid Ideation** - Create a system for quickly exploring different design directions with real content

### The Approach

Rather than designing from scratch, we're:
1. Analyzing exemplary designer portfolios
2. Extracting Luke's existing content
3. Building clones of analyzed sites with lorem ipsum
4. Mapping Luke's content to each layout for rapid comparison

---

## Tech Stack Decision

After evaluating options, we chose:

| Technology | Purpose | Why |
|------------|---------|-----|
| **Next.js** | Framework | Industry standard, App Router, good for learning |
| **TypeScript** | Type safety | Matches Portal codebase |
| **CSS Modules** | Component styling | Forces CSS fundamentals (not Tailwind) |
| **CSS Custom Properties** | Design tokens | Maintainable, learnable pattern |
| **Motion** (Framer Motion) | Animation | Used in Portal, good to learn |

**Explicitly NOT using Tailwind** - The goal is to understand CSS deeply, not rely on utility classes.

---

## What Has Been Completed

### Step 1: Content Extraction ✅

Extracted content from Luke's current site (https://www.lukeselinger.com/) into structured files:

```
content/
├── profile.json           # Name, title, tagline, social links
└── projects/
    ├── index.json         # Project manifest
    ├── structure-sensor-usability-testing.md
    ├── building-accessible-forms.md
    ├── design-sprint.md
    ├── structure-sensor-onboarding.md
    ├── omniplex-blog-redesign.md
    └── omniplex-illustrations.md
```

**TypeScript interfaces** created in `src/types/content.ts` for type-safe content handling.

### Step 2: Site Analyses ✅

Analyzed 5 designer portfolio websites in depth:

| Site | Designer | Key Insight |
|------|----------|-------------|
| **paco.me** | Paco Coursey | Inter + Newsreader, 8px spacing system, serif italics |
| **zachjohnston.com** | Zach Johnston (OpenAI) | Red name accent, company logos, Framer |
| **adampolselli.com** | Adam Polselli (Instagram) | Yellow background, 2KB CSS total, vertical centering |
| **daneden.me** | Daniel Eden (Meta) | CSS token system, warm grays, pink link underlines |
| **danield.design** | Daniel Destefanis (Figma) | Wide layout (1554px), GT Standard, image grid |

**Analysis Files Created:**

```
content/
├── site-analyses.md                    # Comprehensive synthesis
└── analyses/
    ├── zachjohnston-analysis.md        # ~350 lines
    ├── adampolselli-analysis.md        # ~550 lines (includes full CSS)
    ├── daneden-analysis.md             # ~490 lines (token system deep-dive)
    └── danielddesign-analysis.md       # ~440 lines
```

### Step 3: Paco.me Clone (Initial) ✅

Built an initial clone of paco.me as a learning exercise:

```
src/app/
├── layout.tsx        # Inter + Newsreader fonts via next/font
├── globals.css       # Design tokens, CSS reset
├── page.tsx          # Home page structure
└── page.module.css   # Component styles
```

**Key patterns implemented:**
- CSS Custom Properties for colors, spacing, typography
- CSS Modules for scoped component styles
- Responsive design with media queries
- 8px base spacing unit

---

## What Remains To Do

### Immediate Next Steps

| Task | Description | Status |
|------|-------------|--------|
| **Prioritize layouts** | Decide which 2-3 sites to clone first | Pending |
| **Connect to GitHub** | Verify repo connection, commit current work | Pending |
| **Create branch strategy** | One branch per site clone | Pending |

### Clone Building Phase

For each analyzed site, create a branch and build a clone:

```
main                    # Current state (paco clone + analyses)
├── clone/zachjohnston  # Red accent, company logos
├── clone/adampolselli  # Yellow background, minimal CSS
├── clone/daneden       # Token system, timeline table
└── clone/danield       # Wide layout, image grid
```

**Clone priorities (recommended based on learning value):**

1. **adampolselli.com** - Best for CSS fundamentals (entire site is ~50 rules)
2. **zachjohnston.com** - Great for Framer-to-code translation
3. **daneden.me** - Best for learning design token architecture

### Content Mapping Phase (Optional)

After clones are built with lorem ipsum:
- Map Luke's extracted content to each layout
- Compare how different designs handle the same content
- Use for rapid design iteration and decision-making

---

## Project Structure

```
portfolio/
├── CONTEXT.md                    # This file
├── content/
│   ├── profile.json              # Luke's profile data
│   ├── projects/                 # Project markdown files
│   │   ├── index.json
│   │   └── *.md
│   ├── site-analyses.md          # Comprehensive synthesis
│   └── analyses/                 # Individual site analyses
│       ├── zachjohnston-analysis.md
│       ├── adampolselli-analysis.md
│       ├── daneden-analysis.md
│       └── danielddesign-analysis.md
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout with fonts
│   │   ├── globals.css           # Design tokens
│   │   ├── page.tsx              # Home page (paco clone)
│   │   └── page.module.css       # Page styles
│   └── types/
│       └── content.ts            # TypeScript interfaces
├── public/                       # Static assets
├── package.json                  # Dependencies (Next.js, Motion)
└── tsconfig.json
```

---

## Key Learnings from Analyses

### Typography Patterns

- **Sans-serif dominates**, but serif creates distinctive personality
- **Body text**: 16-20px with line-height 1.4-1.75
- **Large display**: 40-67px with line-height 1.1-1.2
- **Letter-spacing**: Negative for large text, positive for small text

### Color Strategies

- **Near-black** (#171717) instead of pure black
- **Bold accent** on ONE element for memorability
- **Warm grays** (HSL with hue 32) feel more sophisticated

### Layout Conventions

- **Content width**: 500-640px for text-focused sites
- **Wide layouts**: 1200-1600px for image-heavy sites
- **Single breakpoint** (640-768px) is usually sufficient
- **Vertical centering** via flexbox or transform

### CSS Architecture

- **CSS Custom Properties** enable maintainable design systems
- **Mathematical spacing** (multipliers × base unit) creates harmony
- **Token categories**: colors, typography, spacing, layout, breakpoints

---

## Commands Reference

```bash
# Navigate to project
cd /Users/lselinger/Documents/portfolio

# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build
```

---

## Key Files to Review

When continuing this project, start by reviewing:

1. **`content/site-analyses.md`** - Comprehensive synthesis with decision framework
2. **`content/analyses/*.md`** - Deep dives into each site's CSS
3. **`src/app/globals.css`** - Current design token implementation
4. **`src/types/content.ts`** - TypeScript interfaces for content

---

## Questions to Resolve

1. **Layout priority**: Which 2-3 clones to build first?
2. **Accent color**: What color represents Luke's brand?
3. **Content selection**: Which projects from the extracted content to feature?
4. **Additional pages**: Just home, or also About/Work pages?

---

## GitHub Repository

**URL**: https://github.com/lukeselinger/portfolio

**Current state**: Local work not yet committed. Next steps:
1. Verify git remote connection
2. Commit all analysis work
3. Create branch strategy for clones

---

## Session Handoff Checklist

When starting a new session, inform the assistant:

1. ✅ Project path: `/Users/lselinger/Documents/portfolio`
2. ✅ Tech stack: Next.js + TypeScript + CSS Modules
3. ✅ Goal: Learn CSS fundamentals through clone building
4. ✅ Current state: Analyses complete, ready for GitHub + clone building
5. ✅ Key context: Read `CONTEXT.md` and `content/site-analyses.md`

---

*This document serves as the single source of truth for continuing this project across chat sessions.*

