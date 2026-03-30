import { type ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
import WhatsAppButton from "./WhatsAppButton";
import CookieConsent from "./CookieConsent";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen bg-background">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10001] focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-medium"
        style={{ background: "linear-gradient(135deg, hsl(40 55% 58%), hsl(45 85% 65%))", color: "hsl(220 20% 4%)" }}
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
      <CookieConsent />
    </div>
  );
};

export default Layout;
