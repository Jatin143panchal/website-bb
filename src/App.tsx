

import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';
import { ScrollToTop } from './components/ScrollToTop';
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(module => ({ default: module.PrivacyPolicyPage })));
const RefundPolicyPage = lazy(() => import('./pages/RefundPolicyPage').then(module => ({ default: module.RefundPolicyPage })));
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage').then(module => ({ default: module.TermsConditionsPage })));

const LandingPage = lazy(() => import('./pages/LandingPage').then(module => ({ default: module.LandingPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.ServicesPage })));
const ProcessPage = lazy(() => import('./pages/ProcessPage').then(module => ({ default: module.ProcessPage })));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage').then(module => ({ default: module.IndustriesPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const ManufacturerNetworkPage = lazy(() => import('./pages/ManufacturerNetworkPage').then(module => ({ default: module.ManufacturerNetworkPage })));
const InvestmentGuidePage = lazy(() => import('./pages/InvestmentGuidePage').then(module => ({ default: module.InvestmentGuidePage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));
const AdminBlogPage = lazy(() => import('./pages/AdminBlogPage').then(module => ({ default: module.AdminBlogPage })));

// SEO Industry Pages
const LaunchPerfumePage = lazy(() => import('./pages/seo/LaunchPerfumePage').then(module => ({ default: module.LaunchPerfumePage })));
const LaunchAyurvedaPage = lazy(() => import('./pages/seo/LaunchAyurvedaPage').then(module => ({ default: module.LaunchAyurvedaPage })));
const LaunchCosmeticPage = lazy(() => import('./pages/seo/LaunchCosmeticPage').then(module => ({ default: module.LaunchCosmeticPage })));
const LaunchNutraceuticalPage = lazy(() => import('./pages/seo/LaunchNutraceuticalPage').then(module => ({ default: module.LaunchNutraceuticalPage })));
const LaunchPersonalCarePage = lazy(() => import('./pages/seo/LaunchPersonalCarePage').then(module => ({ default: module.LaunchPersonalCarePage })));
const LaunchPetPage = lazy(() => import('./pages/seo/LaunchPetPage').then(module => ({ default: module.LaunchPetPage })));

const PageLoader = () => (
  <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-[#D97706]/20 border-t-[#D97706] rounded-full animate-spin" />
  </div>
);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/process" element={<ProcessPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/manufacturer-network" element={<ManufacturerNetworkPage />} />
          <Route path="/investment-guide" element={<InvestmentGuidePage />} />
          <Route path="/Privacy-Policy" element={<PrivacyPolicyPage />} />
          <Route path="/Refund-Policy" element={<RefundPolicyPage />} />
          <Route path="/Terms-Conditions" element={<TermsConditionsPage />} />
          
          {/* Category Landing Pages */}
          <Route path="/launch-perfume-brand" element={<LaunchPerfumePage />} />
          <Route path="/launch-ayurveda-brand" element={<LaunchAyurvedaPage />} />
          <Route path="/launch-cosmetic-brand" element={<LaunchCosmeticPage />} />
          <Route path="/launch-nutraceutical-brand" element={<LaunchNutraceuticalPage />} />
          <Route path="/launch-personal-care-brand" element={<LaunchPersonalCarePage />} />
          <Route path="/launch-pet-care-brand" element={<LaunchPetPage />} />
          
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/admin-blog" element={<AdminBlogPage />} />
        </Routes>
      </Suspense>
    </Router>
    </HelmetProvider>
  );
}

