# daneden.me Analysis

**URL**: https://daneden.me/  
**Designer**: Daniel Eden  
**Role**: Product Designer at Meta Reality Labs  
**Platform**: Custom (likely Next.js or similar)  
**Analysis Date**: December 2024

---

## Overview

Daniel Eden's portfolio represents the most architecturally sophisticated of the sites analyzed. It features a robust CSS custom property system, mixed serif/sans typography, and a comprehensive content structure that includes project showcases, a timeline table, and internal routing to portfolio pages. The pink/red accent color on link underlines creates warmth and visual distinction.

---

## Typography

### Font Stack

```css
--font-body: "tiemposText", "tiemposText Fallback";
--font-heading: "tiemposHeadline", "tiemposHeadline Fallback";
--font-serif: "tiemposText", "tiemposText Fallback";
--font-sans: system-ui, -apple-system;
--font-caption: system-ui, -apple-system;
```

**Tiempos** is a premium serif typeface by Klim Type Foundry. Using both "tiemposText" (for body) and "tiemposHeadline" (for headings) shows attention to typographic detail—headline cuts are optimized for larger sizes.

### Type Scale

| Element | Font Family | Size | Line Height | Weight |
|---------|-------------|------|-------------|--------|
| Body | tiemposText | 20px | 32px (1.6) | 400 |
| Intro paragraph | system-ui | 67.5px | 81px (1.2) | 400 |
| h2 | system-ui | 25px | 40px (1.6) | 400 |
| Table text | tiemposText | 20px | — | 400 |

### Key Typography Decisions

1. **Dual typeface system**: Serif (Tiempos) for body, system-ui for headings and UI
2. **Large intro text**: 67.5px creates strong visual hierarchy
3. **Consistent baseline**: 1.6 line-height ratio maintained (stored as `--baseline: 1.6`)
4. **Premium typography**: Tiempos signals design sophistication
5. **System fonts for UI**: Faster loading, native feel for headings

---

## Color Palette

### CSS Custom Properties for Colors

```css
--site-color: #dd425c;        /* Primary accent (pink/red) */
--hover-color: #dd425c;       /* Link hover */
--text-color: hsl(32, calc(.2*30%), 5%);  /* Body text - warm near-black */
--meta-color: hsl(32, calc(.2*30%), 30%); /* Secondary text */
--highlight-color: #ffc800;   /* Yellow highlight */
--mark-color: #ffc80026;      /* Semi-transparent yellow */
--code-color: #222;           /* Code text */
--wash-color: hsl(32, calc(.2*50%), 98%);  /* Background wash */
```

### Gray Scale System

The site uses a mathematically-generated gray scale with HSL:

```css
--gray-hue: 32;              /* Warm hue (orange-ish) */
--gray-sat-mult: .2;         /* Saturation multiplier */

--gray00: hsl(32, calc(.2*50%), 98%);  /* Lightest */
--gray05: hsl(32, calc(.2*40%), 95%);
--gray10: hsl(32, calc(.2*40%), 90%);
--gray20: hsl(32, calc(.2*40%), 70%);
--gray30: hsl(32, calc(.2*30%), 30%);
--gray35: hsl(32, calc(.2*15%), 20%);
--gray40: hsl(32, calc(.2*30%), 5%);   /* Darkest */
```

This creates **warm grays** (hue 32 is orange) rather than neutral grays, giving the site a subtle warmth.

### Color Strategy

1. **Warm color temperature**: All grays have a slight orange tint
2. **Pink/red accent**: #dd425c for links creates visual warmth
3. **Yellow highlights**: #ffc800 for emphasis
4. **Calculated values**: Using `calc()` allows systematic color generation

---

## CSS Custom Properties (Design Tokens)

### Complete Token System

```css
:root {
  /* Typography */
  --font-body: "tiemposText", "tiemposText Fallback";
  --font-heading: "tiemposHeadline", "tiemposHeadline Fallback";
  --font-serif: "tiemposText", "tiemposText Fallback";
  --font-sans: system-ui, -apple-system;
  --font-caption: system-ui, -apple-system;
  
  /* Baseline */
  --baseline: 1.6;
  
  /* Size Scale (multipliers) */
  --xxs: .2;
  --xs: .6;
  --s: .8;
  --m: 1;
  --l: 1.25;
  --xl: 2;
  --xxl: 3;
  
  /* Spacing Scale (calculated from size scale) */
  --sp-xxs: calc(.2 * 1rem);   /* 3.2px */
  --sp-xs: calc(.6 * 1rem);    /* 9.6px */
  --sp-s: calc(.8 * 1rem);     /* 12.8px */
  --sp-m: calc(1 * 1rem);      /* 16px */
  --sp-l: calc(1.25 * 1rem);   /* 20px */
  --sp-xl: calc(2 * 1rem);     /* 32px */
  --sp-xxl: calc(3 * 1rem);    /* 48px */
  
  /* Layout */
  --container-width: 33rem;    /* ~528px */
  --page-width: calc(33rem + (1.6 * 1 * 2));
  --grid-spec: minmax(0, 1fr) minmax(auto, 33rem) minmax(0, 1fr);
  --center-column: 2/3;
  
  /* Breakpoints */
  --breakpoint-narrow: 50em;   /* 800px */
  --breakpoint-medium: 64em;   /* 1024px */
  
  /* Colors */
  --site-color: #dd425c;
  --hover-color: #dd425c;
  --text-color: hsl(32, calc(.2*30%), 5%);
  --meta-color: hsl(32, calc(.2*30%), 30%);
  --highlight-color: #ffc800;
  --wash-color: hsl(32, calc(.2*50%), 98%);
  --code-wash: hsl(32, calc(.2*40%), 95%);
  --code-color: #222;
}
```

### Token Architecture Insights

1. **Mathematical spacing**: Using multipliers (`--s: .8`) and calculating (`calc(.8 * 1rem)`) creates consistent proportions
2. **Semantic naming**: `--sp-m` (spacing medium) rather than hardcoded values
3. **Grid-based layout**: CSS Grid specification stored as variable
4. **Breakpoint tokens**: Enable consistent responsive design

---

## Layout Architecture

### CSS Grid Structure

```css
--grid-spec: minmax(0, 1fr) minmax(auto, 33rem) minmax(0, 1fr);
```

This creates a three-column grid:
- Column 1: Flexible (0 to remaining space)
- Column 2: Content column (auto to 528px/33rem)
- Column 3: Flexible (0 to remaining space)

The content is placed in column 2 using `--center-column: 2/3`.

### Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                      Full viewport width                         │
│  ┌────────┬─────────────────────────────────────────┬────────┐  │
│  │  flex  │         Content (33rem / 528px)         │  flex  │  │
│  │  1fr   │                                         │  1fr   │  │
│  │        │  ┌─────────────────────────────────┐   │        │  │
│  │        │  │  Intro paragraph (67.5px)       │   │        │  │
│  │        │  │  system-ui font                 │   │        │  │
│  │        │  └─────────────────────────────────┘   │        │  │
│  │        │                                         │        │  │
│  │        │  ┌─────────────────────────────────┐   │        │  │
│  │        │  │  Project Cards (flex row)       │   │        │  │
│  │        │  │  gap: 15px, padding: 15px       │   │        │  │
│  │        │  │  ┌──────┐ ┌──────┐ ┌──────┐    │   │        │  │
│  │        │  │  │ Ora  │ │Solst.│ │Where │    │   │        │  │
│  │        │  │  └──────┘ └──────┘ └──────┘    │   │        │  │
│  │        │  └─────────────────────────────────┘   │        │  │
│  │        │                                         │        │  │
│  │        │  ┌─────────────────────────────────┐   │        │  │
│  │        │  │  Timeline Table                 │   │        │  │
│  │        │  │  td padding: 4px 5px            │   │        │  │
│  │        │  │  Year | Project | Type          │   │        │  │
│  │        │  └─────────────────────────────────┘   │        │  │
│  └────────┴─────────────────────────────────────────┴────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

### Spacing System

| Token | Computed Value | Usage |
|-------|---------------|-------|
| --sp-xxs | 3.2px | Minimal spacing |
| --sp-xs | 9.6px | Tight spacing |
| --sp-s | 12.8px | Small gaps |
| --sp-m | 16px | Base unit |
| --sp-l | 20px | Comfortable spacing |
| --sp-xl | 32px | Section spacing |
| --sp-xxl | 48px | Large gaps |

### Container Widths

- **Container width**: 33rem (~528px)
- **Page width**: calc(33rem + (1.6 * 1 * 2)) - slightly wider to account for padding

---

## Link Styling

### Distinctive Link Treatment

```css
a {
  color: rgb(14, 13, 12);           /* Same as text */
  text-decoration: underline 1px rgb(14, 13, 12);
  text-decoration-thickness: 1px;
}

/* In the intro paragraph, links get the accent underline */
.intro a {
  text-decoration: underline 3px rgb(221, 66, 92);  /* --site-color */
}
```

The **pink/red underline** (#dd425c) on intro links is one of the site's most distinctive features:
- Creates visual warmth
- Maintains text readability (no color change on link text)
- 3px thickness makes links scannable

---

## Content Structure

### Information Architecture

1. **Skip to content** link (accessibility)
2. **Intro paragraph**: Identity, role, interests
3. **Project showcase cards**: Featured work with images
4. **Timeline table**: Chronological history (apps, talks, interviews)

### Semantic HTML

```html
<nav>
  <a href="#content">Skip to content</a>
</nav>

<main id="content">
  <p class="intro">Daniel Eden is a Product Designer at...</p>
  
  <section class="projects">
    <article>
      <h2>Ora</h2>
      <p>An app about time...</p>
      <figure><img /></figure>
      <a href="/portfolio/ora">Learn more →</a>
    </article>
    <!-- More project cards -->
  </section>
  
  <table>
    <tbody>
      <tr>
        <td>2025</td>
        <td>
          <a href="...">Ora</a>
          <p>iOS App</p>
        </td>
      </tr>
      <!-- More rows -->
    </tbody>
  </table>
</main>
```

### Table Design

```css
table {
  border-collapse: collapse;
  width: 100%;
  font-family: tiemposText;
  font-size: 20px;
}

td {
  padding: 4px 5px;
  vertical-align: top;
}
```

The timeline table is minimal:
- No borders
- Minimal cell padding
- Year column often empty (grouped by year)
- Title + type in second column

---

## Accessibility Features

1. **Skip to content link**: Allows keyboard users to bypass navigation
2. **Semantic HTML**: Proper heading hierarchy, table structure
3. **Focus states**: Links have visible focus indicators
4. **Color contrast**: Text color ensures readable contrast

---

## Responsive Design

### Breakpoints

```css
--breakpoint-narrow: 50em;   /* 800px */
--breakpoint-medium: 64em;   /* 1024px */
```

### Layout Adaptations

The grid specification `minmax(0, 1fr) minmax(auto, 33rem) minmax(0, 1fr)` naturally responds:
- On wide screens: Side columns expand to center content
- On narrow screens: Content fills available width

### Mobile Considerations

- Project cards: Likely stack vertically
- Table: May become horizontally scrollable or reorganize
- Intro text: May scale down from 67.5px

---

## Project Card Pattern

### Card Structure

```
┌─────────────────────────────────────┐
│  h2: Project Name                   │
│                                     │
│  p: Brief description               │
│                                     │
│  ┌─────────────────────────────────┐│
│  │                                 ││
│  │         figure/image            ││
│  │                                 ││
│  └─────────────────────────────────┘│
│                                     │
│  a: Learn more →                    │
└─────────────────────────────────────┘
```

### Card Styling

- **Flex layout**: Cards arranged in row with wrapping
- **Gap**: 15px between cards
- **Padding**: 15px within card containers
- **Margin**: 20px below image containers
- **Link style**: "Learn more →" with arrow

---

## Key Design Decisions

### What Makes This Work

1. **Robust token system**: Enables consistent, maintainable design
2. **Warm typography**: Tiempos serif creates editorial sophistication
3. **Pink accent links**: Memorable, warm visual signature
4. **Mixed content types**: Intro + cards + table serves different needs
5. **Mathematical spacing**: Calculated values ensure harmony
6. **Accessibility built-in**: Skip link, semantic structure

### Trade-offs

- **Complexity**: More CSS to maintain than simpler sites
- **Custom fonts**: Slower loading than system fonts
- **Token overhead**: Requires understanding the system to modify

---

## Implementation Notes

### Recreating the Token System

```css
:root {
  /* Base values */
  --baseline: 1.6;
  --font-size-base: 1rem; /* 16px */
  
  /* Size scale */
  --scale-xxs: 0.2;
  --scale-xs: 0.6;
  --scale-s: 0.8;
  --scale-m: 1;
  --scale-l: 1.25;
  --scale-xl: 2;
  --scale-xxl: 3;
  
  /* Spacing (calculated) */
  --sp-xxs: calc(var(--scale-xxs) * var(--font-size-base));
  --sp-xs: calc(var(--scale-xs) * var(--font-size-base));
  --sp-s: calc(var(--scale-s) * var(--font-size-base));
  --sp-m: calc(var(--scale-m) * var(--font-size-base));
  --sp-l: calc(var(--scale-l) * var(--font-size-base));
  --sp-xl: calc(var(--scale-xl) * var(--font-size-base));
  --sp-xxl: calc(var(--scale-xxl) * var(--font-size-base));
  
  /* Colors */
  --gray-hue: 32;
  --gray-sat: 0.2;
  
  --color-text: hsl(var(--gray-hue), calc(var(--gray-sat) * 30%), 5%);
  --color-meta: hsl(var(--gray-hue), calc(var(--gray-sat) * 30%), 30%);
  --color-accent: #dd425c;
  
  /* Layout */
  --content-width: 33rem;
}
```

### Grid Layout Pattern

```css
.page {
  display: grid;
  grid-template-columns: 
    minmax(0, 1fr) 
    minmax(auto, var(--content-width)) 
    minmax(0, 1fr);
}

.content {
  grid-column: 2 / 3;
}
```

### Link Underline Pattern

```css
a {
  color: inherit;
  text-decoration-line: underline;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
}

.intro a {
  text-decoration-color: var(--color-accent);
  text-decoration-thickness: 3px;
}
```

---

## Summary

daneden.me demonstrates a mature approach to portfolio design through its comprehensive design token system. The mathematical spacing scale, warm color palette, and premium serif typography create a sophisticated editorial feel. The pink/red link underlines serve as a memorable visual signature. The multi-content approach (intro + cards + table) allows different information to be presented in appropriate formats.

**Best suited for**: Designers who want to showcase both featured projects and a comprehensive timeline, with a sophisticated design system approach.

**Key takeaways for Luke's portfolio**:
- CSS custom properties enable maintainable, scalable design
- Mathematical spacing (`calc()` with multipliers) creates visual harmony
- Warm grays (with a slight hue) feel more sophisticated than neutral grays
- Mixed serif/sans typography creates editorial character
- Accent colors on link underlines are more subtle than colored link text
- Tables work well for timeline/history content
- Skip-to-content links improve accessibility
- 33rem (~528px) content width is optimal for reading

