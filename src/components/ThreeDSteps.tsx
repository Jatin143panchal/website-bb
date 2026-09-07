import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface TimelineStep {
  stepNum: string;
  stepCode: string;
  title: string;
  timeframe: string;
  description: string;
  deliverables: string[];
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    stepNum: '1',
    stepCode: 'STEP 01',
    title: 'Define Product Concept & Category',
    timeframe: 'Day 01 – 15',
    description:
      'We identify competitive market whitespace, target price bands, consumer rituals, and formulate your high-margin hero SKU launch blueprint.',
    deliverables: ['Category Whitespace Mapping', 'Unit Economics & COGS Modeling', 'Portfolio Architecture'],
  },
  {
    stepNum: '2',
    stepCode: 'STEP 02',
    title: 'Build Product & Formulation Direction',
    timeframe: 'Day 12 – 35',
    description:
      'Cleanroom custom formulation using European IFRA-certified fragrance oils, clinical dermatological actives, and standardized botanical extracts with 90-day stability clearance.',
    deliverables: ['Custom Lab Sampling', 'IFRA & Microbiological Tests', 'Accelerated Stability Trials'],
  },
  {
    stepNum: '3',
    stepCode: 'STEP 03',
    title: 'Select Packaging & Tactile Architecture',
    timeframe: 'Day 25 – 50',
    description:
      'Procurement of custom Italian glass flacons, UV-shielded amber droppers, precision airless pumps, tactile hot-foil stamping, and FSC-certified rigid presentation boxes.',
    deliverables: ['Custom Tooling & Bottle Molds', 'Tactile Embossing & Foil Stamping', 'Luxury Rigid Unboxing Cartons'],
  },
  {
    stepNum: '4',
    stepCode: 'STEP 04',
    title: 'Build Brand Identity & Flagship Store',
    timeframe: 'Day 40 – 65',
    description:
      'Design of trademark-cleared logo crests, luxury editorial typography systems, hyper-photorealistic 3D CGI product renders, and high-converting Shopify digital flagships.',
    deliverables: ['Trademark Ready Crest', '3D Photorealistic CGI Renders', 'High-Speed Flagship E-Commerce'],
  },
  {
    stepNum: '5',
    stepCode: 'STEP 05',
    title: 'GMP Pilot Production & Regulatory Filings',
    timeframe: 'Day 55 – 75',
    description:
      'Sterile automated filling and pilot batch runs starting at low MOQs (250–500 units) backed by complete AYUSH, CDSCO, and FDA regulatory compliance clearances.',
    deliverables: ['GMP Certified Compounding', 'Pilot Low MOQs (250 Units)', 'Regulatory Licensing & Barcodes'],
  },
  {
    stepNum: '6',
    stepCode: 'STEP 06',
    title: 'Omnichannel Launch & Commercial Scale',
    timeframe: 'Day 75 – 90',
    description:
      'Direct onboarding on Amazon Brand Registry, Nykaa, Flipkart, and Blinkit quick-commerce, paired with influencer PR seeding and performance marketing to your first 1,000 orders.',
    deliverables: ['Amazon & Nykaa Listing Execution', 'Quick-Commerce 10-Min Delivery', 'Influencer PR & Paid Media Scale'],
  },
];

export const ThreeDSteps: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress for vertical animated line draw
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 75%', 'end 85%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      ref={containerRef}
      className="w-full bg-[#FAF8F5] text-[#111111] py-20 sm:py-28 md:py-36 px-4 sm:px-8 lg:px-16 select-none overflow-hidden border-t border-b border-[#E8E5DF]"
    >
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24">

        {/* ── 1. EDITORIAL HEADER (MATCHING SCREENSHOT TYPOGRAPHY EXACTLY) ── */}
        <div className="w-full text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-[#E5E2DC] text-[11px] font-mono tracking-[0.25em] uppercase text-[#111111]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6505]" />
            SIX LAUNCH STAGES
          </div>

          <div className="space-y-1">
            <h2
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-[0.04em] sm:tracking-[0.06em] text-[#111111] leading-[1.02] uppercase"
              style={{
                fontFamily: "'Outfit', 'Mulish', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 400,
              }}
            >
              YOUR 6-STEP LAUNCH
            </h2>
            <h3
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.04em] sm:tracking-[0.06em] text-[#888888] leading-[1.02] uppercase"
              style={{
                fontFamily: "'Outfit', 'Mulish', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 300,
              }}
            >
              START HERE.
            </h3>
          </div>

          <p
            className="text-sm sm:text-base md:text-lg text-zinc-500 max-w-xl mx-auto font-light pt-2 leading-relaxed"
            style={{ fontFamily: "'Outfit', 'Mulish', system-ui, sans-serif" }}
          >
            A disciplined, milestone-driven framework to transform your raw product concept into a market-dominating brand in 45–90 days.
          </p>
        </div>

        {/* ── 2. VERTICAL ZIG-ZAG TIMELINE WITH SCROLL-ANIMATED LINE ── */}
        <div className="relative w-full">

          {/* Center Vertical Background Track (Desktop: Center / Mobile: Left-aligned) */}
          <div className="absolute top-8 bottom-8 left-6 md:left-1/2 -translate-x-1/2 w-[2px] bg-[#E2DFD7]" />

          {/* Center Vertical Animated Fill Line (Driven by scroll) */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-8 left-6 md:left-1/2 -translate-x-1/2 w-[2px] bg-[#111111] origin-top z-10"
          />

          {/* Timeline Nodes & Cards */}
          <div className="relative z-20 space-y-12 sm:space-y-16 md:space-y-20">
            {TIMELINE_STEPS.map((step, index) => {
              const isEven = index % 2 === 0; // Left side on desktop

              return (
                <div
                  key={step.stepNum}
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Step Card Container (50% width on Desktop) */}
                  <div className="w-full md:w-1/2 pl-14 md:pl-0 md:px-10 lg:px-14">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? -40 : 40, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: '-80px' }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="group bg-white border border-[#E5E2DC] rounded-2xl p-6 sm:p-8 md:p-9 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.07)] hover:border-zinc-400 transition-all duration-300 text-left space-y-4"
                    >
                      {/* Step Header Meta */}
                      <div className="flex items-center justify-between border-b border-[#F0EDE6] pb-3">
                        <span
                          className="text-xs font-semibold tracking-[0.16em] uppercase text-[#111111]"
                          style={{ fontFamily: "'Outfit', 'Mulish', sans-serif" }}
                        >
                          {step.stepCode}
                        </span>

                        <span
                          className="text-[11px] font-medium tracking-wider uppercase text-[#777777] bg-[#FAF8F5] border border-[#EAE7E0] px-2.5 py-0.5 rounded"
                          style={{ fontFamily: "'Outfit', 'Mulish', sans-serif" }}
                        >
                          {step.timeframe}
                        </span>
                      </div>

                      {/* Step Title & Description */}
                      <div className="space-y-2">
                        <h4
                          className="text-xl sm:text-2xl md:text-[26px] font-normal uppercase tracking-[0.02em] text-[#111111] leading-snug"
                          style={{
                            fontFamily: "'Outfit', 'Mulish', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          {step.title}
                        </h4>

                        <p
                          className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed"
                          style={{ fontFamily: "'Outfit', 'Mulish', system-ui, sans-serif" }}
                        >
                          {step.description}
                        </p>
                      </div>

                      {/* Deliverables Checklist */}
                      <div className="pt-2 space-y-2 border-t border-[#F0EDE6]">
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((item, dIdx) => (
                            <div
                              key={dIdx}
                              className="inline-flex items-center gap-1.5 text-[11px] text-[#444444] bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#EAE7E0]"
                              style={{ fontFamily: "'Outfit', 'Mulish', sans-serif" }}
                            >
                              <CheckCircle2 className="w-3 h-3 text-[#111111] shrink-0" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Central Circular Numbered Node */}
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, ease: 'backOut' }}
                    className="absolute left-6 md:left-1/2 -translate-x-1/2 top-6 md:top-auto w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white border-2 border-[#111111] shadow-md flex items-center justify-center text-sm font-semibold text-[#111111] z-20 group"
                    style={{ fontFamily: "'Outfit', 'Mulish', sans-serif" }}
                  >
                    <span className="group-hover:scale-110 transition-transform">{step.stepNum}</span>
                  </motion.div>

                  {/* Empty Spacer on Opposite Side for Desktop Layout Balance */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>

        </div>

        {/* ── 3. BOTTOM CTA: DIRECT LAUNCH SESSION WITH MAYANK TIWARI ── */}
        <div className="w-full text-center pt-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-9 sm:px-12 py-5 bg-[#111111] hover:bg-[#FF6505] text-white text-xs sm:text-sm font-medium uppercase tracking-[0.18em] transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 group"
            style={{ fontFamily: "'Outfit', 'Mulish', sans-serif" }}
          >
            <span>Start Your Launch Project</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ThreeDSteps;
