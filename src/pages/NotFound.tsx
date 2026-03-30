import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";

const NotFound = () => {
  return (
    <Layout>
      <SEOHead title="Page Not Found — Growlixa Luxury" description="The page you're looking for doesn't exist." path="/404" />
      <div className="flex min-h-[70vh] items-center justify-center">
        <div className="text-center section-padding">
          <h1 className="font-display text-6xl font-bold gold-gradient-text mb-4">404</h1>
          <p className="text-silver text-lg mb-8">The page you're looking for doesn't exist.</p>
          <Link to="/" className="btn-gold">Return to Home</Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
