import { Link } from "react-router-dom";
import { Search, Pencil, Factory, CheckCircle, Globe, ShieldCheck, Heart, Leaf } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SEOHead from "@/components/SEOHead";
import heroDecorImg from "@/assets/hero-decor.png";

const storyBlocks = [
  { img: "https://images.unsplash.com/photo-1605882174146-a464b70cf691?w=800&q=80", alt: "Indian artisan hands crafting traditional brass metalwork", title: "A Vision Rooted in Indian Mastery", text: "Growlixa Luxury was founded with a singular vision: to transform India's extraordinary artisanal talent into a globally recognized luxury brand. We believe the craftsmanship found in India's workshops — from Rajasthan's brass artisans to Agra's marble inlay masters — deserves a premium global stage.", imgLeft: true },
  { img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80", alt: "Modern studio with premium products", title: "Bridging Tradition & Technology", text: "Our business model is unique: we identify and partner with exceptional manufacturers across India, curate their finest work, apply our signature premium branding and quality standards, and deliver to the global market. Whether through Amazon, Flipkart, authorized distributors, or direct export — every Growlixa product represents the pinnacle of Indian luxury craftsmanship.", imgLeft: false },
  { img: "https://images.unsplash.com/photo-1563520239648-a6ea2f5e6a60?w=800&q=80", alt: "Indian woman working with 3D printing technology in modern workshop", title: "Embracing the Future", text: "Our 3D printing division creates custom luxury products that were previously impossible — personalized, precision-engineered, and produced with zero waste. This fusion of heritage and technology defines the Growlixa difference. We don't just sell products — we deliver experiences that honor India's past while building its future.", imgLeft: true },
];

const values = [
  { icon: ShieldCheck, title: "Uncompromising Quality", desc: "Every product undergoes rigorous multi-stage inspection. We reject anything that doesn't meet our premium standards — because our name represents excellence." },
  { icon: Heart, title: "Artisan Empowerment", desc: "We build lasting partnerships with artisan communities, ensuring fair compensation, skill development, and sustained livelihoods for master craftspeople across India." },
  { icon: Leaf, title: "Sustainable Innovation", desc: "From eco-conscious materials to zero-waste 3D printing, sustainability guides our innovation. We create luxury that respects the planet." },
];

const processSteps = [
  { icon: Search, label: "Discovery", desc: "Source finest artisans & materials across India" },
  { icon: Pencil, label: "Design", desc: "Create luxury product concepts with our design team" },
  { icon: Factory, label: "Manufacture", desc: "Precision production through craft & technology" },
  { icon: CheckCircle, label: "Quality Check", desc: "Multi-stage inspection ensuring perfection" },
  { icon: Globe, label: "Global Delivery", desc: "Export-ready packaging & worldwide shipping" },
];

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About Growlixa Luxury — Story, Indian Craftsmanship Heritage & Values"
        description="Bridging India's artisan heritage with modern 3D printing innovation. Quality process, artisan partnerships, global export."
        path="/about"
        schema={[{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://www.growlixaluxury.com" },
            { "@type": "ListItem", position: 2, name: "About", item: "https://www.growlixaluxury.com/about" },
          ],
        }]}
      />

      <PageHero title="Born from Heritage. Built for the World." subtitle="The story behind India's most ambitious luxury brand." image={heroDecorImg} breadcrumb="Home › About" />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto section-padding">
          {storyBlocks.map((block, i) => (
            <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i > 0 ? "mt-24" : ""}`}>
              <ScrollReveal direction={block.imgLeft ? "left" : "right"} className={block.imgLeft ? "" : "lg:order-2"}>
                <img src={block.img} alt={block.alt} className="w-full rounded-lg" loading="lazy" />
              </ScrollReveal>
              <div className={block.imgLeft ? "" : "lg:order-1"}>
                <ScrollReveal direction={block.imgLeft ? "right" : "left"}>
                  <h2 className="section-title text-3xl lg:text-4xl mb-4">{block.title}</h2>
                  <div className="gold-divider mb-6" />
                  <p className="text-silver leading-relaxed">{block.text}</p>
                </ScrollReveal>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 lg:py-32 navy-bg">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <ScrollReveal><p className="section-tag mb-3">Our Foundation</p></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="section-title mb-4">The Principles That Define Us</h2></ScrollReveal>
            <ScrollReveal delay={0.15}><div className="gold-divider mx-auto" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={i * 0.1}>
                <div className="card-luxury p-8 text-center h-full">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 border border-gold/30 bg-gold/5">
                    <v.icon size={26} className="text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">{v.title}</h3>
                  <p className="text-silver text-sm leading-relaxed">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <ScrollReveal><p className="section-tag mb-3">Our Method</p></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="section-title mb-4">From Vision to Delivery</h2></ScrollReveal>
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

      <section className="py-24 lg:py-32 navy-bg">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="text-center mb-16">
            <ScrollReveal><p className="section-tag mb-3">Our People</p></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="section-title mb-4">Led by Expertise</h2></ScrollReveal>
            <ScrollReveal delay={0.15}><div className="gold-divider mx-auto" /></ScrollReveal>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: "Founder & CEO", initials: "VK" },
              { role: "Design Director", initials: "AP" },
              { role: "Quality Lead", initials: "RS" },
              { role: "Export Manager", initials: "NM" },
            ].map((t, i) => (
              <ScrollReveal key={t.role} delay={i * 0.1}>
                <div className="card-luxury p-6 text-center">
                  <div className="w-20 h-20 rounded-full gold-gradient-bg flex items-center justify-center mx-auto mb-4 text-background font-display text-xl font-bold">{t.initials}</div>
                  <p className="text-foreground font-medium text-sm">{t.role}</p>
                  <p className="text-silver text-xs mt-1">Growlixa Luxury</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="max-w-3xl mx-auto section-padding text-center">
          <ScrollReveal><h2 className="section-title mb-4">Ready to Partner with Us?</h2></ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="flex flex-wrap gap-4 justify-center mt-8">
              <Link to="/contact" className="btn-gold">Contact Us</Link>
              <Link to="/collection" className="btn-outline-gold">View Our Collection</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default About;
