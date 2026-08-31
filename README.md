# Mentors' Noakhali Branch — Website

> The official website for **Mentors' Noakhali Branch**, an IELTS, PTE, Spoken English, and Study Abroad consultancy center located in Maijdee Court, Noakhali, Bangladesh.

**Live site:** [mentorsnoakhali.com](https://mentorsnoakhali.com)

---

## Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Architecture & Design Decisions](#architecture--design-decisions)
- [Page Reference](#page-reference)
- [JavaScript Modules](#javascript-modules)
- [CSS Architecture](#css-architecture)
- [CoffeeScript Source](#coffeescript-source)
- [SEO Strategy](#seo-strategy)
- [Assets & Media](#assets--media)
- [Deployment](#deployment)
- [Common Tasks](#common-tasks)
- [Coding Conventions](#coding-conventions)
- [Known Limitations](#known-limitations)
- [License](#license)

---

## Overview

This is a **static, multi-page website** (no framework, no bundler) built with plain HTML, CSS, and vanilla JavaScript. It serves as the primary web presence for Mentors' Noakhali Branch — a sub-branch of [Mentors'](https://www.mentors.com.bd), one of Bangladesh's largest education networks (3M+ learners nationwide).

The site provides:

- Course catalog and details for IELTS, PTE, Spoken English, Grammar, Kids, Juniors, SSC, and Advanced Writing programmes
- Study abroad destination pages for 13 countries (UK, USA, Canada, Australia, Ireland, New Zealand, Malaysia, Bangladesh, Denmark, Sweden, Finland, Netherlands, Hungary)
- A free English skill assessment tool (interactive quiz with instant scoring)
- An IELTS band score calculator
- Password-gated free IELTS resource downloads
- Team and instructor profiles
- Photo gallery
- Contact information and inquiry forms
- Mock test scheduling

---

## Tech Stack

| Layer               | Technology                | Notes                                                                                                 |
| ------------------- | ------------------------- | ----------------------------------------------------------------------------------------------------- |
| **Markup**          | HTML5                     | Semantic, static `.html` files — no templating engine                                                 |
| **Styling**         | CSS3 (custom properties)  | Single shared stylesheet + page-specific overrides                                                    |
| **Scripting**       | Vanilla JavaScript (ES6+) | No framework — plain DOM manipulation                                                                 |
| **Source language** | CoffeeScript 2.7          | Two modules (`band-calculator`, `english-assessment`) are authored in CoffeeScript and compiled to JS |
| **Fonts**           | Google Fonts              | `Inter` (body) + `Outfit` (headings)                                                                  |
| **Hosting**         | GitHub Pages              | Custom domain via `CNAME` file                                                                        |
| **Package manager** | npm                       | Only used for the CoffeeScript dev dependency                                                         |
| **Version control** | Git                       | Hosted on GitHub at `MentorsNoakhali/MNKBWeb`                                                         |

**No build step is required** to run the site locally — the compiled JS files are committed to the repo. CoffeeScript compilation is only needed when editing `.coffee` source files.

---

## Project Structure

```
Mentors/
├── index.html                    # Homepage
├── courses.html                  # Course catalog
├── course-ielts.html             # IELTS course detail
├── course-ielts-advanced.html    # Advanced IELTS course
├── course-pte.html               # PTE course detail
├── course-spoken.html            # Spoken English course
├── course-grammar.html           # Grammar course
├── course-kids.html              # Kids' English course
├── course-juniors.html           # Juniors' English course
├── course-ssc.html               # After-SSC English course
├── course-advanced-writing.html  # Advanced Writing course
├── study-abroad.html             # Study abroad overview
├── study-uk.html                 # Study in UK
├── study-usa.html                # Study in USA
├── study-canada.html             # Study in Canada
├── study-australia.html          # Study in Australia
├── study-ireland.html            # Study in Ireland
├── study-newzealand.html         # Study in New Zealand
├── study-malaysia.html           # Study in Malaysia
├── study-bangladesh.html         # Study in Bangladesh
├── study-denmark.html            # Study in Denmark
├── study-sweden.html             # Study in Sweden
├── study-finland.html            # Study in Finland
├── study-netherlands.html        # Study in Netherlands
├── study-hungary.html            # Study in Hungary
├── team.html                     # Team / leadership profiles
├── instructors.html              # Instructor profiles
├── gallery.html                  # Photo gallery
├── mock-tests.html               # IELTS mock test info
├── contact.html                  # Contact page
├── english-assessment.html       # Interactive English assessment
├── free-ielts-resources.html     # Password-gated IELTS downloads
├── CNAME                         # GitHub Pages custom domain
├── package.json                  # npm config (CoffeeScript devDep)
├── .gitignore
├── .gitattributes
│
├── css/
│   ├── style.css                 # Main shared stylesheet (~2000+ lines)
│   ├── assessment.css            # English assessment page styles
│   └── free-ielts-resources.css  # IELTS resources page styles
│
├── js/
│   ├── components.js             # Navbar, footer, floating actions HTML + injection
│   ├── nav.js                    # Theme toggle, hamburger menu, active link logic
│   ├── seo.js                    # JSON-LD structured data & invisible keyword injection
│   ├── home-render.js            # Homepage CSV schedule fetcher (Google Sheets)
│   ├── band-calculator.js        # IELTS band score calculator (compiled from CoffeeScript)
│   ├── english-assessment.js     # Full English assessment engine (compiled from CoffeeScript)
│   └── free-ielts-resources.js   # Password gate + download panel for IELTS resources
│
├── src/
│   └── coffee/
│       ├── band-calculator.coffee    # CoffeeScript source for band calculator
│       └── english-assessment.coffee # CoffeeScript source for assessment engine
│
└── Media/
    ├── Mentors-Noakhali-Branch-Logo.png   # Branch logo (used in navbar, footer, gates)
    ├── favicon.ico                         # Site favicon
    ├── All employees photo/               # Team & instructor headshots (PNG/JPG)
    ├── Events/                            # Event photo folders
    │   └── Sports Day 02.07.2026/
    └── FREE IELTS/                        # Downloadable IELTS PDF resources
        ├── Collins-Speaking-for-IELTS.pdf
        ├── ielts_speaking_master_plan.pdf
        ├── IELTS-Speaking-Questions-A-Comprehensive-Guide.pdf
        └── SPEAKING book preview.pdf
```

---

## Getting Started

### Prerequisites

- A modern web browser
- (Optional) [Node.js](https://nodejs.org/) — only needed if you plan to edit CoffeeScript files

### Run Locally

Since this is a static site, you can open `index.html` directly in a browser, but a local server is recommended for the CSV fetch on the homepage to work correctly:

```bash
# Option 1: Python (most systems have this)
python3 -m http.server 8000

# Option 2: Node.js (if installed)
npx serve .

# Option 3: VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

Then visit `http://localhost:8000`.

### Install Dev Dependencies

Only needed if editing CoffeeScript source files:

```bash
npm install
```

### Build CoffeeScript

```bash
# One-time build
npm run build

# Watch mode (auto-recompile on save)
npm run build:watch
```

This compiles `src/coffee/*.coffee` → `js/*.js`.

---

## Architecture & Design Decisions

### No Framework / No Bundler

The site is intentionally kept as plain HTML + CSS + JS. This means:

- **Zero build step** for deployment (just push to `main` and GitHub Pages serves it)
- **Easy onboarding** — any developer can read the source directly
- **Fast load times** — no framework overhead, no hydration, no JS bundle bloat

### Component Injection Pattern

Shared UI elements (navbar, footer, floating action buttons) are defined as HTML string constants in `js/components.js` and injected into placeholder `<nav>`, `<footer>`, and `<div>` elements on each page. This avoids duplicating HTML across 30+ pages.

**Flow:**

1. Each HTML page has empty `<nav class="navbar">`, `<footer class="footer">`, and `<div class="floating-action-group">` containers
2. `components.js` defines `NAVBAR_HTML`, `FOOTER_HTML`, and `FLOATING_HTML` as template literals
3. On `DOMContentLoaded`, `injectComponents()` populates the containers
4. `nav.js` then initializes hamburger menu, theme toggle, and active link highlighting

### Theme System

The site supports **dark** (default) and **light** themes via CSS custom properties and a `data-theme` attribute on `<html>`. Theme preference is persisted in `localStorage`.

### Single Shared Stylesheet

Almost all styling lives in `css/style.css` (~2000+ lines). Only the English Assessment and Free IELTS Resources pages have separate stylesheets because they have fully self-contained, app-like UIs.

---

## Page Reference

### Core Pages

| Page            | File               | Description                                                                                              |
| --------------- | ------------------ | -------------------------------------------------------------------------------------------------------- |
| **Homepage**    | `index.html`       | Hero section, SEO content block, free class schedule (fetched live from Google Sheets CSV), CTA sections |
| **Courses**     | `courses.html`     | Grid of all available courses with links to detail pages                                                 |
| **Team**        | `team.html`        | Leadership and staff profiles with photos                                                                |
| **Instructors** | `instructors.html` | Instructor profiles with qualifications and IELTS scores                                                 |
| **Gallery**     | `gallery.html`     | Photo gallery organized by event folders                                                                 |
| **Contact**     | `contact.html`     | Contact cards (phone, email, address), embedded Google Form                                              |
| **Mock Tests**  | `mock-tests.html`  | IELTS mock test schedule and registration info                                                           |

### Course Detail Pages

Each course page follows a consistent layout: hero banner → course overview → curriculum/modules → CTA.

| Course            | File                           |
| ----------------- | ------------------------------ |
| Basic to IELTS    | `course-ielts.html`            |
| Advanced IELTS    | `course-ielts-advanced.html`   |
| PTE Preparation   | `course-pte.html`              |
| Spoken English    | `course-spoken.html`           |
| English Grammar   | `course-grammar.html`          |
| Kids' English     | `course-kids.html`             |
| Juniors' English  | `course-juniors.html`          |
| After SSC English | `course-ssc.html`              |
| Advanced Writing  | `course-advanced-writing.html` |

### Study Abroad Pages

| Page           | File                     |
| -------------- | ------------------------ |
| Overview       | `study-abroad.html`      |
| United Kingdom | `study-uk.html`          |
| United States  | `study-usa.html`         |
| Canada         | `study-canada.html`      |
| Australia      | `study-australia.html`   |
| Ireland        | `study-ireland.html`     |
| New Zealand    | `study-newzealand.html`  |
| Malaysia       | `study-malaysia.html`    |
| Bangladesh     | `study-bangladesh.html`  |
| Denmark        | `study-denmark.html`     |
| Sweden         | `study-sweden.html`      |
| Finland        | `study-finland.html`     |
| Netherlands    | `study-netherlands.html` |
| Hungary        | `study-hungary.html`     |

### Interactive / App-like Pages

| Page                      | File                                   | Description                                                                                                             |
| ------------------------- | -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **English Assessment**    | `english-assessment.html`              | Password-free interactive quiz (reading comprehension + grammar) with instant scoring, timer, and course recommendation |
| **Free IELTS Resources**  | `free-ielts-resources.html`            | Password-gated download page for IELTS PDF materials                                                                    |
| **IELTS Band Calculator** | (embedded in mock-tests or standalone) | Calculates overall IELTS band from individual module scores                                                             |

---

## JavaScript Modules

### `js/components.js`

**Purpose:** Defines and injects shared HTML components (navbar, footer, floating action buttons) into every page.

**Key exports:**

- `NAVBAR_HTML` — Full navbar markup with logo, nav links, theme toggle, hamburger
- `FOOTER_HTML` — Footer with social links (Facebook, Instagram, TikTok, YouTube, Gmail)
- `FLOATING_HTML` — Floating phone call and WhatsApp buttons
- `openAssessment()` — Opens Google Form + redirects to assessment page
- `openFreeIELTS()` — Opens Google Form + redirects to resources page
- `injectComponents()` — Called on `DOMContentLoaded` to populate placeholder elements

### `js/nav.js`

**Purpose:** Navigation behavior — theme toggling, hamburger menu, active link highlighting.

**Key functions:**

- `initTheme()` — Reads `localStorage` theme preference and sets `data-theme` attribute
- `initNav()` — Binds hamburger click, theme toggle click, and marks the current page's nav link as active
- `window.refreshNav` — Exposed globally so `components.js` can re-init after injection

### `js/seo.js`

**Purpose:** Invisible SEO optimization. Injects JSON-LD structured data and hidden keyword blocks for search engine crawlers without affecting visible UI.

**Contains:** A large array of 1000+ targeted keywords covering IELTS, PTE, study abroad, and location-specific search terms.

### `js/home-render.js`

**Purpose:** Fetches a published Google Sheets CSV (free class schedule) and renders it as an HTML table on the homepage.

**Key functions:**

- `parseCsv(text)` — Custom CSV parser handling quoted fields
- `fetchAndRenderCsvTable(url)` — Fetches CSV, parses it, builds `<table>` with signup form links

### `js/band-calculator.js`

**Purpose:** IELTS band score calculator. Takes individual module scores (Listening, Reading, Writing, Speaking), averages them, rounds to nearest 0.5, and displays result with feedback message.

**Source:** Compiled from `src/coffee/band-calculator.coffee`

### `js/english-assessment.js`

**Purpose:** Full interactive English skill assessment engine. This is the most complex module in the project.

**Features:**

- Password gate (optional)
- Timed exam with countdown timer
- Reading comprehension passage with highlight support
- Multiple-choice and fill-in-the-blank questions
- Section navigation (chips)
- Instant scoring with detailed explanations
- Course recommendation based on score
- Dark/light theme support

**Source:** Compiled from `src/coffee/english-assessment.coffee`

### `js/free-ielts-resources.js`

**Purpose:** Password-gated download page for free IELTS PDF materials.

**Flow:**

1. Shows password input gate
2. On correct password (`MENTORS2026`), reveals download cards
3. Each card links to a PDF in `Media/FREE IELTS/`

---

## CSS Architecture

### `css/style.css` — Main Stylesheet

Organized into numbered sections:

1. **CSS Variables** — Color palette, shadows, transitions (dark + light theme)
2. **Global Reset + Typography** — Base styles, scrollbar, font setup
3. **Utilities** — Container, section padding, grid helpers
4. **Buttons** — `.btn`, `.btn-primary`, `.btn-outline` variants
5. **Navbar / Dropdown** — Sticky nav, hamburger, mobile menu
6. **Course Modal** — Course detail overlay styles
7. **Page Hero / Sections / Cards** — Hero banners, section layouts, card grids
8. **Team / Instructors / Schedule** — Profile cards, schedule tables
9. **Mock Tests / Contact / Footer** — Page-specific layouts
10. **Animations / Responsive** — Keyframes, media queries
11. **Floating Actions / IELTS / Admission / SSC** — Floating buttons, specialized page styles

**Key design tokens (CSS custom properties):**

```css
:root {
  --primary: #ff1a1a; /* Brand red */
  --accent: #ff1a1a; /* Accent color */
  --bg-light: #0d0d0d; /* Dark background (default) */
  --surface: #161616; /* Card/panel background */
  --text-main: #f1f1f1; /* Primary text */
  --text-muted: #9ca3af; /* Secondary text */
  --border-color: #2a2a2a; /* Borders */
}
```

### `css/assessment.css`

Self-contained styles for the English Assessment page. Uses its own CSS variable scope (prefixed `--bg`, `--s`, `--ac`, etc.) to avoid conflicts with the main stylesheet.

### `css/free-ielts-resources.css`

Styles for the password gate and download card UI on the IELTS resources page.

---

## CoffeeScript Source

Two JavaScript modules are authored in CoffeeScript and compiled:

| Source                                 | Output                     | Description               |
| -------------------------------------- | -------------------------- | ------------------------- |
| `src/coffee/band-calculator.coffee`    | `js/band-calculator.js`    | IELTS band calculator     |
| `src/coffee/english-assessment.coffee` | `js/english-assessment.js` | English assessment engine |

**Important:** Always edit the `.coffee` files, then run `npm run build` to regenerate the `.js` files. Do not edit the compiled `.js` files directly — your changes will be overwritten.

---

## SEO Strategy

The site employs a multi-layered SEO approach:

1. **Meta tags** — Every page has `<title>`, `<meta description>`, and `<meta keywords>`
2. **Open Graph** — OG tags for Facebook/social sharing on key pages
3. **JSON-LD structured data** — Schema.org markup injected by `js/seo.js`
4. **Invisible keyword injection** — `seo.js` programmatically injects 1000+ keyword variations into hidden DOM elements for crawler indexing
5. **Semantic HTML** — Proper use of `<nav>`, `<header>`, `<section>`, `<main>`, `<footer>`
6. **CNAME** — Custom domain `mentorsnoakhali.com` for brand authority

---

## Assets & Media

### `Media/` Directory

| Path                               | Contents                                                          |
| ---------------------------------- | ----------------------------------------------------------------- |
| `Mentors-Noakhali-Branch-Logo.png` | Branch logo — used in navbar, footer, assessment gate, IELTS gate |
| `favicon.ico`                      | Browser tab icon                                                  |
| `All employees photo/`             | Team and instructor headshot images (PNG/JPG)                     |
| `Events/`                          | Event photo folders (e.g., `Sports Day 02.07.2026/`)              |
| `FREE IELTS/`                      | Downloadable IELTS preparation PDFs                               |

### Image Naming Convention

Employee photos use the format `Firstname-Lastname.png` (hyphenated, title-case). Some use `.jpg`. When adding new team members, follow this pattern.

---

## Deployment

The site is deployed via **GitHub Pages** from the `main` branch.

1. Push changes to `main`
2. GitHub Pages automatically serves the site at the domain defined in `CNAME` (`mentorsnoakhali.com`)
3. No build step, no CI/CD pipeline — the site is served as-is

**DNS:** The `CNAME` file tells GitHub Pages to serve the site at `mentorsnoakhali.com`. The domain's DNS must have a CNAME record pointing to `mentorsnoakhali.github.io` (or equivalent).

---

## Common Tasks

### Adding a New Course Page

1. Copy an existing course page (e.g., `course-ielts.html`) as a template
2. Update the `<title>`, `<meta>` tags, hero content, and course details
3. Add a card entry in `courses.html` linking to the new page
4. The navbar and footer will be auto-injected by `components.js`

### Adding a New Study Abroad Destination

1. Copy an existing study page (e.g., `study-uk.html`) as a template
2. Update the country name, flag emoji, universities, and details
3. Add a card entry in `study-abroad.html`
4. Add the page link in the appropriate section

### Adding a New Team Member / Instructor

1. Add their photo to `Media/All employees photo/` (use `Firstname-Lastname.png` format)
2. Add their card HTML to `team.html` or `instructors.html`
3. Follow the existing card structure (avatar, badge, name, bio, social links)

### Editing the Free Class Schedule

The schedule is fetched live from a published Google Sheet CSV. Edit the Google Sheet directly — no code changes needed. The URL is hardcoded in `js/home-render.js`.

### Editing CoffeeScript Sources

```bash
# 1. Edit the .coffee file
vim src/coffee/english-assessment.coffee

# 2. Compile
npm run build

# 3. Verify the output
cat js/english-assessment.js
```

### Changing the IELTS Resource Password

Edit the `PASSWORD` constant in `js/free-ielts-resources.js`:

```javascript
var PASSWORD = "MENTORS2026";
```

### Adding Free IELTS Resources

1. Add the PDF file to `Media/FREE IELTS/`
2. Add an entry to the `FILES` array in `js/free-ielts-resources.js`:

```javascript
{
  name: "Your Resource Name",
  path: "Media/FREE IELTS/your-file.pdf",
  size: "PDF",
}
```

---

## Coding Conventions

### HTML

- Use semantic elements (`<section>`, `<article>`, `<nav>`, `<main>`)
- Every page must include the empty `<nav class="navbar">` container for component injection
- Include `<link rel="icon" type="image/x-icon" href="Media/favicon.ico">` on every page
- Use `rel="noopener"` on all `target="_blank"` links

### CSS

- Use CSS custom properties from `:root` — never hardcode colors
- Follow the existing section numbering in `style.css` when adding new styles
- Mobile-first responsive design via `@media` queries at the bottom of `style.css`

### JavaScript

- Vanilla JS only — no jQuery, no frameworks
- Use `DOMContentLoaded` for initialization
- Use `dataset` flags to prevent duplicate event listener attachment (see `nav.js`)
- Keep modules self-contained with IIFEs where appropriate

### CoffeeScript

- Edit `.coffee` files only, never the compiled `.js` output
- Run `npm run build` after changes
- Keep CoffeeScript style consistent with existing files (2-space indent)

---

## Known Limitations

- **No automated tests** — `npm test` is a placeholder. Testing is manual.
- **No bundler or minification** — JS files are served unminified. For performance-critical improvements, consider adding a build step.
- **Hardcoded Google Sheets URL** — The free class schedule CSV URL in `home-render.js` is hardcoded. If the sheet changes, the URL must be updated in code.
- **Image optimization** — Images in `Media/` are not compressed or served in modern formats (WebP/AVIF). Consider optimizing for performance.
- **No CI/CD pipeline** — Deployment is automatic via GitHub Pages on push to `main`, with no linting or build checks.

---

## License

ISC — See `package.json` for details.

© 1996–2026 Mentors'. All rights reserved.
