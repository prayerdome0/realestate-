# SWDL Real Estate

Premium real estate website for properties for sale.
© Seedwel Investment Limited. All Rights Reserved.

## Pages

- `index.html` — Home (auto-playing hero slider, featured listings, auto-scrolling gallery)
- `properties.html` — Properties for Sale (9 listings)
- `about.html` — About Us
- `contact.html` — Contact (info + enquiry form)

## Tech

Pure static HTML / CSS / JavaScript — no build step required.

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy on Vercel

This repo is Vercel-ready (`vercel.json` included, no build configuration needed).

1. Go to [vercel.com/new](https://vercel.com/new) and sign in (with GitHub).
2. Import this repository: `prayerdome0/realestate-`.
3. Framework Preset: **Other** — leave Build Command and Output Directory **empty**.
4. Click **Deploy**.

Every push to the production branch will redeploy automatically.
Thanks to `cleanUrls`, pages are served as `/properties`, `/about`, `/contact`.
