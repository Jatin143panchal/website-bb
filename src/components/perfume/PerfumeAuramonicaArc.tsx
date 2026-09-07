import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';

interface ScentItem {
  id: string;
  name: string;
  headlineFirst: string;
  headlineAccent: string;
  description: string;
  accentColor: string;
  domeBg: string;
  glowColor: string;
  image: string;
  archetypeId: string;
  notes: string;
  cornerImg: string;
}

const SCENTS: ScentItem[] = [
  {
    id: 'rose-velvet',
    name: 'Rose Velvet',
    headlineFirst: 'Soft, floral, ',
    headlineAccent: 'balanced',
    description: 'A modern rose layered with gentle musk—smooth, subtle, and never overpowering.',
    accentColor: '#C05C5C',
    domeBg: '#FCEEEF',
    glowColor: 'rgba(192, 92, 92, 0.18)',
    image: '/assets/perfume/biographey_origin_roses.jpg',
    archetypeId: 'luxury',
    notes: 'Damask Rose · Pink Peppercorn · White Musk',
    cornerImg: '/assets/perfume/corner_rose.jpg',
  },
  {
    id: 'citrus-dawn',
    name: 'Citrus Dawn',
    headlineFirst: 'Fresh, bright, ',
    headlineAccent: 'uplifting',
    description: 'Sun-ripened Italian bergamot and crisp mandarin zest that energizes from the very first mist.',
    accentColor: '#DE812A',
    domeBg: '#FDF4EB',
    glowColor: 'rgba(222, 129, 42, 0.18)',
    image: '/assets/perfume/blush_en_bloom_golden.jpg',
    archetypeId: 'everyday',
    notes: 'Calabrian Bergamot · Mandarin · Neroli',
    cornerImg: '/assets/perfume/corner_citrus.jpg',
  },
  {
    id: 'amber-night',
    name: 'Amber Night',
    headlineFirst: 'Warm, deep, ',
    headlineAccent: 'comforting',
    description: 'Rich amber and creamy vanilla come together for a scent that feels cozy, grounded, and quietly confident.',
    accentColor: '#C58B3A',
    domeBg: '#FAF2E6',
    glowColor: 'rgba(197, 139, 58, 0.22)',
    image: '/assets/perfume/venotine_ruby_midnight.jpg',
    archetypeId: 'luxury',
    notes: 'Golden Amber · Bourbon Vanilla · Atlas Cedar',
    cornerImg: '/assets/perfume/corner_amber.jpg',
  },
  {
    id: 'ocean-air',
    name: 'Ocean Air',
    headlineFirst: 'Clean, aquatic, ',
    headlineAccent: 'breezy',
    description: 'Crisp sea salt and mineral marine accords meeting mineral driftwood—pure, airy, and effortlessly fresh.',
    accentColor: '#428E9E',
    domeBg: '#EBF4F6',
    glowColor: 'rgba(66, 142, 158, 0.18)',
    image: '/assets/perfume/108_luxury_ocean_sunset.jpg',
    archetypeId: 'everyday',
    notes: 'Sea Salt · Marine Breeze · White Driftwood',
    cornerImg: '/assets/perfume/corner_ocean.jpg',
  },
  {
    id: 'forest-smoke',
    name: 'Forest Smoke',
    headlineFirst: 'Earthy, woody, ',
    headlineAccent: 'refined',
    description: "Warm woods and a hint of smoke blend into a grounded scent that's natural, smooth, and understated.",
    accentColor: '#9E743A',
    domeBg: '#F4ECE1',
    glowColor: 'rgba(158, 116, 58, 0.2)',
    image: '/assets/perfume/venotine_emerald_flux.jpg',
    archetypeId: 'niche',
    notes: 'Smoked Birch · Aged Vetiver · Cambodian Oud',
    cornerImg: '/assets/perfume/corner_wood.jpg',
  },
];

interface PerfumeAuramonicaArcProps {
  onOpenWizard: (options?: { archetype?: string }) => void;
}

export const PerfumeAuramonicaArc: React.FC<PerfumeAuramonicaArcProps> = ({ onOpenWizard }) => {
  const [activeIdx, setActiveIdx] = useState(2); // Start with Amber Night (center)
  const currentScent = SCENTS[activeIdx];

  const containerRef = useRef<HTMLDivElement>(null);
  const bottleRef = useRef<HTMLImageElement>(null);
  const bottleWrapRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const leftCornerRef = useRef<HTMLDivElement>(null);
  const rightCornerRef = useRef<HTMLDivElement>(null);

  // 3D Mouse Parallax Tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bottleWrapRef.current) return;
    const rect = bottleWrapRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(bottleWrapRef.current, {
      rotateY: x * 16,
      rotateX: -y * 14,
      transformPerspective: 900,
      ease: 'power1.out',
      duration: 0.4,
    });
  };

  const handleMouseLeave = () => {
    if (!bottleWrapRef.current) return;
    gsap.to(bottleWrapRef.current, {
      rotateY: 0,
      rotateX: 0,
      ease: 'power2.out',
      duration: 0.7,
    });
  };

  // Switch scent on arc click
  const handleSelectScent = (idx: number) => {
    if (idx === activeIdx) return;

    const tl = gsap.timeline();

    // Fade out elements
    tl.to(bottleRef.current, {
      opacity: 0,
      scale: 0.94,
      y: 10,
      duration: 0.22,
      ease: 'power2.in',
    })
      .to(textRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.18,
      }, '<')
      .to([leftCornerRef.current, rightCornerRef.current], {
        opacity: 0,
        scale: 0.92,
        duration: 0.2,
      }, '<')
      .call(() => {
        setActiveIdx(idx);
      })
      // Fade in new elements
      .to(bottleRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out',
      })
      .to(textRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.45,
        ease: 'power3.out',
      }, '-=0.35')
      .to([leftCornerRef.current, rightCornerRef.current], {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.3');
  };

  useEffect(() => {
    // Gentle floating breathing animation on the bottle
    if (bottleRef.current) {
      gsap.to(bottleRef.current, {
        y: -10,
        duration: 2.8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }

    // Corner floating parallax
    if (leftCornerRef.current && rightCornerRef.current) {
      gsap.to(leftCornerRef.current, {
        y: -10,
        rotate: -2,
        duration: 3.5,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
      gsap.to(rightCornerRef.current, {
        y: -10,
        rotate: 2,
        duration: 3.8,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[760px] sm:min-h-[860px] bg-white text-[#111111] overflow-hidden select-none flex flex-col items-center justify-between pt-16 sm:pt-24 pb-12 sm:pb-20 border-t border-zinc-100"
      style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
    >
      {/* ── 1. REAL BOTANICAL / INGREDIENT CORNER PHOTOGRAPHY (AURAMONICA EXACT MATCH) ── */}
      {/* Left Corner Photo */}
      <div
        ref={leftCornerRef}
        className="absolute -top-6 sm:-top-8 -left-6 sm:left-4 pointer-events-none transition-all duration-700 z-10 w-36 h-36 sm:w-56 sm:h-56 md:w-64 md:h-64"
      >
        <img
          src={currentScent.cornerImg}
          alt={currentScent.name}
          className="w-full h-full object-contain mix-blend-multiply select-none drop-shadow-sm"
          draggable={false}
        />
      </div>

      {/* Right Corner Photo */}
      <div
        ref={rightCornerRef}
        className="absolute -top-6 sm:-top-8 -right-6 sm:right-4 pointer-events-none transition-all duration-700 z-10 w-36 h-36 sm:w-56 sm:h-56 md:w-64 md:h-64 scale-x-[-1]"
      >
        <img
          src={currentScent.cornerImg}
          alt={currentScent.name}
          className="w-full h-full object-contain mix-blend-multiply select-none drop-shadow-sm"
          draggable={false}
        />
      </div>

      {/* ── 2. TOP HEADLINE & SENSORY DESCRIPTION ── */}
      <div ref={textRef} className="text-center max-w-xl px-6 relative z-20 space-y-3">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111]"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          <span>{currentScent.headlineFirst}</span>
          <span style={{ color: currentScent.accentColor }}>{currentScent.headlineAccent}</span>
        </h2>
        <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed font-light max-w-md mx-auto">
          {currentScent.description}
        </p>
      </div>

      {/* ── 3. SIGNATURE DOME & CIRCULAR ARC CAROUSEL ── */}
      <div className="relative w-full max-w-4xl flex flex-col items-center justify-center mt-6 sm:mt-10">
        
        {/* Soft Radial Dome (Color shifts dynamically based on active fragrance) */}
        <div
          className="w-[320px] sm:w-[580px] md:w-[720px] h-[220px] sm:h-[360px] md:h-[420px] rounded-t-full transition-all duration-700 relative flex items-end justify-center overflow-visible"
          style={{
            background: `radial-gradient(ellipse at bottom, ${currentScent.domeBg} 0%, rgba(255,255,255,0) 80%)`,
          }}
        >
          {/* Subtle Arc Border Line */}
          <div className="absolute inset-0 rounded-t-full border-t border-x border-zinc-200/60 pointer-events-none" />

          {/* ── 4. THE 5 FRAGRANCE NAMES PLACED ALONG THE CURVED ARC ── */}
          <div className="absolute -top-6 sm:-top-8 inset-x-0 flex items-center justify-between px-2 sm:px-10 z-30">
            {SCENTS.map((scent, i) => {
              const isActive = i === activeIdx;
              return (
                <button
                  key={scent.id}
                  type="button"
                  onClick={() => handleSelectScent(i)}
                  className={`group relative flex flex-col items-center gap-1.5 transition-all duration-300 cursor-pointer ${
                    isActive ? 'scale-105' : 'opacity-40 hover:opacity-80 hover:scale-100'
                  }`}
                >
                  {/* Active Color Dot Indicator */}
                  <div
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      isActive ? 'scale-100 opacity-100 shadow-sm' : 'scale-0 opacity-0'
                    }`}
                    style={{ backgroundColor: scent.accentColor }}
                  />

                  {/* Scent Label along the Arc */}
                  <span
                    className={`text-xs sm:text-sm uppercase tracking-wider font-medium transition-colors ${
                      isActive ? 'font-bold' : 'text-zinc-500 group-hover:text-black'
                    }`}
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      color: isActive ? scent.accentColor : undefined,
                    }}
                  >
                    {scent.name}
                  </span>

                  {/* Tiny active underline bar */}
                  <div
                    className={`h-0.5 rounded-full transition-all duration-300 ${
                      isActive ? 'w-6' : 'w-0'
                    }`}
                    style={{ backgroundColor: scent.accentColor }}
                  />
                </button>
              );
            })}
          </div>

          {/* ── 5. CENTER LUXURY BOTTLE WITH 3D TILT ── */}
          <div
            ref={bottleWrapRef}
            className="relative z-20 flex flex-col items-center justify-end pb-2 cursor-grab active:cursor-grabbing"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {/* Ambient liquid glow behind flacon */}
            <div
              className="absolute bottom-6 w-48 h-48 rounded-full blur-2xl pointer-events-none transition-all duration-700"
              style={{ backgroundColor: currentScent.glowColor }}
            />

            {/* Perfume Bottle Image */}
            <img
              ref={bottleRef}
              src={currentScent.image}
              alt={currentScent.name}
              className="w-[180px] sm:w-[240px] md:w-[280px] object-contain rounded-2xl select-none"
              style={{
                filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.15))',
                maxHeight: '420px',
              }}
              draggable={false}
            />

            {/* Realistic soft radial shadow under bottle base */}
            <div className="w-36 sm:w-48 h-4 bg-black/10 rounded-full blur-md -mt-2 pointer-events-none" />
          </div>
        </div>

      </div>

      {/* ── 6. BOTTOM ACTION CONTROLS ── */}
      <div className="relative z-20 mt-8 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 text-center">
        <button
          type="button"
          onClick={() => onOpenWizard({ archetype: currentScent.archetypeId })}
          className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-white text-xs font-medium uppercase tracking-widest transition-all duration-300 shadow-md cursor-pointer hover:shadow-lg"
          style={{ backgroundColor: '#111111' }}
        >
          <span>Formulate {currentScent.name}</span>
          <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
        </button>

        <div className="flex items-center gap-2 text-[11px] font-mono text-zinc-400 uppercase tracking-widest">
          <Sparkles size={12} style={{ color: currentScent.accentColor }} />
          <span>{currentScent.notes}</span>
        </div>
      </div>
    </section>
  );
};

export default PerfumeAuramonicaArc;
