# Product Requirements Document
## Vishakha Sah — Personal Portfolio Website

---

## 1. Overview

A personal portfolio website for Vishakha Sah, a CSE undergrad at KIIT with a strong AI/ML profile, targeting internship and job recruiters. The site should feel elegant, technically impressive, and unmistakably hers — dark, sharp, and alive with subtle interactivity.

**Primary audience:** Recruiters, hiring managers, and research labs scanning for AI/ML interns and junior engineers.

**Core goal:** Within 10 seconds of landing, a recruiter should know — *this person is serious*.

---

## 2. Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| 3D / WebGL | Three.js (via @react-three/fiber + @react-three/drei) |
| Animation | Framer Motion |
| Styling | Tailwind CSS |
| Deployment | Vercel |

---

## 3. Design Language

### Color Palette
| Role | Value |
|---|---|
| Background | `#080808` — near black |
| Surface | `#0f0f0f` / `#141414` — card backgrounds |
| Primary Accent | `#7C3AED` — violet (reflects AI/ML identity) |
| Secondary Accent | `#06B6D4` — cyan (tech, precision) |
| Text Primary | `#F8F8F8` |
| Text Muted | `#6B7280` |
| Border | `#1f1f1f` |

### Typography
- **Headings:** `Syne` — bold, geometric
- **Body:** `Inter` — clean, readable
- **Code/tags:** `JetBrains Mono` — for skill tags, metrics, experiment labels

### Design Principles
- Generous whitespace inside dark backgrounds — never cluttered
- Subtle neon glow effects on accent elements (box-shadow, text-shadow)
- Glass morphism for cards (`backdrop-filter: blur`, semi-transparent borders)
- Every section entrance animated via Framer Motion (fade-up + slight scale)
- Mobile-first, fully responsive

---

## 4. Site Structure & Sections

### 4.1 — Navbar
- Fixed top, blurred background on scroll (`backdrop-blur`)
- Logo: stylized **"VS"** monogram (SVG, glowing violet)
- Nav links: About · Skills · Experience · Projects · Achievements · Contact
- Smooth scroll to sections
- Active section highlighting
- Mobile: hamburger menu with Framer Motion slide-in drawer

---

### 4.2 — Hero Section
**Purpose:** Instant first impression. Name, role, CTA.

**Layout:**
- Full viewport height
- Left side: Text content
- Right side / background: Three.js interactive canvas

**Text content:**
```
Hi, I'm
Vishakha Sah
AI/ML Engineer · CSE Undergrad at KIIT
Building intelligent systems at the intersection of research and real-world impact.
```
- Animated text: name types in with a cursor blink effect (Framer Motion)
- Two CTAs: `View Projects` (primary, violet) · `Download Resume` (ghost/outline)

**Three.js Element:**
- Floating particle network / neural-net-like node graph
- Nodes connected by thin glowing lines
- Reacts to mouse cursor: nodes gently repel/attract toward cursor position
- On scroll down: canvas fades and scales back smoothly
- Color: violet and cyan particles on black

---

### 4.3 — About Section
**Purpose:** Human touch. Brief, confident, not a wall of text.

**Layout:** Two columns — left: text, right: a glowing profile photo placeholder (or photo if provided)

**Content:**
- 3–4 sentence bio: KIIT student, AI/ML focus, Kathmandu roots, hackathon finalist
- Quick stat cards (animated counters on scroll-enter):
  - `9.32 CGPA`
  - `2 Internships`
  - `Top 4 Hackathon`
  - `5 Experiments` (Plant Disease project)

---

### 4.4 — Skills Section
**Purpose:** Scannable, visually rich skills display.

**Layout:** Grouped by category, tag-pill style with hover glow

**Categories:**
- AI / ML
- Languages
- Frameworks & Libraries
- Web & Backend
- Tools & Design

Each pill: subtle border, on hover → neon glow + slight lift (Framer Motion)

Entrance animation: pills stagger-fade in by category.

---

### 4.5 — Experience Section
**Purpose:** Show real-world work history.

**Layout:** Vertical timeline (left line, right content cards)

**Entries (reverse chronological):**
1. Web Development Intern — Nexalaris Tech (May–Jul 2025)
2. AI Foundation Intern — Microsoft AI National Skilling Initiative (May 2025)

Each card:
- Company name, role, duration
- Bullet points
- Tech tags at the bottom (pill style)
- Framer Motion: slide in from left on scroll

---

### 4.6 — Projects Section
**Purpose:** The centrepiece. Showcases depth of work.

**Layout:** Featured project (large card, full width) + grid of smaller project cards below.

**Featured Project — Plant Disease Detection:**
- Large card with subtle animated gradient border (violet → cyan)
- Expandable experiment table (accordion):

| # | Experiment | Highlight |
|---|---|---|
| 1 | Real Data Only | 99.14% Accuracy |
| 2 | Geometric Augmentation | 99.89% Accuracy |
| 3 | WGAN-GP Augmentation | 99.79% Accuracy |
| 4 | Balanced Mixed Dataset | AUC 1.0000 · G-Mean 0.9915 |
| 5 | CBAM Attention | *(add result)* |

- Tech stack tags
- GitHub link button

**Other Project Cards (standard grid, 2-col):**
- Student Mental Health Treatment Prediction
- CareConnect (Hackathon MVP)

Each card: hover → lift + border glow + subtle background shift.

---

### 4.7 — Achievements & Certifications Section
**Purpose:** Credibility signals for recruiters.

**Layout:** Two sub-sections side by side

**Achievements:**
- Top 4 Finalist — Startup Hackathon 2025
- PwC Launchpad Advisory Program

Each as a highlight card with a trophy/star icon and a glowing accent border.

**Certifications:**
- Grid of cert cards: name + issuer
  - Business Analytics — University of Colorado Boulder
  - Strategy & Game Theory — IIM Ahmedabad
  - Azure AI Fundamentals — Microsoft
  - Intro to Cybersecurity — Cisco

---

### 4.8 — Contact Section
**Purpose:** Make it dead simple to reach out.

**Layout:** Centered, minimal

**Content:**
- Heading: *"Let's build something."*
- Subtext: Open to internships, research collaborations, and interesting problems.
- Email button (copies to clipboard on click with toast notification)
- LinkedIn icon link → https://www.linkedin.com/in/vishakha-sah-56777031b
- GitHub icon link → https://github.com/Vishakha-sah
- Footer: © 2025 Vishakha Sah

---

## 5. Three.js Interactions — Detailed Spec

| Location | Effect |
|---|---|
| Hero background | Particle node network, mouse repulsion/attraction |
| Scroll | Hero canvas fades + scales out as user scrolls past |

**Performance rules:**
- Particle count capped at 120 nodes on desktop, 60 on mobile
- Three.js canvas is `position: absolute`, behind all content
- `useFrame` delta-time based animation (no fixed speed assumptions)
- Dispose geometry/material on unmount
- Loaded with dynamic import (`ssr: false`)

---

## 6. Framer Motion — Animation Spec

| Element | Animation |
|---|---|
| Section headings | Fade up + Y offset, on viewport enter |
| Skill pills | Stagger fade-in by group (0.05s delay each) |
| Project cards | Fade up + scale from 0.97 → 1 |
| Timeline entries | Slide in from left |
| Stat counters | Count up from 0 on viewport enter |
| Navbar | Fade in on load, blur background on scroll |
| Page load | Short global fade-in (0.3s) |

All animations use `once: true` (do not re-trigger on scroll back).

---

## 7. Performance & SEO

- Next.js App Router with static generation
- `next/image` for all images
- `next/font` for typography
- Meta tags: title, description, OG image
- Lighthouse target: Performance > 90, Accessibility > 95

---

## 8. Suggested File Structure

```
/app
  layout.tsx
  page.tsx
/components
  /ui                 # Button, Tag, Card, Toast
  /sections           # Hero, About, Skills, Experience, Projects, Achievements, Contact
  /three              # ParticleNetwork.tsx
  Navbar.tsx
/lib
  constants.ts        # All content data
/public
  resume.pdf
  /images
```

---

## 9. Out of Scope (v1)

- Blog / writing section
- CMS integration
- Contact form with backend
- Project case study subpages
