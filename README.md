# FXXK STEREOTYPE Website

A premium, editorial-style promotional website for the **FXXK STEREOTYPE** project.

Built with Next.js, TypeScript, and Tailwind CSS. Ready for Vercel deployment.

## Quick Start

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run lint
npm run build
```

Open `http://localhost:3000`.

## Where To Edit Content

Most artist-facing content is centralized in:

- `data/djs.ts`

Edit this file to update:

- DJ bios
- profile image paths
- featured videos
- additional videos
- Wenshuai music tracks

Other editable files:

- `data/tour.ts`
  Tour cities, venues, dates, ticket links, and statuses
- `data/site.ts`
  Hero copy, manifesto text, contact emails, and project-level featured media

## Media Asset Structure

All integrated source media now lives under `public/assets/`:

- `public/assets/artists/`
  Artist profile images and editorial stills
- `public/assets/videos/`
  Featured videos and archive clips grouped by artist
- `public/assets/music/`
  Audio files used in the music section
- `public/assets/brand/`
  Project-level campaign artwork

## Artist Data Shape

Each artist entry in `data/djs.ts` supports:

- `name`
- `origin`
- `bio`
- `photo`
- `photoPosition`
- `tags`
- `featuredVideo`
- `additionalVideos`
- `tracks`

Example:

```ts
{
  id: "artist-id",
  name: "ARTIST",
  origin: "City / Context",
  bio: "Short English bio...",
  photo: "/assets/artists/artist/profile.jpg",
  photoPosition: "center 20%",
  tags: ["Tag One", "Tag Two"],
  featuredVideo: {
    id: "artist-featured",
    title: "Artist - Featured Performance",
    caption: "Short note...",
    src: "/assets/videos/artist/featured.mp4",
    poster: "/assets/artists/artist/profile.jpg",
  },
  additionalVideos: [],
  tracks: [],
}
```

## Tour Data Shape

Edit `data/tour.ts`:

```ts
{
  id: "berlin-2026",
  city: "Berlin",
  country: "Germany",
  venue: "Venue Name",
  date: "2026-09-15",
  ticketLink: "https://tickets.example.com/berlin",
  status: "on-sale",
}
```

Status options:

- `"announced"`
- `"on-sale"`
- `"sold-out"`
- `"coming-soon"`

## Project Structure

```txt
fxxk-stereotype/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── TourSection.tsx
│   ├── ArtistsSection.tsx
│   ├── VisualsSection.tsx
│   ├── MusicSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── MediaModal.tsx
├── data/
│   ├── djs.ts
│   ├── site.ts
│   └── tour.ts
├── lib/
│   └── useInView.ts
└── public/assets/
    ├── artists/
    ├── brand/
    ├── music/
    └── videos/
```

## Deploy To Vercel

1. Push the project to GitHub.
2. Import it into Vercel as a Next.js project.
3. If needed, set the root directory to `fxxk-stereotype`.
4. Deploy.

Or via CLI:

```bash
npx vercel
```

## Notes

- The site is static and does not require a backend.
- Local media is already integrated and Vercel-safe.
- The DJ lineup, archive videos, and Wenshuai music are all driven from centralized data for easy future editing.
