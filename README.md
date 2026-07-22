# The Kitchen Calc

Free, no-sign-up kitchen calculators for home cooks. Scale recipes, convert measurements, calculate yeast and dough hydration, plan holiday meals, find ingredient substitutes, and more.

## Tech Stack

- [Astro](https://astro.build/) 5 (static site)
- [Tailwind CSS](https://tailwindcss.com/) v4 (via `@tailwindcss/vite`)
- `@tailwindcss/typography` for article/calculator explanation prose

## Local Development

```bash
npm install
npm run dev      # start dev server at http://localhost:4321
npm run build    # build to ./dist
npm run preview  # preview the production build
```

## Project Structure

```
src/
  layouts/BaseLayout.astro     # shared HTML shell (SEO, meta, favicon)
  components/                  # Header, Footer, AdSlot, AmazonProducts
  pages/                       # one .astro file per calculator + blog
  content/blog/                # Markdown blog posts (content collections)
  styles/global.css            # Tailwind theme + print styles
public/                       # static assets (favicon, robots.txt, _headers)
```

## Calculators

18 free tools: recipe servings, recipe cost, air fryer, coffee ratio, sourdough,
yeast, dough hydration, brine, sugar & salt concentration, measurement converter,
baking pan, oven temperature, cooking time, food safety, ingredient substitution,
BAC, holiday meal planner, and a printable conversion chart.

## Deployment

Static build deployed to Cloudflare Pages. Custom response headers live in
`public/_headers`.

## Notes

- No analytics ID / AdSense publisher ID is hardwired for production — see the
  commented placeholders in `BaseLayout.astro` and `global.css`.
- Amazon affiliate links use the search endpoint with the associate tag in
  `AmazonProducts.astro`.
