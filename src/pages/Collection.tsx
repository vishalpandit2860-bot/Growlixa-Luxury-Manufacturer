import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import TiltCard from "@/components/TiltCard";
import InquiryModal from "@/components/InquiryModal";
import SEOHead from "@/components/SEOHead";
import { products, categoryFilters } from "@/data/productData";

const badgeClassMap: Record<string, string> = {
  Bestseller: "badge-crimson", Popular: "badge-gold", New: "badge-purple",
  Innovation: "badge-purple", Exclusive: "badge-purple", Heritage: "badge-gold",
  Limited: "badge-crimson", Concept: "badge-purple", Trending: "badge-emerald",
};

const Collection = () => {
  const [active, setActive] = useState("all");
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState("");

  const filtered = products.filter((p) => p.isVisible && (active === "all" || p.category === active));

  const openInquiry = (name: string) => {
    setInquiryProduct(name);
    setInquiryOpen(true);
  };

  return (
    <Layout>
      <SEOHead
        title="Luxury Product Collection — Handcrafted Décor, 3D Printed, Premium Gifts | Growlixa"
        description="25+ premium products — handcrafted décor, corporate gifts, 3D-printed art, leather goods & Indian specialties."
        path="/collection"
        schema={[{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.growlixaluxury.com" },
            { "@type": "ListItem", position: 2, name: "Collection", item: "https://www.growlixaluxury.com/collection" },
          ],
        }]}
      />

      <PageHero
        title="The Growlixa Collection"
        subtitle="Explore our curated range of handcrafted, custom-engineered, and 3D-printed luxury products."
        image="https://images.unsplash.com/photo-1513519245088-0e12902e35a6?w=1600&q=80"
        breadcrumb="Home › Collection"
      />

      {/* Filter Bar */}
      <div className="sticky top-[60px] z-30 bg-background/80 backdrop-blur-xl border-b border-border/30 py-4">
        <div className="max-w-7xl mx-auto section-padding overflow-x-auto">
          <div className="flex gap-2 min-w-max">
            {categoryFilters.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={`px-4 py-2 rounded text-sm font-body font-medium transition-all duration-300 whitespace-nowrap ${
                  active === cat.key
                    ? "gold-gradient-bg text-background"
                    : "text-silver border border-border/50 hover:border-gold/30 hover:text-foreground"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto section-padding">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((p) => (
                <TiltCard key={p.id}>
                  <div className="card-luxury group overflow-hidden h-full">
                    <div className="relative h-64 overflow-hidden">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" />
                      {p.badge && <span className={`absolute top-3 left-3 ${badgeClassMap[p.badge] || "badge-gold"}`}>{p.badge}</span>}
                    </div>
                    <div className="p-5">
                      <p className="section-tag text-[10px] mb-1">{p.categoryLabel}</p>
                      <h3 className="font-display text-lg font-bold text-foreground mb-1.5">{p.name}</h3>
                      <p className="text-silver text-sm leading-relaxed line-clamp-2 mb-3">{p.description}</p>
                      <button
                        onClick={() => openInquiry(p.name)}
                        className="text-sm font-body font-medium gold-text hover:text-foreground transition-colors inline-flex items-center gap-1 group/link"
                      >
                        Request Details <span className="inline-block transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                      </button>
                    </div>
                  </div>
                </TiltCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <InquiryModal open={inquiryOpen} onClose={() => setInquiryOpen(false)} productName={inquiryProduct} />
    </Layout>
  );
};

export default Collection;
