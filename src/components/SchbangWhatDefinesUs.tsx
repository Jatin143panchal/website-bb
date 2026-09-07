import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';

export const SchbangWhatDefinesUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Scroll-driven interactive motion for the massive arrow
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Arrow moves downwards and rotates dynamically as user scrolls down
  const arrowY = useTransform(scrollYProgress, [0, 0.5, 1], [-20, 30, 70]);
  const arrowScaleY = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.1, 1.25]);

  const handleScrollDown = () => {
    const nextSection = sectionRef.current?.nextElementSibling;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-white text-[#111111] py-20 sm:py-28 md:py-36 px-4 sm:px-8 lg:px-16 overflow-hidden select-none border-b border-zinc-100"
    >
      {/* ── SUBTLE GEOMETRIC WIREFRAME CIRCLE OUTLINES (SCHBANG WATERMARK) ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.22] overflow-hidden -z-0">
        <svg
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-cover text-zinc-400"
        >
          {/* Overlapping interconnected circular geometric outlines */}
          <circle cx="120" cy="200" r="160" stroke="currentColor" strokeWidth="1" />
          <circle cx="380" cy="200" r="160" stroke="currentColor" strokeWidth="1" />
          <circle cx="640" cy="200" r="160" stroke="currentColor" strokeWidth="1" />
          <circle cx="900" cy="200" r="160" stroke="currentColor" strokeWidth="1" />
          <circle cx="1160" cy="200" r="160" stroke="currentColor" strokeWidth="1" />
          <circle cx="1420" cy="200" r="160" stroke="currentColor" strokeWidth="1" />

          {/* Intersecting horizontal & vertical wireframe balance lines */}
          <line x1="0" y1="200" x2="1440" y2="200" stroke="currentColor" strokeWidth="0.8" />
          <line x1="380" y1="40" x2="380" y2="360" stroke="currentColor" strokeWidth="0.8" />
          <line x1="900" y1="40" x2="900" y2="360" stroke="currentColor" strokeWidth="0.8" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        
        {/* ── LEFT COLUMN: TITLE & WORKING SCROLL-DRIVEN MASSIVE DOWNWARD ARROW ── */}
        <div className="lg:col-span-4 flex flex-col items-start space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-black shrink-0" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]">
              What defines us
            </h2>
          </div>

          {/* Interactive Scroll-Driven Downward Arrow (Animated & Clickable) */}
          <motion.button
            onClick={handleScrollDown}
            style={{ y: arrowY, scaleY: arrowScaleY }}
            whileHover={{ scale: 1.1, y: 15 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="pt-2 sm:pt-4 cursor-pointer outline-none group text-left"
            aria-label="Scroll down to next section"
          >
            <svg
              viewBox="0 0 100 120"
              className="w-20 h-24 sm:w-28 sm:h-32 md:w-36 md:h-40 text-black fill-none stroke-current transition-colors duration-200 group-hover:text-[#FF5722]"
              strokeWidth="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Vertical shaft going down */}
              <line x1="50" y1="10" x2="50" y2="105" />
              {/* Left arrowhead wing */}
              <line x1="12" y1="65" x2="50" y2="105" />
              {/* Right arrowhead wing */}
              <line x1="88" y1="65" x2="50" y2="105" />
            </svg>
          </motion.button>
        </div>

        {/* ── RIGHT COLUMN: MANIFESTO HEADLINE, BODY & PILL CTA ─────────────── */}
        <div className="lg:col-span-8 flex flex-col items-start text-left space-y-6 sm:space-y-8">
          
          {/* Main Statement */}
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-[#111111] leading-[1.28]">
            We’re brand builders at heart, creators by design, tech enthusiasts in practice, and integrated at our core.
          </h3>

          {/* Subtext Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-zinc-600 font-normal leading-relaxed max-w-3xl">
            We're on a mission to take the very best of Indian D2C brand innovation to the world. Driven by a ferocious hunger to create tangible impact for your business, we work with in-house specialists, industry partners and technology leaders to push the boundaries of creativity and put your brand on the global stage.
          </p>

          {/* Solid Black Pill Button with Right Arrow */}
          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#111111] hover:bg-[#FF5722] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 group"
            >
              <span>Dive Into Our Culture</span>
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1.5">→</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default SchbangWhatDefinesUs;
