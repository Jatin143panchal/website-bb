import React, { useRef } from 'react';
import { motion } from 'motion/react';

interface TimelineItem {
  year: string;
  category: string;
  title: string;
  image: string;
  aspect: string;
}

const TIMELINE_DATA: TimelineItem[] = [
  {
    year: '2026',
    category: 'Future Frontier',
    title: "What's your next frontier? hello@banegabrand.com",
    image: '/assets/Banner 1.png',
    aspect: 'w-[280px] sm:w-[340px] aspect-[4/5]'
  },
  {
    year: '2025',
    category: 'Quick Commerce Scale',
    title: 'Blinkit & Zepto 10-Minute Dark Store Launch',
    image: '/assets/Banner 2.png',
    aspect: 'w-[320px] sm:w-[380px] aspect-[16/10]'
  },
  {
    year: '2024',
    category: 'Luxury Fragrance',
    title: 'European Glass Flacons & Magnetic Weighted Caps',
    image: '/assets/Banner 3.png',
    aspect: 'w-[260px] sm:w-[300px] aspect-[3/4]'
  },
  {
    year: '2023',
    category: 'Clinical Cosmeceuticals',
    title: 'AYUSH & US-FDA Audited Botanical Formulations',
    image: '/assets/Banner 4.png',
    aspect: 'w-[300px] sm:w-[360px] aspect-[16/9]'
  },
  {
    year: '2022',
    category: 'Marketplace Domination',
    title: 'Amazon Launchpad & Nykaa Luxury Priority Onboarding',
    image: '/assets/klust_landing_page.webp',
    aspect: 'w-[340px] sm:w-[420px] aspect-[16/10]'
  },
  {
    year: '2020',
    category: 'The Inception',
    title: '45-Day Turnkey Molecule-to-Market Machinery',
    image: '/assets/Banner 1.png',
    aspect: 'w-[260px] sm:w-[320px] aspect-[4/5]'
  },
];

export const AboutTimelineGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 overflow-hidden select-none border-b border-zinc-100">
      
      {/* ── TOP HORIZONTAL CONTINUOUS TIMELINE AXIS ───────────────────────── */}
      <div className="w-full relative px-4 sm:px-8 mb-8 sm:mb-12">
        <div className="relative w-full border-t border-zinc-300 flex justify-between items-center pt-2.5">
          {TIMELINE_DATA.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-xs sm:text-sm md:text-base font-mono font-bold text-zinc-500 hover:text-black transition-colors">
                {item.year}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* ── HORIZONTAL ASYMMETRIC IMAGE STREAM GALLERY ─────────────────────── */}
      <div 
        ref={containerRef}
        className="w-full overflow-x-auto no-scrollbar scroll-smooth flex items-end gap-6 sm:gap-8 md:gap-10 px-6 sm:px-12 md:px-16 pb-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {TIMELINE_DATA.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className={`flex-shrink-0 flex flex-col justify-end group cursor-pointer ${item.aspect}`}
          >
            {/* Category Tag above card */}
            <div className="mb-2 text-left">
              <span className="text-[11px] font-bold text-zinc-500 uppercase tracking-wide block truncate group-hover:text-black transition-colors">
                {item.category}
              </span>
            </div>

            {/* Image Card */}
            <div className="relative w-full h-full rounded-sm sm:rounded-md overflow-hidden bg-zinc-100 border border-zinc-200/80 shadow-xs group-hover:shadow-xl transition-all duration-500">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-white text-xs font-semibold leading-tight drop-shadow-md">
                  {item.title}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
};

export default AboutTimelineGallery;
