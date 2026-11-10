# chetanraj.github.com

Personal portfolio built with React and Vite.

## Branches and publishing

- `master` contains the deployed static build. It is not the React source branch.
- `main` contains the restored React source, including the metadata change merged in PR #5.
- `redesign/afterglow` proposes the Afterglow redesign against `main`.

Work on the source branch, not `master`. Merging a source PR does not deploy it. Publishing is a separate, deliberate step: `npm run deploy` builds the site and writes `dist/` to `master` using gh-pages. Do not run it just to preview changes.

## Local development

Use Node.js 22.12+ or 24, then run `npm ci` and `npm run dev`. To review the production build locally, run `npm run build` followed by `npm run preview`.

## Afterglow

The redesign preserves the original laptop photo and existing destinations. It adds a full-screen hero, blue and warm gradients, self-hosted Geist Serif headings, and optional GSAP ScrollTrigger transitions. Native scrolling and visible content remain the default; reduced-motion preferences disable motion. The font license is in `public/licenses/GEIST-OFL.txt`.

## Scripts

- `npm run dev`: local Vite server
- `npm test`: Vitest component and scroll-motion tests
- `npm run build`: production build in `dist/`
- `npm run preview`: serve the production build locally
- `npm run deploy`: build and publish `dist/` to `master` (changes the live site)
