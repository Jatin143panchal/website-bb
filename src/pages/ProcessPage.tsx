import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  X, 
  Search, 
  Factory, 
  Paintbrush, 
  FileCheck, 
  Rocket, 
  TrendingUp, 
  AlertCircle, 
  ShieldX, 
  Check, 
  ChevronRight, 
  HelpCircle,
  Clock,
  Briefcase,
  Layers,
  Sparkles,
  Award,
  ChevronDown,
  ArrowDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { Navbar } from '../components/Navbar';
import { MainFooter } from '../components/MainFooter';

export const ProcessPage = () => {
  // State for interactive step details or active steps
  const [activeTabStep, setActiveTabStep] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const stepsData = [
    {
      step: '01',
      phase: 'DISCOVERY & VALIDATION',
      headline: 'Validate Before You Invest',
      content: 'Every successful launch begins with understanding the market. Before selecting a product, we identify opportunities, evaluate competition, understand consumer behaviour and reduce uncertainty.',
      whatWeDo: [
        'Market Research',
        'Category Analysis',
        'Competitor Mapping',
        'Consumer Research',
        'Opportunity Identification',
        'Validation Planning'
      ],
      outcome: 'Confidence Before Investment',
      timeline: '1–2 Weeks',
      deliverables: [
        'Validation Report',
        'Market Insights',
        'Product Direction'
      ],
      icon: Search,
      metricLabel: 'Opportunity Score',
      metricVal: '94%',
    },
    {
      step: '02',
      phase: 'FORMULATION & SOURCING',
      headline: 'Build Products That Perform',
      content: 'Great brands are built on great products. We connect you with certified manufacturers and guide formulations that meet quality, safety and regulatory standards.',
      whatWeDo: [
        'Factory Sourcing',
        'Audits & Due Diligence',
        'Formulation Guidance',
        'Sampling & Testing',
        'Cost Negotiation',
        'Quality Assurance'
      ],
      outcome: 'A Market-Ready Product',
      timeline: '3–6 Weeks',
      deliverables: [
        'Factory Audits',
        'Sample Prototypes',
        'Pricing Matrix'
      ],
      icon: Factory,
      metricLabel: 'Factory Pass Rate',
      metricVal: '99.2%',
    },
    {
      step: '03',
      phase: 'BRAND IDENTITY & PACKAGING',
      headline: 'Design That Demands Attention',
      content: 'Your packaging is your first impression. We design packaging, visual identities and brand systems that make your product stand out on shelves and screens.',
      whatWeDo: [
        'Brand Strategy',
        'Visual Identity',
        'Structural Packaging',
        'Label Design',
        'Box & Print Production',
        'Visual Architecture'
      ],
      outcome: 'A Brand Consumers Remember',
      timeline: '2–3 Weeks',
      deliverables: [
        'Complete Design Kit',
        'Print Production Dielines',
        'Brand Guidelines'
      ],
      icon: Paintbrush,
      metricLabel: 'Shelf Distinction',
      metricVal: 'Top 1%',
    },
    {
      step: '04',
      phase: 'COMPLIANCE & TRADEMARK',
      headline: 'Protect Your Brand legally',
      content: 'Regulatory delays can kill momentum. We ensure your certifications, licenses and trademarks are secured before you launch.',
      whatWeDo: [
        'Trademark Search & Filing',
        'FDA / AYUSH Compliance',
        'FSSAI & Lab Testing',
        'Legal Due Diligence',
        'Packaging Compliance',
        'Barcode / GS1 Guidance'
      ],
      outcome: 'Zero Legal Headaches',
      timeline: 'Parallel to Step 2 & 3',
      deliverables: [
        'Trademark Filing Docs',
        'Lab Certifications',
        'Compliance Clearances'
      ],
      icon: FileCheck,
      metricLabel: 'First-Pass Approval',
      metricVal: '100%',
    },
    {
      step: '05',
      phase: 'E-COMMERCE & LAUNCH',
      headline: 'Launch Where Buyers Are',
      content: 'We set up your digital storefronts, marketplace listings and launch campaigns so customers can discover and purchase your product from day one.',
      whatWeDo: [
        'Amazon India Launch (FBA, A+ Content)',
        'Flipkart Brand Listing',
        'Nykaa Onboarding & Curation',
        'Shopify / Direct-to-Consumer Store',
        'Listing Optimization',
        'Go Live Support',
        'Payment Gateway Sync'
      ],
      outcome: 'A Live, Selling Brand',
      timeline: '2–3 Weeks',
      deliverables: [
        'High-Converting Store',
        'Marketplace Presence',
        'Sales-Ready Assets'
      ],
      icon: Rocket,
      metricLabel: 'Checkout Speeds',
      metricVal: '<1.2s',
    },
    {
      step: '06',
      phase: 'GROWTH & SCALE',
      headline: 'Build Beyond Launch',
      content: 'A successful launch is only the beginning. We map expansion channels to take you from initial sales to market leadership.',
      whatWeDo: [
        'Distribution Channels',
        'Growth Planning',
        'Expansion Strategy',
        'Scale Consulting',
        'Margin Optimization'
      ],
      outcome: 'Long-Term Growth',
      timeline: 'Ongoing',
      deliverables: [
        'Marketing Flywheel Plan',
        'Expansion Roadmap',
        'Unit Economics Audit'
      ],
      icon: TrendingUp,
      metricLabel: 'Avg Client Growth',
      metricVal: '3.4x',
    }
  ];

  const faqs = [
    {
      q: 'How long does a launch take?',
      a: 'A typical launch takes between 45–120 days from validation to market entry, depending heavily on the product category, compliance filings, and manufacturer lead times. We optimize every parallel path to minimize delays.'
    },
    {
      q: 'Do I need a product already?',
      a: 'No. Many of our most successful founders start with only an idea or a desire to build in a specific category. We guide you through validation, sourcing, and development.'
    },
    {
      q: 'Do you provide manufacturers?',
      a: 'Yes. We provide direct access to our verified, audited ecosystem of high-quality manufacturing partners across perfume, ayurveda, cosmetics, personal care, and nutraceuticals.'
    },
    {
      q: 'Can you handle everything?',
      a: 'Yes. Banega Brand is built as a single point of execution. We manage validation, production, branding, trademark compliance, and marketplace deployment as one unified roadmap.'
    }
  ];

  return (
    <div className="relative bg-[#FAFAFA] text-[#111111] selection:bg-[#D97706] selection:text-white font-sans overflow-x-hidden">
      <Helmet>
        <title>Our 6-Step Product Launch Framework | Banega Brand – India's Leading Product Launch Company</title>
        <meta name="description" content="Discover the proven 6-step framework to launch a D2C product brand in India: Validation, Sourcing & Formulation, Luxury Packaging, Legal Compliance, Marketplace Launch & Scale." />
        <meta name="keywords" content="Product Launch Framework, Brand Launch Process, How to launch a product in India, D2C Product Launch Steps, Banega Brand" />
        <link rel="canonical" href="https://banegabrand.com/process" />
        <meta property="og:title" content="Our 6-Step Product Launch Framework | Banega Brand" />
        <meta property="og:description" content="A structured, proven 6-step roadmap from product idea validation to sustainable commercial scale." />
        <meta property="og:url" content="https://banegabrand.com/process" />
      </Helmet>
      <Navbar />

      <main className="pt-24">
        
        {/* ============================================================== */}
        {/* SECTION 1: PROCESS PAGE HERO                                   */}
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
                THE BANEGA BRAND FRAMEWORK
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-sans font-black tracking-tight uppercase leading-[0.9] text-[#111111] max-w-5xl mb-6">
              From Product Idea <br />
              <span className="text-[#D97706]">To Market Launch.</span> <br />
              <span className="font-light text-zinc-400">Without Guesswork.</span>
            </h1>

            {/* Subheadline */}
            <p className="text-[#666666] text-base md:text-xl font-bold max-w-2xl leading-relaxed mb-10">
              Most founders struggle because they don't know what comes next. <br className="hidden md:block"/>
              Our 6-Step Product Launch Framework provides a structured path from idea validation to business growth.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-20 w-full sm:w-auto px-4 z-20">
              <Link 
                to="/contact"
                className="bg-[#D97706] text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#111111] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#D97706]/10 text-center"
              >
                BOOK A STRATEGY CALL
              </Link>
              <Link 
                to="/services"
                className="bg-white text-[#111111] border border-[#EAEAEA] px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FAFAFA] hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center shadow-sm"
              >
                LAUNCH MY BRAND
              </Link>
            </div>

            {/* Horizontal Journey Graphic */}
            <div className="w-full max-w-5xl bg-[#FAFAFA] border border-[#EAEAEA] rounded-[40px] p-8 md:p-12 shadow-sm relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-50/50 via-white to-zinc-50/50 pointer-events-none" />
              
              <div className="relative">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#D97706]">
                    Unified Launch Horizon
                  </span>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#D97706] animate-pulse" />
                    <span className="text-[9px] font-black uppercase text-[#111111]">SYSTEM ACTIVE</span>
                  </div>
                </div>

                {/* Animated Horizontal Progress Bar */}
                <div className="relative mb-12 hidden md:block">
                  <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-zinc-200 -translate-y-1/2" />
                  <motion.div 
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
                    className="absolute top-1/2 left-0 h-[2.5px] bg-[#D97706] -translate-y-1/2 shadow-[0_0_12px_#D97706]"
                  />
                </div>

                <div className="grid grid-cols-5 gap-4 relative z-10">
                  {[
                    { label: 'Idea', icon: '💡', desc: 'Discovery & Market validation' },
                    { label: 'Product', icon: '🧪', desc: 'Direct audited production' },
                    { label: 'Brand', icon: '✨', desc: 'Luxury aesthetic architecture' },
                    { label: 'Launch', icon: '🚀', desc: 'Seamless multichannel entry' },
                    { label: 'Growth', icon: '📈', desc: 'Stable sustained commercial scale' },
                  ].map((node, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-white border border-[#EAEAEA] flex items-center justify-center text-lg md:text-2xl shadow-sm hover:border-[#D97706]/40 hover:shadow-md transition-all">
                        {node.icon}
                      </div>
                      <span className="text-xs md:text-sm font-black text-[#111111] uppercase tracking-tight mt-4">
                        {node.label}
                      </span>
                      <p className="hidden md:block text-[10px] text-[#666666] font-semibold tracking-normal mt-1 leading-relaxed max-w-[120px] text-center">
                        {node.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* NEW SECTION 2: THE COST OF SKIPPING STEPS                      */}
        {/* ============================================================== */}
        <section className="py-24 md:py-32 px-6 bg-[#FAFAFA] border-t border-[#EAEAEA] text-[#111111] relative">
          <div className="max-w-7xl mx-auto text-left">
            
            {/* Section Head */}
            <div className="max-w-3xl mb-20">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#D97706] block mb-4">
                FOUNDER REALITY
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7.5xl font-sans font-black tracking-tight text-[#111111] uppercase leading-[0.95] mb-6">
                Most Launch Problems <br />
                <span className="text-[#D97706]">Begin Long Before</span> Launch Day.
              </h2>
              <p className="text-[#666666] text-lg md:text-xl font-bold leading-relaxed max-w-2xl">
                A failed launch is rarely caused by one big mistake.<br />
                <span className="text-[#111111]">It's usually caused by small mistakes made throughout the journey.</span>
              </p>
            </div>

            {/* 4 Premium Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {[
                {
                  id: '01',
                  step: 'Skip Validation',
                  mistake: 'Build a product nobody wants.',
                  details: 'Spending precious capital on formulas and stocks before checking search volume, consumer preferences, or organic competitive spaces.'
                },
                {
                  id: '02',
                  step: 'Skip Sourcing',
                  mistake: 'Face manufacturing and quality issues.',
                  details: 'Deploying faulty packaging materials or inconsistent formulas because manufacturers were selected solely on cheap upfront costs.'
                },
                {
                  id: '03',
                  step: 'Skip Compliance',
                  mistake: 'Delay your launch and create legal challenges.',
                  details: 'Getting tied up in luxury trademark domain wars, license rejections, drug control delays, or heavy packaging fine alerts.'
                },
                {
                  id: '04',
                  step: 'Skip Launch Planning',
                  mistake: 'Struggle to generate momentum after launch.',
                  details: 'Believing that "if you build it they will come." Opening a beautiful website but experiencing flat, zero sales trajectories.'
                }
              ].map((c, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -6 }}
                  className="bg-white border border-[#EAEAEA] p-8 rounded-[32px] flex flex-col justify-between min-h-[300px] transition-all duration-300 shadow-sm hover:shadow-md hover:border-red-500/20 group"
                >
                  <div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-[10px] font-black text-red-500/70 bg-red-100/50 dark:bg-red-50/5 px-2.5 py-1 rounded-md">
                        RISK ELEMENT {c.id}
                      </span>
                      <ShieldX className="w-5 h-5 text-red-500/80 group-hover:scale-110 transition-transform" />
                    </div>

                    <h3 className="text-[#111111] text-xs font-black uppercase tracking-widest text-[#D97706] mb-1">
                      {c.step}
                    </h3>
                    <p className="text-lg font-black text-zinc-900 leading-tight mb-4">
                      {c.mistake}
                    </p>
                  </div>

                  <p className="text-xs text-[#666666] font-semibold leading-relaxed">
                    {c.details}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Statement */}
            <div className="max-w-4xl mx-auto text-center mt-12 bg-white border border-[#EAEAEA] rounded-[32px] p-6 shadow-sm">
              <p className="text-base md:text-lg font-black text-[#111111]">
                Every successful brand follows a process. <span className="text-[#D97706]">That's why we built ours.</span>
              </p>
            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 3: WHY MOST FOUNDERS GET STUCK                         */}
        {/* ============================================================== */}
        <section className="py-24 md:py-32 px-6 bg-white border-t border-[#EAEAEA] relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Copy Side */}
              <div className="text-left space-y-6">
                <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block">
                  CRITICAL CHOICE PATHS
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
                  Why Most Founders <br />
                  Get Stuck
                </h2>
                <div className="space-y-4 text-sm md:text-base text-[#666666] font-semibold leading-relaxed">
                  <p>
                    Launching a product is not a single decision. <br />
                    <span className="text-[#111111]">It\'s a series of critical decisions.</span>
                  </p>
                  <ul className="space-y-3 pl-1 pr-6 list-none text-xs md:text-sm font-semibold">
                    <li className="flex gap-2.5 items-start">
                      <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                      <span><strong>Choose the wrong product</strong> and consumer demand suffers from day one.</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                      <span><strong>Choose the wrong manufacturer</strong> and product formulation quality suffers continuously.</span>
                    </li>
                    <li className="flex gap-2.5 items-start">
                      <span className="text-red-500 font-bold shrink-0 mt-0.5">✕</span>
                      <span><strong>Choose the wrong positioning</strong> and sales conversion suffer regardless of traffic volume.</span>
                    </li>
                  </ul>
                  <p className="pt-2 border-t border-zinc-100 text-[#111111] font-bold text-sm md:text-md">
                    Most founders don't fail because they lack ambition. <br className="hidden sm:block" />
                    They fail because they lack a structured launch framework.
                  </p>
                </div>
              </div>

              {/* Visual Side: Visualizing Broken Roadmap vs Clear Framework */}
              <div className="bg-[#FAFAFA] border border-[#EAEAEA] p-8 md:p-10 rounded-[48px] relative overflow-hidden self-stretch flex flex-col justify-between shadow-sm min-h-[380px]">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400">
                    DECISION MATRIX MODEL
                  </span>
                  <div className="px-3 py-1 text-[8px] bg-red-50 text-red-600 border border-red-200/50 rounded-full font-black uppercase tracking-widest">
                    TRADITIONAL DELAYS
                  </div>
                </div>

                {/* Path comparison map */}
                <div className="space-y-6 relative z-10 flex-grow py-4 text-left">
                  {/* Broken Path */}
                  <div className="relative p-5 bg-white border border-[#EAEAEA] rounded-2xl">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-black text-red-500 uppercase tracking-wide">BROKEN PATH</span>
                      <span className="text-[10px] text-zinc-400 font-mono">DEAD ENDS & WASTED CAPITAL</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-zinc-500">
                      <span>Idea</span>
                      <span>→</span>
                      <span className="line-through text-red-500">Fast MFG</span>
                      <span>→</span>
                      <span className="bg-red-50 text-red-600 px-1.5 py-0.5 rounded">No Compliance</span>
                      <span>→</span>
                      <span className="line-through text-red-400">Low Sales</span>
                    </div>
                  </div>

                  {/* Highlighted Success Path */}
                  <div className="relative p-5 bg-white border border-[#D97706]/20 rounded-2xl shadow-sm">
                    {/* Glow outline line */}
                    <div className="absolute inset-x-0 -top-[1.5px] h-[3px] bg-gradient-to-r from-transparent via-[#D97706]/40 to-transparent" />
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-black text-[#D97706] uppercase tracking-wide">BANEGA BRAND CONNECTED FRAMEWORK</span>
                      <span className="text-[9px] text-[#D97706] font-black uppercase tracking-widest bg-amber-50 px-2 py-0.5 rounded-full">APPROVED RUN</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold text-zinc-900">
                      <span>Validate Opportunity</span>
                      <span className="text-[#D97706]">→</span>
                      <span>Audit Sourcing</span>
                      <span className="text-[#D97706]">→</span>
                      <span>Compliant Registry</span>
                      <span className="text-[#D97706]">→</span>
                      <span className="bg-emerald-50 text-emerald-600 px-1.5 py-0.5 rounded">High Growth Launch</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-zinc-200/60 mt-4 flex items-center justify-between text-xs font-bold text-[#666666]">
                  <span>System Uncertainty Risk</span>
                  <span className="text-red-500 font-black uppercase tracking-wider">REDUCED TO 0%</span>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 4: FRAMEWORK INTRODUCTION                             */}
        {/* ============================================================== */}
        <section className="py-24 bg-[#FAFAFA] border-t border-[#EAEAEA] relative">
          <div className="max-w-7xl mx-auto text-center px-6">
            
            <div className="max-w-3xl mx-auto mb-16">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-4">
                THE ACCELERATED METHODOLOGY
              </span>
              <h2 className="text-4xl md:text-6xl font-sans font-black tracking-tight uppercase text-zinc-900 leading-none mb-6">
                Introducing The Banega <br />
                <span className="text-[#D97706]">Brand Framework</span>
              </h2>
              <p className="text-base md:text-lg text-[#666666] font-bold max-w-xl mx-auto leading-relaxed">
                A structured system designed to help founders move from uncertainty to launch readiness.
              </p>
            </div>

            {/* Stage visually */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto text-left">
              {[
                { step: '01', title: 'Discovery & Validation', bg: 'bg-white' },
                { step: '02', title: 'Development & Sourcing', bg: 'bg-white' },
                { step: '03', title: 'Brand Creation', bg: 'bg-white' },
                { step: '04', title: 'Launch Preparation', bg: 'bg-white' },
                { step: '05', title: 'Launch', bg: 'bg-white border-[#D97706]/20' },
                { step: '06', title: 'Growth & Scale', bg: 'bg-white' }
              ].map((stage, idx) => (
                <div 
                  key={idx} 
                  onClick={() => {
                    setActiveTabStep(idx);
                    const element = document.getElementById('step-details-container');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  className={`p-6 rounded-[24px] border border-[#EAEAEA] ${stage.bg} hover:border-[#D97706]/40 cursor-pointer shadow-sm transition-all duration-300 group hover:y-[-4px] flex flex-col justify-between min-h-[140px]`}
                >
                  <span className="text-xs font-black text-zinc-400 group-hover:text-[#D97706] tracking-widest font-mono block">
                    STAGE {stage.step}
                  </span>
                  <div className="mt-4">
                    <p className="text-xs md:text-sm font-black text-[#111111] uppercase tracking-tight leading-snug group-hover:text-[#D97706]">
                      {stage.title}
                    </p>
                    <span className="text-[9px] font-black text-[#D97706]/85 uppercase tracking-wider block mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      EXPLORE DETAILS →
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTIONS 5-10: STEP 01 - 06 DETAILS CHRONOLOGY                 */}
        {/* ============================================================== */}
        <section id="step-details-container" className="py-24 md:py-32 bg-white border-t border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto px-6">
            
            {/* Steps Controller Tabs */}
            <div className="flex overflow-x-auto gap-2 pb-4 mb-20 px-2 scrollbar-none border-b border-zinc-100 justify-start lg:justify-center">
              {stepsData.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTabStep(idx)}
                  className={`px-6 py-4.5 rounded-full text-xs font-black uppercase tracking-widest cursor-pointer whitespace-nowrap transition-all ${
                    activeTabStep === idx 
                      ? 'bg-[#111111] text-white shadow-lg' 
                      : 'bg-[#FAFAFA] text-[#666666] hover:bg-zinc-100 border border-[#EAEAEA]'
                  }`}
                >
                  {s.step}. {s.phase.split(' & ')[0]}
                </button>
              ))}
            </div>

            {/* active tab display element */}
            <AnimatePresence mode="wait">
              {stepsData.map((s, idx) => {
                if (activeTabStep !== idx) return null;
                const Icon = s.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
                  >
                    {/* Left Column: Info & Details block */}
                    <div className="lg:col-span-7 text-left space-y-8">
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <span className="text-sm font-black text-white bg-[#D97706] px-4 py-1.5 rounded-xl font-mono leading-none">
                            STEP {s.step}
                          </span>
                          <span className="text-xs font-black uppercase tracking-[0.2em] text-[#666666]">
                            {s.phase}
                          </span>
                        </div>
                        <h3 className="text-3xl md:text-5xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
                          {s.headline}
                        </h3>
                        <p className="text-sm md:text-base text-[#666666] font-semibold leading-relaxed max-w-2xl">
                          {s.content}
                        </p>
                      </div>

                      {/* What We Do Items */}
                      <div className="space-y-4 pt-4 border-t border-zinc-100">
                        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D97706]">
                          WHAT WE UNIFY
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {s.whatWeDo.map((item, id) => (
                            <div key={id} className="flex items-center gap-3 bg-[#FAFAFA] border border-[#EAEAEA] px-4 py-3 rounded-xl">
                              <CheckCircle2 className="w-4 h-4 text-[#D97706] shrink-0" />
                              <span className="text-[12px] font-black text-[#111111] uppercase tracking-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Deliverables Info Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-100">
                        <div className="space-y-2">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                            FOUNDER OUTCOME
                          </span>
                          <p className="text-md font-black text-[#111111] uppercase tracking-tight">
                            {s.outcome}
                          </p>
                        </div>
                        <div className="space-y-2">
                          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
                            TIMELINE SPECS
                          </span>
                          <p className="text-md font-black text-[#D97706] uppercase tracking-tight flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            {s.timeline}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column: Creative graphic illustration (Apple + Consulting mockup feel) */}
                    <div className="lg:col-span-5 bg-[#FAFAFA] border border-[#EAEAEA] p-8 rounded-[48px] shadow-sm flex flex-col justify-between relative overflow-hidden min-h-[440px] self-stretch">
                      {/* Artistic abstract layout */}
                      <div className="absolute inset-0 pointer-events-none z-0">
                        <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#D97706]/3 rounded-full blur-3xl" />
                      </div>

                      <div className="relative z-10">
                        <div className="flex justify-between items-center mb-8">
                          <div className="p-4 bg-white border border-[#EAEAEA] rounded-3xl text-zinc-950 shadow-sm leading-none">
                            <Icon className="w-6 h-6 text-[#D97706]" />
                          </div>
                          <span className="text-[10px] font-black text-[#666666] tracking-widest font-mono">
                            STATUS: SECURING_RUN
                          </span>
                        </div>

                        {/* Step deliverables files list card representation */}
                        <div className="space-y-4 pt-4">
                          <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 block text-left">
                            Deliverables Package
                          </span>
                          
                          <div className="space-y-2.5 text-left">
                            {s.deliverables ? s.deliverables.map((doc, idx) => (
                              <div key={idx} className="bg-white border border-[#EAEAEA] p-4 rounded-2xl flex items-center justify-between shadow-xs">
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-[#D97706]" />
                                  <span className="text-xs font-black text-zinc-800 uppercase tracking-tight">
                                    {doc}
                                  </span>
                                </div>
                                <span className="text-[9px] font-mono text-zinc-400 font-bold bg-[#FAFAFA] border border-[#EAEAEA] px-2 py-0.5 rounded">
                                  PDF_RELEASE
                                </span>
                              </div>
                            )) : (
                              <div className="bg-white border border-[#EAEAEA] p-4 rounded-2xl flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <div className="w-2 h-2 rounded-full bg-[#D97706]" />
                                  <span className="text-xs font-black text-zinc-805 uppercase tracking-tight">
                                    Strategic Delivery Blueprint
                                  </span>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Performance Indicators Metric */}
                      <div className="bg-white p-6 border border-[#EAEAEA] rounded-[32px] mt-10 relative z-10 flex items-center justify-between">
                        <div className="text-left">
                          <p className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">
                            {s.metricLabel}
                          </p>
                          <p className="text-lg font-black text-zinc-900 uppercase">
                            Validated Benchmark
                          </p>
                        </div>
                        <span className="text-3xl font-black text-[#D97706] tracking-tight">
                          {s.metricVal}
                        </span>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>

          </div>
        </section>

        ==============================================================
        {/* SECTION 11: COMPLETE LAUNCH ECOSYSTEM                          */}
        {/* ============================================================== */}
        <section className="py-24 md:py-32 px-6 bg-[#FAFAFA] border-t border-[#EAEAEA] relative">
          <div className="max-w-7xl mx-auto">
            
            {/* Header section text */}
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-4">
                THE SINGLE CONSOLIDATED SYSTEM
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
                Everything Required To Launch A <br className="hidden md:block" />
                <span className="text-[#D97706]">Brand Under One Roof</span>
              </h2>
            </div>

            {/* Ecosystem visual representation: Consists of circular center with peripheral integration cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
              
              {/* Left Side: Peripheral grid list */}
              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
                {[
                  'Validation', 'Research', 'Manufacturing', 'Branding', 'Packaging', 
                  'Trademark', 'GST', 'Compliance', 'Photography', 'Website', 
                  'Marketplace', 'Distribution', 'Growth'
                ].map((item, idx) => (
                  <div key={idx} className="bg-white border border-[#EAEAEA] p-4.5 rounded-[20px] shadow-sm flex items-center gap-2.5 hover:border-[#D97706]/40 transition-colors">
                    <span className="bg-[#D97706]/10 text-[#D97706] w-6 h-6 rounded-lg text-[10px] font-black flex items-center justify-center shrink-0">
                      √
                    </span>
                    <span className="text-[11px] font-black text-zinc-900 uppercase tracking-tight leading-none text-left">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Side: Banega Brand Integrated Ecosystem Wheel Card */}
              <div className="lg:col-span-5 bg-white border border-[#EAEAEA] p-8 rounded-[48px] shadow-sm min-h-[380px] flex flex-col justify-between relative overflow-hidden self-stretch">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-50/10 to-transparent pointer-events-none" />
                
                <div className="text-left space-y-3 relative z-10">
                  <span className="text-[9px] font-black text-[#D97706] uppercase tracking-widest bg-amber-50 px-2.5 py-1 rounded-md inline-block">
                    CONCENTRIC ALIGNMENT
                  </span>
                  <h3 className="text-xl font-black text-[#111111] uppercase tracking-tight">
                    Unified Agency Splicing
                  </h3>
                  <p className="text-xs text-[#666666] font-semibold leading-relaxed">
                    By pulling all compliance, research, sourcing, brand development, and e-commerce configuration under one structured consultancy umbrella, we cut release friction and completely secure your margin structure.
                  </p>
                </div>

                {/* Ecosystem visualization Graphic Wheel */}
                <div className="flex justify-center py-6 relative z-10">
                  <div className="relative w-40 h-40 rounded-full border-4 border-dashed border-zinc-200 flex items-center justify-center animate-[spin_50s_linear_infinite]">
                    <div className="w-28 h-28 rounded-full border border-[#D97706]/20 bg-amber-50/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[#D97706] flex items-center justify-center text-white text-[10px] font-black tracking-widest text-center uppercase shadow-lg shadow-[#D97706]/20">
                        BANEGA <br /> BRAND
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between text-[10px] font-black tracking-widest text-[#666666] relative z-10">
                  <span>DISCIPLINES INVOLVED</span>
                  <span className="text-[#D97756]">13 COMPLETE SERVICES</span>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 12: FOUNDER TRANSFORMATION                            */}
        {/* ============================================================== */}
        <section className="py-24 md:py-32 px-6 bg-white border-t border-[#EAEAEA] relative">
          <div className="max-w-7xl mx-auto text-left">
            
            {/* Header info */}
            <div className="max-w-3xl mb-20">
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#D97706] block mb-4">
                FOUNDER DEVELOPMENT
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
                What Changes During <br />
                <span className="text-[#D97706]">This Journey?</span>
              </h2>
            </div>

            {/* Before vs After comparative board */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Before Column */}
              <div className="bg-red-50/15 border border-red-200/40 p-8 rounded-[40px] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-8 pb-4 border-b border-red-200/20">
                    <span className="text-xs font-black text-red-500 uppercase tracking-widest">
                      BEFORE CO-DEVELOPMENT
                    </span>
                    <span className="text-[9px] font-black text-red-500 bg-red-50 px-2 py-0.5 rounded">
                      HIGH RISK
                    </span>
                  </div>

                  <ul className="space-y-4 text-left">
                    {[
                      'Confused regarding first operational checklist steps',
                      'Overwhelmed balancing manufacturers, legal attorneys, packaging, and designers',
                      'Uncertain on formula testing, margin sustainability, and pricing tiers',
                      'Totally Dependent on biased vendor quotes and sales representatives',
                      'No clear sustained long-term marketplace positioning strategy direction'
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-xs font-bold text-zinc-650 leading-relaxed">
                        <span className="text-red-500 text-sm font-black shrink-0 mt-0.5">✕</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-red-100/10 border border-red-250/10 rounded-2xl md:mt-12 text-xs font-black text-red-600/80 uppercase tracking-wider text-center">
                  Unbounded operational risk vectors
                </div>
              </div>

              {/* After Column */}
              <div className="bg-stone-50/15 border border-[#D97706]/15 p-8 rounded-[40px] flex flex-col justify-between shadow-xs">
                <div>
                  <div className="flex justify-between items-center mb-8 pb-4 border-b border-[#D97706]/10">
                    <span className="text-xs font-black text-[#D97706] uppercase tracking-widest">
                      AFTER BANEGA BRAND
                    </span>
                    <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      LAUNCH READY
                    </span>
                  </div>

                  <ul className="space-y-4 text-left">
                    {[
                      'Complete peace-of-mind with organized sequential timeline priorities',
                      'Single point of operational leadership handling all execution tasks cleanly',
                      'Clear structural reports detailing manufacturing, GST clearances and trademarks',
                      'In control of unit economics, proven chemical samples, and verified suppliers',
                      'Clear growth trajectory maps taking the product forward post market launch'
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-xs font-bold text-zinc-900 leading-relaxed">
                        <span className="text-emerald-500 text-sm font-black shrink-0 mt-0.5">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-amber-50/30 border border-[#D97706]/10 rounded-2xl md:mt-12 text-xs font-black text-[#D97706] uppercase tracking-wider text-center">
                  Structured compliant deployment framework
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ============================================================== */}
        {/* SECTION 13: FAQ                                                */}
        {/* ============================================================== */}
        <section className="py-24 md:py-32 px-6 bg-[#FAFAFA] border-t border-[#EAEAEA] relative">
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

            {/* Accordion List */}
            <div className="space-y-4">
              {faqs.map((faq, idx) => {
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
                      <span className={`p-2 bg-[#FAFAFA] rounded-full border border-zinc-200 text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#D97706]' : ''}`}>
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
        <section className="py-24 md:py-32 px-6 bg-white border-t border-[#EAEAEA] relative">
          <div className="max-w-5xl mx-auto text-center space-y-10 relative z-10">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-2">
              DECISION MILESTONE
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none max-w-4xl mx-auto">
              The Difference Between A Good <br />
              Idea And A Successful Brand <br />
              <span className="text-[#D97706]">Is Execution.</span>
            </h2>
            <p className="text-sm md:text-base text-[#666666] font-bold max-w-2xl mx-auto leading-relaxed">
              Our framework exists to help founders launch confidently and grow sustainably. Join elite luxury concepts scaled up under audited run standards.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 max-w-md mx-auto">
              <Link 
                to="/contact"
                className="bg-[#D97706] text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#111111] transition-all hover:scale-105 active:scale-95 shadow-xl shadow-[#D97706]/10 text-center"
              >
                BOOK MY STRATEGY CALL
              </Link>
              <a 
                href="tel:+918796755169"
                className="bg-white text-[#111111] border border-[#EAEAEA] px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#FAFAFA] hover:border-zinc-300 transition-all hover:scale-105 active:scale-95 text-center shadow-sm"
              >
                TALK TO A LAUNCH EXPERT
              </a>
            </div>
          </div>
        </section>

      </main>

      <MainFooter />
    </div>
  );
};
