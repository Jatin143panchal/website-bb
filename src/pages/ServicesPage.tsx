import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Search,
  Factory,
  PenTool,
  Scale,
  Rocket,
  TrendingUp,
  Plus,
  Minus
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { Navbar } from '../components/Navbar';
import { MainFooter } from '../components/MainFooter';
import { TrustSection } from '../components/TrustSection';

// FAQ Content mapping
const faqs = [
  {
    question: "Do I need a finalized product idea?",
    answer: "No. Many founders approach us at the idea stage. Our framework is custom-designed to extract, refine, test, and validate concepts to find clear product-market direction before you invest upfront capital."
  },
  {
    question: "Do you help with manufacturing?",
    answer: "Yes. Manufacturer sourcing, factory auditing, formulation chemistry validation, and sample supervision are core elements of our scale blueprint. We keep you protected from expensive production pitfalls."
  },
  {
    question: "Can you handle branding and packaging?",
    answer: "Yes. We manage your absolute identity, luxury structural packaging design, print production coordinate, trademark protections, and digital launch assets under one cohesive aesthetic timeline."
  },
  {
    question: "Can you help after launch?",
    answer: "Yes. We support scale consulting, strategic market expansion planning, merchant scaling, performance guidance, and localized distribution roadmaps to turn your product launch into a sustainable cash-flowing enterprise."
  }
];

export const ServicesPage = () => {
  // Navigation active node hover state for 3D ecosystem representation
  const [activeNode, setActiveNode] = useState<string | null>(null);

  // FAQ section expanded index
  const [openedFaqIndex, setOpenedFaqIndex] = useState<number | null>(null);

  return (
    <div id="services-page-container" className="relative bg-[#FAFAFA] text-[#111111] selection:bg-[#D97706] selection:text-white min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>End-to-End Product Launch Services | Banega Brand – India's Leading Product Launch Company</title>
        <meta name="description" content="Discover full-stack product launch services: formulation chemistry, factory sourcing, luxury packaging, regulatory compliance, and marketplace listings on Amazon, Flipkart & Nykaa." />
        <meta name="keywords" content="Product Launch Services, Brand Development Consultant, Private Label Formulation, Amazon Launch Services, Nykaa Listing Consultant, Banega Brand" />
        <link rel="canonical" href="https://banegabrand.com/services" />
        <meta property="og:title" content="End-to-End Product Launch Services | Banega Brand" />
        <meta property="og:description" content="Full-stack product launch solutions: formulation, factory sourcing, luxury packaging, and marketplace listings." />
        <meta property="og:url" content="https://banegabrand.com/services" />
      </Helmet>
      <Navbar />

      {/* Hero Section with Interactive 3D Nodes Network representation */}
      <section id="services-hero-section" className="relative pt-40 pb-28 md:pt-48 md:pb-40 px-6 overflow-hidden bg-white border-b border-zinc-200/50">
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-[#D97706]/5 rounded-full blur-[140px]" />
          <div className="absolute bottom-10 left-1/4 w-[400px] h-[400px] bg-[#D97706]/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Hero text */}
          <div className="lg:col-span-6 space-y-8 z-10 text-left">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#111111] text-[#D97706] rounded-full font-black text-[11px] uppercase tracking-[0.25em]"
              id="hero-badge-tag"
            >
              <Sparkles size={12} className="text-[#D97706] fill-[#D97706] animate-pulse" />
              END-TO-END PRODUCT LAUNCH SERVICES
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-[5.5rem] lg:text-[6rem] font-sans font-black tracking-tight leading-[0.9] text-[#111111] uppercase"
              id="hero-main-headline"
            >
              Everything <span className="text-[#666666] font-light">Required</span> <br />
              To Launch A Product. <br />
              <span className="text-[#D97706] italic font-serif font-light lowercase">under one roof.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg md:text-xl text-[#666666] font-semibold max-w-xl leading-relaxed"
              id="hero-subheading"
            >
              From product validation and manufacturing to branding, compliance, launch and growth — Banega Brand helps founders move from idea to market with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <Link
                id="hero-cta-button"
                to="/contact"
                className="inline-flex items-center gap-4 h-16 px-10 bg-[#111111] text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-[#D97706] transition-all transform hover:-translate-y-1 shadow-md hover:shadow-[#D97706]/10"
              >
                BOOK A STRATEGY CALL
                <ArrowRight size={18} className="text-white" />
              </Link>
            </motion.div>
          </div>

          {/* Interactive 3D Ecosystem Visual (Nodes Area) */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] md:min-h-[560px] rounded-[48px] bg-[#FAFAFA] border border-zinc-200 p-8 shadow-sm overflow-hidden">
            {/* Ambient Background Grid for nodes feel */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />

            <div className="relative w-full h-[400px] max-w-[480px]">
              {/* Dynamic Connecting Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {/* Line definitions with glow and active highlighting */}
                <defs>
                  <linearGradient id="glow-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#D97706" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#D97706" stopOpacity="0.1" />
                  </linearGradient>
                </defs>

                <g stroke="#e2e8f0" strokeWidth="1.5">
                  <line x1="50%" y1="50%" x2="18%" y2="22%" className={`transition-all duration-300 ${activeNode === 'validation' ? 'stroke-[#D97706] stroke-[3]' : ''}`} />
                  <line x1="50%" y1="50%" x2="50%" y2="15%" className={`transition-all duration-300 ${activeNode === 'manufacturing' ? 'stroke-[#D97706] stroke-[3]' : ''}`} />
                  <line x1="50%" y1="50%" x2="82%" y2="25%" className={`transition-all duration-300 ${activeNode === 'branding' ? 'stroke-[#D97706] stroke-[3]' : ''}`} />
                  <line x1="50%" y1="50%" x2="84%" y2="72%" className={`transition-all duration-300 ${activeNode === 'compliance' ? 'stroke-[#D97706] stroke-[3]' : ''}`} />
                  <line x1="50%" y1="50%" x2="50%" y2="85%" className={`transition-all duration-300 ${activeNode === 'launch' ? 'stroke-[#D97706] stroke-[3]' : ''}`} />
                  <line x1="50%" y1="50%" x2="18%" y2="75%" className={`transition-all duration-300 ${activeNode === 'growth' ? 'stroke-[#D97706] stroke-[3]' : ''}`} />
                </g>

                {/* Animated Pulsing Rings/Glow lines over active node links */}
                {activeNode && (
                  <g stroke="#D97706" strokeWidth="2" strokeDasharray="8 6">
                    {activeNode === 'validation' && <line x1="50%" y1="50%" x2="18%" y2="22%" className="animate-[dash_6s_linear_infinite]" />}
                    {activeNode === 'manufacturing' && <line x1="50%" y1="50%" x2="50%" y2="15%" className="animate-[dash_6s_linear_infinite]" />}
                    {activeNode === 'branding' && <line x1="50%" y1="50%" x2="82%" y2="25%" className="animate-[dash_6s_linear_infinite]" />}
                    {activeNode === 'compliance' && <line x1="50%" y1="50%" x2="84%" y2="72%" className="animate-[dash_6s_linear_infinite]" />}
                    {activeNode === 'launch' && <line x1="50%" y1="50%" x2="50%" y2="85%" className="animate-[dash_6s_linear_infinite]" />}
                    {activeNode === 'growth' && <line x1="50%" y1="50%" x2="18%" y2="75%" className="animate-[dash_6s_linear_infinite]" />}
                  </g>
                )}
              </svg>

              {/* Central Master Node: BANEGA BRAND */}
              <div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center"
                id="central-hq-node"
              >
                <div className="w-24 h-24 rounded-full bg-[#111111] border-4 border-zinc-250 flex items-center justify-center shadow-lg relative group">
                  <div className="absolute inset-0 rounded-full bg-[#D97706] opacity-25 animate-ping animate-duration-3000" />
                  <span className="font-serif font-black text-[#D97706] text-[11px] text-center uppercase tracking-tight leading-none px-2 z-10 select-none">
                    BANEGA<br />BRAND
                  </span>
                </div>
              </div>

              {/* Connected Node 1: Validation */}
              <div 
                className="absolute top-[22%] left-[18%] -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ transform: activeNode === 'validation' ? 'translate(-50%, -50%) scale(1.08)' : 'translate(-50%, -50%)' }}
                onMouseEnter={() => setActiveNode('validation')}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${activeNode === 'validation' ? 'bg-[#D97706] text-white shadow-md' : 'bg-white border border-zinc-200 text-[#111111] shadow-sm'}`}>
                    <Search size={22} className={activeNode === 'validation' ? 'animate-bounce' : ''} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#666666] mt-2 bg-white px-2 py-0.5 rounded-full border border-zinc-150">
                    Validation
                  </span>
                </div>
              </div>

              {/* Connected Node 2: Manufacturing */}
              <div 
                className="absolute top-[15%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ transform: activeNode === 'manufacturing' ? 'translate(-50%, -50%) scale(1.08)' : 'translate(-50%, -50%)' }}
                onMouseEnter={() => setActiveNode('manufacturing')}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${activeNode === 'manufacturing' ? 'bg-[#D97706] text-white shadow-md' : 'bg-white border border-zinc-200 text-[#111111] shadow-sm'}`}>
                    <Factory size={22} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#666666] mt-2 bg-white px-2 py-0.5 rounded-full border border-zinc-150">
                    Manufacturing
                  </span>
                </div>
              </div>

              {/* Connected Node 3: Branding */}
              <div 
                className="absolute top-[25%] left-[82%] -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ transform: activeNode === 'branding' ? 'translate(-50%, -50%) scale(1.08)' : 'translate(-50%, -50%)' }}
                onMouseEnter={() => setActiveNode('branding')}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${activeNode === 'branding' ? 'bg-[#D97706] text-white shadow-md' : 'bg-white border border-zinc-200 text-[#111111] shadow-sm'}`}>
                    <PenTool size={22} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#666666] mt-2 bg-white px-2 py-0.5 rounded-full border border-zinc-150">
                    Branding
                  </span>
                </div>
              </div>

              {/* Connected Node 4: Compliance */}
              <div 
                className="absolute top-[72%] left-[84%] -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ transform: activeNode === 'compliance' ? 'translate(-50%, -50%) scale(1.08)' : 'translate(-50%, -50%)' }}
                onMouseEnter={() => setActiveNode('compliance')}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${activeNode === 'compliance' ? 'bg-[#D97706] text-[#FFFFFF] shadow-md' : 'bg-white border border-zinc-200 text-[#111111] shadow-sm'}`}>
                    <Scale size={22} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#666666] mt-2 bg-white px-2 py-0.5 rounded-full border border-zinc-150">
                    Compliance
                  </span>
                </div>
              </div>

              {/* Connected Node 5: Launch */}
              <div 
                className="absolute top-[85%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ transform: activeNode === 'launch' ? 'translate(-50%, -50%) scale(1.08)' : 'translate(-50%, -50%)' }}
                onMouseEnter={() => setActiveNode('launch')}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${activeNode === 'launch' ? 'bg-[#D97706] text-[#FFFFFF] shadow-md' : 'bg-white border border-zinc-200 text-[#111111] shadow-sm'}`}>
                    <Rocket size={22} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#666666] mt-2 bg-white px-2 py-0.5 rounded-full border border-zinc-150">
                    Launch
                  </span>
                </div>
              </div>

              {/* Connected Node 6: Growth */}
              <div 
                className="absolute top-[75%] left-[18%] -translate-x-1/2 -translate-y-1/2 z-10"
                style={{ transform: activeNode === 'growth' ? 'translate(-50%, -50%) scale(1.08)' : 'translate(-50%, -50%)' }}
                onMouseEnter={() => setActiveNode('growth')}
                onMouseLeave={() => setActiveNode(null)}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all ${activeNode === 'growth' ? 'bg-[#D97706] text-[#FFFFFF] shadow-md' : 'bg-white border border-zinc-200 text-[#111111] shadow-sm'}`}>
                    <TrendingUp size={22} />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#666666] mt-2 bg-white px-2 py-0.5 rounded-full border border-zinc-150">
                    Growth
                  </span>
                </div>
              </div>
            </div>

            {/* Hover Explainer Tooltip Banner */}
            <div className="absolute bottom-4 left-6 right-6 p-4 rounded-2xl bg-white border border-zinc-200 shadow-md text-center backdrop-blur-md">
              <span className="text-xs transition-opacity duration-300 font-bold text-[#111111]">
                {activeNode === 'validation' && "✔ Service 01: Validate metrics & verify market demand before raw formulation capital investment."}
                {activeNode === 'manufacturing' && "✔ Service 02: Identify audited compound factory partners & supervise custom batches safely."}
                {activeNode === 'branding' && "✔ Service 03: Establish customized storytelling guidelines & premium logos mapping memory spaces."}
                {activeNode === 'compliance' && "✔ Service 05: Verify EAN barcodes, corporate trademarks & regulatory registrations."}
                {activeNode === 'launch' && "✔ Service 07: Track storefront switches over Shopify & target critical first sales volume."}
                {activeNode === 'growth' && "✔ Service 08: Implement geographical scaling roadmap and sustainable consulting loops."}
                {!activeNode && "Hover over any ecosystem nodes to trace our direct launch acceleration blueprint."}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Brands We've Launched Carousel */}
      <TrustSection />

      {/* 8 PREMIUM SERVICES SEGMENT - STYLED STRIPE/LINEAR MODE */}
      <section id="detailed-services-container" className="py-24 space-y-44 bg-[#FAFAFA]">
        
        {/* Service 01: Product Discovery & Validation */}
        <div id="service-node-validation" className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-black text-[#D97706] uppercase tracking-[0.4em] block">
              SERVICE 01 • PRODUCT DISCOVERY & VALIDATION
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#111111] uppercase tracking-tight">
              Validate Before You Invest.
            </h2>
            <div className="h-1.5 w-16 bg-[#D97706] rounded" />
            <p className="text-lg font-semibold text-[#666666]">
              Most founders fail before launch because they build products nobody wants. Our validation process helps identify opportunities, reduce risk and build confidence before investment.
            </p>
            <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm space-y-3">
              <span className="text-[10px] font-black text-[#666666] uppercase tracking-widest block">Core Deliverables</span>
              <div className="grid grid-cols-2 gap-3">
                {["Market Research", "Category Analysis", "Competitor Mapping", "Consumer Insights", "Opportunity Validation", "Product Direction"].map((item, id) => (
                  <div key={id} className="flex items-center gap-2.5 font-bold text-[#111111] text-sm">
                    <CheckCircle2 size={16} className="text-[#D97706]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-2 text-xs font-black uppercase text-[#111111] flex items-center gap-2">
              <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded">OUTCOME:</span> Launch with clarity instead of assumptions.
            </div>
          </div>

          {/* S1 Image representation */}
          <div className="lg:col-span-6 bg-white border border-zinc-200 rounded-[36px] p-2 shadow-sm overflow-hidden h-[400px] md:h-[500px]">
            <img src="/assets/showcase/1.webp" alt="Market Research & Validation" className="w-full h-full object-cover rounded-[32px]" />
          </div>
        </div>

        {/* Changed dark bg-zinc-950 and border to pristine light mode background */}
        <div className="bg-[#FAFAFA] py-12 border-y border-zinc-200/50">
          
          {/* Service 02: Product Development & Sourcing */}
          <div id="service-node-manufacturing" className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* S2 Image representation Left */}
            <div className="lg:col-span-6 bg-white border border-zinc-200 rounded-[36px] p-2 shadow-sm overflow-hidden h-[400px] md:h-[500px]">
              <img src="/assets/1.webp" alt="Manufacturing Partner Network" className="w-full h-full object-cover rounded-[32px]" />
            </div>

            {/* S2 Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-[11px] font-black text-[#D97706] uppercase tracking-[0.4em] block">
                SERVICE 02 • MANUFACTURER SOURCING & NETWORK
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#111111] uppercase tracking-tight">
                Access A Trusted Manufacturing Ecosystem
              </h2>
              <div className="h-1.5 w-16 bg-[#D97706] rounded" />
              <div className="space-y-4">
                <p className="text-lg font-bold text-[#111111] leading-snug">
                  Finding the right manufacturer is one of the most important decisions in a product launch.
                </p>
                <p className="text-base font-semibold text-[#666666] leading-relaxed">
                  Banega Brand helps founders identify, evaluate and coordinate with trusted manufacturing partners across multiple industries.
                </p>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm space-y-3">
                <span className="text-[10px] font-black text-[#666666] uppercase tracking-widest block">Service Features</span>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Manufacturer Identification",
                    "Factory Evaluation",
                    "Sampling Support",
                    "Vendor Coordination",
                    "MOQ Guidance",
                    "Production Planning"
                  ].map((item, id) => (
                    <div key={id} className="flex items-center gap-2.5 font-bold text-[#111111] text-sm">
                      <CheckCircle2 size={16} className="text-[#D97706]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/manufacturer-network"
                  className="inline-flex items-center justify-center gap-3 px-6 py-4 bg-[#111111] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#D97706] transition-all transform hover:-translate-y-0.5 shadow-md shadow-black/5 text-center min-h-[44px]"
                >
                  EXPLORE MANUFACTURER NETWORK
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Service 03: Brand Strategy & Identity */}
        <div id="service-node-branding" className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-black text-[#D97706] uppercase tracking-[0.4em] block">
              SERVICE 03 • BRAND STRATEGY & IDENTITY
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#111111] uppercase tracking-tight">
              Create A Brand People Remember.
            </h2>
            <div className="h-1.5 w-16 bg-[#D97706] rounded" />
            <p className="text-lg font-semibold text-[#666666]">
              A product gets noticed. A brand gets chosen. We help founders create identities that stand out and build trust.
            </p>
            <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm space-y-3">
              <span className="text-[10px] font-black text-[#666666] uppercase tracking-widest block">Core Deliverables</span>
              <div className="grid grid-cols-2 gap-3">
                {["Brand Strategy", "Brand Naming", "Logo Design", "Brand Guidelines", "Visual Identity", "Packaging Direction"].map((item, id) => (
                  <div key={id} className="flex items-center gap-2.5 font-bold text-[#111111] text-sm">
                    <CheckCircle2 size={16} className="text-[#D97706]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-2 text-xs font-black uppercase text-[#111111] flex items-center gap-2">
              <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded">OUTCOME:</span> A professional and memorable market presence.
            </div>
          </div>

          {/* S3 Image Representation Right */}
          <div className="lg:col-span-6 bg-white border border-zinc-200 rounded-[36px] p-2 shadow-sm overflow-hidden h-[400px] md:h-[500px]">
            <img src="/assets/showcase/origin.webp" alt="Brand Strategy & Identity" className="w-full h-full object-cover rounded-[32px]" />
          </div>
        </div>

        {/* Removed dark navy layout to light layout */}
        <div className="bg-[#FAFAFA] py-12 border-y border-zinc-200/50">
          <div id="service-node-packaging" className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* S4 Image Container Left */}
            <div className="lg:col-span-6 bg-white border border-zinc-200/80 rounded-[36px] p-2 shadow-sm overflow-hidden h-[400px] md:h-[500px]">
              <img src="/assets/1212.webp" alt="Packaging Design" className="w-full h-full object-cover rounded-[32px]" />
            </div>

            {/* S4 Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-[11px] font-black text-[#D97706] uppercase tracking-[0.4em] block">
                SERVICE 04 • PACKAGING DESIGN
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#111111] uppercase tracking-tight">
                Packaging That Builds Trust Instantly.
              </h2>
              <div className="h-1.5 w-16 bg-[#D97706] rounded" />
              <p className="text-lg font-semibold text-[#666666]">
                Your packaging is often your first sales pitch. We create packaging systems that communicate value and professionalism.
              </p>
              <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm space-y-3">
                <span className="text-[10px] font-black text-[#666666] uppercase tracking-widest block">Core Deliverables</span>
                <div className="grid grid-cols-2 gap-3">
                  {["Packaging Design", "Label Design", "Print Ready Files", "Packaging Mockups", "Vendor Coordination"].map((item, id) => (
                    <div key={id} className="flex items-center gap-2.5 font-bold text-[#111111] text-sm">
                      <CheckCircle2 size={16} className="text-[#D97706]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-2 text-xs font-black uppercase text-[#111111] flex items-center gap-2">
                <span className="text-[#D97706] bg-[#D97706]/10 px-2 py-1 rounded">OUTCOME:</span> Packaging that attracts attention and increases trust.
              </div>
            </div>
          </div>
        </div>

        {/* Service 05: Trademark & Compliance */}
        <div id="service-node-compliance" className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-black text-[#D97706] uppercase tracking-[0.4em] block">
              SERVICE 05 • TRADEMARK & COMPLIANCE
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#111111] uppercase tracking-tight">
              Launch Without Legal Roadblocks.
            </h2>
            <div className="h-1.5 w-16 bg-[#D97706] rounded" />
            <p className="text-lg font-semibold text-[#666666]">
              Many product launches are delayed because of missing registrations and compliance requirements. We help founders stay prepared.
            </p>
            <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm space-y-3">
              <span className="text-[10px] font-black text-[#666666] uppercase tracking-widest block">Core Deliverables</span>
              <div className="grid grid-cols-2 gap-3">
                {["Trademark Guidance", "GST Support", "Barcode Registration", "Compliance Assistance", "Documentation Support"].map((item, id) => (
                  <div key={id} className="flex items-center gap-2.5 font-bold text-[#111111] text-sm">
                    <CheckCircle2 size={16} className="text-[#D97706]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-2 text-xs font-black uppercase text-[#111111] flex items-center gap-2">
              <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded">OUTCOME:</span> A launch-ready business.
            </div>
          </div>

          {/* S5 Image representation Right */}
          <div className="lg:col-span-6 bg-white border border-zinc-200 rounded-[36px] p-2 shadow-sm overflow-hidden h-[400px] md:h-[500px]">
            <img src="/assets/roadmap/2.webp" alt="Trademark and Compliance" className="w-full h-full object-cover rounded-[32px]" />
          </div>
        </div>

        {/* Removed dark bg-zinc-950 and border to light storefront */}
        <div className="bg-[#FAFAFA] py-12 border-y border-zinc-200/50">
          <div id="service-node-website" className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* S6 Image Representation Left */}
            <div className="lg:col-span-6 bg-white border border-zinc-200 rounded-[36px] p-2 shadow-sm overflow-hidden h-[400px] md:h-[500px]">
              <img src="/assets/klust_landing_page.webp" alt="Website & Marketplace Launch" className="w-full h-full object-cover object-top rounded-[32px]" />
            </div>

            {/* S6 Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-[11px] font-black text-[#D97706] uppercase tracking-[0.4em] block">
                SERVICE 06 • WEBSITE & MARKETPLACE LAUNCH
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#111111] uppercase tracking-tight">
                Build Your Digital Storefront.
              </h2>
              <div className="h-1.5 w-16 bg-[#D97706] rounded" />
              <p className="text-lg font-semibold text-[#666666]">
                A successful launch requires more than a website. It requires a complete digital foundation. We establish elegant, highly responsive Shopify solutions and listing coordinates across marketplaces.
              </p>
              <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm space-y-3">
                <span className="text-[10px] font-black text-[#666666] uppercase tracking-widest block">Core Deliverables</span>
                <div className="grid grid-cols-2 gap-3">
                  {["Website Design", "Shopify Setup", "Marketplace Setup", "Product Listing Support", "Payment Integration", "Launch Assets"].map((item, id) => (
                    <div key={id} className="flex items-center gap-2.5 font-bold text-[#111111] text-sm">
                      <CheckCircle2 size={16} className="text-[#D97706]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-2 text-xs font-black uppercase text-[#111111] flex items-center gap-2">
                <span className="text-[#D97706] bg-[#D97706]/10 px-2 py-1 rounded">OUTCOME:</span> A professional online presence.
              </div>
            </div>
          </div>
        </div>

        {/* Service 07: Product Launch Execution */}
        <div id="service-node-launch" className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-black text-[#D97706] uppercase tracking-[0.4em] block">
              SERVICE 07 • PRODUCT LAUNCH EXECUTION
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#111111] uppercase tracking-tight">
              Launch With Confidence.
            </h2>
            <div className="h-1.5 w-16 bg-[#D97706] rounded" />
            <p className="text-lg font-semibold text-[#666666]">
              The launch phase is where preparation becomes reality. We help coordinate the entire process, including visual assets, go-live checklists, logistics, and operational parameters safely.
            </p>
            <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm space-y-3">
              <span className="text-[10px] font-black text-[#666666] uppercase tracking-widest block">Core Deliverables</span>
              <div className="grid grid-cols-2 gap-3">
                {["Launch Planning", "Asset Preparation", "Campaign Coordination", "Marketplace Launch", "Website Go-Live", "Operational Support"].map((item, id) => (
                  <div key={id} className="flex items-center gap-2.5 font-bold text-[#111111] text-sm">
                    <CheckCircle2 size={16} className="text-[#D97706]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-2 text-xs font-black uppercase text-[#111111] flex items-center gap-2">
              <span className="text-emerald-600 bg-emerald-50 px-2 py-1 rounded">OUTCOME:</span> A structured and confident market entry.
            </div>
          </div>

          {/* S7 Image representation Right */}
          <div className="lg:col-span-6 bg-white border border-zinc-200 rounded-[36px] p-2 shadow-sm overflow-hidden h-[400px] md:h-[500px]">
            <video src="/assets/showcase/launch_preview.mp4" autoPlay loop muted playsInline className="w-full h-full object-cover rounded-[32px]" />
          </div>
        </div>

        {/* Removed dark bg-zinc-950 and border to light scale metrics */}
        <div className="bg-[#FAFAFA] py-12 border-y border-zinc-200/50">
          <div id="service-node-growth" className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* S8 Image layout Left */}
            <div className="lg:col-span-6 bg-white border border-zinc-200 rounded-[36px] p-2 shadow-sm overflow-hidden h-[400px] md:h-[500px]">
              <img src="/assets/roadmap/3.webp" alt="Growth and Scale" className="w-full h-full object-cover rounded-[32px]" />
            </div>

            {/* S8 Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="text-[11px] font-black text-[#D97706] uppercase tracking-[0.4em] block">
                SERVICE 08 • GROWTH & SCALE CONSULTING
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-[#111111] uppercase tracking-tight">
                Turn A Launch Into A Business.
              </h2>
              <div className="h-1.5 w-16 bg-[#D97706] rounded" />
              <p className="text-lg font-semibold text-[#666666]">
                Launching is only the beginning. We help founders build systems for sustainable growth, expansion roadmap metrics, and physical retail expansion guides.
              </p>
              <div className="bg-white rounded-3xl p-6 border border-zinc-200 shadow-sm space-y-3">
                <span className="text-[10px] font-black text-[#666666] uppercase tracking-widest block">Core Deliverables</span>
                <div className="grid grid-cols-2 gap-3">
                  {["Distribution Guidance", "Growth Consulting", "Market Expansion Planning", "Sales Strategy", "Scale Roadmap"].map((item, id) => (
                    <div key={id} className="flex items-center gap-2.5 font-bold text-[#111111] text-sm">
                      <CheckCircle2 size={16} className="text-[#D97706]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="pt-2 text-xs font-black uppercase text-[#111111] flex items-center gap-2">
                <span className="text-[#D97706] bg-[#D97706]/10 px-2 py-1 rounded">OUTCOME:</span> Long-term business growth.
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* PROCESS SECTION: Horizontal Framework Timeline */}
      <section id="services-process-framework" className="py-24 bg-[#FAFAFA] border-y border-zinc-200 relative">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-[#D97706]/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#D97706] uppercase block" id="process-framework-mini">
              OUR FRAMEWORK BLUEPRINT
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#111111] uppercase leading-none tracking-tight" id="process-framework-headline">
              One Framework.<br /> Six Stages. One Goal.<br />
              <span className="text-[#D97706] font-serif italic font-light lowercase">a successful product launch.</span>
            </h2>
          </div>

          {/* Interactive Responsive Stages Pathway */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {[
              { id: "01", name: "Discovery", desc: "Validate category opportunities, competitive mappings & risk profiles.", icon: Search },
              { id: "02", name: "Development", desc: "Evaluate audited manufacturers, chemistry formulas, compound batches.", icon: Factory },
              { id: "03", name: "Branding", desc: "Design outstanding luxury logo design vectors & absolute style identity.", icon: PenTool },
              { id: "04", name: "Preparation", desc: "Acquire trademark indices, GST verify systems, packaging mockups.", icon: Scale },
              { id: "05", name: "Launch", desc: "Publish storefront Shopify systems, marketplace layouts with payments.", icon: Rocket },
              { id: "06", name: "Scale", desc: "Trace arr growth metric patterns & physical distribution guidelines.", icon: TrendingUp },
            ].map((stage, idx) => {
              const IconComp = stage.icon;
              return (
                <div 
                  key={stage.id} 
                  className="relative p-8 rounded-[32px] bg-white border border-zinc-200/80 hover:shadow-lg hover:border-[#D97706]/25 transition-all group overflow-hidden shadow-sm"
                  id={`process-blueprint-stage-${idx}`}
                >
                  <div className="absolute top-0 right-0 p-4 font-mono font-black text-lg text-zinc-200 group-hover:text-[#D97706]/20 transition-colors">
                    {stage.id}
                  </div>
                  
                  <div className="w-12 h-12 bg-zinc-50 rounded-2xl flex items-center justify-center border border-zinc-200 text-[#111111] mb-6 group-hover:bg-[#D97706] group-hover:text-white transition-colors duration-500">
                    <IconComp size={20} />
                  </div>

                  <h4 className="text-lg font-black text-[#111111] uppercase tracking-tight mb-2">
                    {stage.name}
                  </h4>
                  <p className="text-[#666666] font-semibold text-xs leading-relaxed">
                    {stage.desc}
                  </p>

                  <div className="absolute bottom-0 inset-x-0 h-1 bg-[#D97706] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                </div>
              );
            })}
          </div>

          {/* Process footer call to action */}
          <div className="mt-16 text-center">
            <Link 
              to="/contact" 
              id="framework-explore-cta"
              className="inline-flex items-center gap-4 h-16 px-10 bg-[#111111] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#D97706] transition-all transform hover:-translate-y-1 shadow-md active:scale-95"
            >
              EXPLORE OUR FRAMEWORK
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* BUILT ACROSS HIGH GROWTH CATEGORIES (INDUSTRIES) - Converted to Premium Light Theme */}
      <section id="services-industries-categories" className="py-24 bg-[#FAFAFA] text-[#111111] relative overflow-hidden">
        {/* Glow aesthetics */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#D97706] rounded-full blur-[140px] opacity-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-16">
            <div className="space-y-4 max-w-2xl">
              <span className="text-[11px] font-black text-[#D97706] uppercase tracking-[0.3em] block" id="industries-mini-title">
                THE TARGET MARKETS
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase leading-[0.95] tracking-tight" id="industries-main-headline">
                Built Across <span className="text-zinc-500 font-light">High-Growth</span> <br />
                <span className="text-[#D97706] font-serif italic font-light lowercase">categories.</span>
              </h2>
            </div>
            
            <p className="text-[#666666] font-bold max-w-sm text-sm leading-relaxed">
              We specialize in vertical product launch execution spanning beautiful high-gross-margin categories that modern consumers rely upon daily.
            </p>
          </div>

          {/* Slices of High Growth categories */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: "Luxury Perfume", activeProds: "12 Brands Active", code: "PERF-24" },
              { name: "Ayurveda Wellness", activeProds: "8 Brands Active", code: "AYUR-99" },
              { name: "Cosmetics Care", activeProds: "19 Brands Active", code: "COSM-44" },
              { name: "Nutraceuticals", activeProds: "6 Brands Active", code: "NUTR-11" },
              { name: "Personal Care", activeProds: "14 Brands Active", code: "PERS-88" },
              { name: "Pet Care segment", activeProds: "4 Brands Active", code: "PETC-07" },
            ].map((cat, idx) => (
              <div 
                key={idx} 
                className="p-6 rounded-[32px] bg-white border border-zinc-200/80 hover:border-[#D97706] hover:shadow-lg transition-all group flex flex-col justify-between h-44"
                id={`industry-category-card-${idx}`}
              >
                <div>
                  <span className="font-mono text-[9px] text-[#D97706] font-black block tracking-widest">{cat.code}</span>
                  <h4 className="text-sm font-black text-[#111111] uppercase tracking-tight mt-1 leading-tight group-hover:text-[#D97706] transition-colors">
                    {cat.name}
                  </h4>
                </div>

                <div className="border-t border-zinc-150 pt-3 flex justify-between items-center">
                  <span className="text-[9px] font-extrabold text-[#666666] uppercase">{cat.activeProds}</span>
                  <ArrowRight size={12} className="text-zinc-400 group-hover:translate-x-1 transition-transform text-[#D97706]" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/contact" 
              id="industries-explore-cta"
              className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-widest text-[#D97706] hover:text-[#111111] transition-colors"
            >
              EXPLORE INDUSTRIES BRAND PORTFOLIO
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* DETAILED FAQ SECTION ACCORDION - Refactored with White Cards and Subtle Borders */}
      <section id="services-faq-section" className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16 space-y-3">
            <span className="text-[11px] font-black tracking-[0.3em] text-[#D97706] uppercase block">
              HAVE ANY QUESTIONS?
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-[#111111] uppercase tracking-tight">
              Frequently Answered Questions.
            </h2>
            <p className="text-[#666666] font-bold max-w-lg mx-auto text-sm leading-relaxed">
              Everything you need to know about partnering with Banega Brand to launch your dream concept.
            </p>
          </div>

          {/* Accordion container */}
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpened = openedFaqIndex === i;
              return (
                <div 
                  key={i} 
                  className="rounded-3xl border border-zinc-200 overflow-hidden bg-white hover:border-[#D97706]/30 hover:shadow-md transition-all duration-300"
                  id={`services-faq-item-${i}`}
                >
                  <button
                    onClick={() => setOpenedFaqIndex(isOpened ? null : i)}
                    className="w-full py-6 px-8 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                    id={`faq-toggle-button-${i}`}
                  >
                    <span className="text-base md:text-lg font-black text-[#111111] select-none">
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center transition-all ${isOpened ? 'bg-[#D97706] border-transparent text-white' : 'bg-zinc-50 text-[#111111] hover:border-[#D97706]'}`}>
                      {isOpened ? <Minus size={16} /> : <Plus size={16} />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpened && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                      >
                        <div className="px-8 pb-7 pt-1 font-bold text-[#666666] text-sm leading-relaxed border-t border-zinc-150">
                          {faq.answer}
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

      {/* FINAL CALL TO ACTION SECTION - Note: Allowed to use beautiful dark backgrounds as final block */}
      <section id="services-final-cta" className="px-6 pb-24 bg-white">
        <div className="max-w-7xl mx-auto bg-[#0f172a] border border-[#334155] rounded-[64px] p-12 md:p-24 relative overflow-hidden text-center shadow-2xl">
          {/* Subtle decoration light halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#D97706] rounded-full blur-[220px] opacity-20 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <div className="flex justify-center">
              <div className="px-5 py-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                <Sparkles size={14} className="text-[#D97706] fill-[#D97706]" />
                Accelerate with Strategy
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl font-sans font-black tracking-tight text-white uppercase leading-[0.95]" id="final-cta-headline">
              Ready To Launch <br />
              Your <span className="text-[#D97706] italic font-serif font-light lowercase select-none">product?</span>
            </h2>

            <p className="text-lg md:text-xl text-zinc-400 font-bold max-w-xl mx-auto leading-relaxed" id="final-cta-subheading">
              Let's build the right product, create the right brand and launch with confidence.
            </p>

            <div className="pt-4">
              <Link 
                id="final-cta-book-button"
                to="/contact" 
                className="h-16 md:h-20 px-10 bg-[#D97706] text-white hover:bg-white hover:text-[#111111] rounded-2xl font-black text-sm uppercase tracking-widest transition-all transform hover:-translate-y-1 flex items-center gap-4 inline-flex justify-center shadow-xl"
              >
                BOOK A FREE STRATEGY CALL
                <ArrowRight size={18} className="text-white group-hover:text-[#111111]" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MainFooter />
    </div>
  );
};
