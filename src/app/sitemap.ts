import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.seo.siteUrl;
  const now = new Date();

  const routes = [
    { path: "", priority: 1.0 },
    { path: "/portfolio", priority: 0.9 },
    { path: "/services", priority: 0.9 },
    { path: "/book-consultation", priority: 0.9 },
    { path: "/fashion-training", priority: 0.8 },
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.7 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: route.priority,
  }));
}
