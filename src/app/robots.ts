import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://carpinteria-los-artesanos.vercel.app/sitemap.xml",
  };
}
