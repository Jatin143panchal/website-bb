import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles, Droplets, ShieldCheck, Compass } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FlaconData {
  id: string;
  name: string;
  subTitle: string;
  concentration: string;
  volume: string;
  origin: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  maceration: string;
  packagingSpec: string;
  image: string;
  accentGlow: string;
}

const FLACONS: FlaconData[] = [
  {
    id: 'haute-parfumerie',
    name: 'VENOTINE MIDNIGHT RUBY',
    subTitle: 'Signature Amber & Ruby Extrait',
    concentration: '32% Extrait de Parfum',
    volume: '50ml · 1.7 Fl. Oz.',
    origin: 'European Fine Oils & Banega Labs',
    topNotes: ['Italian Bergamot', 'Spiced Plum', 'Cardamom Pods'],
    heartNotes: ['Damask Rose', 'Bespoke Golden Amber', 'Midnight Berries'],
    baseNotes: ['Indonesian Sandalwood', 'Smoked Tonka', 'White Musk'],
    maceration: '45 Days Cold Cure',
    packagingSpec: 'Heavy Flint Flacon · Brushed Zamak Crown Cap',
    image: '/assets/perfume/venotine_ruby_midnight.jpg',
    accentGlow: 'rgba(217, 155, 38, 0.15)',
  },
  {
    id: 'noir-oud',
    name: 'VENOTINE EMERALD FLUX',
    subTitle: 'Botanical Luminescence & Velvet Green',
    concentration: '30% Extrait de Parfum',
    volume: '100ml · 3.4 Fl. Oz.',
    origin: 'Natural Essential Oils & Fine Compounding',
    topNotes: ['Black Saffron', 'Pink Pepper', 'Green Vetiver'],
    heartNotes: ['Aged Cambodian Oud', 'Black Leather', 'Oakmoss Accord'],
    baseNotes: ['Ambergris Resin', 'Bourbon Vanilla', 'Birch Tar'],
    maceration: '60 Days Oak-Cast Cured',
    packagingSpec: 'Emerald Flacon · Solid Mirror Gold Crown Cap',
    image: '/assets/perfume/venotine_emerald_flux.jpg',
    accentGlow: 'rgba(170, 110, 30, 0.18)',
  },
  {
    id: 'fleur-blanche',
    name: 'BLUSH EN BLOOM',
    subTitle: 'Centifolia Peony & Velvet Floral',
    concentration: '25% Eau de Parfum Intense',
    volume: '50ml · 1.7 Fl. Oz.',
    origin: 'Provence Natural Botanicals',
    topNotes: ['Neroli Petals', 'Lychee Zest', 'Morning Dew'],
    heartNotes: ['White Tuberose', 'Pink Peony', 'Centifolia Rose'],
    baseNotes: ['Frosted Cedarwood', 'Cashmeran', 'Crisp White Amber'],
    maceration: '35 Days Ambient Maceration',
    packagingSpec: 'Flint Glass Flacon · Gold Sprayer Collar',
    image: '/assets/perfume/blush_en_bloom_peonies.jpg',
    accentGlow: 'rgba(235, 175, 180, 0.16)',
  },
];

interface PerfumeLuxuryExperienceProps {
  onOpenWizard: () => void;
}

export const PerfumeLuxuryExperience: React.FC<PerfumeLuxuryExperienceProps> = ({ onOpenWizard }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const bottleWrapRef = useRef<HTMLDivElement>(null);
  const bottleImgRef = useRef<HTMLImageElement>(null);
  const cardLeftRef = useRef<HTMLDivElement>(null);
  const cardRightRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeFlacon = FLACONS[activeIndex];

  // 3D Interactive Mouse Parallax Tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bottleWrapRef.current) return;
    const rect = bottleWrapRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    gsap.to(bottleWrapRef.current, {
      rotateY: x * 18,
      rotateX: -y * 18,
      transformPerspective: 1000,
      ease: 'power1.out',
      duration: 0.5,
    });
  };

  const handleMouseLeave = () => {
    if (!bottleWrapRef.current) return;
    gsap.to(bottleWrapRef.current, {
      rotateY: 0,
      rotateX: 0,
      ease: 'power2.out',
      duration: 0.8,
    });
  };

  // Switch flacon with cinematic GSAP cross-fade
  const handleSwitchFlacon = (newIdx: number) => {
    if (newIdx === activeIndex) return;

    const tl = gsap.timeline();
    tl.to(bottleImgRef.current, {
      opacity: 0,
      scale: 0.92,
      y: 15,
      duration: 0.28,
      ease: 'power2.in',
    })
      .to([cardLeftRef.current, cardRightRef.current], {
        opacity: 0.3,
        duration: 0.2,
      }, '<')
      .call(() => {
        setActiveIndex(newIdx);
      })
      .to(bottleImgRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.55,
        ease: 'power3.out',
      })
      .to([cardLeftRef.current, cardRightRef.current], {
        opacity: 1,
        duration: 0.4,
      }, '-=0.35');
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll-driven Pin & Scale Animation (Contra / Auramonica inspired)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      });

      tl.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          bottleWrapRef.current,
          { opacity: 0, scale: 0.85, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 1.1, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          [cardLeftRef.current, cardRightRef.current],
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
          '-=0.7'
        )
        .fromTo(
          bottomBarRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '-=0.4'
        );

      // Continuous subtle breathing hover on the bottle
      gsap.to(bottleImgRef.current, {
        y: -10,
        duration: 3.2,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative py-28 sm:py-36 bg-[#FCFCFC] border-t border-zinc-100 overflow-hidden select-none"
      style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
    >
      {/* Dynamic Ambient Luxury Radial Glow behind bottle */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full pointer-events-none transition-all duration-700 blur-[100px] opacity-70"
        style={{
          background: `radial-gradient(circle, ${activeFlacon.accentGlow} 0%, rgba(255,255,255,0) 70%)`,
        }}
      />

      <div ref={pinSectionRef} className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 relative z-10">
        
        {/* Header — Editorial Luxury */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3">
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-zinc-300" />
            <span className="text-[11px] font-mono uppercase tracking-[0.3em] text-zinc-400">
              Interactive Olfactory Flacon
            </span>
            <div className="w-8 h-px bg-zinc-300" />
          </div>

          <h2
            className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-normal text-[#111111] leading-[1.05] tracking-tight uppercase"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            The Art of the Flacon
          </h2>

          <p className="text-sm text-zinc-500 leading-relaxed font-light">
            Every millimeter calibrated for luxury. Rotate, inspect notes, and preview bespoke formulation coordinates built for your private label.
          </p>
        </div>

        {/* Central 3-Column Experience: Left Specs | Center 3D Flacon | Right Olfactive Notes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT SPECIFICATIONS CARD */}
          <div ref={cardLeftRef} className="lg:col-span-3 space-y-6 order-2 lg:order-1">
            <div className="border-t border-zinc-200 pt-5 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                Formula Profile
              </span>
              <h4
                className="text-xl font-normal text-black uppercase"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {activeFlacon.name}
              </h4>
              <p className="text-xs text-zinc-500">{activeFlacon.subTitle}</p>
            </div>

            <div className="space-y-4 text-xs divide-y divide-zinc-100">
              <div className="pt-3 flex justify-between items-center">
                <span className="text-zinc-400 font-mono uppercase text-[10px]">Concentration</span>
                <span className="text-black font-medium">{activeFlacon.concentration}</span>
              </div>
              <div className="pt-3 flex justify-between items-center">
                <span className="text-zinc-400 font-mono uppercase text-[10px]">Volume</span>
                <span className="text-black font-medium">{activeFlacon.volume}</span>
              </div>
              <div className="pt-3 flex justify-between items-center">
                <span className="text-zinc-400 font-mono uppercase text-[10px]">Maceration</span>
                <span className="text-black font-medium">{activeFlacon.maceration}</span>
              </div>
              <div className="pt-3 flex justify-between items-center">
                <span className="text-zinc-400 font-mono uppercase text-[10px]">Lab Origin</span>
                <span className="text-black font-medium">{activeFlacon.origin}</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-zinc-100 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-zinc-600 text-xs font-medium">
                <ShieldCheck size={14} className="text-black" />
                <span>Turnkey Compliance</span>
              </div>
              <p className="text-[11px] text-zinc-400 leading-relaxed">
                100% IFRA Compliant, stability-tested at 45°C accelerated chambers, batch registered for export.
              </p>
            </div>
          </div>

          {/* CENTER: 3D INTERACTIVE FLACON WITH PARALLAX TILT */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2 relative py-4 sm:py-8">
            
            {/* Interactive Bottle Wrap with 3D transform */}
            <div
              ref={bottleWrapRef}
              className="relative w-full max-w-[340px] sm:max-w-[420px] flex items-center justify-center cursor-grab active:cursor-grabbing transition-shadow"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Floating coordinate badges (Auramonica style) */}
              <div className="absolute -top-3 left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-zinc-200/80 shadow-md text-[10px] font-mono uppercase tracking-wider text-black flex items-center gap-1.5 z-20">
                <Sparkles size={11} className="text-amber-600" />
                <span>Extrait 30% Pure</span>
              </div>

              <div className="absolute top-1/3 -right-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-zinc-200/80 shadow-md text-[10px] font-mono uppercase tracking-wider text-black flex items-center gap-1.5 z-20">
                <Droplets size={11} className="text-amber-700" />
                <span>Micro-Mist Crimp</span>
              </div>

              <div className="absolute bottom-8 -left-4 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-zinc-200/80 shadow-md text-[10px] font-mono uppercase tracking-wider text-black flex items-center gap-1.5 z-20">
                <Compass size={11} className="text-zinc-600" />
                <span>Weighted Zamak Cap</span>
              </div>

              {/* The Flacon Image */}
              <img
                ref={bottleImgRef}
                src={activeFlacon.image}
                alt={activeFlacon.name}
                className="w-full object-contain rounded-2xl select-none"
                style={{
                  maxHeight: '520px',
                  filter: 'drop-shadow(0 35px 55px rgba(0, 0, 0, 0.18))',
                }}
                draggable={false}
              />
            </div>

            {/* Hint label */}
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400 mt-6">
              Move cursor to tilt in 3D
            </span>
          </div>

          {/* RIGHT: OLFACTIVE PYRAMID NOTES (Contra style) */}
          <div ref={cardRightRef} className="lg:col-span-3 space-y-6 order-3">
            <div className="border-t border-zinc-200 pt-5 space-y-1">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-zinc-400">
                Olfactory Architecture
              </span>
              <h4
                className="text-xl font-normal text-black uppercase"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                The Accord Pyramid
              </h4>
            </div>

            {/* Accord 1: Top Notes */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline text-xs">
                <span className="font-mono uppercase text-[10px] text-zinc-400">Top Notes · 15 Min</span>
                <span className="text-black font-semibold text-[10px] font-mono">Opening</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeFlacon.topNotes.map((note) => (
                  <span
                    key={note}
                    className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700 text-xs shadow-2xs font-light"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Accord 2: Heart Notes */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline text-xs">
                <span className="font-mono uppercase text-[10px] text-zinc-400">Heart Notes · 4–6 Hours</span>
                <span className="text-black font-semibold text-[10px] font-mono">Core</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeFlacon.heartNotes.map((note) => (
                  <span
                    key={note}
                    className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700 text-xs shadow-2xs font-light"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Accord 3: Base Notes */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-baseline text-xs">
                <span className="font-mono uppercase text-[10px] text-zinc-400">Base Notes · 12+ Hours</span>
                <span className="text-black font-semibold text-[10px] font-mono">Longevity</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {activeFlacon.baseNotes.map((note) => (
                  <span
                    key={note}
                    className="px-2.5 py-1 rounded-md bg-white border border-zinc-200 text-zinc-700 text-xs shadow-2xs font-light"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenWizard}
                className="w-full py-3.5 px-5 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-medium uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md group"
              >
                <span>Formulate This Archetype</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM FLACON SELECTOR BAR (Auramonica signature switch) */}
        <div
          ref={bottomBarRef}
          className="mt-14 sm:mt-20 pt-8 border-t border-zinc-200/80 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-zinc-400">
            <span>Curated Flacon Editions:</span>
          </div>

          <div className="flex items-center gap-4 sm:gap-8 flex-wrap justify-center">
            {FLACONS.map((flacon, idx) => (
              <button
                key={flacon.id}
                type="button"
                onClick={() => handleSwitchFlacon(idx)}
                className={`group flex items-center gap-3 py-2 text-left cursor-pointer transition-all ${
                  activeIndex === idx ? 'opacity-100' : 'opacity-40 hover:opacity-75'
                }`}
              >
                <div
                  className={`w-9 h-12 rounded-md overflow-hidden border transition-all ${
                    activeIndex === idx ? 'border-black ring-2 ring-black/10 scale-105' : 'border-zinc-200'
                  }`}
                >
                  <img
                    src={flacon.image}
                    alt={flacon.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono text-zinc-400">0{idx + 1}</div>
                  <div
                    className="text-xs font-medium text-black uppercase tracking-wider group-hover:underline"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {flacon.name}
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="hidden lg:block text-right text-[10px] font-mono uppercase tracking-widest text-zinc-400">
            Extrait · 50ml–100ml Standard
          </div>
        </div>

      </div>
    </section>
  );
};

export default PerfumeLuxuryExperience;
