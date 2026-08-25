import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFrequency: "weekly" },
    { path: "/airbnb", priority: 0.95, changeFrequency: "daily" },
    { path: "/conhecer", priority: 0.9, changeFrequency: "weekly" },
    { path: "/alugar", priority: 0.85, changeFrequency: "weekly" },
    { path: "/localizacao", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contato", priority: 0.7, changeFrequency: "monthly" },
  ];

  return routes.map((r) => ({
    url: `${SITE_URL}${r.path === "/" ? "" : r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
