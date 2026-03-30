import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-[108px] right-7 z-[9998] w-12 h-12 rounded-full gold-gradient-bg flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={20} className="text-background" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
