import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Navbar } from '../../components/Navbar';
import { FigmaFooter } from '../../components/FigmaFooter';

const COSMETIC_FAQS = [
  {
    q: 'What is the minimum order quantity (MOQ) to launch a cosmetics brand with Banega Brand?',
    a: 'Banega Brand offers low starting MOQs beginning at 250 to 500 units per shade or SKU for standard high-end component tooling. This allows founders to launch a coordinated capsule collection with minimal initial capital risk.',
  },
  {
    q: 'How long does the turnkey cosmetics development process take with Banega Brand?',
    a: 'The complete turnkey cosmetics development process at Banega Brand typically takes 45 to 90 days from initial formulation and shade matching to final manufacturing and marketplace delivery.',
  },
  {
    q: 'Are all cosmetic formulations developed by Banega Brand CDSCO compliant?',
    a: 'Yes. All cosmetic formulations and color pigments engineered by Banega Brand are 100% CDSCO compliant, cruelty-free, and manufactured under strict ISO and GMP certified facility standards.',
  },
  {
    q: 'Who owns the cosmetics formulation and color shade intellectual property?',
    a: 'You retain 100% full intellectual property ownership of your custom color shades, proprietary formulations, and packaging design assets developed with Banega Brand.',
  },
  {
    q: 'Does Banega Brand assist with quick-commerce and marketplace onboarding?',
    a: 'Yes. Banega Brand provides complete launch support including marketplace onboarding for platforms like Amazon, Nykaa, Purplle, and quick-commerce channels along with GS1 barcode registration.',
  },
];

export const LaunchCosmeticPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="relative bg-white text-[#111111] selection:bg-[#FF5722] selection:text-white font-sans overflow-x-hidden min-h-screen">
      <Helmet>
        <title>Launch Your Color Cosmetics & Makeup Brand in India | Banega Brand</title>
        <meta
          name="description"
          content="Build your color cosmetics and makeup brand with India's #1 connected launch partner. High-pigment lipsticks, foundations, palettes, cruelty-free lab testing, custom soft-touch packaging, and GMP manufacturing in 45–90 days."
        />
        <meta
          name="keywords"
          content="launch cosmetics brand, color cosmetics contract manufacturing india, private label lipstick manufacturer, custom foundation formulation lab, private label makeup india, cosmetic oem manufacturer"
        />
        <link rel="canonical" href="https://banegabrand.com/industry/cosmetics" />

        {/* OpenGraph */}
        <meta property="og:title" content="Launch Your Own Color Cosmetics & Makeup Brand | Banega Brand" />
        <meta
          property="og:description"
          content="Turnkey color cosmetics incubation — custom pigments, luxury packaging, cruelty-free lab clearance, and marketplace scaling."
        />
        <meta property="og:url" content="https://banegabrand.com/industry/cosmetics" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://banegabrand.com/assets/Banner%202.png" />

        {/* Structured Data / Schema.org for SEO & AEO (Google AI Overviews, Perplexity, ChatGPT Search) */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://banegabrand.com/industry/cosmetics#service',
                'name': 'Color Cosmetics & Makeup Brand Launch Services',
                'provider': {
                  '@type': 'Organization',
                  'name': 'Banega Brand',
                  'url': 'https://banegabrand.com',
                  'logo': 'https://banegabrand.com/assets/banega_logo_official.png',
                },
                'serviceType': 'Turnkey Color Cosmetics Formulation, Custom Tooling & Contract Manufacturing',
                'areaServed': ['India', 'United States', 'Europe', 'Middle East'],
                'description':
                  'End-to-end pigment formulation, velvet matte lipsticks, breathable foundations, soft-touch magnetic cases, CDSCO compliance, and GMP manufacturing in 45–90 days.',
              },
              {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  {
                    '@type': 'ListItem',
                    'position': 1,
                    'name': 'Home',
                    'item': 'https://banegabrand.com',
                  },
                  {
                    '@type': 'ListItem',
                    'position': 2,
                    'name': 'Industries',
                    'item': 'https://banegabrand.com/services',
                  },
                  {
                    '@type': 'ListItem',
                    'position': 3,
                    'name': 'Color Cosmetics & Makeup',
                    'item': 'https://banegabrand.com/industry/cosmetics',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                'mainEntity': COSMETIC_FAQS.map((faq) => ({
                  '@type': 'Question',
                  'name': faq.q,
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': faq.a,
                  },
                })),
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Global Navigation */}
      <Navbar />

      <main className="w-full">
        {/* ── 1. EDITORIAL LUXURY COSMETICS HERO ────────────────────────────── */}
        <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] overflow-hidden border-b border-zinc-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Left Hero Briefing */}
            <div className="lg:col-span-7 space-y-6 text-left">

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-3"
              >
                <h1
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-bold uppercase tracking-tight text-[#111111] leading-[1.02]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  HIGH-PIGMENT <br />
                  <span className="text-[#FF5722]">
                    COLOR COSMETICS
                  </span>
                </h1>
                <p 
                  className="text-xs sm:text-sm uppercase tracking-[0.18em] text-zinc-600 font-semibold pt-1"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Micro-Fine Pigments • Velvet Matte Bases • Luxury Soft-Touch Cases
                </p>
              </motion.div>

              <p 
                className="text-base sm:text-lg text-zinc-700 font-normal leading-relaxed max-w-2xl"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Launch your own makeup brand with custom shade matching, transfer-proof formulations, cruelty-free lab clearances, and quick-commerce distribution in 45–90 days.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-3">
                <Link
                  to="/contact"
                  className="px-9 py-4 rounded-full bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.16em] shadow-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span>Start Cosmetics Launch</span>
                  <ArrowRight size={15} />
                </Link>

                <a
                  href="#cosmetic-faqs"
                  className="px-8 py-4 rounded-full border-2 border-zinc-900 hover:border-[#FF5722] text-zinc-900 hover:text-[#FF5722] font-semibold text-xs sm:text-sm uppercase tracking-[0.16em] transition-all duration-300 text-center hover:bg-black/5"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span>Explore FAQs</span>
                </a>
              </div>

              {/* Verified Metrics Strip */}
              <div className="pt-8 grid grid-cols-3 gap-6 border-t border-zinc-200 text-left">
                <div>
                  <span className="text-2xl sm:text-4xl font-extrabold text-[#111111] block" style={{ fontFamily: "'Poppins', sans-serif" }}>45–90</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider block mt-1 font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>Days to Market</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-4xl font-extrabold text-[#FF5722] block" style={{ fontFamily: "'Poppins', sans-serif" }}>75–88%</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider block mt-1 font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>Gross Margins</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-4xl font-extrabold text-[#111111] block" style={{ fontFamily: "'Poppins', sans-serif" }}>100%</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider block mt-1 font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>CDSCO &amp; Cruelty-Free</span>
                </div>
              </div>
            </div>

            {/* Right Visual Box - Transparent bg, Sharp Corners, Removed Overlay Text */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-none overflow-hidden shadow-2xl border border-zinc-200 bg-transparent group">
                <img
                  src="/assets/Banner 2.png"
                  alt="Color Cosmetics Makeup Development"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                />
              </div>
            </div>

          </div>
        </section>

        {/* ── 2. THE 4-STAGE COLOR COSMETICS INCUBATION ROADMAP ──────────────── */}
        <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#FAFAFA] border-b border-zinc-200 select-none">
          <div className="max-w-7xl mx-auto space-y-12">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5722] block" style={{ fontFamily: "'Poppins', sans-serif" }}>
                TURNKEY ROADMAP
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#111111]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                THE 4-STAGE COSMETICS INCUBATION
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Proprietary shade formulation, micro-milling, stability testing, and high-velocity influencer seeding funnels.
              </p>
            </div>

            {/* 4 Cards Grid/Slider — No numbers, no icons, sharp boxes (rounded-none), pure Poppins content */}
            <div className="flex overflow-x-auto gap-6 snap-x pb-4 md:grid md:grid-cols-4 md:overflow-visible no-scrollbar">
              {[
                {
                  title: 'Shade & Pigment Engineering',
                  desc: 'Formulating transfer-proof, hydrating formulas with clean ingredients, natural mica, and skin-adaptive undertones.',
                },
                {
                  title: 'Custom Compacts & Soft-Touch Bottles',
                  desc: 'Airless pumps, magnetic closure compacts, wand applicators, and custom hot-stamped gold/silver luxury tooling.',
                },
                {
                  title: 'Dermatological & Heavy Metal Testing',
                  desc: 'Heavy metal lab panels, microbial clearance, ophthalmological testing for eye range, and CDSCO batch approvals.',
                },
                {
                  title: 'Influencer Seeding & Omnichannel Launch',
                  desc: 'Viral UGC unboxing kits, creator seeding, beauty filters, and direct Nykaa / Purplle / Amazon listings.',
                },
              ].map((phase, idx) => (
                <div
                  key={idx}
                  className="min-w-[260px] md:min-w-0 snap-start p-7 rounded-none bg-white border border-zinc-200/90 shadow-xs hover:shadow-xl hover:border-black transition-all duration-300 space-y-3 text-left group flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <h3 className="text-lg sm:text-xl font-bold text-[#111111] group-hover:text-[#FF5722] transition-colors leading-snug" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {phase.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Centered CTA Button */}
            <div className="flex justify-center pt-6">
              <Link
                to="/contact"
                className="px-9 py-4 rounded-full bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.16em] shadow-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span>Start Your Launch</span>
                <ArrowRight size={15} />
              </Link>
            </div>

          </div>
        </section>

        {/* ── 3. SEO & AEO FAQ SECTION FOR BANEGA BRAND ───────────────────────── */}
        <section id="cosmetic-faqs" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-white border-b border-zinc-200">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="text-left space-y-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5722] block" style={{ fontFamily: "'Poppins', sans-serif" }}>
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-[#111111]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                COSMETICS LAUNCH FAQS
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Direct transparent answers regarding formulation rights CDSCO testing low batch MOQs and distribution timelines with Banega Brand
              </p>
            </div>

            <div className="space-y-4">
              {COSMETIC_FAQS.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={idx}
                    className="border border-zinc-200 rounded-none bg-white overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-zinc-50 transition-colors"
                    >
                      <h3
                        className={`text-base sm:text-lg font-bold transition-colors ${
                          isOpen ? 'text-[#FF5722]' : 'text-[#111111]'
                        }`}
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {faq.q}
                      </h3>
                      <div className={`p-2 rounded-none transition-colors ${isOpen ? 'bg-[#FF5722] text-white' : 'bg-zinc-100 text-zinc-700'}`}>
                        {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-600 font-normal leading-relaxed border-t border-zinc-100" style={{ fontFamily: "'Poppins', sans-serif" }}>
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>
      </main>

      {/* Global Footer */}
      <FigmaFooter />
    </div>
  );
};

export default LaunchCosmeticPage;
