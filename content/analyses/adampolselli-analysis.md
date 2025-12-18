# adampolselli.com Analysis

**URL**: https://www.adampolselli.com/  
**Designer**: Adam Polselli  
**Role**: Director of Product Design at Instagram  
**Platform**: Static HTML/CSS (custom)  
**Analysis Date**: December 2024

---

## Overview

Adam Polselli's portfolio is a masterclass in radical minimalism. The entire site is approximately 2KB of CSS—no JavaScript, no build tools, no frameworks. The bright yellow background makes it instantly unforgettable, and the large condensed serif typography creates a distinctive reading experience.

---

## Typography

### Font Loading

```css
@font-face {
  font-family: LibreCaslonCondensed;
  src: url("../fonts/LibreCaslonCondensed/LibreCaslonCondensed-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: LibreCaslonCondensed;
  src: url("../fonts/LibreCaslonCondensed/LibreCaslonCondensed-Italic.woff2") format("woff2");
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: LibreCaslonCondensed;
  src: url("../fonts/LibreCaslonCondensed/LibreCaslonCondensed-Bold.woff2") format("woff2");
  font-weight: bold;
  font-style: normal;
}
```

**LibreCaslonCondensed** is a condensed serif typeface. The condensed width creates a distinctive, editorial appearance while maximizing content density.

### Font Stack
```css
font-family: LibreCaslonCondensed, monospace;
```

The `monospace` fallback is an interesting choice—it maintains the distinctive, non-generic feel even when fonts fail to load.

### Type Scale

| Element | Desktop | Mobile | Line Height | Letter Spacing |
|---------|---------|--------|-------------|----------------|
| Body | 20px | 18px | 1.4 (28px/25.2px) | normal |
| .intro (large text) | 48px | 36px | 1.1 (52.8px/43.2px) | -0.5px |
| .footer | 12px | 12px | 1.4 (16.8px) / 1.6 (19.2px) | normal |
| h1 (image) | — | — | — | — |

### Key Typography Decisions

1. **Condensed serif for personality**: Unlike the common sans-serif choice, this creates immediate differentiation
2. **Massive intro text**: 48px (desktop) creates impact and prioritizes the opening statement
3. **Tight line-height on large text**: 1.1 keeps the intro compact and punchy
4. **Negative letter-spacing**: -0.5px on intro text tightens the large condensed type
5. **Body text is substantial**: 20px is larger than typical body text, prioritizing readability
6. **h1 is an image**: Name rendered as SVG for precise typographic control

### The h1 Image Replacement Technique

```css
h1 {
  display: block;
  background: url("../images/namemark.svg") 0px 0px / auto 18px no-repeat transparent;
  height: 18px;
  text-indent: -9999px;
  margin-bottom: 40px;
}
```

This classic CSS technique:
- Hides text off-screen (`text-indent: -9999px`)
- Displays an SVG background as the visual
- Maintains accessibility (screen readers see the h1 text)
- Allows precise typographic control over the name

---

## Color Palette

### Colors Used

| Purpose | Value | Hex | Notes |
|---------|-------|-----|-------|
| Background | `rgb(255, 251, 99)` | #fffb63 | Bright yellow |
| Text | `rgb(0, 0, 0)` | #000000 | Pure black |
| Links | `rgb(0, 0, 0)` | #000000 | Same as text |
| Link hover | `rgb(0, 0, 255)` | #0000ff | Pure blue |

### Color Strategy

The site uses the most minimal possible palette:
- **Two colors total**: Yellow and black
- **One interaction state**: Blue on hover

The yellow background is the defining feature:
- **Memorable**: You cannot forget this site
- **Bold**: Shows confidence and personality
- **Warm**: Creates positive emotional response
- **Legible**: Black on yellow is highly readable

---

## Complete CSS (Annotated)

The entire stylesheet is remarkably short. Here it is with annotations:

```css
/* 1. CSS Reset - Eric Meyer style */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, 
blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, 
img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, 
i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, 
caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, 
embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, 
section, summary, time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
}

/* 2. Font Definitions */
@font-face {
  font-family: LibreCaslonCondensed;
  src: url("../fonts/LibreCaslonCondensed/LibreCaslonCondensed-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: LibreCaslonCondensed;
  src: url("../fonts/LibreCaslonCondensed/LibreCaslonCondensed-Italic.woff2") format("woff2");
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: LibreCaslonCondensed;
  src: url("../fonts/LibreCaslonCondensed/LibreCaslonCondensed-Bold.woff2") format("woff2");
  font-weight: bold;
  font-style: normal;
}

/* 3. Base Styles */
html {
  height: 100%;
}

body {
  background: rgb(255, 251, 99);  /* The famous yellow */
  box-sizing: border-box;
  color: rgb(0, 0, 0);
  font: 20px / 1.4 LibreCaslonCondensed, monospace;
  height: 100%;
  margin: 0;
}

p {
  margin-bottom: 20px;
}

/* 4. Container - Vertical Centering */
#container {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  width: 600px;
  margin: 0 auto;
}

/* 5. Links */
a {
  color: rgb(0, 0, 0);
  text-decoration: underline;
  font-weight: normal;
}

a:hover {
  color: rgb(0, 0, 255);
}

/* 6. Heading (Image Replacement) */
h1 {
  display: block;
  background: url("../images/namemark.svg") 0 0 / auto 18px no-repeat transparent;
  height: 18px;
  text-indent: -9999px;
  margin-bottom: 40px;
}

/* 7. Typography Classes */
.intro {
  font-size: 48px;
  line-height: 1.1;
  letter-spacing: -0.5px;
}

.italic {
  font-style: italic;
}

.footer {
  font-size: 12px;
  font-style: italic;
}

/* 8. Mobile Breakpoint */
@media screen and (max-width: 640px) {
  body {
    font-size: 18px;
    line-height: 1.4;
  }
  
  #container {
    margin: 0;
    position: relative;
    top: auto;
    left: auto;
    transform: none;
    width: auto;
    padding: 32px 20px;
  }
  
  .intro {
    font-size: 36px;
    line-height: 1.2;
  }
  
  .footer {
    line-height: 1.6;
  }
}
```

**Total CSS: ~50 rules, approximately 2KB**

---

## Layout Architecture

### Desktop Layout (Vertical Centering)

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│                      html/body (100vh)                       │
│                      background: yellow                       │
│                                                              │
│    ┌────────────────────────────────────────────────────┐   │
│    │              #container (600px wide)                │   │
│    │              position: relative                     │   │
│    │              top: 50%                               │   │
│    │              transform: translateY(-50%)            │   │
│    │              margin: 0 auto                         │   │
│    │                                                     │   │
│    │    ┌────────────────────────────────────────────┐  │   │
│    │    │  h1 (SVG background, margin-bottom: 40px)  │  │   │
│    │    └────────────────────────────────────────────┘  │   │
│    │                                                     │   │
│    │    ┌────────────────────────────────────────────┐  │   │
│    │    │  p.intro (48px, line-height: 1.1)          │  │   │
│    │    │  "I build exceptional design teams..."      │  │   │
│    │    └────────────────────────────────────────────┘  │   │
│    │                                                     │   │
│    │    ┌────────────────────────────────────────────┐  │   │
│    │    │  p (20px, line-height: 1.4)                │  │   │
│    │    │  Instagram role description...              │  │   │
│    │    └────────────────────────────────────────────┘  │   │
│    │                                                     │   │
│    │    ┌────────────────────────────────────────────┐  │   │
│    │    │  p (20px, line-height: 1.4)                │  │   │
│    │    │  Dropbox/Rdio history...                   │  │   │
│    │    └────────────────────────────────────────────┘  │   │
│    │                                                     │   │
│    │    ┌────────────────────────────────────────────┐  │   │
│    │    │  p.footer (12px, italic)                   │  │   │
│    │    │  Personal interests...                      │  │   │
│    │    └────────────────────────────────────────────┘  │   │
│    └────────────────────────────────────────────────────┘   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### Vertical Centering Technique

```css
html { height: 100%; }
body { height: 100%; }

#container {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
```

This classic technique:
1. Sets html and body to 100% height
2. Positions container 50% from top
3. Uses transform to offset by half its own height

Modern alternative would be:
```css
body {
  display: flex;
  align-items: center;
  min-height: 100vh;
}
```

### Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| Paragraph margin | 20px | Between paragraphs |
| h1 margin-bottom | 40px | After name |
| Mobile padding | 32px 20px | Container padding |
| Container width | 600px | Fixed desktop width |

---

## Responsive Design

### Single Breakpoint: 640px

```css
@media screen and (max-width: 640px) {
  /* Mobile styles */
}
```

### Desktop vs Mobile Comparison

| Property | Desktop | Mobile |
|----------|---------|--------|
| Body font-size | 20px | 18px |
| Body line-height | 1.4 | 1.4 |
| Container width | 600px | auto (fluid) |
| Container padding | 0 | 32px 20px |
| Vertical centering | Yes | No |
| .intro font-size | 48px | 36px |
| .intro line-height | 1.1 | 1.2 |
| .footer line-height | 1.4 | 1.6 |

### Key Mobile Adaptations

1. **Remove vertical centering**: Content flows from top
2. **Fluid width**: Container stretches to viewport
3. **Add padding**: 32px top/bottom, 20px sides
4. **Reduce intro size**: 48px → 36px
5. **Slightly reduce body**: 20px → 18px
6. **Increase footer line-height**: Better touch readability

---

## Semantic Structure

```html
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Adam Polselli, Design Leader</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div id="container">
    <h1>Adam Polselli</h1>
    
    <p class="intro">
      I build exceptional design teams and ship world-class products 
      that you've probably used.
    </p>
    
    <p>
      I'm Director of Product Design at <a href="http://instagram.com">Instagram</a>...
    </p>
    
    <p>
      I was the fifth product designer at <a href="http://www.dropbox.com">Dropbox</a>...
    </p>
    
    <p class="footer">
      I like science fiction, 0.7mm G2 Pilot pens, the Repeat Song setting, 
      margaritas, and Oxford commas.
    </p>
  </div>
</body>
</html>
```

### HTML Analysis

- **No nav element**: Single-page, no navigation needed
- **No header/footer elements**: Semantic simplicity
- **Single container div**: Minimal DOM
- **Inline links**: Companies linked within paragraph flow
- **Class-based styling**: `.intro`, `.footer` for typography variants

---

## Content Strategy

### Information Hierarchy

1. **Name** (SVG, small): Identity marker
2. **Hook** (48px): Bold opening statement about value
3. **Current role** (20px): Instagram credentials with specifics (Reels, 2B MAUs)
4. **Career history** (20px): Dropbox, Rdio background
5. **Personal touch** (12px, italic): Humanizing details

### Copy Analysis

**Opening hook:**
> "I build exceptional design teams and ship world-class products that you've probably used."

- 16 words
- Two claims: teams + products
- "you've probably used" creates connection
- Confident without arrogance

**Role description:**
- Specific metrics: "two billion MAUs"
- Specific achievement: "Reels, which now accounts for 50% of time spent"
- Scope: "Reels, Feed, Profile, Labs, Meta AI, and Design Systems"

**Personal footer:**
> "I like science fiction, 0.7mm G2 Pilot pens, the Repeat Song setting, margaritas, and Oxford commas."

- The "Oxford commas" mention IS an Oxford comma—self-aware humor
- Specific details (0.7mm G2) show attention to craft
- Creates memorable human connection

---

## Key Design Decisions

### What Makes This Work

1. **Constraint breeds creativity**: 600px, one color, one font—total focus
2. **Yellow is unforgettable**: Bold color choice with 100% recall
3. **Large type prioritizes reading**: Content IS the design
4. **No projects shown**: Credentials speak for themselves
5. **Personal ending**: Humanizes after professional content
6. **Vertical centering**: Creates museum-like presentation
7. **Zero JavaScript**: Performance and simplicity

### Trade-offs

- **No project portfolio**: Must rely on company credentials
- **Limited accessibility**: No dark mode, fixed contrast
- **Static content**: No dynamic elements or interactions
- **Single page**: No room for expansion

---

## Implementation Notes

### Recreating in Next.js/CSS

**Font setup (next/font won't work for custom fonts, use @font-face):**
```css
@font-face {
  font-family: 'LibreCaslonCondensed';
  src: url('/fonts/LibreCaslonCondensed-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

**CSS Variables version:**
```css
:root {
  --color-bg: #fffb63;
  --color-text: #000000;
  --color-link-hover: #0000ff;
  
  --font-primary: 'LibreCaslonCondensed', monospace;
  
  --text-body: 20px;
  --text-intro: 48px;
  --text-footer: 12px;
  
  --line-height-body: 1.4;
  --line-height-intro: 1.1;
  
  --container-width: 600px;
  --spacing-paragraph: 20px;
  --spacing-header: 40px;
}

@media (max-width: 640px) {
  :root {
    --text-body: 18px;
    --text-intro: 36px;
    --line-height-intro: 1.2;
  }
}
```

**Modern vertical centering:**
```css
body {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--color-bg);
}

.container {
  max-width: var(--container-width);
  padding: 32px 20px;
}
```

---

## Summary

adampolselli.com demonstrates that effective portfolio design requires neither complexity nor comprehensiveness. The ~2KB CSS file delivers a memorable, readable, and professional presentation through radical constraint. The yellow background ensures 100% recall, while the condensed serif typography creates editorial sophistication. The content structure—strong opening hook, credential details, personal closer—follows classic persuasive writing principles.

**Best suited for**: Senior designers with prestigious company credentials who prefer writing-focused portfolios over visual case studies.

**Key takeaways for Luke's portfolio**:
- A bold background color creates instant memorability
- Large body text (20px+) improves readability and creates presence
- Condensed or unique fonts differentiate from generic portfolios
- Vertical centering creates elegant negative space
- Personal details at the end humanize professional content
- ~50 CSS rules is often enough for a complete site
- The 640px breakpoint handles most responsive needs
- `top: 50%; transform: translateY(-50%)` for classic vertical centering

