import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { ArrowRight, Move3D, Star, CheckCircle, Sparkles, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

// ============================================================
// 1. CAROUSEL DATA - ULTRA SMALL (Pre-compressed images)
// ============================================================
const carouselItems = [
  { src: '/assets/222.webp', brand: 'DREFOR', name: 'Luxury Fragrance', sub: 'Perfume Launch' },
  { src: '/assets/123.webp', brand: 'ROUGX', name: 'Eau De Parfum', sub: 'Fragrance Launch' },
  { src: '/assets/321.webp', brand: 'BELLMONTAE', name: 'Clinical Glow', sub: 'Skin Care Launch' },
  { src: '/assets/231.webp', brand: 'APETOME', name: 'Pure Botanical', sub: 'Skin Care Launch' },
  { src: '/assets/111.webp', brand: 'BLUSH EN BLOOM', name: 'Velvet Tint', sub: 'Cosmetics Launch' },
  { src: '/assets/1212.webp', brand: 'BIOGRAPHEY', name: 'Signature Story', sub: 'Luxury Fragrance' },
  { src: '/assets/mintyjamun.webp', brand: 'ESSAENCE', name: 'Artisan Perfume', sub: 'Fragrance Launch' },
];

type CarouselItem = { src: string; brand: string; name: string; sub: string };

// Client reviews from founders of launched products
const clientReviews = [
  {
    brand: 'Bellmontae Skin Care',
    founder: 'Rohit S.',
    feedback: 'Banega Brand turned our raw skincare concept into a premium shelf-ready brand in 45 days. Hit ₹12L revenue in month 1!',
    rating: 5,
    tag: 'Skin Care'
  },
  {
    brand: 'Drefor Fragrance',
    founder: 'Aditya M.',
    feedback: 'From bottle sourcing to formulation and marketplace launch, their end-to-end execution is unmatched in India.',
    rating: 5,
    tag: 'Perfume'
  },
  {
    brand: 'Apetome Skin Care',
    founder: 'Priya K.',
    feedback: 'Packaging design and factory coordination were flawless. 4,000+ units sold within 60 days of launch!',
    rating: 5,
    tag: 'Cosmetics'
  },
  {
    brand: 'Rougx Perfumes',
    founder: 'Karan V.',
    feedback: 'The 6-step framework eliminated all guesswork. Our perfume launch was completely sold out on launch week.',
    rating: 5,
    tag: 'Fragrance'
  }
];

// ============================================================
// 2. CAROUSEL 3D - LIGHTWEIGHT VERSION
// ============================================================
interface Carousel3DProps {
  items: CarouselItem[];
  height?: string;
  radius?: number;
  cardWidth?: number;
  cardHeight?: number;
  showDots?: boolean;
}

const Carousel3D = ({
  items,
  height = '480px',
  radius = 320,
  cardWidth = 240,
  cardHeight = 340,
  showDots = true,
}: Carousel3DProps) => {
  const [angle, setAngle] = useState(0);
  const [dragging, setDragging] = useState(false);

  const paused = useRef(false);
  const startX = useRef(0);
  const startAngle = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const step = 360 / items.length;

  // Auto-rotation - only when not dragging
  useEffect(() => {
    if (dragging) {
      paused.current = true;
      return;
    }

    paused.current = false;
    const id = setInterval(() => {
      if (!paused.current) setAngle((a) => a - step);
    }, 4000);

    return () => clearInterval(id);
  }, [dragging, step]);

  // Pointer events
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
    setAngle(startAngle.current + delta * 0.3);
  }, [dragging]);

  const handlePointerUp = useCallback(() => {
    setDragging(false);
    setTimeout(() => {
      paused.current = false;
    }, 2000);
  }, []);

  // Memoized dots
  const dots = useMemo(() => {
    if (!showDots) return null;
    const currentIndex = Math.round(-angle / step) % items.length;
    return items.map((_, i) => (
      <button
        key={i}
        onClick={() => setAngle(-i * step)}
        className={`h-1.5 rounded-full transition-all duration-300 ${
          currentIndex === i
            ? 'w-6 bg-[#D97706]'
            : 'w-2 bg-black/20 hover:bg-[#D97706]/50'
        }`}
        aria-label={`Slide ${i + 1}`}
      />
    ));
  }, [items, showDots, angle, step]);

  return (
    <div
      ref={containerRef}
      className="relative w-full select-none touch-pan-y"
      style={{
        height,
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
        {items.map((it, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 rounded-2xl overflow-hidden border border-[#D97706]/30 shadow-2xl bg-zinc-900 group hover:border-[#D97706] transition-all"
            style={{
              width: `${cardWidth}px`,
              height: `${cardHeight}px`,
              marginLeft: `-${cardWidth / 2}px`,
              marginTop: `-${cardHeight / 2}px`,
              transform: `rotateY(${i * step}deg) translateZ(${radius}px)`,
            }}
          >
            <img
              src={it.src}
              alt={`${it.brand} ${it.name}`}
              width={cardWidth}
              height={cardHeight}
              loading={i === 0 ? 'eager' : 'lazy'}
              fetchPriority={i === 0 ? 'high' : 'auto'}
              decoding="async"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              draggable={false}
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-4 text-left">
              {it.brand && (
                <div className="text-[9px] uppercase tracking-widest text-[#D97706] font-black bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full inline-block mb-1 border border-[#D97706]/20">
                  {it.brand}
                </div>
              )}
              {it.name && (
                <div className="text-base font-black text-white leading-tight mt-0.5">{it.name}</div>
              )}
              {it.sub && (
                <div className="text-[11px] font-semibold text-zinc-300 mt-0.5 flex items-center gap-1">
                  <CheckCircle size={10} className="text-[#D97706]" />
                  {it.sub}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {showDots && (
        <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5 z-10">
          {dots}
        </div>
      )}
    </div>
  );
};

// ============================================================
// 3. HERO - ENHANCED WITH CLIENT REVIEWS & GLOW EFFECTS
// ============================================================
export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [currentReviewIdx, setCurrentReviewIdx] = useState(0);

  // Auto-rotate reviews every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReviewIdx((prev) => (prev + 1) % clientReviews.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const handleScrollToFramework = useCallback(() => {
    const el = document.getElementById('framework-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const carousel = useMemo(
    () => (
      <Carousel3D
        items={carouselItems}
        height="480px"
        radius={320}
        cardWidth={240}
        cardHeight={340}
      />
    ),
    []
  );

  const activeReview = clientReviews[currentReviewIdx];

  // Stagger animation variants
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[92vh] flex flex-col justify-center bg-white pt-20 pb-12 px-4 md:px-6 lg:px-10 overflow-hidden"
    >
      {/* Enhanced Animated Ambient Aurora & Glow Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-gradient-to-br from-[#D97706]/15 via-[#f59e0b]/10 to-transparent blur-[120px] rounded-full"
        />
        <div className="absolute -bottom-20 left-1/4 w-[450px] h-[450px] bg-[#D97706]/10 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">

        {/* LEFT SIDE - Content (Immediate Rendering for Sub-Second LCP) */}
        <div className="lg:col-span-5 text-left space-y-4">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border rounded-full bg-white/80 backdrop-blur-md border-amber-200/80 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#D97706] animate-ping" />
            <span className="text-[9px] font-black tracking-[0.16em] uppercase text-[#111111] flex items-center gap-1.5">
              <Sparkles size={11} className="text-[#D97706] fill-[#D97706]" />
               PRODUCT LAUNCH COMPANY
            </span>
          </div>

          {/* Headings - Direct rendering for instant LCP score */}
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl xl:text-[3.1rem] font-black leading-[1.08] tracking-tight uppercase text-[#111111]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D97706] via-[#f59e0b] to-[#b45309]">
                India's Leading Product Launch Company
              </span>
            </h1>
            <h2 className="text-base md:text-lg xl:text-[1.25rem] font-bold leading-snug tracking-tight text-[#D97706]">
              You Have The Product Idea • We Build The Brand
            </h2>
            <h2 className="text-base md:text-lg xl:text-[1.25rem] font-bold leading-snug tracking-tight text-[#D97706]">
              Formulation • Manufacturing • Branding • Market Launch
            </h2>
          </div>

          {/* H3 Brand Description */}
          <h3 className="text-sm md:text-[0.95rem] font-semibold max-w-xl leading-relaxed text-[#555555]">
            BanegaBrand helps entrepreneurs and businesses launch successful Perfume, Cosmetic, Skincare, Ayurveda, Beauty, Wellness and D2C brands in India — from product idea to market launch.
          </h3>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center pt-2">
            <Link
              to="/contact"
              className="text-center px-6 py-3.5 bg-[#111111] text-white hover:bg-[#D97706] rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-200 active:scale-95 shadow-lg flex items-center justify-center gap-2"
            >
              LAUNCH MY BRAND
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={handleScrollToFramework}
              className="px-6 py-3.5 border rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-200 active:scale-95 flex items-center justify-center gap-2 bg-white text-[#111111] border-zinc-300 hover:bg-zinc-50 shadow-sm"
            >
              OUR 6-STEP FRAMEWORK
            </button>
          </div>

        </div>

        {/* RIGHT SIDE - 3D Carousel with Luxury Glow */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="lg:col-span-7 relative flex flex-col items-center justify-center py-2"
        >
          {/* Subtle backplate glow for 3D carousel */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#D97706]/10 via-transparent to-transparent rounded-[48px] blur-2xl pointer-events-none" />
          
          <div className="relative z-10 w-full">
            {carousel}
          </div>

          {/* Drag hint */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="relative z-10 flex items-center gap-1.5 mt-1 text-[10px] font-black uppercase tracking-widest text-zinc-400 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-zinc-200/80 shadow-sm"
          >
            <Move3D className="w-3.5 h-3.5 text-[#D97706]" />
            Drag & Explore Launched Products
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
