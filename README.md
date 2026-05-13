# ACM at FSU — Website

The official website for ACM at Florida State University, built by students, for students.

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| [React](https://react.dev) | UI components |
| [TypeScript](https://www.typescriptlang.org) | Type-safe JavaScript |
| [Tailwind CSS](https://tailwindcss.com) | Styling |
| [Vite](https://vitejs.dev) | Dev server and build tool |

---

## Getting Started

You'll need [Node.js](https://nodejs.org) installed (v18 or higher).

```bash
# 1. Clone the repo
git clone https://github.com/ACMatFSU/acm-website.git
cd acm-website

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Contributing

This project is built component by component through GitHub Issues. Here's the workflow:

**1. Find an issue**
Browse the open [Issues](https://github.com/ACMatFSU/acm-website/issues) and pick a component you want to build. Each issue has a screenshot of what it should look like and a list of requirements.

**2. Assign it to yourself**
Click "Assignees" on the issue and assign it to yourself so no one else duplicates your work.

**3. Create a branch**
```bash
git checkout -b your-name/component-name
# example: git checkout -b carter/hero-section
```

**4. Build the component**
Create your component file in `src/components/`. Check `src/ThemeShowcase.tsx` for examples of how to use the design tokens (colors, fonts, buttons, cards).

**5. Open a Pull Request**
Push your branch and open a PR against `main`. Tag another member to review it.

```bash
git add .
git commit -m "feat: add HeroSection component"
git push origin your-name/component-name
```

---

## Project Structure

```
src/
├── components/       # One file per component (your work goes here)
├── App.tsx           # Root component — assembles the page
├── main.tsx          # Entry point
├── index.css         # Global styles and Tailwind directives
```

---

## Design Tokens

The color palette, fonts, and reusable class names are defined in `tailwind.config.ts` and `src/index.css`. The short version:

| Token | Class | Use for |
|-------|-------|---------|
| Garnet | `bg-garnet`, `text-garnet` | Primary brand color, headings |
| Cream | `bg-cream`, `text-cream` | Page background |
| Ink | `bg-ink`, `text-ink` | Body text, dark sections |
| Gold | `bg-gold`, `text-gold` | Accents, highlights |
| Chalk | `text-chalk` | Text on dark backgrounds |

**Buttons:** `btn-primary`, `btn-outline`, `btn-gold`

**Cards:** `card-brutal`, `card-brutal-dark`

**Layout:** `section-wrap`, `section-label`

See `src/ThemeShowcase.tsx` for live examples of all of these.

---

## Questions?

Find us on Discord or open a GitHub Issue.
