# Portfolio Site Analyses

Comprehensive analysis of five designer portfolio websites to inform the personal website rebuild. This synthesis draws from detailed individual analysis files located in `/content/analyses/`.

**Analysis Files:**
- `zachjohnston-analysis.md` - Framer, red accent, company logos
- `adampolselli-analysis.md` - 2KB CSS, yellow background, vertical centering
- `daneden-analysis.md` - Design token system, warm grays, pink links
- `danielddesign-analysis.md` - Wide layout, GT Standard, image grid

---

## Quick Reference: Site Comparison

| Site | Platform | Font | Accent | Max-Width | Strategy |
|------|----------|------|--------|-----------|----------|
| **paco.me** | Next.js | Inter + Newsreader | Gray underlines | 640px | Text-focused, serif italics |
| **zachjohnston.com** | Framer | Instrument Sans | Red name | 508px | Credentials via logos |
| **adampolselli.com** | Static HTML | LibreCaslonCondensed | Yellow bg | 600px | Bold color, minimal CSS |
| **daneden.me** | Custom | Tiempos + system-ui | Pink underlines | 33rem | Token system, tables |
| **danield.design** | Custom | GT Standard | None (images) | 1554px | Visual portfolio |

---

## Part 1: Individual Site Summaries

### 1. paco.me (Paco Coursey)

**Platform**: Next.js (custom)

#### Typography
| Element | Size | Weight | Line Height | Family |
|---------|------|--------|-------------|--------|
| Body | 16px | 400 | 28px (1.75) | Inter |
| Headings | 16px | 500 | 28px | Inter |
| Secondary | 14px | 400 | 20px | Inter |
| *Emphasis* | 17px | 400 | — | Newsreader (italic) |

#### Colors
```css
--bg: #fff;
--fg: #171717;
--text-color: #3a3a3a;
--gray11: #6f6f6f;  /* Secondary */
--gray8: #c7c7c7;   /* Link underlines */
```

#### Key Techniques
- Typography hierarchy through **weight**, not size
- Serif italics (Newsreader) for emphasis within sans-serif body
- 12-step gray scale for nuanced hierarchy
- 8px base spacing unit

---

### 2. zachjohnston.com (Zach Johnston)

**Platform**: Framer  
**See**: `analyses/zachjohnston-analysis.md`

#### Typography
| Element | Size | Weight | Line Height | Letter Spacing | Color |
|---------|------|--------|-------------|----------------|-------|
| h1 (Name) | 16px | 400 | 19.2px (1.2) | 0.16px | **#ff0000** |
| h2 (Title) | 40px | 400 | 48px (1.2) | -0.4px | #000 |
| Paragraph | 16px | 400 | 22.4px (1.4) | normal | #616161 |

#### Key Techniques
- **Inverted hierarchy**: Name smaller than title
- **Red accent on name only**: Single memorable color choice
- **Negative letter-spacing** on large text (-0.4px)
- **Company logos as portfolio**: Visual credibility without projects
- **Vertical centering**: `justify-content: space-between` on full-height container

#### Layout Pattern
```css
.container {
  max-width: 508px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;  /* Pushes footer to bottom */
  padding: 24px;
}
```

---

### 3. adampolselli.com (Adam Polselli)

**Platform**: Static HTML/CSS (~2KB total)  
**See**: `analyses/adampolselli-analysis.md`

#### Typography
| Element | Desktop | Mobile | Line Height | Letter Spacing |
|---------|---------|--------|-------------|----------------|
| Body | 20px | 18px | 1.4 | normal |
| .intro | 48px | 36px | 1.1 | -0.5px |
| .footer | 12px | 12px | 1.4 / 1.6 | normal |
| h1 | SVG image replacement | — | — | — |

#### Key Techniques
- **Classic vertical centering**: `top: 50%; transform: translateY(-50%)`
- **h1 image replacement**: `text-indent: -9999px` with background SVG
- **Monospace fallback**: `LibreCaslonCondensed, monospace`
- **Single breakpoint**: 640px
- **Yellow background**: rgb(255, 251, 99) - #fffb63

#### Complete CSS Structure
```css
/* The entire site uses only these rules: */
1. CSS Reset (Eric Meyer style)
2. @font-face declarations (3 weights)
3. html, body { height: 100%; }
4. body { background: yellow; font: 20px/1.4 LibreCaslonCondensed; }
5. #container { position: relative; top: 50%; transform: translateY(-50%); width: 600px; margin: 0 auto; }
6. .intro { font-size: 48px; line-height: 1.1; letter-spacing: -0.5px; }
7. @media (max-width: 640px) { ... }
```

---

### 4. daneden.me (Daniel Eden)

**Platform**: Custom (Next.js-like)  
**See**: `analyses/daneden-analysis.md`

#### Typography
| Element | Family | Size | Line Height | Notes |
|---------|--------|------|-------------|-------|
| Body | tiemposText | 20px | 32px (1.6) | Premium serif |
| Intro | system-ui | 67.5px | 81px (1.2) | Sans for display |
| h2 | system-ui | 25px | 40px (1.6) | — |
| Table | tiemposText | 20px | — | Matches body |

#### CSS Custom Properties System
```css
:root {
  /* Typography */
  --font-body: "tiemposText", "tiemposText Fallback";
  --font-heading: "tiemposHeadline", "tiemposHeadline Fallback";
  --font-sans: system-ui, -apple-system;
  --baseline: 1.6;
  
  /* Mathematical Size Scale */
  --xxs: .2;
  --xs: .6;
  --s: .8;
  --m: 1;
  --l: 1.25;
  --xl: 2;
  --xxl: 3;
  
  /* Calculated Spacing */
  --sp-xxs: calc(.2 * 1rem);   /* 3.2px */
  --sp-xs: calc(.6 * 1rem);    /* 9.6px */
  --sp-s: calc(.8 * 1rem);     /* 12.8px */
  --sp-m: calc(1 * 1rem);      /* 16px */
  --sp-l: calc(1.25 * 1rem);   /* 20px */
  --sp-xl: calc(2 * 1rem);     /* 32px */
  --sp-xxl: calc(3 * 1rem);    /* 48px */
  
  /* Warm Gray Scale (HSL-based) */
  --gray-hue: 32;  /* Orange tint */
  --gray-sat-mult: .2;
  --gray00: hsl(32, calc(.2*50%), 98%);
  --gray10: hsl(32, calc(.2*40%), 90%);
  --gray30: hsl(32, calc(.2*30%), 30%);
  --gray40: hsl(32, calc(.2*30%), 5%);
  
  /* Accent */
  --site-color: #dd425c;  /* Pink/red for link underlines */
  
  /* Layout */
  --container-width: 33rem;
  --grid-spec: minmax(0, 1fr) minmax(auto, 33rem) minmax(0, 1fr);
}
```

#### Key Techniques
- **Mathematical spacing**: Multipliers (0.2, 0.6, 0.8, 1, 1.25, 2, 3) × 1rem
- **Warm grays**: HSL with hue 32 (orange) creates subtle warmth
- **Colored link underlines**: `text-decoration: underline 3px #dd425c`
- **CSS Grid centering**: `minmax(0, 1fr) minmax(auto, 33rem) minmax(0, 1fr)`
- **Skip-to-content link**: Accessibility

---

### 5. danield.design (Daniel Destefanis)

**Platform**: Custom  
**See**: `analyses/danielddesign-analysis.md`

#### Typography
| Element | Size | Weight | Color |
|---------|------|--------|-------|
| All text | 16px | 400 | #171717 |
| Nav inactive | 16px | 400 | rgba(0,0,0,0.5) |

**Note**: No type scale variation—all text is 16px. The work speaks through images.

#### CSS Custom Properties
```css
:root {
  --background: #ffffff;
  --foreground: #171717;
  --font-primary: "GT Standard", Arial, Helvetica, sans-serif;
}
```

#### Layout System
| Element | Max Width | Padding |
|---------|-----------|---------|
| Main container | 1554px | 96px horizontal |
| Content area | 1554px | 48px horizontal |
| Project grid | 1496px | 0 |
| 3-col grid | 1344px | 0 |

#### Key Techniques
- **Wide layout**: 1554px max-width optimized for large screens
- **Generous padding**: 96px creates luxury feel
- **CSS Grid for uniform columns**: `grid-template-columns: 416px 416px 416px`
- **Flexbox for wrapping**: `flex-wrap: wrap; gap: 48px`
- **Font attribution**: "GT Standard by Grilli Font" in footer
- **Opacity states**: 50% black for inactive nav

---

## Part 2: Deep Pattern Analysis

### Typography Patterns

#### Font Pairing Matrix

| Site | Display | Body | Emphasis | UI/Captions |
|------|---------|------|----------|-------------|
| paco.me | Inter | Inter | Newsreader (serif) | Inter |
| zachjohnston | Instrument Sans | Instrument Sans | — | Instrument Sans |
| adampolselli | SVG | LibreCaslonCondensed | Italic variant | LibreCaslonCondensed |
| daneden.me | system-ui | tiemposText | — | system-ui |
| danield.design | GT Standard | GT Standard | — | GT Standard |

**Insight**: Successful sites use either:
1. **Single font, multiple weights** (Zach, Daniel D)
2. **Serif + Sans pairing** (Paco: Newsreader italics, Daniel E: Tiempos body)
3. **Unique font for personality** (Adam: condensed serif)

#### Line Height Conventions

| Context | Optimal Range | Examples |
|---------|--------------|----------|
| Large display text (40px+) | 1.1-1.2 | Adam's intro (1.1), Zach's h2 (1.2) |
| Body text (16-20px) | 1.4-1.6 | All sites: 1.4-1.75 |
| Small text (12-14px) | 1.4-1.6 | Footer text |

**Rule**: As font size increases, line-height ratio decreases.

#### Letter Spacing Conventions

| Context | Value | Purpose |
|---------|-------|---------|
| Large headlines | -0.4 to -0.5px | Tighten for elegance |
| Small text (names) | +0.1 to +0.2px | Open for legibility |
| Body text | 0 (normal) | Browser default |

---

### Color Strategies

#### The Accent Spectrum

| Site | Accent Strategy | Implementation |
|------|-----------------|----------------|
| paco.me | **No accent** | Gray scale only |
| zachjohnston | **Single element** | Red on name only (#ff0000) |
| adampolselli | **Full background** | Yellow (#fffb63) |
| daneden.me | **Functional accent** | Pink on link underlines (#dd425c) |
| danield.design | **No accent** | Images provide color |

**Decision Framework**:
- **Text-focused portfolio** → Accent on text elements (name, links)
- **Image-focused portfolio** → Let images provide color
- **Memorable personal brand** → Bold background color

#### Near-Black Text Comparison

| Site | Text Color | Note |
|------|------------|------|
| paco.me | #3a3a3a | Warmest, most gray |
| zachjohnston | #000000 | Pure black (on light bg) |
| adampolselli | #000000 | Pure black (on yellow) |
| daneden.me | hsl(32, 6%, 5%) | Warm near-black |
| danield.design | #171717 | Standard near-black |

**Recommendation**: #171717 or similar for softer contrast than pure black.

---

### Layout Architecture

#### Container Width Philosophy

```
Text-heavy sites:        500-640px (paco, adam, daneden)
                         ↓
Balanced sites:          500-640px (zach)
                         ↓
Image-heavy sites:       1200-1600px (danield)
```

#### Vertical Centering Techniques

**Method 1: Transform** (adampolselli)
```css
html, body { height: 100%; }
.container {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
```

**Method 2: Flexbox** (zachjohnston)
```css
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
```

**Method 3: Grid** (modern approach)
```css
body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
```

#### Spacing Systems Compared

| Site | Base Unit | Scale Type |
|------|-----------|------------|
| paco.me | 8px | Multiplicative (8, 16, 24, 32, 64, 128) |
| zachjohnston | — | Fixed values (6, 16, 24, 28) |
| adampolselli | 20px | Simple (20px margins) |
| daneden.me | 1rem | Mathematical (.2, .6, .8, 1, 1.25, 2, 3 × 1rem) |
| danield.design | — | Fixed values (3, 12, 16, 24, 32, 48, 96) |

**Recommendation**: 8px base with multipliers, or mathematical scale like daneden.me.

---

### CSS Architecture Patterns

#### Custom Properties Usage

| Site | Usage Level | Token Categories |
|------|-------------|------------------|
| paco.me | Moderate | Colors, typography, spacing, layout |
| zachjohnston | None | Framer handles styles |
| adampolselli | None | Hardcoded values |
| daneden.me | Extensive | Colors, typography, spacing, sizing, layout, breakpoints |
| danield.design | Minimal | Colors, typography only |

#### Recommended Token Structure

```css
:root {
  /* Colors */
  --color-bg: #ffffff;
  --color-fg: #171717;
  --color-accent: #dd425c;
  --color-secondary: #6f6f6f;
  
  /* Typography */
  --font-body: "Inter", sans-serif;
  --font-display: "Newsreader", serif;
  --text-base: 16px;
  --text-lg: 20px;
  --leading-normal: 1.6;
  --leading-tight: 1.2;
  
  /* Spacing */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 24px;
  --space-6: 48px;
  --space-8: 64px;
  
  /* Layout */
  --content-width: 640px;
  --page-width: 1072px;
  --body-margin: max(24px, env(safe-area-inset-left));
}
```

---

### Responsive Patterns

#### Breakpoint Comparison

| Site | Breakpoints | Strategy |
|------|-------------|----------|
| paco.me | 768px | Reduce padding, adjust spacing |
| zachjohnston | — | Framer responsive system |
| adampolselli | 640px | Remove centering, add padding |
| daneden.me | 50em (800px), 64em (1024px) | Two breakpoints |
| danield.design | ~1200px | Reduce padding, single column |

**Insight**: Single breakpoint at 640-768px is sufficient for most portfolios.

#### Mobile Adaptation Patterns

| Desktop Feature | Mobile Adaptation |
|-----------------|-------------------|
| Vertical centering | Content from top |
| Wide padding (96px) | Reduced (24px) |
| Multi-column grid | Single column |
| Large intro text (48-60px) | Reduced (36px) |
| Fixed width container | Fluid width |

---

## Part 3: Decision Framework

### Choosing an Approach

#### For Text-Focused Portfolios (Writing, Leadership)

**Model**: adampolselli.com or paco.me

```
✓ Narrow container (500-640px)
✓ Large body text (18-20px)
✓ Serif or condensed font for personality
✓ Bold color if minimal content
✓ Vertical centering if single-page
```

#### For Credential-Based Portfolios (Senior Designers)

**Model**: zachjohnston.com

```
✓ Company logos over project descriptions
✓ Single accent color on name
✓ Minimal text, maximum credentials
✓ Vertical centering
✓ Social links in footer
```

#### For Project-Showcase Portfolios (Visual Designers)

**Model**: danield.design

```
✓ Wide layout (1200px+)
✓ Generous spacing (48-96px)
✓ Image grid with case study links
✓ Premium font (GT Standard, etc.)
✓ Minimal text, images speak
```

#### For Developer/Design System Portfolios

**Model**: daneden.me

```
✓ Robust CSS token system
✓ Mixed content (cards + timeline)
✓ Accent color on functional elements (links)
✓ Mathematical spacing scale
✓ Accessibility features
```

---

## Part 4: Recommendations for Luke's Portfolio

### Typography Recommendation

**Primary**: Inter (matches Portal codebase, Google Font, excellent readability)  
**Accent**: Newsreader or similar serif for emphasis/italics  
**Body size**: 16-18px with 1.6-1.75 line-height

### Color Recommendation

```css
--color-bg: #ffffff;
--color-fg: #171717;        /* Near-black, not pure black */
--color-secondary: #6f6f6f;  /* For meta text */
--color-accent: TBD;         /* Pick ONE memorable color */
```

### Layout Recommendation

```css
--content-width: 640px;      /* Text-readable width */
--page-width: 1072px;        /* With room for breathing */
--body-margin: max(24px, env(safe-area-inset-left));
--space-base: 8px;           /* 8px unit system */
```

### Architecture Recommendation

1. **CSS Custom Properties** for all design tokens
2. **CSS Modules** for component styling
3. **Single breakpoint** at 768px
4. **Semantic HTML** with proper heading hierarchy
5. **Skip-to-content link** for accessibility

### Content Recommendation

1. Lead with identity and current role
2. Feature 3-4 best projects with images
3. Include brief credential mentions (companies)
4. Add personal touch (interests, quote)
5. Keep navigation minimal (Home, Work, About)

---

## Appendix: Quick CSS Patterns

### Vertical Centering

```css
/* Modern approach */
body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}
```

### Content Container

```css
.container {
  max-width: var(--content-width);
  margin: 0 auto;
  padding: var(--space-6) var(--body-margin);
}
```

### Link Underline Accent

```css
a {
  color: inherit;
  text-decoration: underline;
  text-decoration-color: var(--color-accent);
  text-decoration-thickness: 2px;
  text-underline-offset: 2px;
}
```

### Responsive Typography

```css
.intro {
  font-size: clamp(36px, 5vw, 48px);
  line-height: 1.1;
  letter-spacing: -0.5px;
}
```

### Gray Scale Generator

```css
:root {
  --gray-hue: 32;  /* Warm */
  --gray-sat: 0.2;
  
  --gray-00: hsl(var(--gray-hue), calc(var(--gray-sat) * 50%), 98%);
  --gray-10: hsl(var(--gray-hue), calc(var(--gray-sat) * 40%), 90%);
  --gray-20: hsl(var(--gray-hue), calc(var(--gray-sat) * 40%), 70%);
  --gray-30: hsl(var(--gray-hue), calc(var(--gray-sat) * 30%), 30%);
  --gray-40: hsl(var(--gray-hue), calc(var(--gray-sat) * 30%), 5%);
}
```
