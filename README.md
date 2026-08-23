# Kristos Campus Missions — kcm.network

A revamp of [kcm.network](https://kcm.network), rebuilt off Squarespace as a fast,
self-hosted static site. Built with **Astro** + **Tailwind CSS v4**.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs static site to ./dist
npm run preview  # preview the production build locally
```

## Project structure

```
src/
  data/            ← all editable content lives here (no HTML needed)
    site.ts        ← site name, mission, socials, About copy, resource links
    campuses.ts    ← 8 campuses + core rosters (name, role, photo)
    staff.ts       ← Steering Core + staff group descriptions
    missions.ts    ← STSM mission teams + galleries
    churches.ts    ← church directory (by county)
  components/      ← Header, Footer, PageHeader, Logo
  layouts/         ← Layout.astro (head/meta, header, footer, scroll-reveal)
  pages/           ← one file per route (index, about, staff, campuses,
                     missions, church-directory, give)
  styles/global.css← design tokens (colors, fonts) + reveal animation
public/
  images/          ← self-hosted photos, organized by page
  SupportKCM.pdf   ← giving instructions
  favicon.svg
```

## Editing content

Everything editable is in `src/data/*.ts` — update a roster, add a campus,
or change the mission statement by editing one file. Photos go in
`public/images/<page>/` and are referenced by path in the data files.

## Deploy

Static output (`dist/`) hosts anywhere. This repo includes `netlify.toml`:

- **Netlify / Cloudflare Pages / Vercel**: connect the repo; build command
  `npm run build`, publish directory `dist`.

Point the `kcm.network` domain at the host once deployed. Update the `site`
field in `astro.config.mjs` if the domain changes.

## Notes / to confirm

- **Missions team list**: the live site's "2025 STSM Teams" board lists
  **Philippines**, but the detailed sections still showed **Ecuador**. This
  rebuild follows the board (Philippines). Philippines has a cover but no
  gallery yet — confirm which is current and add photos.
- **Steering Core photos**: the source headshots had non-descriptive filenames
  that couldn't be safely matched to names, so Steering Core uses monogram
  cards. Drop named photos in and wire them up in `src/data/staff.ts` if wanted.
