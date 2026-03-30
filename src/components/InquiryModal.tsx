import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Loader2 } from "lucide-react";
import { FiCheck } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/siteConfig";
import { sanitize } from "@/lib/sanitize";

const countries = [
  "India", "United States", "United Kingdom", "UAE", "Saudi Arabia", "Canada",
  "Australia", "Germany", "France", "Japan", "Singapore", "Qatar", "Kuwait",
  "South Africa", "Netherlands", "Italy", "Spain", "Switzerland", "Brazil",
  "Mexico", "New Zealand", "South Korea", "Thailand", "Turkey", "Others",
];

const inquiryTypes = [
  "Bulk Order", "Private Label", "Custom Product Design", "Distribution Partnership",
  "Export Inquiry", "Amazon-Flipkart Inquiry", "General Inquiry",
];

interface InquiryModalProps {
  open: boolean;
  onClose: () => void;
  productName?: string;
}

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  company: string;
  inquiryType: string;
  product: string;
  message: string;
  callback: boolean;
}

const emptyForm: FormData = {
  fullName: "", email: "", phone: "", country: "", company: "",
  inquiryType: "", product: "", message: "", callback: false,
};

const InquiryModal = ({ open, onClose, productName = "" }: InquiryModalProps) => {
  const [form, setForm] = useState<FormData>({ ...emptyForm, product: productName });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, boolean>>>({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [cooldown, setCooldown] = useState(false);

  const update = (field: keyof FormData, value: string | boolean) =>
    setForm((p) => ({ ...p, [field]: value }));

  const validate = () => {
    const e: typeof errors = {};
    if (!form.fullName.trim()) e.fullName = true;
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = true;
    if (!form.phone.trim()) e.phone = true;
    if (!form.country) e.country = true;
    if (!form.inquiryType) e.inquiryType = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildWhatsAppMessage = () => {
    const s = sanitize;
    return `🏷️ *New Inquiry — ${siteConfig.brandName}*
👤 *Name:* ${s(form.fullName)}
📧 *Email:* ${s(form.email)}
📞 *Phone:* ${s(form.phone)}
🌍 *Country:* ${s(form.country)}
🏢 *Company:* ${s(form.company) || "N/A"}
📋 *Inquiry:* ${s(form.inquiryType)}
📦 *Product:* ${s(form.product) || "N/A"}
📞 *Callback:* ${form.callback ? "Yes" : "No"}
💬 *Message:* ${s(form.message) || "N/A"}
---
Sent via ${siteConfig.brandName} Website`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || cooldown) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
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

  const handleClose = useCallback(() => {
    setSuccess(false);
    setForm({ ...emptyForm });
    setErrors({});
    onClose();
  }, [onClose]);

  // Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, handleClose]);

  // Lock body scroll
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-2.5 rounded-lg bg-[#1A1A1A] border text-foreground text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 transition-all duration-300 ${
      errors[field] ? "border-red-500" : "border-[#333] focus:border-gold/60 focus:shadow-[0_0_8px_rgba(212,168,83,0.15)]"
    }`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-label="Inquiry form"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[550px] max-h-[90vh] overflow-y-auto bg-[#111] border border-gold/20 rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white/60 hover:text-gold transition-colors z-10 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none rounded"
              aria-label="Close inquiry form"
            >
              <X size={20} />
            </button>

            <div className="p-6 sm:p-8">
              {success ? (
                <div className="text-center py-6">
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
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Inquiry Submitted Successfully!</h3>
                  <p className="text-silver text-sm mb-8">Our team will respond within 24 hours.</p>
                  <button
                    onClick={handleWhatsApp}
                    className="w-full py-3 rounded-lg font-medium text-white flex items-center justify-center gap-2 mb-3 transition-all hover:brightness-110 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
                    style={{ backgroundColor: "#25D366" }}
                  >
                    <FaWhatsapp size={22} />
                    Send Same Inquiry via WhatsApp
                  </button>
                  <button
                    onClick={handleClose}
                    className="w-full py-2.5 rounded-lg border border-border/50 text-silver text-sm hover:text-foreground hover:border-gold/30 transition-all focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="font-display text-xl font-bold text-foreground mb-1">Send Your Inquiry</h3>
                  <p className="text-silver text-sm mb-6">We respond within 24 hours.</p>
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-gold/80 mb-1.5 block font-medium">Full Name *</label>
                      <input type="text" value={form.fullName} onChange={(e) => update("fullName", e.target.value)} className={inputClass("fullName")} maxLength={100} aria-required="true" />
                      {errors.fullName && <p className="text-red-400 text-xs mt-1" role="alert">Name is required</p>}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-gold/80 mb-1.5 block font-medium">Email *</label>
                        <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputClass("email")} maxLength={150} aria-required="true" />
                        {errors.email && <p className="text-red-400 text-xs mt-1" role="alert">Valid email required</p>}
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-gold/80 mb-1.5 block font-medium">Phone *</label>
                        <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} className={inputClass("phone")} maxLength={20} aria-required="true" />
                        {errors.phone && <p className="text-red-400 text-xs mt-1" role="alert">Phone is required</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-gold/80 mb-1.5 block font-medium">Country *</label>
                        <select value={form.country} onChange={(e) => update("country", e.target.value)} className={inputClass("country")} aria-required="true">
                          <option value="">Select Country</option>
                          {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                        </select>
                        {errors.country && <p className="text-red-400 text-xs mt-1" role="alert">Country is required</p>}
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-gold/80 mb-1.5 block font-medium">Company</label>
                        <input type="text" value={form.company} onChange={(e) => update("company", e.target.value)} className={inputClass("company")} maxLength={200} />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-gold/80 mb-1.5 block font-medium">Inquiry Type *</label>
                        <select value={form.inquiryType} onChange={(e) => update("inquiryType", e.target.value)} className={inputClass("inquiryType")} aria-required="true">
                          <option value="">Select Type</option>
                          {inquiryTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                        {errors.inquiryType && <p className="text-red-400 text-xs mt-1" role="alert">Inquiry type is required</p>}
                      </div>
                      <div>
                        <label className="text-[10px] uppercase tracking-wider text-gold/80 mb-1.5 block font-medium">Product Interested In</label>
                        <input type="text" value={form.product} onChange={(e) => update("product", e.target.value)} className={inputClass("product")} maxLength={200} />
                      </div>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-gold/80 mb-1.5 block font-medium">Message</label>
                      <textarea rows={3} value={form.message} onChange={(e) => update("message", e.target.value)} className={`${inputClass("message")} resize-none`} maxLength={1000} />
                    </div>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={form.callback}
                        onChange={(e) => update("callback", e.target.checked)}
                        className="w-4 h-4 rounded border-[#333] bg-[#1A1A1A] accent-gold"
                      />
                      <span className="text-silver text-sm">I'd like a callback within 24 hours</span>
                    </label>
                    <button
                      type="submit"
                      disabled={submitting || cooldown}
                      className="btn-gold w-full flex items-center justify-center gap-2 disabled:opacity-60 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
                    >
                      {submitting ? (
                        <><Loader2 size={18} className="animate-spin" /> Submitting...</>
                      ) : cooldown ? (
                        "Please wait..."
                      ) : (
                        "Submit Inquiry"
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default InquiryModal;

export { countries, inquiryTypes };
