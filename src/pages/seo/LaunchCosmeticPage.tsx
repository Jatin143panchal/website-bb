import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Palette, 
  ArrowRight, 
  Beaker, 
  Package, 
  ShieldCheck, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  Layers, 
  Droplets,
  Plus,
  Minus,
  MessageCircle,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

import { Navbar } from '../../components/Navbar';
import { FigmaFooter } from '../../components/FigmaFooter';

const COSMETIC_CATEGORIES = [
  {
    id: 'lip',
    title: 'Velvet Matte & Transfer-Proof Lipsticks',
    subtitle: 'High-Impact Pigments • 12-Hour Wear • Non-Drying',
    desc: 'Custom bullet lipsticks and liquid velvet formulations with ultra-fine botanical waxes, hyaluronic microspheres, and custom soft-touch magnetic cases.',
    features: ['Custom Shade Matching (PANTONE)', 'Transfer-Proof Polymer Matrix', 'Flocked Doe-Foot Applicators'],
    moq: '250 - 500 units / shade',
  },
  {
    id: 'foundation',
    title: 'Weightless Foundations & Concealers',
    subtitle: 'Adaptive Undertones • Buildable Coverage • SPF Infused',
    desc: 'Skin-like breathable emulsion foundations, hydrating serum concealers, and oil-control matte bases engineered for diverse Indian skin undertones (Warm, Neutral, Olive).',
    features: ['Non-Oxidizing Pigment Encasement', 'Sweat & Humidity Resistant', 'Airless Pump Glass Packaging'],
    moq: '300 - 500 units / shade',
  },
  {
    id: 'palettes',
    title: 'Multi-Finish Eyeshadow & Blush Palettes',
    subtitle: 'Buttery Mattes • Metallic Foils • Duochromes',
    desc: 'Micro-milled pressed powder formulations with zero fallout, intense color payoff in single swatches, and bespoke multi-pan magnetic palettes with mirror.',
    features: ['High-Mica Foil Binders', 'Zero-Talc Vegan Formulations', 'Custom Laser Foil Stamping'],
    moq: '250 - 500 palettes',
  },
  {
    id: 'cushion',
    title: 'Airless Cushion Compacts & CC Creams',
    subtitle: 'Dewy Glass Skin • On-the-Go Touchups • Anti-Pollution',
    desc: 'Korean-inspired liquid cushion compacts featuring porous ruby-cell puffs, antimicrobial sponge matrices, and antioxidant-rich active skincare infusion.',
    features: ['Anti-Bacterial Mesh Dispensers', 'Refillable Eco-Luxury Shells', 'SPF 30+ PA+++ Lab Certified'],
    moq: '500 units',
  },
  {
    id: 'lipoil',
    title: 'Hydrating Tinted Lip Oils & Glosses',
    subtitle: 'Mirror Shine • Non-Sticky Cushion • Peptide Plump',
    desc: 'High-shine hybrid lip oils infused with botanical squalane, jojoba, and Maxi-Lip peptides for visible plumping and nourishing sheer wash of tint.',
    features: ['Zero Stickiness Formula', 'Jumbo Cloud Applicators', 'Custom Fruit & Vanilla Aroma'],
    moq: '300 units / shade',
  },
  {
    id: 'eyes',
    title: 'Waterproof Gel Eyeliners & Mascaras',
    subtitle: 'Smudge-Proof • Carbon Black • Tubing Fiber Technology',
    desc: 'Ophthalmologically tested ultra-black liquid liners and tubing mascaras that wrap lashes in water-resistant polymer tubes that slide off with warm water.',
    features: ['Ophthalmologist Lab Approved', '24-Hour Sweat Proof', 'Custom Silicone Precision Brushes'],
    moq: '500 units',
  },
];

const COSMETIC_FAQS = [
  {
    q: 'What is the minimum order quantity (MOQ) to launch a cosmetics brand in India?',
    a: 'We offer startup-friendly starting MOQs beginning at 250 to 500 units per shade/SKU for standard high-end component tooling. This allows you to launch a coordinated 4 to 6 shade capsule collection with minimal initial capital risk.',
  },
  {
    q: 'How long does the turnkey cosmetics development process take?',
    a: 'The complete timeline is 45 to 90 days. This includes custom shade matching and lab swatch kits (2–3 weeks), stability and challenge testing, custom component printing/foil stamping, batch compounding in GMP cleanrooms, and marketplace setup.',
  },
  {
    q: 'Are all cosmetic formulations CDSCO and FDA approved in India?',
    a: 'Yes, 100%. All colorants, micas, and pigments utilized in our formulations are CDSCO and US-FDA compliant. Every batch undergoes mandatory heavy metal assays (Lead, Arsenic, Mercury), dermatological patch testing, and microbial safety clearance.',
  },
  {
    q: 'Who owns the cosmetics formulation and color shade intellectual property?',
    a: 'You do. You retain 100% IP ownership of your custom color blends, formulations, packaging molds, and design assets. We sign a formal IP assignment agreement prior to initiating development.',
  },
  {
    q: 'Can Banega Brand handle quick-commerce and marketplace onboarding?',
    a: 'Yes. We provide complete turnkey launch assistance including Amazon Brand Registry, Nykaa Luxury onboarding, Purplle, Blinkit dark-store listings, barcoding (GS1), and performance ad campaign structuring.',
  },
];

export const LaunchCosmeticPage: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedProduct, setSelectedProduct] = useState<number>(0);

  return (
    <div className="relative bg-white text-[#111111] selection:bg-[#E11D48] selection:text-white font-sans overflow-x-hidden min-h-screen">
      <Helmet>
        <title>Launch Your Color Cosmetics & Makeup Brand in India | Banega Brand</title>
        <meta
          name="description"
          content="Build your color cosmetics and makeup brand with India's #1 connected launch partner. High-pigment lipsticks, foundations, palettes, cruelty-free lab testing, custom soft-touch packaging, and GMP manufacturing in 45–90 days."
        />
        <meta
          name="keywords"
          content="launch cosmetics brand, color cosmetics contract manufacturing india, private label lipstick manufacturer, custom foundation formulation lab, private label makeup india, cosmetic oem manufacturer"
        />
        <link rel="canonical" href="https://banegabrand.com/industry/cosmetics" />

        {/* OpenGraph */}
        <meta property="og:title" content="Launch Your Own Color Cosmetics & Makeup Brand | Banega Brand" />
        <meta
          property="og:description"
          content="Turnkey color cosmetics incubation — custom pigments, luxury packaging, cruelty-free lab clearance, and marketplace scaling."
        />
        <meta property="og:url" content="https://banegabrand.com/industry/cosmetics" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://banegabrand.com/assets/Banner%202.png" />

        {/* Structured Data / Schema.org for SEO & AEO (Google AI Overviews, Perplexity, ChatGPT Search) */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://banegabrand.com/industry/cosmetics#service',
                'name': 'Color Cosmetics & Makeup Brand Launch Services',
                'provider': {
                  '@type': 'Organization',
                  'name': 'Banega Brand',
                  'url': 'https://banegabrand.com',
                  'logo': 'https://banegabrand.com/assets/banega_logo_official.png',
                },
                'serviceType': 'Turnkey Color Cosmetics Formulation, Custom Tooling & Contract Manufacturing',
                'areaServed': ['India', 'United States', 'Europe', 'Middle East'],
                'description':
                  'End-to-end pigment formulation, velvet matte lipsticks, breathable foundations, soft-touch magnetic cases, CDSCO compliance, and GMP manufacturing in 45–90 days.',
              },
              {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  {
                    '@type': 'ListItem',
                    'position': 1,
                    'name': 'Home',
                    'item': 'https://banegabrand.com',
                  },
                  {
                    '@type': 'ListItem',
                    'position': 2,
                    'name': 'Industries',
                    'item': 'https://banegabrand.com/services',
                  },
                  {
                    '@type': 'ListItem',
                    'position': 3,
                    'name': 'Color Cosmetics & Makeup',
                    'item': 'https://banegabrand.com/industry/cosmetics',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                'mainEntity': COSMETIC_FAQS.map((faq) => ({
                  '@type': 'Question',
                  'name': faq.q,
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': faq.a,
                  },
                })),
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Global Navigation */}
      <Navbar />

      <main className="w-full">
        {/* ── 1. EDITORIAL LUXURY COSMETICS HERO ────────────────────────────── */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 px-4 sm:px-8 lg:px-16 bg-[#09090B] text-white overflow-hidden border-b border-zinc-800">
          {/* Subtle Ambient Vignette */}
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E11D48]/15 blur-[160px] pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#FF5722]/10 blur-[140px] pointer-events-none rounded-full" />

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
            
            {/* Left Hero Briefing */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/10 border border-rose-500/30 text-xs font-mono uppercase tracking-[0.2em] text-rose-300">
                <Palette size={13} />
                <span>02 / 04 • Color Cosmetics &amp; Makeup</span>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="space-y-2"
              >
                <h1
                  className="text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-normal uppercase tracking-tight text-white leading-[1.02]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  HIGH-PIGMENT <br />
                  <span className="font-light italic text-rose-300">
                    COLOR COSMETICS.
                  </span>
                </h1>
                <p 
                  className="text-xs sm:text-sm uppercase tracking-[0.2em] text-zinc-400 font-mono pt-1"
                >
                  Micro-Fine Pigments • Velvet Matte Bases • Luxury Soft-Touch Cases
                </p>
              </motion.div>

              <p 
                className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl"
                style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
              >
                Launch your own makeup brand with custom shade matching, transfer-proof formulations, cruelty-free lab clearances, and quick-commerce distribution in 45–90 days.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-3">
                <a
                  href="#cosmetic-contact"
                  className="px-9 py-4 rounded-full bg-gradient-to-r from-[#E11D48] via-[#FF5722] to-[#E11D48] hover:brightness-110 text-white font-extrabold text-xs sm:text-sm uppercase tracking-[0.16em] shadow-[0_10px_35px_rgba(225,29,72,0.4)] transition-all duration-300 active:scale-95 flex items-center justify-center gap-2.5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <span>Start Cosmetics Launch</span>
                  <ArrowRight size={15} />
                </a>

                <a
                  href="#cosmetic-products"
                  className="px-8 py-4 rounded-full border border-white/25 hover:border-white text-white font-bold text-xs sm:text-sm uppercase tracking-[0.16em] transition-all duration-300 text-center hover:bg-white/5"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  <span>Explore Formulations</span>
                </a>
              </div>

              {/* Verified Metrics Strip */}
              <div className="pt-8 grid grid-cols-3 gap-6 border-t border-white/10 text-left">
                <div>
                  <span className="text-2xl sm:text-3xl font-light text-white block" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>45–90</span>
                  <span className="text-[11px] text-zinc-400 font-mono uppercase tracking-widest block mt-0.5">Days to Market</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-light text-rose-300 block" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>75–88%</span>
                  <span className="text-[11px] text-zinc-400 font-mono uppercase tracking-widest block mt-0.5">Gross Margins</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-light text-white block" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>100%</span>
                  <span className="text-[11px] text-zinc-400 font-mono uppercase tracking-widest block mt-0.5">CDSCO &amp; Cruelty-Free</span>
                </div>
              </div>
            </div>

            {/* Right Visual Flacon/Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-zinc-900 group">
                <img
                  src="/assets/Banner 2.png"
                  alt="Color Cosmetics Makeup Development"
                  className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-black/60 backdrop-blur-md border border-white/15 text-white space-y-1.5 text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-rose-300">
                      Bespoke Turnkey Makeup Lab
                    </span>
                  </div>
                  <h3 className="text-base font-semibold" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Pigment Compounding &amp; Custom Tooling
                  </h3>
                  <p className="text-xs text-zinc-300 font-light" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    From Pantone shade swatches and velvet matte tubes to Nykaa launch.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── 2. THE 4-STAGE COLOR COSMETICS INCUBATION ROADMAP ──────────────── */}
        <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#FAFAFA] border-b border-zinc-200">
          <div className="max-w-7xl mx-auto space-y-16">
            
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#E11D48] block">
                TURNKEY ROADMAP
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal uppercase tracking-tight text-[#111111]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                THE 4-STAGE COSMETICS INCUBATION
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-light" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Proprietary shade formulation, micro-milling, stability testing, and high-velocity influencer seeding funnels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  icon: Beaker,
                  title: 'Shade & Pigment Engineering',
                  desc: 'Formulating transfer-proof, hydrating formulas with clean ingredients, natural mica, and skin-adaptive undertones.',
                },
                {
                  step: '02',
                  icon: Package,
                  title: 'Custom Compacts & Soft-Touch Bottles',
                  desc: 'Airless pumps, magnetic closure compacts, wand applicators, and custom hot-stamped gold/silver luxury tooling.',
                },
                {
                  step: '03',
                  icon: ShieldCheck,
                  title: 'Dermatological & Heavy Metal Testing',
                  desc: 'Heavy metal lab panels, microbial clearance, ophthalmological testing for eye range, and CDSCO batch approvals.',
                },
                {
                  step: '04',
                  icon: TrendingUp,
                  title: 'Influencer Seeding & Omnichannel Launch',
                  desc: 'Viral UGC unboxing kits, creator seeding, beauty filters, and direct Nykaa / Purplle / Amazon listings.',
                },
              ].map((phase, idx) => (
                <div
                  key={idx}
                  className="p-7 rounded-2xl bg-white border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-rose-300 transition-all duration-300 space-y-4 text-left group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-mono text-zinc-300 group-hover:text-[#E11D48] transition-colors font-bold">
                      {phase.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-rose-50 flex items-center justify-center text-[#E11D48] group-hover:scale-110 transition-transform">
                      <phase.icon size={20} />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-[#111111] group-hover:text-[#E11D48] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {phase.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-light" style={{ fontFamily: "'Outfit', sans-serif" }}>
                    {phase.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 3. PRODUCT FORMULATION & HARDWARE ARCHITECTURE ───────────────── */}
        <section id="cosmetic-products" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto space-y-14">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 text-left">
              <div className="space-y-2">
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#E11D48] block">
                  CORE CATEGORY CAPABILITIES
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal uppercase tracking-tight text-[#111111]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  WHAT DO YOU WANT TO LAUNCH?
                </h2>
              </div>
              <p className="text-sm text-zinc-500 max-w-md font-light" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Select any cosmetics category below to review formula specifications, key active ingredients, and starting batch MOQs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {COSMETIC_CATEGORIES.map((item, idx) => (
                <div
                  key={item.id}
                  className="p-7 rounded-3xl bg-[#FAFAFA] border border-zinc-200 hover:border-black hover:bg-white transition-all duration-300 flex flex-col justify-between space-y-6 text-left group shadow-xs hover:shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                      <span>0{idx + 1}</span>
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-[#E11D48] font-bold text-[10px] uppercase tracking-wider">
                        {item.moq}
                      </span>
                    </div>

                    <h3 className="text-xl font-normal text-[#111111] group-hover:text-[#E11D48] transition-colors leading-snug" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                      {item.title}
                    </h3>

                    <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">
                      {item.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed pt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {item.desc}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4 border-t border-zinc-200">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-zinc-700">
                        <CheckCircle2 size={13} className="text-[#E11D48] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── 4. AEO-OPTIMIZED FAQ ACCORDION (ANSWER ENGINE READY) ─────────── */}
        <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#FAFAFA] border-b border-zinc-200">
          <div className="max-w-4xl mx-auto space-y-12">
            
            <div className="text-left space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#E11D48] block">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal uppercase tracking-tight text-[#111111]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                COSMETICS LAUNCH FAQS
              </h2>
              <p className="text-sm sm:text-base text-zinc-600 font-light" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Direct, transparent answers regarding formulation rights, CDSCO testing, low batch MOQs, and distribution timelines.
              </p>
            </div>

            <div className="divide-y divide-zinc-200 bg-white rounded-2xl border border-zinc-200/90 p-6 sm:p-8 shadow-sm">
              {COSMETIC_FAQS.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                return (
                  <div key={idx} className="py-5 first:pt-0 last:pb-0">
                    <button
                      type="button"
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 text-left cursor-pointer group"
                    >
                      <h4 className={`text-base sm:text-lg font-medium transition-colors ${isOpen ? 'text-[#E11D48]' : 'text-zinc-900 group-hover:text-[#E11D48]'}`} style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                        {faq.q}
                      </h4>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#E11D48] text-white' : 'bg-zinc-100 text-zinc-600'}`}>
                        {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                      </div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <p className="pt-3 text-sm text-zinc-600 font-light leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                            {faq.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* ── 5. EXPLORE THE OTHER 3 CORE INDUSTRIES ───────────────────────── */}
        <section className="py-16 sm:py-20 px-4 sm:px-8 lg:px-16 bg-white border-b border-zinc-200">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-left">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#FF5722] block">
                  RELATED CATEGORIES
                </span>
                <h3 className="text-2xl sm:text-3xl font-normal uppercase text-[#111111]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  EXPLORE OTHER 3 INDUSTRIES
                </h3>
              </div>
              <Link to="/services" className="text-xs font-mono uppercase tracking-wider text-zinc-600 hover:text-[#FF5722]">
                View All 4 Blueprints &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <Link
                to="/industry/perfume"
                className="group p-5 rounded-2xl border border-zinc-200 hover:border-black transition-all bg-[#FAFAFA] hover:bg-white shadow-xs hover:shadow-lg text-left"
              >
                <img src="/assets/perfume/venotine_ruby_midnight.jpg" alt="Luxury Perfume" className="w-full aspect-[16/10] object-cover rounded-xl mb-3" />
                <h4 className="font-normal text-base text-[#111111] group-hover:text-[#FF5722] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Luxury Perfume &amp; Fine Fragrance
                </h4>
                <p className="text-xs text-zinc-500 mt-1 font-light" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Custom Extrait &amp; EDP formulations in bespoke crystal glass flacons.
                </p>
              </Link>

              <Link
                to="/industry/ayurveda"
                className="group p-5 rounded-2xl border border-zinc-200 hover:border-black transition-all bg-[#FAFAFA] hover:bg-white shadow-xs hover:shadow-lg text-left"
              >
                <img src="/assets/Banner 3.png" alt="Authentic Ayurveda" className="w-full aspect-[16/10] object-cover rounded-xl mb-3" />
                <h4 className="font-normal text-base text-[#111111] group-hover:text-[#FF5722] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Authentic Ayurveda &amp; Botanicals
                </h4>
                <p className="text-xs text-zinc-500 mt-1 font-light" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  AYUSH certified botanical extracts &amp; cold-pressed therapeutic oils.
                </p>
              </Link>

              <Link
                to="/industry/skincare"
                className="group p-5 rounded-2xl border border-zinc-200 hover:border-black transition-all bg-[#FAFAFA] hover:bg-white shadow-xs hover:shadow-lg text-left"
              >
                <img src="/assets/skincare/grevety_skincare_full_collection.jpg" alt="Clinical Skincare" className="w-full aspect-[16/10] object-cover rounded-xl mb-3" />
                <h4 className="font-normal text-base text-[#111111] group-hover:text-[#FF5722] transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Clinical Skincare &amp; Derma
                </h4>
                <p className="text-xs text-zinc-500 mt-1 font-light" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Active serums, SPF blends, ceramides, retinols, and airless pump bottles.
                </p>
              </Link>
            </div>
          </div>
        </section>

        {/* ── 6. STRATEGY INTAKE CALL SECTION ──────────────────────────────── */}
        <section id="cosmetic-contact" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#09090B] text-white border-t border-zinc-800">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-rose-400">
                READY TO BUILD YOUR MAKEUP EMPIRE?
              </span>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-normal uppercase text-white tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                Book Your Cosmetics Strategy Call
              </h2>
              <p className="text-sm sm:text-base text-zinc-400 font-light max-w-xl mx-auto" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Speak directly with our formulation directors and product mentors. We'll map your complete shade collection, packaging dielines, and launch budget.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#E11D48] via-[#FF5722] to-[#E11D48] text-white font-extrabold text-xs sm:text-sm uppercase tracking-[0.16em] shadow-[0_10px_35px_rgba(225,29,72,0.4)] active:scale-95 transition-all"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <span>Book Free Consultation</span>
              </Link>

              <a
                href="https://wa.me/918796755169?text=Hi%20Mayank%2C%20I%20want%20to%20launch%20my%20Color%20Cosmetics%20brand!"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#25D366] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.16em] transition-all hover:bg-[#20bd5a] active:scale-95"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                <MessageCircle size={16} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <FigmaFooter />
    </div>
  );
};

export default LaunchCosmeticPage;
