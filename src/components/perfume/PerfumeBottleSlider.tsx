import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// GSAP-animated infinite horizontal marquee slider of perfume bottles
// with a pinned "active" bottle that responds to scroll

const BOTTLES = [
  {
    id: 1,
    name: 'VENOTINE MIDNIGHT RUBY',
    type: 'Extrait de Parfum · 32%',
    accord: 'Midnight Berry · Spiced Amber · Rich Plum',
    img: '/assets/perfume/venotine_ruby_midnight.jpg',
  },
  {
    id: 2,
    name: 'VENOTINE EMERALD FLUX',
    type: 'Extrait de Parfum · 30%',
    accord: 'Vetiver · Green Moss · Bergamot Crown',
    img: '/assets/perfume/venotine_emerald_flux.jpg',
  },
  {
    id: 3,
    name: '108 LUXURY VELVET ECLIPSE',
    type: 'Extrait de Parfum · 30%',
    accord: 'French Rose · Black Currant · Velvet Ribbon',
    img: '/assets/perfume/108_luxury_velvet_model.jpg',
  },
  {
    id: 4,
    name: 'BLUSH EN BLOOM',
    type: 'Eau de Parfum · 25%',
    accord: 'Centifolia Peony · Lychee · White Musk',
    img: '/assets/perfume/blush_en_bloom_peonies.jpg',
  },
  {
    id: 5,
    name: 'BIOGRAPHEY ORIGIN',
    type: 'Extrait de Parfum · 28%',
    accord: 'Damask Rose · Crimson Petals · Smoky Amber',
    img: '/assets/perfume/biographey_origin_roses.jpg',
  },
  {
    id: 6,
    name: 'ROUGX VELVET SAKURA',
    type: 'Extrait de Parfum · 28%',
    accord: 'Cherry Blossom · Pink Pepper · Ambergris',
    img: '/assets/perfume/rougx_velvet_sakura.jpg',
  },
];

interface PerfumeBottleSliderProps {
  onOpenWizard?: () => void;
}

export const PerfumeBottleSlider: React.FC<PerfumeBottleSliderProps> = ({ onOpenWizard }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const activeImgRef = useRef<HTMLImageElement>(null);
  const activeLabelRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header reveal
      gsap.fromTo(
        headRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 82%' } }
      );

      // Active bottle image — continuous subtle float
      if (activeImgRef.current) {
        gsap.to(activeImgRef.current, {
          y: -16,
          duration: 2.8,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });
      }

      // Track marquee on scroll — horizontal slide
      if (trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth;
        gsap.fromTo(
          trackRef.current,
          { x: 0 },
          {
            x: -(trackWidth / 2),
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.5,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate active bottle swap
  const handleBottleClick = (index: number) => {
    if (index === activeIndex) return;
    if (!activeImgRef.current || !activeLabelRef.current) return;

    const tl = gsap.timeline();
    tl.to(activeImgRef.current, { opacity: 0, scale: 0.92, y: 20, duration: 0.25, ease: 'power2.in' })
      .to(activeLabelRef.current, { opacity: 0, y: 10, duration: 0.2 }, '<')
      .call(() => setActiveIndex(index))
      .fromTo(activeImgRef.current, { opacity: 0, scale: 0.92, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.45, ease: 'power3.out' })
      .fromTo(activeLabelRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.35 }, '-=0.3');
  };

  const active = BOTTLES[activeIndex];

  // Duplicate for seamless marquee
  const marqueeBottles = [...BOTTLES, ...BOTTLES, ...BOTTLES];

  return (
    <section
      ref={sectionRef}
      className="py-24 sm:py-32 bg-white border-t border-zinc-100 overflow-hidden"
    >
      {/* Header */}
      <div ref={headRef} className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto mb-14">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                Real Launches
              </span>
            </div>
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              BOTTLED BY
            </h2>
            <h3
              className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
            >
              BANEGA.
            </h3>
          </div>
          {onOpenWizard && (
            <button
              type="button"
              onClick={onOpenWizard}
              className="group inline-flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-black uppercase tracking-widest transition-colors cursor-pointer whitespace-nowrap self-end"
            >
              Build Mine
              <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </div>

      {/* Main layout — active bottle left + track thumbnails below */}
      <div className="px-6 sm:px-12 lg:px-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-16">

          {/* Active Bottle — large centred */}
          <div className="relative flex items-center justify-center min-h-[360px] sm:min-h-[480px]">
            {/* Soft radial wash */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.04)_0%,_transparent_70%)]" />
            <img
              ref={activeImgRef}
              key={active.id}
              src={active.img}
              alt={active.name}
              className="relative z-10 object-contain w-auto select-none"
              style={{ maxHeight: 440, maxWidth: '100%', filter: 'drop-shadow(0 30px 60px rgba(0,0,0,0.15))' }}
              draggable={false}
            />

            {/* Floating coordinate labels */}
            <div className="absolute top-6 right-0 text-right">
              <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                {active.type}
              </div>
            </div>
            <div className="absolute bottom-6 left-0">
              <div className="flex items-center gap-2">
                <div className="w-4 h-px bg-zinc-300" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                  {active.accord}
                </span>
              </div>
            </div>
          </div>

          {/* Active info + selector */}
          <div className="space-y-10">
            <div ref={activeLabelRef} className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                0{activeIndex + 1} / 0{BOTTLES.length}
              </span>
              <h4
                className="text-4xl sm:text-5xl font-normal text-[#111111] tracking-[-0.02em] uppercase leading-[1]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {active.name}
              </h4>
              <p className="text-sm text-zinc-500" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                {active.type}
              </p>
              <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                {active.accord}
              </p>
            </div>

            {/* Thumb selector — horizontal row, NO BOX, just image + underline active indicator */}
            <div className="flex items-end gap-5 overflow-x-auto pb-2 scrollbar-hide">
              {BOTTLES.map((b, i) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => handleBottleClick(i)}
                  className="group relative flex flex-col items-center gap-2 shrink-0 cursor-pointer"
                >
                  <div
                    className={`relative w-16 h-24 sm:w-20 sm:h-28 transition-all duration-300 ${
                      activeIndex === i ? 'opacity-100 scale-110' : 'opacity-40 group-hover:opacity-70 group-hover:scale-105'
                    }`}
                  >
                    <img
                      src={b.img}
                      alt={b.name}
                      className="w-full h-full object-contain"
                      style={{ filter: 'drop-shadow(0 8px 20px rgba(0,0,0,0.12))' }}
                    />
                  </div>
                  {/* Active underline indicator */}
                  <div
                    className={`h-px transition-all duration-300 ${
                      activeIndex === i ? 'bg-black w-full' : 'bg-zinc-200 w-1/2 group-hover:w-full'
                    }`}
                  />
                  <span
                    className={`text-[9px] font-mono uppercase tracking-widest transition-colors ${
                      activeIndex === i ? 'text-black' : 'text-zinc-400'
                    }`}
                  >
                    {b.name.split(' ')[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal scroll-driven marquee track */}
      <div className="relative w-full overflow-hidden mt-4">
        {/* Edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div ref={trackRef} className="flex items-end gap-6 px-12" style={{ width: 'max-content' }}>
          {marqueeBottles.map((b, i) => (
            <div
              key={`${b.id}-${i}`}
              className="shrink-0 flex flex-col items-center gap-3 cursor-pointer group"
              onClick={() => handleBottleClick(BOTTLES.findIndex((bb) => bb.id === b.id))}
              style={{ width: 100 }}
            >
              <img
                src={b.img}
                alt={b.name}
                className="w-16 h-24 object-contain opacity-50 group-hover:opacity-80 transition-opacity duration-300"
                style={{ filter: 'drop-shadow(0 10px 20px rgba(0,0,0,0.1))' }}
                draggable={false}
              />
              <span className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 group-hover:text-zinc-600 transition-colors text-center">
                {b.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PerfumeBottleSlider;
