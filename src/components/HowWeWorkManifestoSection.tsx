import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// ── 1. POSTER 1 (GREEN, YELLOW, WHITE, BLACK PIXEL BLOCKS) ───────────────────
const Poster1Graphic = () => (
  <svg viewBox="0 0 300 300" className="w-full h-full object-cover">
    <rect width="300" height="300" fill="#000000" />
    <rect x="0" y="0" width="75" height="150" fill="#000000" />
    <rect x="0" y="150" width="75" height="150" fill="#000000" />
    <rect x="75" y="0" width="75" height="75" fill="#FFFFFF" />
    <rect x="75" y="75" width="75" height="75" fill="#22C55E" />
    <rect x="75" y="150" width="75" height="75" fill="#FACC15" />
    <rect x="75" y="225" width="75" height="75" fill="#22C55E" />
    <rect x="150" y="0" width="75" height="75" fill="#22C55E" />
    <rect x="150" y="75" width="75" height="75" fill="#22C55E" />
    <rect x="150" y="150" width="75" height="75" fill="#FFFFFF" />
    <rect x="150" y="225" width="75" height="75" fill="#FACC15" />
    <rect x="225" y="0" width="75" height="150" fill="#FACC15" />
    <rect x="225" y="150" width="75" height="150" fill="#FACC15" />
    <rect x="0" y="0" width="75" height="75" fill="#000000" />
    <rect x="0" y="75" width="75" height="75" fill="#22C55E" />
    <rect x="225" y="0" width="75" height="75" fill="#000000" />
    <rect x="150" y="150" width="75" height="75" fill="#000000" />
  </svg>
);

// ── 2. POSTER 2 (ORGANIC PINK & ORANGE INTERCONNECTED DROPS) ─────────────────
const Poster2Graphic = () => (
  <svg viewBox="0 0 300 300" className="w-full h-full object-cover">
    <rect width="300" height="300" fill="#000000" />
    <g fill="#F472B6">
      <path d="M40,0 Q10,70 40,110 Q70,70 40,0 Z" />
      <circle cx="40" cy="110" r="32" />
      <path d="M190,0 Q160,70 190,110 Q220,70 190,0 Z" />
      <circle cx="190" cy="110" r="32" />
    </g>
    <g fill="#FF5722">
      <path d="M115,0 Q85,70 115,110 Q145,70 115,0 Z" />
      <circle cx="115" cy="110" r="32" />
      <path d="M265,0 Q235,70 265,110 Q295,70 265,0 Z" />
      <circle cx="265" cy="110" r="32" />
    </g>
    <g fill="#FF5722">
      <path d="M40,300 Q10,230 40,190 Q70,230 40,300 Z" />
      <circle cx="40" cy="190" r="32" />
      <path d="M190,300 Q160,230 190,190 Q220,230 190,300 Z" />
      <circle cx="190" cy="190" r="32" />
    </g>
    <g fill="#F472B6">
      <path d="M115,300 Q85,230 115,190 Q145,230 115,300 Z" />
      <circle cx="115" cy="190" r="32" />
      <path d="M265,300 Q235,230 265,190 Q295,230 265,300 Z" />
      <circle cx="265" cy="190" r="32" />
    </g>
  </svg>
);

// ── 3. POSTER 3 (POLKA DOTS MATRIX: BLUE, ORANGE, CYAN) ───────────────────────
const Poster3Graphic = () => (
  <svg viewBox="0 0 300 300" className="w-full h-full object-cover">
    <rect width="300" height="300" fill="#000000" />
    <circle cx="45" cy="45" r="10" fill="#00E5FF" />
    <circle cx="115" cy="45" r="18" fill="#00E5FF" />
    <circle cx="190" cy="45" r="26" fill="#00E5FF" />
    <circle cx="255" cy="45" r="32" fill="#FF5722" />
    <circle cx="45" cy="115" r="18" fill="#00E5FF" />
    <circle cx="115" cy="115" r="26" fill="#FF5722" />
    <circle cx="190" cy="115" r="36" fill="#00E5FF" />
    <circle cx="255" cy="115" r="20" fill="#00E5FF" />
    <circle cx="45" cy="190" r="24" fill="#00E5FF" />
    <circle cx="115" cy="190" r="38" fill="#00E5FF" />
    <circle cx="190" cy="190" r="22" fill="#FF5722" />
    <circle cx="255" cy="190" r="14" fill="#00E5FF" />
    <circle cx="45" cy="255" r="34" fill="#FF5722" />
    <circle cx="115" cy="255" r="20" fill="#00E5FF" />
    <circle cx="190" cy="255" r="28" fill="#00E5FF" />
    <circle cx="255" cy="255" r="8" fill="#00E5FF" />
  </svg>
);

// ── 4. POSTER 4 (GREEN/BLACK CHECKERBOARD + PINK DISCS) ──────────────────────
const Poster4Graphic = () => (
  <svg viewBox="0 0 300 300" className="w-full h-full object-cover">
    <rect width="300" height="300" fill="#000000" />
    <rect x="0" y="0" width="75" height="75" fill="#000000" />
    <rect x="75" y="0" width="75" height="75" fill="#22C55E" />
    <rect x="150" y="0" width="75" height="75" fill="#000000" />
    <rect x="225" y="0" width="75" height="75" fill="#22C55E" />
    <rect x="0" y="75" width="75" height="75" fill="#22C55E" />
    <rect x="75" y="75" width="75" height="75" fill="#FFFFFF" />
    <rect x="150" y="75" width="75" height="75" fill="#22C55E" />
    <rect x="225" y="75" width="75" height="75" fill="#000000" />
    <rect x="0" y="150" width="75" height="75" fill="#000000" />
    <rect x="75" y="150" width="75" height="75" fill="#22C55E" />
    <rect x="150" y="150" width="75" height="75" fill="#000000" />
    <rect x="225" y="150" width="75" height="75" fill="#22C55E" />
    <rect x="0" y="225" width="75" height="75" fill="#22C55E" />
    <rect x="75" y="225" width="75" height="75" fill="#000000" />
    <rect x="150" y="225" width="75" height="75" fill="#22C55E" />
    <rect x="225" y="225" width="75" height="75" fill="#000000" />
    <circle cx="225" cy="75" r="55" fill="#F472B6" />
    <circle cx="75" cy="225" r="55" fill="#F472B6" />
  </svg>
);

// ── 5. POSTER 5 (ELECTRIC YELLOW & PURPLE DIAGONAL GEOMETRY) ─────────────────
const Poster5Graphic = () => (
  <svg viewBox="0 0 300 300" className="w-full h-full object-cover">
    <rect width="300" height="300" fill="#18181B" />
    <polygon points="0,0 150,0 0,150" fill="#A855F7" />
    <polygon points="150,0 300,0 0,300" fill="#EAB308" />
    <polygon points="300,0 300,150 150,300" fill="#A855F7" />
    <polygon points="300,150 300,300 150,300" fill="#FFFFFF" />
    <circle cx="150" cy="150" r="45" fill="#FF5722" />
  </svg>
);

// ── 6. POSTER 6 (CONCENTRIC AMBER & WHITE CHEMICAL COMPLIANCE RINGS) ─────────
const Poster6Graphic = () => (
  <svg viewBox="0 0 300 300" className="w-full h-full object-cover">
    <rect width="300" height="300" fill="#000000" />
    <circle cx="150" cy="150" r="120" fill="none" stroke="#FF5722" strokeWidth="8" strokeDasharray="10 15" />
    <circle cx="150" cy="150" r="90" fill="none" stroke="#FFFFFF" strokeWidth="12" />
    <circle cx="150" cy="150" r="60" fill="#FBBF24" />
    <circle cx="150" cy="150" r="30" fill="#000000" />
    <rect x="145" y="10" width="10" height="280" fill="#22C55E" />
  </svg>
);

// ── 7. POSTER 7 (VIBRANT SUNSET WAVES & CULTURAL CONVERSATION) ────────────────
const Poster7Graphic = () => (
  <svg viewBox="0 0 300 300" className="w-full h-full object-cover">
    <rect width="300" height="300" fill="#000000" />
    <path d="M0,80 Q75,10 150,80 T300,80 L300,300 L0,300 Z" fill="#FF5722" />
    <path d="M0,150 Q75,80 150,150 T300,150 L300,300 L0,300 Z" fill="#EC4899" />
    <path d="M0,220 Q75,150 150,220 T300,220 L300,300 L0,300 Z" fill="#FACC15" />
    <circle cx="80" cy="60" r="35" fill="#FFFFFF" />
  </svg>
);

// ── 8. POSTER 8 (GOLDEN ISOMETRIC STEPPED GROWTH PYRAMID) ────────────────────
const Poster8Graphic = () => (
  <svg viewBox="0 0 300 300" className="w-full h-full object-cover">
    <rect width="300" height="300" fill="#000000" />
    <rect x="30" y="210" width="240" height="60" fill="#FF5722" />
    <rect x="60" y="150" width="180" height="60" fill="#FBBF24" />
    <rect x="90" y="90" width="120" height="60" fill="#22C55E" />
    <rect x="120" y="30" width="60" height="60" fill="#FFFFFF" />
  </svg>
);

const MANIFESTO_VALUES = [
  {
    id: 'wins',
    title: "Client's Business Wins, We Win.",
    desc: "Fundamentally, we will always be a services-first company that ensures our clients' business needs fit their definition of success. As partners, we must deliver the whole Banega Brand by pushing ourselves and those around us to work in the best interests of our partners.",
    graphic: <Poster1Graphic />,
  },
  {
    id: 'bond',
    title: 'Our Word is our Bond.',
    desc: 'We work in fast and complex environments where we deal with multiple stakeholders to deliver speed, agility and results to our clients. It is integral to hold ourselves accountable for our promises and strive to deliver on those promises without fail.',
    graphic: <Poster2Graphic />,
  },
  {
    id: 'creativity',
    title: 'Creativity is Sacred, Aesthetics are God.',
    desc: "We create path-breaking work that challenges the status quo and positively impacts our clients' businesses. We make sure how we communicate, and design helps our brand stand out.",
    graphic: <Poster3Graphic />,
  },
  {
    id: 'partnerships',
    title: 'Partnerships with Win-Win Attitude.',
    desc: 'We view all our stakeholders as equal partners and approach all partnerships with a win-win attitude to ensure both parties succeed.',
    graphic: <Poster4Graphic />,
  },
  {
    id: 'speed',
    title: 'Speed & Execution Over Bureaucracy.',
    desc: 'Legacy FMCG conglomerates take 24 months to launch a single SKU. We engineer formula compounding, 3D tooling, and channel listing in 45-90 days flat.',
    graphic: <Poster5Graphic />,
  },
  {
    id: 'purity',
    title: 'Uncompromising Formula Purity.',
    desc: 'From IFRA certified fine European fragrance compounds to US-FDA and AYUSH cleared skincare extracts, quality is non-negotiable from batch number one.',
    graphic: <Poster6Graphic />,
  },
  {
    id: 'storytelling',
    title: 'Storytelling That Commands Culture.',
    desc: 'We construct distinctive brand moats through high-converting packaging, cinematic video, and cultural virality that converts casual browsers into loyal brand advocates.',
    graphic: <Poster7Graphic />,
  },
  {
    id: 'growth',
    title: 'Obsessed with Compound Value.',
    desc: 'We architect omnichannel distribution funnels across Amazon, Nykaa, and Quick Commerce dark stores built for sustainable high-margin LTV.',
    graphic: <Poster8Graphic />,
  },
];

export const HowWeWorkManifestoSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white text-[#111111] py-16 sm:py-24 md:py-28 px-4 sm:px-8 md:px-12 lg:px-16 select-none relative z-10 overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto space-y-16 sm:space-y-24">
        
        {/* ── 1. TOP EDITORIAL MISSION STATEMENT SECTION ─────────────────────── */}
        <div className="space-y-8 sm:space-y-12">
          
          {/* Main Top Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-black tracking-[-0.03em] text-[#111111] leading-tight text-left"
            style={{ fontFamily: "'Mulish', 'Inter', system-ui, sans-serif" }}
          >
            We Bring The Whole Banega Brand!
          </motion.h2>

          {/* Subtle Divider Line */}
          <div className="w-full border-b border-zinc-200/80" />

          {/* 2-Column Split: Mission Statement on Left + Exact Requested Editorial Copy on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 text-left items-start">
            
            {/* Left Column: Mission Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-5 pr-0 lg:pr-6"
            >
              <h3
                className="text-2xl sm:text-3xl md:text-[32px] font-bold text-[#111111] leading-[1.25] tracking-tight"
                style={{ fontFamily: "'Mulish', 'Inter', system-ui, sans-serif" }}
              >
                Our mission – taking the best of Indian Creative Talent &amp; Innovation to the World!
              </h3>
            </motion.div>

            {/* Right Column: Exact Copy Requested */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 space-y-5 text-sm sm:text-base text-zinc-700 font-normal leading-relaxed"
              style={{ fontFamily: "'Mulish', 'Inter', system-ui, sans-serif" }}
            >
              <p>
                Banega Brand originally derived from the classic phrase <em>"the whole Shebang"</em> — a word created in the 17th Century and added to the lexicon of the English language, signifying complete, uncompromised execution.
              </p>

              <p>
                At Banega Brand, we strive to deliver fully integrated and holistic marketing &amp; launch solutions to our clients and unite interrelated services like creative branding, compounding formulation, media and technology under one roof.
              </p>

              <p>
                Our aim is to simplify the client experience by acting as a one-stop shop that can meet all of a client's launch and marketing needs. Rather than specialising in one narrow area, we incorporate strategies that span across all mediums.
              </p>

              <p>
                By taking this comprehensive approach, we can coordinate solutions that are greater than the sum of their parts and truly move the needle for our client's businesses.
              </p>
            </motion.div>

          </div>
        </div>

        {/* ── 2. FULL-SCREEN HORIZONTAL SLIDE SCROLL SECTION: "Our Principles" ── */}
        <div className="w-screen -mx-[calc((100vw-100%)/2)] px-4 sm:px-8 lg:px-16 pt-6 select-none">
          
          {/* Header Bar with Title "Our Principles" and Left/Right Slide Controls */}
          <div className="flex items-center justify-between mb-8 sm:mb-10 max-w-[1440px] mx-auto">
            <h3 
              className="text-2xl sm:text-3xl md:text-4xl font-black text-[#111111] tracking-tight text-left"
              style={{ fontFamily: "'Mulish', 'Inter', system-ui, sans-serif" }}
            >
              Our Principles
            </h3>

            {/* Carousel Navigation Slide Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-11 h-11 rounded-full border border-zinc-300 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-90"
                aria-label="Previous Slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-11 h-11 rounded-full border border-zinc-300 hover:border-black hover:bg-black hover:text-white flex items-center justify-center transition-all cursor-pointer active:scale-90"
                aria-label="Next Slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Edge-to-Edge Horizontal Scroll Carousel Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 sm:gap-8 overflow-x-auto no-scrollbar scroll-smooth pb-8 cursor-grab active:cursor-grabbing"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {MANIFESTO_VALUES.map((value) => (
              <div
                key={value.id}
                className="w-[280px] sm:w-[320px] md:w-[360px] shrink-0 flex flex-col bg-white border border-zinc-200 shadow-2xs hover:shadow-lg transition-all duration-300 text-left rounded-none group"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Poster Geometric Art (Square, 0 Border Radius) */}
                <div className="aspect-square w-full bg-black overflow-hidden rounded-none">
                  <div className="w-full h-full transition-transform duration-500 group-hover:scale-105 rounded-none">
                    {value.graphic}
                  </div>
                </div>

                {/* Poster Text Content (Square, 0 Border Radius) */}
                <div className="p-6 flex flex-col justify-between flex-1 space-y-3 bg-white rounded-none border-t border-zinc-100">
                  <h4 className="text-base sm:text-lg font-bold text-zinc-900 leading-snug tracking-tight group-hover:text-[#FF5722] transition-colors rounded-none">
                    {value.title}
                  </h4>

                  <p className="text-xs sm:text-[13px] text-zinc-500 font-normal leading-relaxed">
                    {value.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default HowWeWorkManifestoSection;
