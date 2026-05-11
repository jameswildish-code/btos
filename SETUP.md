# BiotrackOS — Setup & Deployment Guide

## 1. Create your Sanity project

1. Go to [sanity.io/manage](https://sanity.io/manage) → **Create new project**
2. Name it "BiotrackOS", choose the **production** dataset
3. Copy your **Project ID**

## 2. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_token_here   # optional, only needed for private datasets
```

To create a token: Sanity Manage → your project → API → Tokens → Add API token (Editor role).

## 3. Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the site.  
Visit `http://localhost:3000/studio` to manage content.

## 4. Push to GitHub

```bash
git add .
git commit -m "Initial BiotrackOS build"
git remote add origin https://github.com/YOUR_USERNAME/biotrackos.git
git push -u origin main
```

Or create the repo first via GitHub CLI:
```bash
gh repo create biotrackos --public
git push -u origin main
```

## 5. Deploy to Vercel

**Option A — Vercel dashboard:**
1. Go to [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repo
3. Add environment variables (same as `.env.local`)
4. Deploy — Vercel auto-detects Next.js

**Option B — Vercel CLI:**
```bash
npx vercel
# Follow prompts, then:
npx vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
npx vercel env add NEXT_PUBLIC_SANITY_DATASET
npx vercel --prod
```

## 6. Configure Sanity CORS for production

In Sanity Manage → API → CORS Origins, add:
- `http://localhost:3000` (for local dev)
- `https://your-vercel-domain.vercel.app` (for production)

## Content types available in Studio

| Type | Path in Studio |
|------|---------------|
| Blog posts | `/studio` → Blog posts |
| Customer stories | `/studio` → Case studies |
| Open roles | `/studio` → Open roles |
| Press items | `/studio` → Press items |
| Marketplace partners | `/studio` → Partners |
| Add-ons | `/studio` → Add-ons |
| Programmes | `/studio` → Programmes |

All pages fall back to static seed data if Sanity isn't configured, so the site works immediately without any CMS setup.
