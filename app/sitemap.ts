import { MetadataRoute } from "next";
import { categories } from "./data/calculators";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://calc.univexo.app";

  // Home page
  const entries: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    // Explore page
    {
      url: `${baseUrl}/explore`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Pillar category pages (will be created)
  const pillars = [
    { slug: "health-calculators", priority: 0.85 },
    { slug: "finance-calculators", priority: 0.85 },
    { slug: "education-calculators", priority: 0.85 },
    { slug: "general-calculators", priority: 0.80 },
  ];

  pillars.forEach((pillar) => {
    entries.push({
      url: `${baseUrl}/${pillar.slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: pillar.priority,
    });
  });

  // All calculator pages
  categories.forEach((category) => {
    category.calculators.forEach((calculator) => {
      const priority = calculator.popular ? 0.8 : 0.7;
      entries.push({
        url: `${baseUrl}/calc/${calculator.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority,
      });
    });
  });

  return entries;
}
