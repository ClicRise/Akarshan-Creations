# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS

## Akarshan Creations: content and launch

Seven public pages are prerendered. There are no accounts, payment processing, database, private keys, or runtime server requirements for the static delivery. WhatsApp opens an editable enquiry; it never confirms an order.

### Hostinger static delivery

1. Install dependencies with `bun install`.
2. Run `bun run build` (prerendering is enabled in vite.config.ts). Check that all seven routes render successfully. Depending on the environment, public build files appear in `dist/client` or `.output/public`; never upload the server folder.
3. Run `node scripts/prepare-hostinger.mjs`. It verifies every page and creates `hostinger-static/`, including local copies of the nine uploaded photos at their existing paths. This avoids relying on Lovable's asset-serving path on an unrelated host. The package tool requires network access; set `ASSET_ORIGIN` to your current Lovable preview/published origin if it changes.
4. Upload the **contents** of `hostinger-static/` to Hostinger's `public_html`. Include hidden `.htaccess`. It serves the existing page directories first, with an index fallback for client navigation.
5. Check direct visits and reloads at `/`, `/about/`, `/creations/`, `/custom-orders/`, `/gallery/`, `/contact/`, and `/shipping-policy/`. Check every photo, phone and Instagram link, and the WhatsApp message drafts. Do not upload dependencies, source, or server output.

Static export settings are implemented; a production build/package and Hostinger upload must still be verified in the deployment environment. The website is not yet published, and no domain is configured.

### Before public launch

All names and INR amounts in `src/lib/catalog.ts` are **illustrative**, not approved quotations. Visible sample labels must remain until Tripti approves the product names and final prices. Replace demo amounts with approved prices, or replace the price display with **Price on Request** and remove demo-price sorting. Do not advertise demo amounts as final prices.

All nine product photos are supplied originals, not placeholders. Add approved high-resolution photos by uploading through Lovable Assets, saving each returned `.asset.json` pointer in `src/assets`, and referencing its `.url` from the product data. Add a record with a unique id, approved name, factual description, category, image, personalization availability and featured flag. Filters and the gallery derive from these records. Do not label unconfirmed painting techniques as Lippan art.

The brand logo/icon are raster PNGs, not editable vectors. Fonts load from Google Fonts. A genuine founder portrait and additional approved product photos can be added when supplied; no fictional founder imagery or testimonials are used.

Confirm the published domain before adding canonical URLs. Ask the owner for any additional cancellation/returns/damage policy before adding specific terms. Shipping fees, transit timing, and final quotations are confirmed on WhatsApp.
