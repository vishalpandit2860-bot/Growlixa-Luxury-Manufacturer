import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Lock, ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ScrollReveal from "@/components/ScrollReveal";
import SocialIcons from "@/components/SocialIcons";
import SEOHead from "@/components/SEOHead";
import { siteConfig } from "@/data/siteConfig";
import { countries, inquiryTypes } from "@/components/InquiryModal";
import { sanitize } from "@/lib/sanitize";

const faqs = [
  { q: "What is the minimum order quantity?", a: "MOQ varies by product category. For handcrafted items typical MOQ is 50-100 pieces. For 3D printed items MOQ starts at 25 pieces. Contact us for specific requirements." },
  { q: "Do you offer private label services?", a: "Yes, we offer complete private label and white label manufacturing with custom branding, packaging design, and quality assurance." },
  { q: "Which countries do you export to?", a: "We export to 40+ countries including USA, UK, UAE, Saudi Arabia, Europe, Australia, Japan, Canada, and throughout the Middle East." },
  { q: "How long does custom manufacturing take?", a: "Standard orders take 2-4 weeks. Custom designed products take 4-8 weeks including sampling and approval process." },
  { q: "Can I request product samples?", a: "Yes, we provide samples for serious bulk buyers. Sample charges may apply and are adjustable against bulk orders." },
  { q: "Are products available on Amazon and Flipkart?", a: "Yes, select products are available on Amazon India, Amazon International, and Flipkart. For bulk or custom orders, contact us directly." },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "", email: "", phone: "", country: "", company: "",
    inquiryType: "", product: "", message: "", callback: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [cooldown, setCooldown] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const update = (field: string, value: string | boolean) => setFormData((p) => ({ ...p, [field]: value }));

  const buildWhatsAppMessage = () => {
    const s = sanitize;
    return `🏷️ *New Inquiry — ${siteConfig.brandName}*
👤 *Name:* ${s(formData.fullName)}
📧 *Email:* ${s(formData.email)}
📞 *Phone:* ${s(formData.phone)}
🌍 *Country:* ${s(formData.country)}
🏢 *Company:* ${s(formData.company) || "N/A"}
📋 *Inquiry:* ${s(formData.inquiryType)}
📦 *Product:* ${s(formData.product) || "N/A"}
📞 *Callback:* ${formData.callback ? "Yes" : "No"}
💬 *Message:* ${s(formData.message) || "N/A"}
---
Sent via ${siteConfig.brandName} Website`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cooldown) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setCooldown(true);
      setTimeout(() => setCooldown(false), 30000);
    }, 1500);
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${siteConfig.phoneClean}?text=${encodeURIComponent(buildWhatsAppMessage())}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const inputClass = "w-full px-4 py-2.5 rounded-lg bg-[#1A1A1A] border border-[#333] text-foreground text-sm focus:outline-none focus:border-gold/60 focus:shadow-[0_0_8px_rgba(212,168,83,0.15)] focus-visible:ring-2 focus-visible:ring-gold/60 transition-all duration-300";

  return (
    <Layout>
      <SEOHead
        title="Contact Growlixa Luxury — Global Inquiries, Bulk Orders & Partnership"
        description="Bulk orders, private label, distribution partnerships & export. We respond within 24 hours."
        path="/contact"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.website },
              { "@type": "ListItem", position: 2, name: "Contact", item: `${siteConfig.website}/contact` },
            ],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />

      <PageHero title="Global Inquiries" subtitle="Connect with us for bulk orders, partnerships, custom manufacturing, or any business inquiry." image="https://images.unsplash.com/photo-1584727638096-042c45049ebe?w=1600&q=80" breadcrumb="Home › Contact" />

      <section className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <h2 className="section-title text-3xl mb-4">Let's Build Something Extraordinary</h2>
                <div className="gold-divider mb-6" />
                <p className="text-silver leading-relaxed mb-8">
                  Whether you're sourcing premium Indian products for your retail chain, looking for custom manufacturing, or building a private label — our team is ready to partner with you.
                </p>
                <div className="space-y-5 mb-8">
                  {[
                    { icon: Mail, label: "Email", value: siteConfig.email },
                    { icon: Phone, label: "Phone", value: siteConfig.phone },
                    { icon: MapPin, label: "Location", value: siteConfig.address },
                    { icon: Clock, label: "Hours", value: siteConfig.businessHours },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded flex items-center justify-center border border-border/50 bg-background/50 flex-shrink-0">
                        <item.icon size={18} className="text-gold" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs text-silver uppercase tracking-wider mb-0.5">{item.label}</p>
                        <p className="text-foreground text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <SocialIcons size={20} circleSize="w-[48px] h-[48px]" />
              </ScrollReveal>
            </div>

            <div className="lg:col-span-3">
              <ScrollReveal direction="right">
                <div className="card-luxury p-8">
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">Send Us a Message</h3>
                  <p className="text-silver text-sm mb-6">Our team responds within 24 hours.</p>

                  {submitted ? (
                    <div className="text-center py-8">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-500 flex items-center justify-center mx-auto mb-5"
                      >
                        <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }}>
                          <FiCheck size={36} className="text-emerald-400" />
                        </motion.div>
                      </motion.div>
                      <h4 className="font-display text-xl font-bold text-foreground mb-2">Inquiry Submitted Successfully!</h4>
                      <p className="text-silver text-sm mb-6">Our team will respond within 24 hours.</p>
                      <button
                        onClick={handleWhatsApp}
                        className="w-full py-3 rounded-lg font-medium text-white flex items-center justify-center gap-2 mb-3 transition-all hover:brightness-110 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                        style={{ backgroundColor: "#25D366" }}
                      >
                        <FaWhatsapp size={22} /> Send Same Inquiry via WhatsApp
                      </button>
                      <button onClick={() => { setSubmitted(false); setFormData({ fullName: "", email: "", phone: "", country: "", company: "", inquiryType: "", product: "", message: "", callback: false }); }} className="text-silver text-sm hover:text-foreground transition-colors focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none rounded">
                        Send Another Inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-gold/80 mb-1.5 block font-medium">Full Name *</label>
                        <input type="text" required value={formData.fullName} onChange={(e) => update("fullName", e.target.value)} className={inputClass} maxLength={100} aria-required="true" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] uppercase tracking-wider text-gold/80 mb-1.5 block font-medium">Email *</label>
                          <input type="email" required value={formData.email} onChange={(e) => update("email", e.target.value)} className={inputClass} maxLength={150} aria-required="true" />
                        </div>
                        <div>
                          <label className="text-[10px] uppercase tracking-wider text-gold/80 mb-1.5 block font-medium">Phone *</label>
                          <input type="tel" required value={formData.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass} maxLength={20} aria-required="true" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] uppercase tracking-wider text-gold/80 mb-1.5 block font-medium">Country *</label>
                          <select required value={formData.country} onChange={(e) => update("country", e.target.value)} className={inputClass} aria-required="true">
                            <option value="">Select Country</option>
                            {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] uppercase tracking-wider text-gold/80 mb-1.5 block font-medium">Company</label>
                          <input type="text" value={formData.company} onChange={(e) => update("company", e.target.value)} className={inputClass} maxLength={200} />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-[10px] uppercase tracking-wider text-gold/80 mb-1.5 block font-medium">Inquiry Type *</label>
                          <select required value={formData.inquiryType} onChange={(e) => update("inquiryType", e.target.value)} className={inputClass} aria-required="true">
                            <option value="">Select Type</option>
                            {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="text-[10px] uppercase tracking-wider text-gold/80 mb-1.5 block font-medium">Product Interested In</label>
                          <input type="text" value={formData.product} onChange={(e) => update("product", e.target.value)} className={inputClass} maxLength={200} />
                        </div>
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-gold/80 mb-1.5 block font-medium">Message</label>
                        <textarea rows={4} value={formData.message} onChange={(e) => update("message", e.target.value)} className={`${inputClass} resize-none`} maxLength={1000} />
                      </div>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" checked={formData.callback} onChange={(e) => update("callback", e.target.checked)} className="w-4 h-4 rounded border-[#333] bg-[#1A1A1A] accent-gold" />
                        <span className="text-silver text-sm">I'd like a callback within 24 hours</span>
                      </label>
                      <button type="submit" disabled={submitting || cooldown} className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none">
                        {submitting ? <><Loader2 size={18} className="animate-spin" /> Submitting...</> : cooldown ? "Please wait..." : "Submit Inquiry"}
                      </button>
                      <p className="text-silver/60 text-xs flex items-center gap-1.5 justify-center">
                        <Lock size={12} aria-hidden="true" /> Your information is secure and encrypted.
                      </p>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 navy-bg">
        <div className="max-w-3xl mx-auto section-padding">
          <div className="text-center mb-12">
            <ScrollReveal><p className="section-tag mb-3">Common Questions</p></ScrollReveal>
            <ScrollReveal delay={0.1}><h2 className="section-title text-3xl mb-4">Frequently Asked Questions</h2></ScrollReveal>
            <ScrollReveal delay={0.15}><div className="gold-divider mx-auto" /></ScrollReveal>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <div className="card-luxury overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none rounded"
                    aria-expanded={openFaq === i}
                  >
                    <span className="text-foreground text-sm font-medium pr-4">{faq.q}</span>
                    {openFaq === i ? <ChevronUp size={18} className="text-gold flex-shrink-0" aria-hidden="true" /> : <ChevronDown size={18} className="text-silver flex-shrink-0" aria-hidden="true" />}
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0">
                          <p className="text-silver text-sm leading-relaxed">{faq.a}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
