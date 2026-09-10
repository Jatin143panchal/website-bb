import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import perfumeBgImg from '../assets/showcase/perfume_showcase_bg.png';
import ayurvedaBgImg from '../assets/showcase/ayurveda_showcase_bg.png';
import cosmeticsBgImg from '../assets/showcase/cosmetics_showcase_bg.png';
import skincareBgImg from '../assets/showcase/skincare_showcase_bg.png';

interface SolutionItem {
  id: string;
  topTitle: string;
  bottomTitle?: string;
  description: string;
  bgColor: string;
  bgImage?: string;
  textColor: string;
  linkUrl: string;
}

const BASE_SOLUTIONS: SolutionItem[] = [
  {
    id: 'perfume',
    topTitle: 'Perfume',
    bottomTitle: '',
    description: 'Turnkey luxury fragrance formulation, IFRA-compliant master blending, custom glass bottle tooling, automated crimping & retail box packaging for D2C & Amazon.',
    bgColor: '#9D4EDD', // Light vibrant lavender purple
    bgImage: perfumeBgImg,
    textColor: '#FFFFFF',
    linkUrl: '/industry/perfume',
  },
  {
    id: 'ayurveda',
    topTitle: 'Ayurveda',
    bottomTitle: '',
    description: 'Authentic Ministry of AYUSH-certified classical & proprietary herbal formulations, standardized botanical extracts, GMP batch manufacturing & clinical stability.',
    bgColor: '#34D399', // Fresh light mint emerald
    bgImage: ayurvedaBgImg,
    textColor: '#FFFFFF',
    linkUrl: '/industry/ayurveda',
  },
  {
    id: 'cosmetics',
    topTitle: 'Cosmetics',
    bottomTitle: '',
    description: 'FDA-approved color cosmetics, high-pigment lipsticks, liquid foundations, blushes, compacts & eye makeup with custom luxury packaging & regulatory compliance.',
    bgColor: '#E495C5', // Soft pastel pinkish lilac
    bgImage: cosmeticsBgImg,
    textColor: '#FFFFFF',
    linkUrl: '/industry/cosmetics',
  },
  {
    id: 'skincare',
    topTitle: 'Skincare',
    bottomTitle: '',
    description: 'Dermatologist-tested derma-cosmetics, active-ingredient face serums, barrier repair creams, sunscreens & gentle cleansers formulated for Indian skin tones.',
    bgColor: '#00D2FF', // Fresh electric sky cyan
    bgImage: skincareBgImg,
    textColor: '#FFFFFF',
    linkUrl: '/industry/skincare',
  },
];

// Create 3 identical sets for infinite continuous sliding carousel
const EXTENDED_SOLUTIONS: SolutionItem[] = [
  ...BASE_SOLUTIONS,
  ...BASE_SOLUTIONS,
  ...BASE_SOLUTIONS,
];

export const FigmaCategoryShowcase: React.FC = () => {
  // Start in middle set (index 4 to 7) -> default to Perfume Solution (index 4)
  const [virtualIndex, setVirtualIndex] = useState<number>(4);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [isHoveringActiveCard, setIsHoveringActiveCard] = useState<boolean>(false);
  const [isAutoPlayPaused, setIsAutoPlayPaused] = useState<boolean>(false);
  const navigate = useNavigate();

  // ── GENTLE LEISURELY AUTO-ADVANCE (6 SECONDS PER SLIDE) ─────────────────────
  useEffect(() => {
    if (isAutoPlayPaused) return;

    const autoPlayTimer = setInterval(() => {
      setIsTransitioning(true);
      setVirtualIndex((prev) => prev + 1);
    }, 6000);

    return () => clearInterval(autoPlayTimer);
  }, [isAutoPlayPaused]);

  // ── SIGNATURE SCHBANG MOUSE-FOLLOWER CURSOR LOGIC ────────────────────────────
  const followerRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const currentPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const lerpLoop = () => {
      currentPos.current.x += (mousePos.current.x - currentPos.current.x) * 0.16;
      currentPos.current.y += (mousePos.current.y - currentPos.current.y) * 0.16;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${currentPos.current.x}px, ${currentPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      animFrameId.current = requestAnimationFrame(lerpLoop);
    };

    window.addEventListener('mousemove', handleGlobalMouseMove, { passive: true });
    animFrameId.current = requestAnimationFrame(lerpLoop);

    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  // ── HOVER INTENT & TIMEOUT MANAGEMENT ────────────────────────────────────────
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Slide navigation
  const handleSlideTo = (targetIdx: number) => {
    setIsTransitioning(true);
    setVirtualIndex(targetIdx);
  };

  const handleCardMouseEnter = (idx: number, isAdjacent: boolean, isActive: boolean) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    if (isActive) {
      setIsHoveringActiveCard(true);
      return;
    }

    if (isAdjacent) {
      // 450ms deliberate hover intent debounce so quick cursor sweeps don't cause sudden sliding
      hoverTimeoutRef.current = setTimeout(() => {
        handleSlideTo(idx);
      }, 450);
    }
  };

  const handleCardMouseLeave = (isActive: boolean) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (isActive) {
      setIsHoveringActiveCard(false);
    }
  };

  // Seamless wrap-around after transition
  const handleTransitionEnd = () => {
    if (virtualIndex >= 8) {
      setIsTransitioning(false);
      setVirtualIndex((virtualIndex % 4) + 4);
    } else if (virtualIndex < 4) {
      setIsTransitioning(false);
      setVirtualIndex((virtualIndex % 4) + 4);
    }
  };

  const activeItem = EXTENDED_SOLUTIONS[virtualIndex];

  return (
    <section
      id="solutions-showcase"
      onMouseEnter={() => setIsAutoPlayPaused(true)}
      onMouseLeave={() => setIsAutoPlayPaused(false)}
      onTouchStart={() => setIsAutoPlayPaused(true)}
      onTouchEnd={() => setIsAutoPlayPaused(false)}
      className="relative w-full bg-white text-[#111111] select-none overflow-hidden border-none outline-none"
      style={{ fontFamily: "'Sora', 'Outfit', 'Montserrat', system-ui, sans-serif" }}
    >
      {/* ── GOOGLE FONT SORA & COMPACT TICKER CSS ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&display=swap');

        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker-marquee {
          display: flex;
          width: max-content;
          animation: ticker-scroll 7s linear infinite;
        }
      `}</style>

      {/* ── COMPACT SCHBANG FLOATING MOUSE-FOLLOWER BADGE ── */}
      <div
        ref={followerRef}
        className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform transition-opacity duration-300"
        style={{
          opacity: isHoveringActiveCard ? 1 : 0,
        }}
      >
        <div className="w-[124px] h-[34px] px-3 bg-black rounded-full shadow-2xl flex items-center justify-center overflow-hidden border border-white/20">
          <div className="animate-ticker-marquee text-[11px] font-bold text-white tracking-wider gap-2.5">
            <span>View More</span>
            <span className="opacity-50">•</span>
            <span>View More</span>
            <span className="opacity-50">•</span>
            <span>View More</span>
            <span className="opacity-50">•</span>
          </div>
        </div>
      </div>

      {/* ── DESKTOP: INFINITE HORIZONTAL SLIDING CAROUSEL STAGE ── */}
      <div className="hidden md:block w-full h-[600px] lg:h-[650px] xl:h-[680px] relative overflow-hidden bg-white">
        <div
          onTransitionEnd={handleTransitionEnd}
          className="h-full flex items-stretch will-change-transform"
          style={{
            transform: `translate3d(${(1 - virtualIndex) * 33}vw, 0, 0)`,
            transition: isTransitioning
              ? 'transform 2.4s cubic-bezier(0.25, 1, 0.5, 1)'
              : 'none',
          }}
        >
          {EXTENDED_SOLUTIONS.map((item, idx) => {
            const isActive = idx === virtualIndex;
            const isPrev = idx === virtualIndex - 1;
            const isNext = idx === virtualIndex + 1;

            return (
              <div
                key={`slide-${item.id}-${idx}`}
                onClick={() => {
                  if (isActive) {
                    navigate(item.linkUrl);
                  } else {
                    handleSlideTo(idx);
                  }
                }}
                onMouseEnter={() => handleCardMouseEnter(idx, isPrev || isNext, isActive)}
                onMouseLeave={() => handleCardMouseLeave(isActive)}
                style={{
                  width: isActive ? '34vw' : '33vw',
                  backgroundColor: isActive ? item.bgColor : '#FFFFFF',
                  transition: isTransitioning
                    ? 'width 2.4s cubic-bezier(0.25, 1, 0.5, 1), background-color 1.6s ease'
                    : 'none',
                }}
                className={`h-full shrink-0 relative overflow-hidden select-none cursor-pointer flex flex-col justify-between items-center text-center ${isActive
                    ? 'z-20 shadow-2xl'
                    : 'z-10 bg-white hover:bg-zinc-50/70 border-r border-zinc-200/80 group'
                  }`}
              >
                {/* ── GHOST INACTIVE CARD VIEW (LEFT OR RIGHT) ── */}
                <div
                  className={`w-full h-full flex flex-col items-center justify-center p-6 text-center absolute inset-0 transition-opacity duration-500 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
                >
                  <div className="flex flex-col items-center justify-center space-y-1 opacity-35 group-hover:opacity-80 transition-all duration-400 transform group-hover:scale-105 px-2">
                    <span
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#9E9E9E] leading-tight text-center whitespace-nowrap"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {item.topTitle}
                    </span>
                    {item.bottomTitle ? (
                      <span
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-extrabold tracking-tight text-[#9E9E9E] leading-tight text-center whitespace-nowrap"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {item.bottomTitle}
                      </span>
                    ) : null}
                  </div>
                </div>

                {/* ── BACKGROUND IMAGE (FOR RICH VISUAL CARDS) ── */}
                {item.bgImage && (
                  <div
                    className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'
                      }`}
                  >
                    <img
                      src={item.bgImage}
                      alt={item.topTitle}
                      className="w-full h-full object-cover select-none brightness-105 saturate-[0.92]"
                    />
                    {/* Soft Category Tint & Gradient Vignette Overlay for Fresh Light Theme */}
                    <div
                      className="absolute inset-0 mix-blend-overlay opacity-30"
                      style={{ backgroundColor: item.bgColor }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/30" />
                  </div>
                )}

                {/* ── ACTIVE CENTER EXPANDED CARD VIEW ── */}
                <div
                  className={`relative z-10 w-full h-full p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between items-center text-center transition-all duration-1000 ease-out ${isActive
                      ? 'opacity-100 translate-y-0 delay-300 pointer-events-auto'
                      : 'opacity-0 translate-y-4 pointer-events-none'
                    }`}
                >
                  {/* Subtle top spacer */}
                  <div className="w-full h-2" />

                  {/* Center Content: Stacked Bold Titles & Description */}
                  <div className="my-auto flex flex-col items-center justify-center space-y-4 max-w-xs sm:max-w-sm">
                    {/* Bold Title */}
                    <div className="space-y-0.5">
                      <h3
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-extrabold tracking-tight text-white leading-[0.94] drop-shadow-md"
                        style={{ fontFamily: "'Sora', sans-serif" }}
                      >
                        {item.topTitle}
                      </h3>
                      {item.bottomTitle ? (
                        <h3
                          className="text-3xl sm:text-4xl md:text-5xl lg:text-[58px] font-extrabold tracking-tight text-white leading-[0.94] drop-shadow-md"
                          style={{ fontFamily: "'Sora', sans-serif" }}
                        >
                          {item.bottomTitle}
                        </h3>
                      ) : null}
                    </div>

                    {/* Clean White Paragraph Description */}
                    <p
                      className="text-xs sm:text-[13px] md:text-sm font-medium text-white leading-relaxed max-w-[280px] drop-shadow-md opacity-95"
                      style={{ fontFamily: "'Sora', sans-serif" }}
                    >
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom: Signature Schbang White Circular Arrow Button */}
                  <div className="pt-4 flex items-center justify-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(item.linkUrl);
                      }}
                      aria-label={`Explore ${item.topTitle} ${item.bottomTitle || ''}`}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer group"
                    >
                      <ArrowRight size={24} strokeWidth={2.4} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* ── MOBILE: RESPONSIVE CATEGORY SWITCHER & ACTIVE CARD ── */}
      <div className="md:hidden w-full flex flex-col bg-white">
        {/* Horizontal Category Switcher Tabs */}
        <div className="flex items-center gap-2 p-3 overflow-x-auto no-scrollbar border-b border-zinc-100 bg-zinc-50/50">
          {BASE_SOLUTIONS.map((item, idx) => {
            const isCurrent = (virtualIndex % 4) === idx;

            return (
              <button
                key={`tab-${item.id}`}
                onClick={() => handleSlideTo(4 + idx)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${isCurrent
                    ? 'bg-black text-white shadow-md'
                    : 'bg-white text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
                  }`}
              >
                {item.topTitle}
              </button>
            );
          })}
        </div>

        {/* Active Card Body for Mobile */}
        <div
          onClick={() => navigate(activeItem.linkUrl)}
          className="relative w-full h-[540px] p-8 flex flex-col justify-between items-center text-center cursor-pointer transition-colors duration-500 select-none shadow-lg overflow-hidden"
          style={{
            backgroundColor: activeItem.bgColor,
            color: activeItem.textColor,
          }}
        >
          {activeItem.bgImage && (
            <div className="absolute inset-0 z-0 pointer-events-none">
              <img
                src={activeItem.bgImage}
                alt={activeItem.topTitle}
                className="w-full h-full object-cover select-none brightness-105 saturate-[0.92]"
              />
              <div
                className="absolute inset-0 mix-blend-overlay opacity-30"
                style={{ backgroundColor: activeItem.bgColor }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-black/30" />
            </div>
          )}

          <div className="relative z-10 w-full h-2" />

          <div className="relative z-10 my-auto flex flex-col items-center justify-center space-y-5 max-w-xs">
            <div className="space-y-0.5">
              <h3
                className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase leading-[0.94] text-white drop-shadow-md"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {activeItem.topTitle}
              </h3>
              {activeItem.bottomTitle ? (
                <h3
                  className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase leading-[0.94] text-white drop-shadow-md"
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {activeItem.bottomTitle}
                </h3>
              ) : null}
            </div>

            <p
              className="text-xs sm:text-sm font-medium leading-relaxed opacity-95 text-white drop-shadow-md"
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              {activeItem.description}
            </p>
          </div>

          <div className="relative z-10 pt-4 flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(activeItem.linkUrl);
              }}
              className="w-13 h-13 rounded-full bg-white text-black flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <ArrowRight size={22} strokeWidth={2.4} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FigmaCategoryShowcase;
