import { useState } from "react";
import { Tag, Pencil, Package, Rocket, Search, Factory, Palette, Globe, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import InquiryModal from "@/components/InquiryModal";
import SEOHead from "@/components/SEOHead";
import customBrandingImg from "@/assets/custom-branding.png";

const capabilities = [
  { icon: Tag, title: "Private Label", desc: "Complete white-label solutions — product to packaging, everything carries your identity." },
  { icon: Pencil, title: "Custom Design", desc: "Unique products aligned with your market positioning and customer expectations." },
  { icon: Package, title: "Bulk Production", desc: "From small artisan batches to large-scale runs — consistent quality at every volume." },
  { icon: Rocket, title: "Global Logistics", desc: "End-to-end export — documentation, customs, packaging, shipping managed seamlessly." },
];

const processSteps = [
  { icon: Search, label: "Consultation", desc: "Share your vision, requirements, and brand guidelines" },
  { icon: Pencil, label: "Design & Sampling", desc: "Our team creates designs and physical samples for approval" },
  { icon: Factory, label: "Manufacturing", desc: "Production begins with strict quality protocols" },
  { icon: Palette, label: "Branding & Packaging", desc: "Your brand identity applied with premium packaging" },
  { icon: Globe, label: "Global Delivery", desc: "Export-ready shipping to any destination worldwide" },
];

const industries = [
  "Interior Design & Architecture Firms", "Corporate Gifting Companies",
  "Retail & Department Stores", "E-commerce Brands & Sellers",
  "Hotel & Hospitality Industry", "Event & Wedding Planners",
  "International Distributors", "Brand Owners & Entrepreneurs",
];

const features = [
  "Private Label Manufacturing — your brand, our quality",
  "Custom Product Design & Development",
  "OEM / ODM Manufacturing Capabilities",
  "Bulk & Wholesale Export Orders",
  "Custom Packaging & Brand Presentation",
  "3D Printing for Rapid Prototyping",
  "Multi-Material & Multi-Technique Production",
];

const CustomSolutions = () => {
  const [inquiryOpen, setInquiryOpen] = useState(false);

  return (
    <Layout>
      <SEOHead
        title="Custom Manufacturing & Private Label — OEM/ODM India | Growlixa Luxury"
        description="Private label, custom product design, OEM/ODM & bulk export from India."
        path="/custom-solutions"
        schema={[{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.growlixaluxury.com" },
            { "@type": "ListItem", position: 2, name: "Custom Solutions", item: "https://www.growlixaluxury.com/custom-solutions" },
          ],
        }]}
      />

      <PageHero title="Your Vision. Our Expertise." subtitle="Bespoke manufacturing, private label solutions, and custom product development for global brands." image={customBrandingImg} breadcrumb="Home › Custom Solutions" />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <ScrollReveal>
                <p className="section-tag mb-3">Our Services</p>
                <h2 className="section-title text-3xl lg:text-4xl mb-4">Complete Custom Manufacturing Solutions</h2>
                <div className="gold-divider mb-6" />
                <p className="text-silver leading-relaxed mb-8">
                  From concept to creation, Growlixa Luxury engineers bespoke products tailored to your brand identity. Whether you need private label manufacturing, custom-designed products, or white-label solutions — we bring your vision to life.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <ul className="space-y-3 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                      <span className="text-silver">{f}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => setInquiryOpen(true)} className="btn-gold">Request Custom Manufacturing</button>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right">
              <img src={customBrandingImg} alt="Premium custom branded luxury product by Growlixa Luxury private label manufacturing" className="w-full rounded-lg object-cover" loading="lazy" />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 navy-bg">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <ScrollReveal><p className="section-tag mb-3">The Process</p></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="section-title mb-4">How It Works</h2></ScrollReveal>
            <ScrollReveal delay={0.15}><div className="gold-divider mx-auto" /></ScrollReveal>
          </div>
          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.label} delay={i * 0.12}>
                  <div className="text-center relative">
                    <div className="w-16 h-16 rounded-full border-2 border-gold/30 flex items-center justify-center mx-auto mb-4 bg-background relative z-10">
                      <step.icon size={24} className="text-gold" />
                    </div>
                    <p className="text-xs gold-text font-semibold mb-1">Step {i + 1}</p>
                    <h4 className="font-display text-base font-bold text-foreground mb-1">{step.label}</h4>
                    <p className="text-silver text-xs leading-relaxed">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 dark-gradient-bg">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <ScrollReveal><p className="section-tag mb-3">Capabilities</p></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="section-title mb-4">What We Deliver</h2></ScrollReveal>
            <ScrollReveal delay={0.15}><div className="gold-divider mx-auto" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.08}>
                <div className="card-luxury p-6 text-center group h-full">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border border-border/50 bg-background/50 group-hover:bg-gold/10 group-hover:border-gold/30 transition-all duration-500">
                    <c.icon size={24} className="text-silver group-hover:text-gold transition-colors duration-500" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{c.title}</h3>
                  <p className="text-silver text-sm leading-relaxed">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <ScrollReveal><p className="section-tag mb-3">Who We Serve</p></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="section-title mb-4">Industries We Serve</h2></ScrollReveal>
            <ScrollReveal delay={0.15}><div className="gold-divider mx-auto" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <ScrollReveal key={ind} delay={i * 0.06}>
                <div className="card-luxury p-5 text-center">
                  <p className="text-foreground text-sm font-medium">{ind}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32 navy-bg">
        <div className="max-w-3xl mx-auto section-padding text-center">
          <ScrollReveal><h2 className="section-title mb-4">Let's Create Something Extraordinary Together</h2></ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <button onClick={() => setInquiryOpen(true)} className="btn-gold">Send Your Requirements</button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <InquiryModal open={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </Layout>
  );
};

export default CustomSolutions;
