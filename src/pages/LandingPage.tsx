import React, { Suspense, lazy, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { Navbar } from '../components/Navbar';
import { MainFooter } from '../components/MainFooter';

// Lazy load below-the-fold components
const TrustSection = lazy(() => import('../components/TrustSection').then(m => ({ default: m.TrustSection })));
const BackendProcessSection = lazy(() => import('../components/BackendProcessSection').then(m => ({ default: m.BackendProcessSection })));
const WhyBanegaBrandSection = lazy(() => import('../components/WhyBanegaBrandSection').then(m => ({ default: m.WhyBanegaBrandSection })));
// const GallerySection = lazy(() => import('../components/GallerySection').then(m => ({ default: m.GallerySection })));
const ManufacturingEcosystemSection = lazy(() => import('../components/ManufacturingEcosystemSection').then(m => ({ default: m.ManufacturingEcosystemSection })));

const TestimonialsSection = lazy(() => import('../components/TestimonialsSection').then(m => ({ default: m.TestimonialsSection })));
// const LegacySection = lazy(() => import('../components/LegacySection').then(m => ({ default: m.LegacySection })));
const ConsultationSection = lazy(() => import('../components/ConsultationSection').then(m => ({ default: m.ConsultationSection })));

const SectionLoader = () => <div className="h-40 w-full animate-pulse bg-zinc-900/5 rounded-[48px] my-6" />;

export const LandingPage = () => {
  // Set cursor to black
  useEffect(() => {
    document.body.style.cursor = 'default';
    // Add black cursor style
    const style = document.createElement('style');
    style.textContent = `
      * {
        cursor: default !important;
      }
      button, a, .interactive, [role="button"], input, select, textarea {
        cursor: pointer !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
      document.body.style.cursor = '';
    };
  }, []);

  return (
    <div className="relative bg-[#FAFAFA] text-[#111111] selection:bg-[black] selection:text-white">
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
      <Navbar />
      <main>
        {/* Section 1: Hero Section */}
        <Hero />
        
        <Suspense fallback={<SectionLoader />}>
          {/* Section 2: Trust Bar */}
          <TrustSection />

          {/* Section 4: The Banega Brand Framework */}
          <BackendProcessSection />

          {/* Section 5: Why Most Product Launches Fail */}
         

          {/* Section 6: Why Banega Brand */}
          <WhyBanegaBrandSection />

          {/* Section 7: Industries We Serve */}
          {/* <GallerySection /> */}

          {/* Section 7.5: Manufacturing Ecosystem */}
          <ManufacturingEcosystemSection />

        

          {/* Section 10: Testimonials Section */}
          <TestimonialsSection />

          {/* Section 11: Legacy Section */}
          {/* <LegacySection /> */}

          {/* Section 12: Consultation Section (Contact) */}
          <ConsultationSection />
        </Suspense>
      </main>
      
      <MainFooter />
    </div>
  );
};
