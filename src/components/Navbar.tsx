import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import InquiryModal from "./InquiryModal";
import SocialIcons from "./SocialIcons";
import logoImg from "@/assets/logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Collection", to: "/collection" },
  { label: "Custom Solutions", to: "/custom-solutions" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Escape key closes mobile menu
  const closeMobile = useCallback(() => setMobileOpen(false), []);
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [mobileOpen, closeMobile]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border/50 py-3"
            : "bg-transparent py-5"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto section-padding flex items-center justify-between">
          <Link to="/" className="flex items-center group" aria-label="Growlixa Luxury — Home">
            <img src={logoImg} alt="Growlixa Luxury logo" className="h-20 w-auto group-hover:scale-105 transition-transform duration-300" width={160} height={80} />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`relative text-sm font-body font-medium tracking-wide transition-colors duration-300 hover:text-foreground focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none rounded px-1 ${
                  location.pathname === link.to ? "text-foreground" : "text-silver"
                }`}
              >
                {link.label}
                {location.pathname === link.to && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 gold-gradient-bg rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setInquiryOpen(true)} className="hidden lg:inline-flex btn-gold text-sm focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none">
              Inquire Now
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-foreground p-2 min-w-[44px] min-h-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none rounded"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-background flex flex-col items-center justify-center gap-8"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 + 0.2 }}
              >
                <Link
                  to={link.to}
                  className={`font-display text-3xl font-bold transition-colors focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none rounded px-2 ${
                    location.pathname === link.to ? "gold-text" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col items-center gap-6"
            >
              <button onClick={() => { setMobileOpen(false); setInquiryOpen(true); }} className="btn-gold text-base focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none">
                Inquire Now
              </button>
              <SocialIcons size={20} circleSize="w-[46px] h-[46px]" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <InquiryModal open={inquiryOpen} onClose={() => setInquiryOpen(false)} />
    </>
  );
};

export default Navbar;
