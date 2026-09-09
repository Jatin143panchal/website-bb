import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

import { Navbar } from '../../components/Navbar';
import { FigmaFooter } from '../../components/FigmaFooter';
import { PerfumeStickyCta } from '../../components/perfume/PerfumeStickyCta';
import { PerfumeFullWidthVideoSection } from '../../components/perfume/PerfumeFullWidthVideoSection';

export const LaunchPerfumePage: React.FC = () => {

  return (
    <div className="relative bg-white text-[#111111] selection:bg-black selection:text-white font-sans overflow-x-hidden min-h-screen">
      <Helmet>
        <title>Perfume Manufacturer in India | Private Label Perfume | Banega</title>
        <meta
          name="description"
          content="Banega helps you create your own perfume brand with custom fragrance development, private label manufacturing, bottles, packaging and end-to-end production."
        />
        <meta
          name="keywords"
          content="perfume manufacturer in india, private label perfume, custom fragrance development, perfume bottle packaging, perfume contract manufacturing, luxury eau de parfum manufacturer"
        />
        <link rel="canonical" href="https://banegabrand.com/perfume-manufacturer" />

        {/* OpenGraph */}
        <meta property="og:title" content="Perfume Manufacturer in India | Private Label Perfume | Banega" />
        <meta
          property="og:description"
          content="Banega helps you create your own perfume brand with custom fragrance development, private label manufacturing, bottles, packaging and end-to-end production."
        />
        <meta property="og:url" content="https://banegabrand.com/perfume-manufacturer" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://banegabrand.com/assets/perfume/perfume-manufacturer-india.jpg" />

        {/* Structured Data / Schema.org for SEO & AEO */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://banegabrand.com/perfume-manufacturer#service',
                'name': 'Perfume Manufacturer in India & Private Label Fragrance Services',
                'provider': {
                  '@type': 'Organization',
                  'name': 'Banega Brand',
                  'url': 'https://banegabrand.com',
                  'logo': 'https://banegabrand.com/assets/banega_logo_official.png',
                },
                'serviceType': 'Turnkey Perfume Manufacturing, Custom Fragrance Development & Bottle Packaging',
                'areaServed': ['India', 'United States', 'United Arab Emirates', 'United Kingdom', 'Europe'],
                'description':
                  'Create your own perfume brand with Banega. From custom fragrance development to bottles, packaging and manufacturing, we help bring your fragrance idea to life.',
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
                    'name': 'Perfume Manufacturer in India',
                    'item': 'https://banegabrand.com/perfume-manufacturer',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                'mainEntity': [
                  {
                    '@type': 'Question',
                    'name': 'How does Banega help launch a perfume brand in India?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Banega provides turnkey end-to-end solutions: custom fragrance formulation with IFRA European oils, luxury bottle and packaging sourcing, batch manufacturing in GMP facilities, and digital marketplace launch.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'What is the starting MOQ for custom perfume manufacturing?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'We support flexible low minimum order quantities starting from 100 to 500 bottles per SKU, allowing founders to validate their brand without high capital risk.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'What fragrance categories do you manufacture?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': "We develop and manufacture Men's, Women's, Unisex, and Luxury/Niche Extrait de Parfum and Eau de Parfum formulations.",
                    },
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Global Navigation */}
      <Navbar />

      <main className="w-full">

        {/* ── 01. HERO ────────────────────────────────────────────────────── */}
        <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] overflow-hidden border-b border-zinc-200">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-left">

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold uppercase tracking-tight text-[#111111] leading-[1.08]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Perfume Manufacturer <br />
                <span className="text-[#FF5722]">in India</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-base sm:text-lg md:text-xl text-zinc-700 font-normal leading-relaxed max-w-2xl"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Create your own perfume brand with Banega. From custom fragrance development to bottles, packaging and manufacturing, we help bring your fragrance idea to life.
              </motion.p>

              {/* Primary CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col sm:flex-row gap-4 pt-3"
              >
                <Link
                  to="/contact"
                  className="group px-9 py-4.5 rounded-full bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span>Start Your Perfume Brand</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/contact"
                  className="px-8 py-4.5 rounded-full border-2 border-zinc-900 hover:border-[#FF5722] text-zinc-900 hover:text-[#FF5722] font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:bg-black/5 cursor-pointer text-center flex items-center justify-center"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span>Talk to Fragrance Specialist</span>
                </Link>
              </motion.div>

              {/* Highlight Metrics */}
              <div className="pt-8 grid grid-cols-3 gap-6 border-t border-zinc-200 text-left">
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#111111] block" style={{ fontFamily: "'Poppins', sans-serif" }}>45–90</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider block mt-1 font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>Days to Market</span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#FF5722] block" style={{ fontFamily: "'Poppins', sans-serif" }}>100+</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider block mt-1 font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>Starting MOQ</span>
                </div>
                <div>
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#111111] block" style={{ fontFamily: "'Poppins', sans-serif" }}>100%</span>
                  <span className="text-xs text-zinc-500 uppercase tracking-wider block mt-1 font-semibold" style={{ fontFamily: "'Poppins', sans-serif" }}>IFRA &amp; CDSCO Certified</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card - Clean Box without orange border */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-none overflow-hidden shadow-2xl bg-black border border-zinc-200 group">
                <img
                  src="/assets/perfume/venotine_ruby_midnight.jpg"
                  alt="Perfume Manufacturer in India - Turnkey Fragrance Launch"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                />
              </div>
            </div>

          </div>
        </section>


        {/* ── 02. SHORT INTRO ─────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#FAFAFA] border-b border-zinc-200 select-none">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Flacon Card - Sharp Box */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-none overflow-hidden shadow-xl border border-zinc-300 bg-black group aspect-[4/5]">
                <img
                  src="/assets/perfume/108_luxury_velvet_model.jpg"
                  alt="Luxury Perfume Brand Development by Banega"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-left space-y-1">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#FF5722]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    High Concentration Extrait &amp; EDP
                  </span>
                  <h4 className="text-base font-bold uppercase" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Engineered for 12+ Hour Longevity
                  </h4>
                </div>
              </div>
            </div>

            {/* Intro Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5722] block" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  The Incubation Advantage
                </span>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#111111] leading-[1.08]"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  From Fragrance Idea to Finished Brand
                </h2>
              </div>

              <p
                className="text-base sm:text-lg md:text-xl text-zinc-700 font-normal leading-relaxed max-w-2xl"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Develop a distinctive fragrance, choose your bottle and packaging, and create a market-ready perfume with one experienced manufacturing partner.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#111111] hover:text-[#FF5722] transition-colors border-b-2 border-black hover:border-[#FF5722] pb-1 cursor-pointer"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span>Explore Formulation Options</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>

          </div>
        </section>


        {/* ── 03. FULL-WIDTH CINEMATIC VIDEO WITH SCROLL ANIMATION ─────────── */}
        <PerfumeFullWidthVideoSection />


        {/* ── 04. LUXURY FRAGRANCE & BOTTLE SHOWCASE (ALIGNED 2-COLUMN GRID) ── */}
        <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto space-y-14">
            
            <div className="text-left space-y-3 max-w-3xl">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5722] block" style={{ fontFamily: "'Poppins', sans-serif" }}>
                LUXURY SHOWCASE
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-[#111111]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                CUSTOM FLACONS &amp; FORMULATIONS
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Custom glass flacons, bespoke metal caps, high-concentration Extrait de Parfum compounding, and luxury packaging architecture.
              </p>
            </div>

            {/* Row 1: Side-by-Side Aligned Image Grid (Ocean Current + Tuesday London) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch">
              
              {/* Image 1: 108 Luxury Ocean Current */}
              <Link
                to="/contact"
                className="group relative rounded-none overflow-hidden bg-black border border-zinc-200 shadow-xl aspect-[4/3] sm:aspect-[16/11] block"
              >
                <img
                  src="/assets/perfume/108_luxury_ocean_sunset.jpg"
                  alt="108 Luxury Ocean Current Perfume Bottle"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left space-y-1 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5722]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    108 LUXURY SERIES
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#FF5722] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    OCEAN CURRENT • EAU DE PARFUM
                  </h3>
                </div>
              </Link>

              {/* Image 2: Tuesday London Mayfair 21 */}
              <Link
                to="/contact"
                className="group relative rounded-none overflow-hidden bg-black border border-zinc-200 shadow-xl aspect-[4/3] sm:aspect-[16/11] block"
              >
                <img
                  src="/assets/perfume/tuesday_london_mayfair_royal.jpg"
                  alt="Tuesday London Mayfair 21 Perfume Bottle"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left space-y-1 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5722]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    TUESDAY LONDON
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#FF5722] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    MAYFAIR 21 • LUXURY COLLECTION
                  </h3>
                </div>
              </Link>

            </div>

            {/* Row 2: Side-by-Side Aligned Image Grid (Biographey Tray + Rougx Velvet Trio) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-stretch pt-2">
              
              {/* Left: 5-bottle Tray Collection */}
              <Link
                to="/contact"
                className="group relative rounded-none overflow-hidden bg-white border border-zinc-200 shadow-lg aspect-[4/3] sm:aspect-[16/11] block"
              >
                <img
                  src="/assets/perfume/biographey_origin_roses.jpg"
                  alt="Biographey Fragrance Collection"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left space-y-1 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5722]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    CAPSULE COLLECTION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#FF5722] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    BIOGRAPHEY FRAGRANCE RANGE
                  </h3>
                </div>
              </Link>

              {/* Right: Rougx Velvet Luxury Trio */}
              <Link
                to="/contact"
                className="group relative rounded-none overflow-hidden bg-black border border-zinc-200 shadow-lg aspect-[4/3] sm:aspect-[16/11] block"
              >
                <img
                  src="/assets/perfume/rougx_velvet_sakura.jpg"
                  alt="Rougx Velvet Luxury Perfumes"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left space-y-1 text-white">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#FF5722]" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    HIGH CONCENTRATION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:text-[#FF5722] transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    ROUGX EXTRAIT DE PARFUM
                  </h3>
                </div>
              </Link>

            </div>

            {/* Centered CTA */}
            <div className="flex justify-center pt-6">
              <Link
                to="/contact"
                className="px-9 py-4 rounded-full bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.16em] shadow-lg transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5 cursor-pointer"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span>Start Your Perfume Brand</span>
                <ArrowRight size={15} />
              </Link>
            </div>

          </div>
        </section>

      </main>

      {/* Global Footer */}
      <FigmaFooter />

      {/* Persistent Sticky CTA Bar */}
      <PerfumeStickyCta />
    </div>
  );
};

export default LaunchPerfumePage;
