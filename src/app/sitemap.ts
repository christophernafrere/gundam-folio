// src/app/sitemap.ts

import type { MetadataRoute } from "next";

const SITE_URL = "https://www.christopher-nafrere.fr";

const staticPages = [
    {
        path: "/fr",
        lastModified: new Date("2026-11-04"),
        priority: 1,
    },
    {
        path: "/fr/a-propos",
        lastModified: new Date("2026-11-04"),
        priority: 0.8,
    },
    {
        path: "/fr/projets",
        lastModified: new Date("2026-11-04"),
        priority: 0.9,
    },
    {
        path: "/fr/competences",
        lastModified: new Date("2026-11-04"),
        priority: 0.8,
    },
    {
        path: "/fr/experiences",
        lastModified: new Date("2026-11-04"),
        priority: 0.7,
    },
    {
        path: "/fr/services",
        lastModified: new Date("2026-11-04"),
        priority: 0.8,
    },
    {
        path: "/fr/contact",
        lastModified: new Date("2026-11-04"),
        priority: 0.8,
    },
    {
        path: "/fr/mentions-legales",
        lastModified: new Date("2026-11-04"),
        priority: 0.3,
    },
    {
        path: "/fr/confidentialite",
        lastModified: new Date("2026-11-04"),
        priority: 0.3,
    },
];

export default function sitemap(): MetadataRoute.Sitemap {
    return staticPages.map((page) => ({
        url: `${SITE_URL}${page.path}`,
        lastModified: page.lastModified,
        changeFrequency: "monthly",
        priority: page.priority,
    }));
}
