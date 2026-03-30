import { Link } from "react-router-dom";
import { siteConfig } from "@/data/siteConfig";
import SocialIcons from "./SocialIcons";
import ScrollReveal from "./ScrollReveal";
import logoImg from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/30" style={{ backgroundColor: "#050505" }}>
      <div className="max-w-7xl mx-auto section-padding py-16 lg:py-20">
        <ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="lg:col-span-1">
              <div className="mb-4">
                <img src={logoImg} alt="Growlixa Luxury logo" className="h-20 w-auto" />
              </div>
              <p className="text-silver text-sm leading-relaxed mb-4">
                Premium Indian luxury products crafted by master artisans — delivered to discerning global buyers.
              </p>
              <p className="font-accent italic text-sm gold-text">"{siteConfig.tagline}"</p>
            </div>

            <div>
              <h4 className="font-display text-sm font-bold gold-text mb-4 tracking-wide">Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Home", to: "/" },
                  { label: "About", to: "/about" },
                  { label: "Collection", to: "/collection" },
                  { label: "Custom Solutions", to: "/custom-solutions" },
                  { label: "Contact", to: "/contact" },
                ].map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-silver text-sm hover:text-foreground transition-colors duration-300">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-sm font-bold gold-text mb-4 tracking-wide">Categories</h4>
              <ul className="space-y-2.5">
                {["Artisan Décor", "Premium Gifts", "3D Printed", "Leather Goods", "Indian Specialties"].map((c) => (
                  <li key={c}>
                    <Link to="/collection" className="text-silver text-sm hover:text-foreground transition-colors duration-300">{c}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display text-sm font-bold gold-text mb-4 tracking-wide">Business</h4>
              <ul className="space-y-2.5">
                {["Private Label", "Bulk Orders", "OEM/ODM", "Distribution", "Export Inquiry"].map((b) => (
                  <li key={b}>
                    <Link to="/custom-solutions" className="text-silver text-sm hover:text-foreground transition-colors duration-300">{b}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-16 pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-silver/70 text-xs">
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved. Crafted with ✦ in India.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
