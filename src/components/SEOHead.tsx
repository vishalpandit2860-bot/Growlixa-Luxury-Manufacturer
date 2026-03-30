import { useEffect } from "react";
import { siteConfig } from "@/data/siteConfig";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  schema?: object[];
}

const SEOHead = ({ title, description, path, schema }: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;

    const setMeta = (name: string, content: string, attr = "name") => {
      let el = document.querySelector(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", title, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", `${siteConfig.website}${path}`, "property");
    setMeta("og:type", "website", "property");
    setMeta("og:image", "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=1200&q=80", "property");
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta("geo.region", "IN");
    setMeta("geo.placename", "India");

    // Schema JSON-LD
    const existingSchemas = document.querySelectorAll('script[data-seo-schema]');
    existingSchemas.forEach((s) => s.remove());

    const orgSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.brandName,
      url: siteConfig.website,
      description: "Premium Indian luxury products — handcrafted décor, 3D-printed innovation, and custom manufacturing for global buyers.",
      contactPoint: { "@type": "ContactPoint", telephone: siteConfig.phone, contactType: "customer service" },
      sameAs: Object.values(siteConfig.social),
    };

    const allSchemas = [orgSchema, ...(schema || [])];
    allSchemas.forEach((s) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-schema", "true");
      script.textContent = JSON.stringify(s);
      document.head.appendChild(script);
    });

    return () => {
      document.querySelectorAll('script[data-seo-schema]').forEach((s) => s.remove());
    };
  }, [title, description, path, schema]);

  return null;
};

export default SEOHead;
