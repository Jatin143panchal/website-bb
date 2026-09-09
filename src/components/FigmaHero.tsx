import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const MARQUEE_ITEMS = [
  "HAVE A PRODUCT IDEA? LET'S LAUNCH IT",
  "IT'S TIME TO LAUNCH YOUR BRAND",
  "INDIA'S PRODUCT LAUNCH PARTNER",
  "TURNKEY FORMULATION & PACKAGING",
];

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
          width: '95%',
          height: '92vh',
          scale: 0.98,
          borderRadius: '16px',
        },
        {
          width: '100%',
          height: '100vh',
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
    <section className="relative w-full bg-white text-[#111111] overflow-hidden select-none border-none outline-none">

      {/* ── 1. TOP HERO HEADER ZONE (ORANGE TO WHITE VERTICAL GRADIENT) ── */}
      <div className="relative w-full bg-gradient-to-b from-[#FF5722] via-[#FFA07A]/50 to-[#FFFFFF] overflow-hidden select-none border-none">

        {/* Hero Headline & Value Prop */}
        <div className="relative z-10 w-full max-w-7xl px-4 sm:px-8 md:px-12 lg:px-16 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-4 sm:pb-6 text-left select-none">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#111111] font-bold">
              India's Product Launch Partner
            </span>
          </div>

          {/* Huge Solid Bold Matte Black Headline (No Outlines, No Shadows) */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-[66px] font-black tracking-[-0.03em] leading-[1.06] max-w-5xl uppercase"
            style={{
              fontFamily: "'Mulish', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
            }}
          >
            <span className="block text-[#111111]">HAVE A PRODUCT IDEA?</span>
            <span className="block text-[#111111]/90">LET'S LAUNCH IT</span>
          </motion.h1>

          {/* Narrative Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
            className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-[#1a1a1a] font-medium leading-relaxed max-w-4xl"
            style={{ fontFamily: "'Outfit', 'Mulish', 'Inter', system-ui, sans-serif" }}
          >
            From product development and formulation to packaging manufacturing and branding, BanegaBrand helps founders and businesses turn product ideas into market-ready brands in India.
          </motion.p>
        </div>

        {/* Continuous Filled Text Marquee (Orange Gradient Text on Seamless Transparent Background) */}
        <div className="relative z-10 w-full py-2 sm:py-3 bg-transparent overflow-hidden flex select-none">
          {/* Track 1 */}
          <div className="flex shrink-0 items-center animate-hero-marquee whitespace-nowrap">
            {MARQUEE_ITEMS.map((phrase, idx) => (
              <div key={`t1-${idx}`} className="flex shrink-0 items-center whitespace-nowrap">
                <span
                  className="font-black uppercase select-none whitespace-nowrap leading-none tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent shrink-0"
                  style={{
                    fontFamily: "'Mulish', 'Inter', system-ui, sans-serif",
                    letterSpacing: '0.01em',
                  }}
                >
                  {phrase}
                </span>
                <span className="inline-flex items-center justify-center mx-4 sm:mx-6 md:mx-8 shrink-0 select-none">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-[#FF5722] animate-spin select-none"
                    style={{ animationDuration: '14s' }}
                  >
                    <circle cx="50" cy="50" r="16" fill="currentColor" />
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
                          fill="currentColor"
                        />
                      );
                    })}
                  </svg>
                </span>
              </div>
            ))}
          </div>

          {/* Track 2 (Seamless Infinite Duplicate) */}
          <div className="flex shrink-0 items-center animate-hero-marquee whitespace-nowrap" aria-hidden="true">
            {MARQUEE_ITEMS.map((phrase, idx) => (
              <div key={`t2-${idx}`} className="flex shrink-0 items-center whitespace-nowrap">
                <span
                  className="font-black uppercase select-none whitespace-nowrap leading-none tracking-tight text-xl sm:text-2xl md:text-3xl lg:text-[34px] xl:text-[38px] bg-gradient-to-r from-[#FF5722] via-[#FF8A65] to-[#FF5722] bg-clip-text text-transparent shrink-0"
                  style={{
                    fontFamily: "'Mulish', 'Inter', system-ui, sans-serif",
                    letterSpacing: '0.01em',
                  }}
                >
                  {phrase}
                </span>
                <span className="inline-flex items-center justify-center mx-4 sm:mx-6 md:mx-8 shrink-0 select-none">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 fill-[#FF5722] animate-spin select-none"
                    style={{ animationDuration: '14s' }}
                  >
                    <circle cx="50" cy="50" r="16" fill="currentColor" />
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
                          fill="currentColor"
                        />
                      );
                    })}
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* ── 2. PINNED SCROLL-DRIVEN FULL-WIDTH EXPANDING VIDEO (ON CLEAN WHITE BACKGROUND) ── */}
      <div
        ref={pinSectionRef}
        className="w-full h-screen flex flex-col items-center justify-center p-0 m-0 bg-white overflow-hidden select-none border-none"
      >
        <div
          ref={videoWrapperRef}
          className="relative w-[95%] h-[92vh] md:h-[94vh] rounded-[16px] overflow-hidden shadow-2xl transition-all duration-300 group cursor-pointer"
        >
          {/* Main Reel Video (High Performance Local Stream with Autoplay) */}
          <video
            ref={videoRef}
            src="/assets/showcase/launchvid.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover select-none"
          />

          {/* Luxury Video Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

          {/* Centered Floating Play/Mute Control */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="pointer-events-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 hover:bg-white/30 transition-all duration-300 cursor-pointer group"
              aria-label={isMuted ? 'Unmute video reel' : 'Mute video reel'}
            >
              {isMuted ? (
                <VolumeX size={28} className="text-white group-hover:scale-110 transition-transform" />
              ) : (
                <Volume2 size={28} className="text-white group-hover:scale-110 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default FigmaHero;
