import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  CheckCircle2, 
  HelpCircle, 
  Minus, 
  Plus, 
  Play, 
  ArrowRight, 
  ArrowUpRight, 
  MessageSquare,
  TrendingUp, 
  Coins, 
  Target, 
  Briefcase, 
  Calendar, 
  Check, 
  X, 
  ShieldCheck, 
  Award,
  Zap,
  Bookmark,
  Users,
  Compass,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { Navbar } from '../components/Navbar';
import { MainFooter } from '../components/MainFooter';

// FAQ Item Component for local interactive state
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-[#EAEAEA] py-6 last:border-b-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left font-sans font-black text-sm md:text-base uppercase tracking-tight text-[#111111] hover:text-[#D97706] transition-colors"
      >
        <span>{question}</span>
        <span className="ml-4 p-1.5 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] text-[#111111]">
          {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1, marginTop: 12 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-xs md:text-sm text-[#666666] font-bold leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const ContactPage = () => {
  // Application Form State
  const [formState, setFormState] = useState({
    fullName: '',
    phone: '',
    email: '',
    city: '',
    industry: 'Perfume',
    customIndustry: '',
    estimatedBudget: '₹5L - ₹10L',
    launchTimeline: '1-2 Months',
    currentStage: 'Idea',
    projectDescription: '',
    isSerious: false
  });

  const [activeTab, setActiveTab] = useState<'video' | 'written'>('video');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState<string | null>(null);
  const [dismissedSticky, setDismissedSticky] = useState(false);

  const formSectionRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormState(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormState(prev => ({ ...prev, [name]: value }));
    }
  };

 const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.isSerious) {
      alert("Please confirm you are serious about launching a product.");
      return;
    }
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: "5eda95b0-84fb-4620-8e31-abaa006328c2",
        ...formState,
      }),
    });
    const result = await res.json();
    if (result.success) {
      setIsSubmitted(true);
    }
  };

  // WhatsApp helper
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi Banega Brand, I am planning a new product launch and would like to discuss next steps with your core consulting team.");
    window.open(`https://wa.me/918796755169?text=${message}`, '_blank');
  };

  return (
    <div className="relative bg-[#FAFAFA] text-[#111111] selection:bg-[#D97706] selection:text-white font-sans overflow-x-hidden min-h-screen">
      <Helmet>
        <title>Book a Launch Strategy Call | Banega Brand – India's Leading Product Launch Company</title>
        <meta name="description" content="Book a 1-on-1 strategic consultation with Mayank Tiwari and the Banega Brand team. Get a customized product launch roadmap and manufacturer sourcing strategy." />
        <meta name="keywords" content="Book Strategy Call, Product Launch Consultation, D2C Consulting India, Banega Brand Contact, Mayank Tiwari Contact" />
        <link rel="canonical" href="https://banegabrand.com/contact" />
        <meta property="og:title" content="Book a Launch Strategy Call | Banega Brand" />
        <meta property="og:description" content="Get a personalized product launch roadmap and factory sourcing guidance." />
        <meta property="og:url" content="https://banegabrand.com/contact" />
      </Helmet>
      <Navbar />

      {/* Floating Sticky CTA bar for premium conversion trigger on scroll */}
      {!dismissedSticky && !isSubmitted && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white border border-[#EAEAEA] rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] py-4 px-6 z-50 flex items-center justify-between gap-4">
          <div className="flex flex-col">
            <span className="text-[9px] font-black uppercase text-[#D97706] tracking-widest">LIMITED SESSION SLOTS</span>
            <span className="text-xs font-bold text-[#111111]">Secure Your Free roadmap today</span>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={scrollToForm}
              className="bg-[#D97706] text-white px-4 py-2.5 rounded-lg font-black text-[10px] uppercase tracking-widest hover:bg-zinc-900 transition-colors"
            >
              APPLY NOW
            </button>
            <button 
              onClick={() => setDismissedSticky(true)}
              className="text-[#666666] hover:text-[#111111] p-1 rounded-full hover:bg-[#FAFAFA]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <main className="pt-24">
        {/* HERO SECTION */}
        <section className="py-20 lg:py-28 px-6 bg-white relative border-b border-[#EAEAEA]">
          {/* Subtle noise grid accent */}
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FAFAFA] to-transparent opacity-90 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
            {/* LHS: Content */}
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] text-[10px] font-black uppercase tracking-[0.2em] text-[#D97706]">
                <Sparkles className="w-3 h-3 animate-pulse text-[#D97706]" />
                FREE PRODUCT LAUNCH STRATEGY SESSION
              </span>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black uppercase tracking-tight text-[#111111] leading-none">
                Get A Personalized <br />
                <span className="text-[#D97706]">Product Launch Roadmap</span>
              </h1>
              
              <p className="text-sm md:text-lg text-[#666666] font-bold max-w-2xl leading-relaxed">
                Whether you're at the idea stage or preparing for launch, we'll help you identify the right next steps, avoid costly mistakes and build a clear launch plan.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button 
                  onClick={scrollToForm}
                  className="bg-[#D97706] text-white px-8 py-4.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-zinc-900 transition-all shadow-lg shadow-[#D97706]/10 flex items-center justify-center gap-3 group"
                >
                  <span>BOOK MY STRATEGY CALL</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </button>
                <button 
                  onClick={openWhatsApp}
                  className="bg-white text-zinc-800 border border-[#EAEAEA] px-8 py-4.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#FAFAFA] transition-all flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>WHATSAPP OUR TEAM</span>
                </button>
              </div>
            </div>

            {/* RHS: Interactive Premium Roadmap Visualization */}
            <div className="lg:col-span-5">
              <div className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-[40px] p-6 md:p-8 space-y-6 relative overflow-hidden group hover:border-[#D97706]/35 transition-all duration-500 shadow-sm shadow-[#111111]/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#D97706]/5 rounded-full blur-2xl" />
                
                <header className="flex justify-between items-center pb-4 border-b border-[#EAEAEA]">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#666666]">LAUNCH TIMELINE ROADMAP</span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#D97706] bg-[#D97706]/10 px-2 py-0.5 rounded">45-90 DAYS GTM</span>
                </header>

                {/* Simulated high-end consulting visual steps */}
                <div className="space-y-4">
                  {[
                    { label: '01. Feasibility modeling & cost auditing', stage: 'ACTIVE', pct: '100%', color: 'border-amber-500 bg-amber-50 text-amber-700' },
                    { label: '02. Trusted formulation chemistry & sourcing', stage: 'VERIFIED', pct: '100%', color: 'border-zinc-300' },
                    { label: '03. Package engineering & visual system', stage: 'DEFINED', pct: '100%', color: 'border-zinc-300' },
                    { label: '04. AYUSH / FSSAI regulatory compliance', stage: 'CLEARANCE', pct: '100%', color: 'border-zinc-300' },
                    { label: '05. High-converting checkout deployment', stage: 'DEPLOYED', pct: '100%', color: 'border-zinc-300' },
                  ].map((step, idx) => (
                    <div key={idx} className={`p-3.5 bg-white border rounded-xl flex justify-between items-center text-left ${idx === 0 ? 'border-[#D97706]/40' : 'border-[#EAEAEA]'}`}>
                      <div className="flex items-center gap-3">
                        <span className={`w-2 h-2 rounded-full ${idx === 0 ? 'bg-[#D97706] animate-pulse' : 'bg-[#111111]/30'}`} />
                        <span className="text-xs font-black uppercase text-zinc-800 tracking-tight">{step.label}</span>
                      </div>
                      <span className="text-[9px] font-black uppercase tracking-wider text-[#D97706] opacity-80">{step.stage}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex justify-between items-center text-left">
                  <div>
                    <p className="text-[20px] font-sans font-black uppercase text-[#111111] leading-none">RISK REMOVED</p>
                    <p className="text-[10px] font-black uppercase tracking-widest text-[#666666] mt-1">Months of errors saved by planning first</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#111111] text-white flex items-center justify-center p-2">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Bar Section */}
          <div className="border-t border-[#EAEAEA] mt-16 pt-12">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center items-center">
              {[
                { title: "120+ Brands Launched", desc: "Expert guidance from zero to shelf placement" },
                { title: "100+ Manufacturing Partners", desc: "Direct access to compliant physical labs" },
                { title: "6-Step Launch Framework", desc: "Repeatable, risk-minimizing growth pipeline" },
                { title: "Founder-Focused Approach", desc: "No generic templates or agency markups" }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1 px-4 text-center md:border-r last:border-0 border-[#EAEAEA]/80">
                  <p className="text-lg md:text-xl font-sans font-black uppercase tracking-tight text-[#111111]">{item.title}</p>
                  <p className="text-[10px] md:text-[11px] font-bold text-[#666666] leading-tight uppercase tracking-wide">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY BOOK THIS CALL NOW? */}
        <section className="py-20 lg:py-28 px-6 bg-[#FAFAFA] border-b border-[#EAEAEA]">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div className="space-y-4 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#EAEAEA] text-[10px] font-black uppercase tracking-[0.2em] text-[#D97706]">
                FOUNDER CLARITY SESSION
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-black uppercase tracking-tight text-[#111111]">
                Most Founders Wait Too Long To Ask The Right Questions
              </h2>
              <p className="text-sm md:text-base text-[#666666] font-bold">
                A single conversation can save months of confusion, unnecessary expenses and wrong decisions.
              </p>
            </div>

            {/* 4 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 text-left">
              {[
                {
                  title: "Avoid Costly Mistakes",
                  desc: "Learn to audit formulation stability issues, custom packaging tolerance bottlenecks, and regulatory registration mistakes before they scale and trigger regulatory rejections or write-offs."
                },
                {
                  title: "Validate Your Direction",
                  desc: "Verify your targeted price-point margins, feasibility criteria, packaging stability compatibility, and manufacturing laboratory capabilities against active marketplace metrics."
                },
                {
                  title: "Understand Investment Requirements",
                  desc: "Expose all hidden cost elements in product development—from certified laboratory setup values and initial test tooling to realistic raw material MOQs and GTM launch buffers."
                },
                {
                  title: "Get A Clear Launch Roadmap",
                  desc: "Exit the conversation with a high-clarity operational gameplan outlining formulation testing stages, regulatory license filing sequencing, packaging timelines, and retail launch."
                }
              ].map((card, idx) => (
                <div key={idx} className="bg-white border border-[#EAEAEA] p-8 rounded-[32px] space-y-4 shadow-sm hover:border-[#D97706]/40 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-[#FAFAFA] border border-[#EAEAEA] text-[#D97706] flex items-center justify-center font-sans font-black text-xs">
                    0{idx+1}
                  </div>
                  <h3 className="text-lg font-sans font-black uppercase text-[#111111]">{card.title}</h3>
                  <p className="text-xs md:text-sm text-[#666666] font-semibold leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-xs md:text-sm font-black uppercase tracking-[0.1em] text-zinc-400 italic pt-6">
              "The earlier you gain clarity, the faster you move forward."
            </p>
          </div>
        </section>

        {/* WHAT HAPPENS DURING THE CALL */}
        <section className="py-20 lg:py-28 px-6 bg-white border-b border-[#EAEAEA]">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] text-[10px] font-black uppercase tracking-[0.2em] text-[#D97706]">
                THE ADVISORY FLOW
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-black uppercase tracking-tight text-[#111111]">
                What Happens During This Call?
              </h2>
              <p className="text-sm md:text-base text-[#666666] font-bold">
                A highly structured 30-minute deep dive built purely around strategy, not pitch templates.
              </p>
            </div>

            {/* Premium Timeline Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting line on desktop */}
              <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-zinc-200 via-amber-200 to-zinc-200 z-0" />
              
              {[
                { step: "Step 1", title: "Understand Your Idea", desc: "We understand your category, goals and vision." },
                { step: "Step 2", title: "Evaluate Feasibility", desc: "Identify opportunities, risks and market realities." },
                { step: "Step 3", title: "Discuss Launch Requirements", desc: "Review exact pathways across manufacturing compliance, branding, custom website setups, and distribution." },
                { step: "Step 4", title: "Create A Roadmap", desc: "Leave with total launch pipeline clarity and actionable next steps." }
              ].map((step, idx) => (
                <div key={idx} className="relative z-10 space-y-4 bg-[#FAFAFA] border border-[#EAEAEA] rounded-[24px] p-6 text-left hover:border-[#D97706]/40 transition-colors">
                  <span className="inline-block text-[9px] font-black uppercase tracking-widest text-white bg-[#D97706] px-2.5 py-1 rounded">
                    {step.step}
                  </span>
                  <h3 className="text-sm md:text-base font-sans font-black uppercase text-[#111111]">{step.title}</h3>
                  <p className="text-xs text-[#666666] font-semibold leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHO THIS CALL IS FOR vs NOT FOR */}
        <section className="py-20 lg:py-28 px-6 bg-[#FAFAFA] border-b border-[#EAEAEA]">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#EAEAEA] text-[10px] font-black uppercase tracking-[0.2em] text-[#D97706]">
                MUTUAL ALIGNMENT CHECKS
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-black uppercase tracking-tight text-[#111111]">
                Is This Strategy Session For You?
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
              {/* Ideal column */}
              <div className="bg-white border border-[#EAEAEA] rounded-[36px] p-8 space-y-6 text-left flex flex-col justify-between">
                <div className="space-y-6">
                  <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-emerald-600">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    IDEAL FOR
                  </span>

                  <ul className="space-y-4 pt-2">
                    {[
                      'Professionals wishing to launch premium products efficiently',
                      'First-time brand founders demanding bulletproof product guidance',
                      'D2C entrepreneurs scaling past standard manufacturing MOQs',
                      'Legacy family businesses migrating products into modern digital brands',
                      'VC-backed startup founders setting rigorous speed-to-market benchmarks',
                      'Established brand owners globally expanding chemical lines'
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-xs font-bold text-zinc-800 leading-snug">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Not Ideal column */}
              <div className="bg-white border border-[#EAEAEA] rounded-[36px] p-8 space-y-6 text-left flex flex-col justify-between">
                <div className="space-y-6">
                  <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-zinc-400">
                    <X className="w-4 h-4 text-rose-500 shrink-0" />
                    NOT IDEAL FOR
                  </span>

                  <ul className="space-y-4 pt-2">
                    {[
                      'Founders looking only for quick generic logos without operational launch backing',
                      'Individuals solely looking for basic social media vanity setups',
                      'Shortcut seekers looking to skimp on compliant formula safety standards',
                      'Low-margin price shoppers unwilling to prioritize clinical manufacturing compliance'
                    ].map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start text-xs font-bold text-zinc-500 leading-snug opacity-80">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-center text-xs md:text-sm font-black uppercase tracking-wider text-[#111111] pt-4">
              "We work best with founders serious about building long-term businesses."
            </p>
          </div>
        </section>

        {/* WHAT YOU'LL WALK AWAY WITH */}
        <section className="py-20 lg:py-28 px-6 bg-white border-b border-[#EAEAEA]">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] text-[10px] font-black uppercase tracking-[0.2em] text-[#D97706]">
                LAUNCH DELIVERABLES
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-black uppercase tracking-tight text-[#111111]">
                What You'll Walk Away With
              </h2>
              <p className="text-sm md:text-base text-[#666666] font-bold">
                Every application session concludes with concrete structural references, protecting your initial startup runway.
              </p>
            </div>

            {/* 5 Premium Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                { title: "Product Launch Clarity", desc: "A comprehensive grasp of realistic formulation, stability testing, AYUSH regulatory licenses, and custom container sourcing lifecycles." },
                { title: "Manufacturer Direction", desc: "Actionable understanding of lab qualification criteria, audits, test batches, and wholesale direct sourcing channels." },
                { title: "Budget Guidance", desc: "A detailed map of budget allocations required for certified formula R&D, structural package tooling, and testing." },
                { title: "Launch Roadmap", desc: "A customized timeline mapping project phases, compliance queues, identity milestones, and final storefront launch." },
                { title: "Growth Direction", desc: "Key product positioning paradigms designed to optimize DTC margins and retail wholesale markup structures." }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#FAFAFA] border border-[#EAEAEA] p-6 rounded-2xl text-left space-y-4 hover:border-[#D97706]/40 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-white border border-[#EAEAEA] flex items-center justify-center text-xs font-black text-[#D97706]">
                    0{idx+1}
                  </div>
                  <h3 className="text-xs md:text-sm font-sans font-black uppercase text-[#111111] leading-tight min-h-[32px]">{item.title}</h3>
                  <p className="text-[11px] text-[#666666] font-semibold leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY FOUNDERS CHOOSE BANEGA BRAND */}
        <section className="py-20 lg:py-28 px-6 bg-[#FAFAFA] border-b border-[#EAEAEA]">
          <div className="max-w-6xl mx-auto space-y-16">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#EAEAEA] text-[10px] font-black uppercase tracking-[0.2em] text-[#D97706]">
                OUR CREDENTIAL MARGIN
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-black uppercase tracking-tight text-[#111111]">
                Why Founders Choose Banega Brand
              </h2>
            </div>

            {/* 6 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { title: "Product Launch Expertise", desc: "Our core team represents active operators who understand formulation standards, chemical shelf-life metrics, and GTM mechanics deeply." },
                { title: "Structured Framework", desc: "We eliminate guessing. Our tested, highly organized launch framework ensures your project hits milestones on absolute time and budget." },
                { title: "Verified Manufacturing Network", desc: "Get direct validation access to audited, compliant labels, packaging manufacturers, and European-grade bottle labs across India." },
                { title: "End-To-End Support", desc: "We support you at every phase—from raw formulation testing and corporate legal entity filings, to high-converting websites and packaging." },
                { title: "Founder-First Approach", desc: "We charge clear flat launch fees without hidden manufacturing markups—meaning raw formula optimization profit belongs to you." },
                { title: "Growth-Focused Thinking", desc: "We construct brands built to trigger repeat-purchase margins, wholesale retail multipliers, and automated high-velocity DTC checkouts." }
              ].map((card, idx) => (
                <div key={idx} className="bg-white border border-[#EAEAEA] rounded-[24px] p-8 space-y-4 hover:shadow-md hover:border-[#D97706]/40 transition-all duration-300">
                  <h3 className="text-sm md:text-base font-sans font-black uppercase text-[#111111]">{card.title}</h3>
                  <p className="text-xs text-[#666666] font-semibold leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SOCIAL PROOF (CATEGORIES & METRICS) */}
        <section className="py-20 lg:py-28 px-6 bg-white border-b border-[#EAEAEA]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* LHS: Content */}
            <div className="lg:col-span-5 text-left space-y-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] text-[10px] font-black uppercase tracking-[0.2em] text-[#D97706]">
                CATEGORICAL DOMINANCE
              </span>
              <h2 className="text-3xl md:text-4xl font-sans font-black uppercase tracking-tight text-[#111111] leading-none">
                Trusted By Founders Across Multiple Categories
              </h2>
              <p className="text-xs md:text-sm text-[#666666] font-semibold leading-relaxed">
                We possess certified laboratory networks and standard operating pipelines custom built to launch market-dominating brands across key wellness divisions.
              </p>

              {/* Metric stats horizontal row */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#EAEAEA]">
                <div>
                  <p className="text-2xl font-black text-[#D97706]">120+</p>
                  <p className="text-[9px] font-black uppercase tracking-wider text-zinc-500">Brands Launched</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#111111]">100+</p>
                  <p className="text-[9px] font-black uppercase tracking-wider text-zinc-500">Labs Audited</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-[#D97706]">6-Step</p>
                  <p className="text-[9px] font-black uppercase tracking-wider text-zinc-500">Launch Code</p>
                </div>
              </div>
            </div>

            {/* RHS: Category Grid (Linking to SEO Pages) */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: "Perfume", path: "/launch-perfume-brand", count: "30+ Brands" },
                  { name: "Ayurveda", path: "/launch-ayurveda-brand", count: "25+ Brands" },
                  { name: "Cosmetics", path: "/launch-cosmetic-brand", count: "35+ Brands" },
                  { name: "Nutraceuticals", path: "/launch-nutraceutical-brand", count: "15+ Brands" },
                  { name: "Personal Care", path: "/launch-personal-care-brand", count: "10+ Brands" },
                  { name: "Pet Care", path: "/launch-pet-care-brand", count: "8+ Brands" }
                ].map((item, idx) => (
                  <Link 
                    key={idx}
                    to={item.path}
                    className="p-6 bg-[#FAFAFA] border border-[#EAEAEA] rounded-[24px] text-left hover:border-[#D97706] hover:bg-white transition-all duration-300 group flex flex-col justify-between h-36"
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] text-[#666666] font-black uppercase tracking-widest">{item.count}</span>
                      <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#D97706] transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase text-[#111111] tracking-tight">{item.name}</p>
                      <p className="text-[10px] text-[#D97706] font-black uppercase tracking-widest mt-1">LAUNCH SERVICE →</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-20 lg:py-28 px-6 bg-[#FAFAFA] border-b border-[#EAEAEA]">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#EAEAEA] text-[10px] font-black uppercase tracking-[0.2em] text-[#D97706]">
                REAL FOUNDER REVIEWS
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-black uppercase tracking-tight text-[#111111]">
                Trusted By Founders Nationwide
              </h2>
            </div>

            {/* Tab Switches */}
            <div className="flex justify-center border-b border-[#EAEAEA] max-w-sm mx-auto">
              <button 
                onClick={() => setActiveTab('video')}
                className={`py-3 px-6 text-xs font-black uppercase tracking-widest border-b-2 transition-all ${activeTab === 'video' ? 'border-[#D97706] text-[#D97706]' : 'border-transparent text-zinc-400 hover:text-zinc-700'}`}
              >
                Video Stories
              </button>
              <button 
                onClick={() => setActiveTab('written')}
                className={`py-3 px-6 text-xs font-black uppercase tracking-widest border-b-2 transition-all ${activeTab === 'written' ? 'border-[#D97706] text-[#D97706]' : 'border-transparent text-zinc-400 hover:text-zinc-700'}`}
              >
                Written Reviews
              </button>
            </div>

            {/* Stories Grid */}
            <AnimatePresence mode="wait">
              {activeTab === 'video' ? (
                <motion.div 
                  key="video-grid"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4"
                >
                  {[
                    {
                      founder: "Rohan Advani",
                      brand: "Parfum Royale Co.",
                      quote: "We spent 8 months stuck with manufacturer quotes who didn't respect our timeline. Banega Brand built our roadmap and got our bottles certified in 45 days flat.",
                      url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
                    },
                    {
                      founder: "Dr. Ananya Iyer",
                      brand: "Prana Herbs",
                      quote: "The regulatory hurdles of AYUSH filings kept us back. Their compliance expert guided our label claim validations flawlessly in standard time.",
                      url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white border border-[#EAEAEA] p-0 rounded-[32px] overflow-hidden group hover:border-[#D97706]/40 transition-colors flex flex-col md:flex-row relative">
                      
                      {/* Video Simulated Thumbnail */}
                      <div className="w-full md:w-1/2 aspect-video md:aspect-auto min-h-[220px] relative bg-zinc-900 overflow-hidden cursor-pointer"
                           onClick={() => setShowVideoModal(item.founder)}>
                        <img 
                          src={item.url} 
                          alt={item.founder} 
                          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                        />
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                          <div className="w-14 h-14 bg-[#D97706] rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 text-white ml-1" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#D97706]">VIDEO TESTIMONIAL</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#D97706]" />
                        </div>
                        <h3 className="text-lg font-black text-[#111111]">{item.founder}</h3>
                        <p className="text-sm font-bold text-[#666666] mb-4">{item.brand}</p>
                        <p className="text-sm text-[#666666] font-semibold leading-relaxed italic">"{item.quote}"</p>
                        <button 
                          onClick={() => setShowVideoModal(item.founder)}
                          className="mt-4 text-xs font-black uppercase tracking-widest text-[#D97706] hover:text-[#111111] transition-colors flex items-center gap-2 group"
                        >
                          <span>WATCH FULL STORY</span>
                          <Play className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  key="written-grid"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4"
                >
                  {[
                    {
                      founder: "Neha Sharma",
                      brand: "Glow Ritual Cosmetics",
                      quote: "Banega Brand helped us navigate the complex world of cosmetic manufacturing. Their team's expertise in formulation and compliance saved us months of trial and error.",
                      rating: 5
                    },
                    {
                      founder: "Vikram Mehta",
                      brand: "Veda Wellness",
                      quote: "From concept to shelf in 60 days! The team at Banega Brand is exceptional. They handled everything from packaging design to marketplace launch seamlessly.",
                      rating: 5
                    },
                    {
                      founder: "Sneha Patel",
                      brand: "Earth Elixir",
                      quote: "I was overwhelmed with the regulatory requirements for my Ayurvedic product. Their compliance team made the entire process smooth and transparent.",
                      rating: 5
                    },
                    {
                      founder: "Arjun Singh",
                      brand: "Royal Oud Perfumes",
                      quote: "The attention to detail in sourcing and manufacturing was impressive. They connected us with top-tier labs and ensured our product quality was exceptional.",
                      rating: 5
                    }
                  ].map((review, idx) => (
                    <div key={idx} className="bg-white border border-[#EAEAEA] rounded-[32px] p-8 space-y-4 hover:shadow-md hover:border-[#D97706]/40 transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="text-base font-black text-[#111111]">{review.founder}</h3>
                          <p className="text-xs font-bold text-[#666666]">{review.brand}</p>
                        </div>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, i) => (
                            <StarIcon key={i} className="w-4 h-4 fill-[#D97706] text-[#D97706]" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-[#666666] font-semibold leading-relaxed italic">"{review.quote}"</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* VIDEO MODAL */}
        <AnimatePresence>
          {showVideoModal && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
              onClick={() => setShowVideoModal(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="bg-white rounded-[32px] max-w-2xl w-full p-8 relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setShowVideoModal(null)}
                  className="absolute top-4 right-4 p-2 rounded-full hover:bg-[#FAFAFA] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="aspect-video bg-zinc-900 rounded-2xl flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <p className="text-sm font-bold">Video Testimonial</p>
                    <p className="text-xs text-zinc-400">{showVideoModal}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* APPLICATION / CONSULTATION FORM SECTION */}
        <section 
          ref={formSectionRef}
          id="apply-now"
          className="py-20 lg:py-28 px-6 bg-white border-b border-[#EAEAEA] scroll-mt-24"
        >
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] text-[10px] font-black uppercase tracking-[0.2em] text-[#D97706]">
                <Sparkles className="w-3 h-3 text-[#D97706]" />
                APPLICATION PORTAL
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-black uppercase tracking-tight text-[#111111]">
                Apply For Your Free <br />
                <span className="text-[#D97706]">Strategy Session</span>
              </h2>
              <p className="text-sm md:text-base text-[#666666] font-bold">
                Complete this form to apply for a complimentary 1:1 session with our core consulting team.
              </p>
            </div>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-emerald-50 border-2 border-emerald-500/30 rounded-[32px] p-12 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-black uppercase text-[#111111]">Application Received!</h3>
                <p className="text-[#666666] font-semibold max-w-md mx-auto">
                  Our team will review your submission and reach out within 24 hours to schedule your session.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-4 text-[#D97706] font-black uppercase text-sm hover:underline"
                >
                  Submit Another Application
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-[40px] p-8 md:p-12 space-y-8">
                
                {/* Row 1: Full Name + Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#666666]">Full Name *</label>
                    <input 
                      type="text" 
                      name="fullName" 
                      required
                      value={formState.fullName}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#EAEAEA] rounded-xl p-4 text-sm font-bold text-[#111111] placeholder:text-zinc-400 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 transition-all outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#666666]">Phone Number *</label>
                    <input 
                      type="tel" 
                      name="phone" 
                      required
                      value={formState.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#EAEAEA] rounded-xl p-4 text-sm font-bold text-[#111111] placeholder:text-zinc-400 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 transition-all outline-none"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Row 2: Email + City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#666666]">Email Address *</label>
                    <input 
                      type="email" 
                      name="email" 
                      required
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#EAEAEA] rounded-xl p-4 text-sm font-bold text-[#111111] placeholder:text-zinc-400 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 transition-all outline-none"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#666666]">City</label>
                    <input 
                      type="text" 
                      name="city" 
                      value={formState.city}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#EAEAEA] rounded-xl p-4 text-sm font-bold text-[#111111] placeholder:text-zinc-400 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 transition-all outline-none"
                      placeholder="Mumbai, Delhi, etc."
                    />
                  </div>
                </div>

                {/* Row 3: Industry + Budget */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#666666]">Industry / Category *</label>
                    <select 
                      name="industry" 
                      required
                      value={formState.industry}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#EAEAEA] rounded-xl p-4 text-sm font-bold text-[#111111] focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 transition-all outline-none appearance-none"
                    >
                      <option value="Perfume">Perfume / Fragrance</option>
                      <option value="Ayurveda">Ayurveda / Herbal</option>
                      <option value="Cosmetics">Cosmetics / Skincare</option>
                      <option value="Nutraceuticals">Nutraceuticals / Supplements</option>
                      <option value="Personal Care">Personal Care</option>
                      <option value="Pet Care">Pet Care</option>
                      <option value="Other">Other (Please specify)</option>
                    </select>
                    {formState.industry === 'Other' && (
                      <input 
                        type="text" 
                        name="customIndustry" 
                        value={formState.customIndustry}
                        onChange={handleInputChange}
                        className="w-full bg-white border border-[#EAEAEA] rounded-xl p-4 text-sm font-bold text-[#111111] placeholder:text-zinc-400 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 transition-all outline-none mt-2"
                        placeholder="Please specify your industry"
                      />
                    )}
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#666666]">Estimated Budget</label>
                    <select 
                      name="estimatedBudget" 
                      value={formState.estimatedBudget}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#EAEAEA] rounded-xl p-4 text-sm font-bold text-[#111111] focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 transition-all outline-none appearance-none"
                    >
                      <option value="₹5L - ₹10L">₹5L - ₹10L</option>
                      <option value="₹10L - ₹25L">₹10L - ₹25L</option>
                      <option value="₹25L - ₹50L">₹25L - ₹50L</option>
                      <option value="₹50L - ₹1Cr">₹50L - ₹1Cr</option>
                      <option value="₹1Cr - ₹5Cr">₹1Cr - ₹5Cr</option>
                      <option value="₹5Cr+">₹5Cr+</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Timeline + Stage */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#666666]">Launch Timeline</label>
                    <select 
                      name="launchTimeline" 
                      value={formState.launchTimeline}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#EAEAEA] rounded-xl p-4 text-sm font-bold text-[#111111] focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 transition-all outline-none appearance-none"
                    >
                      <option value="1-2 Months">1-2 Months</option>
                      <option value="3-6 Months">3-6 Months</option>
                      <option value="7-12 Months">7-12 Months</option>
                      <option value="12+ Months">12+ Months</option>
                    </select>
                  </div>
                  <div className="space-y-2 text-left">
                    <label className="text-[10px] font-black uppercase tracking-widest text-[#666666]">Current Stage</label>
                    <select 
                      name="currentStage" 
                      value={formState.currentStage}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-[#EAEAEA] rounded-xl p-4 text-sm font-bold text-[#111111] focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 transition-all outline-none appearance-none"
                    >
                      <option value="Idea">Idea / Concept</option>
                      <option value="Research">Research / Formulation</option>
                      <option value="Development">Product Development</option>
                      <option value="Ready to Launch">Ready to Launch</option>
                    </select>
                  </div>
                </div>

                {/* Row 5: Project Description */}
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black uppercase tracking-widest text-[#666666]">Project Description</label>
                  <textarea 
                    name="projectDescription" 
                    rows={4}
                    value={formState.projectDescription}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-[#EAEAEA] rounded-xl p-4 text-sm font-bold text-[#111111] placeholder:text-zinc-400 focus:border-[#D97706] focus:ring-2 focus:ring-[#D97706]/20 transition-all outline-none resize-none"
                    placeholder="Tell us about your product idea, target audience, and what you hope to achieve..."
                  />
                </div>

                {/* Seriousness Checkbox */}
                <div className="flex items-start gap-3 text-left">
                  <input 
                    type="checkbox" 
                    name="isSerious" 
                    checked={formState.isSerious}
                    onChange={handleInputChange}
                    className="mt-1 w-5 h-5 rounded border-[#EAEAEA] text-[#D97706] focus:ring-[#D97706]/20 focus:ring-2 focus:border-[#D97706] cursor-pointer"
                  />
                  <div>
                    <label className="text-xs font-black uppercase tracking-wide text-[#111111] cursor-pointer">
                      I am serious about launching a product
                    </label>
                    <p className="text-[10px] text-[#666666] font-semibold">
                      We allocate real calendar slots only to founders ready to move forward.
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-[#D97706] hover:bg-[#111111] text-white py-5 rounded-xl font-black text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>APPLY FOR MY STRATEGY SESSION</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>

                <p className="text-center text-[10px] text-[#666666] font-bold">
                  We respect your privacy. No spam. No sharing your data with third parties.
                </p>
              </form>
            )}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 lg:py-28 px-6 bg-[#FAFAFA] border-b border-[#EAEAEA]">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#EAEAEA] text-[10px] font-black uppercase tracking-[0.2em] text-[#D97706]">
                <HelpCircle className="w-3 h-3 text-[#D97706]" />
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-black uppercase tracking-tight text-[#111111]">
                Quick Answers
              </h2>
            </div>

            <div className="bg-white border border-[#EAEAEA] rounded-[40px] p-6 md:p-10 text-left">
              <FAQItem 
                question="What is the cost of this strategy session?" 
                answer="The initial 30-minute strategy session is completely complimentary. It's designed to help us understand your product vision, evaluate feasibility, and provide initial guidance. There's no obligation to work with us."
              />
              <FAQItem 
                question="How do I know if my product idea is viable?" 
                answer="During the session, we'll discuss your product concept, target market, and manufacturing requirements. We'll provide honest feedback on feasibility, potential challenges, and next steps."
              />
              <FAQItem 
                question="What industries do you specialize in?" 
                answer="We specialize in premium physical product launches across Perfume, Ayurveda, Cosmetics, Nutraceuticals, Personal Care, and Pet Care categories. Our team has deep expertise in formulation, compliance, and manufacturing."
              />
              <FAQItem 
                question="Do you work with first-time entrepreneurs?" 
                answer="Absolutely. We work with founders at all stages - from first-time entrepreneurs to established brand owners. Our structured framework simplifies the launch process and eliminates costly mistakes."
              />
              <FAQItem 
                question="What is the typical timeline from idea to launch?" 
                answer="With our 6-step framework, most launches are completed within 45-90 days depending on product complexity, regulatory requirements, and manufacturing lead times."
              />
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-20 lg:py-28 px-6 bg-[#0f172a] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[300px] bg-[#D97706]/10 blur-[120px] rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e293b] border border-[#334155] text-[10px] font-black uppercase tracking-[0.2em] text-[#D97706]">
              <Sparkles className="w-3 h-3 text-[#D97706]" />
              READY TO LAUNCH?
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-black uppercase tracking-tight text-white leading-tight">
              Book Your Free <br />
              <span className="text-[#D97706]">Strategy Session Today</span>
            </h2>
            <p className="text-zinc-400 font-bold text-base max-w-xl mx-auto">
              Let's build your product launch roadmap. Apply now and get started with a complimentary session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button 
                onClick={scrollToForm}
                className="bg-[#D97706] hover:bg-white hover:text-[#111111] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3 shadow-lg shadow-[#D97706]/20"
              >
                <span>APPLY FOR MY SESSION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button 
                onClick={openWhatsApp}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>CHAT ON WHATSAPP</span>
              </button>
            </div>
          </div>
        </section>

      </main>

      <MainFooter />
    </div>
  );
};

// Add StarIcon component if not imported
const StarIcon = ({ className }: { className?: string; key?: React.Key }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);