# zachjohnston.com Analysis

**URL**: https://zachjohnston.com/  
**Designer**: Zach Johnston  
**Role**: Product Designer at OpenAI  
**Platform**: Framer  
**Analysis Date**: December 2024

---

## Overview

Zach Johnston's portfolio is a masterclass in minimalist design that uses a single bold color choice (red) to create instant memorability. The site eschews traditional project showcases in favor of company credentials displayed through logos.

---

## Typography

### Font Stack
```css
font-family: "Instrument Sans", "Instrument Sans Placeholder", sans-serif;
```

**Instrument Sans** is a Google Font designed for contemporary interfaces. The "Placeholder" fallback is Framer's font-loading strategy.

### Type Scale

| Element | Desktop | Mobile | Weight | Line Height | Letter Spacing |
|---------|---------|--------|--------|-------------|----------------|
| h1 (Name) | 16px | 16px | 400 | 19.2px (1.2) | 0.16px |
| h2 (Title) | 40px | 40px | 400 | 48px (1.2) | -0.4px |
| Paragraph | 16px | 16px | 400 | 22.4px (1.4) | normal |

### Key Typography Decisions

1. **Inverted hierarchy**: The h1 (name) is smaller than h2 (title). This creates visual intrigue—the name whispers while the role shouts.

2. **Negative letter-spacing on h2**: `-0.4px` tightens the large title text, creating a more refined, typeset feel.

3. **Positive letter-spacing on h1**: `0.16px` adds subtle breathing room to the small name text, improving legibility at smaller sizes.

4. **Consistent sizing**: Typography doesn't scale between mobile and desktop, maintaining design integrity across breakpoints.

---

## Color Palette

### Colors Used

| Purpose | Value | Notes |
|---------|-------|-------|
| Background | `rgb(250, 250, 250)` | Off-white, #fafafa |
| Name (h1) | `rgb(255, 0, 0)` | Pure red, #ff0000 |
| Title (h2) | `rgb(0, 0, 0)` | Black |
| Body text | `rgb(97, 97, 97)` | Medium gray, #616161 |
| Links (default) | `rgb(0, 0, 238)` | Browser default blue |

### Color Strategy

The site uses a **monochromatic palette with a single accent**. The red name is the only color element, making it:
- Instantly memorable
- A signature brand element
- Visually dominant despite small size

This is a bold choice that pays off—the red draws the eye immediately and creates strong recall.

---

## Layout Architecture

### Container Structure (Desktop - 1280px viewport)

```
┌────────────────────────────────────────────────────────────┐
│                      Root Container                         │
│  width: 1280px | min-height: 900px (viewport height)       │
│  flex-direction: column | align-items: center              │
│                                                            │
│  ┌──────────────────────────────────────────────────────┐  │
│  │              Main Content Container                   │  │
│  │  max-width: 508px | padding: 24px                    │  │
│  │  justify-content: space-between (vertical centering)  │  │
│  │                                                       │  │
│  │  ┌─────────────────────────────────────────────────┐ │  │
│  │  │         Content Area (max-width: 640px)         │ │  │
│  │  │  gap: 24px between sections                     │ │  │
│  │  │                                                 │ │  │
│  │  │  ┌───────────────────────────────────────────┐  │ │  │
│  │  │  │  Name/Title Block (gap: 6px)              │  │ │  │
│  │  │  │  h1: "Zach Johnston"                      │  │ │  │
│  │  │  │  h2: "Product Designer"                   │  │ │  │
│  │  │  └───────────────────────────────────────────┘  │ │  │
│  │  │                                                 │ │  │
│  │  │  ┌───────────────────────────────────────────┐  │ │  │
│  │  │  │  Bio paragraph                            │  │ │  │
│  │  │  └───────────────────────────────────────────┘  │ │  │
│  │  │                                                 │ │  │
│  │  │  ┌───────────────────────────────────────────┐  │ │  │
│  │  │  │  Logo Grid (flex-row, gap: 28px)          │  │ │  │
│  │  │  │  padding: 8px 0                           │  │ │  │
│  │  │  └───────────────────────────────────────────┘  │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  │                                                       │  │
│  │  ┌─────────────────────────────────────────────────┐ │  │
│  │  │  Footer Links (gap: 16px)                       │ │  │
│  │  │  LinkedIn | Twitter                             │ │  │
│  │  └─────────────────────────────────────────────────┘ │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────┘
```

### Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| Container padding | 24px | Main content wrapper |
| Section gap (small) | 6px | Name/title spacing |
| Section gap (medium) | 16px | Footer links |
| Section gap (large) | 24px | Major sections |
| Logo grid gap | 28px | Company logos |
| Logo row padding | 8px 0 | Vertical breathing room |

### Width Constraints

| Element | Max Width | Notes |
|---------|-----------|-------|
| Main container | 508px | Primary content constraint |
| Content area | 640px | Slightly wider allowance |
| Actual content | 460px | Computed width at desktop |

---

## Responsive Design

### Breakpoint Strategy

The site uses **Framer's responsive system** rather than traditional CSS media queries. Key observations:

| Property | Desktop (1280px) | Mobile (375px) | Change |
|----------|------------------|----------------|--------|
| Container width | 508px | 375px (full) | Fluid |
| Content width | 460px | 327px | Fluid |
| Typography | Same | Same | No change |
| Padding | 24px | 24px | No change |
| Gaps | Same | Same | No change |

### Mobile Adaptations

1. **Container becomes fluid**: Max-width is 508px but allows shrinking to viewport width
2. **Content area shrinks**: From 460px to 327px (375px - 24px×2 padding)
3. **Typography unchanged**: All font sizes, weights, and line heights preserved
4. **Vertical centering maintained**: `justify-content: space-between` keeps footer at bottom

---

## Semantic Structure

```html
<div class="framer-container"> <!-- Root -->
  <div class="framer-content"> <!-- Main wrapper -->
    <div class="framer-header"> <!-- Name/Title group -->
      <h1>Zach Johnston</h1>
      <h2>Product Designer</h2>
    </div>
    <p>Currently designing at OpenAI...</p>
    <div class="framer-logos"> <!-- Company grid -->
      <a href="..."><img src="..." /></a>
      <!-- 6 company logos -->
    </div>
  </div>
  <div class="framer-footer"> <!-- Social links -->
    <p><a href="...">LinkedIn</a></p>
    <p><a href="...">Twitter</a></p>
  </div>
</div>
```

---

## CSS Architecture (Framer)

### Key Characteristics

1. **No CSS Custom Properties**: Framer generates utility classes with hardcoded values
2. **Flexbox-based**: All layout uses flexbox (no CSS Grid)
3. **Generated class names**: `framer-` prefix with hash-like suffixes (e.g., `framer-orqxo0`)
4. **Inline-responsive**: Breakpoint logic embedded in Framer's JS rather than CSS

### Framer Classes Pattern

```css
/* Pattern: framer-[hash] */
.framer-orqxo0 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 508px;
  padding: 24px;
}
```

---

## Content Strategy

### Information Architecture

1. **Identity**: Name (small, red) + Title (large, black)
2. **Context**: Single bio paragraph establishing current and past roles
3. **Credentials**: Visual proof through company logos (no descriptions)
4. **Contact**: Minimal social links (LinkedIn, Twitter)

### Copy Analysis

> "Currently designing at OpenAI in San Francisco. Previously at Tome, Twingate, Framer, Dropbox, and OpenGov."

- 16 words total
- Lists 6 companies
- No project descriptions
- No personal philosophy
- Purely factual

### Logo Grid as Portfolio

Rather than showing work samples, the site uses company logos to communicate:
- Career trajectory
- Industry credibility
- Design taste (companies known for good design)

---

## Key Design Decisions

### What Makes This Work

1. **Confidence through restraint**: Letting prestigious companies speak for the designer
2. **Memorable color choice**: Red name creates instant brand recognition
3. **Typography hierarchy subversion**: Small name, large title creates intrigue
4. **Vertical centering**: Content floats elegantly in viewport
5. **Logo grid credibility**: Visual proof beats verbal claims

### Trade-offs

- **No work samples**: Relies entirely on company reputation
- **Minimal interactivity**: No hover states, animations, or transitions
- **Limited information**: Users seeking project details must go elsewhere
- **Brand dependency**: Effectiveness relies on recognizable companies

---

## Implementation Notes

### Recreating in Next.js/CSS

**Typography:**
```css
/* Google Fonts import for Instrument Sans */
@import url('https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400&display=swap');

:root {
  --font-primary: "Instrument Sans", sans-serif;
  --color-bg: #fafafa;
  --color-accent: #ff0000;
  --color-text: #000000;
  --color-secondary: #616161;
}

h1 {
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: 0.01em;
  color: var(--color-accent);
}

h2 {
  font-size: 40px;
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.01em;
  color: var(--color-text);
}
```

**Layout:**
```css
.container {
  max-width: 508px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.content {
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.header {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.logo-grid {
  display: flex;
  flex-direction: row;
  gap: 28px;
  padding: 8px 0;
}
```

---

## Summary

zachjohnston.com proves that effective portfolio design doesn't require showcasing work directly. By leveraging company credentials and a single bold color choice, the site creates strong recall while maintaining extreme simplicity. The inverted typography hierarchy (small name, large title) adds sophistication, and the vertical centering creates an elegant, gallery-like presentation.

**Best suited for**: Senior designers with recognizable company experience who want their credentials to speak louder than individual projects.

**Key takeaways for Luke's portfolio**:
- Consider how credentials (companies, roles) can supplement or replace project showcases
- A single accent color creates more impact than multiple colors
- Typography hierarchy can be inverted for visual interest
- Vertical centering works well for minimal content
- 508-640px content width is optimal for readability

