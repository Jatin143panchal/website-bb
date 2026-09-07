import React from 'react';
import { motion } from 'motion/react';
import { Gem, ShieldCheck, Droplets } from 'lucide-react';

export const ServicesBottleExplodedSection: React.FC = () => {
  const detailVignettes = [
    {
      title: 'CAP DETAIL',
      sub: 'Gold with Crystal Finish',
      image: '/assets/perfume/tuesday_cap_detail.jpg',
    },
    {
      title: 'ATOMIZER DETAIL',
      sub: 'Smooth Spray Mechanism',
      image: '/assets/perfume/tuesday_atomizer_detail.jpg',
    },
    {
      title: 'NECK DETAIL',
      sub: 'Precision Fit',
      image: '/assets/perfume/tuesday_neck_detail.jpg',
    },
    {
      title: 'GLASS DETAIL',
      sub: 'Premium Crystal Glass',
      image: '/assets/perfume/tuesday_glass_detail.jpg',
    },
  ];

  return (
    <section className="w-full bg-[#050B18] text-white py-16 sm:py-24 md:py-32 px-4 sm:px-8 lg:px-14 relative overflow-hidden select-none border-b border-blue-950">
      {/* Background Studio Lighting Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[750px] bg-radial from-blue-700/20 via-blue-950/30 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1440px] mx-auto">
        
        {/* Main 3-Column Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* ── LEFT COLUMN: BRAND LOGO + ASSEMBLED BOTTLE + 3 VALUE PILLARS ── */}
          <div className="lg:col-span-3 flex flex-col justify-between items-center lg:items-start text-center lg:text-left space-y-10">
            
            {/* Logo & Headline */}
            <div className="space-y-1">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-light tracking-wide text-white uppercase"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                TUESDAY
              </h2>
              <div 
                className="text-2xl sm:text-3xl font-light tracking-[0.2em] text-white uppercase -mt-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                LONDON
              </div>
              <p className="text-[10px] font-mono tracking-[0.35em] text-zinc-400 uppercase pt-1">
                PREMIUM PERFUME
              </p>
            </div>

            {/* Assembled Bottle Render with Floor Reflection */}
            <div className="flex flex-col items-center justify-center pt-2">
              <div className="relative w-44 sm:w-52 aspect-[3/4] flex items-center justify-center">
                <img
                  src="/assets/perfume/tuesday_london_exploded.jpg"
                  alt="Tuesday London Assembled Bottle"
                  className="w-full h-full object-cover object-left rounded-2xl drop-shadow-[0_20px_35px_rgba(0,100,255,0.25)] select-none"
                  draggable={false}
                />
              </div>

              <div className="mt-4 text-center">
                <div className="text-[10px] font-mono tracking-[0.25em] text-zinc-400 uppercase font-semibold">
                  FINAL ASSEMBLED VIEW
                </div>
              </div>
            </div>

            {/* 3 Value Icons Strip */}
            <div className="grid grid-cols-3 gap-4 pt-2 w-full max-w-[320px]">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-zinc-600/80 flex items-center justify-center text-zinc-300">
                  <Gem className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div className="text-[9px] font-mono uppercase tracking-wider text-zinc-300 leading-tight">
                  PREMIUM<br />QUALITY
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-zinc-600/80 flex items-center justify-center text-zinc-300">
                  <ShieldCheck className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div className="text-[9px] font-mono uppercase tracking-wider text-zinc-300 leading-tight">
                  LEAK PROOF<br />DESIGN
                </div>
              </div>

              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-10 h-10 rounded-full border border-zinc-600/80 flex items-center justify-center text-zinc-300">
                  <Droplets className="w-4 h-4 stroke-[1.5]" />
                </div>
                <div className="text-[9px] font-mono uppercase tracking-wider text-zinc-300 leading-tight">
                  LONG LASTING<br />FRAGRANCE
                </div>
              </div>
            </div>

          </div>

          {/* ── CENTER COLUMN: PHOTOREALISTIC EXPLODED 3D BOTTLE WITH LEADER LINES ── */}
          <div className="lg:col-span-6 relative flex items-center justify-center py-4">
            <div className="relative w-full max-w-2xl aspect-[16/10] sm:aspect-[4/3] flex items-center justify-center overflow-hidden rounded-3xl bg-transparent">
              <img
                src="/assets/perfume/tuesday_london_exploded_original.png"
                alt="Exploded Perfume Bottle Architecture"
                className="w-full h-full object-contain select-none drop-shadow-[0_25px_40px_rgba(0,100,255,0.3)] transition-transform duration-700 hover:scale-[1.02]"
                draggable={false}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/perfume/tuesday_london_exploded.jpg';
                }}
              />
            </div>
          </div>

          {/* ── RIGHT COLUMN: 4 CIRCULAR MACRO DETAIL VIGNETTES + STATEMENT ── */}
          <div className="lg:col-span-3 flex flex-col justify-between items-center lg:items-end text-center lg:text-right space-y-7">
            
            {/* 4 Circular Zoom Details */}
            <div className="space-y-6 w-full max-w-[260px] flex flex-col items-center lg:items-end">
              {detailVignettes.map((v) => (
                <div key={v.title} className="flex flex-col items-center lg:items-end group cursor-pointer">
                  {/* Glowing Circular Image Thumbnail */}
                  <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full p-1 bg-gradient-to-b from-blue-400/40 via-blue-900/60 to-blue-950 border border-blue-400/60 shadow-lg shadow-blue-500/20 group-hover:scale-105 group-hover:border-amber-400/80 transition-all duration-300">
                    <img
                      src={v.image}
                      alt={v.title}
                      className="w-full h-full object-cover rounded-full select-none"
                      draggable={false}
                    />
                  </div>

                  {/* Caption */}
                  <div className="mt-2 text-center lg:text-right">
                    <div className="text-[11px] font-bold font-mono tracking-wider text-white uppercase">
                      {v.title}
                    </div>
                    <div className="text-[10px] text-zinc-400 font-light">
                      {v.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Luxury Statement */}
            <div className="pt-4 text-center lg:text-right space-y-1">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-zinc-400">
                MORE THAN A PERFUME
              </div>
              <div className="text-xs font-mono uppercase tracking-[0.2em] text-zinc-300 flex items-center justify-center lg:justify-end gap-2">
                <span className="w-6 h-px bg-zinc-600 inline-block" />
                <span>IT'S A STATEMENT</span>
                <span className="w-6 h-px bg-zinc-600 inline-block" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ServicesBottleExplodedSection;
