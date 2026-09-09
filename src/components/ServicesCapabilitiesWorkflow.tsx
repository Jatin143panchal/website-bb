import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServiceStep {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  badge: string;
  timeline: string;
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
      category: 'BRAND STRATEGY & IP',
      title: 'Brand Naming & Trademark (TM)',
      shortDesc: 'Memorable brand naming, .com domain acquisition, and Class 3/5 trademark legal protection.',
      badge: '100% IP SECURED',
      timeline: 'Days 1 – 7',
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
      category: 'CORPORATE COMPLIANCE',
      title: 'GST, CDSCO & Entity Setup',
      shortDesc: 'Complete statutory registration, GSTIN, CDSCO cosmetics license, and GS1 official barcodes.',
      badge: 'STATUTORY COMPLIANT',
      timeline: 'Days 5 – 12',
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
      category: 'CREATIVE DIRECTION',
      title: 'Visual Identity & Logo Design',
      shortDesc: 'Bespoke luxury brand identity, custom logo architecture, typography, and photorealistic 3D renders.',
      badge: 'LUXURY DESIGN',
      timeline: 'Days 10 – 20',
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
      category: 'CHEMISTRY & R&D LAB',
      title: 'Active Formulation & Fragrance',
      shortDesc: 'European IFRA fragrance oils, active clinical derma serums, and AYUSH botanical extractions.',
      badge: 'IFRA & DERMA CERTIFIED',
      timeline: 'Days 15 – 35',
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
      category: 'HARDWARE ENGINEERING',
      title: 'Custom Packaging & Flacons',
      shortDesc: 'Heavy flint glass flacons, solid Zamak caps with magnetic snap, micro-mist pumps, and 2mm rigid cartons.',
      badge: 'BESPOKE HARDWARE',
      timeline: 'Days 20 – 45',
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
      category: 'STERILE PRODUCTION',
      title: 'GMP Cleanroom Manufacturing',
      shortDesc: 'ISO 22716 GMP Class 100,000 automated compounding, volumetric filling, and 100% vacuum pressure testing.',
      badge: 'ISO 22716 GMP',
      timeline: 'Days 35 – 60',
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
      category: 'COMMERCE & LOGISTICS',
      title: 'D2C Store & Marketplace Launch',
      shortDesc: 'High-speed Shopify store, Amazon Brand Registry, Nykaa Luxe onboarding, and Shiprocket automated 3PL.',
      badge: 'OMNICHANNEL SCALE',
      timeline: 'Days 50 – 75',
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
      category: 'SCALE & ADVISORY',
      title: 'Strategic Consultation & Scale',
      shortDesc: '1-on-1 Product Coaching by Mayank Tiwari, performance ad unit economics, and influencer seeding.',
      badge: 'FOUNDER ADVISORY',
      timeline: 'Continuous',
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
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 85%' } }
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

  return (
    <section 
      ref={sectionRef} 
      className="w-full bg-white text-[#111111] py-20 sm:py-28 md:py-36 px-4 sm:px-8 lg:px-14 relative overflow-hidden select-none border-b border-zinc-100"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="max-w-[1440px] mx-auto space-y-12 sm:space-y-16">

        {/* ── SECTION HEADER: WHAT WE DO (WHITE BACKGROUND, CLEAN TYPOGRAPHY) ─────────────── */}
        <div ref={headRef} className="space-y-4">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF5722] font-bold">
              Turnkey Product Launch Ecosystem
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 
                className="text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#111111] uppercase leading-[1.04]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                FROM BRAND NAME
              </h2>
              <h3 
                className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.03em] text-zinc-400 uppercase leading-[1.04]"
                style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
              >
                TO SHELF &amp; SCALE
              </h3>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 max-w-lg leading-relaxed font-normal">
              We handle every single step under one roof: brand naming, trademark registration, GST legalities, logo design, active formulation R&amp;D, packaging tooling, GMP manufacturing, and strategic growth consultation.
            </p>
          </div>
        </div>

        {/* ── MINIMALIST TEXT TABS (NO NUMBERS, NO ICONS, NO HEAVY BOXES) ─────────── */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 border-b border-zinc-200">
          {steps.map((s, idx) => {
            const isSelected = activeStep === idx;
            return (
              <button
                key={s.id}
                onClick={() => {
                  setActiveStep(idx);
                  setIsAutoPlay(false);
                }}
                className={`py-3 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-[#111111] text-white shadow-sm'
                    : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-600'
                }`}
              >
                {s.title}
              </button>
            );
          })}
        </div>

        {/* ── SEAMLESS STAGE SHOWCASE (CLEAN, NO EXCESSIVE BOXES, WHITE/OFF-WHITE PALETTE) ───── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
          >
            
            {/* LEFT: DELIVERABLES & FEATURES (7 cols - clean open layout, no nested boxes) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Category & Badge Meta */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-zinc-100">
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
                  <span className="text-xs font-mono font-bold text-[#FF5722] uppercase tracking-wider">
                    {current.category}
                  </span>
                  <span className="text-zinc-300 font-mono">|</span>
                  <span className="text-xs font-mono text-zinc-500">
                    Timeline: {current.timeline}
                  </span>
                </div>

                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold uppercase tracking-wider bg-orange-50 text-[#FF5722] border border-orange-200/60">
                  {current.badge}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-3">
                <h4 
                  className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111] uppercase tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {current.title}
                </h4>
                <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed">
                  {current.shortDesc}
                </p>
              </div>

              {/* Deliverables List (Clean typography with dots, no nested box containers) */}
              <div className="space-y-4 pt-2">
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold">
                  Key End-to-End Deliverables Included
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-8">
                  {current.deliverables.map((item, idx) => (
                    <div 
                      key={idx}
                      className="flex items-baseline gap-3 text-sm sm:text-base text-zinc-800 font-medium"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF5722] shrink-0 mt-2" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features & Value Props (Clean typography columns, no borders/boxes) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-zinc-100">
                {current.features.map((feat, fIdx) => (
                  <div key={fIdx} className="space-y-1">
                    <div className="text-sm font-bold uppercase tracking-wide text-[#111111]">
                      {feat.title}
                    </div>
                    <div className="text-xs sm:text-sm text-zinc-500 font-normal leading-relaxed">
                      {feat.desc}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT: TURNKEY HIGHLIGHTS & FOUNDER CTA (5 cols - clean minimal container) */}
            <div className="lg:col-span-5 p-8 rounded-3xl bg-[#FAF8F5] border border-zinc-200/80 shadow-sm space-y-6">
              
              {/* Pipeline Status */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 text-xs font-mono uppercase tracking-wider text-zinc-500">
                <span className="flex items-center gap-2 text-emerald-600 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Turnkey Pipeline Active
                </span>
                <span>All-Inclusive Service</span>
              </div>

              {/* Stage Focus */}
              <div className="space-y-1.5">
                <div className="text-xs font-mono uppercase tracking-wider text-[#FF5722] font-bold">
                  {current.category}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-[#111111]">
                  {current.title}
                </div>
                <div className="text-xs sm:text-sm text-zinc-500">
                  Included in BanegaBrand 45–90 Days Launch Plan
                </div>
              </div>

              {/* Metric Highlights (Clean text, no extra nested boxes) */}
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-zinc-200 text-center">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-[#111111]">45–90 Days</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">Idea to Shelf</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-emerald-600">100% Turnkey</div>
                  <div className="text-xs font-mono uppercase tracking-wider text-zinc-500">No Freelancers</div>
                </div>
              </div>

              {/* Founder Consultation & CTA */}
              <div className="space-y-3 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
                  Need This Executed For Your Brand?
                </div>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
                  Discuss your brand naming, formulation, factory sourcing, or trademark with Mayank Tiwari directly.
                </p>

                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Start My Brand Launch</span>
                  <ArrowRight size={15} />
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
