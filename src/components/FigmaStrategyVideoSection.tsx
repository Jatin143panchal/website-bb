import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface BrandItem {
  id: string;
  name: string;
  image: string;
  link: string;
  alt: string;
  category: string;
}

const ROW_ONE_ITEMS: { left: BrandItem; right: BrandItem } = {
  left: {
    id: 'biographey',
    name: 'Biographey',
    image: '/assets/brand_grid/Biographey.png',
    link: '/story/biographey',
    alt: 'Biographey - Every Scent Tells a Story',
    category: 'LUXURY FRAGRANCE',
  },
  right: {
    id: 'rougx',
    name: 'ROUGX',
    image: '/assets/brand_grid/Rougx.png',
    link: '/story/rougx',
    alt: 'ROUGX - Bottled Desire, Uncapped',
    category: 'EAU DE PARFUM',
  },
};

const ROW_TWO_ITEMS: { left: BrandItem; right: BrandItem } = {
  left: {
    id: 'tuesday-london',
    name: 'Tuesday London',
    image: '/assets/brand_grid/Tuesday London.png',
    link: '/story/tuesday-london',
    alt: 'Tuesday London - A Scent Beyond Time',
    category: 'ARTISANAL PERFUMERY',
  },
  right: {
    id: 'blush-en-bloom',
    name: 'Blush en Bloom',
    image: '/assets/brand_grid/Blush en bloom.png',
    link: '/story/blush-en-bloom',
    alt: 'Blush en Bloom - Where Petals Meet Passion',
    category: 'COLOR COSMETICS & BEAUTY',
  },
};

export const FigmaStrategyVideoSection: React.FC = () => {
  return (
    <section className="w-full bg-white text-[#111111] pt-6 pb-6 overflow-hidden">
      {/* ── TOP SVG BANNER (IMAGINE WHAT'S NEXT) ── */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full bg-white py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden select-none"
      >
        <div className="w-full max-w-7xl flex items-center justify-center">
          <img
            src="/assets/1.svg"
            alt="IMAGINE WHAT'S NEXT"
            className="w-full h-auto max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-24 object-contain"
          />
        </div>
      </motion.div>

      {/* ── ASYMMETRIC 5-IMAGE BENTO SHOWCASE GRID (FULL WIDTH, NO OUTLINE, NO BORDER RADIUS) ── */}
      <div className="w-full px-2 sm:px-4 lg:px-6 py-2 sm:py-4 select-none">
        <div className="flex flex-col gap-3 sm:gap-4 w-full">
          
          {/* ── ROW 1: Wide Card (Biographey) + Narrow Card (ROUGX) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row gap-3 sm:gap-4 w-full items-stretch"
          >
            {/* Card 1: Biographey (Wide ~62.5%) */}
            <Link
              to={ROW_ONE_ITEMS.left.link}
              className="w-full md:w-[62.5%] relative rounded-none border-none outline-none overflow-hidden bg-[#f3ede4] shadow-md hover:shadow-2xl transition-all duration-300 group block h-[260px] sm:h-[340px] md:h-[400px] lg:h-[460px] xl:h-[500px]"
            >
              <img
                src={ROW_ONE_ITEMS.left.image}
                alt={ROW_ONE_ITEMS.left.alt}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = '/assets/brand_grid/Frame 60.png';
                }}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="eager"
              />
              
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />
              
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                <span
                  className="inline-block px-3.5 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase border-none rounded-none"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {ROW_ONE_ITEMS.left.category}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10">
                <span
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF5722] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-none shadow-lg group-hover:bg-white group-hover:text-[#111111] transition-all duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span>View Story</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Card 2: ROUGX (Narrow ~37.5%) */}
            <Link
              to={ROW_ONE_ITEMS.right.link}
              className="w-full md:w-[37.5%] relative rounded-none border-none outline-none overflow-hidden bg-[#3b0808] shadow-md hover:shadow-2xl transition-all duration-300 group block h-[260px] sm:h-[340px] md:h-[400px] lg:h-[460px] xl:h-[500px]"
            >
              <img
                src={ROW_ONE_ITEMS.right.image}
                alt={ROW_ONE_ITEMS.right.alt}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="eager"
              />
              
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                <span
                  className="inline-block px-3.5 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase border-none rounded-none"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {ROW_ONE_ITEMS.right.category}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10">
                <span
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF5722] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-none shadow-lg group-hover:bg-white group-hover:text-[#111111] transition-all duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span>View Story</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* ── ROW 2: Narrow Card (Tuesday London) + Wide Card (Blush en Bloom) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row gap-3 sm:gap-4 w-full items-stretch"
          >
            {/* Card 3: Tuesday London (Narrow ~37.5%) */}
            <Link
              to={ROW_TWO_ITEMS.left.link}
              className="w-full md:w-[37.5%] relative rounded-none border-none outline-none overflow-hidden bg-[#0c1c38] shadow-md hover:shadow-2xl transition-all duration-300 group block h-[260px] sm:h-[340px] md:h-[400px] lg:h-[460px] xl:h-[500px]"
            >
              <img
                src={ROW_TWO_ITEMS.left.image}
                alt={ROW_TWO_ITEMS.left.alt}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="eager"
              />
              
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                <span
                  className="inline-block px-3.5 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase border-none rounded-none"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {ROW_TWO_ITEMS.left.category}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10">
                <span
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF5722] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-none shadow-lg group-hover:bg-white group-hover:text-[#111111] transition-all duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span>View Story</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>

            {/* Card 4: Blush en Bloom (Wide ~62.5%) */}
            <Link
              to={ROW_TWO_ITEMS.right.link}
              className="w-full md:w-[62.5%] relative rounded-none border-none outline-none overflow-hidden bg-[#fae8f2] shadow-md hover:shadow-2xl transition-all duration-300 group block h-[260px] sm:h-[340px] md:h-[400px] lg:h-[460px] xl:h-[500px]"
            >
              <img
                src={ROW_TWO_ITEMS.right.image}
                alt={ROW_TWO_ITEMS.right.alt}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="eager"
              />
              
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                <span
                  className="inline-block px-3.5 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase border-none rounded-none"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {ROW_TWO_ITEMS.right.category}
                </span>
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10">
                <span
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF5722] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-none shadow-lg group-hover:bg-white group-hover:text-[#111111] transition-all duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span>View Story</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* ── ROW 3: Full-Width Card (OMNI Shilajit Gold) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full"
          >
            <Link
              to="/story/omni"
              className="w-full relative rounded-none border-none outline-none overflow-hidden bg-[#1f0e03] shadow-md hover:shadow-2xl transition-all duration-300 group block h-[240px] sm:h-[320px] md:h-[400px] lg:h-[460px] xl:h-[500px]"
            >
              <img
                src="/assets/brand_grid/OMNI.png"
                alt="OMNI Shilajit Gold - Pure Himalayan Strength Within"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="eager"
              />
              
              {/* Overlay elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none" />

              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                <span
                  className="inline-block px-3.5 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold tracking-widest uppercase border-none rounded-none"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  AYURVEDIC NUTRACEUTICALS
                </span>
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10">
                <span
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#FF5722] text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-none shadow-lg group-hover:bg-white group-hover:text-[#111111] transition-all duration-300"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span>View Story</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>

      {/* ── BOTTOM SVG BANNER (IMAGINE WHAT'S NEXT) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="w-full bg-white py-4 sm:py-6 md:py-8 px-4 sm:px-6 lg:px-8 flex items-center justify-center overflow-hidden select-none"
      >
        <div className="w-full max-w-7xl flex items-center justify-center">
          <img
            src="/assets/2.svg"
            alt="IMAGINE WHAT'S NEXT"
            className="w-full h-auto max-h-12 sm:max-h-16 md:max-h-20 lg:max-h-24 object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default FigmaStrategyVideoSection;


