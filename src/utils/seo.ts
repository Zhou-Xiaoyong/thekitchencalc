export interface SEOMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: Record<string, unknown>;
}

export function generateMeta(page: SEOMeta) {
  const siteName = "The Kitchen Calc";
  const siteUrl = "https://thekitchencalc.com";

  return {
    title: page.title.includes(siteName)
      ? page.title
      : `${page.title} | ${siteName}`,
    description: page.description,
    canonical: page.canonical || siteUrl,
    ogImage: page.ogImage || `${siteUrl}/og-default.svg`,
    ogType: page.ogType || "website",
    schema: page.schema || null,
  };
}

export const siteConfig = {
  name: "The Kitchen Calc",
  tagline: "Free Kitchen Calculators for Home Cooks",
  url: "https://thekitchencalc.com",
  description:
    "Free, easy-to-use kitchen calculators for home cooks. Scale recipes, convert cooking times, and plan holiday meals. No sign-up required.",
};
