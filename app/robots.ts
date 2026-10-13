import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots { return { rules:{userAgent:"*",allow:"/"},sitemap:"https://portfolio-one-self-87.vercel.app/sitemap.xml" }; }
