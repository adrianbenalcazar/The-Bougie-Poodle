import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

const ROUTES = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/gallery", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/reviews", priority: 0.7, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/request-service", priority: 0.9, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
