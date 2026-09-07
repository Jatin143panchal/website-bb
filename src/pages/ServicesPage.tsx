import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

import { Navbar } from '../components/Navbar';
import { ServicesCapabilitiesWorkflow } from '../components/ServicesCapabilitiesWorkflow';
import { ServicesEditorialShowcase } from '../components/ServicesEditorialShowcase';
import { ServicesBottleExplodedSection } from '../components/ServicesBottleExplodedSection';
import { ServicesTrustBannerSection } from '../components/ServicesTrustBannerSection';
import { MediaSolutionsSection } from '../components/MediaSolutionsSection';
import { FigmaFooter } from '../components/FigmaFooter';

const MARQUEE_ITEMS = [
  "IT'S TIME TO LAUNCH YOUR BRAND",
  "INDIA'S NO. 1 PRODUCT LAUNCH COMPANY",
  "IT'S TIME TO BUILD A BANEGA BRAND",
  "TURNKEY FORMULATION & MANUFACTURING",
];

// 24-ray solid black rotating sunburst asterisk icon
const BigSunburstIcon: React.FC = () => (
  <span className="inline-flex items-center justify-center mx-4 sm:mx-6 md:mx-8 shrink-0 select-none">
    <svg
      viewBox="0 0 100 100"
      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-[#111111] animate-spin select-none"
      style={{ animationDuration: '14s' }}
    >
      <circle cx="50" cy="50" r="16" fill="#111111" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        return (
          <rect
            key={i}
            x="48.2"
            y="2"
            width="3.6"
            height="27"
            rx="1.8"
            transform={`rotate(${angle} 50 50)`}
            fill="#111111"
          />
        );
      })}
    </svg>
  </span>
);

export const ServicesPage: React.FC = () => {
  return (
    <div id="services-page-container" className="relative bg-white text-[#111111] selection:bg-[#FF5722] selection:text-white min-h-screen font-sans overflow-x-hidden pt-16 sm:pt-20">
      <Helmet>
        <title>Top Product Launching Companies in India | Banega Brand</title>
        <meta
          name="description"
          content="Banega Brand is India's premier product launch company. Explore full-stack product launch services: formulation chemistry, GMP factory sourcing, luxury packaging, and marketplace scale."
        />
        <meta
          name="keywords"
          content="Top Product Launching Companies in India, Product Launch Company India, Brand Launch Services, Banega Brand Services"
        />
        <link rel="canonical" href="https://banegabrand.com/services" />
      </Helmet>

      {/* Header (Navbar) */}
      <Navbar />

      <main>

        {/* ── 1. FULL-WIDTH DARK HERO SECTION (MATCHING SCREENSHOT 1) ────────── */}
        <section className="relative w-full bg-[#141414] text-white py-24 sm:py-32 md:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden select-none">
          <div className="max-w-5xl mx-auto text-center space-y-6">

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-bold text-white tracking-tight leading-[1.08]"
            >
              Top Product Launching <br className="hidden sm:inline" />
              Companies in India
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-xl md:text-2xl text-zinc-300 font-normal pt-1"
            >
              Which one is the best for your company?
            </motion.p>

            {/* White Pill CTA Button & Microcopy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="pt-4 flex flex-col items-center space-y-3"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white hover:bg-zinc-100 text-[#111111] text-sm sm:text-base font-semibold shadow-lg hover:shadow-2xl transition-all duration-200 active:scale-95 cursor-pointer"
              >
                Find my company
              </Link>

              <span className="text-xs text-zinc-400 font-normal">
                Takes 3 min. <strong className="text-white font-bold">100% free</strong>
              </span>
            </motion.div>

          </div>
        </section>

        {/* ── 2. EDITORIAL LUXURY STATEMENT (MATCHING SCREENSHOT 2) ─────────── */}
        <section className="w-full bg-white py-20 sm:py-28 md:py-36 px-4 sm:px-8 lg:px-16 text-center select-none border-b border-zinc-100 overflow-hidden">
          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-2 sm:space-y-3">

            {/* Top Line: Luxury High-Contrast Serif */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal tracking-tight text-[#111111] leading-[1.05]"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
            >
              THE FUTURE INSPIRES US
            </motion.h2>

            {/* Bottom Line: Clean Minimalist Sans-Serif */}
            <motion.h3
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-light tracking-tight text-zinc-500 uppercase leading-[1.05]"
              style={{ fontFamily: "'Outfit', 'Sora', system-ui, sans-serif" }}
            >
              WE WORK TO INSPIRE
            </motion.h3>

          </div>
        </section>

        {/* ── 3. EXACT REFERENCE MATCH: COMPACT OUTLINE TEXT MARQUEE (NO BORDER LINES) ─────── */}
        <div className="w-full py-4 sm:py-5 md:py-6 bg-white overflow-hidden relative flex select-none">
          {/* Track 1 */}
          <div className="flex shrink-0 items-center animate-hero-marquee whitespace-nowrap">
            {MARQUEE_ITEMS.map((phrase, idx) => (
              <div key={`st1-${idx}`} className="flex shrink-0 items-center whitespace-nowrap">
                <span
                  className="font-extrabold uppercase select-none whitespace-nowrap leading-none tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] text-transparent shrink-0 transition-all duration-300 hover:text-black/10"
                  style={{
                    fontFamily: "'Mulish', 'Inter', system-ui, sans-serif",
                    letterSpacing: '0.01em',
                    WebkitTextStroke: '1.2px #71717a',
                    color: 'transparent',
                  }}
                >
                  {phrase}
                </span>
                <BigSunburstIcon />
              </div>
            ))}
          </div>

          {/* Track 2 (Seamless Infinite Duplicate) */}
          <div className="flex shrink-0 items-center animate-hero-marquee whitespace-nowrap" aria-hidden="true">
            {MARQUEE_ITEMS.map((phrase, idx) => (
              <div key={`st2-${idx}`} className="flex shrink-0 items-center whitespace-nowrap">
                <span
                  className="font-extrabold uppercase select-none whitespace-nowrap leading-none tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] text-transparent shrink-0 transition-all duration-300 hover:text-black/10"
                  style={{
                    fontFamily: "'Mulish', 'Inter', system-ui, sans-serif",
                    letterSpacing: '0.01em',
                    WebkitTextStroke: '1.2px #71717a',
                    color: 'transparent',
                  }}
                >
                  {phrase}
                </span>
                <BigSunburstIcon />
              </div>
            ))}
          </div>
        </div>

        {/* ── 4. FULL-STACK ANIMATED CAPABILITIES WORKFLOW (BRAND NAME -> TM -> GST -> LOGO -> MFG -> SCALE) ── */}
        <ServicesCapabilitiesWorkflow />

        {/* ── 5. 2-COLUMN EDITORIAL SHOWCASE (ING & ALAÏA MATCHING SCREENSHOT) ── */}
        <ServicesEditorialShowcase />

        {/* ── 6. FULL-WIDTH EXPLODED PERFUME HARDWARE ARCHITECTURE (TUESDAY LONDON ROYAL 17) ── */}
        <ServicesBottleExplodedSection />

        {/* ── 7. FULL-WIDTH WHY BRANDS TRUST US / STERILE LAB FACILITY BANNER (ISO, GMP, FDA) ── */}
        <ServicesTrustBannerSection />

        {/* ── 8. MEDIA SOLUTIONS & ACCORDION SECTION (MATCHING SCHBANG REFERENCE) ── */}
        <MediaSolutionsSection />

      </main>

      {/* Footer */}
      <FigmaFooter />
    </div>
  );
};

export default ServicesPage;
