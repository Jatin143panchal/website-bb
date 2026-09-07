import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Workflow, 
  MessageCircle,
  FlaskConical,
  PackageCheck,
  Factory,
  Rocket
} from 'lucide-react';

import { Navbar } from '../../components/Navbar';
import { FigmaFooter } from '../../components/FigmaFooter';
import { PerfumeLaunchWizardModal, PerfumeWizardPrefill } from '../../components/perfume/PerfumeLaunchWizardModal';
import { PerfumeStickyCta } from '../../components/perfume/PerfumeStickyCta';

export const LaunchPerfumePage: React.FC = () => {
  const [isWizardOpen, setIsWizardOpen] = useState<boolean>(false);
  const [wizardPrefill, setWizardPrefill] = useState<PerfumeWizardPrefill>({});

  const handleOpenWizard = useCallback((prefillData?: PerfumeWizardPrefill) => {
    setWizardPrefill(prefillData || {});
    setIsWizardOpen(true);
  }, []);

  const handleCloseWizard = useCallback(() => {
    setIsWizardOpen(false);
  }, []);

  const handleScrollToContact = useCallback(() => {
    const elem = document.getElementById('perfume-contact');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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

        {/* Structured Data / Schema.org for SEO & AEO (Google AI Overviews, Perplexity, ChatGPT Search) */}
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
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-32 px-4 sm:px-8 lg:px-16 bg-[#080808] text-white overflow-hidden border-b border-zinc-800">
          {/* Subtle Luxury Glow */}
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#6B2276]/20 blur-[180px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#FF5722]/10 blur-[160px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-mono uppercase tracking-[0.2em] text-white/90">
                <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-pulse" />
                <span>01 / 04 • Turnkey Fragrance House</span>
              </div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal uppercase tracking-tight text-white leading-[1.02]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Perfume Manufacturer <br />
                <span className="font-light italic text-zinc-400">
                  in India.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-base sm:text-lg md:text-xl text-zinc-300 font-light leading-relaxed max-w-2xl"
                style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
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
                <button
                  type="button"
                  onClick={() => handleOpenWizard()}
                  className="group px-9 py-4.5 rounded-full bg-white hover:bg-[#FF5722] text-[#111111] hover:text-white font-bold text-xs sm:text-sm uppercase tracking-[0.18em] shadow-[0_10px_35px_rgba(255,255,255,0.15)] hover:shadow-[0_10px_35px_rgba(255,87,34,0.35)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-3 cursor-pointer"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <span>Start Your Perfume Brand</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={handleScrollToContact}
                  className="px-8 py-4.5 rounded-full border border-white/30 hover:border-white text-white font-medium text-xs sm:text-sm uppercase tracking-[0.18em] transition-all duration-300 hover:bg-white/5 cursor-pointer text-center"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <span>Talk to Fragrance Specialist</span>
                </button>
              </motion.div>

              {/* Highlight Metrics */}
              <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/10 text-left">
                <div>
                  <span className="text-2xl sm:text-3xl font-light text-white block" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>45–90</span>
                  <span className="text-[11px] text-zinc-400 font-mono uppercase tracking-widest block mt-0.5">Days to Market</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-light text-[#FF5722] block" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>100+</span>
                  <span className="text-[11px] text-zinc-400 font-mono uppercase tracking-widest block mt-0.5">Starting MOQ</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-light text-white block" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>100%</span>
                  <span className="text-[11px] text-zinc-400 font-mono uppercase tracking-widest block mt-0.5">IFRA &amp; CDSCO Certified</span>
                </div>
              </div>
            </div>

            {/* Right Hero Image Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-zinc-900 group">
                <img
                  src="/assets/perfume/venotine_ruby_midnight.jpg"
                  alt="Perfume Manufacturer in India - Turnkey Fragrance Launch"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white space-y-1.5 text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#FF5722]">
                      Turnkey Flacon Architecture
                    </span>
                  </div>
                  <h3 className="text-base font-semibold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    European Oils &amp; Custom Bottles
                  </h3>
                  <p className="text-xs text-zinc-300 font-light" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Compounding, glass flacons, magnetic caps, and rigid unboxing boxes.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* ── 02. SHORT INTRO ─────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#FAF8F5] border-b border-[#E8E5DF] select-none">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Flacon Card */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-zinc-200 bg-black group aspect-[4/5]">
                <img
                  src="/assets/perfume/108_luxury_velvet_model.jpg"
                  alt="Luxury Perfume Brand Development by Banega"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white text-left space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-300">
                    High Concentration Extrait &amp; EDP
                  </span>
                  <h4 className="text-base font-normal uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Engineered for 12+ Hour Longevity
                  </h4>
                </div>
              </div>
            </div>

            {/* Intro Copy */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6B2276] block">
                  02 — THE INCUBATION ADVANTAGE
                </span>
                <h2
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal uppercase tracking-tight text-[#111111] leading-[1.05]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  From Fragrance Idea <br />
                  <span className="font-light italic text-zinc-500">
                    to Finished Brand.
                  </span>
                </h2>
              </div>

              <p
                className="text-base sm:text-lg md:text-xl text-zinc-700 font-light leading-relaxed max-w-2xl"
                style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
              >
                Develop a distinctive fragrance, choose your bottle and packaging, and create a market-ready perfume with one experienced manufacturing partner.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => handleOpenWizard()}
                  className="inline-flex items-center gap-2.5 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] text-[#111111] hover:text-[#FF5722] transition-colors border-b-2 border-black hover:border-[#FF5722] pb-1 cursor-pointer"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <span>Explore Formulation Options</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

          </div>
        </section>


        {/* ── 03. SERVICES (4-IMAGE GRID) ─────────────────────────────────── */}
        <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6B2276] block">
                03 — COMPLETE CAPABILITIES
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal uppercase tracking-tight text-[#111111]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Everything Your Perfume Brand Needs
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-light" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Four core pillars coordinated under one unified incubation framework.
              </p>
            </div>

            {/* 4-Image Grid — One Visual Per Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Service 1: Fragrance Development */}
              <div className="group rounded-3xl bg-[#FAFAFA] border border-zinc-200 overflow-hidden hover:border-black hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                  <img
                    src="/assets/perfume/drefor_obsidian_botanical.jpg"
                    alt="Fragrance Development - Custom Olfactory Compounding"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-xs text-[10px] font-mono text-white uppercase tracking-wider">
                    01 • OLFACTORY R&amp;D
                  </div>
                </div>
                <div className="p-6 sm:p-7 space-y-2">
                  <h3 className="text-xl font-medium text-[#111111] group-hover:text-[#6B2276] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Fragrance Development
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Create a fragrance aligned with your brand and audience.
                  </p>
                </div>
              </div>

              {/* Service 2: Private Label Manufacturing */}
              <div className="group rounded-3xl bg-[#FAFAFA] border border-zinc-200 overflow-hidden hover:border-black hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                  <img
                    src="/assets/perfume/blush_en_bloom_trio.jpg"
                    alt="Private Label Manufacturing - Fast Track Perfume Production"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-xs text-[10px] font-mono text-white uppercase tracking-wider">
                    02 • PRIVATE LABEL
                  </div>
                </div>
                <div className="p-6 sm:p-7 space-y-2">
                  <h3 className="text-xl font-medium text-[#111111] group-hover:text-[#6B2276] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Private Label Manufacturing
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Launch quality perfumes under your own brand name.
                  </p>
                </div>
              </div>

              {/* Service 3: Bottle & Packaging */}
              <div className="group rounded-3xl bg-[#FAFAFA] border border-zinc-200 overflow-hidden hover:border-black hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                  <img
                    src="/assets/perfume/crystal_flint_flacon_mold.jpg"
                    alt="Bottle & Packaging - Custom Flacons and Rigid Cartons"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-xs text-[10px] font-mono text-white uppercase tracking-wider">
                    03 • PACKAGING
                  </div>
                </div>
                <div className="p-6 sm:p-7 space-y-2">
                  <h3 className="text-xl font-medium text-[#111111] group-hover:text-[#6B2276] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Bottle &amp; Packaging
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    Build a distinctive product with the right bottle, box and finishing.
                  </p>
                </div>
              </div>

              {/* Service 4: End-to-End Manufacturing */}
              <div className="group rounded-3xl bg-[#FAFAFA] border border-zinc-200 overflow-hidden hover:border-black hover:shadow-xl transition-all duration-300 flex flex-col justify-between text-left">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-100">
                  <img
                    src="/assets/perfume/tuesday_london_mayfair_royal.jpg"
                    alt="End-to-End Manufacturing - Sterile Cleanroom Production"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-xs text-[10px] font-mono text-white uppercase tracking-wider">
                    04 • STERILE GMP
                  </div>
                </div>
                <div className="p-6 sm:p-7 space-y-2">
                  <h3 className="text-xl font-medium text-[#111111] group-hover:text-[#6B2276] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    End-to-End Manufacturing
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    From approved formula to finished, packaged product.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ── 04. PROCESS ─────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#080808] text-white border-b border-zinc-800">
          <div className="max-w-7xl mx-auto space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF5722] block">
                04 — EXECUTION PIPELINE
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal uppercase tracking-tight text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Your Perfume. Our Process.
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-light" style={{ fontFamily: "'Outfit', sans-serif" }}>
                A streamlined process designed to take your concept from first idea to finished product.
              </p>
            </div>

            {/* Linear Pipeline Flow: IDEA → FRAGRANCE → BOTTLE → PACKAGING → MANUFACTURING → LAUNCH */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {[
                { step: '01', title: 'IDEA', sub: 'Brief & Market Fit', icon: FlaskConical },
                { step: '02', title: 'FRAGRANCE', sub: 'Accord Compounding', icon: Sparkles },
                { step: '03', title: 'BOTTLE', sub: 'Flacon & Hardware', icon: PackageCheck },
                { step: '04', title: 'PACKAGING', sub: 'Rigid Monocartons', icon: Layers },
                { step: '05', title: 'MANUFACTURING', sub: 'GMP Cleanroom Run', icon: Factory },
                { step: '06', title: 'LAUNCH', sub: 'Amazon & Nykaa Shelf', icon: Rocket },
              ].map((st, idx) => (
                <div
                  key={idx}
                  className="relative p-5 sm:p-6 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-[#FF5722] transition-all duration-300 flex flex-col justify-between space-y-4 text-left group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-500 font-bold group-hover:text-[#FF5722] transition-colors">
                      {st.step}
                    </span>
                    <st.icon size={16} className="text-zinc-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold uppercase tracking-wider text-white group-hover:text-[#FF5722] transition-colors">
                      {st.title}
                    </h3>
                    <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                      {st.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Process Cleanroom Video Player */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 bg-black aspect-video max-h-[520px] mx-auto group">
              <video
                src="/assets/product_idea_formulation.mp4"
                autoPlay
                loop
                muted
                playsInline
                controls
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-xs font-mono text-white/90 border border-white/20">
                ● GMP Sterile Compounding Line
              </div>
            </div>

          </div>
        </section>


        {/* ── 05. PRODUCT TYPES (4 VISUAL CARDS) ──────────────────────────── */}
        <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#FAF8F5] border-b border-[#E8E5DF]">
          <div className="max-w-7xl mx-auto space-y-14">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6B2276] block">
                05 — OLFACTORY RANGE
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal uppercase tracking-tight text-[#111111]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Create the Fragrance You Want
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-light" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Formulated across fine fragrance archetypes and consumer demographics.
              </p>
            </div>

            {/* 4 Visual Cards: MEN'S, WOMEN'S, UNISEX, LUXURY / NICHE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Card 1: MEN'S */}
              <div
                onClick={() => handleOpenWizard({ genderFocus: "Men's" })}
                className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-zinc-900 border border-zinc-300 shadow-md hover:shadow-2xl cursor-pointer transition-all duration-500"
              >
                <img
                  src="/assets/perfume/108_luxury_ocean_sunset.jpg"
                  alt="Men's Fragrance Manufacturing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left space-y-1 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">
                    CATEGORY 01
                  </span>
                  <h3 className="text-2xl font-normal uppercase tracking-wider text-white group-hover:text-[#FF5722] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    MEN'S
                  </h3>
                </div>
              </div>

              {/* Card 2: WOMEN'S */}
              <div
                onClick={() => handleOpenWizard({ genderFocus: "Women's" })}
                className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-zinc-900 border border-zinc-300 shadow-md hover:shadow-2xl cursor-pointer transition-all duration-500"
              >
                <img
                  src="/assets/perfume/blush_en_bloom_golden.jpg"
                  alt="Women's Fragrance Manufacturing - Blush en Bloom Golden Silk"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left space-y-1 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">
                    CATEGORY 02
                  </span>
                  <h3 className="text-2xl font-normal uppercase tracking-wider text-white group-hover:text-[#FF5722] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    WOMEN'S
                  </h3>
                </div>
              </div>

              {/* Card 3: UNISEX */}
              <div
                onClick={() => handleOpenWizard({ genderFocus: 'Unisex' })}
                className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-zinc-900 border border-zinc-300 shadow-md hover:shadow-2xl cursor-pointer transition-all duration-500"
              >
                <img
                  src="/assets/perfume/biographey_origin_roses.jpg"
                  alt="Unisex Fragrance Manufacturing - Biographey Origin"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left space-y-1 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">
                    CATEGORY 03
                  </span>
                  <h3 className="text-2xl font-normal uppercase tracking-wider text-white group-hover:text-[#FF5722] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    UNISEX
                  </h3>
                </div>
              </div>

              {/* Card 4: LUXURY / NICHE */}
              <div
                onClick={() => handleOpenWizard({ genderFocus: 'Luxury / Niche' })}
                className="group relative rounded-3xl overflow-hidden aspect-[3/4] bg-zinc-900 border border-zinc-300 shadow-md hover:shadow-2xl cursor-pointer transition-all duration-500"
              >
                <img
                  src="/assets/perfume/drefor_obsidian_botanical.jpg"
                  alt="Luxury and Niche Perfume Manufacturing - Drefor Obsidian"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left space-y-1 text-white">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">
                    CATEGORY 04
                  </span>
                  <h3 className="text-2xl font-normal uppercase tracking-wider text-white group-hover:text-[#FF5722] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    LUXURY / NICHE
                  </h3>
                </div>
              </div>

            </div>

          </div>
        </section>


        {/* ── 06. WHY BANEGA (3 CLEAN ICONS + SHORT COPY) ──────────────────── */}
        <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#6B2276] block">
                06 — THE BANEGA DIFFERENCE
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal uppercase tracking-tight text-[#111111]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Built for Brands, Not Just Bottles.
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-light" style={{ fontFamily: "'Outfit', sans-serif" }}>
                We bridge high-end European formulation chemistry with commercial Indian marketplace scale.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Item 1: Custom Development */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFA] border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-black transition-all duration-300 space-y-4 text-left group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-[#6B2276] group-hover:bg-[#6B2276] group-hover:text-white transition-all shadow-xs">
                  <FlaskConical size={24} />
                </div>
                <h3 className="text-2xl font-medium text-[#111111]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Custom Development
                </h3>
                <p className="text-sm text-zinc-600 font-light leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Create products around your brand vision.
                </p>
              </div>

              {/* Item 2: One Connected Partner */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFA] border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-black transition-all duration-300 space-y-4 text-left group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-[#6B2276] group-hover:bg-[#6B2276] group-hover:text-white transition-all shadow-xs">
                  <Workflow size={24} />
                </div>
                <h3 className="text-2xl font-medium text-[#111111]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  One Connected Partner
                </h3>
                <p className="text-sm text-zinc-600 font-light leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Fragrance, packaging and manufacturing under one roof/process.
                </p>
              </div>

              {/* Item 3: Launch-Focused */}
              <div className="p-8 sm:p-10 rounded-3xl bg-[#FAFAFA] border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-black transition-all duration-300 space-y-4 text-left group">
                <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-[#6B2276] group-hover:bg-[#6B2276] group-hover:text-white transition-all shadow-xs">
                  <Rocket size={24} />
                </div>
                <h3 className="text-2xl font-medium text-[#111111]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Launch-Focused
                </h3>
                <p className="text-sm text-zinc-600 font-light leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  From product concept to market-ready perfume.
                </p>
              </div>

            </div>

          </div>
        </section>


        {/* ── 07. FINAL CTA & INTAKE ──────────────────────────────────────── */}
        <section id="perfume-contact" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-[#080808] text-white border-t border-zinc-800 relative overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#6B2276]/20 blur-[180px] pointer-events-none rounded-full" />

          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF5722]">
                07 — READY TO BUILD YOUR BRAND?
              </span>
              <h2
                className="text-4xl sm:text-6xl md:text-7xl font-normal uppercase text-white tracking-tight leading-[1.05]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Ready to Create Your <br />
                <span className="font-light italic text-zinc-400">
                  Perfume Brand?
                </span>
              </h2>
              <p
                className="text-base sm:text-lg md:text-xl text-zinc-300 font-light max-w-xl mx-auto pt-2"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Tell us your idea. We'll help turn it into a fragrance, a product and a brand.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => handleOpenWizard()}
                className="w-full sm:w-auto px-10 py-5 rounded-full bg-gradient-to-r from-white via-zinc-100 to-white hover:bg-[#FF5722] hover:from-[#FF5722] hover:to-[#FF5722] text-[#111111] hover:text-white font-black text-xs sm:text-sm uppercase tracking-[0.2em] shadow-2xl active:scale-95 transition-all duration-300 cursor-pointer flex items-center justify-center gap-3"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <span>START YOUR PERFUME</span>
                <ArrowRight size={16} />
              </button>

              <a
                href="https://wa.me/918796755169?text=Hi%20Mayank%2C%20I%20want%20to%20launch%20my%20own%20Perfume%20Brand%20with%20Banega!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-9 py-5 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.18em] transition-all hover:bg-[#20bd5a] active:scale-95"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <MessageCircle size={17} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Global Footer */}
      <FigmaFooter />

      {/* Interactive Guided Launch Wizard Modal */}
      <PerfumeLaunchWizardModal
        isOpen={isWizardOpen}
        onClose={handleCloseWizard}
        prefill={wizardPrefill}
      />

      {/* Persistent Sticky CTA Bar */}
      <PerfumeStickyCta onOpenWizard={() => handleOpenWizard()} />
    </div>
  );
};

export default LaunchPerfumePage;
