import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Shield, Building, Sparkles, Briefcase, X, ExternalLink, Tag, ArrowUpRight } from 'lucide-react';

// ── Brand data with story + website ──────────────────────────────────────────
const brandLogos = [
  {
    name: 'BELLMONTAE',
    type: 'Skin Care',
    logo: '/assets/logos/media_1787212287972.webp',
    tagline: 'Clinical luxury skincare built for India\'s premium consumer.',
    story: 'Bellmontae was born from a single vision — to bring European clinical skincare standards to the Indian market at accessible luxury price points. From custom formulation to Nykaa listing, Banega Brand launched Bellmontae in 42 days, achieving ₹12L revenue in Month 1.',
    website: 'https://bellmontae.com',
    founded: '2024',
    category: 'Skin Care',
    revenue: '₹12L in Month 1',
    markets: ['Nykaa', 'Amazon', 'D2C'],
  },
  {
    name: 'APETOME',
    type: 'Skin Care',
    logo: '/assets/logos/media_1787212287992.webp',
    tagline: 'Pure botanical formulations for the modern conscious consumer.',
    story: 'Apetome set out to redefine botanical skincare in India with clean, transparent ingredient sourcing and minimalist packaging. With Banega Brand\'s manufacturing network and brand identity system, Apetome sold 4,000+ units within 60 days of launch.',
    website: 'https://apetome.com',
    founded: '2024',
    category: 'Skin Care',
    revenue: '4,000+ units in 60 Days',
    markets: ['Amazon', 'Flipkart', 'D2C'],
  },
  {
    name: 'BIOGRAPHEY',
    type: 'Luxury Fragrance',
    logo: '/assets/logos/media_1787212269671.webp',
    tagline: 'Every bottle tells a signature story.',
    story: 'Biographey is India\'s first narrative-driven luxury fragrance house, where each EDP tells a personal story. Banega Brand handled high-concentration EDP formulation, custom glass bottle sourcing, and luxury retail positioning for this ambitious debut.',
    website: 'https://biographey.com',
    founded: '2023',
    category: 'Luxury Fragrance',
    revenue: 'Premium Positioning',
    markets: ['D2C', 'Nykaa Luxe'],
  },
  {
    name: 'BLUSH EN BLOOM',
    type: 'Cosmetics',
    logo: '/assets/logos/media_1787212269823.webp',
    tagline: 'Bold colour. Gentle on skin. Built to bloom.',
    story: 'Blush En Bloom is a new-age cosmetics brand that merges vibrant colour science with skin-caring formulations. Banega Brand coordinated pigment testing, cruelty-free certification, and full marketplace launch across Amazon and Flipkart.',
    website: 'https://blushenbloom.com',
    founded: '2024',
    category: 'Cosmetics',
    revenue: 'Best Seller Badge',
    markets: ['Amazon', 'Flipkart', 'D2C'],
  },
  {
    name: 'DREFOR',
    type: 'Fragrance',
    logo: '/assets/logos/media_1787212269818.webp',
    tagline: 'Drefor — where ambition meets olfactory art.',
    story: 'Drefor is an ambitious perfume house designed for India\'s new luxury consumer. From compounding to custom magnetic-cap bottle design, Banega Brand executed a complete end-to-end launch that saw Drefor sell out its first batch on launch week.',
    website: 'https://drefor.com',
    founded: '2023',
    category: 'Perfume',
    revenue: 'Sold Out Launch Week',
    markets: ['D2C', 'Amazon', 'Nykaa'],
  },
  {
    name: 'ROUGX',
    type: 'Perfumes',
    logo: '/assets/logos/media_1787212245000.webp',
    tagline: 'Bold. Unfiltered. Unapologetically luxurious.',
    story: 'Rougx is a high-impact luxury EDP brand crafted for the bold Indian consumer. Banega Brand\'s 6-step framework eliminated all guesswork — from IFRA-compliant formulation to Flipkart onboarding — resulting in a completely sold-out launch week.',
    website: 'https://rougx.com',
    founded: '2024',
    category: 'Perfume',
    revenue: '#1 in Category',
    markets: ['Flipkart', 'Amazon', 'D2C'],
  },
  {
    name: 'TUESDAY LONDON',
    type: 'Luxury Perfume',
    logo: '/assets/logos/media_1787212245311.webp',
    tagline: 'Timeless British elegance, crafted for India.',
    story: 'Tuesday London brings British fine fragrance sensibility to the Indian luxury market. Banega Brand managed the entire import-equivalent formulation process, premium packaging, and positioned the brand in the Nykaa Luxe curation.',
    website: 'https://tuesdaylondon.com',
    founded: '2024',
    category: 'Luxury Perfume',
    revenue: 'Nykaa Luxe Featured',
    markets: ['Nykaa Luxe', 'D2C'],
  },
  {
    name: 'GREVETY',
    type: 'Skin Care',
    logo: '/assets/logos/media_1787212269671.webp',
    tagline: 'Science-forward skincare engineered for results.',
    story: 'Grevety is a clinically-driven skincare brand that believes great skin is built on evidence, not trends. Banega Brand formulated the entire product line with GMP-certified labs, handled packaging design, and launched across D2C and Amazon with a strong technical storytelling strategy.',
    website: 'https://grevety.com',
    founded: '2024',
    category: 'Skin Care',
    revenue: 'Rapid D2C Growth',
    markets: ['Amazon', 'D2C'],
  },
  {
    name: 'ESSAENCE',
    type: 'Perfumes',
    logo: '/assets/logos/media_1787212269715.webp',
    tagline: 'Artisan perfumery. Handcrafted with soul.',
    story: 'Essaence is a boutique artisan perfume label dedicated to slow fragrance — small-batch, carefully compounded, and thoughtfully packaged. Banega Brand helped Essaence find the right artisan compounder network and launch with a loyal D2C community.',
    website: 'https://essaence.com',
    founded: '2023',
    category: 'Perfume',
    revenue: 'Loyal Community Built',
    markets: ['D2C', 'Nykaa'],
  },
];

// ── Brand Story Modal ─────────────────────────────────────────────────────────
const BrandModal = ({
  brand,
  onClose,
}: {
  brand: typeof brandLogos[0];
  onClose: () => void;
}) => (
  <AnimatePresence>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.88, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ type: 'spring', stiffness: 320, damping: 30 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-lg overflow-hidden border border-zinc-100"
      >
        {/* Close btn */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-zinc-100 hover:bg-zinc-200 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-zinc-600" />
        </button>

        {/* Header gradient strip */}
        <div className="h-2 w-full bg-gradient-to-r from-[#D97706] via-amber-400 to-[#b45309]" />

        {/* Content */}
        <div className="p-8">
          {/* Logo + Name */}
          <div className="flex items-center gap-5 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-[#FAFAFA] border border-zinc-200 flex items-center justify-center overflow-hidden shadow-sm shrink-0">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="w-full h-full object-contain p-2"
                onError={(e) => {
                  const t = e.currentTarget;
                  t.style.display = 'none';
                }}
              />
            </div>
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight text-[#111111] leading-none mb-1">
                {brand.name}
              </h3>
              <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#D97706]/10 text-[#D97706] border border-[#D97706]/20">
                <Tag className="w-2.5 h-2.5" />
                {brand.category}
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-sm font-bold text-[#D97706] italic mb-4 leading-snug">
            "{brand.tagline}"
          </p>

          {/* Story */}
          <p className="text-sm text-[#555555] font-medium leading-relaxed mb-6">
            {brand.story}
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-[#FAFAFA] rounded-xl p-3 border border-zinc-100 text-center">
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-wider mb-1">Key Result</p>
              <p className="text-xs font-black text-[#D97706] leading-tight">{brand.revenue}</p>
            </div>
            <div className="bg-[#FAFAFA] rounded-xl p-3 border border-zinc-100 text-center">
              <p className="text-[10px] font-black text-zinc-400 uppercase tracking-wider mb-1">Platforms</p>
              <p className="text-xs font-black text-[#111111] leading-tight">{brand.markets.length} Platforms</p>
            </div>
          </div>

          {/* Markets */}
          <div className="flex flex-wrap gap-2 mb-6">
            {brand.markets.map((m) => (
              <span
                key={m}
                className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full border border-zinc-200 bg-white text-zinc-500"
              >
                {m}
              </span>
            ))}
          </div>

          {/* Visit Website CTA */}
          <a
            href={brand.website}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 w-full py-3.5 bg-[#111111] hover:bg-[#D97706] text-white rounded-xl font-black text-xs uppercase tracking-widest transition-all duration-200 active:scale-[0.98]"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Visit {brand.name} Website
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

// ── Main Component ─────────────────────────────────────────────────────────────
export const TrustSection = () => {
  const [selectedBrand, setSelectedBrand] = useState<typeof brandLogos[0] | null>(null);

  const metrics = [
    { value: '215+', label: 'Brands Launched', icon: Shield },
    { value: '108+', label: 'Manufacturing Partners', icon: Building },
    { value: '6-Step', label: 'Launch Framework', icon: Sparkles },
    { value: '4', label: 'High-Growth Industries', icon: Briefcase },
  ];

  const BrandCard = ({
    brand,
    keyPrefix,
  }: {
    brand: typeof brandLogos[number];
    keyPrefix: string;
    key?: string;
  }) => (
    <motion.button
      key={`${keyPrefix}-${brand.name}`}
      onClick={() => setSelectedBrand(brand)}
      aria-label={`View ${brand.name} brand launch case study`}
      whileHover={{ scale: 1.04, y: -3, boxShadow: '0 12px 32px -8px rgba(217,119,6,0.25)' }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      className="flex items-center justify-center bg-white rounded-2xl border border-zinc-200 shadow-sm w-56 h-32 shrink-0 cursor-pointer hover:border-[#D97706]/50 transition-colors duration-200 group relative overflow-hidden"
    >
      <img
        src={brand.logo}
        alt={`${brand.name} logo`}
        className="w-full h-full object-contain p-6"
        loading="lazy"
        decoding="async"
        onError={(e) => {
          const target = e.currentTarget;
          target.style.display = 'none';
        }}
      />
      {/* Optional hover state hint */}
      <div className="absolute inset-0 bg-white/95 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[10px] font-black text-[#D97706] uppercase tracking-widest">
          View Story →
        </span>
      </div>
    </motion.button>
  );

  return (
    <>
      <section className="bg-white border-y border-zinc-200 py-12 overflow-hidden select-none font-sans">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center md:text-left md:flex md:items-center md:justify-between gap-8">
          <h3 className="text-zinc-400 font-black uppercase tracking-[0.2em] text-[10px] mb-4 md:mb-0">
            Brands We've Launched — Click to Explore
          </h3>

          {/* Animated Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-x divide-zinc-200">
            {metrics.map((m, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="pl-4 md:pl-6 text-left"
              >
                <span className="text-2xl md:text-3xl font-black text-[#111111] tracking-tighter block">
                  {m.value}
                </span>
                <span className="text-[10px] font-black text-zinc-400 uppercase tracking-wider block mt-1">
                  {m.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Infinite Horizontal Scrolling Strip */}
        <div className="relative w-full overflow-hidden bg-[#FAFAFA] py-6 border-t border-zinc-200">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex w-max gap-6 items-center animate-scroll">
            <div className="flex gap-6 shrink-0">
              {brandLogos.map((brand) => (
                <BrandCard key={`b1-${brand.name}`} brand={brand} keyPrefix="b1" />
              ))}
            </div>
            <div className="flex gap-6 shrink-0">
              {brandLogos.map((brand) => (
                <BrandCard key={`b2-${brand.name}`} brand={brand} keyPrefix="b2" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedBrand && (
        <BrandModal brand={selectedBrand} onClose={() => setSelectedBrand(null)} />
      )}
    </>
  );
};
