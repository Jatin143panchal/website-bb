import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface BrandItem {
  id: string;
  name: string;
  image: string;
  link: string;
  alt: string;
}

const ROW_ONE_ITEMS: { left: BrandItem; right: BrandItem } = {
  left: {
    id: 'biographey',
    name: 'Biographey',
    image: '/assets/brand_grid/Biographey.png',
    link: '/industry/perfume',
    alt: 'Biographey - Every Scent Tells a Story',
  },
  right: {
    id: 'rougx',
    name: 'ROUGX',
    image: '/assets/brand_grid/Rougx.png',
    link: '/industry/perfume',
    alt: 'ROUGX - Bottled Desire, Uncapped',
  },
};

const ROW_TWO_ITEMS: { left: BrandItem; right: BrandItem } = {
  left: {
    id: 'tuesday-london',
    name: 'Tuesday London',
    image: '/assets/brand_grid/Tuesday London.png',
    link: '/industry/perfume',
    alt: 'Tuesday London - A Scent Beyond Time',
  },
  right: {
    id: 'blush-en-bloom',
    name: 'Blush en Bloom',
    image: '/assets/brand_grid/Blush en bloom.png',
    link: '/industry/perfume',
    alt: 'Blush en Bloom - Where Petals Meet Passion',
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

      {/* ── ASYMMETRIC 5-IMAGE BENTO SHOWCASE GRID ── */}
      <div className="w-full max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-10 py-3 sm:py-5 select-none">
        <div className="flex flex-col gap-4 sm:gap-6">
          
          {/* ── ROW 1: Wide Card (Biographey) + Narrow Card (ROUGX) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full items-stretch"
          >
            {/* Card 1: Biographey (Wide ~62.5%) */}
            <Link
              to={ROW_ONE_ITEMS.left.link}
              className="w-full md:w-[62.5%] relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#f3ede4] border border-zinc-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group block h-[240px] sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[480px]"
            >
              <img
                src={ROW_ONE_ITEMS.left.image}
                alt={ROW_ONE_ITEMS.left.alt}
                onError={(e) => {
                  // Fallback to Frame 60.png if Biographey.png isn't available
                  (e.target as HTMLImageElement).src = '/assets/brand_grid/Frame 60.png';
                }}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="eager"
              />
            </Link>

            {/* Card 2: ROUGX (Narrow ~37.5%) */}
            <Link
              to={ROW_ONE_ITEMS.right.link}
              className="w-full md:w-[37.5%] relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#3b0808] border border-zinc-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group block h-[240px] sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[480px]"
            >
              <img
                src={ROW_ONE_ITEMS.right.image}
                alt={ROW_ONE_ITEMS.right.alt}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="eager"
              />
            </Link>
          </motion.div>

          {/* ── ROW 2: Narrow Card (Tuesday London) + Wide Card (Blush en Bloom) ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col md:flex-row gap-4 sm:gap-6 w-full items-stretch"
          >
            {/* Card 3: Tuesday London (Narrow ~37.5%) */}
            <Link
              to={ROW_TWO_ITEMS.left.link}
              className="w-full md:w-[37.5%] relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0c1c38] border border-zinc-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group block h-[240px] sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[480px]"
            >
              <img
                src={ROW_TWO_ITEMS.left.image}
                alt={ROW_TWO_ITEMS.left.alt}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="eager"
              />
            </Link>

            {/* Card 4: Blush en Bloom (Wide ~62.5%) */}
            <Link
              to={ROW_TWO_ITEMS.right.link}
              className="w-full md:w-[62.5%] relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#fae8f2] border border-zinc-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group block h-[240px] sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[480px]"
            >
              <img
                src={ROW_TWO_ITEMS.right.image}
                alt={ROW_TWO_ITEMS.right.alt}
                className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="eager"
              />
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
              to="/industry/ayurveda"
              className="w-full relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#1f0e03] border border-zinc-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group block h-[220px] sm:h-[300px] md:h-[380px] lg:h-[440px] xl:h-[480px]"
            >
              <img
                src="/assets/brand_grid/OMNI.png"
                alt="OMNI Shilajit Gold - Pure Himalayan Strength Within"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="eager"
              />
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


