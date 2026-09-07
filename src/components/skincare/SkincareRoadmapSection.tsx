import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';

interface SkincareRoadmapSectionProps {
  onBuildRoadmap: () => void;
}

export const SkincareRoadmapSection: React.FC<SkincareRoadmapSectionProps> = ({ onBuildRoadmap }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const steps = [
    {
      id: 'idea',
      num: '01',
      title: 'IDEA',
      timeline: 'Days 1–7',
      focus: 'Concept Feasibility & Active Benchmark',
      desc: 'Initial founder alignment, defining the target skin type, hero active concentration, and competitor benchmark textures.',
      deliverables: ['Active whitespace map', 'Formulation brief', 'Packaging aesthetic vision'],
    },
    {
      id: 'concept',
      num: '02',
      title: 'PRODUCT CONCEPT',
      timeline: 'Days 8–15',
      focus: 'Active Compatibility & Ingredient Sourcing',
      desc: 'Auditing high-purity raw active suppliers (USP grade vitamins, peptides, ceramides) and preservative stability systems.',
      deliverables: ['Active Bill of Materials (BOM)', 'COA supplier audits', 'Preservative stability matrix'],
    },
    {
      id: 'formulation',
      num: '03',
      title: 'FORMULATION',
      timeline: 'Days 16–30',
      focus: 'Cleanroom Lab Compounding & Viscosity',
      desc: 'Our cosmetic chemists compound pilot trial batches, adjusting pH stability, texture slip, and active bio-penetration.',
      deliverables: ['Physical sample vials', 'pH & viscosity records', 'Formulation safety dossier'],
    },
    {
      id: 'sampling',
      num: '04',
      title: 'SAMPLING',
      timeline: 'Days 31–40',
      focus: 'Founder Tactile Testing & Sign-Off',
      desc: 'We courier trial sample vials to your doorstep. You evaluate skin feel, dry-down, and layering feedback until you sign off.',
      deliverables: ['Sample approval sign-off', 'Formula freeze', 'Accelerated stability test entry'],
    },
    {
      id: 'packaging',
      num: '05',
      title: 'PACKAGING',
      timeline: 'Days 41–55',
      focus: 'Airless Bottles, Tubes, Pumps & Dielines',
      desc: 'Procuring airless vacuum dispensers, amber glass droppers, screen-printed artworks, and FSC unboxing cartons.',
      deliverables: ['Custom packaging samples', 'Production dielines', 'Leak & drop-test clearance'],
    },
    {
      id: 'branding',
      num: '06',
      title: 'BRANDING',
      timeline: 'Days 50–65',
      focus: 'Identity, 3D Renders & Shopify Flagship',
      desc: 'Designing timeless typography, photorealistic 3D bottle renders, Shopify D2C store with routine diagnostic quiz, and ad creatives.',
      deliverables: ['Brand guidelines book', '3D bottle renders', 'Live Shopify D2C store'],
    },
    {
      id: 'manufacturing',
      num: '07',
      title: 'MANUFACTURING',
      timeline: 'Days 60–80',
      focus: 'GMP Batch Compounding & Derm Testing',
      desc: 'Compounding the master batch in an audited cleanroom facility, automated airless filling, in-vivo SPF testing, and microbial safety clearance.',
      deliverables: ['Certified finished batch', 'In-vivo SPF test certificate', 'Dermatologist patch report'],
    },
    {
      id: 'launch',
      num: '08',
      title: 'LAUNCH',
      timeline: 'Days 80–90',
      focus: 'Amazon, Nykaa & D2C Market Release',
      desc: 'Going live on Amazon Brand Registry, Nykaa, and the brand Shopify flagship store with targeted Meta ad performance funnels.',
      deliverables: ['Live marketplace catalog', 'Warehouse logistics integration', 'Active sales conversion funnels'],
    },
  ];

  const currentStep = steps[activeStepIndex];

  return (
    <section id="skincare-roadmap" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-3 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                18 — 90-DAY TURNKEY TIMELINE
              </span>
            </div>

            <h2
              className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.08] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              YOUR SKINCARE BRAND. <br />
              <span className="font-light text-zinc-500 italic" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                YOUR LAUNCH ROADMAP.
              </span>
            </h2>

            <p
              className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              An interactive 8-milestone roadmap taking you from Day 1 active exploration to commercial stock release and retail scaling.
            </p>
          </div>

          <button
            type="button"
            onClick={onBuildRoadmap}
            className="self-start md:self-auto px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 active:scale-95 cursor-pointer shadow-sm"
          >
            <span style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>BUILD MY LAUNCH ROADMAP</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Milestone Steps Bar */}
        <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-none">
          {steps.map((st, i) => {
            const isActive = i === activeStepIndex;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setActiveStepIndex(i)}
                className={`px-5 py-3 rounded-full border text-left shrink-0 transition-all duration-200 cursor-pointer flex items-center gap-3 ${
                  isActive
                    ? 'bg-black text-white border-black shadow-sm'
                    : 'bg-[#FAFAFA] hover:bg-white text-zinc-700 border-zinc-200'
                }`}
              >
                <span className={`text-xs font-mono font-medium ${isActive ? 'text-zinc-300' : 'text-zinc-400'}`}>
                  {st.num}
                </span>
                <span className="text-xs uppercase tracking-wider font-medium truncate" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {st.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Spotlight Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-2xl bg-[#FAFAFA] border border-zinc-200 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-200 text-zinc-800 border border-zinc-300">
                  MILESTONE {currentStep.num} OF 08
                </span>
                <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-600">
                  <Clock size={13} />
                  <span>{currentStep.timeline}</span>
                </div>
              </div>

              <div>
                <h3
                  className="text-3xl sm:text-4xl font-normal text-[#111111] uppercase"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {currentStep.title}
                </h3>
                <div className="text-xs uppercase tracking-wider text-zinc-500 font-mono mt-1">
                  {currentStep.focus}
                </div>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mt-3 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {currentStep.desc}
                </p>
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-full border border-zinc-300 text-xs uppercase tracking-wider text-zinc-600 hover:text-black disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                >
                  &larr; Previous
                </button>
                <button
                  type="button"
                  disabled={activeStepIndex === steps.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-full border border-zinc-300 text-xs uppercase tracking-wider text-zinc-600 hover:text-black disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                >
                  Next Milestone &rarr;
                </button>
              </div>
            </div>

            {/* Deliverables Box */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-white border border-zinc-200 space-y-4">
              <div className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-400">
                LOCKED DELIVERABLES
              </div>
              <div className="space-y-2.5">
                {currentStep.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-zinc-50 border border-zinc-200 text-xs text-zinc-800" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                    <CheckCircle2 size={14} className="text-zinc-600 shrink-0" />
                    <span className="font-normal">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2 text-[11px] font-mono text-zinc-400">
                Verified milestone completion checklist
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default SkincareRoadmapSection;
