import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { FigmaHero } from '../components/FigmaHero';
import { SchbangWhatDefinesUs } from '../components/SchbangWhatDefinesUs';
import { FigmaCategoryShowcase } from '../components/FigmaCategoryShowcase';
import { FigmaTrustGrid } from '../components/FigmaTrustGrid';
import { ThreeDSteps } from '../components/ThreeDSteps';
import { FigmaStrategyVideoSection } from '../components/FigmaStrategyVideoSection';
import { FigmaCaseStudiesSection } from '../components/FigmaCaseStudiesSection';
import { ArticlesSection } from '../components/ArticlesSection';
import { SchbangContactSection } from '../components/SchbangContactSection';
import { FigmaFooter } from '../components/FigmaFooter';

export const LandingPage = () => {
  return (
    <div className="relative bg-white text-[#111111] selection:bg-[#FF5722] selection:text-white pt-0">
      <Helmet>
        <title>Banega Brand – India's Leading Product Launch Company | D2C Brand Development &amp; Private Label Consultant</title>
        <meta
          name="description"
          content="Banega Brand is India's leading Product Launch Company and D2C brand consultancy led by Mayank Tiwari. Launch luxury perfume, skincare, cosmetic &amp; Ayurveda brands on Amazon, Flipkart &amp; Nykaa with formulation, factory sourcing, packaging, and marketplace launch execution in 45-90 days."
        />
        <meta
          name="keywords"
          content="India's Leading Product Launch Company, Product Launch Company India, Brand Launch Services, Amazon India Seller Launch, Flipkart Brand Listing, Nykaa Brand Onboarding, Private Label Consultant, D2C Brand Consultant, Perfume Brand Launch India, Skincare Brand Consultant, Cosmetic Manufacturing India, Ayurveda Brand Consultant"
        />
        <link rel="canonical" href="https://banegabrand.com/" />
        <meta property="og:title" content="Banega Brand – India's Leading Product Launch Company" />
        <meta property="og:description" content="Turn your brand idea into a best-selling product on Amazon, Flipkart &amp; Nykaa. India's leading end-to-end product launch consultancy." />
        <meta property="og:url" content="https://banegabrand.com/" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Navbar with Centered Logo */}
      <Navbar />

      <main>
        {/* Schbang-Style Motion Hero with Scroll-Driven Video Expansion */}
        <FigmaHero />

        {/* Schbang-Style What Defines Us Manifesto Section */}
        <SchbangWhatDefinesUs />

        {/* Interactive Expandable Category Carousel (100% Full Width Screen) */}
        <FigmaCategoryShowcase />

        {/* High-Definition Pure Brand Logos (Clean 2 Rows on White Matching Reference) */}
        <FigmaTrustGrid />

        {/* 3D Animated 6-Step Launch Process */}
        <ThreeDSteps />

        {/* Strategy Execution Room & Formulation Team Video (100% Full Width Edge-to-Edge) */}
        <FigmaStrategyVideoSection />

        {/* 4 Brand Showcase Case Studies (Biographey, Venotine, ROUGX, Blush en Bloom) */}
        <FigmaCaseStudiesSection />

        {/* Articles & Brand Case Studies Section */}
        <ArticlesSection />

        {/* Minimalist Split Contact Us Section (Schbang Design) */}
        <SchbangContactSection />
      </main>

      {/* Clean Modern Structured Footer */}
      <FigmaFooter />
    </div>
  );
};

export default LandingPage;
