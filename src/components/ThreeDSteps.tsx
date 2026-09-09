import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface TimelineDeliverable {
  title: string;
  desc: string;
}

interface TimelineStep {
  stepNum: string;
  title: string;
  description: string;
  gradientClass: string;
  deliverables: TimelineDeliverable[];
}

const TIMELINE_STEPS: TimelineStep[] = [
  {
    stepNum: '01',
    title: 'Define Product Concept & Category',
    description:
      'We identify competitive market whitespace, target price bands, consumer rituals, and formulate your high-margin hero SKU launch blueprint.',
    gradientClass: 'bg-gradient-to-b from-[#8B5CF6] via-[#A78BFA] to-[#FFFFFF]', // Royal Orchid Purple
    deliverables: [
      { title: 'Category Whitespace Mapping', desc: 'Competitor audit & consumer pricing matrix' },
      { title: 'Unit Economics & COGS Modeling', desc: 'Detailed margin structures & BOM breakdowns' },
      { title: 'Portfolio Architecture', desc: 'Hero SKU blueprint & collection expansion plan' },
    ],
  },
  {
    stepNum: '02',
    title: 'Build Product & Formulation Direction',
    description:
      'Cleanroom custom formulation using European IFRA-certified fragrance oils, clinical dermatological actives, and standardized botanical extracts with 90-day stability clearance.',
    gradientClass: 'bg-gradient-to-b from-[#00C4FF] via-[#7DD3FC] to-[#FFFFFF]', // Electric Cyan Sky
    deliverables: [
      { title: 'Custom Lab Sampling', desc: 'Up to 5 sensory benchmark formulation iterations' },
      { title: 'IFRA & Microbiological Tests', desc: 'International safety & hypoallergenic clearances' },
      { title: 'Accelerated Stability Trials', desc: 'Oven & freeze-thaw batch stability validation' },
    ],
  },
  {
    stepNum: '03',
    title: 'Select Packaging & Tactile Architecture',
    description:
      'Procurement of custom Italian glass flacons, UV-shielded amber droppers, precision airless pumps, tactile hot-foil stamping, and FSC-certified rigid presentation boxes.',
    gradientClass: 'bg-gradient-to-b from-[#F59E0B] via-[#FDE047] to-[#FFFFFF]', // Golden Amber
    deliverables: [
      { title: 'Custom Tooling & Bottle Molds', desc: 'Precision engineered custom luxury glass flacons' },
      { title: 'Tactile Embossing & Foil Stamping', desc: 'Multi-level micro-embossed accents & closures' },
      { title: 'Luxury Rigid Unboxing Cartons', desc: 'Custom unboxing presentation & transit protection' },
    ],
  },
  {
    stepNum: '04',
    title: 'Build Brand Identity & Flagship Store',
    description:
      'Design of trademark-cleared logo crests, luxury editorial typography systems, hyper-photorealistic 3D CGI product renders, and high-converting Shopify digital flagships.',
    gradientClass: 'bg-gradient-to-b from-[#6366F1] via-[#A5B4FC] to-[#FFFFFF]', // Electric Indigo Violet
    deliverables: [
      { title: 'Trademark Ready Crest', desc: 'Comprehensive IP clearance & brand filing' },
      { title: '3D Photorealistic CGI Renders', desc: 'Cinematic lighting & 4K photoreal packshots' },
      { title: 'High-Speed Flagship E-Commerce', desc: 'Conversion-optimized Shopify flagship experience' },
    ],
  },
  {
    stepNum: '05',
    title: 'GMP Pilot Production & Regulatory Filings',
    description:
      'Sterile automated filling and pilot batch runs starting at low MOQs (250–500 units) backed by complete AYUSH, CDSCO, and FDA regulatory compliance clearances.',
    gradientClass: 'bg-gradient-to-b from-[#10B981] via-[#6EE7B7] to-[#FFFFFF]', // Fresh Mint Emerald
    deliverables: [
      { title: 'GMP Certified Compounding', desc: 'Cleanroom ISO/GMP precision batch compounding' },
      { title: 'Pilot Low MOQs (250 Units)', desc: 'Low-risk pilot run to test consumer demand' },
      { title: 'Regulatory Licensing & Barcodes', desc: 'Official GS1 barcodes, CDSCO & legal filings' },
    ],
  },
  {
    stepNum: '06',
    title: 'Omnichannel Launch & Commercial Scale',
    description:
      'Direct onboarding on Amazon Brand Registry, Nykaa, Flipkart, and Blinkit quick-commerce, paired with influencer PR seeding and performance marketing to your first 1,000 orders.',
    gradientClass: 'bg-gradient-to-b from-[#FF5722] via-[#FF8A65] to-[#FFFFFF]', // Sunset Coral Flame
    deliverables: [
      { title: 'Amazon & Nykaa Execution', desc: 'Brand Registry onboarding, A+ Content & SEO' },
      { title: 'Quick-Commerce 10-Min Delivery', desc: 'Blinkit & Zepto dark-store network distribution' },
      { title: 'Influencer PR & Paid Media', desc: 'Creator gifting seeding & high-ROAS Meta ads' },
    ],
  },
];

export const ThreeDSteps: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=350%',
          pin: true,
          pinSpacing: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // Cards 1 through 5 smoothly slide in from below over previous card
      for (let i = 1; i < TIMELINE_STEPS.length; i++) {
        const cardEl = cardsRef.current[i];
        if (cardEl) {
          tl.fromTo(
            cardEl,
            {
              yPercent: 100,
            },
            {
              yPercent: 0,
              ease: 'power1.inOut',
              duration: 1,
            }
          );
          tl.to({}, { duration: 0.25 });
        }
      }

      tl.to({}, { duration: 0.4 });
    }, sectionRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-white text-[#111111] select-none flex flex-col justify-between overflow-hidden"
      style={{ fontFamily: "'Sora', 'Poppins', sans-serif" }}
    >
      {/* ── 1. SECTION TITLE AT TOP ── */}
      <div className="w-full text-center py-2 sm:py-3.5 bg-white shrink-0 z-30 shadow-2xs">
        <h2
          className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-tight text-[#111111] leading-tight uppercase"
          style={{
            fontFamily: "'Sora', 'Poppins', sans-serif",
          }}
        >
          YOUR 6-STEP LAUNCH
        </h2>
      </div>

      {/* ── 2. 100% FULL-WIDTH DISTINCT VIBRANT GRADIENT STAGE ── */}
      <div className="relative w-full flex-1 overflow-hidden bg-white">
        {TIMELINE_STEPS.map((step, index) => {
          return (
            <div
              key={step.stepNum}
              ref={(el) => {
                cardsRef.current[index] = el;
              }}
              className="absolute inset-0 w-full h-full flex flex-col justify-center bg-white overflow-hidden"
              style={{
                zIndex: index + 10,
              }}
            >
              {/* 100% Edge-to-Edge Full Bleed Card with Unique Vertical Gradient */}
              <div
                className={`relative w-full h-full rounded-none shadow-none px-4 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 flex flex-col justify-between items-center text-center overflow-hidden ${step.gradientClass}`}
              >
                {/* Subtle Background Wireframe Watermark */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.15] flex items-center justify-center -z-0">
                  <svg viewBox="0 0 1440 600" fill="none" className="w-full h-full object-cover text-white">
                    <circle cx="200" cy="300" r="240" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="720" cy="300" r="280" stroke="currentColor" strokeWidth="1.2" />
                    <circle cx="1240" cy="300" r="240" stroke="currentColor" strokeWidth="1.2" />
                    <line x1="0" y1="300" x2="1440" y2="300" stroke="currentColor" strokeWidth="0.8" />
                  </svg>
                </div>

                {/* Step Number Tag at Top */}
                <div className="relative z-10 w-full flex items-center justify-between text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-white/95 border-b border-white/20 pb-1.5">
                  <span>Step {step.stepNum} of 06</span>
                  <span>Milestone Execution</span>
                </div>

                {/* Center Content: Title, Description, Deliverables */}
                <div className="relative z-10 my-auto space-y-2 sm:space-y-3 max-w-4xl mx-auto text-center">
                  {/* Main Step Title */}
                  <h4
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold uppercase tracking-tight text-white leading-[1.1] text-center drop-shadow-sm"
                    style={{
                      fontFamily: "'Sora', 'Poppins', sans-serif",
                    }}
                  >
                    {step.title}
                  </h4>

                  {/* Narrative Description */}
                  <p
                    className="text-xs sm:text-sm md:text-base text-white/95 font-medium leading-relaxed max-w-2xl mx-auto text-center drop-shadow-xs"
                    style={{ fontFamily: "'Sora', 'Poppins', sans-serif" }}
                  >
                    {step.description}
                  </p>

                  {/* Deliverables Section on the Lower White Zone */}
                  <div className="pt-2 space-y-1 text-center border-t border-white/25">
                    <div
                      className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-zinc-900 text-center"
                      style={{ fontFamily: "'Sora', 'Poppins', sans-serif" }}
                    >
                      Deliverables &amp; Milestones
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-5 pt-0.5">
                      {step.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="space-y-0.5 text-center">
                          <div
                            className="text-xs sm:text-sm font-extrabold text-zinc-900 uppercase tracking-wide"
                            style={{ fontFamily: "'Sora', 'Poppins', sans-serif" }}
                          >
                            {item.title}
                          </div>
                          <p
                            className="text-[11px] sm:text-xs text-zinc-700 font-normal leading-snug line-clamp-2"
                            style={{ fontFamily: "'Sora', 'Poppins', sans-serif" }}
                          >
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Prominent "Start Your Launch" CTA Button */}
                <div className="relative z-10 pt-1.5 sm:pt-2 pb-0.5 flex justify-center w-full">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-7 py-2 sm:py-2.5 bg-black hover:bg-[#FF5722] text-white text-xs font-extrabold uppercase tracking-wider rounded-full transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 cursor-pointer group"
                    style={{ fontFamily: "'Sora', sans-serif" }}
                  >
                    <span>Start Your Launch</span>
                    <span className="text-sm transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ThreeDSteps;
