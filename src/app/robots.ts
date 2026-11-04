// src/app/robots.ts

import type { MetadataRoute } from "next";

const SITE_URL = "https://ton-domaine.fr";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: ["/api/"],
        },
        sitemap: `${SITE_URL}/sitemap.xml`,
    };
}
