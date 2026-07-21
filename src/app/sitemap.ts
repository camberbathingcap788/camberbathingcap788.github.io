import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://www.celoht.com/", lastModified: new Date() },
    { url: "https://www.celoht.com/about", lastModified: new Date() },
    { url: "https://www.celoht.com/education", lastModified: new Date() },
    { url: "https://www.celoht.com/agent-network", lastModified: new Date() },
    { url: "https://www.celoht.com/reforestation", lastModified: new Date() },
    { url: "https://www.celoht.com/impact", lastModified: new Date() },
    { url: "https://www.celoht.com/roadmap", lastModified: new Date() },
    { url: "https://www.celoht.com/partners", lastModified: new Date() },
    { url: "https://www.celoht.com/blog", lastModified: new Date() },
    { url: "https://www.celoht.com/news", lastModified: new Date() },
    { url: "https://www.celoht.com/faq", lastModified: new Date() },
    { url: "https://www.celoht.com/contact", lastModified: new Date() },
    { url: "https://www.celoht.com/privacy", lastModified: new Date() },
    { url: "https://www.celoht.com/terms", lastModified: new Date() }
  ];
}
