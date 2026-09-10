import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToTop } from './components/ScrollToTop';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage').then(module => ({ default: module.PrivacyPolicyPage })));
const RefundPolicyPage = lazy(() => import('./pages/RefundPolicyPage').then(module => ({ default: module.RefundPolicyPage })));
const TermsConditionsPage = lazy(() => import('./pages/TermsConditionsPage').then(module => ({ default: module.TermsConditionsPage })));

const LandingPage = lazy(() => import('./pages/LandingPage').then(module => ({ default: module.LandingPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.ServicesPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const ManufacturerNetworkPage = lazy(() => import('./pages/ManufacturerNetworkPage').then(module => ({ default: module.ManufacturerNetworkPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));
const AdminBlogPage = lazy(() => import('./pages/AdminBlogPage').then(module => ({ default: module.AdminBlogPage })));
const HowWeWorkPage = lazy(() => import('./pages/HowWeWorkPage').then(module => ({ default: module.HowWeWorkPage })));
const OurPartnershipsPage = lazy(() => import('./pages/OurPartnershipsPage').then(module => ({ default: module.OurPartnershipsPage })));
const NewsCentrePage = lazy(() => import('./pages/NewsCentrePage').then(module => ({ default: module.NewsCentrePage })));
const TeamPage = lazy(() => import('./pages/TeamPage').then(module => ({ default: module.TeamPage })));
const LaunchPerfumePage = lazy(() => import('./pages/seo/LaunchPerfumePage').then(module => ({ default: module.LaunchPerfumePage })));
const LaunchCosmeticPage = lazy(() => import('./pages/seo/LaunchCosmeticPage').then(module => ({ default: module.LaunchCosmeticPage })));
const LaunchAyurvedaPage = lazy(() => import('./pages/seo/LaunchAyurvedaPage').then(module => ({ default: module.LaunchAyurvedaPage })));
const LaunchPersonalCarePage = lazy(() => import('./pages/seo/LaunchPersonalCarePage').then(module => ({ default: module.LaunchPersonalCarePage })));

const PageLoader = () => (
  <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-[#FF5722]/20 border-t-[#FF5722] rounded-full animate-spin" />
  </div>
);

const BrandStoryPage = lazy(() => import('./pages/BrandStoryPage').then(module => ({ default: module.BrandStoryPage })));

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.8,
    });

    // Expose lenis instance globally for programmatic scroll (e.g., ScrollToTop, navigation)
    (window as any).lenis = lenis;

    // Connect Lenis to GSAP ScrollTrigger for seamless scroll-driven animations
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      delete (window as any).lenis;
    };
  }, []);

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/how-we-work" element={<HowWeWorkPage />} />
            <Route path="/our-partnerships" element={<OurPartnershipsPage />} />
            <Route path="/news-centre" element={<NewsCentrePage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/manufacturer-network" element={<ManufacturerNetworkPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/articles" element={<BlogPage />} />
            <Route path="/story/:brandId" element={<BrandStoryPage />} />
            <Route path="/admin" element={<AdminBlogPage />} />
            <Route path="/admin-blog" element={<AdminBlogPage />} />
            <Route path="/Privacy-Policy" element={<PrivacyPolicyPage />} />
            <Route path="/Refund-Policy" element={<RefundPolicyPage />} />
            <Route path="/Terms-Conditions" element={<TermsConditionsPage />} />

            {/* 4 Dedicated Industry Verticals */}
            <Route path="/industry/perfume" element={<LaunchPerfumePage />} />
            <Route path="/launch-perfume-brand" element={<LaunchPerfumePage />} />
            <Route path="/perfume-manufacturer" element={<LaunchPerfumePage />} />

            <Route path="/industry/cosmetics" element={<LaunchCosmeticPage />} />
            <Route path="/launch-cosmetic-brand" element={<LaunchCosmeticPage />} />

            <Route path="/industry/ayurveda" element={<LaunchAyurvedaPage />} />
            <Route path="/launch-ayurveda-brand" element={<LaunchAyurvedaPage />} />

            <Route path="/industry/skincare" element={<LaunchPersonalCarePage />} />
            <Route path="/launch-skincare-brand" element={<LaunchPersonalCarePage />} />
            <Route path="/launch-personal-care-brand" element={<LaunchPersonalCarePage />} />

            <Route path="/launch-nutraceutical-brand" element={<Navigate to="/services" replace />} />
            <Route path="/launch-pet-care-brand" element={<Navigate to="/services" replace />} />
            <Route path="/process" element={<Navigate to="/how-we-work" replace />} />
            <Route path="/industries" element={<Navigate to="/services" replace />} />
            <Route path="/investment-guide" element={<Navigate to="/services" replace />} />
            <Route path="/csr" element={<Navigate to="/about" replace />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}
