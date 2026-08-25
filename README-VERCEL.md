# Vercel setup (SPA)

This project is a React + Vite single-page app (SPA). For client-side routing to work on Vercel (e.g., `/about`, `/contact`, etc.), we must redirect all non-file requests to `index.html`.

## Files added
- `vercel.json` – redirects `/(.*)` → `/index.html`

## Deployment steps
1. Push your repo to GitHub/GitLab.
2. In Vercel → New Project → select the repo.
3. Framework preset: **Vite** (or **Other** if not detected).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

After deployment, deep links like `/about` should load correctly without 404.

