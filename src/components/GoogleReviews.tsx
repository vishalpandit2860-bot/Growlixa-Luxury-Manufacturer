import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FaStar, FaGoogle } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { reviews, ratingInfo } from "@/data/reviewsData";
import { siteConfig } from "@/data/siteConfig";
import ScrollReveal from "./ScrollReveal";

const GoogleReviews = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const handle = () => {
      if (window.innerWidth < 768) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    handle();
    window.addEventListener("resize", handle, { passive: true });
    return () => window.removeEventListener("resize", handle);
  }, []);

  const maxIndex = Math.max(0, reviews.length - visible);

  const next = useCallback(() => setCurrent((p) => (p >= maxIndex ? 0 : p + 1)), [maxIndex]);
  const prev = () => setCurrent((p) => (p <= 0 ? maxIndex : p - 1));

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [paused, next]);

  const slideWidth = 100 / visible;

  return (
    <section className="py-24 lg:py-32" aria-label="Customer reviews">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-12">
          <ScrollReveal><p className="section-tag mb-3">— Client Testimonials —</p></ScrollReveal>
          <ScrollReveal delay={0.1}><h2 className="section-title mb-4">Trusted by Buyers Worldwide</h2></ScrollReveal>
          <ScrollReveal delay={0.15}><div className="gold-divider mx-auto mb-8" /></ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="font-display text-[3.5rem] font-bold gold-gradient-text leading-none">{ratingInfo.average}</span>
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-0.5" aria-label={`${ratingInfo.average} out of 5 stars`}>
                  {[1, 2, 3, 4].map((i) => (
                    <FaStar key={i} size={18} className="text-gold" aria-hidden="true" />
                  ))}
                  <FaStar size={18} className="text-gold" style={{ clipPath: "inset(0 20% 0 0)" }} aria-hidden="true" />
                </div>
                <span className="text-silver text-xs mt-1 flex items-center gap-1.5">
                  <FaGoogle size={14} className="text-silver/70" aria-hidden="true" />
                  Based on {ratingInfo.totalReviews}+ Reviews
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: `-${current * slideWidth}%` }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${slideWidth}%` }}
                >
                  <div className="card-luxury p-8 h-full rounded-xl relative overflow-hidden">
                    <span className="absolute top-4 right-5 font-display text-5xl gold-text opacity-10" aria-hidden="true">"</span>
                    <FaGoogle size={16} className="text-silver/40 absolute top-4 left-6" aria-hidden="true" />
                    <div className="flex items-center gap-0.5 mb-4 mt-2">
                      {Array.from({ length: r.stars }).map((_, j) => (
                        <FaStar key={j} size={14} className="text-gold" aria-hidden="true" />
                      ))}
                    </div>
                    <p className="text-foreground text-sm leading-relaxed mb-6">{r.text}</p>
                    <p className="text-foreground font-bold text-sm">{r.name}</p>
                    <p className="text-silver text-xs">{r.info}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={prev}
            className="absolute top-1/2 -left-2 -translate-y-1/2 w-10 h-10 rounded-full border border-gold/30 bg-background/80 items-center justify-center text-gold hover:bg-gold/10 transition-all z-10 hidden md:flex focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
            aria-label="Previous review"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -right-2 -translate-y-1/2 w-10 h-10 rounded-full border border-gold/30 bg-background/80 items-center justify-center text-gold hover:bg-gold/10 transition-all z-10 hidden md:flex focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none"
            aria-label="Next review"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none ${
                i === current ? "bg-gold w-6" : "bg-silver/30 hover:bg-silver/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-6">
          <a
            href={siteConfig.googleReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm gold-text hover:text-foreground transition-colors font-medium inline-flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:outline-none rounded"
          >
            Leave a Review on Google <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
