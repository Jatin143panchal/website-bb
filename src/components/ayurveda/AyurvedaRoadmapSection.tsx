import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Lightbulb, Compass, Beaker, Package, Feather, Factory, Rocket, CheckCircle2, Clock } from 'lucide-react';

interface AyurvedaRoadmapSectionProps {
  onBuildRoadmap: () => void;
}

export const AyurvedaRoadmapSection: React.FC<AyurvedaRoadmapSectionProps> = ({ onBuildRoadmap }) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const steps = [
    {
      id: 'idea',
      num: '01',
      title: 'IDEA',
      timeline: 'Days 1–7',
      focus: 'Concept Feasibility & Positioning',
      desc: 'Initial founder alignment, defining the Ayurvedic problem space, dosha focus, target pricing bands, and formulation whitespace.',
      deliverables: ['Category whitespace map', 'Formulation brief', 'Packaging aesthetic vision'],
    },
    {
      id: 'concept',
      num: '02',
      title: 'PRODUCT CONCEPT',
      timeline: 'Days 8–15',
      focus: 'Botanical Actives & Ingredient Selection',
      desc: 'Selecting clean certified herbs (e.g. Kumkumadi, Ashwagandha, Centella), carrier lipid ratios, and essential oil aroma profiles.',
      deliverables: ['Ingredient bill of materials (BOM)', 'COA supplier audits', 'Preservative stability plan'],
    },
    {
      id: 'formulation',
      num: '03',
      title: 'FORMULATION',
      timeline: 'Days 16–30',
      focus: 'Lab Compounding & Pilot Bench Testing',
      desc: 'Compounding physical pilot batches in cleanroom labs, balancing traditional Kashayam boiling with dermatological skin feel.',
      deliverables: ['Physical sample vials', 'Viscosity & pH records', 'AYUSH formulation sheet'],
    },
    {
      id: 'sampling',
      num: '04',
      title: 'SAMPLING',
      timeline: 'Days 31–40',
      focus: 'Founder Feedback & Formulation Freeze',
      desc: 'We courier lab trial vials to your doorstep. You test skin feel, absorption rate, and natural fragrance until you sign off.',
      deliverables: ['Sample approval sign-off', 'Batch formula freeze', 'Accelerated stability test entry'],
    },
    {
      id: 'packaging',
      num: '05',
      title: 'PACKAGING',
      timeline: 'Days 41–55',
      focus: 'Bottles, Jars, Dielines & Box Printing',
      desc: 'Procuring heavy amber flint flacons, precision droppers, luxury slide-out unboxing cartons, and debossed gold leaf labels.',
      deliverables: ['Custom packaging samples', 'Production dielines', 'Drop-test & leak clearance'],
    },
    {
      id: 'branding',
      num: '06',
      title: 'BRANDING',
      timeline: 'Days 50–65',
      focus: 'Identity, 3D Renders & Shopify Flagship',
      desc: 'Designing timeless logo marks, luxury product renders, digital flagship store with dosha diagnostic quiz, and social assets.',
      deliverables: ['Brand guidelines book', 'Photorealistic 3D renders', 'Completed Shopify D2C store'],
    },
    {
      id: 'manufacturing',
      num: '07',
      title: 'MANUFACTURING',
      timeline: 'Days 60–80',
      focus: 'GMP Batch Production & Heavy Metal QC',
      desc: 'Compounding the master batch in an audited AYUSH-certified facility, sterile automated filling, tamper sealing, and batch COA testing.',
      deliverables: ['Certified finished batch', 'Microbial safety clearance', 'Heavy metal ICP-MS certificate'],
    },
    {
      id: 'launch',
      num: '08',
      title: 'LAUNCH',
      timeline: 'Days 80–90',
      focus: 'Amazon, Nykaa & D2C Market Release',
      desc: 'Going live on Amazon Brand Registry, Flipkart, Nykaa, and the brand Shopify store with live Meta ad campaigns.',
      deliverables: ['Live marketplace catalog', 'Warehouse logistics integration', 'Active sales conversion funnels'],
    },
  ];

  const currentStep = steps[activeStepIndex];

  return (
    <section id="ayurveda-roadmap" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                18 — 90-DAY TURNKEY TIMELINE
              </span>
            </div>

            <h2
              className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.06] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              YOUR AYURVEDIC BRAND. <br />
              <span className="text-zinc-400 italic">YOUR ROADMAP.</span>
            </h2>

            <p
              className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              An interactive 8-milestone timeline mapped from Day 1 concept exploration to marketplace launch and first revenue.
            </p>
          </div>

          <button
            type="button"
            onClick={onBuildRoadmap}
            className="self-start md:self-auto px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 shadow-lg active:scale-95 cursor-pointer"
          >
            <span>BUILD MY LAUNCH ROADMAP</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* Milestone Steps Bar (Horizontal Scroller / Clickable Tabs) */}
        <div className="flex overflow-x-auto gap-2 pb-4 scrollbar-none">
          {steps.map((st, i) => {
            const isActive = i === activeStepIndex;
            return (
              <button
                key={st.id}
                type="button"
                onClick={() => setActiveStepIndex(i)}
                className={`px-5 py-3 rounded-2xl border text-left shrink-0 transition-all duration-300 cursor-pointer flex items-center gap-3 ${
                  isActive
                    ? 'bg-black text-white border-black shadow-md'
                    : 'bg-[#FAFAFA] hover:bg-white text-[#111111] border-zinc-200'
                }`}
              >
                <span className={`text-xs font-mono font-bold ${isActive ? 'text-zinc-400' : 'text-zinc-400'}`}>
                  {st.num}
                </span>
                <span className="text-xs font-semibold tracking-wider uppercase truncate" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {st.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Deep Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-[32px] bg-[#FAFAFA] border border-zinc-200 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xs"
          >
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200">
                  MILESTONE {currentStep.num} OF 08
                </span>
                <div className="flex items-center gap-1 text-xs font-mono text-zinc-500 font-bold">
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
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mt-1" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {currentStep.focus}
                </div>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed mt-3 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {currentStep.desc}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2">
                <button
                  type="button"
                  disabled={activeStepIndex === 0}
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-5 py-2.5 rounded-full border border-zinc-300 text-xs font-semibold uppercase text-zinc-600 hover:text-black disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                >
                  &larr; Previous Milestone
                </button>
                <button
                  type="button"
                  disabled={activeStepIndex === steps.length - 1}
                  onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-semibold uppercase hover:bg-zinc-800 transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                  style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                >
                  Next Milestone &rarr;
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-white border border-zinc-200 space-y-4 shadow-xs">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#111111]">
                KEY DELIVERABLES &amp; GATES
              </div>
              <ul className="space-y-3">
                {currentStep.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                    <CheckCircle2 size={15} className="text-black shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-3 border-t border-zinc-100 text-[11px] font-mono text-zinc-500">
                ✓ Managed directly by Banega Technical Director
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default AyurvedaRoadmapSection;
