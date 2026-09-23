import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const blogPosts = await getCollection("blog");

// Baseline lastmod for pages untouched by the current update.
// Only bump the entry for a page when that page actually changes.
const DEFAULT_LASTMOD = "2026-08-27";

const ymd = (d: Date) => d.toISOString().split("T")[0];

const blogPages = blogPosts.map((post) => ({
  url: `/blog/${post.slug}/`,
  priority: "0.7",
  changefreq: "monthly",
  lastmod: ymd(post.data.pubDate ?? new Date()),
}));

const pages = [
  { url: "/", priority: "1.0", changefreq: "weekly", lastmod: DEFAULT_LASTMOD },
  ...blogPages,
  { url: "/blog/", priority: "0.9", changefreq: "weekly", lastmod: "2026-09-02" },
  { url: "/recipe-servings-calculator/", priority: "0.9", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/air-fryer-converter/", priority: "0.9", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/coffee-ratio-calculator/", priority: "0.9", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/sourdough-calculator/", priority: "0.9", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/cooking-time-calculator/", priority: "0.9", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/holiday-meal-planner/", priority: "0.9", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/kitchen-measurement-converter/", priority: "0.9", changefreq: "monthly", lastmod: "2026-09-23" },
  { url: "/baking-pan-converter/", priority: "0.9", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/oven-temperature-converter/", priority: "0.9", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/ingredient-substitution-finder/", priority: "0.9", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/yeast-calculator/", priority: "0.8", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/dough-hydration-calculator/", priority: "0.8", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/brine-calculator/", priority: "0.8", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/sugar-salt-calculator/", priority: "0.8", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/food-safety-temperature-guide/", priority: "0.8", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/recipe-cost-calculator/", priority: "0.8", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/conversion-chart/", priority: "0.8", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/bac-calculator/", priority: "0.7", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/about/", priority: "0.5", changefreq: "monthly", lastmod: DEFAULT_LASTMOD },
  { url: "/privacy-policy/", priority: "0.3", changefreq: "yearly", lastmod: DEFAULT_LASTMOD },
  { url: "/terms-of-service/", priority: "0.3", changefreq: "yearly", lastmod: DEFAULT_LASTMOD },
];

export const GET: APIRoute = () => {
  const today = new Date().toISOString().split("T")[0];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>https://thekitchencalc.com${p.url}</loc>
    <lastmod>${p.lastmod ?? today}</lastmod>
    <priority>${p.priority}</priority>
    <changefreq>${p.changefreq}</changefreq>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
