import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const METRICS = [
  { value: '215+', label: 'BRANDS LAUNCHED' },
  { value: '108+', label: 'MANUFACTURING PARTNERS' },
  { value: '6-Step', label: 'LAUNCH FRAMEWORK' },
  { value: '4', label: 'HIGH-GROWTH INDUSTRIES' },
];

const MARQUEE_ITEMS = [
  "HAVE A PRODUCT IDEA? LET'S LAUNCH IT",
  "IT'S TIME TO CREATE A SCHBANG",
  "IT'S TIME TO LAUNCH YOUR BRAND",
  "INDIA'S NO. 1 PRODUCT LAUNCH COMPANY",
];

// ── EXACT SCHBANG MULTI-SPOKE SUNBURST ASTERISK ICON ──────────────────────────
const BigSunburstIcon: React.FC = () => (
  <span className="inline-flex items-center justify-center mx-4 sm:mx-6 md:mx-8 shrink-0 select-none">
    <svg
      viewBox="0 0 100 100"
      className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-[#111111] animate-spin select-none"
      style={{ animationDuration: '14s' }}
    >
      <circle cx="50" cy="50" r="16" fill="#111111" />
      {Array.from({ length: 24 }).map((_, i) => {
        const angle = (i * 360) / 24;
        return (
          <rect
            key={i}
            x="48.2"
            y="2"
            width="3.6"
            height="27"
            rx="1.8"
            transform={`rotate(${angle} 50 50)`}
            fill="#111111"
          />
        );
      })}
    </svg>
  </span>
);

export const FigmaHero: React.FC = () => {
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    if (!pinSectionRef.current || !videoWrapperRef.current) return;

    const ctx = gsap.context(() => {
      // Pinned Scroll-driven smooth full-width video expansion
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSectionRef.current,
          start: 'top top',
          end: '+=120%',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.fromTo(
        videoWrapperRef.current,
        {
          width: '94%',
          scale: 0.96,
          borderRadius: '20px',
        },
        {
          width: '100%',
          scale: 1,
          borderRadius: '0px',
          ease: 'power2.inOut',
        }
      );
    }, pinSectionRef);

    return () => ctx.revert();
  }, []);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative w-full bg-white text-[#111111] overflow-hidden">

      {/* ── 1. EXACT REFERENCE MATCH: LEFT-ALIGNED HERO HEADLINE & VALUE PROP ── */}
      <div className="w-full max-w-7xl px-4 sm:px-8 md:px-12 lg:px-16 pt-16 sm:pt-20 md:pt-24 pb-2 sm:pb-3 text-left select-none">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-px bg-zinc-400" />
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
            India's No. 1 Product Launch Company
          </span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[66px] font-black tracking-[-0.03em] text-[#0a0a0a] leading-[1.08] max-w-5xl uppercase"
          style={{
            fontFamily: "'Mulish', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          }}
        >
          <span className="block">HAVE A PRODUCT IDEA?</span>
          <span className="block text-zinc-400">LET'S LAUNCH IT.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-zinc-600 font-normal leading-relaxed max-w-4xl"
          style={{ fontFamily: "'Outfit', 'Mulish', 'Inter', system-ui, sans-serif" }}
        >
          From formulation to packaging, manufacturing, branding &amp; launch — we help turn your idea into a market-ready product.
        </motion.p>
      </div>

      {/* ── 2. COMPACT OUTLINE TEXT MARQUEE (NO BORDER LINES) ─────── */}
      <div className="w-full py-1.5 sm:py-2.5 bg-white overflow-hidden relative flex select-none">
        {/* Track 1 */}
        <div className="flex shrink-0 items-center animate-hero-marquee whitespace-nowrap">
          {MARQUEE_ITEMS.map((phrase, idx) => (
            <div key={`t1-${idx}`} className="flex shrink-0 items-center whitespace-nowrap">
              <span
                className="font-extrabold uppercase select-none whitespace-nowrap leading-none tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] text-transparent shrink-0 transition-all duration-300 hover:text-black/10"
                style={{
                  fontFamily: "'Mulish', 'Inter', system-ui, sans-serif",
                  letterSpacing: '0.01em',
                  WebkitTextStroke: '1.2px #71717a',
                  color: 'transparent',
                }}
              >
                {phrase}
              </span>
              <BigSunburstIcon />
            </div>
          ))}
        </div>

        {/* Track 2 (Seamless Infinite Duplicate) */}
        <div className="flex shrink-0 items-center animate-hero-marquee whitespace-nowrap" aria-hidden="true">
          {MARQUEE_ITEMS.map((phrase, idx) => (
            <div key={`t2-${idx}`} className="flex shrink-0 items-center whitespace-nowrap">
              <span
                className="font-extrabold uppercase select-none whitespace-nowrap leading-none tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] text-transparent shrink-0 transition-all duration-300 hover:text-black/10"
                style={{
                  fontFamily: "'Mulish', 'Inter', system-ui, sans-serif",
                  letterSpacing: '0.01em',
                  WebkitTextStroke: '1.2px #71717a',
                  color: 'transparent',
                }}
              >
                {phrase}
              </span>
              <BigSunburstIcon />
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. PINNED SCROLL-DRIVEN FULL-WIDTH EXPANDING VIDEO (ZERO TOP MARGIN) ───────────────── */}
      <div
        ref={pinSectionRef}
        className="w-full h-screen flex flex-col items-center justify-start pt-0 mt-0 bg-white overflow-hidden"
      >
        <div
          ref={videoWrapperRef}
          className="relative w-[94%] sm:w-[96%] h-[85vh] md:h-[92vh] mt-0 overflow-hidden bg-zinc-950 shadow-2xl transition-all will-change-transform flex items-center justify-center rounded-2xl"
        >
          <video
            ref={videoRef}
            src="/assets/showcase/launchvid.mp4"
            autoPlay
            loop
            muted={isMuted}
            playsInline
            preload="auto"
            onError={(e) => {
              const target = e.target as HTMLVideoElement;
              if (target.src !== window.location.origin + '/assets/273922.mp4') {
                target.src = '/assets/273922.mp4';
                target.play().catch(() => { });
              }
            }}
            className="w-full h-full object-cover"
          />

          {/* Minimalist Sound Control Toggle */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20">
            <button
              onClick={toggleMute}
              className="p-3 rounded-full bg-black/60 hover:bg-black text-white backdrop-blur-md border border-white/20 transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── 4. EXACT FIGMA / SCHBANG METRICS ROW (MATCHING USER SCREENSHOT) ────── */}
      <div className="w-full border-t border-b border-zinc-200/90 bg-white py-10 sm:py-14 px-4 sm:px-8 lg:px-12 select-none">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">
            {METRICS.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`flex flex-col text-left ${i < METRICS.length - 1 ? 'border-r border-zinc-200/90 pr-4 sm:pr-6 md:pr-8' : ''
                  }`}
              >
                <span
                  className="text-4xl sm:text-5xl lg:text-[56px] font-normal text-[#111111] tracking-tight leading-none mb-2"
                  style={{
                    fontFamily: "'Playfair Display', 'Bodoni MT', 'Didot', 'Cormorant Garamond', Georgia, serif",
                    letterSpacing: '-0.02em'
                  }}
                >
                  {metric.value}
                </span>
                <span
                  className="text-xs sm:text-[13px] font-semibold uppercase tracking-wider text-[#555555]"
                  style={{
                    fontFamily: "'Mulish', 'Outfit', 'Sora', system-ui, sans-serif",
                    letterSpacing: '0.04em'
                  }}
                >
                  {metric.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
};

export default FigmaHero;
