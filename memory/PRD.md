# PRD — Aria Vesper · UI/UX Designer Portfolio

## Original problem statement
Award-worthy (Awwwards SOTD-level) UI/UX Designer portfolio for a fresher.
Dark theme, electric-blue `#1D35FF` accents, glassmorphism, automotive-inspired motion,
Fraunces + Manrope typography, framer-motion + lenis smooth scrolling, kinetic hero with
masked line-by-line reveal, numbered manifesto chapters, editorial marquee, one parallax
moment, custom cursor. Sections: Hero, About, Skills, Featured Project (Studio Spot),
Design Process, Contact (backend-connected), Footer.

## Architecture
- **Frontend**: React 19 + CRA (craco) + Tailwind + framer-motion + lenis + react-fast-marquee + sonner (toasts) + shadcn/ui.
- **Backend**: FastAPI (`/api` prefix) + Motor (Mongo) — endpoints: `GET /api/`, `POST /api/status`, `GET /api/status`, `POST /api/contact`, `GET /api/contact`.
- **DB**: MongoDB via `MONGO_URL`, DB name from `DB_NAME` env. Contact messages persisted in `contact_messages` collection.

## User personas
1. **Recruiter / Hiring Manager** — scans for role fit, case-study depth, and craft signals within 60 seconds.
2. **Prospective Client** — evaluates process, tools, and whether the designer can ship real product work.

## Core requirements (static)
- Dark #050505 background + electric-blue #1D35FF accent (only).
- Fraunces (serif display) + Manrope (sans body).
- Kinetic hero on-load reveal + lenis momentum scroll.
- Case study with problem / research / user-flow / wireframes / final-UI / features / outcome.
- Contact form persisted to Mongo.
- Every interactive element has a `data-testid`.

## What's been implemented (2026-12)
- Preloader with signature SVG draw + counter (2.5s)
- Custom cursor (dot + trailing ring)
- Sticky nav with scroll-blur, lenis-powered anchor scroll
- Kinetic hero: masked line reveal, parallax portrait card, animated speed-lines SVG, dual CTAs
- Editorial marquee (twice — hero and post-process) with stroke text
- About: 5 numbered manifesto chapters, asymmetric grid, blur-fade reveal
- Skills: 6 skills with animated dial + progress bars, 5 tool chips, Eames pull-quote
- Featured Project (Studio Spot): parallax cover, 5 case-study blocks, sticky features card with stats, quote outcome
- Design Process: 8 steps with animated racing-track SVG (scroll-linked pathLength)
- Contact: form → `/api/contact` → Mongo + sonner toast, 4 contact link tiles
- Footer with massive brand text + directory columns
- SEO meta tags for UI/UX Designer, Product Designer, Figma Designer, Portfolio Website

## Backlog
### P1
- Replace placeholder personal info (name, email, phone, LinkedIn, Behance) with real values
- Real portrait image + real Studio Spot screenshots
- Downloadable resume PDF wired to hero button
- Additional case studies (currently one)

### P2
- Blog / writing section
- Case-study detail routes with in-depth breakdowns
- Email notification (Resend) on new contact submission
- Analytics events for CTA clicks

## Test credentials
Not applicable (no auth).

## Endpoints
| Method | Path | Purpose |
|---|---|---|
| GET | /api/ | Health |
| POST | /api/contact | Save contact message (name, email, subject?, message) |
| GET | /api/contact | List messages (admin) |
