import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  ArrowRight, 
  Factory, 
  Layers, 
  HelpCircle, 
  CheckCircle2, 
  Sparkles,
  Users,
  TrendingUp,
  FileText,
  Lock,
  Activity,
  AlertTriangle,
  FileCheck2,
  Check,
  Search,
  CheckCircle,
  Dna
} from 'lucide-react';

import { Navbar } from '../components/Navbar';
import { MainFooter } from '../components/MainFooter';

export const ManufacturerNetworkPage = () => {
  // Simulator State variables
  const [selectedCategory, setSelectedCategory] = useState<'perfume' | 'ayurveda' | 'cosmetics' | 'nutraceuticals'>('perfume');
  const [targetEstVolume, setTargetEstVolume] = useState<number>(1000);
  const [activeTab, setActiveTab] = useState<'consultancy' | 'directory'>('consultancy');

  const categoryGuides = {
    perfume: {
      title: 'Luxury Perfume Sourcing',
      regulatory: 'IFRA Standard & Alcohol Licensing',
      keyFactor: 'Glass clarity, weight factor, and crimping nozzle leak metrics',
      typicalSamples: '3-4 formulation iterations',
      protection: 'Formulation retention & trademark lock'
    },
    ayurveda: {
      title: 'Authentic Ayurveda Sourcing',
      regulatory: 'AYUSH Certification & Traceability',
      keyFactor: 'Standardized active botanical extract percentages',
      typicalSamples: '2-3 formulation iterations',
      protection: 'Non-disclosure of ancient custom herbal ratios'
    },
    cosmetics: {
      title: 'High-End Cosmetic Compounding',
      regulatory: 'ISO 22716 & Cruelty-Free Compliance',
      keyFactor: 'Viscosity, oxidation checks, and color-matching stability',
      typicalSamples: '4-5 formulation iterations',
      protection: 'Custom formulation copyright ownership'
    },
    nutraceuticals: {
      title: 'Dietary & Wellness Nutraceuticals',
      regulatory: 'FSSAI Standards & WHO-GMP Labs',
      keyFactor: 'Heavy metal screenings, capsule stability, shelf disintegration rates',
      typicalSamples: '2-3 formulation iterations',
      protection: 'Proprietary ingredient compound insulation'
    }
  };

  return (
    <div id="manufacturer-network-page" className="relative bg-[#FAFAFA] text-[#111111] selection:bg-[#D97706] selection:text-white min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>Verified Third-Party Manufacturing Network | Banega Brand – India's Leading Product Launch Company</title>
        <meta name="description" content="Access our verified, audited ecosystem of GMP and ISO certified OEM/ODM manufacturers across perfume, cosmetics, skincare, Ayurveda, and nutraceuticals." />
        <meta name="keywords" content="Third Party Manufacturers India, Cosmetic OEM India, Perfume Contract Manufacturing, Ayurveda Third Party Manufacturer, Banega Brand" />
        <link rel="canonical" href="https://banegabrand.com/manufacturer-network" />
        <meta property="og:title" content="Verified Manufacturing Network | Banega Brand" />
        <meta property="og:description" content="Audited GMP certified contract manufacturers across India." />
        <meta property="og:url" content="https://banegabrand.com/manufacturer-network" />
      </Helmet>
      <Navbar />

      <main className="pt-24">
        
        {/* ========================================== */}
        {/* HERO SECTION - Premium Consultancy Position */}
        {/* ========================================== */}
        <section id="network-hero" className="relative py-20 lg:py-32 px-6 overflow-hidden bg-white border-b border-zinc-200/60">
          {/* Decorative Gradients */}
          <div className="absolute inset-0 pointer-events-none opacity-40">
            <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-[#D97706]/5 rounded-full blur-[140px]" />
            <div className="absolute bottom-[10%] left-[10%] w-[450px] h-[450px] bg-[#111111]/5 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            
            {/* Copy Side */}
            <div className="lg:col-span-7 space-y-8 text-left">
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAFAFA] border border-zinc-200 text-[#111111] rounded-full font-black text-[10px] uppercase tracking-[0.25em]"
              >
                <ShieldCheck size={12} className="text-[#D97706]" />
                Premium Sourcing Guidance
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-tight uppercase leading-[0.9] text-[#111111]"
              >
                A Vetted Ecosystem. <br />
                Guided By <span className="text-[#D97706]">Product Launch</span> Experts.
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-[#666666] font-semibold max-w-xl leading-relaxed"
              >
                We do not sell a directory. We build, negotiate, protect, and oversee your custom manufacturing pipeline from formulas to scaling.
              </motion.p>

              {/* Distinction Banner inside Hero */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="p-5 rounded-2xl bg-[#FAFAFA] border border-zinc-200 text-xs text-[#666666] font-semibold space-y-2.5 max-w-lg"
              >
                <div className="flex items-center gap-2 font-black text-[#111111] uppercase tracking-wider">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#D97706]" />
                  Our Structural Manifesto
                </div>
                <p className="leading-relaxed">
                  Choosing a manufacturer is not like scrolling through a listings directory. 
                  It is a critical IP, quality, and financial decision. 
                  We stand as your strategic launch consultant, protecting your capital from unqualified factories and loose legal terms.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 pt-4"
              >
                <Link
                  to="/contact"
                  className="bg-[#111111] text-white px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#D97706] transition-all transform hover:-translate-y-0.5 shadow-md shadow-black/5 text-center flex items-center justify-center gap-2.5 min-h-[44px]"
                >
                  REQUEST AN ECOSYSTEM AUDIT
                  <ArrowRight size={14} />
                </Link>
                <Link
                  to="/services"
                  className="bg-white text-[#111111] border border-zinc-200 px-8 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-zinc-50 transition-all text-center flex items-center justify-center min-h-[44px]"
                >
                  EXPLORE OUR PROCESS
                </Link>
              </motion.div>
            </div>

            {/* Visual Card Side - A schematic mockup showing "Audited Factory Pipeline Dashboard" */}
            <div className="lg:col-span-5 bg-[#FAFAFA] border border-zinc-200 rounded-[48px] p-8 shadow-sm flex flex-col justify-between relative overflow-hidden self-stretch min-h-[450px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#D97706]/5 to-[#111111]/1 pointer-events-none" />
              
              <div className="space-y-6">
                {/* Header widget */}
                <div className="flex justify-between items-center border-b border-zinc-150 pb-4">
                  <div className="flex items-center gap-2">
                    <Factory size={18} className="text-[#D97706]" />
                    <span className="font-mono text-[10px] font-black uppercase text-[#111111] tracking-wider">
                      Strategic Pipeline Standard
                    </span>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#D97706]/10 text-[#D97706] text-[8px] font-black uppercase">
                    Consultancy Managed
                  </span>
                </div>

                {/* Simulated Vetting Steps */}
                <div className="space-y-4">
                  {[
                    { step: '01', name: 'IP Isolation & Formulation Protection', checked: true, text: 'Custom formulas belong to you, protected by ironclad IP boundaries and NDAs.' },
                    { step: '02', name: 'Raw Material Verification', checked: true, text: 'Direct trace audits on compounding agents, packaging materials, and active compounds.' },
                    { step: '03', name: 'Facility Audit & Licensing Checks', checked: true, text: 'WHO-GMP, AYUSH, ISO 22716, or FSSAI certifications verified visually.' },
                    { step: '04', name: 'Optimized MOQ & Target Rate Match', checked: false, text: 'Capital insulation through structured scale planning, keeping initial stock runs small.' }
                  ].map((p, index) => (
                    <div key={index} className="bg-white border border-zinc-150 p-4 rounded-2xl flex items-start gap-3 shadow-xs">
                      <div className={`w-6 h-6 rounded-lg ${p.checked ? 'bg-emerald-50 text-emerald-600' : 'bg-[#D97706]/10 text-[#D97706]'} flex items-center justify-center shrink-0`}>
                        {p.checked ? <Check size={12} strokeWidth={3} /> : <span className="font-mono font-black text-[9px]">{p.step}</span>}
                      </div>
                      <div className="text-left">
                        <h4 className="text-xs font-black uppercase text-zinc-900 tracking-tight leading-none mb-1">
                          {p.name}
                        </h4>
                        <p className="text-[10px] text-[#666666] font-semibold leading-relaxed">
                          {p.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom security assurance stats */}
              <div className="pt-6 border-t border-zinc-200 flex justify-between items-center text-[10px] font-black uppercase tracking-wider text-[#666666]">
                <span>Pipeline Integrity</span>
                <span className="text-emerald-700 font-mono">100% VETTED PASS</span>
              </div>

            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* PARADIGM SHIFT: Directory vs Consultancy   */}
        {/* ========================================== */}
        <section className="py-24 px-6 bg-white border-b border-zinc-200/50">
          <div className="max-w-7xl mx-auto">
            
            {/* Header */}
            <div className="max-w-3xl mb-16 text-left">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-4">
                THE CRITICAL DIFFERENCE
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight uppercase leading-[0.95] text-[#111111]">
                Do Not Launch A Brand <br />
                <span className="text-[#666666] font-light">With An Unvetted Factory List.</span>
              </h2>
            </div>

            {/* Toggle Interactive Simulator */}
            <div className="bg-[#FAFAFA] border border-zinc-200 rounded-[36px] p-6 md:p-10 mb-16 shadow-xs">
              <div className="flex flex-col md:flex-row justify-between items-stretch gap-8">
                
                {/* Left: Explainer card depending on state */}
                <div className="md:w-1/2 flex flex-col justify-between space-y-6 text-left">
                  <div className="flex bg-white border border-zinc-150 p-1.5 rounded-2xl w-fit self-start gap-1">
                    <button 
                      onClick={() => setActiveTab('consultancy')}
                      className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-colors cursor-pointer ${activeTab === 'consultancy' ? 'bg-[#D97706] text-white' : 'hover:bg-zinc-100 text-[#666666]'}`}
                    >
                      Banega Brand Way
                    </button>
                    <button 
                      onClick={() => setActiveTab('directory')}
                      className={`px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-xl transition-colors cursor-pointer ${activeTab === 'directory' ? 'bg-red-500 text-white' : 'hover:bg-zinc-100 text-[#666666]'}`}
                    >
                      B2B Directory Way
                    </button>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-3xl font-black text-[#111111] uppercase tracking-tight leading-none">
                      {activeTab === 'consultancy' ? 'Strategic Sourcing Supervision' : 'Hazardous Blind Outreach'}
                    </h3>
                    <p className="text-sm font-semibold text-[#666666] leading-relaxed">
                      {activeTab === 'consultancy' 
                        ? 'We coordinate, protect, and guide your launch dynamically. You acquire certified formulation ownership, secured volume rates, and direct expert advocacy so production holds zero risks.'
                        : 'Scrolling unvetted catalogs, cold calling agents who pretend to own factories, sending proprietary packaging specs to random web addresses, and losing your trademark rights to intermediaries.'
                      }
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-zinc-150">
                    <span className="text-[10px] font-black text-[#666666] uppercase tracking-widest block">Expected Outcome Details</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeTab === 'consultancy' ? (
                        <>
                          <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                            <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                            Pre-Audit GMP Labs Only
                          </div>
                          <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                            <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                            Formulation Ownership Is Yours
                          </div>
                          <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                            <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                            Custom Sample Supervision
                          </div>
                          <div className="flex items-center gap-2 text-xs font-bold text-zinc-800">
                            <CheckCircle2 size={14} className="text-emerald-600 shrink-0" />
                            Strategic MOQ Reductions
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center gap-2 text-xs font-bold text-red-700">
                            <AlertTriangle size={14} className="text-red-500 shrink-0" />
                            Massive MOQ Trap (5k-10k)
                          </div>
                          <div className="flex items-center gap-2 text-xs font-bold text-red-700">
                            <AlertTriangle size={14} className="text-red-500 shrink-0" />
                            Unvetted Quality Inconsistencies
                          </div>
                          <div className="flex items-center gap-2 text-xs font-bold text-red-700">
                            <AlertTriangle size={14} className="text-red-500 shrink-0" />
                            No Security For Formulation IP
                          </div>
                          <div className="flex items-center gap-2 text-xs font-bold text-red-700">
                            <AlertTriangle size={14} className="text-red-500 shrink-0" />
                            Months of Silent Bottlenecks
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Right: Comparative Table Layout */}
                <div className="md:w-1/2 bg-white rounded-3xl border border-zinc-200 overflow-hidden flex flex-col justify-between shadow-xs">
                  <div className="p-6 border-b border-zinc-150 bg-stone-50/50 flex justify-between items-center">
                    <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">
                      COMPARATIVE PIPELINE METRICS
                    </span>
                    <span className="text-[9px] font-mono font-bold text-stone-500">
                      VETTED VS BLIND OUTREACH
                    </span>
                  </div>

                  <div className="divide-y divide-zinc-150 p-4">
                    {[
                      { metric: 'Manufacturing Standards', banega: 'Strict Audit / GMP Approved', directory: 'Self-Reported / Unvetted' },
                      { metric: 'Formulation Intellectual Property', banega: '100% Owned By The Founder', directory: 'Locked by Lab / High Risk' },
                      { metric: 'Initial Testing Phase', banega: 'Interactive Managed Samples', directory: 'Expensive Standard Batches' },
                      { metric: 'Factory Negotiations', banega: 'Leveraged by Launch volume', directory: 'Friction / Extreme Markups' },
                      { metric: 'Moq Allocation', banega: 'Guaranteed Minimal Thresholds', directory: 'Exaggerated Factory Defaults' },
                    ].map((row, idx) => (
                      <div key={idx} className="py-3 flex flex-col sm:flex-row justify-between items-start sm:items-center text-xs gap-1.5 px-2">
                        <span className="text-[#666666] font-bold sm:w-2/5 text-left">{row.metric}</span>
                        <div className="flex-1 w-full flex justify-between gap-4 font-black">
                          <span className="text-[#D97706] text-left">{row.banega}</span>
                          <span className="text-zinc-400 text-right">{row.directory}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-zinc-50 border-t border-zinc-150 font-mono text-[9px] text-[#666666] font-bold text-center">
                    *Strategic Focus: We protect your formulations so they belong exclusively to you, and negotiate real factory bounds.
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* INTERACTIVE GUIDE SIMULATOR                */}
        {/* ========================================== */}
        <section className="py-24 px-6 bg-[#FAFAFA] border-b border-zinc-200/50">
          <div className="max-w-7xl mx-auto">
            
            <div className="max-w-4xl mb-16 text-left">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-4">
                CONFIGURATE YOUR BLUEPRINT
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight uppercase leading-[0.95] text-[#111111]">
                Custom Sourcing Pipeline Simulator
              </h2>
              <p className="text-[#666666] text-base font-bold mt-4 max-w-2xl leading-relaxed">
                Choose your product category and target stock size below to visualize the direct expert diligence protocols Banega Brand institutes to establish your premium production line.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Left Column: Input Selection Panels */}
              <div className="lg:col-span-5 bg-white border border-zinc-200 rounded-[36px] p-6 md:p-8 flex flex-col justify-between shadow-sm space-y-6 text-left">
                {/* 1. Category Selector */}
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-wider text-[#666666]">
                    Select Brand Category
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { id: 'perfume', label: 'Elegancia Perfume' },
                      { id: 'ayurveda', label: 'Ayurveda Wellness' },
                      { id: 'cosmetics', label: 'Organic Cosmetics' },
                      { id: 'nutraceuticals', label: 'Nutraceuticals' }
                    ].map((btn) => (
                      <button
                        key={btn.id}
                        onClick={() => setSelectedCategory(btn.id as any)}
                        className={`p-4 rounded-2xl text-[11px] font-black uppercase tracking-widest text-center border cursor-pointer transition-all ${selectedCategory === btn.id ? 'bg-[#111111] text-white border-transparent' : 'bg-[#FAFAFA] text-[#666666] hover:bg-zinc-105 border-zinc-200'}`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Target MOQ Run Slider */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-wider text-[#666666]">
                    <span>Target Initial Launch Volume</span>
                    <span className="text-[#D97706] font-mono text-xs">{targetEstVolume.toLocaleString()} units</span>
                  </div>
                  
                  <input
                    type="range"
                    min="500"
                    max="5000"
                    step="250"
                    value={targetEstVolume}
                    onChange={(e) => setTargetEstVolume(parseInt(e.target.value))}
                    className="w-full accent-[#D97706] h-1.5 bg-zinc-200 rounded-lg cursor-pointer"
                  />

                  <div className="flex justify-between text-[9px] text-[#666666] font-mono font-bold uppercase pt-1">
                    <span>500 (Flexible Startup Mode)</span>
                    <span>1,500</span>
                    <span>3,000</span>
                    <span>5,000+ (Enterprise Setup)</span>
                  </div>
                </div>

                {/* Dynamic alert message depending on slider range */}
                <div className="p-4 rounded-2xl bg-amber-500/[0.03] border border-[#D97706]/10 text-xs text-[#666666] leading-relaxed">
                  {targetEstVolume <= 1000 ? (
                    <p>
                      <strong>⚡ Low-MOQ Startup Guidance:</strong> At this size, standard factories turn founders down or charge exorbitant pricing. We use our active agency relationships to obtain pre-negotiated sample volumes at verified rates so you don&apos;t burn capital.
                    </p>
                  ) : targetEstVolume <= 2500 ? (
                    <p>
                      <strong>⚡ Moderate Growth Guidance:</strong> This batch size allows clean container tooling customizations (custom container seals, customized packaging embossing processes). We oversee glass and carton printers with synchronized calendars.
                    </p>
                  ) : (
                    <p>
                      <strong>⚡ High-Volume Enterprise Setup:</strong> Scaled unit metrics allow extreme margin offsets. We establish audited high-capacity plant oversight and draft ironclad continuous supply agreements specifying clear penalty terms for shipping delays.
                    </p>
                  )}
                </div>
              </div>

              {/* Right Column: Simulated Sourcing Guide Presentation */}
              <div className="lg:col-span-7 bg-white border border-zinc-200 rounded-[36px] p-8 shadow-sm flex flex-col justify-between text-left">
                
                <div className="space-y-6">
                  {/* Category Title Header */}
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#D97706] block mb-1">
                      SIMULATED CONFIGURATION RESULTS
                    </span>
                    <h3 className="text-3xl font-black text-[#111111] uppercase tracking-tight">
                      {categoryGuides[selectedCategory].title}
                    </h3>
                    <div className="h-1 w-16 bg-[#D97706] rounded mt-3" />
                  </div>

                  {/* Vetting Specs presentation */}
                  <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-zinc-150">
                      <span className="text-[9px] font-black text-zinc-400 block uppercase mb-1">
                        REGULATORY ALIGNMENTS NEEDED
                      </span>
                      <p className="text-xs font-black text-zinc-900 uppercase">
                        {categoryGuides[selectedCategory].regulatory}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-zinc-150">
                      <span className="text-[9px] font-black text-zinc-400 block uppercase mb-1">
                        CRITICAL AUDITING FOCUS
                      </span>
                      <p className="text-xs font-black text-zinc-900 uppercase">
                        {categoryGuides[selectedCategory].keyFactor}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-zinc-150">
                      <span className="text-[9px] font-black text-zinc-400 block uppercase mb-1">
                        TYPICAL STABILIZATION SAMPLES
                      </span>
                      <p className="text-xs font-black text-zinc-900 uppercase font-sans">
                        {categoryGuides[selectedCategory].typicalSamples}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-[#FAFAFA] border border-zinc-150">
                      <span className="text-[9px] font-black text-zinc-400 block uppercase mb-1">
                        FORMULA OWNERSHIP BOUNDS
                      </span>
                      <p className="text-xs font-black text-zinc-900 uppercase">
                        {categoryGuides[selectedCategory].protection}
                      </p>
                    </div>
                  </div>

                  {/* Sourcing Timeline progress tracker */}
                  <div className="space-y-3 pt-6 border-t border-zinc-150">
                    <span className="text-[9px] font-black uppercase tracking-widest text-zinc-400 block">
                      Estimated Production Pipeline Setup Time
                    </span>
                    <div className="flex gap-2 items-center">
                      <div className="flex-grow bg-zinc-100 h-2.5 rounded-full overflow-hidden relative">
                        <div className="bg-[#D97706] h-full rounded-full transition-all duration-500" style={{ width: targetEstVolume < 1500 ? '45%' : targetEstVolume < 3500 ? '70%' : '90%' }} />
                      </div>
                      <span className="text-xs font-bold text-zinc-800 shrink-0 font-mono">
                        {targetEstVolume < 1500 ? '30-45 Days' : targetEstVolume < 3500 ? '45-60 Days' : '60-75 Days'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Strategy Action bar redirection */}
                <div className="mt-8 pt-6 border-t border-zinc-200/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-[#666666] font-semibold leading-relaxed">
                    Have custom formulation ideas or need specific MOQ checks with pre-negotiated labs? Request a match session today.
                  </p>
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto px-6 py-3.5 bg-[#111111] text-white rounded-xl font-black text-[10px] uppercase tracking-widest text-center hover:bg-[#D97706] transition-colors whitespace-nowrap inline-block"
                  >
                    DISCUSS MY BATCH DETAILS
                  </Link>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* CERTIFICATION & SELECTION PARAMETERS       */}
        {/* ========================================== */}
        <section className="py-24 px-6 bg-white border-b border-zinc-200/50">
          <div className="max-w-7xl mx-auto text-left">
            <div className="max-w-3xl mb-16">
              <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-4">
                FACTORY AUDITING PRINCIPLES
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-black tracking-tight uppercase leading-[0.95] text-[#111111]">
                Every Manufacturing Unit <br />
                <span className="text-[#666666] font-light">Subjected To Real Auditing.</span>
              </h2>
            </div>

            {/* 4 Cards covering quality control steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {[
                { title: 'Regulatory License Verify', icon: FileCheck2, desc: 'We verify AYUSH, FDA, GMP, FSSAI, or ISO certifications visually directly at the plant grounds. No self-provided pdf assumptions.' },
                { title: 'Trace Ingredients Check', icon: Dna, desc: 'Assuring the contract lab only sources premium chemical components and IFRA raw oils, preserving shelf stability metrics.' },
                { title: 'Batch Repeatability Audit', icon: Activity, desc: 'Testing automated mixing vats and compounding stability logs to guarantee absolute volume consistencies across batches.' },
                { title: 'Sanitation Protocols', icon: ShieldCheck, iconColor: 'text-[#D97706]', desc: 'Auditing containment lines, particle filtration, dust extraction systems, and sterile handling zones.' }
              ].map((card, idx) => {
                const IconComp = card.icon;
                return (
                  <div key={idx} className="bg-[#FAFAFA] border border-zinc-200 p-8 rounded-[32px] flex flex-col justify-between min-h-[260px] hover:border-[#D97706]/30 transition-all shadow-xs">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-white border border-zinc-150 flex items-center justify-center text-zinc-900">
                        <IconComp size={20} className="text-[#D97706]" />
                      </div>
                      <h3 className="text-lg font-black uppercase tracking-tight text-zinc-950">
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#666666] font-semibold leading-relaxed mt-6">
                      {card.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ========================================== */}
        {/* BANNER DISCLAIMER BLOCK: NOT DIRECTORY     */}
        {/* ========================================== */}
        <section className="py-20 px-6 bg-[#FAFAFA] border-b border-zinc-200/50">
          <div className="max-w-4xl mx-auto rounded-[40px] bg-white border border-zinc-200 p-8 md:p-12 text-center text-left relative overflow-hidden shadow-xs">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#D97706]/5 rounded-full blur-[40px] pointer-events-none" />
            
            <div className="space-y-6 max-w-2xl mx-auto">
              <span className="inline-flex gap-2 items-center px-3.5 py-1.5 rounded-full bg-stone-50 border border-zinc-150 text-[9px] font-black uppercase text-[#666666] tracking-widest mx-auto">
                <Lock size={10} className="text-[#D97706]" />
                IP PROTECTION ASSURED
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-zinc-950 uppercase tracking-tight">
                Formulation Security Is The Secret To Premium Scaling
              </h3>
              <p className="text-xs md:text-sm text-[#666666] font-semibold leading-relaxed">
                When you use standard B2B directory lists or public contract manufacturers without strategic oversight, you risk losing your formulation ownership, bottle mold rights, and trademark exclusivity.
              </p>
              <div className="h-px bg-zinc-150 my-4" />
              <p className="text-[10px] md:text-xs text-[#D97706] font-black uppercase tracking-widest leading-relaxed">
                *POSITIONING NOTE: BANEGA BRAND IS NOT A SERVICE DIRECTORY, OPEN MARKETPLACE, OR FACTORY SALES AGENT. WE OPERATE AS A FULL-藍LAUNCH CONSULTANCY TO SHIELD AND MANAGE YOUR RETENTION NETWORKS SECURELY.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================== */}
        {/* FINAL CONSULTATION CTA BLOCK               */}
        {/* ========================================== */}
        <section className="py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-zinc-950">
              Integrate Strategic Sourcing <br />
              <span className="text-[#D97706] italic font-serif font-light lowercase">into your launch blueprint</span>
            </h2>
            <p className="text-md md:text-lg text-[#666666] font-semibold max-w-xl mx-auto leading-relaxed">
              Do not leave your product&apos;s physical quality and IP to chance. Let our expert product launch consultants help you navigate the exact right chemistry, certifications, and volume targets safely.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact"
                className="w-full sm:w-auto h-16 px-10 bg-[#111111] text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#D97706] transition-all transform hover:-translate-y-1 shadow-md shadow-black/5 flex items-center justify-center gap-2.5"
              >
                BOOK A STRATEGY CALL
                <ArrowRight size={14} />
              </Link>
              <Link 
                to="/"
                className="w-full sm:w-auto h-16 px-10 bg-white text-[#111111] border border-zinc-200 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-zinc-50 transition-all flex items-center justify-center"
              >
                BACK TO HOME
              </Link>
            </div>
          </div>
        </section>

      </main>

      <MainFooter />
    </div>
  );
};
