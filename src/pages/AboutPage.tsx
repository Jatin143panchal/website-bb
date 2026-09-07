import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { FigmaFooter } from '../components/FigmaFooter';
import { AboutTimelineGallery } from '../components/AboutTimelineGallery';
import { MeetTheTeamSection } from '../components/MeetTheTeamSection';
import { HowWeWorkManifestoSection } from '../components/HowWeWorkManifestoSection';

const MARQUEE_ITEMS = [
  "IT'S TIME TO CREATE A SCHBANG",
  "IT'S TIME TO LAUNCH YOUR BRAND",
  "IT'S TIME TO CREATE A BANEGA BRAND",
  "INDIA'S NO. 1 PRODUCT LAUNCH COMPANY",
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

export const AboutPage: React.FC = () => {
  return (
    <div className="relative bg-white text-[#111111] selection:bg-[#FF5722] selection:text-white min-h-screen overflow-x-hidden font-sans">
      <Helmet>
        <title>About Banega Brand | India's Leading Product Launch Company</title>
        <meta
          name="description"
          content="Banega Brand is India's leading Product Launch Company and turnkey brand incubation partner. We unite imagination with craft and technology to build category leaders."
        />
        <link rel="canonical" href="https://banegabrand.com/about" />
      </Helmet>

      {/* Header Navigation */}
      <Navbar />

      <main>
        {/* ── 1. EXACT REFERENCE SCREENSHOT MATCH: LEFT-ALIGNED HERO STATEMENT ── */}
        <section className="w-full bg-white pt-16 sm:pt-20 md:pt-24 pb-2 sm:pb-3 px-4 sm:px-8 md:px-12 lg:px-16 text-left select-none overflow-hidden relative z-10">
          <div className="w-full max-w-7xl space-y-2.5 sm:space-y-3">
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] font-black tracking-[-0.03em] text-[#0a0a0a] leading-[1.14] max-w-5xl"
              style={{
                fontFamily: "'Mulish', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              }}
            >
              <span className="block">India's No. 1</span>
              <span className="block">Product Launch Company</span>
            </motion.h1>

            {/* Subhead Description in single clean line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-2 sm:mt-2.5 text-xs sm:text-sm md:text-[15px] lg:text-base text-zinc-600 font-normal leading-normal max-w-5xl"
              style={{
                fontFamily: "'Mulish', 'Inter', system-ui, sans-serif",
              }}
            >
              We're a team of product launch specialists delivering turnkey formulation, packaging &amp; scaling for 215+ brands across India!
            </motion.p>
          </div>
        </section>

        {/* ── 2. EXACT REFERENCE SCREENSHOT MATCH: COMPACT OUTLINE TEXT MARQUEE ── */}
        <div className="w-full py-1.5 sm:py-2.5 bg-white overflow-hidden relative flex select-none z-10">
          {/* Track 1 */}
          <div className="flex shrink-0 items-center animate-hero-marquee whitespace-nowrap">
            {MARQUEE_ITEMS.map((phrase, idx) => (
              <div key={`ab-t1-${idx}`} className="flex shrink-0 items-center whitespace-nowrap">
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
              <div key={`ab-t2-${idx}`} className="flex shrink-0 items-center whitespace-nowrap">
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

        {/* ── 3. HORIZONTAL TIMELINE GALLERY ───────────────────────────────────── */}
        <AboutTimelineGallery />

        {/* ── 4. HOW WE WORK (WE BRING THE WHOLE BANEGA BRAND!) ─────────────────── */}
        <HowWeWorkManifestoSection />

        {/* ── 5. SECOND EDITORIAL MANIFESTO (THE FRONTIER BANEGA BRAND COMPANY) ── */}
        <section className="w-full bg-gradient-to-b from-white via-orange-50/30 to-white py-24 sm:py-32 md:py-40 px-4 sm:px-8 lg:px-16 text-center select-none border-b border-zinc-100 relative overflow-hidden z-10">
          {/* Soft Warm Radial Backdrop Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none -z-0" />

          <div className="max-w-6xl mx-auto flex flex-col items-center justify-center space-y-4 relative z-10">
            {/* Top Line: Luxury High-Contrast Serif */}
            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-normal tracking-tight text-[#111111] leading-[1.05]"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
            >
              THE FRONTIER
            </motion.h2>

            {/* Bottom Line: Banega Brand Company with Light Orange Gradient Effect */}
            <motion.h3
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-black tracking-tight uppercase leading-[1.05] bg-gradient-to-r from-[#111111] via-[#FF5722] to-[#FF8A65] bg-clip-text text-transparent"
              style={{ fontFamily: "'Outfit', 'Sora', system-ui, sans-serif" }}
            >
              BANEGA BRAND COMPANY
            </motion.h3>

            {/* Editorial Sub-Manifesto */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="pt-6 sm:pt-8 text-xl sm:text-2xl md:text-3xl lg:text-4xl text-zinc-800 font-normal max-w-4xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
            >
              We unite imagination with craft and technology at cultural speed to create new forms of value.
            </motion.p>
          </div>
        </section>

        {/* ── 4. EXACT SCREENSHOT MATCH: MEET THE TEAM STUDIO PORTRAITS ────── */}
        <MeetTheTeamSection showCta={true} />
      </main>

      {/* Structured Modern Footer */}
      <FigmaFooter />
    </div>
  );
};

export default AboutPage;