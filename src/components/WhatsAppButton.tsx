import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/siteConfig";

const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${siteConfig.phoneClean}?text=${encodeURIComponent(siteConfig.whatsappDefault)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-7 right-7 z-[9999] flex flex-col items-center gap-4">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.9 }}
            className="bg-[#1a1a1a] text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
          >
            Chat with us!
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        onClick={openWhatsApp}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        animate={prefersReducedMotion ? {} : { scale: [1, 1.08, 1] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        className="w-[60px] h-[60px] rounded-full flex items-center justify-center focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
        style={{
          backgroundColor: "#25D366",
          boxShadow: hovered
            ? "0 4px 28px rgba(37,211,102,0.6)"
            : "0 4px 20px rgba(37,211,102,0.4)",
          willChange: "transform",
        }}
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp size={30} color="white" />
      </motion.button>
    </div>
  );
};

export default WhatsAppButton;
