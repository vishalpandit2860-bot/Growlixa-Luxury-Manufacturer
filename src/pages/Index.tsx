import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown, Palette, Printer, Sparkles, ShieldCheck, Package, Globe, ShoppingCart, Store, Handshake, Truck } from "lucide-react";
import { FaStar } from "react-icons/fa";
import Layout from "@/components/Layout";
import ScrollReveal from "@/components/ScrollReveal";
import TiltCard from "@/components/TiltCard";
import GoldParticles from "@/components/GoldParticles";
import CountUp from "@/components/CountUp";
import GoogleReviews from "@/components/GoogleReviews";
import InquiryModal from "@/components/InquiryModal";
import SEOHead from "@/components/SEOHead";
import { products, featuredProductIds } from "@/data/productData";
import { siteConfig } from "@/data/siteConfig";
import { ratingInfo } from "@/data/reviewsData";
import heroDecorImg from "@/assets/hero-decor.png";

const featuredProducts = products.filter((p) => featuredProductIds.includes(p.id) && p.isVisible);

const badgeClassMap: Record<string, string> = {
  Bestseller: "badge-crimson",
  Popular: "badge-gold",
  New: "badge-purple",
  Innovation: "badge-purple",
  Exclusive: "badge-purple",
  Heritage: "badge-gold",
};

const craftsmanshipCards = [
  { icon: Palette, title: "Handcrafted Artistry", desc: "Every piece born from master artisans whose families have perfected their art over generations." },
  { icon: Printer, title: "3D Printing Excellence", desc: "Advanced 3D printing creates precision-engineered custom products that push design boundaries." },
  { icon: Sparkles, title: "Premium Branding", desc: "Our proprietary finishing transforms quality products into luxury brand experiences." },
  { icon: ShieldCheck, title: "Quality Assurance", desc: "Multi-stage quality control ensures every product meets international luxury standards." },
  { icon: Package, title: "Export-Ready Packaging", desc: "Designed for international transit without compromising presentation." },
  { icon: Globe, title: "Global Compliance", desc: "International safety standards, material regulations, and quality certifications handled." },
];

const marketplaces = [
  { icon: ShoppingCart, title: "Amazon", desc: "Available on Amazon India & International with Prime delivery options" },
  { icon: Store, title: "Flipkart", desc: "Premium collection across India through Flipkart marketplace" },
  { icon: Handshake, title: "Distributors", desc: "Authorized network spanning India, Middle East, Europe & Americas" },
  { icon: Truck, title: "Direct Export", desc: "Bulk & wholesale export to high-demand markets worldwide" },
];

const reasons = [
  { num: "01", title: "Unmatched Indian Craftsmanship", desc: "We partner with India's most skilled artisan families — craftspeople whose expertise spans generations. Every product carries the soul of Indian artistry." },
  { num: "02", title: "Technology-Forward Innovation", desc: "Precision 3D printing meets CAD-driven design. Traditional artistry fused with cutting-edge manufacturing creates products both timeless and revolutionary." },
  { num: "03", title: "Complete Brand Solutions", desc: "Beyond products — complete brand experiences. Custom packaging, private label, white-label manufacturing, and OEM capabilities." },
  { num: "04", title: "Export-Ready & Globally Compliant", desc: "International standards, proper documentation, quality certifications, secure packaging. We handle logistics so you focus on your market." },
];

const Index = () => {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState("");

  const openInquiry = (productName?: string) => {
    setInquiryProduct(productName || "");
    setInquiryOpen(true);
  };

  return (
    <Layout>
      <SEOHead
        title="Growlixa Luxury — Premium Handcrafted & Custom Luxury Products | Crafted in India"
        description="India's premier luxury brand. Handcrafted décor, 3D-printed custom products, artisan goods & premium gifts. Private label, OEM, bulk export. Available on Amazon & Flipkart."
        path="/"
        schema={[{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.brandName,
          url: siteConfig.website,
        }, {
          "@context": "https://schema.org",
          "@type": "AggregateRating",
          itemReviewed: { "@type": "Organization", name: siteConfig.brandName },
          ratingValue: ratingInfo.average,
          bestRating: 5,
          ratingCount: ratingInfo.totalReviews,
        }]}
      />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroDecorImg} alt="Luxurious handcrafted Indian décor and artisan products by Growlixa Luxury" className="w-full h-full object-cover" loading="eager" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
        </div>
        <GoldParticles />
        <div className="relative z-10 max-w-5xl mx-auto section-padding pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="badge-gold mb-6">
            <FaStar size={10} className="inline mr-1 -mt-0.5" /> Premium Indian Luxury — Established for Excellence
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-6 text-foreground" style={{ lineHeight: 1 }}>
            Crafted in India.<br /><span className="gold-gradient-text italic">Coveted Worldwide.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.6 }} className="text-silver text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
            Handcrafted décor, custom-engineered luxuries & 3D-printed innovation — designed for discerning global buyers who demand artistry, precision, and exclusivity.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.4, duration: 0.5 }} className="flex flex-wrap gap-4">
            <Link to="/collection" className="btn-gold">Explore Our Collection</Link>
            <button onClick={() => openInquiry()} className="btn-outline-gold">Start a Custom Project</button>
          </motion.div>
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-silver/60">
          <span className="text-xs tracking-widest uppercase font-body">Scroll to Discover</span>
          <ChevronDown size={18} className="animate-bounce-gentle" />
        </motion.div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <ScrollReveal><p className="section-tag mb-3">— Signature Collection —</p></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="section-title mb-4">Curated Masterpieces</h2></ScrollReveal>
            <ScrollReveal delay={0.15}><div className="gold-divider mx-auto mb-4" /></ScrollReveal>
            <ScrollReveal delay={0.2}><p className="section-subtitle mx-auto">Each piece tells a story — of heritage, artistry, and meticulous craftsmanship passed through generations.</p></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((p, i) => (
              <ScrollReveal key={p.id} delay={i * 0.08}>
                <TiltCard>
                  <div className="card-luxury group overflow-hidden">
                    <div className="relative h-72 overflow-hidden">
                      <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                      <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-colors duration-500" />
                      {p.badge && <span className={`absolute top-3 left-3 ${badgeClassMap[p.badge] || "badge-gold"}`}>{p.badge}</span>}
                      <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                        <button onClick={() => openInquiry(p.name)} className="text-sm font-body font-medium gold-text hover:text-foreground transition-colors">
                          Discover More →
                        </button>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="section-tag text-[10px] mb-1.5">{p.categoryLabel}</p>
                      <h3 className="font-display text-lg font-bold text-foreground mb-1.5">{p.name}</h3>
                      <p className="text-silver text-sm leading-relaxed line-clamp-2">{p.description}</p>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-24 lg:py-32 navy-bg">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="max-w-3xl mx-auto">
            <div>
              <ScrollReveal direction="right"><p className="section-tag mb-3">Who We Are</p></ScrollReveal>
              <ScrollReveal direction="right" delay={0.1}><h2 className="section-title text-3xl lg:text-4xl mb-4">The Art of Indian Luxury, Reimagined</h2></ScrollReveal>
              <ScrollReveal direction="right" delay={0.15}><div className="gold-divider mb-6" /></ScrollReveal>
              <ScrollReveal direction="right" delay={0.2}>
                <p className="text-silver leading-relaxed mb-4">
                  {siteConfig.brandName} bridges India's timeless artisan heritage with cutting-edge manufacturing innovation. We source from master craftsmen across India, apply our signature premium branding, and deliver to discerning buyers across six continents.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.25}>
                <p className="text-silver leading-relaxed mb-8">
                  From hand-finished brass sculptures to 3D-printed custom luxury items, every product carries the mark of excellence — meticulously quality-controlled and beautifully presented for the global market.
                </p>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.3}>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: Sparkles, label: "Artisan Sourced", sub: "200+ expert partners" },
                    { icon: ShieldCheck, label: "Quality Certified", sub: "Multi-stage inspection" },
                    { icon: Globe, label: "Global Reach", sub: "40+ countries served" },
                    { icon: Printer, label: "Tech Innovation", sub: "3D printing + craft" },
                  ].map((f) => (
                    <div key={f.label} className="p-3 rounded border border-border/30 bg-background/30">
                      <f.icon size={18} className="text-gold mb-1" />
                      <p className="text-foreground text-sm font-medium mt-1">{f.label}</p>
                      <p className="text-silver text-xs">{f.sub}</p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
              <ScrollReveal direction="right" delay={0.35}>
                <Link to="/about" className="btn-outline-gold text-sm">Learn Our Story →</Link>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CRAFTSMANSHIP & INNOVATION */}
      <section className="py-24 lg:py-32 dark-gradient-bg">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <ScrollReveal><p className="section-tag mb-3">Our Excellence</p></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="section-title mb-4">Craftsmanship Meets Innovation</h2></ScrollReveal>
            <ScrollReveal delay={0.15}><div className="gold-divider mx-auto mb-4" /></ScrollReveal>
            <ScrollReveal delay={0.2}><p className="section-subtitle mx-auto">Where centuries-old Indian artistry converges with 21st-century technology.</p></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {craftsmanshipCards.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.08}>
                <div className="card-luxury p-6 group h-full">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-border/50 bg-background/50 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">
                    <c.icon size={22} className="text-silver group-hover:text-gold transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-silver text-sm leading-relaxed">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS */}
      <section className="py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--gold)) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="max-w-5xl mx-auto section-padding relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 text-center">
            {[
              { value: 500, suffix: "+", label: "Unique Products" },
              { value: 40, suffix: "+", label: "Countries Served" },
              { value: 200, suffix: "+", label: "Artisan Partners" },
              { value: 99, suffix: "%", label: "Quality Rate" },
            ].map((s, i) => (
              <ScrollReveal key={s.label} delay={i * 0.1}>
                <div>
                  <p className="font-display text-4xl lg:text-5xl font-bold gold-gradient-text mb-2">
                    <CountUp end={s.value} suffix={s.suffix} />
                  </p>
                  <div className="gold-divider mx-auto mb-3" />
                  <p className="text-silver text-sm">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MARKETPLACE PRESENCE */}
      <section className="py-24 lg:py-32 navy-bg">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <ScrollReveal><p className="section-tag mb-3">Global Presence</p></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="section-title mb-4">Available Everywhere You Shop</h2></ScrollReveal>
            <ScrollReveal delay={0.15}><div className="gold-divider mx-auto mb-4" /></ScrollReveal>
            <ScrollReveal delay={0.2}><p className="section-subtitle mx-auto">From India's leading platforms to international marketplaces and exclusive distributors.</p></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketplaces.map((m, i) => (
              <ScrollReveal key={m.title} delay={i * 0.08}>
                <div className="card-luxury p-6 text-center group h-full">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border border-border/50 bg-background/50 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">
                    <m.icon size={24} className="text-silver group-hover:text-gold transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{m.title}</h3>
                  <p className="text-silver text-sm leading-relaxed">{m.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <ScrollReveal><p className="section-tag mb-3">Our Advantage</p></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="section-title mb-4">Why Global Buyers Choose Growlixa</h2></ScrollReveal>
            <ScrollReveal delay={0.15}><div className="gold-divider mx-auto" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <ScrollReveal key={r.num} delay={i * 0.1}>
                <div className="card-luxury p-8 group h-full relative overflow-hidden">
                  <span className="absolute top-4 right-6 font-display text-6xl font-bold text-gold/[0.06] group-hover:text-gold/[0.12] transition-colors duration-500">{r.num}</span>
                  <p className="gold-text font-body text-sm font-semibold mb-2">({r.num})</p>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">{r.title}</h3>
                  <p className="text-silver text-sm leading-relaxed">{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <GoogleReviews />

      {/* CTA BANNER */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, hsla(40,55%,58%,0.08) 0%, transparent 70%)" }} />
        <div className="max-w-3xl mx-auto section-padding text-center relative z-10">
          <ScrollReveal><p className="section-tag mb-3">Let's Create Together</p></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className="section-title mb-4">Ready to Experience Growlixa Quality?</h2></ScrollReveal>
          <ScrollReveal delay={0.2}><p className="section-subtitle mx-auto mb-8">Whether you're a retailer, distributor, brand owner, or bulk buyer — we'd love to craft something extraordinary for you.</p></ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap gap-4 justify-center">
              <button onClick={() => openInquiry()} className="btn-gold">Get in Touch</button>
              <Link to="/collection" className="btn-outline-gold">View Collection</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <InquiryModal open={inquiryOpen} onClose={() => setInquiryOpen(false)} productName={inquiryProduct} />
    </Layout>
  );
};

export default Index;
