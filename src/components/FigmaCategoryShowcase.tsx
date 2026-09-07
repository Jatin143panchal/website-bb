import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface CategoryPanel {
  id: string;
  categoryName: string;
  fullTitle: string;
  subtitle: string;
  description: string;
  color: string;
  badge: string;
  viewAllLink: string;
}

const CATEGORIES: CategoryPanel[] = [
  {
    id: 'perfume',
    categoryName: 'Perfume & Fragrance',
    fullTitle: 'PERFUME &\nFINE FRAGRANCE',
    subtitle: 'Custom Fragrance Development • Custom Glass Flacons • High Concentration EDP',
    description: 'Bespoke fine fragrance compounding, long-lasting Extrait & EDP formulations, custom glass bottles, magnetic collars, and #1 Amazon & Nykaa best-seller execution.',
    color: '#6B2276',
    badge: '01 / 04 • Fine Fragrance',
    viewAllLink: '/industry/perfume',
  },
  {
    id: 'cosmetics',
    categoryName: 'Color Cosmetics',
    fullTitle: 'COLOR COSMETICS\n& MAKEUP',
    subtitle: 'Micro-Fine Pigments • Soft-Touch Cases • Quick-Commerce Ready',
    description: 'Velvet matte lipsticks, weightless foundations, FDA & AYUSH approved colorants, luxury tactile packaging, and rapid 10-minute delivery distribution on Blinkit & Zepto.',
    color: '#89CFE4',
    badge: '02 / 04 • Color Cosmetics',
    viewAllLink: '/industry/cosmetics',
  },
  {
    id: 'ayurveda',
    categoryName: 'Ayurveda & Botanicals',
    fullTitle: 'AYURVEDA &\nBOTANICAL WELLNESS',
    subtitle: 'Standardized Herbal Extracts • AYUSH Licensing • Modern Vedic',
    description: 'Authentic classical Ayurvedic formulations, cold-pressed therapeutic oils, certified AYUSH regulatory approvals, and sustainable eco-luxury glass packaging for modern consumers.',
    color: '#778144',
    badge: '03 / 04 • Ayurveda & Botanicals',
    viewAllLink: '/industry/ayurveda',
  },
  {
    id: 'skincare',
    categoryName: 'Clinical Skincare',
    fullTitle: 'SKINCARE &\nCLINICAL DERMA',
    subtitle: 'Stabilized Actives • Cleanroom R&D • Dermatologist Certified',
    description: 'High-efficacy active serums, stabilized Vitamin C, Niacinamide & Retinol, airless pump dispensers, clinical patch testing, and turnkey scale to ₹1Cr+ monthly GMV.',
    color: '#D9531E',
    badge: '04 / 04 • Clinical Skincare',
    viewAllLink: '/industry/skincare',
  },
];

export const FigmaCategoryShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Silky slow auto-advance every 7.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CATEGORIES.length);
    }, 7500);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section
      className="w-full bg-[#FAF8F5] py-20 sm:py-28 md:py-36 px-4 sm:px-8 lg:px-16 select-none overflow-hidden border-t border-b border-[#E8E5DF]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-[1400px] mx-auto space-y-14 sm:space-y-20">

        {/* ── FULL-WIDTH EDITORIAL HEADER (MATCHING SCREENSHOT TYPOGRAPHY) ── */}
        <div className="w-full text-center space-y-3">
          <div className="space-y-0.5">
            <h2
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[88px] font-normal tracking-[0.04em] sm:tracking-[0.06em] text-[#111111] leading-[1.02] uppercase"
              style={{
                fontFamily: "'Outfit', 'Mulish', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 400,
              }}
            >
              WHAT DO YOU WANT TO LAUNCH?
            </h2>
            <h3
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[88px] font-light tracking-[0.04em] sm:tracking-[0.06em] text-[#888888] leading-[1.02] uppercase"
              style={{
                fontFamily: "'Outfit', 'Mulish', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                fontWeight: 300,
              }}
            >
              START HERE.
            </h3>
          </div>

          <p
            className="text-sm sm:text-base md:text-lg text-zinc-500 max-w-xl mx-auto font-light pt-2"
            style={{ fontFamily: "'Outfit', 'Mulish', system-ui, sans-serif" }}
          >
            Tell us what you want to launch. We'll show you the next steps.
          </p>
        </div>

        {/* ── SEAMLESS ULTRA-SLOW SILKY ACCORDION SHOWCASE ── */}
        <div className="flex flex-col md:flex-row h-auto md:h-[580px] lg:h-[640px] w-full gap-0 items-stretch overflow-hidden border border-zinc-300 shadow-[0_25px_70px_rgba(0,0,0,0.12)] bg-black">
          {CATEGORIES.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => {
                  setIsPaused(true);
                  setActiveIndex(index);
                }}
                onClick={() => {
                  setIsPaused(true);
                  setActiveIndex(index);
                }}
                className={`cursor-pointer transition-all duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)] relative flex flex-col justify-between overflow-hidden border-b md:border-b-0 md:border-r border-white/20 last:border-r-0 ${isActive
                  ? 'md:flex-[4.5] text-white shadow-2xl z-10 min-h-[480px] md:min-h-0'
                  : 'md:flex-1 text-white hover:brightness-110 min-h-[80px] md:min-h-0 opacity-85 hover:opacity-100'
                  }`}
                style={{
                  backgroundColor: item.color,
                }}
              >
                {/* Subtle Luxury Depth Vignette */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/10 via-transparent to-black/25" />

                {isActive ? (
                  /* ── ACTIVE EXPANDED BOX WITH SILKY SLOW CONTENT REVEAL ── */
                  <div className="relative z-10 h-full w-full p-8 sm:p-12 md:p-14 lg:p-16 flex flex-col justify-between items-center text-center">
                    {/* Top Index & Vertical Tag */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
                      className="w-full flex items-center justify-between text-xs tracking-[0.2em] uppercase text-white/80 border-b border-white/20 pb-4"
                      style={{ fontFamily: "'Outfit', 'Mulish', sans-serif" }}
                    >
                      <span>0{index + 1} / 04</span>
                      <span className="font-semibold text-white">{item.badge}</span>
                      <span>Turnkey Launch</span>
                    </motion.div>

                    {/* Middle Content (Title, Subtitle, Description, CTA) */}
                    <motion.div
                      key={`content-${item.id}`}
                      initial={{ opacity: 0, y: 28 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                      className="flex flex-col items-center justify-center my-auto space-y-6 max-w-xl py-6"
                    >
                      <div className="space-y-2">
                        <h3
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal uppercase tracking-[0.03em] text-white leading-[1.04] whitespace-pre-line drop-shadow-sm"
                          style={{
                            fontFamily: "'Outfit', 'Mulish', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          {item.fullTitle}
                        </h3>

                        <p
                          className="text-xs sm:text-sm font-light uppercase tracking-[0.15em] text-white/85"
                          style={{ fontFamily: "'Outfit', 'Mulish', sans-serif" }}
                        >
                          {item.subtitle}
                        </p>
                      </div>

                      <p
                        className="text-white/95 text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-lg drop-shadow-sm"
                        style={{ fontFamily: "'Outfit', 'Mulish', system-ui, sans-serif" }}
                      >
                        {item.description}
                      </p>

                      {/* Clean High-Converting Start Your Launch CTA */}
                      <div className="pt-2">
                        <Link
                          to={item.viewAllLink}
                          onClick={(e) => e.stopPropagation()}
                          className="group inline-flex items-center gap-3 px-9 py-4 bg-white hover:bg-black text-[#111111] hover:text-white text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] shadow-xl active:scale-95 transition-all duration-300"
                          style={{ fontFamily: "'Outfit', 'Mulish', sans-serif" }}
                        >
                          <span>Start Your Launch</span>
                          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                        </Link>
                      </div>
                    </motion.div>

                    {/* Bottom Status Timeline Indicator */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
                      className="w-full flex items-center justify-between text-[11px] tracking-[0.16em] uppercase text-white/75 border-t border-white/20 pt-4"
                      style={{ fontFamily: "'Outfit', 'Mulish', sans-serif" }}
                    >
                      <span>{item.categoryName}</span>
                      <span className="text-white font-medium">Concept to Shelf in 45–90 Days</span>
                    </motion.div>
                  </div>
                ) : (
                  /* ── INACTIVE COLLAPSED VERTICAL TAB WITH SMOOTH HOVER ── */
                  <div className="h-full w-full flex items-center justify-center p-4 sm:p-6 text-center select-none">
                    {/* Desktop Vertical Title */}
                    <div className="hidden md:flex flex-col items-center justify-between h-full py-8">
                      <span
                        className="text-xs font-mono text-white/70 tracking-wider font-bold"
                        style={{ fontFamily: "'Outfit', 'Mulish', sans-serif" }}
                      >
                        0{index + 1}
                      </span>

                      <span
                        className="font-semibold text-xs lg:text-sm uppercase tracking-[0.24em] text-white whitespace-nowrap [writing-mode:vertical-lr] rotate-180 drop-shadow-sm"
                        style={{ fontFamily: "'Outfit', 'Mulish', system-ui, sans-serif" }}
                      >
                        {item.categoryName}
                      </span>

                      <span className="w-1.5 h-1.5 rounded-full bg-white/60" />
                    </div>

                    {/* Mobile Horizontal Bar */}
                    <div className="md:hidden flex items-center justify-between w-full py-2">
                      <span className="text-xs font-mono text-white/70">0{index + 1}</span>
                      <span
                        className="font-semibold text-sm uppercase tracking-wider text-white"
                        style={{ fontFamily: "'Outfit', 'Mulish', sans-serif" }}
                      >
                        {item.categoryName}
                      </span>
                      <ArrowRight size={14} className="text-white/70" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FigmaCategoryShowcase;
