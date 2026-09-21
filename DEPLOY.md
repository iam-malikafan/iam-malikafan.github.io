# Deploy to GitHub Pages

This is a pure static site (no build step). GitHub Pages serves it directly.

## What goes in the repo
Put these at the REPO ROOT (not inside a wrapper folder):
```
index.html
.nojekyll
css/style.css
js/main.js
assets/portrait.png
assets/portrait-dark.png
README.md
```

---

## Option A — GitHub website (no commands)
1. github.com → click **New** (create repository).
   - For a clean URL, name it: **<your-username>.github.io**  → site = https://<your-username>.github.io
   - Or any name (e.g. `portfolio`) → site = https://<your-username>.github.io/portfolio
   - Public. Don't add a README.
2. On the empty repo page → **uploading an existing file**.
3. Drag the **contents** of the `malik-portfolio` folder (index.html, .nojekyll, css, js, assets) — NOT the outer folder itself. Commit.
4. Repo → **Settings → Pages** → Source: **Deploy from a branch** → Branch: **main** → **/(root)** → Save.
5. Wait ~1–2 min → your live URL appears at the top of the Pages settings.

## Option B — Git (best for pushing changes later)
```bash
cd malik-portfolio
git init
git add .
git commit -m "portfolio: initial"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo>.git
git push -u origin main
```
Then: Settings → Pages → Branch **main** / **/(root)** → Save.

### Push future changes
```bash
git add .
git commit -m "update: <what changed>"
git push
```
Changes go live in ~1 min.

## Notes
- Fonts load from Google Fonts (online). Everything else is local.
- Paths are relative, so it works on both `username.github.io` and project subpaths.
- `.nojekyll` makes Pages serve files as-is.
