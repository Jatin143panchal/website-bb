import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  ArrowRight, 
  Flame, 
  TrendingUp, 
  ShieldCheck, 
  Layers, 
  HelpCircle,
  Clock,
  Compass,
  CheckCircle2,
  ChevronDown,
  Activity,
  Heart,
  Smartphone,
  Check,
  ChevronRight,
  Sparkle,
  Zap,
  Globe,
  Award,
  Lock,
  Package,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { Navbar } from '../components/Navbar';
import { MainFooter } from '../components/MainFooter';

// Let's declare our types and lists of categories clearly
const categories = [
  { id: 'perfume', label: 'Luxury Perfume', hash: '#luxury-perfume' },
  { id: 'ayurveda', label: 'Ayurveda', hash: '#ayurveda' },
  { id: 'cosmetics', label: 'Cosmetics', hash: '#cosmetics' },
  { id: 'nutraceuticals', label: 'Nutraceuticals', hash: '#nutraceuticals' },
  { id: 'personal-care', label: 'Personal Care', hash: '#personal-care' },
  { id: 'pet-care', label: 'Pet Care', hash: '#pet-care' }
];

export const IndustriesPage = () => {
  const [activeCategory, setActiveCategory] = useState('perfume');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Smooth scroll logic
  const handleScrollToSection = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = categories.map(cat => document.getElementById(cat.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPosition) {
          setActiveCategory(categories[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative bg-[#FAFAFA] text-[#111111] selection:bg-[#D97706] selection:text-white font-sans overflow-x-hidden min-h-screen">
      <Helmet>
        <title>Industries We Launch – Perfume, Cosmetics, Ayurveda & D2C Brands | Banega Brand</title>
        <meta name="description" content="Explore the high-growth D2C consumer categories we launch in India: Luxury Fragrance, Ayurveda, Cosmetics & Skincare, Nutraceuticals, Personal Care, and Pet Care." />
        <meta name="keywords" content="D2C Industries India, Launch Perfume Brand, Launch Cosmetic Brand, Launch Ayurveda Brand, Launch Supplement Brand, Banega Brand" />
        <link rel="canonical" href="https://banegabrand.com/industries" />
        <meta property="og:title" content="Industries We Launch | Banega Brand – India's Leading Product Launch Company" />
        <meta property="og:description" content="Explore the high-growth consumer categories we launch: Perfume, Ayurveda, Cosmetics, Supplements, and Personal Care." />
        <meta property="og:url" content="https://banegabrand.com/industries" />
      </Helmet>
      <Navbar />

      <main className="pt-24">
        
        {/* ============================================================== */}
        {/* SECTION 1: INDUSTRIES HERO                                     */}
        {/* ============================================================== */}
        <section className="relative py-20 lg:py-32 px-6 overflow-hidden bg-white">
          <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
            
            {/* Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#111111]">
                INDUSTRIES WE HELP LAUNCH
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-sans font-black tracking-tight uppercase leading-[0.9] text-[#111111] max-w-5xl mb-6">
              Built For Founders Across <br />
              <span className="text-[#D97706]">High-Growth Categories</span>
            </h1>

            {/* Subheadline */}
            <p className="text-[#666666] text-base md:text-xl font-bold max-w-2xl leading-relaxed mb-10">
              Every industry has unique challenges, regulations, customer expectations and launch requirements. <br className="hidden md:block" />
              Our framework adapts to the needs of each category while maintaining a proven launch process.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto px-4 z-20">
              <Link 
                to="/contact"
                className="bg-[#D97706] text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#111111] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#D97706]/10 text-center whitespace-nowrap"
              >
                BOOK A STRATEGY CALL
              </Link>
              <button 
                onClick={() => handleScrollToSection('perfume')}
                className="bg-white text-[#111111] border border-[#EAEAEA] px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FAFAFA] hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center shadow-sm whitespace-nowrap"
              >
                EXPLORE INDUSTRIES
              </button>
            </div>

            {/* Premium Industry Showcase Horizontal Bento Panel */}
            <div className="w-full max-w-6xl bg-[#FAFAFA] border border-[#EAEAEA] rounded-[48px] p-8 md:p-12 relative overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-[#D97706]/2 pointer-events-none" />
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative z-10">
                {[
                  { title: 'Luxury Perfume', label: 'Fragrance Architecture & Sourcing', emoji: '✨', gradient: 'from-[#D97706]/10 to-transparent' },
                  { title: 'Ayurveda', label: 'Authentic Formulation & Trust', emoji: '🌿', gradient: 'from-emerald-500/10 to-transparent' },
                  { title: 'Cosmetics', label: 'Beauty Aesthetics & Shelf Appeal', emoji: '💄', gradient: 'from-pink-500/10 to-transparent' },
                  { title: 'Nutraceuticals', label: 'Supplements & Lab Sourcing', emoji: '💊', gradient: 'from-blue-500/10 to-transparent' },
                  { title: 'Personal Care', label: 'Daily Care Hygiene Sourcing', emoji: '🧴', gradient: 'from-indigo-500/10 to-transparent' },
                  { title: 'Pet Care', label: 'Veterinary Grade Growth Lines', emoji: '🐾', gradient: 'from-amber-500/10 to-transparent' }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="bg-white border border-[#EAEAEA] p-6 rounded-3xl flex flex-col justify-between items-start text-left hover:border-[#D97706]/30 transition-all group min-h-[170px]"
                  >
                    <div className="space-y-3">
                      <div className="w-10 h-10 rounded-2xl bg-[#FAFAFA] flex items-center justify-center text-lg shadow-xs group-hover:scale-110 transition-transform">
                        {item.emoji}
                      </div>
                      <h3 className="text-xs font-black uppercase tracking-tight text-[#111111] leading-tight">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-[10px] text-[#666666] font-semibold mt-4 leading-relaxed">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 2: STICKY INDUSTRY NAVIGATOR                          */}
        {/* ============================================================== */}
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-y border-[#EAEAEA] py-4 px-6 shadow-xs scrollbar-none">
          <div className="max-w-7xl mx-auto flex gap-3 overflow-x-auto justify-start md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleScrollToSection(cat.id)}
                className={`px-5 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest whitespace-nowrap transition-all border cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#111111] text-white border-transparent'
                    : 'bg-[#FAFAFA] text-[#666666] hover:bg-zinc-100 border-[#EAEAEA]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* SECTION 3: WHY INDUSTRY EXPERTISE MATTERS                      */}
        {/* ============================================================== */}
        <section className="py-24 md:py-32 px-6 bg-[#FAFAFA] border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto text-left">
            
            {/* Header copy */}
            <div className="max-w-3xl mb-20">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#D97706] block mb-4">
                CATEGORY KNOWLEDGE MATTERS
              </span>
              <h2 className="text-4xl md:text-6xl font-sans font-black tracking-tight uppercase leading-[0.95] text-[#111111]">
                Every Industry Has <br />
                <span className="text-[#D97706]">Different Challenges</span>
              </h2>
            </div>

            {/* 6 Grid points representing industry specialities */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
              {[
                { type: 'Perfume', topic: 'Positioning & Packaging', desc: 'Sourcing custom components, luxury collar weights, and fine French fragrance oils to support top retail price multipliers.' },
                { type: 'Ayurveda', topic: 'Compliance & Consumer Trust', desc: 'Registering AYUSH licenses and clarifying herbal efficacy testing statements to avoid legal drug control interventions.' },
                { type: 'Cosmetics', topic: 'Brand Perception & Shelf Appeal', desc: 'Acquiring micro-batch colors, stable hydration preservation chemistry, and high performance tactile packaging.' },
                { type: 'Nutraceuticals', topic: 'Regulations & Manufacturing', desc: 'Validating label ingredient statements with FSSAI guidance while coordinating clean encapsulation labs.' },
                { type: 'Personal Care', topic: 'Retention & Product Experience', desc: 'Refining formulas for consistent foam levels, scent retention stability, and skin-hydration metrics.' },
                { type: 'Pet Care', topic: 'Consumer Education & Trust', desc: 'Educating pet owners on formulation safety, vegan ingredient properties, and non-irritating skin claims.' }
              ].map((item, id) => (
                <div 
                  key={id}
                  className="bg-white border border-[#EAEAEA] p-8 rounded-[32px] flex flex-col justify-between min-h-[220px] transition-all hover:shadow-md hover:border-[#D97706]/20"
                >
                  <div className="space-y-4">
                    <span className="text-[9px] font-black uppercase tracking-widest text-[#D97706]">
                      {item.type} FOCUS AREA
                    </span>
                    <h3 className="text-lg md:text-xl font-black uppercase tracking-tight text-[#111111]">
                      {item.topic}
                    </h3>
                  </div>
                  <p className="text-xs text-[#666666] font-semibold leading-relaxed mt-6">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Statement statement */}
            <div className="max-w-4xl mx-auto text-center bg-white border border-[#EAEAEA] rounded-[32px] p-6.5 shadow-sm">
              <p className="text-sm md:text-base font-black text-[#111111]">
                A generic launch strategy doesn't work. <span className="text-[#D97706]">Each category requires specialized planning.</span>
              </p>
            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* INDUSTY SECTIONS 4-9 (LUXURY PERFUME TO PET CARE)              */}
        {/* ============================================================== */}
        
        {/* 1. LUXURY PERFUME SECTION */}
        <section id="perfume" className="py-24 md:py-32 px-6 bg-white border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7 text-left space-y-6">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] bg-amber-50 px-3.5 py-1.5 rounded-xl inline-block leading-none">
                  CATEGORY STAGE 01
                </span>
                <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
                  Launch A Luxury <br />
                  <span className="text-[#D97706]">Perfume Brand</span>
                </h2>
                <p className="text-sm md:text-base text-[#666666] font-semibold leading-relaxed">
                  India's fragrance market is evolving rapidly. Success requires more than a good fragrance. 
                  Packaging, positioning, storytelling and launch strategy all play a critical role. 
                  Banega Brand helps founders build premium fragrance brands from concept to market launch.
                </p>

                {/* Services Block */}
                <div className="space-y-4 pt-4 border-t border-zinc-100">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                    SPECIALIZED SERVICES ADDRESSED
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-left">
                    {[
                      'Perfume Development', 'Manufacturer Sourcing', 'Brand Naming', 'Packaging Design',
                      'Trademark Support', 'Website Development', 'Launch Assets', 'Growth Strategy'
                    ].map((svc, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                        <span className="text-xs font-black text-zinc-900 uppercase tracking-tight">{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metadata Info Footer */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-zinc-100">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 block">
                      TYPICAL TIMELINE
                    </span>
                    <p className="text-md font-black text-zinc-900 uppercase">
                      45–90 Days
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 block">
                      IDEAL FOR FOUNDERS OF
                    </span>
                    <p className="text-xs font-black text-[#D97706] uppercase">
                      Luxury Fragrances, Celebrity Brands, Niche Perfume Labels
                    </p>
                  </div>
                </div>

                {/* Action trigger Button */}
                <div className="pt-6">
                  <Link 
                    to="/launch-perfume-brand"
                    className="bg-[#D97706] text-white px-8 py-4.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#111111] transition-all hover:scale-105 active:scale-95 inline-block text-center shadow-lg shadow-[#D97706]/10"
                  >
                    LAUNCH MY PERFUME BRAND
                  </Link>
                </div>

                {/* Sourcing / Manufacturing Support Info Box */}
                <div className="p-6 bg-amber-500/[0.03] border border-[#D97706]/10 rounded-[28px] mt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D97706]">Manufacturing Support Available</span>
                  </div>
                  <p className="text-xs text-[#666666] font-semibold leading-relaxed">
                    Get pre-vetted contact support for custom perfume bottling, French fragrance oil blending, and IFRA safety check protocols.
                  </p>
                  <Link 
                    to="/manufacturer-network"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#D97706] hover:text-[#111111] transition-colors"
                  >
                    FIND A PERFUME MANUFACTURER
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Graphic Mock Component Representation */}
              <div className="lg:col-span-5 bg-[#FAFAFA] border border-[#EAEAEA] p-10 rounded-[48px] shadow-sm flex flex-col justify-between relative overflow-hidden self-stretch min-h-[380px]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[9px] font-black tracking-widest uppercase text-zinc-400">
                    PRODUCT GRAPHICS ARCHITECTURE
                  </span>
                  <div className="px-3 py-1 bg-white border border-[#EAEAEA] rounded-full text-[9px] font-black text-[#D97706] uppercase tracking-wider">
                    EFFICACY VALIDATION
                  </div>
                </div>

                {/* Symmetrical luxury design element simulating bottle assembly */}
                <div className="flex-grow flex items-center justify-center py-6">
                  <div className="relative w-36 h-48 border border-zinc-300 rounded-[28px] bg-white shadow-md flex flex-col justify-between p-4 flex-shrink-0">
                    <div className="absolute top-0 inset-x-0 h-4 bg-[#D97706]/10 border-b border-zinc-200 rounded-t-[28px] flex items-center justify-center">
                      <span className="text-[7px] font-black tracking-widest text-[#D97706] uppercase">20% INTENSE</span>
                    </div>
                    
                    {/* Bottle cap mock */}
                    <div className="w-16 h-8 bg-[#111111] rounded-lg -mt-8 mx-auto self-start border border-zinc-800 shadow-sm flex items-center justify-center">
                      <span className="text-[6px] font-black text-white uppercase tracking-widest">METALLIC CAP</span>
                    </div>

                    <div className="my-auto text-center space-y-1">
                      <p className="text-lg font-black uppercase text-zinc-900 tracking-tight leading-none leading-none">
                        AURORA
                      </p>
                      <p className="text-[8px] font-black uppercase tracking-[0.25em] text-[#D97706] leading-none">
                        PARFUM DE LUXE
                      </p>
                    </div>

                    <div className="text-center pt-2 border-t border-zinc-100 flex justify-between items-center text-[7px] font-bold text-[#666666]">
                      <span>100ML e</span>
                      <span>FRANCE BLEND</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-200/60 mt-4 flex items-center justify-between text-xs font-bold text-[#666666]">
                  <span>Formula Stability Certification</span>
                  <span className="text-emerald-500 font-black tracking-wider uppercase">APPROVED 100%</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. AYURVEDA SECTION */}
        <section id="ayurveda" className="py-24 md:py-32 px-6 bg-[#FAFAFA] border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Graphic Mock Left */}
              <div className="lg:col-span-5 bg-white border border-[#EAEAEA] p-10 rounded-[48px] shadow-sm flex flex-col justify-between relative overflow-hidden self-stretch min-h-[380px] order-last lg:order-first">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[9px] font-black tracking-widest uppercase text-zinc-400">
                    AYUSH COMPLIANCE CHECKLIST
                  </span>
                  <div className="px-3 py-1 bg-[#FAFAFA] border border-[#EAEAEA] rounded-full text-[9px] font-black text-emerald-600 uppercase tracking-wider">
                    COMPLIANT RUN
                  </div>
                </div>

                {/* Symmetrical design element simulating an ayurvedic elixir bottle */}
                <div className="flex-grow flex items-center justify-center py-6">
                  <div className="relative w-36 h-48 border border-emerald-250/20 rounded-full bg-stone-50/50 shadow-md flex flex-col justify-between p-6 flex-shrink-0">
                    <div className="text-center my-auto space-y-1">
                      <span className="text-[6px] font-black uppercase tracking-[0.3em] text-emerald-600">CLASSIC HERBAL</span>
                      <p className="text-lg font-black uppercase text-stone-900 tracking-tight leading-none">
                        VITALITY
                      </p>
                      <p className="text-[8px] font-bold text-stone-500 max-w-[100px] mx-auto leading-relaxed">
                        Pure cold-pressed botanicals & ashwagandha extract.
                      </p>
                    </div>

                    <div className="text-center pt-2 border-t border-zinc-150/60 flex justify-between items-center text-[7px] font-black text-emerald-700">
                      <span>AYURVEDIC FORMULA</span>
                      <span>50 ML</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-200/60 mt-4 flex items-center justify-between text-xs font-bold text-[#666666]">
                  <span>Lab Testing Protocols</span>
                  <span className="text-emerald-500 font-black tracking-wider uppercase">FSSAI / AYUSH ASSURED</span>
                </div>
              </div>

              {/* Copy Side */}
              <div className="lg:col-span-7 text-left space-y-6">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] bg-amber-50 px-3.5 py-1.5 rounded-xl inline-block leading-none">
                  CATEGORY STAGE 02
                </span>
                <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
                  Launch An <br />
                  <span className="text-[#D97706]">Ayurveda Brand</span>
                </h2>
                <p className="text-sm md:text-base text-[#666666] font-semibold leading-relaxed">
                  The Ayurveda industry continues to grow rapidly as consumers seek natural, authentic wellness solutions. 
                  Formulation quality, strict regulatory compliance, and brand trust are non-negotiable vectors. 
                  Banega Brand helps founders launch modern Ayurveda brands built for today's premium consumers.
                </p>

                {/* Services Block */}
                <div className="space-y-4 pt-4 border-t border-zinc-100">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                    AYURVEDA SPECIAL SERVICES
                  </p>
                  <div className="grid grid-cols-2 gap-3 text-left">
                    {[
                      'Product Development', 'Manufacturer Sourcing', 'Packaging Design',
                      'Compliance Guidance', 'Brand Identity Development', 'Website Development',
                      'Marketplace Setup', 'FDA/AYUSH Certification Support'
                    ].map((svc, i) => (
                      <div key={i} className="flex items-center gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="text-xs font-black text-zinc-900 uppercase tracking-tight">{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metadata Info Footer */}
                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-zinc-100">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 block">
                      TYPICAL TIMELINE
                    </span>
                    <p className="text-md font-black text-zinc-900 uppercase">
                      60–120 Days
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400 block">
                      SUITABLE CHANS
                    </span>
                    <p className="text-xs font-black text-[#D97706] uppercase">
                      Global Wellness Stores, D2C Commerce, Modern Pharmacy
                    </p>
                  </div>
                </div>

                {/* Action trigger Button */}
                <div className="pt-6">
                  <Link 
                    to="/launch-ayurveda-brand"
                    className="bg-[#D97706] text-white px-8 py-4.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#111111] transition-all hover:scale-105 active:scale-95 inline-block text-center shadow-lg shadow-[#D97706]/10"
                  >
                    LAUNCH MY AYURVEDA BRAND
                  </Link>
                </div>

                {/* Sourcing / Manufacturing Support Info Box */}
                <div className="p-6 bg-emerald-500/[0.03] border border-emerald-500/10 rounded-[28px] mt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600">Manufacturing Support Available</span>
                  </div>
                  <p className="text-xs text-[#666666] font-semibold leading-relaxed">
                    Access premium contract manufacturing partners pre-vetted for GMP and AYUSH-certified botanical extracts.
                  </p>
                  <Link 
                    to="/manufacturer-network"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-600 hover:text-[#111111] transition-colors"
                  >
                    FIND AN AYURVEDA MANUFACTURER
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. COSMETICS SECTION */}
        <section id="cosmetics" className="py-24 md:py-32 px-6 bg-white border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7 text-left space-y-6">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] bg-amber-50 px-3.5 py-1.5 rounded-xl inline-block leading-none">
                  CATEGORY STAGE 03
                </span>
                <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
                  Launch A <br />
                  <span className="text-[#D97706]">Cosmetic Brand</span>
                </h2>
                <p className="text-sm md:text-base text-[#666666] font-semibold leading-relaxed">
                  Beauty consumers demand intense trust, unmatched product aesthetics, and flawless cosmetic formulations. 
                  We help founders build cosmetic brands designed with high shelf-appeal, clean beauty alignments, and sustainable margin planning.
                </p>

                {/* Action button block */}
                <div className="pt-6">
                  <Link 
                    to="/launch-cosmetic-brand"
                    className="bg-[#D97706] text-white px-8 py-4.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#111111] transition-all hover:scale-105 active:scale-95 inline-block text-center shadow-lg shadow-[#D97706]/10"
                  >
                    LAUNCH MY COSMETIC BRAND
                  </Link>
                </div>

                {/* Sourcing / Manufacturing Support Info Box */}
                <div className="p-6 bg-pink-500/[0.03] border border-pink-500/10 rounded-[28px] mt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-pink-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-pink-600">Manufacturing Support Available</span>
                  </div>
                  <p className="text-xs text-[#666666] font-semibold leading-relaxed">
                    Connect with ISO-certified cosmetic laboratories specializing in premium clean lip and skin formulations.
                  </p>
                  <Link 
                    to="/manufacturer-network"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-pink-600 hover:text-[#111111] transition-colors"
                  >
                    FIND A COSMETIC MANUFACTURER
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Graphic Mock Component representation */}
              <div className="lg:col-span-5 bg-[#FAFAFA] border border-[#EAEAEA] p-10 rounded-[48px] shadow-sm flex flex-col justify-between relative overflow-hidden self-stretch min-h-[320px]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[9px] font-black tracking-widest uppercase text-zinc-400">
                    COSMETICS VISUAL STANDARD
                  </span>
                  <div className="px-3 py-1 bg-white border border-[#EAEAEA] rounded-full text-[9px] font-black text-pink-600 uppercase tracking-wider">
                    PREMIUM SPEC
                  </div>
                </div>

                <div className="flex-grow flex items-center justify-center py-6">
                  <div className="relative w-40 h-28 border border-zinc-200 rounded-[20px] bg-white shadow-md flex flex-col justify-between p-4 flex-shrink-0">
                    <div className="flex justify-between items-center">
                      <span className="text-[7px] font-black uppercase tracking-widest text-[#D97706]">MATTE COVERAGE</span>
                      <div className="w-4 h-4 rounded-full bg-pink-100 border border-pink-400" />
                    </div>
                    <div className="my-auto text-left">
                      <p className="text-md font-black uppercase text-zinc-950 tracking-tight leading-none">GLOW HYDRATE</p>
                      <p className="text-[7px] font-bold text-zinc-500 uppercase tracking-widest block mt-1">ORGANIC FACE OIL BLEND</p>
                    </div>
                    <span className="text-[7px] text-right font-black block tracking-widest text-zinc-400 uppercase">SPF 35+ PROTECTED</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-200/65 flex justify-between items-center text-[10px] font-semibold text-zinc-500">
                  <span>Dermatologist Approved Specs</span>
                  <span className="text-pink-600 font-bold uppercase">100% CLINICAL PASS</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 4. NUTRACEUTICAL SECTION */}
        <section id="nutraceuticals" className="py-24 md:py-32 px-6 bg-[#FAFAFA] border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Graphic Mock Left */}
              <div className="lg:col-span-5 bg-white border border-[#EAEAEA] p-10 rounded-[48px] shadow-sm flex flex-col justify-between relative overflow-hidden self-stretch min-h-[320px] order-last lg:order-first">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[9px] font-black tracking-widest uppercase text-zinc-400">
                    NUTRACEUTICAL COMPLIANCE
                  </span>
                  <div className="px-3 py-1 bg-[#FAFAFA] border border-[#EAEAEA] rounded-full text-[9px] font-black text-blue-600 uppercase tracking-wider">
                    LAB TESTED
                  </div>
                </div>

                <div className="flex-grow flex items-center justify-center py-6">
                  <div className="relative w-32 h-44 border border-zinc-200 bg-white rounded-3xl p-4 flex flex-col justify-between shadow-xs">
                    <div className="flex justify-between items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                      <span className="text-[7px] font-bold text-zinc-400 tracking-wider">60 CAPSULES</span>
                    </div>
                    
                    <div className="text-center my-auto space-y-1">
                      <p className="text-md font-black text-zinc-900 tracking-tight leading-none">BIOTIN BOOST</p>
                      <p className="text-[6px] text-zinc-400 uppercase font-black tracking-widest">HAIR & NAIL ENZYMES</p>
                    </div>

                    <div className="pt-2 border-t border-zinc-100 flex justify-between items-center text-[6.5px] font-black text-zinc-500">
                      <span>GMP STANDARDS</span>
                      <span>LAB VERIFIED</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-200/65 flex justify-between items-center text-[10px] font-semibold text-zinc-500">
                  <span>HACCP & GMP Clearance Sourcing</span>
                  <span className="text-blue-600 font-bold uppercase">SECURED RUN</span>
                </div>
              </div>

              {/* Copy Side */}
              <div className="lg:col-span-7 text-left space-y-6">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] bg-amber-50 px-3.5 py-1.5 rounded-xl inline-block leading-none">
                  CATEGORY STAGE 04
                </span>
                <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
                  Launch A <br />
                  <span className="text-[#D97706]">Nutraceutical Brand</span>
                </h2>
                <p className="text-sm md:text-base text-[#666666] font-semibold leading-relaxed">
                  Nutraceutical products require rigorous ingredient verification, high lab compliance standards, and flawless customer trust architectures. 
                  Banega Brand helps founders navigate complex dietary label requirements, FDA / FSSAI protocols, and access certified manufacturing labs quietly and confidently.
                </p>

                {/* Action button block */}
                <div className="pt-6">
                  <Link 
                    to="/launch-nutraceutical-brand"
                    className="bg-[#D97706] text-white px-8 py-4.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#111111] transition-all hover:scale-105 active:scale-95 inline-block text-center shadow-lg shadow-[#D97706]/10"
                  >
                    LAUNCH MY NUTRACEUTICAL BRAND
                  </Link>
                </div>

                {/* Sourcing / Manufacturing Support Info Box */}
                <div className="p-6 bg-blue-500/[0.03] border border-blue-500/10 rounded-[28px] mt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">Manufacturing Support Available</span>
                  </div>
                  <p className="text-xs text-[#666666] font-semibold leading-relaxed">
                    Onboard WHO-GMP contract facilities for FSSAI-compliant dietary supplements and clinical proteins.
                  </p>
                  <Link 
                    to="/manufacturer-network"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-blue-600 hover:text-[#111111] transition-colors"
                  >
                    FIND A NUTRACEUTICAL MANUFACTURER
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 5. PERSONAL CARE SECTION */}
        <section id="personal-care" className="py-24 md:py-32 px-6 bg-white border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              <div className="lg:col-span-7 text-left space-y-6">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] bg-amber-50 px-3.5 py-1.5 rounded-xl inline-block leading-none">
                  CATEGORY STAGE 05
                </span>
                <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
                  Launch A <br />
                  <span className="text-[#D97706]">Personal Care Brand</span>
                </h2>
                <p className="text-sm md:text-base text-[#666666] font-semibold leading-relaxed">
                  Consumers expect daily hygiene products to offer impeccable trust, high-quality consistency, and clear label benefit declarations. 
                  We support founders across shampoo, wash formulations, oral care, and body hygiene lines, ensuring top-tier chemical stability and stable profit margins.
                </p>

                {/* Action button block */}
                <div className="pt-6">
                  <Link 
                    to="/launch-personal-care-brand"
                    className="bg-[#D97706] text-white px-8 py-4.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#111111] transition-all hover:scale-105 active:scale-95 inline-block text-center shadow-lg shadow-[#D97706]/10"
                  >
                    LAUNCH MY PERSONAL CARE BRAND
                  </Link>
                </div>

                {/* Sourcing / Manufacturing Support Info Box */}
                <div className="p-6 bg-indigo-500/[0.03] border border-indigo-500/10 rounded-[28px] mt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-indigo-600">Manufacturing Support Available</span>
                  </div>
                  <p className="text-xs text-[#666666] font-semibold leading-relaxed">
                    Access sterile high-capacity factories for dermatologically-audited shampoos, body washes, and hygiene lines.
                  </p>
                  <Link 
                    to="/manufacturer-network"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-indigo-600 hover:text-[#111111] transition-colors"
                  >
                    FIND A PERSONAL CARE MANUFACTURER
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Graphic Mock Component representation */}
              <div className="lg:col-span-5 bg-[#FAFAFA] border border-[#EAEAEA] p-10 rounded-[48px] shadow-sm flex flex-col justify-between relative overflow-hidden self-stretch min-h-[320px]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[9px] font-black tracking-widest uppercase text-zinc-400">
                    PERSONAL HYGIENE STANDARDS
                  </span>
                  <div className="px-3 py-1 bg-white border border-[#EAEAEA] rounded-full text-[9px] font-black text-indigo-600 uppercase tracking-wider">
                    DAILY HYGIENE
                  </div>
                </div>

                <div className="flex-grow flex items-center justify-center py-6">
                  <div className="relative w-36 h-40 border border-zinc-200 rounded-[24px] bg-white shadow-md flex flex-col justify-between p-4 flex-shrink-0">
                    <div className="space-y-1">
                      <span className="text-[7px] font-black uppercase text-indigo-600 block">SULFATE FREE</span>
                      <p className="text-md font-black uppercase text-zinc-950 tracking-tight leading-none">NOURISH WASH</p>
                    </div>
                    <div className="text-center my-2 text-3xl">🧴</div>
                    <span className="text-[7px] text-zinc-400 font-bold block text-left">ESTABLISHED ACTIVE DERM COMPONENT</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-200/65 flex justify-between items-center text-[10px] font-semibold text-zinc-500">
                  <span>pH-Standard Balance Testing</span>
                  <span className="text-indigo-600 font-bold uppercase">STABLE LEVEL RUN</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 6. PET CARE SECTION */}
        <section id="pet-care" className="py-24 md:py-32 px-6 bg-[#FAFAFA] border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Graphic Mock Left */}
              <div className="lg:col-span-5 bg-white border border-[#EAEAEA] p-10 rounded-[48px] shadow-sm flex flex-col justify-between relative overflow-hidden self-stretch min-h-[320px] order-last lg:order-first">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[9px] font-black tracking-widest uppercase text-zinc-400">
                    PET FORMULATION METRIC
                  </span>
                  <div className="px-3 py-1 bg-[#FAFAFA] border border-[#EAEAEA] rounded-full text-[9px] font-black text-yellow-600 uppercase tracking-wider">
                    VETTED LABS
                  </div>
                </div>

                <div className="flex-grow flex items-center justify-center py-6">
                  <div className="relative w-32 h-44 border border-zinc-200 bg-white rounded-3xl p-4 flex flex-col justify-between shadow-xs">
                    <div className="flex justify-between items-start">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      <span>🐾</span>
                    </div>
                    
                    <div className="text-center my-auto space-y-1">
                      <p className="text-md font-black text-zinc-950 tracking-tight leading-none uppercase">PET SHAMPOO</p>
                      <p className="text-[6px] text-zinc-400 uppercase font-black tracking-widest">OATMEAL & JASMINE EXTRACT</p>
                    </div>

                    <div className="pt-2 border-t border-zinc-150 flex justify-between items-center text-[6px] font-black text-zinc-500">
                      <span>CRUELTY FREE</span>
                      <span>ORGANIC</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-200/65 flex justify-between items-center text-[10px] font-semibold text-zinc-500">
                  <span>Veterinary Grade Validation Testing</span>
                  <span className="text-yellow-600 font-bold uppercase">PET CERTIFIED</span>
                </div>
              </div>

              {/* Copy Side */}
              <div className="lg:col-span-7 text-left space-y-6">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] bg-amber-50 px-3.5 py-1.5 rounded-xl inline-block leading-none">
                  CATEGORY STAGE 06
                </span>
                <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
                  Launch A <br />
                  <span className="text-[#D97706]">Pet Care Brand</span>
                </h2>
                <p className="text-sm md:text-base text-[#666666] font-semibold leading-relaxed">
                  India's pet care and vet nourishment ecosystem is expanding at record speeds. 
                  Entrepreneurs require high-grade packaging storytelling, verified ingredient safety claims, and audited manufacturer lines. 
                  We lead your pet business parameters securely from validation to continuous scaling.
                </p>

                {/* Action button block */}
                <div className="pt-6">
                  <Link 
                    to="/launch-pet-care-brand"
                    className="bg-[#D97706] text-white px-8 py-4.5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#111111] transition-all hover:scale-105 active:scale-95 inline-block text-center shadow-lg shadow-[#D97706]/10"
                  >
                    LAUNCH MY PET CARE BRAND
                  </Link>
                </div>

                {/* Sourcing / Manufacturing Support Info Box */}
                <div className="p-6 bg-amber-500/[0.03] border border-amber-500/10 rounded-[28px] mt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D97706]">Manufacturing Support Available</span>
                  </div>
                  <p className="text-xs text-[#666666] font-semibold leading-relaxed">
                    Source non-toxic animal-safe formulation laboratories vetted for pet nutrition and certified grooming lines.
                  </p>
                  <Link 
                    to="/manufacturer-network"
                    className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#D97706] hover:text-[#111111] transition-colors"
                  >
                    FIND A PET CARE MANUFACTURER
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* WHY FOUNDERS CHOOSE BANEGA BRAND ACROSS INDUSTRIES             */}
        {/* ============================================================== */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto text-left">
            
            <div className="max-w-3xl mb-20 text-left">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#D97706] block mb-4">
                THE MULTI-CATEGORY EDGE
              </span>
              <h2 className="text-4xl md:text-6xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none mb-6">
                Why Founders Choose <br />
                <span className="text-[#D97706]">Banega Brand</span> Across Industries
              </h2>
            </div>

            {/* 4 Premium Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 text-left">
              {[
                { title: 'Category Expertise', desc: 'Highly tactical mapping of compliance, pricing matrices, and active ingredient constraints peculiar to each industry run.' },
                { title: 'Manufacturer Ecosystem', desc: 'Direct audited access to high-grade industrial partners across cosmetics, herbs, nutraceuticals, and perfumes.' },
                { title: 'Launch Framework', desc: 'Staged sequential workflows designed to block typical first-time developer errors and launch on schedule.' },
                { title: 'End-To-End Execution', desc: 'A single point of dynamic accountability covering validation, brand strategy, packages, trademarking, and marketplace setups.' }
              ].map((c, i) => (
                <div 
                  key={i}
                  className="bg-[#FAFAFA] border border-[#EAEAEA] p-8 rounded-[32px] flex flex-col justify-between min-h-[240px] transition-all hover:bg-white hover:border-[#D97706]/40 hover:shadow-xs group"
                >
                  <div className="space-y-4">
                    <span className="text-[10px] font-mono font-black text-zinc-400 group-hover:text-[#D97706]">
                      ADVANTAGE 0{i + 1}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-zinc-950 uppercase tracking-tight">
                      {c.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#666666] font-semibold leading-relaxed mt-6">
                    {c.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Statement Statement */}
            <div className="max-w-5xl mx-auto text-center mt-12 bg-[#FAFAFA] border border-[#EAEAEA] rounded-[32px] p-8">
              <p className="text-base md:text-xl font-black text-[#111111] uppercase tracking-tight leading-snug">
                One Framework. <span className="text-[#D97706]">Multiple Industries.</span> One Goal. <span className="text-[#D97706]">Successful Product Launches.</span>
              </p>
            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* OUR CATEGORY LAUNCH PROCESS                                    */}
        {/* ============================================================== */}
        <section className="py-24 bg-[#FAFAFA] border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
                One Framework. <br />
                <span className="text-[#D97706]">Adapted For Every Industry.</span>
              </h2>
            </div>

            {/* Horizontal Timeline Block */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 max-w-5xl mx-auto text-left mb-16">
              {[
                { step: '01', title: 'Validation', desc: 'Friction mapping' },
                { step: '02', title: 'Development', desc: 'Direct sourcing' },
                { step: '03', title: 'Brand Creation', desc: 'Luxury style pack' },
                { step: '04', title: 'Compliance', desc: 'Secure trademark' },
                { step: '05', title: 'Launch', desc: 'Channel deployment' },
                { step: '06', title: 'Scale', desc: 'Sustained expansion' }
              ].map((stage, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-[#EAEAEA] p-6 rounded-[24px] shadow-sm hover:border-[#D97706]/30 transition-all flex flex-col justify-between min-h-[140px]"
                >
                  <span className="text-xs font-mono font-black text-zinc-400">
                    STAGE {stage.step}
                  </span>
                  <div className="mt-4">
                    <p className="text-xs md:text-sm font-black text-zinc-950 uppercase tracking-tight leading-none mb-1">
                      {stage.title}
                    </p>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase tracking-tight">
                      {stage.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link 
                to="/process"
                className="bg-[#111111] hover:bg-[#D97706] text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:scale-105 active:scale-95 inline-block text-center"
              >
                VIEW OUR PROCESS
              </Link>
            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* CASE STUDY PREVIEW                                             */}
        {/* ============================================================== */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto">
            
            <div className="max-w-3xl mb-20 text-left">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#D97706] block mb-4">
                LAUNCHED REALITIES
              </span>
              <h2 className="text-4xl md:text-5xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
                Brands We've <br />
                <span className="text-[#D97706]">Helped Launch</span>
              </h2>
            </div>

            {/* Custom Case items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 text-left">
              {[
                { card: 'Perfume', name: 'AURORA SCENTS', tag: 'Luxury Fragrance D2C', metrics: 'Launched in 45 Days' },
                { card: 'Ayurveda', name: 'VEDA WELLNESS', tag: 'AYUSH certified tea extracts', metrics: 'Secure sourcing in 60 Days' },
                { card: 'Cosmetics', name: 'GLOW VELVET', tag: 'Hypoallergenic cosmetics set', metrics: '10k+ first batch units sold' },
                { card: 'Nutraceuticals', name: 'NUTRIGO LABS', tag: 'Multi-vitamin dietary pack', metrics: 'FSSAI Approved labels run' }
              ].map((c, i) => (
                <div 
                  key={i}
                  className="bg-[#FAFAFA] border border-[#EAEAEA] p-8 rounded-[36px] flex flex-col justify-between min-h-[260px] hover:bg-white hover:border-[#D97706]/40 hover:shadow-xs group transition-all duration-300"
                >
                  <div className="space-y-4">
                    <span className="text-[9px] font-black text-[#D97706] uppercase tracking-widest bg-amber-50 px-2.5 py-1 rounded inline-block">
                      {c.card}
                    </span>
                    <h3 className="text-lg md:text-xl font-black text-zinc-950 uppercase tracking-tight">
                      {c.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#666666]">
                      {c.tag}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-[11px] font-black text-[#D97706]">
                    <span>{c.metrics}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link 
                to="/contact"
                className="bg-white text-[#111111] border border-[#EAEAEA] hover:border-[#D97706]/30 px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all hover:scale-105 inline-block"
              >
                VIEW ALL CASE STUDIES
              </Link>
            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* FAQ SECTION                                                   */}
        {/* ============================================================== */}
        <section className="py-24 md:py-32 px-6 bg-[#FAFAFA] border-b border-[#EAEAEA]">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-16">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-4">
                COMMON INQUIRIES
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
                Frequently Asked <br />
                <span className="text-[#D97706]">Questions</span>
              </h2>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {[
                { q: 'Which industries do you support?', a: 'We specialize in luxury perfume, authentic ayurveda wellness formulations, cosmetic makeup sets, nutraceutical wellness ingredients, daily personal care and rapidly expanding pet hygiene categories.' },
                { q: 'Can I launch without previous experience?', a: 'Absolutely. Over 80% of our clients are first-time founders. Our 6-step framework is built specifically to bridge knowledge gaps, reduce regulatory friction and guide you securely from day one.' },
                { q: 'Do you help with manufacturing?', a: 'Yes. We provide direct access to verified, audited third-party manufacturing plants in India, overseeing custom formulation, packaging stability checks and production cost audits.' },
                { q: 'Can you support custom product categories?', a: 'Yes. If you are developing a unique, cross-categorical product, our structural validation and delivery system can adapt, ensuring compliance clearances and robust market launches.' }
              ].map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div 
                    key={idx}
                    className="bg-white border border-[#EAEAEA] rounded-[24px] overflow-hidden transition-all shadow-sm"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full px-8 py-6.5 text-left flex justify-between items-center gap-4 cursor-pointer focus:outline-none"
                    >
                      <span className="text-sm md:text-base font-black text-zinc-900 uppercase tracking-tight">
                        {faq.q}
                      </span>
                      <span className={`p-2 bg-[#FAFAFA] rounded-full border border-zinc-200 text-zinc-505 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#D97706]' : ''}`}>
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-8 pb-7 pt-1 text-xs md:text-sm text-[#666666] font-semibold leading-relaxed text-left border-t border-zinc-50">
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

        {/* ============================================================== */}
        {/* FINAL CTA                                                      */}
        {/* ============================================================== */}
        <section className="py-24 md:py-32 px-6 bg-white relative">
          <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-2">
              ESTABLISH YOUR CATEGORY EDGE
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none max-w-4xl mx-auto">
              Your Industry Is Unique. <br />
              Your Launch Strategy <br className="hidden md:block"/>
              <span className="text-[#D97706]">Should Be Too.</span>
            </h2>
            
            <p className="text-base md:text-xl text-[#666666] font-bold max-w-2xl mx-auto leading-relaxed">
              Work with a team that understands the challenges, opportunities and launch requirements of your category.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto px-4 pt-4">
              <Link 
                to="/contact"
                className="bg-[#D97706] text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#111111] transition-all hover:scale-105 active:scale-95 text-center w-full sm:w-auto shadow-xl shadow-[#D97706]/10"
              >
                BOOK MY STRATEGY CALL
              </Link>
              <Link 
                to="/services"
                className="bg-white text-[#111111] border border-[#EAEAEA] px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FAFAFA] hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center w-full sm:w-auto shadow-sm"
              >
                LAUNCH MY BRAND
              </Link>
            </div>
          </div>
        </section>

      </main>

      <MainFooter />
    </div>
  );
};
