import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { FigmaFooter } from '../components/FigmaFooter';
import { FigmaBlogSection } from '../components/FigmaBlogSection';
import { BanegaEdgeHubSection } from '../components/BanegaEdgeHubSection';

export const BlogPage: React.FC = () => {
  return (
    <div 
      className="min-h-screen bg-white text-[#111111]"
      style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
    >
      {/* Dynamic SEO Meta Tags */}
      <Helmet>
        <title>Product Launch &amp; Brand Strategy Blog | Banega Brand – India's Leading Product Launch Company</title>
        <meta 
          name="description" 
          content="Explore actionable blueprints on how to launch perfume, skincare, cosmetic, and Ayurvedic brands in India. Expert insights on formulation, manufacturer sourcing, and D2C scaling by Mayank Tiwari."
        />
        <meta 
          name="keywords" 
          content="Product Launch Company, Product Launch Consultant, Brand Development Company, How to launch a product in India, How to start a perfume brand in India, How to start a skincare brand, Private label consultant in India"
        />
        <link rel="canonical" href="https://banegabrand.com/blog" />
        <meta property="og:title" content="Product Launch &amp; Brand Strategy Knowledge Hub | Banega Brand" />
        <meta property="og:description" content="Master product launch strategies, factory sourcing, formulation, and D2C marketing." />
        <meta property="og:url" content="https://banegabrand.com/blog" />
      </Helmet>

      <Navbar />

      <main className="pt-20 sm:pt-24">
        {/* Branded Monthly Edition & Case Studies Stream */}
        <FigmaBlogSection />

        {/* Banega Brand Innovation & The Edge Section (Bot Army + Marketing Glossary) */}
        <BanegaEdgeHubSection />
      </main>

      <FigmaFooter />
    </div>
  );
};

export default BlogPage;
