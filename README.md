# Harsh Gupta — Robotics Portfolio

A minimal, modular single-page portfolio focused on robotics, perception, and computer vision.

## Structure

```
Portfolio/
├── index.html          # Page shell & section placeholders
├── css/styles.css      # Robotics theme (dark grid, teal accent)
├── data/               # Edit content here — one module per section
│   ├── profile.js
│   ├── education.js
│   ├── experience.js
│   ├── projects.js
│   ├── leadership.js   # Robotics / drone club role
│   └── skills.js
└── js/
    ├── main.js         # Bootstraps all sections
    └── sections/       # One renderer per section
```

## Run locally

ES modules require a local server (browsers block `file://` imports).

```bash
# Option 1: Python
python -m http.server 8080

# Option 2: Node (npx)
npx serve .
```

Open `http://localhost:8080`.

## Profile photo

1. Save your photo as `assets/profile.jpg` (square works best, ~400×400px).
2. Or change the path in `data/profile.js` → `photo`.
3. A placeholder SVG shows until your image loads.

## Pages

- **Home:** `index.html` — all portfolio sections
- **Contact:** `contact.html` — dedicated contact page with form & links

## Customize

1. Update GitHub URLs in `data/projects.js` when you have repo links.
2. Add entries by copying objects in any `data/*.js` file.
3. Adjust colors in `css/styles.css` (`:root` variables).
4. Edit contact copy in `data/contact.js`.

## Deploy

Static files only — deploy to GitHub Pages, Netlify, or Vercel by pointing at the project root.
