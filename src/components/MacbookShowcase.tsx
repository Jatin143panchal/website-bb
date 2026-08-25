import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import {
  CheckCircle2, ArrowUpRight, Globe, Star, TrendingUp, Package, BarChart2,
  ShoppingCart, Award, Zap, ShieldCheck, BadgeCheck, ChevronRight, Sparkles
} from 'lucide-react';

// ── Platform data ──────────────────────────────────────────────────────────────
const platforms = [
  {
    id: 'amazon',
    name: 'Amazon India',
    tag: 'Global E-Commerce Giant',
    color: '#FF9900',
    bgGradient: 'from-[#FF9900]/20 via-black to-black',
    glow: 'rgba(255,153,0,0.35)',
    badge: 'MARKETPLACE 01',
    icon: '🛒',
    heroStat: '₹18.4L',
    heroStatLabel: '30-Day GMV',
    secondaryStat: '4.8★',
    secondaryLabel: 'Avg Rating',
    thirdStat: '#1',
    thirdLabel: 'Best Seller',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=1600&auto=format&fit=crop',
    listingPreview: {
      productTitle: 'Premium Luxury Fragrance EDP 100ml',
      price: '₹2,499',
      mrp: '₹3,499',
      discount: '29% off',
      rating: '4.8',
      reviews: '2,847',
      badge: 'Best Seller',
      prime: true,
      delivery: 'FREE delivery Tomorrow',
    },
    approach: 'Optimized A+ Content, Brand Store, FBA logistics, PPC campaigns, and category ranking strategy for guaranteed Best Seller placement.',
    deliverables: [
      'Seller Registration & GST Setup',
      'A+ Content & Brand Store Design',
      'Keyword Optimization & PPC',
      'FBA Logistics & Inventory Management',
      'Product Photography & Videography',
      'Review Generation Strategy',
    ],
    outcome: 'Achieved Best Seller badge in 3 categories within 30 days. 4.8★ rating with 2,800+ verified reviews.',
  },
  {
    id: 'flipkart',
    name: 'Flipkart',
    tag: 'India\'s Largest E-Commerce',
    color: '#2874F0',
    bgGradient: 'from-[#2874F0]/20 via-black to-black',
    glow: 'rgba(40,116,240,0.35)',
    badge: 'MARKETPLACE 02',
    icon: '📦',
    heroStat: '300%',
    heroStatLabel: 'Sales Volume',
    secondaryStat: '#1',
    secondaryLabel: 'Category Rank',
    thirdStat: '45 Days',
    thirdLabel: 'To Top',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1600&auto=format&fit=crop',
    listingPreview: {
      productTitle: 'Clinical Glow Vitamin C Serum 30ml',
      price: '₹899',
      mrp: '₹1,499',
      discount: '40% off',
      rating: '4.6',
      reviews: '1,243',
      badge: 'Flipkart Assured',
      prime: false,
      delivery: 'FREE Delivery by Tomorrow',
    },
    approach: 'Smart Fulfillment setup, competitive pricing strategy, Big Billion Days readiness, and premium brand store creation for dominant category presence.',
    deliverables: [
      'Smart Fulfillment Integration',
      'Product Listing & SEO Optimization',
      'Big Billion Days Campaign Strategy',
      'Brand Store Design & Setup',
      'Review & Rating Management',
      'Promotional Pricing Strategy',
    ],
    outcome: '300% increase in sales volume in 45 days. Ranked #1 in "Premium Wellness" category with Flipkart Assured badge.',
  },
  {
    id: 'nykaa',
    name: 'Nykaa',
    tag: 'Beauty & Wellness Leader',
    color: '#E80071',
    bgGradient: 'from-[#E80071]/20 via-black to-black',
    glow: 'rgba(232,0,113,0.35)',
    badge: 'MARKETPLACE 03',
    icon: '💄',
    heroStat: '14 Days',
    heroStatLabel: 'Sold Out',
    secondaryStat: '4.9★',
    secondaryLabel: 'Beauty Rating',
    thirdStat: 'Nykaa Luxe',
    thirdLabel: 'Featured',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1600&auto=format&fit=crop',
    listingPreview: {
      productTitle: 'Pure Botanical Glow Face Oil 30ml',
      price: '₹1,299',
      mrp: '₹1,799',
      discount: '28% off',
      rating: '4.9',
      reviews: '892',
      badge: 'Nykaa Luxe',
      prime: false,
      delivery: 'Ships in 2-3 days',
    },
    approach: 'Nykaa Beauty Network integration, influencer collaborations, front-page banner placements, and Clean Beauty certification for premium positioning.',
    deliverables: [
      'Nykaa Seller Onboarding & Compliance',
      'Nykaa Luxe / Clean Beauty Curation',
      'Influencer Campaign Management',
      'Front-Page Banner Advertising',
      'Beauty Advisor Content Creation',
      'Nykaa Pink Friday Campaign Setup',
    ],
    outcome: 'Sold out first inventory batch in 14 days. Featured in "Nykaa Hidden Gems" and achieved 4.9★ beauty rating.',
  },
];

// ── Animated Listing Preview Card ─────────────────────────────────────────────
const ListingCard = ({ p, color }: { p: typeof platforms[0]; color: string; key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.97 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: -20, scale: 0.97 }}
    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-zinc-100 w-full"
    style={{ boxShadow: `0 24px 60px -12px ${color}30` }}
  >
    {/* Browser chrome */}
    <div className="bg-zinc-100 px-4 py-2.5 flex items-center gap-3 border-b border-zinc-200">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
      </div>
      <div className="flex-1 bg-white rounded-md px-3 py-1 text-[9px] text-zinc-400 font-mono border border-zinc-200 truncate">
        {p.id === 'amazon' && 'amazon.in › banega-brand-store'}
        {p.id === 'flipkart' && 'flipkart.com › banega-brand'}
        {p.id === 'nykaa' && 'nykaa.com › brands › banega-brand'}
      </div>
    </div>

    {/* Product listing */}
    <div className="p-5">
      {/* Badge row */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
          style={{ backgroundColor: color }}
        >
          {p.listingPreview.badge}
        </span>
        {p.listingPreview.prime && (
          <span className="text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#00A8E0] text-white">
            ✦ PRIME
          </span>
        )}
      </div>

      {/* Title */}
      <h4 className="text-xs font-bold text-zinc-800 leading-tight mb-3 line-clamp-2">
        {p.listingPreview.productTitle}
      </h4>

      {/* Stars */}
      <div className="flex items-center gap-1.5 mb-3">
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map(i => (
            <Star key={i} className="w-3 h-3 fill-[#FF9900] text-[#FF9900]" />
          ))}
        </div>
        <span className="text-[10px] font-bold" style={{ color }}>{p.listingPreview.rating}</span>
        <span className="text-[10px] text-zinc-400">{p.listingPreview.reviews} ratings</span>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-xl font-black text-zinc-900">{p.listingPreview.price}</span>
        <span className="text-xs text-zinc-400 line-through">{p.listingPreview.mrp}</span>
        <span className="text-xs font-black text-green-600">{p.listingPreview.discount}</span>
      </div>

      {/* Delivery */}
      <p className="text-[10px] font-bold text-zinc-500 mb-4">{p.listingPreview.delivery}</p>

      {/* CTA */}
      <button
        className="w-full py-2.5 rounded-lg text-xs font-black uppercase tracking-wider text-white transition-opacity hover:opacity-90"
        style={{ backgroundColor: color }}
      >
        {p.id === 'amazon' ? 'Add to Cart' : p.id === 'flipkart' ? 'Buy Now' : 'Add to Bag'}
      </button>
    </div>
  </motion.div>
);

// ── Main Component ─────────────────────────────────────────────────────────────
export const MacbookShowcase = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const current = platforms[activeIdx];

  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        setActiveIdx(prev => (prev + 1) % platforms.length);
      }, 6000);
    }
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isAutoPlaying]);

  const select = (i: number) => {
    setIsAutoPlaying(false);
    setActiveIdx(i);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section
      className="relative py-24 md:py-32 px-4 sm:px-6 overflow-hidden"
      style={{ background: 'linear-gradient(180deg,#050505 0%,#0a0a0a 100%)' }}
    >
      {/* Glow blob */}
      <motion.div
        key={current.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-[100%] blur-[160px] pointer-events-none"
        style={{ background: current.glow }}
      />

      <div className="max-w-7xl mx-auto relative z-10">


        {/* ── Platform Tabs ── */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-2 p-2 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
            {platforms.map((p, i) => (
              <button
                key={p.id}
                onClick={() => select(i)}
                className="relative px-5 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300"
                style={{ color: activeIdx === i ? '#000' : '#999' }}
              >
                {activeIdx === i && (
                  <motion.div
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-xl"
                    style={{ background: p.color }}
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <span>{p.icon}</span>
                  {p.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Main Panel ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[560px]">

              {/* ── Left column: content ── */}
              <div className="lg:col-span-5 p-8 md:p-10 lg:p-14 flex flex-col justify-between border-r border-white/5">
                <div>
                  {/* Header */}
                  <div className="mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 block" style={{ color: current.color }}>
                      {current.badge}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-none mb-1">
                      {current.name}
                    </h3>
                    <p className="text-sm font-medium text-zinc-400">{current.tag}</p>
                  </div>

                  {/* Hero Stats */}
                  <div className="grid grid-cols-3 gap-3 mb-8">
                    {[
                      { v: current.heroStat, l: current.heroStatLabel },
                      { v: current.secondaryStat, l: current.secondaryLabel },
                      { v: current.thirdStat, l: current.thirdLabel },
                    ].map((s, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                        className="rounded-xl p-3 border border-white/10 text-center"
                        style={{ background: `${current.color}10` }}
                      >
                        <p className="text-lg font-black text-white leading-none">{s.v}</p>
                        <p className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider mt-1">{s.l}</p>
                      </motion.div>
                    ))}
                  </div>

                  {/* Approach */}
                  <div className="mb-7">
                    <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                      <ArrowUpRight className="w-3.5 h-3.5" style={{ color: current.color }} />
                      Our Approach
                    </h4>
                    <p className="text-sm text-zinc-300 leading-relaxed font-medium">{current.approach}</p>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-[10px] font-black text-zinc-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5" style={{ color: current.color }} />
                      Deliverables
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {current.deliverables.map((d, i) => (
                        <motion.div
                          key={d}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + i * 0.06 }}
                          className="flex items-center gap-2.5"
                        >
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: current.color }} />
                          <span className="text-[11px] font-bold text-zinc-300 uppercase tracking-wide">{d}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Outcome */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <p className="text-[10px] font-black text-zinc-500 uppercase tracking-widest mb-2">Outcome</p>
                  <p className="text-sm text-white font-semibold italic leading-relaxed">"{current.outcome}"</p>
                </div>
              </div>

              {/* ── Right column: listing preview + image ── */}
              <div className="lg:col-span-7 grid grid-rows-[1fr_auto] relative overflow-hidden">
                {/* Hero image */}
                <div className="relative overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={current.id + '-img'}
                      src={current.image}
                      alt={current.name}
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 0.5 }}
                      exit={{ scale: 1.1, opacity: 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, #000 100%)' }} />

                  {/* Floating listing card */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <AnimatePresence mode="wait">
                      <ListingCard key={current.id} p={current} color={current.color} />
                    </AnimatePresence>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Dot indicators ── */}
        <div className="flex justify-center gap-2.5 mt-10">
          {platforms.map((_, i) => (
            <button
              key={i}
              onClick={() => select(i)}
              className="rounded-full h-2 transition-all duration-500"
              style={{
                width: i === activeIdx ? '3rem' : '0.5rem',
                background: i === activeIdx ? current.color : '#333',
              }}
              aria-label={`Switch to platform ${i + 1}`}
            />
          ))}
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 text-center"
        >
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black hover:text-white rounded-full font-black text-xs uppercase tracking-[0.15em] transition-all duration-300 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-10px_rgba(217,119,6,0.6)]"
            style={{ '--tw-bg-opacity': '1' } as React.CSSProperties}
            onMouseEnter={e => (e.currentTarget.style.background = current.color)}
            onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
          >
            <Globe className="w-4 h-4" />
            Get Listed on All Platforms
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
