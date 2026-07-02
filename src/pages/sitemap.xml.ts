import type { APIRoute } from "astro";

const pages = [
  { url: "/", priority: "1.0", changefreq: "weekly" },
  { url: "/recipe-servings-calculator/", priority: "0.9", changefreq: "monthly" },
  { url: "/cooking-time-calculator/", priority: "0.9", changefreq: "monthly" },
  { url: "/holiday-meal-planner/", priority: "0.9", changefreq: "monthly" },
  { url: "/kitchen-measurement-converter/", priority: "0.9", changefreq: "monthly" },
  { url: "/baking-pan-converter/", priority: "0.9", changefreq: "monthly" },
  { url: "/oven-temperature-converter/", priority: "0.9", changefreq: "monthly" },
  { url: "/ingredient-substitution-finder/", priority: "0.9", changefreq: "monthly" },
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
