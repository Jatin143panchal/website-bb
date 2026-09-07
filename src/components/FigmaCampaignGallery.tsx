import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ShowcaseSite {
  id: string;
  tag: string;
  title: string;
  image: string;
  link: string;
}

const showcaseSites: ShowcaseSite[] = [
  {
    id: '1',
    tag: 'SIGNATURE D2C STOREFRONT',
    title: 'Crafted with Elegance – Perfume Flagship',
    image: '/assets/klust_landing_page.webp',
    link: '/services',
  },
  {
    id: '2',
    tag: 'D2C OMNICHANNEL COMMERCE',
    title: 'Biographey. Luxury Scents & Retail Storefront',
    image: '/assets/showcase/1.webp',
    link: '/services',
  },
  {
    id: '3',
    tag: 'HIGH-CONVERTING AMAZON STORE',
    title: 'Amazon & Quick Commerce Brand Storefront',
    image: '/assets/showcase/ocean-current.webp',
    link: '/services',
  },
];

const PILL_FILTERS = [
  'LOREM IPSUM',
  'LOREM IPSUM',
  'LOREM IPSUM',
];

export const FigmaCampaignGallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollManual = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        
        {/* Giant Orange Header matching Figma Screenshot */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-2">
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal uppercase tracking-tight text-[#FF5722] leading-[1.05]"
              style={{
                fontFamily: "'Playfair Display', 'Bodoni MT', 'Didot', 'Cormorant Garamond', Georgia, serif",
                letterSpacing: '-0.015em',
              }}
            >
              LOREM IPSUM IS SIMPLY DUMMY TEXT
            </h2>
            <p 
              className="text-sm sm:text-base text-zinc-500 font-normal pt-1"
              style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
            >
              High-converting custom storefronts, marketplace listing designs, and luxury packaging renders.
            </p>
          </div>

          {/* Carousel Manual Navigation Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scrollManual('left')}
              className="p-2.5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-800 transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Scroll Left"
            >
              <ArrowLeft size={16} />
            </button>

            <button
              onClick={() => scrollManual('right')}
              className="p-2.5 rounded-full border border-zinc-200 bg-white hover:bg-zinc-100 text-zinc-800 transition-all shadow-xs active:scale-95 cursor-pointer"
              aria-label="Scroll Right"
            >
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* 3-Column Visual Showcase Carousel Matching Figma */}
      <div 
        ref={scrollRef}
        className="relative w-full overflow-x-auto no-scrollbar py-3"
        style={{ scrollBehavior: 'smooth' }}
      >
        {/* Edge Gradient Shadows */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20" />

        <div className="flex gap-6 sm:gap-8 animate-marquee-left pause-hover px-4 sm:px-8">
          {[...showcaseSites, ...showcaseSites, ...showcaseSites].map((site, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[360px] sm:w-[460px] lg:w-[520px] flex flex-col group cursor-pointer select-none space-y-2.5"
            >
              {/* Orange Tag on Top matching Figma */}
              <div 
                className="text-[11px] font-bold uppercase tracking-wider text-[#FF5722]"
                style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
              >
                {site.tag}
              </div>

              {/* Screenshot Card with Clean Modern Sharp Edges */}
              <div className="relative rounded-none overflow-hidden bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:border-orange-300 transition-all duration-300 p-2 flex flex-col justify-between">
                <div className="relative aspect-[16/10] rounded-none overflow-hidden bg-zinc-50 border border-zinc-100">
                  <img
                    src={site.image}
                    alt={site.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103 rounded-none"
                  />
                </div>

                <div className="pt-3 pb-1 px-2 flex items-center justify-between">
                  <span 
                    className="text-xs sm:text-sm font-semibold text-zinc-900 truncate"
                    style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
                  >
                    {site.title}
                  </span>
                  <Link
                    to="/contact"
                    className="w-7 h-7 rounded-full bg-orange-50 border border-orange-200 text-[#FF5722] hover:bg-[#FF5722] hover:text-white flex items-center justify-center flex-shrink-0 ml-2 shadow-xs transition-colors"
                    aria-label="View Project"
                  >
                    <ArrowUpRight size={13} className="stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Pill Action Tags Below Carousel Matching Figma Prototype */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 sm:mt-14 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
        {PILL_FILTERS.map((text, idx) => (
          <button
            key={idx}
            className="px-6 sm:px-8 py-2.5 rounded-full border border-zinc-300 bg-white hover:border-black hover:bg-zinc-50 text-zinc-800 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-2xs cursor-pointer"
            style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
          >
            {text}
          </button>
        ))}
      </div>
    </section>
  );
};

export default FigmaCampaignGallery;
