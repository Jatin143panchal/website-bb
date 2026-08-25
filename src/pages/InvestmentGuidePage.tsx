import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  Compass, 
  Layers, 
  HelpCircle, 
  CheckCircle2, 
  AlertTriangle,
  Zap,
  TrendingUp,
  FileCheck2,
  Lock,
  Sparkles,
  Play,
  Award,
  Globe,
  Search,
  Check,
  ChevronDown,
  Activity,
  Heart,
  Briefcase
} from 'lucide-react';

import { Navbar } from '../components/Navbar';
import { MainFooter } from '../components/MainFooter';

export const InvestmentGuidePage = () => {
  // Calculator States
  const [industry, setIndustry] = useState<string>('perfume');
  const [productType, setProductType] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('mid');
  const [moq, setMoq] = useState<string>('mid');
  const [packaging, setPackaging] = useState<string>('standard');
  const [website, setWebsite] = useState<boolean>(true);

  // Lead Form States
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [isCalculated, setIsCalculated] = useState<boolean>(false);
  const [formError, setFormError] = useState<string>('');

  // FAQ State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  // Dynamic Calculation Logic
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      setFormError('Please fill in all contact fields to receive your launch investment estimate.');
      return;
    }
    setFormError('');
    setIsCalculated(true);
  };

  const getCalculatedRange = () => {
    let min = 200000;
    let max = 500000;

    // Industry Base Values
    if (industry === 'perfume') { min = 200000; max = 600000; }
    else if (industry === 'ayurveda') { min = 300000; max = 1200000; }
    else if (industry === 'cosmetics') { min = 300000; max = 1500000; }
    else if (industry === 'nutraceuticals') { min = 500000; max = 3000000; }
    else if (industry === 'personal') { min = 200050; max = 1000000; }
    else if (industry === 'pet') { min = 300000; max = 900000; }

    // MOQ Adjustments
    if (moq === 'low') { min += 50000; max += 150000; }
    else if (moq === 'mid') { min += 150000; max += 400000; }
    else if (moq === 'high') { min += 500000; max += 1500000; }

    // Packaging Adjustments
    if (packaging === 'semi') { min += 80000; max += 300000; }
    else if (packaging === 'custom') { min += 250000; max += 800000; }

    // Website Inclusion
    if (website) { min += 75000; max += 250000; }

    // Timeline modifier (rushed is typically slightly more resource intense)
    if (timeline === 'fast') { min += 50000; max += 150000; }

    return {
      min: Math.round(min).toLocaleString('en-IN'),
      max: Math.round(max).toLocaleString('en-IN'),
    };
  };

  const selectedCategoryLabel = () => {
    const categories: Record<string, string> = {
      perfume: 'Luxury Perfume',
      ayurveda: 'Ayurveda & Wellness',
      cosmetics: 'Skin & Lip Cosmetics',
      nutraceuticals: 'Nutraceuticals & Biotech',
      personal: 'Premium Personal Care',
      pet: 'Organic Pet Care'
    };
    return categories[industry] || 'Personal Care';
  };

  const handleReset = () => {
    setIsCalculated(false);
    setName('');
    setPhone('');
    setEmail('');
  };

  const faqs = [
    {
      q: "Why don't you show fixed pricing?",
      a: "As India's leading Product Launch Consultancy, we prioritize strategic alignment. A physical brand's launch budget changes significantly depending on formulation requirements, container materials, scale limits, and compliance benchmarks. Showing static rates leads to overpaying for unnecessary elements or compromises on formulation exclusivity. We tailor each roadmap specific to your vision."
    },
    {
      q: "Can I launch on a small budget?",
      a: "Yes. By following a smart, validation-driven rollout strategy, we help founders avoid early capital sinks. This includes leveraging pre-negotiated startup MOQ support with compliant laboratories rather than high default factory minimums, and keeping custom bottle molds for a secondary phase."
    },
    {
      q: "Can I start with consultation only?",
      a: "Absolutely. Our 'Launch Starter' pathway is ideal for founders looking to validate ideas, review feasibility, draft formulation parameters, and evaluate direct manufacturing targets before committing heavily to launch production capital."
    },
    {
      q: "Do you provide custom plans?",
      a: "Yes, every single partnership is custom-drafted. We present our options as pathways to signify that your brand inherits exactly the specific operational support blocks required to win in its category — no lumping redundant services together."
    },
    {
      q: "Do you offer retainers?",
      a: "For long-term scaling, compliance updates, custom continuous sourcing, and product line extensions, we offer strategic retainer models with dedicated launch managers acts as your out-of-house operational partner."
    }
  ];

  return (
    <div id="investment-guide-page" className="relative bg-[#FAFAFA] text-[#111111] selection:bg-[#D97706] selection:text-white min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>D2C Brand Launch Cost & Investment Guide | Banega Brand – India's Leading Product Launch Company</title>
        <meta name="description" content="Calculate and understand the real costs of launching a D2C product brand in India. Interactive cost calculator covering formulation, MOQs, packaging, and marketing." />
        <meta name="keywords" content="Cost to launch brand in India, D2C Investment Guide, Product Launch Cost Calculator, MOQ Costs India, Banega Brand" />
        <link rel="canonical" href="https://banegabrand.com/investment-guide" />
        <meta property="og:title" content="D2C Brand Launch Cost & Investment Guide | Banega Brand" />
        <meta property="og:description" content="Calculate and understand the real costs of launching a D2C brand in India." />
        <meta property="og:url" content="https://banegabrand.com/investment-guide" />
      </Helmet>
      <Navbar />

      <main className="pt-24">
        
        {/* ========================================== */}
        {/* SECTION 1: HERO SECTION                    */}
        {/* ========================================== */}
        <section id="hero-section" className="relative py-20 lg:py-32 px-6 overflow-hidden bg-white border-b border-[#EAEAEA]">
          {/* Background Decorative Blur */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-[#D97706]/5 rounded-full blur-[140px]" />
            <div className="absolute bottom-[10%] left-[10%] w-[450px] h-[450px] bg-[#111111]/5 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            {/* Copy Side */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] text-[#D97706] rounded-full font-black text-[10px] uppercase tracking-[0.25em] mb-2">
                LAUNCH INVESTMENT GUIDE
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight uppercase leading-[0.9] text-[#111111]">
                Every Brand Is Different. <br />
                <span className="text-zinc-400 font-light">Every Launch Is Different.</span>
              </h1>
              <p className="text-lg md:text-xl text-[#666666] font-semibold max-w-xl leading-relaxed">
                The investment required to launch a product depends on category, manufacturing requirements, packaging, compliance, launch goals and growth ambitions. 
                Our role is to help you invest wisely, not unnecessarily.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#calculator-section"
                  className="bg-[#111111] text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#D97706] transition-all transform hover:-translate-y-0.5 shadow-md shadow-black/5 text-center flex items-center justify-center gap-2.5 min-h-[44px]"
                >
                  GET MY LAUNCH ROADMAP
                  <ArrowRight size={14} />
                </a>
                <Link
                  to="/contact"
                  className="bg-white text-[#111111] border border-[#EAEAEA] px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-zinc-50 transition-all text-center flex items-center justify-center min-h-[44px]"
                >
                  BOOK A STRATEGY CALL
                </Link>
              </div>
            </div>

            {/* Hero Visual: Premium Consulting Dashboard showing strategic steps */}
            <div className="lg:col-span-5 bg-[#FAFAFA] border border-[#EAEAEA] rounded-[48px] p-8 shadow-sm text-left flex flex-col justify-between self-stretch min-h-[420px]">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-[#EAEAEA] pb-4">
                  <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">
                    STRUCTURED GROWTH PATHWAY
                  </span>
                  <span className="font-mono text-[9px] font-bold text-zinc-500">
                    BANEGA ROADMAP
                  </span>
                </div>

                <div className="space-y-4">
                  {[
                    { title: 'validation phase', metrics: 'R&D, Market Audit, Feasibility Map' },
                    { title: 'sourcing phase', metrics: 'Contract Labs Selection, Pre-vetted MOQ Support' },
                    { title: 'brand formulation', metrics: 'Niche Positioning, Luxury Packaging, Regulatory Certifications' },
                    { title: 'launch execution', metrics: 'Direct Channels Integration, Campaign Blueprint, Logistics Sync' }
                  ].map((p, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="relative flex flex-col items-center">
                        <div className="w-5 h-5 rounded-full bg-white border-2 border-[#D97706] flex items-center justify-center text-[9px] font-black text-[#D97706]">
                          {idx + 1}
                        </div>
                        {idx < 3 && <div className="w-px h-12 bg-gradient-to-b from-[#D97706] to-[#EAEAEA]" />}
                      </div>
                      <div className="pt-0.5">
                        <span className="text-[9px] font-black uppercase tracking-widest text-[#D97706] block leading-none mb-1">
                          {p.title}
                        </span>
                        <p className="text-xs font-black text-[#111111] uppercase tracking-tight">
                          {p.metrics}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#EAEAEA] mt-6 flex justify-between items-center text-[10px] font-black uppercase tracking-wider text-[#666666]">
                <span>Pipeline Integration Ready</span>
                <span className="text-[#D97706] font-mono">EST: 45-60 DAYS</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 2: WHAT DETERMINES LAUNCH COST?    */}
        {/* ========================================== */}
        <section className="py-24 md:py-32 px-6 bg-[#FAFAFA] border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-4">
                INVESTMENT TRIGGERS
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight uppercase leading-[0.95] text-[#111111]">
                The 4 Factors That <br />
                <span className="text-zinc-400 font-light">Determine Launch Investment</span>
              </h2>
            </div>

            {/* 4 Premium Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                {
                  id: '01',
                  title: 'Product Category',
                  desc: 'R&D complexity, formulation stability profiles, certifications, and clinical safety assays vary heavily. Perfumes demand custom alcohol compounding licenses, whereas nutraceuticals undergo mandatory clinical trace checks.',
                  highlights: ['Stability benchmarks', 'Assay requirements', 'Trace certifications']
                },
                {
                  id: '02',
                  title: 'Manufacturing Range',
                  desc: 'Minimum Order Quantities (MOQ) dictate early raw batch scales. Selecting highly customized customized bottles or embossed paperboards has higher tooling parameters but delivers peak sensory distinction.',
                  highlights: ['Contract lab minimums', 'Tooling molds', 'Primary components lock']
                },
                {
                  id: '03',
                  title: 'Brand Creation',
                  desc: 'Positioning your formulation as a commodity versus setting a high-margin luxury sensory narrative limits price sensitivity. This includes target user visual positioning, complete layout system, and packaging structures.',
                  highlights: ['Structural packaging specs', 'Strategic positioning', 'Complete visual suite']
                },
                {
                  id: '04',
                  title: 'Launch Scope',
                  desc: 'Initial stocking strategies, target launch channels (headless custom web interface vs retail channels integration), sampling runs, and PR strategy define early cashflow allocations.',
                  highlights: ['First container runs', 'E-commerce platform build', 'Promotional allocation']
                }
              ].map((card) => (
                <div 
                  key={card.id}
                  className="bg-white border border-[#EAEAEA] rounded-[32px] p-8 flex flex-col justify-between text-left hover:border-[#D97706]/30 transition-all shadow-xs"
                >
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-xs font-black text-[#D97706]">
                        {card.id}
                      </span>
                      <span className="w-2.5 h-2.5 rounded-full bg-zinc-100" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-black text-[#111111] uppercase tracking-tight">
                        {card.title}
                      </h3>
                      <p className="text-xs text-[#666666] font-semibold leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-[#EAEAEA] pt-4 mt-8 space-y-1">
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block">Diligence metrics</span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {card.highlights.map((h, i) => (
                        <span key={i} className="text-[9px] font-black text-[#111111] bg-[#FAFAFA] border border-[#EAEAEA] px-2.5 py-1 rounded">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[11px] font-black uppercase text-[#666666] tracking-[0.2em] text-center">
              No two launches are exactly the same.
            </p>

          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 3: INVESTMENT PATHWAYS              */}
        {/* ========================================== */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto">
            
            <div className="max-w-4xl mb-16 md:mb-24 text-left">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-4">
                INVESTMENT PATHWAYS
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight uppercase leading-[0.95] text-[#111111]">
                Tailored Advisory Pathways <br />
                <span className="text-zinc-400 font-light">Engineered to Protect Your Capital</span>
              </h2>
            </div>

            {/* Consulting Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* Card 1: Launch Starter */}
              <div className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-[36px] p-8 text-left flex flex-col justify-between min-h-[480px]">
                <div className="space-y-6">
                  <div>
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block mb-2">
                      PATHWAY 01
                    </span>
                    <h3 className="text-2xl font-black text-[#111111] uppercase tracking-tight">
                      Launch Starter
                    </h3>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#666666] block">
                      IDEAL FOR
                    </span>
                    <p className="text-sm font-semibold text-[#666666] leading-snug">
                      First-time founders validating an idea, researching formulation barriers, and checking feasibility.
                    </p>
                  </div>

                  {/* Pricing Range in large readable type */}
                  <div className="pt-4 border-t border-zinc-200">
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block mb-1">
                      INVESTMENT RANGE
                    </span>
                    <span className="text-3xl font-mono font-black text-[#111111]">
                      ₹25,000+
                    </span>
                  </div>
                </div>

                <div className="pt-8 space-y-4">
                  <div className="space-y-2 border-t border-zinc-200 pt-4">
                    {['Product Feasibility Map', 'Ingredients Standard Check', 'Category Regulatory Prep'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                        <Check size={12} className="text-[#D97706]" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="w-full text-center py-4 bg-white text-[#111111] border border-[#EAEAEA] rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#D97706] hover:text-white hover:border-transparent transition-all block"
                  >
                    BOOK DISCOVERY CALL
                  </Link>
                </div>
              </div>

              {/* Card 2: Launch Growth - MOST POPULAR */}
              <div className="bg-[#FAFAFA] border-2 border-[#D97706] rounded-[36px] p-8 text-left flex flex-col justify-between min-h-[480px] relative shadow-md">
                <span className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-[#D97706] text-white rounded-full font-black text-[8px] uppercase tracking-widest">
                  MOST POPULAR
                </span>

                <div className="space-y-6">
                  <div>
                    <span className="text-[9px] font-black text-[#D97706] uppercase tracking-widest block mb-2">
                      PATHWAY 02
                    </span>
                    <h3 className="text-2xl font-black text-[#111111] uppercase tracking-tight">
                      Launch Growth
                    </h3>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#666666] block">
                      IDEAL FOR
                    </span>
                    <p className="text-sm font-semibold text-[#666666] leading-snug">
                      Founders preparing to launch, mapping custom materials pipelines, and validating formulation batches.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-200">
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block mb-1">
                      INVESTMENT RANGE
                    </span>
                    <span className="text-3xl font-mono font-black text-[#111111]">
                      ₹75,000+
                    </span>
                  </div>
                </div>

                <div className="pt-8 space-y-4">
                  <div className="space-y-2 border-t border-zinc-200 pt-4">
                    {['Manufacturer Onboarding', 'Regulatory Safe Testing', 'Cohesive Packaging Map', 'Custom E-com Launch Build'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-bold text-zinc-900">
                        <Check size={12} className="text-[#D97706]" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="w-full text-center py-4 bg-[#111111] text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#D97706] transition-all block"
                  >
                    GET CUSTOM PLAN
                  </Link>
                </div>
              </div>

              {/* Card 3: Launch Premium */}
              <div className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-[36px] p-8 text-left flex flex-col justify-between min-h-[480px]">
                <div className="space-y-6">
                  <div>
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block mb-2">
                      PATHWAY 03
                    </span>
                    <h3 className="text-2xl font-black text-[#111111] uppercase tracking-tight">
                      Launch Premium
                    </h3>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#666666] block">
                      IDEAL FOR
                    </span>
                    <p className="text-sm font-semibold text-[#666666] leading-snug">
                      Founders seeking end-to-end execution, full-scale custom compounding, and turnkey market positioning.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-200">
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block mb-1">
                      INVESTMENT RANGE
                    </span>
                    <span className="text-3xl font-mono font-black text-[#111111]">
                      ₹2,00,000+
                    </span>
                  </div>
                </div>

                <div className="pt-8 space-y-4">
                  <div className="space-y-2 border-t border-zinc-200 pt-4">
                    {['Turnkey Formulation Oversight', 'Total Regulatory Approvals', 'Multi-batch Sourcing Escrow', 'Launch Day Integration Plan'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                        <Check size={12} className="text-[#D97706]" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="w-full text-center py-4 bg-white text-[#111111] border border-[#EAEAEA] rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#D97706] hover:text-white hover:border-transparent transition-all block"
                  >
                    BUILD MY BRAND
                  </Link>
                </div>
              </div>

              {/* Card 4: Launch Partner */}
              <div className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-[36px] p-8 text-left flex flex-col justify-between min-h-[480px]">
                <div className="space-y-6">
                  <div>
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block mb-2">
                      PATHWAY 04
                    </span>
                    <h3 className="text-2xl font-black text-[#111111] uppercase tracking-tight">
                      Launch Partner
                    </h3>
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[10px] font-black uppercase tracking-wider text-[#666666] block">
                      IDEAL FOR
                    </span>
                    <p className="text-sm font-semibold text-[#666666] leading-snug">
                      Long-term growth-focused brands needing dedicated continuous scaling and dynamic supply chain managers.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-zinc-200">
                    <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest block mb-1">
                      INVESTMENT RANGE
                    </span>
                    <span className="text-3xl font-sans font-black text-[#111111]">
                      Custom Advisory
                    </span>
                  </div>
                </div>

                <div className="pt-8 space-y-4">
                  <div className="space-y-2 border-t border-zinc-200 pt-4">
                    {['Dedicated Launch Manager', 'New Variant Formulations', 'Continuous Sourcing Audits', 'Monthly Supply Agreements'].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                        <Check size={12} className="text-[#D97706]" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="w-full text-center py-4 bg-white text-[#111111] border border-[#EAEAEA] rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#D97706] hover:text-white hover:border-transparent transition-all block"
                  >
                    APPLY NOW
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 4: INDUSTRY INVESTMENT ESTIMATES   */}
        {/* ========================================== */}
        <section className="py-24 md:py-32 px-6 bg-[#FAFAFA] border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-4">
                CATEGORY BUDGETS
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight uppercase leading-[0.95] text-[#111111]">
                Typical Launch Investment <br />
                <span className="text-zinc-400 font-light">By Product Category</span>
              </h2>
            </div>

            {/* Display premium category cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                { name: 'Luxury Perfume', budget: '₹2 Lakh – ₹10 Lakh+', detail: 'Includes luxury heavy glass, fine mist French actuators, compliance compounds, IFRA safety certificates, and secondary magnetic closures.' },
                { name: 'Ayurveda', budget: '₹3 Lakh – ₹20 Lakh+', detail: 'GMP certified extracts, standardization testing, AYUSH drug formulations approval, and premium dark violet glass packaging protecting herb stability.' },
                { name: 'Cosmetics', budget: '₹3 Lakh – ₹25 Lakh+', detail: 'Skin contact assays, safety evaluations, ISO 22716 testing, custom lip gloss or palette containers, and organic color stabilization.' },
                { name: 'Nutraceuticals', budget: '₹5 Lakh – ₹50 Lakh+', detail: 'Standard FSSAI alignments, heavy compound screenings, functional gummy or gel encapsulation lines, and climate-controlled transport prep.' },
                { name: 'Personal Care', budget: '₹2 Lakh – ₹20 Lakh+', detail: 'High volume compounders, dermatologically audited wash arrays, custom pump closures, and batch oxidation consistency audits.' },
                { name: 'Pet Care', budget: '₹3 Lakh – ₹15 Lakh+', detail: 'Animal nutrition, hypoallergenic organic shampoo formulas, safety vet screening certifications, and environmental eco-carton packaging.' },
              ].map((cat, i) => (
                <div 
                  key={i}
                  className="bg-white border border-[#EAEAEA] rounded-[32px] p-8 text-left hover:border-[#D97706]/40 transition-transition group hover:shadow-xs"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#D97706] mb-1.5 block">
                    {cat.name}
                  </span>
                  <div className="text-3xl font-mono font-black text-[#111111] mb-4">
                    {cat.budget}
                  </div>
                  <div className="h-px bg-zinc-100 my-4" />
                  <p className="text-xs text-[#666666] font-semibold leading-relaxed">
                    {cat.detail}
                  </p>
                </div>
              ))}
            </div>

            {/* Disclaimer box */}
            <div className="max-w-3xl mx-auto p-6 md:p-8 bg-white border border-[#EAEAEA] rounded-3xl text-left">
              <h4 className="text-xs font-black uppercase tracking-wider text-[#111111] mb-2 flex items-center gap-2">
                <AlertTriangle size={14} className="text-[#D97706]" />
                IMPORTANT INVESTMENT DISCLAIMER
              </h4>
              <p className="text-[11px] text-[#666666] font-semibold leading-relaxed">
                The actual capital required varies substantially based on production details such as raw Minimum Order Quantity (MOQ) floors, customized container closures, specific drug license compliance fees, custom headless website architecture, and initial media launch goals. Our principal methodology prioritizes structural capital preservation during initial pilot scale runs.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 5: WHAT YOUR INVESTMENT COVERS     */}
        {/* ========================================== */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto">
            
            <div className="max-w-4xl mb-16 md:mb-24 text-left">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-4">
                TOTAL BUSINESS COVERAGE
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight uppercase leading-[0.95] text-[#111111]">
                Beyond Design. Beyond Marketing.<br />
                <span className="text-zinc-400 font-light">Building A Business Foundation.</span>
              </h2>
            </div>

            {/* Premium Ecosystem Graphic Diagram */}
            <div className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-[48px] p-8 md:p-12 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D97706]/3 rounded-full blur-[80px]" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
                <div className="lg:col-span-4 space-y-6">
                  <h3 className="text-2xl md:text-3xl font-black text-[#111111] uppercase tracking-tight">
                    The Banega Integration Matrix
                  </h3>
                  <p className="text-sm font-semibold text-[#666666] leading-relaxed">
                    Most agencies only deliver logo files or write basic social media ads. 
                    We build actual enterprise structures. 
                    Every pathway with Banega Brand fully coordinates the physical, visual, regulatory, and digital assets needed to claim market share.
                  </p>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { title: 'Validation', desc: 'Pre-launch formula stability profiling and market gap research.' },
                    { title: 'Manufacturer network', desc: 'Secure sourcing pipelines with pre-vetted contracts and lower MOQ floors.' },
                    { title: 'product development', desc: 'Raw packaging selection, compounding audits, and scent/active adjustments.' },
                    { title: 'brand identity', desc: 'Luxury typography, distinctive narrative setup, and sensory positioning.' },
                    { title: 'packaging engineering', desc: 'Box structural maps, leak safety assessments, and glass weight balance.' },
                    { title: 'compliance locking', desc: 'Drug control certifications (AYUSH, FSSAI, ISO 22716, FDA/IFRA checks).' },
                    { title: 'headless website build', desc: 'Ultra-fast loading online store protecting conversion and cart rates.' },
                    { title: 'launch execution', desc: 'Logistics coordination, transport temperature sync, and campaign maps.' },
                    { title: 'growth direction', desc: 'Continuous scaling assessments, multi-batch cost audits, and scaling.' }
                  ].map((block, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white border border-[#EAEAEA] rounded-2xl p-5 hover:border-[#D97706]/20 transition-all transition-duration-300 transform hover:-translate-y-0.5"
                    >
                      <span className="font-mono text-[9px] font-black text-[#D97750] block uppercase mb-1">
                        MODULE {idx < 9 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <h4 className="text-xs font-black uppercase text-[#111111] tracking-tight mb-2">
                        {block.title}
                      </h4>
                      <p className="text-[10px] text-[#666666] font-semibold leading-relaxed">
                        {block.desc}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 6: WHY FOUNDERS LOSE MONEY         */}
        {/* ========================================== */}
        <section className="py-24 md:py-32 px-6 bg-[#FAFAFA] border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111111] text-[#D97706] text-[8px] font-black uppercase tracking-widest mb-4">
                COMMON MISTAKES
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight uppercase leading-[0.95] text-[#111111]">
                The Cost Of <br />
                <span className="text-red-700 font-light">Doing It Wrong</span>
              </h2>
            </div>

            {/* Warning Cards Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                { title: 'Wrong Product', reason: 'Launching without formulation stability tests or verification of chemical safety benchmarks. Results in customer skin reactions and mandatory product recalls.' },
                { title: 'Wrong Manufacturer', reason: 'Falling for inflated default factory contract thresholds or agents claiming false licensing credentials. Restricts starting margins and ties up critical runway early.' },
                { title: 'Weak Packaging', reason: 'Selecting low-cost container closures or actuators from unverified distributors. Results in catastrophic leaks during standard transit pressure shifts.' },
                { title: 'Delayed Compliance', reason: 'Failing to file for mandatory AYUSH, FSSAI, or drug control compound audits early. Halts delivery completely right when your launch momentum peaks.' },
                { title: 'Poor Launch Planning', reason: 'Pouring money into a silent product release without pre-validated media hooks. Early inventory rots in warehouses eating compounding margins.' },
                { title: 'Random Spending', reason: 'Wasting cashflow on unnecessary agency consultancies or massive unnecessary inventory batches instead of isolating robust pilot runs and feedback loops.' }
              ].map((mistake, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-[#EAEAEA] rounded-[32px] p-8 text-left space-y-4 hover:border-red-500/20 transition-all flex flex-col justify-between hover:shadow-xs"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-red-500/[0.04] border border-red-500/10 flex items-center justify-center text-red-600">
                      <AlertTriangle size={18} />
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-tight text-zinc-950">
                      {mistake.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#666666] font-semibold leading-relaxed mt-4 flex-1">
                    {mistake.reason}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Statement */}
            <div className="text-center font-sans space-y-2">
              <p className="text-xl font-black text-[#111111] uppercase tracking-tight">
                The goal isn't spending less.
              </p>
              <p className="text-sm font-black text-[#D97706] uppercase tracking-wide">
                The goal is spending correctly.
              </p>
            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 7: THE REAL ROI                    */}
        {/* ========================================== */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-4">
                ACTUAL FOUNDERS ADVANTAGE
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight uppercase leading-[0.95] text-[#111111]">
                What Founders Actually Gain
              </h2>
            </div>

            {/* 5 Premium Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
              {[
                { title: 'Clarity', d: 'No hidden agency markups or vague line items. You see exactly how every single rupee distributes to R&D, tooling, testing, and compliance.' },
                { title: 'Confidence', d: 'Sleep peacefully knowing and retaining total intellectual property ownership of your formulations. Certified, pre-audited labs back every batch.' },
                { title: 'Speed', d: 'Bypass typical launch trial-and-error traps, saving 6-9 months of chemical adjustments and regulatory rejection delay.' },
                { title: 'Network', d: 'Inherit the high prestige compounding leverage of Banega Brand, direct access routes to global container printers, and IFRA certified chemists.' },
                { title: 'Execution', d: 'Acquire a synchronized, master framework where package engineering, formulation stability, and custom commerce builds unite seamlessly.' },
              ].map((roi, idx) => (
                <div 
                  key={idx} 
                  className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-3xl p-6 text-left flex flex-col justify-between min-h-[220px]"
                >
                  <h3 className="text-lg font-black uppercase tracking-tight text-[#111111] mb-3">
                    {roi.title}
                  </h3>
                  <p className="text-[11px] text-[#666666] font-semibold leading-relaxed">
                    {roi.d}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs font-black text-[#666666] uppercase tracking-widest text-center">
              *A structured launch process can save months of trial and error.
            </p>

          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 8: LAUNCH BUDGET CALCULATOR        */}
        {/* ========================================== */}
        <section id="calculator-section" className="py-24 md:py-32 px-6 bg-[#FAFAFA] border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-4">
                ESTIMATION UTILITY
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight uppercase leading-[0.95] text-[#111111]">
                Estimate Your Launch Budget
              </h2>
              <p className="text-[#666666] text-base font-bold mt-4 max-w-xl leading-relaxed">
                Tune your options below to visually estimate your brand’s custom operational setup cost and receive dedicated expert launch advisory recommendations.
              </p>
            </div>

            <div className="bg-white border border-[#EAEAEA] rounded-[48px] p-6 md:p-12 shadow-sm text-left relative overflow-hidden">
              <div className="absolute top-[10%] left-[-100px] w-64 h-64 bg-[#D97706]/3 rounded-full blur-[60px]" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
                
                {/* Inputs area */}
                <div className="lg:col-span-7 space-y-6">
                  <h3 className="text-xl font-black uppercase tracking-tight text-zinc-950 mb-4 border-b border-zinc-100 pb-2">
                    Configuration Parameters
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Industry */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-wider text-[#666666] block">
                        Brand Category Target
                      </label>
                      <select 
                        value={industry}
                        onChange={(e) => setIndustry(e.target.value)}
                        className="w-full bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl px-4 py-3 text-xs font-bold text-zinc-800 outline-none focus:border-[#D97706]"
                      >
                        <option value="perfume">Luxury Perfume</option>
                        <option value="ayurveda">Ayurveda</option>
                        <option value="cosmetics">Cosmetics</option>
                        <option value="nutraceuticals">Nutraceuticals</option>
                        <option value="personal">Personal Care</option>
                        <option value="pet">Pet Care</option>
                      </select>
                    </div>

                    {/* Product Type Custom Text */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-wider text-[#666666] block">
                        Target Variant Type (e.g. Eau de Parfum)
                      </label>
                      <input 
                        type="text"
                        placeholder="e.g. Skin Serum, Functional Protein"
                        value={productType}
                        onChange={(e) => setProductType(e.target.value)}
                        className="w-full bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl px-4 py-3 text-xs font-bold text-zinc-800 outline-none focus:border-[#D97706]"
                      />
                    </div>

                    {/* Timeline */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-wider text-[#666666] block">
                        Launch Timeline Goal
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'fast', label: '< 3m' },
                          { id: 'mid', label: '3-6m' },
                          { id: 'standard', label: '6m+' }
                        ].map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setTimeline(item.id)}
                            className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-center border cursor-pointer ${timeline === item.id ? 'bg-[#111111] text-white border-transparent' : 'bg-[#FAFAFA] text-[#666666] hover:bg-zinc-50 border-zinc-200'}`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* MOQ Selection */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-wider text-[#666666] block">
                        Starting Vol Target (MOQ)
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {[
                          { id: 'low', label: '500-1k' },
                          { id: 'mid', label: '1k-2.5k' },
                          { id: 'high', label: '5k+' }
                        ].map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setMoq(item.id)}
                            className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-center border cursor-pointer ${moq === item.id ? 'bg-[#111111] text-white border-transparent' : 'bg-[#FAFAFA] text-[#666666] hover:bg-zinc-50 border-zinc-200'}`}
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Packaging Complexity selector */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-wider text-[#666666] block">
                        Packaging Complexity
                      </label>
                      <select
                        value={packaging}
                        onChange={(e) => setPackaging(e.target.value)}
                        className="w-full bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl px-4 py-3 text-xs font-bold text-zinc-800 outline-none focus:border-[#D97706]"
                      >
                        <option value="standard">Standard Component + Premium Label</option>
                        <option value="semi">Semi-Custom Container Coating</option>
                        <option value="custom">Fully Custom Custom Mold Structure</option>
                      </select>
                    </div>

                    {/* Website Inclusion toggle */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-wider text-[#666666] block">
                        Include Premium Headless Website Build?
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setWebsite(true)}
                          className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-center border cursor-pointer ${website ? 'bg-[#111111] text-white border-transparent' : 'bg-[#FAFAFA] text-[#666666] hover:bg-zinc-50 border-zinc-200'}`}
                        >
                          Yes Include
                        </button>
                        <button
                          type="button"
                          onClick={() => setWebsite(false)}
                          className={`py-3 rounded-xl text-[10px] font-black uppercase tracking-widest text-center border cursor-pointer ${!website ? 'bg-[#111111] text-white border-transparent' : 'bg-[#FAFAFA] text-[#666666] hover:bg-zinc-50 border-zinc-200'}`}
                        >
                          No Exclude
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Lead form block before calculations render */}
                  <form onSubmit={handleCalculate} className="pt-6 border-t border-zinc-100 space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-wider text-zinc-400 block">
                      Lead Verification for Sourcing Estimate
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <input 
                        type="text" 
                        placeholder="Your Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl px-4 py-3 text-xs font-bold text-zinc-800 outline-none focus:border-[#D97706]"
                        required
                      />
                      <input 
                        type="tel" 
                        placeholder="Your Active Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl px-4 py-3 text-xs font-bold text-zinc-800 outline-none focus:border-[#D97706]"
                        required
                      />
                      <input 
                        type="email" 
                        placeholder="Your Active Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl px-4 py-3 text-xs font-bold text-zinc-800 outline-none focus:border-[#D97706]"
                        required
                      />
                    </div>
                    {formError && (
                      <p className="text-[10px] font-bold text-red-600 uppercase tracking-wider">
                        {formError}
                      </p>
                    )}
                    <button
                      type="submit"
                      className="w-full py-4 bg-[#D97706] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#111111] transition-colors cursor-pointer min-h-[44px]"
                    >
                      GET MY ESTIMATE
                    </button>
                  </form>
                </div>

                {/* Simulated Outputs and recommendations area */}
                <div className="lg:col-span-5 bg-[#FAFAFA] border border-[#EAEAEA] rounded-[36px] p-8 flex flex-col justify-between text-left min-h-[400px]">
                  
                  <AnimatePresence mode="wait">
                    {!isCalculated ? (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12"
                      >
                        <Lock size={32} className="text-[#D97706] animate-pulse" />
                        <div>
                          <h4 className="text-sm font-black uppercase text-zinc-900 mb-1">
                            Sourcing Report Locked
                          </h4>
                          <p className="text-[11px] text-[#666666] font-semibold max-w-xs leading-relaxed">
                            Fill out the verification details to compile the dynamic investment estimates and obtain your recommended pathway.
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="space-y-6 h-full flex flex-col justify-between"
                      >
                        {/* Dynamic pricing display */}
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-[9px] font-black text-zinc-400 uppercase tracking-widest">
                              {selectedCategoryLabel()} SOURCING ASSESSMENT
                            </span>
                            <span className="text-[8px] font-black bg-[#D97706]/10 text-[#D97706] px-2 py-0.5 rounded uppercase">
                              Verified Lead
                            </span>
                          </div>
                          
                          <div className="space-y-1">
                            <span className="text-[10px] font-black text-[#666666] uppercase block">
                              ESTIMATED MINIMUM INITIAL CAPITAL REQUIRED
                            </span>
                            <div className="text-3xl md:text-4xl lg:text-5xl font-mono font-black text-[#111111] leading-none">
                              ₹{getCalculatedRange().min}
                            </div>
                            <span className="text-[10px] text-[#666666] font-mono block pt-1">
                              Up to ₹{getCalculatedRange().max} (High custom molds inclusion)
                            </span>
                          </div>
                        </div>

                        {/* Customized recommendation bullets based on selections */}
                        <div className="space-y-3.5 pt-4 border-t border-zinc-200">
                          <span className="text-[10px] font-black text-[#111111] uppercase tracking-wider block">
                            Recommended Next Steps:
                          </span>
                          <div className="space-y-2 font-semibold text-[11px] text-zinc-700 leading-snug">
                            <div className="flex items-start gap-2">
                              <CheckCircle2 size={14} className="text-[#D97706] shrink-0 mt-0.5" />
                              <p>
                                <strong>Isolate Formula Property:</strong> Arrange an IP protection consultation session to secure formulation copyright.
                              </p>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 size={14} className="text-[#D97706] shrink-0 mt-0.5" />
                              <p>
                                <strong>Setup Vetted Lab Matches:</strong> Filter our pre-negotiated ecosystem compounders supporting your target volumes.
                              </p>
                            </div>
                            {website && (
                              <div className="flex items-start gap-2">
                                <CheckCircle2 size={14} className="text-[#D97706] shrink-0 mt-0.5" />
                                <p>
                                  <strong>Headless Commerce Blueprint:</strong> Establish highly distinct online store wireframes matching luxury brand positions.
                                </p>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Action and Reset */}
                        <div className="pt-6 border-t border-zinc-200 flex flex-col gap-2">
                          <Link
                            to="/contact"
                            className="w-full text-center py-3.5 bg-[#111111] text-white rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#D97706] transition-colors"
                          >
                            DISCUSS THIS LAUNCH BLUEPRINT
                          </Link>
                          <button
                            type="button"
                            onClick={handleReset}
                            className="text-center font-mono text-[9px] font-black text-zinc-400 hover:text-zinc-900 uppercase tracking-widest pt-2 cursor-pointer"
                          >
                            Configure Different Setup
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 9: TESTIMONIALS                     */}
        {/* ========================================== */}
        <section className="py-24 md:py-32 px-6 bg-white border-b border-[#EAEAEA]">
          <div className="max-w-7xl mx-auto">
            
            <div className="max-w-3xl mb-16 text-left">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-4">
                FOUNDER REVIEWS
              </span>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight uppercase leading-[0.95] text-[#111111]">
                Founders Who Invested In Doing It Right
              </h2>
            </div>

            {/* Premium Video Testimonial Mock Component first */}
            <div className="bg-[#FAFAFA] rounded-[48px] border border-[#EAEAEA] p-6 md:p-10 mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Simulated video frame */}
                <div className="lg:col-span-6 aspect-video rounded-3xl bg-[#111111] relative overflow-hidden group shadow-md flex items-center justify-center">
                  <div className="absolute inset-0 bg-cover bg-center brightness-60 group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=640&auto=format&fit=crop")' }} />
                  {/* Subtle soundwaves visual */}
                  <div className="absolute bottom-4 left-6 flex items-end gap-1 pointer-events-none z-10">
                    <span className="w-1 h-3 bg-[#D97706] animate-[ping_1s_infinite]" />
                    <span className="w-1 h-5 bg-[#D97706] animate-[ping_1.5s_infinite_delay-200]" />
                    <span className="w-1 h-2 bg-[#D97706]" />
                    <span className="text-[9px] text-[#FAFAFA]/70 font-mono font-black uppercase tracking-widest pl-2">
                      FOUNDER INTERVIEW • PLAYBACK TIMELINE
                    </span>
                  </div>
                  {/* Elegant Play Button */}
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white scale-100 hover:scale-110 duration-300 cursor-pointer z-10 group-hover:bg-[#D97706] group-hover:border-transparent">
                    <Play size={20} fill="currentColor" className="ml-1" />
                  </div>
                </div>

                {/* Quoted content */}
                <div className="lg:col-span-6 text-left space-y-4">
                  <span className="text-[10px] font-black text-[#D97706] uppercase tracking-widest block">
                    CASE STUDY VERIFIED
                  </span>
                  <blockquote className="text-lg md:text-xl font-black text-zinc-950 uppercase tracking-tight leading-snug">
                    "WE ALMOST COMMITTED TO A DIRECTORY LISTING THAT HAD EXAGGERATED BOTTLE MOLD CONTRACTS. BANEGA BRAND SAVED US ₹4 LAKH IN WASTE CAPITAL ON WEEK ONE BY STRUCTURING THE PILOT DILIGENCE PROCESS SECURELY."
                  </blockquote>
                  <div className="pt-2 border-t border-zinc-150">
                    <p className="text-xs font-black uppercase text-zinc-900 tracking-tight">Rajesh Malhotra</p>
                    <p className="text-[10px] text-[#666666] font-bold uppercase tracking-wider">Founder, Elemis Botanical Shampoos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Written modular reviews second */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { quote: "The Formulation Protection NDA gave us absolute assurance. Our customized herbal ratios belong fully to us. Real professionalism.", author: "Meera Nair", brand: "Ayurveda Wellness" },
                { quote: "Banega Brand is a real strategic launch consultant, not a basic factory list. They held continuous supply pipeline negotiation checks.", author: "Armaan Sen", brand: "Veda Grooming Collections" },
                { quote: "Our luxury packaging actuators and weight balances were perfect blockages to leak issues. They audited compounding standards directly.", author: "Sahil Grover", brand: "Aura Premium Colognes" }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="bg-white border border-[#EAEAEA] rounded-[32px] p-8 text-left hover:border-[#D97706]/20 transition-all flex flex-col justify-between hover:shadow-xs"
                >
                  <p className="text-xs font-bold text-[#666666] leading-relaxed">
                    "{item.quote}"
                  </p>
                  <div className="border-t border-[#EAEAEA] pt-4 mt-6">
                    <h5 className="text-xs font-black uppercase text-zinc-950">{item.author}</h5>
                    <p className="text-[9px] text-[#666666] uppercase tracking-wider font-bold mt-0.5">{item.brand}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* SECTION 10: FAQ                            */}
        {/* ========================================== */}
        <section className="py-24 md:py-32 px-6 bg-[#FAFAFA] border-b border-[#EAEAEA]">
          <div className="max-w-4xl mx-auto text-left">
            
            <div className="mb-16">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-4">
                FAQ
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight uppercase leading-[0.95] text-[#111111]">
                Frequently Asked Inquiries
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="bg-white border border-[#EAEAEA] rounded-2xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                    className="w-full h-16 px-6 text-left flex justify-between items-center text-xs font-black uppercase tracking-wider text-zinc-900 cursor-pointer active:bg-zinc-50"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown 
                      size={16} 
                      className={`text-[#D97706] transition-transform duration-300 shrink-0 ${openFaqIndex === index ? 'rotate-180' : ''}`} 
                    />
                  </button>

                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-2 font-semibold text-xs text-[#666666] leading-relaxed border-t border-zinc-100">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* FINAL CTA SECTION                          */}
        {/* ========================================== */}
        <section className="py-24 md:py-32 bg-white text-center px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black uppercase leading-[0.9] tracking-tight text-zinc-950">
              Launching A Brand Is An Investment. <br />
              <span className="text-[#D97706]">Make It A Smart One.</span>
            </h2>
            <p className="text-md md:text-lg text-[#666666] font-semibold max-w-xl mx-auto leading-relaxed">
              Let's understand your goals, evaluate your category and create a realistic launch plan.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact"
                className="w-full sm:w-auto h-16 px-10 bg-[#111111] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#D97706] transition-all transform hover:-translate-y-1 shadow-md flex items-center justify-center gap-2.5"
              >
                GET MY LAUNCH ROADMAP
                <ArrowRight size={14} />
              </Link>
              <Link 
                to="/contact"
                className="w-full sm:w-auto h-16 px-10 bg-[#FAFAFA] text-[#111111] border border-[#EAEAEA] rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-zinc-100 transition-all flex items-center justify-center"
              >
                BOOK A STRATEGY CALL
              </Link>
            </div>
          </div>
        </section>

      </main>

      <MainFooter />
    </div>
  );
};
