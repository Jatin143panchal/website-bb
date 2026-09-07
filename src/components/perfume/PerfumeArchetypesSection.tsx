import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PerfumeArchetypesSectionProps {
  onSelectArchetype: (archetypeId: string, genderFocus: string) => void;
}

export const PerfumeArchetypesSection: React.FC<PerfumeArchetypesSectionProps> = ({ onSelectArchetype }) => {
  const [activeGender, setActiveGender] = useState<string>('unisex');
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } }
      );
      gsap.fromTo(
        listRef.current?.querySelectorAll('.archetype-row') ?? [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: listRef.current, start: 'top 75%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const archetypes = [
    {
      id: 'luxury',
      num: '01',
      title: 'LUXURY FRAGRANCE',
      sub: 'Premium positioning & elevated packaging.',
      detail: 'Heavy flint glass, weighted zamak caps, 25–30% Extrait concentration. ₹3,500–₹8,000+ retail.',
      tag: 'HIGH MARGIN',
      img: '/assets/perfume/venotine_ruby_midnight.jpg',
    },
    {
      id: 'niche',
      num: '02',
      title: 'NICHE / ARTISAN',
      sub: 'Distinctive fragrances & storytelling.',
      detail: 'Complex olfactory accords — Oud, Cardamom, Leather, Ambergris. Artisan typography and narrative unboxing.',
      tag: 'STORY-DRIVEN',
      img: '/assets/perfume/venotine_emerald_flux.jpg',
    },
    {
      id: 'everyday',
      num: '03',
      title: 'EVERYDAY PREMIUM',
      sub: 'Accessible luxury & daily wear.',
      detail: 'Crowd-pleasing longevity profiles. Optimized unit economics for fast D2C repeat at ₹999–₹1,999.',
      tag: 'HIGH VELOCITY',
      img: '/assets/perfume/blush_en_bloom_peonies.jpg',
    },
    {
      id: 'signature',
      num: '04',
      title: 'SIGNATURE COLLECTION',
      sub: 'Build a complete fragrance range.',
      detail: 'Unified 3–5 SKU collection (Day, Night, Sport, Club) with discovery sets and traveler vials.',
      tag: 'MULTI-SKU',
      img: '/assets/perfume/blush_en_bloom_trio.jpg',
    },
  ];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headRef} className="mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">What Are You Building</span>
            </div>
            <h2
              className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              CHOOSE YOUR
            </h2>
            <h3
              className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}
            >
              PERFUME ARCHETYPE.
            </h3>
          </div>

          {/* Gender Filter */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {[
              { id: 'men', label: "Men's" },
              { id: 'women', label: "Women's" },
              { id: 'unisex', label: 'Unisex' },
              { id: 'not_sure', label: 'Not Sure' },
            ].map((chip) => (
              <button
                key={chip.id}
                type="button"
                onClick={() => setActiveGender(chip.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium uppercase tracking-wider border transition-all duration-200 cursor-pointer ${
                  activeGender === chip.id
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-500'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial List — NO BOXES, horizontal rule separators only */}
        <div ref={listRef} className="divide-y divide-zinc-100">
          {archetypes.map((a) => (
            <div
              key={a.id}
              className="archetype-row group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-8 cursor-pointer hover:pl-2 transition-all duration-300"
              onClick={() => onSelectArchetype(a.id, activeGender)}
            >
              {/* Number */}
              <span className="text-xs font-mono text-zinc-400 shrink-0 w-8">{a.num}</span>

              {/* Luxury Flacon Thumbnail */}
              <div className="w-14 h-18 sm:w-16 sm:h-20 shrink-0 rounded-lg overflow-hidden bg-zinc-50 border border-zinc-100 group-hover:border-zinc-300 transition-all duration-300 flex items-center justify-center p-1">
                <img
                  src={a.img}
                  alt={a.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  draggable={false}
                />
              </div>

              {/* Title block */}
              <div className="flex-1 space-y-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-4">
                  <h4
                    className="text-2xl sm:text-3xl font-normal tracking-[-0.01em] text-[#111111] uppercase group-hover:tracking-wide transition-all duration-500"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    {a.title}
                  </h4>
                  <span className="text-[10px] font-mono text-zinc-400 tracking-widest border border-zinc-200 px-2 py-0.5 rounded-full">
                    {a.tag}
                  </span>
                </div>
                <p className="text-sm text-zinc-600 max-w-2xl">{a.detail}</p>
              </div>

              {/* CTA arrow */}
              <div className="shrink-0 flex items-center gap-2 text-xs font-medium text-zinc-400 group-hover:text-black transition-colors uppercase tracking-widest">
                <span>Build This</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PerfumeArchetypesSection;
