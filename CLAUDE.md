# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Vishakha Sah, a CSE undergrad at KIIT with an AI/ML focus. Built with Next.js 14, Three.js, Framer Motion, and Tailwind CSS.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| 3D / WebGL | Three.js via @react-three/fiber + @react-three/drei |
| Animation | Framer Motion |
| Styling | Tailwind CSS |
| Deployment | Vercel |

## Common Commands

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Project Structure

```
/app
  layout.tsx          # Root layout with fonts, metadata
  page.tsx            # Main page composing all sections
  globals.css         # Global styles, Tailwind imports
/components
  /ui                 # Reusable components (Button, Tag, Card, Toast)
  /sections           # Page sections (Hero, About, Skills, Experience, Projects, Achievements, Contact)
  /three              # Three.js components (ParticleNetwork)
  Navbar.tsx          # Fixed navigation with scroll blur
/lib
  constants.ts        # All content data (skills, projects, experience)
  utils.ts            # Utility functions (cn helper)
/public
  resume.pdf          # Downloadable resume
  /images             # Project images, profile photo
```

## Design System

### Color Palette
| Role | Value |
|------|-------|
| Background | `#080808` |
| Surface | `#0f0f0f`, `#141414` |
| Primary Accent | `#7C3AED` (violet) |
| Secondary Accent | `#06B6D4` (cyan) |
| Text Primary | `#F8F8F8` |
| Text Muted | `#6B7280` |
| Border | `#1f1f1f` |

### Typography
- **Headings:** `Syne` (Google Fonts)
- **Body:** `Inter` (Google Fonts)
- **Code/Tags:** `JetBrains Mono` (Google Fonts)

## Animation Guidelines

### Framer Motion Patterns
- Section entrance: `fadeUp` variant with `y: 30 -> 0`, `opacity: 0 -> 1`
- Stagger children: `staggerChildren: 0.05` for lists/pills
- Use `whileInView` with `once: true` (animations don't re-trigger on scroll back)
- Duration: `0.5s` for most animations
- Easing: `[0.22, 1, 0.36, 1]` (ease-out-cubic)

### Three.js Performance Rules
- Cap particles: 120 on desktop, 60 on mobile
- Canvas: `position: absolute`, `pointer-events: none` where appropriate
- Use `useFrame` with delta time
- Dispose geometry/material on unmount
- Dynamic import with `ssr: false`

## Component Conventions

### Section Components
- Located in `/components/sections/`
- Accept `className?: string` prop for external styling
- Use `motion.section` with viewport animation
- Export as default

### UI Components
- Located in `/components/ui/`
- Use `cn()` utility for conditional class merging
- Support `className` prop
- Keep props interface minimal and explicit

### Icons
- Use `lucide-react` for all icons
- Consistent size: `24px` default, `20px` for inline

## Content Data

All content lives in `/lib/constants.ts`:
- `SKILLS`: Categorized skill list
- `EXPERIENCES`: Work history with bullets
- `PROJECTS`: Project details with experiment tables
- `ACHIEVEMENTS`: Awards and recognition
- `CERTIFICATIONS`: Course completions
- `CONTACT`: Links and email

## Development Notes

- **Mobile-first**: All sections must be fully responsive
- **Images**: Use `next/image` with proper width/height
- **Fonts**: Load via `next/font/google`
- **SEO**: Include proper meta tags, OG image
- **Accessibility**: Lighthouse target > 95
- **Resume**: Link to `/resume.pdf` in public folder

## Key Sections

1. **Hero**: Full viewport, Three.js particle network background, typewriter effect on name
2. **About**: Two-column layout, animated stat counters
3. **Skills**: Categorized pills with hover glow effect
4. **Experience**: Vertical timeline, slide-in animation
5. **Projects**: Featured Plant Disease card with experiment accordion + grid for others
6. **Achievements**: Highlight cards with trophy icons
7. **Contact**: Email copy button with toast, social links

## Environment Variables

None required for v1. Contact form uses `mailto:` link, email copied via clipboard API.
