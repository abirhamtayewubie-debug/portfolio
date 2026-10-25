# Abirham Taye — architecture portfolio

A static Next.js site built from the portfolio PDF. Every project, figure and line of text comes from that PDF.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production build
npm run lint && npx tsc --noEmit
```

Set `NEXT_PUBLIC_SITE_URL` (for example `https://abirhamtaye.com`) when deploying, so the sitemap, canonical links and social previews use the real address. The site deploys to Vercel as-is, and every page is prerendered.

## Where things live

| What | Where |
| --- | --- |
| Profile, bio, CV, contact | `src/content/profile.ts` |
| One file per project | `src/content/projects/<slug>.ts` |
| Project order on the homepage | `src/content/index.ts` |
| Content types (blocks, images) | `src/content/types.ts` |
| Images | `public/images/projects/<slug>/*.webp`, `public/images/about/` |
| Image dimensions (generated) | `src/content/image-sizes.json` |
| Colours, type, grid, motion | `src/app/globals.css` |
| Pages | `src/app/` (home, `work/[slug]`, about, contact) |

## Add a project

1. Put WebP or JPG images in `public/images/projects/<new-slug>/`. Aim for about 2400 px wide.
2. Add each image's size to `src/content/image-sizes.json` as `"<new-slug>/<file>.webp": [width, height]`. The build fails with a clear message if an image is missing from the table.
3. Copy an existing project file, such as `src/content/projects/chaka-villas.ts`, and edit it:
   - `section` gives the height label in the homepage index and the small section drawing beside it.
     - For a building, use `{ kind: "building", above: <storeys above ground incl. ground>, below: <basements>, label: "2B+G+12" }`.
     - For masterplans and interiors, use `{ kind: "plate", label: "48 ha", span: 1–3 }`.
   - `blocks` is the page layout, in order. The block types are:
     - `full`: an image at full width.
     - `inset`: an image with a note beside it.
     - `pair`: two images side by side.
     - `drawing`: a drawing on a white mat.
     - `sequence`: a numbered grid of images.
     - `text`
     - `figures`: key numbers.
     - `chapter`: a sub-heading inside the project.
   - `surface: "night"` opens the project on a dark page, which suits night renders.
4. Import it in `src/content/index.ts` and place it in the list. Numbering, the sitemap and next-project links follow automatically.

## Design notes

- The paper, ink and clay palette is taken from the portfolio's own taupe blocks.
- Type is set in Instrument Serif, Inter Tight and IBM Plex Mono.
- The homepage **Index of work** is an editorial table of contents. Pointing at a project wipes its opening image into the plate beside the list, with a small section of the building drawn at one storey scale (towers above the ground line, basements hatched below, masterplans as plates). On a phone each row carries a thumbnail.
- Motion respects `prefers-reduced-motion`. All hover information is also available on focus and tap.
