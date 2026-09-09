import React, { useState, useEffect, useRef, useCallback } from 'react';
import pureBotanicalImg from '../assets/showcase/pure_botanical_serum.jpg';
import velvetTintImg from '../assets/showcase/velvet_tint_strawberry.jpg';
import amberPerfumeImg from '../assets/showcase/amber_luxury_perfume.jpg';

interface ShowcaseCard {
  src: string;
  brand: string;
  name: string;
  category: string;
  accent: string;
}

const CARDS: ShowcaseCard[] = [
  {
    src: pureBotanicalImg,
    brand: 'APETOME',
    name: 'Pure Botanical',
    category: 'Skin Care Launch',
    accent: '#FF7A00',
  },
  {
    src: velvetTintImg,
    brand: 'BLUSH EN BLOOM',
    name: 'Velvet Tint',
    category: 'Cosmetics Launch',
    accent: '#FF7A00',
  },
  {
    src: amberPerfumeImg,
    brand: 'DREFOR OBSIDIAN',
    name: 'Amber Nectar',
    category: 'Fragrance Launch',
    accent: '#FF7A00',
  },
  {
    src: '/assets/perfume/venotine_ruby_midnight.jpg',
    brand: 'VENOTINE',
    name: 'Ruby Midnight',
    category: 'Perfume Launch',
    accent: '#FF7A00',
  },
  {
    src: '/assets/solutions/ayurveda.jpg',
    brand: 'AYURVEDA BOTANICA',
    name: 'Saffron Elixir',
    category: 'Ayurveda Launch',
    accent: '#75C376',
  },
  {
    src: '/assets/skincare/grevety_skincare_full_collection.jpg',
    brand: 'GREVETY',
    name: 'Clinical Derma',
    category: 'Skin Care Launch',
    accent: '#FF7A00',
  },
];

export const Services3DProductHero: React.FC = () => {
  const [angle, setAngle] = useState(0);
  const [dragging, setDragging] = useState(false);
  const paused = useRef(false);
  const startX = useRef(0);
  const startAngle = useRef(0);
  const animationFrameId = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalCards = CARDS.length;
  const step = 360 / totalCards;
  const radius = 430; // Larger 3D circle radius for bigger cards
  const cardWidth = 330; // Bigger card width
  const cardHeight = 475; // Bigger card height

  // Continuous smooth auto-rotation
  useEffect(() => {
    let lastTime = performance.now();

    const animate = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!dragging && !paused.current) {
        setAngle((prev) => prev - (delta * 0.016));
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
  }, [dragging]);

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    setDragging(true);
    paused.current = true;
    startX.current = e.clientX;
    startAngle.current = angle;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }, [angle]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragging) return;
    const delta = e.clientX - startX.current;
    setAngle(startAngle.current + delta * 0.35);
  }, [dragging]);

  const handlePointerUp = useCallback(() => {
    setDragging(false);
    setTimeout(() => {
      paused.current = false;
    }, 1500);
  }, []);

  return (
    <section className="relative w-full bg-[#FAF8F5] pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-6 overflow-hidden select-none">
      
      {/* Subtle Dot Grid Background Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-45"
        style={{
          backgroundImage: 'radial-gradient(#d4d4d8 1.2px, transparent 1.2px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top subtle fade */}
      <div className="absolute top-0 inset-x-0 h-10 bg-gradient-to-b from-[#FAF8F5] to-transparent pointer-events-none z-10" />

      {/* 3D Cylindrical Revolving Stage - Larger and Compact Vertical Spacing */}
      <div className="relative max-w-7xl mx-auto px-2 sm:px-4">
        <div
          ref={containerRef}
          className="relative w-full select-none touch-pan-y flex items-center justify-center"
          style={{
            height: '520px',
            perspective: '1400px',
            cursor: dragging ? 'grabbing' : 'grab',
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {/* Revolving Cylinder Center */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transformStyle: 'preserve-3d',
              transform: `translateZ(-${radius}px) rotateY(${angle}deg)`,
              willChange: 'transform',
            }}
          >
            {CARDS.map((card, i) => {
              const cardAngle = i * step;

              return (
                <div
                  key={i}
                  className="absolute rounded-[30px] overflow-hidden border border-black/10 shadow-[0_24px_50px_rgba(0,0,0,0.18)] bg-zinc-900 group select-none transition-shadow duration-300 hover:shadow-[0_30px_70px_rgba(0,0,0,0.28)]"
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    transform: `rotateY(${cardAngle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: 'visible',
                  }}
                >
                  {/* Product Packaging Image */}
                  <img
                    src={card.src}
                    alt={`${card.brand} - ${card.name}`}
                    className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 group-hover:scale-105"
                    draggable={false}
                  />

                  {/* Dark Vignette Gradient Overlay at Bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent pointer-events-none" />

                  {/* Card Bottom Meta Overlays */}
                  <div className="absolute inset-x-0 bottom-0 p-6 text-left space-y-1.5 z-10">
                    {/* Brand Pill Badge */}
                    <div>
                      <span className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#20150d]/85 backdrop-blur-md border border-[#ff7a00]/30 text-[11px] font-black uppercase tracking-wider text-[#FF7A00]">
                        {card.brand}
                      </span>
                    </div>

                    {/* Launch Title */}
                    <div className="text-2xl sm:text-[26px] font-black text-white tracking-tight leading-tight pt-0.5">
                      {card.name}
                    </div>

                    {/* Launch Category with Orange Icon */}
                    <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-zinc-200 pt-0.5">
                      <span className="w-4 h-4 rounded-full border border-[#FF7A00]/90 flex items-center justify-center text-[#FF7A00] shrink-0">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00]" />
                      </span>
                      <span>{card.category}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Floor Stage Light Glow & Subtle Reflection at Bottom */}
        <div className="absolute bottom-0 inset-x-0 h-12 bg-gradient-to-t from-[#FAF8F5] to-transparent pointer-events-none z-10" />
      </div>

    </section>
  );
};

export default Services3DProductHero;
