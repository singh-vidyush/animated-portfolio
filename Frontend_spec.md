# Frontend Specification

## Tech Stack

Framework

Next.js 14

---

Styling

TailwindCSS

---

Animation

GSAP

Used for:

- hero parallax
- hover animations
- scroll effects

---

Scrolling

react-fast-marquee

Used for services section horizontal motion.

---

Icons

lucide-react

---

## Folder Structure

app
  page.tsx
  work/page.tsx

components
  Navbar.tsx
  Hero.tsx
  About.tsx
  Services.tsx
  Works.tsx
  Footer.tsx
  ContactForm.tsx

components/ui
  Button.tsx
  Card.tsx
  Badge.tsx

lib
  gsap.ts
  constants.ts

styles
  globals.css

public
  images

---

## Component Architecture

### Navbar

Floating brutalist container.

Contains:

- logo text
- navigation links
- connect button

---

### Hero

Two column layout.

Left side → text content

Right side → image container

Image interaction:

- hover rotation
- GSAP cursor parallax

---

### About Section

Asymmetric layout.

Right side contains main content card.

---

### Services Section

Horizontal scroll container.

Reusable service card component.

---

### Works Section

Grid of project cards.

Reusable project card component.

---

### Footer

Contains:

- contact form
- social icons
- branding text

---

## Responsiveness

Mobile layout becomes single column.

Breakpoints:

sm 640px  
md 768px  
lg 1024px  
xl 1280px

Hero typography scales based on screen width.