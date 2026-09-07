import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Layers, 
  Building2, 
  Palette, 
  FlaskConical, 
  Factory, 
  ShoppingBag, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  ArrowUpRight,
  Check,
  FileCheck,
  Cpu,
  Boxes,
  Zap,
  Stamp
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceStep {
  id: string;
  stepNum: string;
  category: string;
  title: string;
  shortDesc: string;
  badge: string;
  timeline: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  deliverables: string[];
  features: { title: string; desc: string }[];
}

export const ServicesCapabilitiesWorkflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);

  const steps: ServiceStep[] = [
    {
      id: 'brand-naming-tm',
      stepNum: '01',
      category: 'BRAND STRATEGY & IP',
      title: 'Brand Naming & Trademark (TM)',
      shortDesc: 'Memorable brand naming, .com domain acquisition, and Class 3/5 trademark legal protection.',
      badge: '100% IP SECURED',
      timeline: 'Days 1 – 7',
      icon: Stamp,
      color: 'from-amber-500 to-orange-600',
      deliverables: [
        'Proprietary Brand Naming & Phonetic Linguistic Check',
        'Class 3 & Class 5 Trademark Search & Legal Filing',
        '.com & .in Global Domain Acquisition',
        'Brand Narrative, Positioning Ethos & Taglines'
      ],
      features: [
        { title: 'Phonetic Clearance', desc: 'Zero trademark conflict guarantee across IP India database.' },
        { title: 'Global Alignment', desc: 'International trademark readiness for GCC, US & EU expansion.' }
      ]
    },
    {
      id: 'gst-legal',
      stepNum: '02',
      category: 'CORPORATE COMPLIANCE',
      title: 'GST, CDSCO & Entity Setup',
      shortDesc: 'Complete statutory registration, GSTIN, CDSCO cosmetics license, and GS1 official barcodes.',
      badge: 'STATUTORY COMPLIANT',
      timeline: 'Days 5 – 12',
      icon: FileCheck,
      color: 'from-blue-600 to-indigo-700',
      deliverables: [
        'GSTIN & Business Entity Incorporation Support',
        'CDSCO Form 32 Manufacturing Licenses & State Approvals',
        'AYUSH Regulatory Clearances for Botanicals',
        'Official GS1 Global Barcode Allocation'
      ],
      features: [
        { title: '100% Legal Clearance', desc: 'Full regulatory compliance ready for Amazon, Nykaa & Blinkit.' },
        { title: 'Import/Export Ready', desc: 'IEC code setup for global raw material and finished goods export.' }
      ]
    },
    {
      id: 'logo-identity',
      stepNum: '03',
      category: 'CREATIVE DIRECTION',
      title: 'Visual Identity & Logo Design',
      shortDesc: 'Bespoke luxury brand identity, custom logo architecture, typography, and photorealistic 3D renders.',
      badge: 'LUXURY DESIGN',
      timeline: 'Days 10 – 20',
      icon: Palette,
      color: 'from-fuchsia-600 to-pink-600',
      deliverables: [
        'Custom Luxury Vector Logo Mark & Monogram',
        'Brand Architecture Guidelines (Color, Typography, Grid)',
        'Secondary Marks, Seals & Packaging Graphics',
        'Photorealistic 3D Product CMF Render Mockups'
      ],
      features: [
        { title: 'Ultra-High Resolution', desc: 'Vector SVG, EPS & CMYK print-ready files for all substrates.' },
        { title: 'Sensory Aesthetics', desc: 'Design tailored to luxury retail shelf impact and thumb-stopping D2C.' }
      ]
    },
    {
      id: 'formulation-rd',
      stepNum: '04',
      category: 'CHEMISTRY & R&D LAB',
      title: 'Active Formulation & Fragrance',
      shortDesc: 'European IFRA fragrance oils, active clinical derma serums, and AYUSH botanical extractions.',
      badge: 'IFRA & DERMA CERTIFIED',
      timeline: 'Days 15 – 35',
      icon: FlaskConical,
      color: 'from-emerald-500 to-teal-700',
      deliverables: [
        'Bespoke Olfactory Compounding (25–30% Extrait de Parfum)',
        'Active Derma Formulations (Niacinamide, Peptides, Ceramides)',
        'Stability Chamber Testing (45°C Stress Test / 90 Days)',
        'Dermatological Patch Testing & Safety Dossier'
      ],
      features: [
        { title: 'Direct Lab Iteration', desc: 'Receive physical sample rounds until your formulation is 100% perfected.' },
        { title: 'Clean Beauty Standard', desc: 'Zero parabens, sulfates, synthetic dyes or heavy metals.' }
      ]
    },
    {
      id: 'packaging-tooling',
      stepNum: '05',
      category: 'HARDWARE ENGINEERING',
      title: 'Custom Packaging & Flacons',
      shortDesc: 'Heavy flint glass flacons, solid Zamak caps with magnetic snap, micro-mist pumps, and 2mm rigid cartons.',
      badge: 'BESPOKE HARDWARE',
      timeline: 'Days 20 – 45',
      icon: Boxes,
      color: 'from-amber-600 to-yellow-600',
      deliverables: [
        '370g+ Heavy Optical Flint Glass Flacons & Custom CNC Moulds',
        'Weighted Zamak 3 Metal Caps (45–100g) with Magnetic Snap',
        'FEA 15 Micro-Mist Crimp Atomizers (0.08ml Plume)',
        '2mm Rigid Greyboard Presentation Boxes with Velvet EVA Trays'
      ],
      features: [
        { title: 'Tactile Handfeel', desc: 'Substantial weight and cold-touch premium materials that scream luxury.' },
        { title: 'Drop-Tested Cartons', desc: 'ISTA-1A certified unboxing packaging engineered for e-commerce transit.' }
      ]
    },
    {
      id: 'gmp-manufacturing',
      stepNum: '06',
      category: 'STERILE PRODUCTION',
      title: 'GMP Cleanroom Manufacturing',
      shortDesc: 'ISO 22716 GMP Class 100,000 automated compounding, volumetric filling, and 100% vacuum pressure testing.',
      badge: 'ISO 22716 GMP',
      timeline: 'Days 35 – 60',
      icon: Factory,
      color: 'from-cyan-600 to-blue-700',
      deliverables: [
        'Class 100,000 Cleanroom Sterile Compounding & Maceration',
        'Automated Dual-Head Servo-Piston Filling (±0.1ml Accuracy)',
        'Pneumatic FEA 15 Crimp Sealing & Vacuum Leak Testing',
        'Laser Batch Coding, Shrink Wrapping & Master Palletization'
      ],
      features: [
        { title: 'Zero Evaporation Seal', desc: '100% post-crimp vacuum inspection ensures airtight 36+ mo shelf life.' },
        { title: 'Low MOQ Flexibility', desc: 'Commercial production runs starting from just 500 to 10,000+ units.' }
      ]
    },
    {
      id: 'ecommerce-marketplace',
      stepNum: '07',
      category: 'COMMERCE & LOGISTICS',
      title: 'D2C Store & Marketplace Launch',
      shortDesc: 'High-speed Shopify store, Amazon Brand Registry, Nykaa Luxe onboarding, and Shiprocket automated 3PL.',
      badge: 'OMNICHANNEL SCALE',
      timeline: 'Days 50 – 75',
      icon: ShoppingBag,
      color: 'from-violet-600 to-purple-800',
      deliverables: [
        'High-Converting Custom Shopify D2C Storefront',
        'Amazon Brand Registry, A+ Content & Nykaa Onboarding',
        'Quick-Commerce Listing (Blinkit, Zepto, Instamart)',
        'Automated 3PL Warehousing & 24,000+ PIN Code Dispatch'
      ],
      features: [
        { title: 'Instant Go-To-Market', desc: 'Live sales channels ready to capture orders from day 1.' },
        { title: 'Automated Fulfilment', desc: 'Same-day dispatch integration with automated WhatsApp order updates.' }
      ]
    },
    {
      id: 'growth-consultation',
      stepNum: '08',
      category: 'SCALE & ADVISORY',
      title: 'Strategic Consultation & Scale',
      shortDesc: '1-on-1 Product Coaching by Mayank Tiwari, performance ad unit economics, and influencer seeding.',
      badge: 'FOUNDER ADVISORY',
      timeline: 'Continuous',
      icon: TrendingUp,
      color: 'from-rose-600 to-red-700',
      deliverables: [
        '1-on-1 Product Strategy Coaching with Founder Mayank Tiwari',
        'Meta & Google Performance Ads CAC/ROAS Unit Economics',
        'Influencer Micro-Seeding & PR Unboxing Strategy',
        'Retail Distribution & Offline Chain Store Expansion'
      ],
      features: [
        { title: 'Proven Playbook', desc: 'Backed by 120+ product launches and ₹100Cr+ generated client revenues.' },
        { title: 'Long-Term Partnership', desc: 'Continuous guidance through SKU expansion, investor decks & scale.' }
      ]
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 85%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-advance tabs smoothly if user isn't interacting
  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay, steps.length]);

  const current = steps[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-[#0A0A0A] text-white py-24 sm:py-32 md:py-40 px-4 sm:px-8 lg:px-14 relative overflow-hidden select-none border-b border-zinc-900"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      {/* Background Animated Gradient Mesh Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-[#FF5722]/15 via-purple-900/10 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto space-y-14 sm:space-y-20">

        {/* ── SECTION HEADER: WHAT WE DO (FULL-STACK SERVICES) ─────────────── */}
        <div ref={headRef} className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-[#FF5722]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#FF5722] font-bold">
              Turnkey Product Launch Ecosystem
            </span>
            <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono uppercase tracking-wider bg-white/10 text-zinc-300 border border-white/15">
              8 Full-Stack Capabilities
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 
                className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white uppercase leading-[1.04]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                FROM BRAND NAME
              </h2>
              <h3 
                className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.03em] text-zinc-400 uppercase leading-[1.04]"
                style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
              >
                TO SHELF &amp; SCALE.
              </h3>
            </div>

            <p className="text-sm sm:text-base text-zinc-400 max-w-lg leading-relaxed font-light">
              We handle every single step under one roof: brand naming, trademark registration, GST legalities, logo design, active formulation R&amp;D, packaging tooling, GMP manufacturing, and strategic growth consultation.
            </p>
          </div>
        </div>

        {/* ── INTERACTIVE 8-STEP GRAPHICAL TIMELINE / SELECTOR BAR ─────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 sm:gap-3">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            const isSelected = activeStep === idx;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setActiveStep(idx);
                  setIsAutoPlay(false);
                }}
                className={`p-3.5 sm:p-4 rounded-2xl text-left transition-all duration-300 relative border flex flex-col justify-between group cursor-pointer ${
                  isSelected
                    ? 'bg-zinc-900 text-white border-zinc-700 shadow-xl ring-1 ring-[#FF5722]/50 scale-[1.02]'
                    : 'bg-zinc-950/80 hover:bg-zinc-900/60 text-zinc-400 border-zinc-800/80 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-[11px] font-mono font-bold ${isSelected ? 'text-[#FF5722]' : 'text-zinc-500'}`}>
                    {s.stepNum}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
                    isSelected ? 'bg-[#FF5722] text-white shadow-md' : 'bg-zinc-900 text-zinc-400 group-hover:text-white'
                  }`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div>
                  <div className={`text-[9px] font-mono uppercase tracking-wider mb-0.5 truncate ${
                    isSelected ? 'text-[#FF5722]' : 'text-zinc-500'
                  }`}>
                    {s.category}
                  </div>
                  <div className={`text-xs font-semibold leading-tight line-clamp-2 ${
                    isSelected ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                  }`}>
                    {s.title}
                  </div>
                </div>

                {/* Active Indicator Bar */}
                {isSelected && (
                  <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-[#FF5722] to-amber-400 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* ── GRAPHICAL STAGE SHOWCASE (2 COLUMNS WITH ANIMATED CONTENT) ───── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch"
          >
            
            {/* LEFT: DEEP TECHNICAL DELIVERABLES & FEATURES (7 cols) */}
            <div className="lg:col-span-7 p-7 sm:p-10 rounded-3xl bg-zinc-950/90 border border-zinc-800/90 shadow-2xl backdrop-blur-xl flex flex-col justify-between space-y-8 relative overflow-hidden">
              
              {/* Subtle Ambient Watermark */}
              <div className="absolute top-2 right-4 text-8xl font-black font-mono text-white/[0.03] select-none pointer-events-none">
                {current.stepNum}
              </div>

              <div>
                {/* Stage Header Meta */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-zinc-800">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#FF5722] uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722]" />
                      Stage {current.stepNum} · {current.category}
                    </span>
                    <span className="text-xs text-zinc-600 font-mono">|</span>
                    <span className="text-xs font-mono text-zinc-400">
                      Timeline: {current.timeline}
                    </span>
                  </div>

                  <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white/10 text-amber-300 border border-white/15">
                    {current.badge}
                  </span>
                </div>

                {/* Stage Main Title & Description */}
                <div className="mt-5 space-y-2">
                  <h4 
                    className="text-2xl sm:text-3xl md:text-4xl font-normal text-white uppercase"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {current.title}
                  </h4>
                  <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                    {current.shortDesc}
                  </p>
                </div>

                {/* Deliverables Checklist Grid */}
                <div className="mt-8 space-y-3">
                  <div className="text-xs font-mono uppercase tracking-widest text-zinc-500">
                    Key End-to-End Deliverables Included:
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {current.deliverables.map((item, idx) => (
                      <div 
                        key={idx}
                        className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800/80 flex items-start gap-3 group hover:border-zinc-700 transition-colors"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#FF5722]/20 text-[#FF5722] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs text-zinc-300 font-medium leading-snug">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Value Propositions */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-zinc-800/80">
                  {current.features.map((feat, fIdx) => (
                    <div key={fIdx} className="space-y-0.5">
                      <div className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                        ✓ {feat.title}
                      </div>
                      <div className="text-[11px] text-zinc-400 font-light">
                        {feat.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Navigation Strip */}
              <div className="pt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>Everything Handled Turnkey</span>
                <span className="text-[#FF5722] font-semibold">Zero Multiple-Vendor Chaos</span>
              </div>

            </div>

            {/* RIGHT: GRAPHICAL INFOGRAPHIC & SCOPE CARD (5 cols) */}
            <div className="lg:col-span-5 p-7 sm:p-10 rounded-3xl bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 shadow-2xl flex flex-col justify-between space-y-6 relative overflow-hidden">
              
              {/* Graphic Stage Hero Visual */}
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Turnkey Pipeline Active
                  </span>
                  <span>Stage {current.stepNum} of 08</span>
                </div>

                {/* Iconic Glowing Node */}
                <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800 flex items-center gap-5 shadow-inner">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${current.color} flex items-center justify-center text-white shadow-xl shrink-0`}>
                    <CurrentIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#FF5722] font-bold">
                      {current.category}
                    </div>
                    <div className="text-lg font-bold text-white leading-snug">
                      {current.title}
                    </div>
                    <div className="text-xs text-zinc-400 font-light mt-0.5">
                      Included in 45–90 Days Launch Plan
                    </div>
                  </div>
                </div>

                {/* Scope & Guarantees Metric Chips */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-center space-y-1">
                    <div className="text-xl font-bold font-mono text-white">45–90 Days</div>
                    <div className="text-[10px] font-mono uppercase text-zinc-400">Idea to Shelf</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-zinc-950/80 border border-zinc-800 text-center space-y-1">
                    <div className="text-xl font-bold font-mono text-emerald-400">100% Turnkey</div>
                    <div className="text-[10px] font-mono uppercase text-zinc-400">No Freelancers</div>
                  </div>
                </div>
              </div>

              {/* Founder Direct Consultation Box */}
              <div className="p-5 rounded-2xl bg-[#FF5722]/10 border border-[#FF5722]/30 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#FF5722] font-bold">
                    Need This Executed For Your Brand?
                  </div>
                  <span className="text-[10px] font-mono text-zinc-400">Free 30-Min Strategy</span>
                </div>

                <p className="text-xs text-zinc-300 font-light leading-relaxed">
                  Discuss your brand naming, formulation, factory sourcing, or trademark with Mayank Tiwari directly.
                </p>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-lg group cursor-pointer"
                >
                  <span>Start My Brand Launch</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ServicesCapabilitiesWorkflow;
