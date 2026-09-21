# Malik Afan — Portfolio

Static site, no build step, no dependencies.

## Run locally
Open **`index.html`** in any browser (double-click). Works fully offline.

Optional local server:
```bash
python3 -m http.server 8080   # → http://localhost:8080
```

## Structure
```
malik-portfolio/
├── index.html          # markup
├── css/style.css       # all styles
├── js/main.js          # content data (SITE object) + interactions/animations
└── assets/portrait.png # hero cut-out portrait (transparent background)
```

## Change the hero photo
Replace **`assets/portrait.png`** with your own cut-out (transparent-background PNG).
Keep it head-and-shoulders; it auto-fits the hero.

## Edit content
All text/data lives in the `SITE` object at the top of `js/main.js`
(name, role, projects, experience, testimonials, socials, etc.).
