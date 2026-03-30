import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CookieConsent = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      const t = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-[9998] p-4"
        >
          <div className="max-w-4xl mx-auto bg-[#1a1a1a] border border-border/30 rounded-xl px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-2xl">
            <p className="text-silver text-sm text-center sm:text-left">
              We use cookies to enhance your experience.{" "}
              <a href="#" className="gold-text hover:text-foreground transition-colors underline">Learn More</a>
            </p>
            <button onClick={accept} className="btn-gold text-sm whitespace-nowrap px-6 py-2">
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
