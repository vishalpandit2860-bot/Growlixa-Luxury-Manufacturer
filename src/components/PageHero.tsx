import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  breadcrumb?: string;
}

const PageHero = ({ title, subtitle, image, breadcrumb }: PageHeroProps) => {
  return (
    <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />
      </div>
      <div className="relative z-10 text-center section-padding max-w-4xl mx-auto pt-24">
        {breadcrumb && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="section-tag mb-4"
            aria-label="Breadcrumb"
          >
            {breadcrumb}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="section-title text-4xl sm:text-5xl lg:text-6xl mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="section-subtitle mx-auto"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
};

export default PageHero;
