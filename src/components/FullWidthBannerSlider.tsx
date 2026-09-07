import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, Sparkles, Star, TrendingUp, CheckCircle2, ArrowUpRight, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BannerSlide {
  id: string;
  brand: string;
  badge: string;
  badgeIcon: 'sparkles' | 'star' | 'trending';
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  bannerImage: string;
  link: string;
  themeColor: string;
  accentBg: string;
}

const bannerSlides: BannerSlide[] = [
  {
    id: 'biographey',
    brand: 'BIOGRAPHEY',
    badge: 'Signature Luxury Fragrance',
    badgeIcon: 'sparkles',
    title: 'Biographey – Signature Perfume Architecture',
    subtitle: 'High-Concentration Fine Fragrance Launch',
    description: 'Every fragrance tells an unforgettable story. Engineered with custom French rose accords, European heavy-base flacons, and high-converting Shopify store experiences scaling nationwide.',
    highlights: ['Custom European heavy-base glass bottle', '45 Days Formula-to-Market Execution', 'IFRA Certified Formulation Compound'],
    bannerImage: '/assets/Banner 1.png',
    link: '/contact',
    themeColor: '#FF5722',
    accentBg: 'from-orange-950/90 via-black/70 to-black/90',
  },
  {
    id: 'venotine',
    brand: 'VENOTINE',
    badge: 'Prestige Royal Oud & Amber',
    badgeIcon: 'star',
    title: 'Venotine Paris & Dubai – Royal Collection',
    subtitle: 'Artisan Crystal Flacons & Rare Blends',
    description: 'A scent crafted for royalty. Rare hand-harvested Cambodian Oud blended with high-altitude French Rose, sealed in hand-polished crystal flacons with custom weighted crown caps.',
    highlights: ['Hand-polished luxury crystal crown cap', '100% IFRA Certified Essential Oils', 'High Re-order Rate on D2C & Retail'],
    bannerImage: '/assets/Banner 2.png',
    link: '/contact',
    themeColor: '#D97706',
    accentBg: 'from-amber-950/90 via-black/70 to-black/90',
  },
  {
    id: 'rougx',
    brand: 'ROUGX',
    badge: 'Dominating D2C Fragrance',
    badgeIcon: 'trending',
    title: 'ROUGX Volt & Velvet – Eau De Parfum Scale',
    subtitle: 'Top Ranking Marketplace Best Seller',
    description: 'Engineered with French fragrance concentrates, custom crimp atomizers, and high-converting Shopify store architecture that delivered 4.2x ROAS on Meta ads from Day 1.',
    highlights: ['Custom laser-etched metal cap & crimp pump', '#1 Best Seller in Category on Amazon & Nykaa', 'Omnichannel Fulfillment Network'],
    bannerImage: '/assets/Banner 3.png',
    link: '/contact',
    themeColor: '#EF4444',
    accentBg: 'from-red-950/90 via-black/70 to-black/90',
  },
  {
    id: 'blush-in-bloom',
    brand: 'BLUSH EN BLOOM',
    badge: 'Color Cosmetics & Beauty',
    badgeIcon: 'sparkles',
    title: 'Blush en Bloom – Where Florals Meet Desire',
    subtitle: 'Instant Quick Commerce Distribution',
    description: 'Custom luxury ribbed glass flacon with gloss black closure, soft-touch mono-cartons, FDA/AYUSH regulatory approvals, and immediate onboarding on Blinkit & Zepto quick commerce.',
    highlights: ['Soft-touch pink gradient carton packaging', '4,000+ Units Sold in Week 1 on Quick Commerce', 'Complete Regulatory Clearances'],
    bannerImage: '/assets/Banner 4.png',
    link: '/contact',
    themeColor: '#EC4899',
    accentBg: 'from-pink-950/90 via-black/70 to-black/90',
  },
];

export const FullWidthBannerSlider: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState<number>(0);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);
  const slideCount = bannerSlides.length;

  const currentSlide = bannerSlides[currentIdx];

  // Auto-play timer
  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % slideCount);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlay, slideCount]);

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % slideCount);
    setIsAutoPlay(false);
  };

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + slideCount) % slideCount);
    setIsAutoPlay(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section 
      className="w-full bg-[#0E0E11] text-white py-16 sm:py-24 border-b border-zinc-800 overflow-hidden relative"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="w-full">
        
        {/* Header and Controls Row */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-[#FF5722] text-xs font-black uppercase tracking-wider">
              <Sparkles size={13} />
              Featured Brand Launch Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
              MARKET-READY LAUNCH SHOWCASES
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 font-medium max-w-2xl">
              Swipe or explore full-width brand architecture, luxury packaging flacons, and omnichannel scale.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold text-zinc-400 mr-2">
              0{currentIdx + 1} / 0{slideCount}
            </span>

            <button
              onClick={handlePrev}
              className="w-11 h-11 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Previous Slide"
            >
              <ArrowLeft size={18} />
            </button>

            <button
              onClick={handleNext}
              className="w-11 h-11 rounded-full bg-[#FF5722] hover:bg-[#e04a1b] text-white flex items-center justify-center transition-all shadow-md active:scale-95 cursor-pointer"
              aria-label="Next Slide"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Full-Width Slider Stage */}
        <div 
          className="relative w-full overflow-hidden select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full min-h-[540px] md:min-h-[640px] lg:min-h-[700px] flex items-center justify-center"
            >
              {/* Full Width High-Resolution Banner Image */}
              <img
                src={currentSlide.bannerImage}
                alt={currentSlide.title}
                className="absolute inset-0 w-full h-full object-cover object-center filter brightness-90"
              />

              {/* Dynamic Gradient Mask Overlays */}
              <div className={`absolute inset-0 bg-gradient-to-r ${currentSlide.accentBg} opacity-85`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />

              {/* Content Overlay Grid */}
              <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Column: Brand Information & USPs */}
                <div className="lg:col-span-8 space-y-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-black uppercase tracking-wider">
                    {currentSlide.badgeIcon === 'star' && <Star size={13} className="fill-amber-400 text-amber-400" />}
                    {currentSlide.badgeIcon === 'trending' && <TrendingUp size={13} className="text-[#FF5722]" />}
                    {currentSlide.badgeIcon === 'sparkles' && <Sparkles size={13} className="text-[#FF5722]" />}
                    <span>{currentSlide.badge}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08] drop-shadow-lg">
                    {currentSlide.title}
                  </h3>

                  <p className="text-sm sm:text-base md:text-lg text-zinc-200 font-normal leading-relaxed max-w-2xl drop-shadow-md">
                    {currentSlide.description}
                  </p>

                  {/* Highlights Badges */}
                  <div className="flex flex-wrap gap-2.5 pt-2">
                    {currentSlide.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs sm:text-sm font-semibold bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl text-white border border-white/15 shadow-md"
                      >
                        <CheckCircle2 size={14} className="text-[#FF5722]" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF5722] hover:bg-[#e04a1b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-xl hover:shadow-2xl active:scale-95 cursor-pointer"
                    >
                      Launch Your Brand <ArrowUpRight size={16} />
                    </Link>

                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all"
                    >
                      Explore All Categories
                    </Link>
                  </div>
                </div>

                {/* Right Column: Slide Brand Stamp */}
                <div className="hidden lg:flex lg:col-span-4 justify-end">
                  <div className="bg-black/50 backdrop-blur-xl border border-white/20 p-6 rounded-3xl space-y-4 max-w-xs text-right shadow-2xl">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#FF5722] font-black">
                      Verified Client Partner
                    </div>
                    <div className="text-2xl font-black uppercase text-white tracking-wider">
                      {currentSlide.brand}
                    </div>
                    <p className="text-xs text-zinc-300 font-medium leading-relaxed">
                      Custom Formulation • Luxury Bottling • 45-90 Days Market Onboarding
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar & Interactive Slide Indicators */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {bannerSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIdx(idx);
                  setIsAutoPlay(false);
                }}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIdx === idx ? 'w-10 bg-[#FF5722]' : 'w-2.5 bg-zinc-700 hover:bg-zinc-500'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="text-xs font-semibold text-zinc-400">
            Auto-advancing every 6s • Click or swipe to navigate
          </div>
        </div>

      </div>
    </section>
  );
};
