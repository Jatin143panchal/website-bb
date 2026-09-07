import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * PerfumeCinematicScroll
 *
 * Auramonica-style luxury perfume animation:
 * - Full-screen dark section pinned on scroll
 * - Perfume bottle scales from small → huge as you scroll (ScrollTrigger scrub)
 * - Word-by-word text reveal around the bottle
 * - Background fades from black → white after pin ends
 * - Elegant coordinate labels fade in with stagger
 */

interface PerfumeCinematicScrollProps {
  onOpenWizard: () => void;
}

export const PerfumeCinematicScroll: React.FC<PerfumeCinematicScrollProps> = ({ onOpenWizard }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLDivElement>(null);
  const word1Ref = useRef<HTMLDivElement>(null);
  const word2Ref = useRef<HTMLDivElement>(null);
  const word3Ref = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top top',
          end: '+=280%',
          scrub: 1.2,
          pin: stickyRef.current,
          anticipatePin: 1,
        },
      });

      // 0 → 0.25: bottle enters from below, scales up
      tl.fromTo(
        bottleRef.current,
        { scale: 0.3, y: 120, opacity: 0, filter: 'blur(8px)' },
        { scale: 1, y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.25, ease: 'power2.out' },
        0
      );

      // 0.1 → 0.45: first word "CRAFT" reveals left
      tl.fromTo(
        word1Ref.current,
        { x: -80, opacity: 0, clipPath: 'inset(0 100% 0 0)' },
        { x: 0, opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 0.2, ease: 'power3.out' },
        0.1
      );

      // 0.2 → 0.55: second word "YOUR" above bottle
      tl.fromTo(
        word2Ref.current,
        { y: -60, opacity: 0, clipPath: 'inset(0 0 100% 0)' },
        { y: 0, opacity: 1, clipPath: 'inset(0 0 0% 0)', duration: 0.2, ease: 'power3.out' },
        0.2
      );

      // 0.3 → 0.65: third word "SCENT" right side
      tl.fromTo(
        word3Ref.current,
        { x: 80, opacity: 0, clipPath: 'inset(0 0 0 100%)' },
        { x: 0, opacity: 1, clipPath: 'inset(0 0 0 0%)', duration: 0.2, ease: 'power3.out' },
        0.3
      );

      // 0.45 → 0.65: coordinate tags fade in
      tl.fromTo(
        tagsRef.current?.querySelectorAll('.coord-tag') ?? [],
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 0.15, ease: 'power2.out' },
        0.45
      );

      // 0.55 → 0.75: bottle continues to scale up even larger (cinematic push)
      tl.to(
        bottleRef.current,
        { scale: 1.18, duration: 0.2, ease: 'power1.inOut' },
        0.55
      );

      // 0.65 → 0.85: overlay fades from black to transparent (reveal light)
      tl.fromTo(
        overlayRef.current,
        { opacity: 0.85 },
        { opacity: 0, duration: 0.2 },
        0.65
      );

      // 0.75 → 0.85: CTA appears
      tl.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.15, ease: 'power2.out' },
        0.78
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const coordTags = [
    { label: 'FRAGRANCE', sub: 'Extrait 18–30%', pos: 'left-4 sm:left-12 top-[28%]' },
    { label: 'BOTTLE', sub: 'Heavy Flint Glass', pos: 'right-4 sm:right-12 top-[35%]' },
    { label: 'PACKAGING', sub: 'Rigid Luxury Box', pos: 'left-4 sm:left-12 bottom-[28%]' },
    { label: 'BRAND', sub: 'Identity System', pos: 'right-4 sm:right-12 bottom-[22%]' },
  ];

  return (
    /* Scroll wrapper — needs height to give scroll space for the pin */
    <div ref={wrapperRef} className="relative" style={{ height: '380vh' }}>

      {/* Sticky container — the thing that gets pinned */}
      <div ref={stickyRef} className="w-full h-screen overflow-hidden bg-[#0a0a0a] flex items-center justify-center relative">

        {/* Dark overlay — fades out during scroll to reveal product */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black pointer-events-none z-10"
          style={{ opacity: 0.85 }}
        />

        {/* Background grain texture for luxury feel */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")', backgroundSize: '200px' }}
        />

        {/* Giant typographic words — editorial cinematic */}
        <div
          ref={word1Ref}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 pl-6 sm:pl-16 select-none pointer-events-none"
          style={{ opacity: 0, clipPath: 'inset(0 100% 0 0)' }}
        >
          <span
            className="text-[12vw] sm:text-[9vw] font-normal text-white/10 leading-none uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            CRAFT
          </span>
        </div>

        <div
          ref={word3Ref}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 pr-6 sm:pr-16 select-none pointer-events-none"
          style={{ opacity: 0, clipPath: 'inset(0 0 0 100%)' }}
        >
          <span
            className="text-[12vw] sm:text-[9vw] font-normal text-white/10 leading-none uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            SCENT
          </span>
        </div>

        {/* Eyebrow above bottle */}
        <div
          ref={word2Ref}
          className="absolute top-[15%] left-1/2 -translate-x-1/2 z-30 text-center select-none pointer-events-none"
          style={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-zinc-400">
            Banega · Perfume Launch
          </span>
          <div
            className="text-[8vw] sm:text-[5vw] font-normal text-white leading-tight mt-2 uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            YOUR
          </div>
        </div>

        {/* The perfume bottle — hero element */}
        <div
          ref={bottleRef}
          className="relative z-20 flex items-center justify-center"
          style={{ scale: 0.3, opacity: 0 }}
        >
          {/* Radial glow behind bottle */}
          <div className="absolute inset-0 scale-150 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none" />

          <img
            src="/assets/showcase/imperial-oud.webp"
            alt="Luxury Perfume Bottle"
            className="object-contain select-none"
            style={{
              height: 'clamp(280px, 45vh, 520px)',
              maxWidth: 280,
              filter: 'drop-shadow(0 60px 120px rgba(0,0,0,0.9)) brightness(1.08)',
            }}
            draggable={false}
          />

          {/* Bottom label under bottle */}
          <div className="absolute bottom-[-2.5rem] left-1/2 -translate-x-1/2 text-center">
            <div className="w-8 h-px bg-zinc-600 mx-auto mb-2" />
            <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-500">
              Imperial Oud · Extrait 30%
            </span>
          </div>
        </div>

        {/* Coordinate labels — Auramonica style */}
        <div ref={tagsRef} className="absolute inset-0 z-30 pointer-events-none">
          {coordTags.map((tag) => (
            <div key={tag.label} className={`coord-tag absolute ${tag.pos} flex items-center gap-2`} style={{ opacity: 0 }}>
              {tag.pos.includes('right') ? (
                <>
                  <div className="text-right">
                    <div className="text-[10px] font-mono font-black uppercase tracking-widest text-white">{tag.label}</div>
                    <div className="text-[9px] text-zinc-500">{tag.sub}</div>
                  </div>
                  <div className="w-6 h-px bg-zinc-600" />
                </>
              ) : (
                <>
                  <div className="w-6 h-px bg-zinc-600" />
                  <div>
                    <div className="text-[10px] font-mono font-black uppercase tracking-widest text-white">{tag.label}</div>
                    <div className="text-[9px] text-zinc-500">{tag.sub}</div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA — appears near end */}
        <div ref={ctaRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 text-center" style={{ opacity: 0 }}>
          <button
            type="button"
            onClick={onOpenWizard}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/10 text-white text-xs font-medium uppercase tracking-widest transition-all duration-300 cursor-pointer backdrop-blur-sm"
          >
            Build My Fragrance
            <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <div className="mt-4 text-[9px] font-mono uppercase tracking-widest text-zinc-600">
            Scroll to explore ↓
          </div>
        </div>

        {/* Thin horizontal lines — luxury editorial grid */}
        <div className="absolute top-8 left-0 right-0 flex justify-between px-6 sm:px-12 z-20 pointer-events-none">
          <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-700">Banega</span>
          <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-700">Perfume Launch</span>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-between px-6 sm:px-12 z-20 pointer-events-none">
          <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-700">From Idea</span>
          <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-700">To Bottle</span>
        </div>
      </div>
    </div>
  );
};

export default PerfumeCinematicScroll;
