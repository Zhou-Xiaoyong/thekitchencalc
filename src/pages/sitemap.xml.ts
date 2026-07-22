import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const blogPosts = await getCollection("blog");

const blogPages = blogPosts.map((post) => ({
  url: `/blog/${post.slug}/`,
  priority: "0.7",
  changefreq: "monthly",
}));

const pages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  ...blogPages,
  { url: "/blog/", priority: "0.9", changefreq: "weekly" },
  { url: "/recipe-servings-calculator/", priority: "0.9", changefreq: "monthly" },
  { url: "/air-fryer-converter/", priority: "0.9", changefreq: "monthly" },
  { url: "/coffee-ratio-calculator/", priority: "0.9", changefreq: "monthly" },
  { url: "/sourdough-calculator/", priority: "0.9", changefreq: "monthly" },
  { url: "/cooking-time-calculator/", priority: "0.9", changefreq: "monthly" },
  { url: "/holiday-meal-planner/", priority: "0.9", changefreq: "monthly" },
  { url: "/kitchen-measurement-converter/", priority: "0.9", changefreq: "monthly" },
  { url: "/baking-pan-converter/", priority: "0.9", changefreq: "monthly" },
  { url: "/oven-temperature-converter/", priority: "0.9", changefreq: "monthly" },
  { url: "/ingredient-substitution-finder/", priority: "0.9", changefreq: "monthly" },
  { url: "/yeast-calculator/", priority: "0.8", changefreq: "monthly" },
  { url: "/dough-hydration-calculator/", priority: "0.8", changefreq: "monthly" },
  { url: "/brine-calculator/", priority: "0.8", changefreq: "monthly" },
  { url: "/sugar-salt-calculator/", priority: "0.8", changefreq: "monthly" },
  { url: "/food-safety-temperature-guide/", priority: "0.8", changefreq: "monthly" },
  { url: "/recipe-cost-calculator/", priority: "0.8", changefreq: "monthly" },
  { url: "/conversion-chart/", priority: "0.8", changefreq: "monthly" },
  { url: "/bac-calculator/", priority: "0.7", changefreq: "monthly" },
  { url: "/about/", priority: "0.5", changefreq: "monthly" },
  { url: "/privacy-policy/", priority: "0.3", changefreq: "yearly" },
  { url: "/terms-of-service/", priority: "0.3", changefreq: "yearly" },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split("T")[0];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>https://thekitchencalc.com${p.url}</loc>
    <lastmod>${lastmod}</lastmod>
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
