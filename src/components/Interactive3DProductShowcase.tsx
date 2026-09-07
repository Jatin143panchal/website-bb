import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion } from 'motion/react';
import { Move3D, Sparkles, CheckCircle2, ArrowUpRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCard {
  src: string;
  brand: string;
  name: string;
  sub: string;
  category: string;
  rating: string;
  units: string;
}

const products: ProductCard[] = [
  { src: '/assets/perfume/drefor_obsidian_botanical.jpg', brand: 'DREFOR OBSIDIAN', name: 'Luxury Fragrance', sub: 'Extrait De Parfum', category: 'Perfume', rating: '4.9★', units: 'Sold Out Batch 1' },
  { src: '/assets/perfume/rougx_velvet_sakura.jpg', brand: 'ROUGX', name: 'Velvet Sakura EDP', sub: 'Bespoke Compounding', category: 'Perfume', rating: '4.8★', units: '#1 Best Seller' },
  { src: '/assets/skincare/grevety_skincare_full_collection.jpg', brand: 'GREVETY', name: 'Clinical Derma Range', sub: '5-SKU Active Suite', category: 'Skin Care', rating: '5.0★', units: '₹18L in Month 1' },
  { src: '/assets/skincare/grevety_serum_pool.jpg', brand: 'GREVETY', name: 'Barrier Active Serum', sub: 'Pure Ceramide Drops', category: 'Skin Care', rating: '4.9★', units: '6,000+ Units' },
  { src: '/assets/perfume/blush_en_bloom_peonies.jpg', brand: 'BLUSH EN BLOOM', name: 'Rose & Peony Extrait', sub: 'Luxury Fragrance', category: 'Perfume', rating: '4.8★', units: 'Nykaa Featured' },
  { src: '/assets/perfume/biographey_origin_roses.jpg', brand: 'BIOGRAPHEY', name: 'Origin Crimson Roses', sub: 'Artisan Glass Flacon', category: 'Perfume', rating: '4.9★', units: 'Luxe Edition' },
  { src: '/assets/perfume/venotine_ruby_midnight.jpg', brand: 'VENOTINE', name: 'Midnight Ruby Flacon', sub: 'Extrait De Parfum', category: 'Perfume', rating: '4.9★', units: 'High Re-order' },
];

export const Interactive3DProductShowcase: React.FC = () => {
  const [angle, setAngle] = useState(0);
  const [dragging, setDragging] = useState(false);
  const paused = useRef(false);
  const startX = useRef(0);
  const startAngle = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const step = 360 / products.length;
  const radius = 320;
  const cardWidth = 250;
  const cardHeight = 350;

  // Auto-rotation every 3.5 seconds
  useEffect(() => {
    if (dragging) {
      paused.current = true;
      return;
    }
    paused.current = false;
    const interval = setInterval(() => {
      if (!paused.current) setAngle((a) => a - step);
    }, 3800);

    return () => clearInterval(interval);
  }, [dragging, step]);

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
    }, 2500);
  }, []);

  const currentIndex = Math.round((-angle / step) % products.length + products.length) % products.length;

  return (
    <section className="w-full bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-zinc-200 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#FF5722] text-xs font-black uppercase tracking-wider">
            <Sparkles size={13} />
            3D Interactive Product Gallery
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111111]">
            Physical Bottles & Packaging We Have Delivered
          </h2>
          <p className="text-zinc-500 text-sm sm:text-base font-medium">
            Drag to rotate and explore luxury glass bottles, crimp pumps, airless dispensers, and finished retail boxes.
          </p>
        </div>

        {/* 3D Carousel Stage */}
        <div className="relative max-w-4xl mx-auto my-8">
          <div
            ref={containerRef}
            className="relative w-full select-none touch-pan-y"
            style={{
              height: '460px',
              perspective: '1200px',
              cursor: dragging ? 'grabbing' : 'grab',
            }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <div
              className="absolute inset-0 mx-auto"
              style={{
                transformStyle: 'preserve-3d',
                transform: `translateZ(-${radius}px) rotateY(${angle}deg)`,
                transition: dragging ? 'none' : 'transform 0.8s cubic-bezier(.22,.61,.36,1)',
                willChange: 'transform',
              }}
            >
              {products.map((item, i) => (
                <div
                  key={i}
                  className="absolute left-1/2 top-1/2 rounded-3xl overflow-hidden border-2 border-orange-400/40 shadow-2xl bg-zinc-950 group hover:border-[#FF5722] transition-all"
                  style={{
                    width: `${cardWidth}px`,
                    height: `${cardHeight}px`,
                    marginLeft: `-${cardWidth / 2}px`,
                    marginTop: `-${cardHeight / 2}px`,
                    transform: `rotateY(${i * step}deg) translateZ(${radius}px)`,
                  }}
                >
                  <img
                    src={item.src}
                    alt={`${item.brand} ${item.name}`}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    draggable={false}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Content Overlays */}
                  <div className="absolute inset-x-0 bottom-0 p-5 text-left space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-widest text-[#FF5722] font-black bg-black/60 px-2.5 py-0.5 rounded-full border border-orange-500/30">
                        {item.brand}
                      </span>
                      <span className="text-[10px] font-bold text-amber-300 bg-black/60 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <Star size={10} className="fill-amber-300" /> {item.rating}
                      </span>
                    </div>

                    <div className="text-base font-black text-white leading-snug pt-1">
                      {item.name}
                    </div>

                    <div className="text-xs font-semibold text-zinc-300 flex items-center justify-between pt-1 border-t border-white/20">
                      <span className="flex items-center gap-1">
                        <CheckCircle2 size={11} className="text-[#FF5722]" />
                        {item.sub}
                      </span>
                      <span className="text-[10px] text-emerald-400 font-bold">
                        {item.units}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Navigation Dots */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => setAngle(-i * step)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === i ? 'w-8 bg-[#FF5722]' : 'w-2 bg-zinc-300 hover:bg-[#FF5722]/50'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Drag Hint */}
          <div className="inline-flex items-center gap-2 mt-6 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-zinc-600 text-xs font-bold uppercase tracking-wider">
            <Move3D size={14} className="text-[#FF5722]" />
            Drag or swipe horizontally to spin products in 3D
          </div>
        </div>

      </div>
    </section>
  );
};
