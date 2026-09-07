import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldCheck, 
  Layers, 
  Box, 
  CheckCircle2, 
  ArrowUpRight, 
  Sliders, 
  Droplets 
} from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface CategorySpec {
  spec: string;
  val: string;
  highlight?: boolean;
}

interface PackagingCategory {
  id: string;
  num: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  imageCaption: string;
  items: CategorySpec[];
  keyPills: string[];
}

export const PerfumeBottlePackagingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [activeFinish, setActiveFinish] = useState<string>('gold');
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 82%' } }
      );
      gsap.fromTo(
        cardsRef.current?.querySelectorAll('.packaging-card') ?? [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out', scrollTrigger: { trigger: cardsRef.current, start: 'top 78%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Quick animation on active tab change
  useEffect(() => {
    if (previewRef.current) {
      gsap.fromTo(
        previewRef.current,
        { opacity: 0.7, scale: 0.98 },
        { opacity: 1, scale: 1, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [activeTab, activeFinish]);

  const categories: PackagingCategory[] = [
    {
      id: 'glass',
      num: '01',
      category: 'FLACON / BOTTLE',
      title: 'The Glass Flacon',
      subtitle: 'Heavy flint glass engineered for optical clarity & weight',
      description: 'Ultra-pure flint glass with a substantial 370g+ base weight, giving the flacon a cold, weighty luxury feel in the hand with zero optical distortion.',
      badge: 'OPTICAL FLINT · 370G+',
      icon: Layers,
      image: '/assets/perfume/crystal_flint_flacon_mold.jpg',
      imageCaption: 'Optical Super-Flint Glass with Heavy Base Mold',
      keyPills: ['370g+ Base Weight', 'FEA 15 Standard Neck', 'UV Protective Lacquer'],
      items: [
        { spec: 'Material Grade', val: 'Super-flint pharmaceutical grade glass (Extra-white)' },
        { spec: 'Available Shapes', val: 'Cylindrical, Architectural Rectangle, Oval & Custom OEM CNC' },
        { spec: 'Neck Specification', val: 'FEA 15 crimp neck (Leakproof standard) or Screw' },
        { spec: 'Capacities', val: '30ml · 50ml · 75ml · 100ml' },
        { spec: 'Surface Finishes', val: 'High-gloss clear, Frosted, Ombré gradient, Matte black, Metalized' },
        { spec: 'Decoration', val: 'Multi-color screen printing, Hot-foil debossing, Ceramic bake' },
      ],
    },
    {
      id: 'closure',
      num: '02',
      category: 'COLLAR & CAP',
      title: 'The Solid Closure',
      subtitle: 'Weighted Zamak alloy cap with magnetic acoustic snap',
      description: 'High-density zinc die-cast Zamak caps weighing 45–100g. Engineered with internal neodymium magnets for a crisp, acoustic click upon closing.',
      badge: 'ZAMAK DIE-CAST · MAGNETIC',
      icon: CrownIcon,
      image: '/assets/perfume/venotine_emerald_flux.jpg',
      imageCaption: 'Weighted Zamak Crown Cap with Mirror Gold & Custom Architectural Collar',
      keyPills: ['45–100g Tactile Mass', 'Neodymium Magnetic Snap', '5 Metallic Coatings'],
      items: [
        { spec: 'Core Alloy', val: 'High-purity Zamak 3 (Zinc die-cast alloy)' },
        { spec: 'Cap Mass & Feel', val: '45g to 100g calibrated weight for prestige handfeel' },
        { spec: 'Closure System', val: 'Integrated acoustic magnetic snap or high-torque friction rib' },
        { spec: 'Coating Options', val: '24K Brushed Gold, Gunmetal Slate, Satin Silver, Rose Gold, Matte Onyx' },
        { spec: 'Branding Detail', val: 'Top-crown laser engraving, deep 3D debossing, enamel fill' },
      ],
    },
    {
      id: 'pump',
      num: '03',
      category: 'ATOMIZER & COLLAR',
      title: 'The Micro-Mist Pump',
      subtitle: 'Ultra-fine dispersion engine for velvety sillage',
      description: 'FEA 15 crimp atomizer engineered for an ultra-fine 0.08–0.12ml cloud-like mist plume. Paired with invisible dip tube technology and zero-evaporation crimp seal.',
      badge: '0.08ML ACTUATION · INVISIBLE TUBE',
      icon: Droplets,
      image: '/assets/perfume/tuesday_atomizer_detail.jpg',
      imageCaption: 'Pneumatic Crimped FEA 15 Engine with Invisible Submerged Tube',
      keyPills: ['0.08–0.12ml Soft Cloud', '100% Hermetic Crimp', 'Invisible Dip Tube'],
      items: [
        { spec: 'Actuation Engine', val: 'Low-effort micro-droplet mist actuator (FEA 15 Crimp)' },
        { spec: 'Discharge Volume', val: '0.08ml – 0.12ml per stroke (Wide 60° conical cloud)' },
        { spec: 'Actuations per 50ml', val: '350 to 500 velvety sprays per bottle' },
        { spec: 'Dip Tube Clarity', val: 'Invisible optical refractive index tube (Virtually invisible inside juice)' },
        { spec: 'Quality Control', val: '100% helium leak test + vacuum pressure cycle verified' },
      ],
    },
    {
      id: 'carton',
      num: '04',
      category: 'PRIMARY BOX',
      title: 'The Unboxing Carton',
      subtitle: '2mm rigid board packaging with plush velvet tray',
      description: 'Book-style or shoulder-box rigid unboxing cartons crafted from 2mm dense greyboard. Wrapped in specialty soft-touch paper with custom velvet EVA seating.',
      badge: '2MM RIGID · VELVET TRAY',
      icon: Box,
      image: '/assets/perfume/tuesday_london_mayfair_royal.jpg',
      imageCaption: 'Custom Rigid Box with Hot-Stamped Gold Foil and Royal Presentation Tray',
      keyPills: ['2mm Rigid Greyboard', 'Anti-Scuff Soft Touch', 'Custom Velvet Tray'],
      items: [
        { spec: 'Box Architecture', val: '2mm heavy greyboard rigid book-style, Drawer-pull or Magnetic lid' },
        { spec: 'Outer Wrap', val: 'FSC-certified Italian fine paper, soft-touch velvet or leatherette' },
        { spec: 'Embellishments', val: 'Micro-embossed gold/copper foil, spot UV gloss, multi-level 3D emboss' },
        { spec: 'Interior Flocking', val: 'Custom CNC-cut high density EVA foam lined with plush velour' },
        { spec: 'Included Inserts', val: 'Brand story certificate, perfumer olfactory note card, sealed QR badge' },
      ],
    },
  ];

  const finishes = [
    { id: 'gold', name: 'Brushed Gold', color: 'from-amber-200 to-amber-500', hex: '#D4AF37' },
    { id: 'gunmetal', name: 'Gunmetal Slate', color: 'from-zinc-400 to-zinc-700', hex: '#2C3539' },
    { id: 'silver', name: 'Satin Silver', color: 'from-slate-100 to-slate-400', hex: '#E5E4E2' },
    { id: 'rose', name: 'Rose Gold', color: 'from-rose-200 to-rose-400', hex: '#B76E79' },
  ];

  const activeCat = categories[activeTab];

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-[#FBFBFB] border-t border-zinc-200/80 relative overflow-hidden">
      {/* Subtle Luxury Ambient Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-zinc-200/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div ref={headRef} className="mb-14 sm:mb-20 space-y-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-amber-600/70" />
            <span className="text-xs font-mono uppercase tracking-[0.28em] text-zinc-500">Bespoke Glassware &amp; Engineering</span>
            <span className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider rounded-full bg-zinc-900 text-amber-200 border border-amber-500/20">
              Interactive Anatomy
            </span>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div>
              <h2 className="text-[clamp(2.4rem,4.8vw,4.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.04] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                LUXURY IN
              </h2>
              <h3 className="text-[clamp(1.9rem,3.8vw,3.3rem)] font-light tracking-[0.03em] text-[#71717A] leading-[1.04] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>
                EVERY TACTILE DETAIL.
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-zinc-600 max-w-md leading-relaxed font-light">
              From heavy European flint flacons to acoustic magnetic Zamak caps — explore the 4 precision-engineered layers of your bespoke fragrance presentation.
            </p>
          </div>
        </div>

        {/* Interactive Anatomy Category Switcher Bar (Tabs) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-10">
          {categories.map((cat, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(idx)}
                className={`p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 relative border flex flex-col justify-between group cursor-pointer ${
                  isActive
                    ? 'bg-zinc-950 text-white border-zinc-900 shadow-xl shadow-black/10 ring-1 ring-amber-400/30'
                    : 'bg-white hover:bg-zinc-50 text-zinc-800 border-zinc-200/90 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-3">
                  <span className={`text-[11px] font-mono uppercase tracking-widest font-bold ${isActive ? 'text-amber-400' : 'text-zinc-400'}`}>
                    {cat.num}
                  </span>
                  <span className={`text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded ${
                    isActive ? 'bg-zinc-800 text-zinc-300' : 'bg-zinc-100 text-zinc-500'
                  }`}>
                    SPEC
                  </span>
                </div>

                <div>
                  <div className={`text-[10px] font-mono uppercase tracking-wider mb-1 ${isActive ? 'text-zinc-400' : 'text-zinc-500'}`}>
                    {cat.category}
                  </div>
                  <div className={`text-base sm:text-lg font-medium leading-snug ${isActive ? 'text-white' : 'text-zinc-900'}`} style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {cat.title}
                  </div>
                </div>

                {/* Active Indicator Line */}
                {isActive && (
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 rounded-full" />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail & Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Deep Specifications & Craftsmanship (7 cols) */}
          <div ref={cardsRef} className="lg:col-span-7 space-y-6">
            
            {/* Overview Card */}
            <div className="packaging-card p-6 sm:p-8 rounded-3xl bg-white border border-zinc-200/90 shadow-sm relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-zinc-100">
                <div>
                  <div className="text-[11px] font-mono text-amber-700 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                    Layer {activeCat.num} · {activeCat.category}
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-normal text-zinc-950 mt-1 uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    {activeCat.title}
                  </h4>
                </div>
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-zinc-100 text-zinc-800 border border-zinc-200">
                  {activeCat.badge}
                </span>
              </div>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed font-light my-5" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                {activeCat.description}
              </p>

              {/* Key Highlight Badges */}
              <div className="flex flex-wrap gap-2 pt-2 pb-6 border-b border-zinc-100">
                {activeCat.keyPills.map((pill) => (
                  <span
                    key={pill}
                    className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-lg bg-amber-500/10 text-amber-900 border border-amber-200"
                  >
                    <CheckCircle2 className="w-3 h-3 text-amber-600" />
                    {pill}
                  </span>
                ))}
              </div>

              {/* Closure Finish Interactive Selector (Shown when Closure tab active) */}
              {activeCat.id === 'closure' && (
                <div className="mt-5 p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-zinc-600">
                    <span className="font-semibold flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-amber-600" /> Select Zamak Finish:
                    </span>
                    <span className="text-amber-800 font-medium">{finishes.find(f => f.id === activeFinish)?.name}</span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {finishes.map((f) => (
                      <button
                        key={f.id}
                        onClick={() => setActiveFinish(f.id)}
                        className={`px-3 py-2 rounded-xl text-xs flex items-center gap-2 border transition-all text-left ${
                          activeFinish === f.id
                            ? 'bg-zinc-950 text-white border-zinc-900 ring-2 ring-amber-400/40 shadow-sm'
                            : 'bg-white hover:bg-zinc-100 text-zinc-700 border-zinc-200'
                        }`}
                      >
                        <span className={`w-3.5 h-3.5 rounded-full bg-gradient-to-br ${f.color} border border-black/20 shrink-0`} />
                        <span className="truncate">{f.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Detailed Technical Specifications Table */}
              <div className="mt-6 divide-y divide-zinc-100">
                <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 pb-2">
                  Technical Specifications &amp; Quality Limits
                </div>
                {activeCat.items.map((item) => (
                  <div key={item.spec} className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-4 py-3.5 items-baseline">
                    <span className="sm:col-span-4 text-xs font-mono text-zinc-500 uppercase tracking-wider">
                      {item.spec}
                    </span>
                    <span className="sm:col-span-8 text-xs sm:text-sm font-normal text-zinc-900 leading-snug" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                      {item.val}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Quick Trust / Tactile Assurance Strip */}
            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 text-center">
                <div className="text-lg sm:text-xl font-mono font-bold text-zinc-900">100%</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mt-0.5">Leakproof Sealed</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 text-center">
                <div className="text-lg sm:text-xl font-mono font-bold text-zinc-900">45–100g</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mt-0.5">Tactile Mass</div>
              </div>
              <div className="p-4 rounded-2xl bg-white border border-zinc-200/80 text-center">
                <div className="text-lg sm:text-xl font-mono font-bold text-zinc-900">FEA 15</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 mt-0.5">Universal Fit</div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Showcase & Anatomy Card (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-4">
            <div
              ref={previewRef}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-zinc-200/90 shadow-xl shadow-zinc-200/50 space-y-5"
            >
              {/* Card Top Meta */}
              <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 uppercase tracking-widest pb-3.5 border-b border-zinc-100">
                <span className="flex items-center gap-1.5 font-semibold text-zinc-700">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Preview: Layer {activeCat.num}
                </span>
                <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-700 border border-zinc-200">
                  {activeCat.badge}
                </span>
              </div>

              {/* Dynamic Luxury Bottle Photography */}
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-zinc-50 to-zinc-100 border border-zinc-100 p-4 sm:p-6 group">
                <img
                  src={activeCat.image}
                  alt={activeCat.title}
                  className="w-full object-contain rounded-xl max-h-[340px] sm:max-h-[380px] mx-auto select-none transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.12))' }}
                  draggable={false}
                />

                {/* Floating Tactile Callout Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-zinc-950/85 backdrop-blur-md px-3.5 py-2.5 rounded-xl border border-zinc-800 text-white flex items-center justify-between">
                  <div className="space-y-0.5">
                    <div className="text-[9px] font-mono uppercase tracking-widest text-amber-400">Tactile Sensory Focus</div>
                    <div className="text-xs font-medium truncate max-w-[200px]">{activeCat.title}</div>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                    OEM Custom
                  </span>
                </div>
              </div>

              {/* Caption & Olfactory Packaging Architecture Details */}
              <div className="pt-2 space-y-2">
                <div
                  className="text-base font-normal text-zinc-950 uppercase"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {activeCat.imageCaption}
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed font-light">
                  {activeCat.description}
                </p>
              </div>

              {/* Craftsmanship Highlights */}
              <div className="pt-3 border-t border-zinc-100 flex items-center justify-between text-xs text-zinc-600">
                <span className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  ISO 22716 &amp; IFRA Certified
                </span>
                <span className="font-mono text-[11px] text-amber-800 font-medium">
                  Custom CNC Tooling Available
                </span>
              </div>
            </div>

            {/* Quick Sourcing Prompt */}
            <div className="p-4 rounded-2xl bg-zinc-950 text-white border border-zinc-800 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-amber-400">Need Custom Mould Tooling?</div>
                <div className="text-xs text-zinc-300 font-light">We create bespoke 3D CAD flacon moulds from 2,000 units MOQ.</div>
              </div>
              <div className="shrink-0 w-8 h-8 rounded-full bg-amber-400 text-black flex items-center justify-center font-bold">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

function CrownIcon(props: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className}
    >
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.269a4 4 0 0 1-3.83 2.943H8.683a4 4 0 0 1-3.83-2.943L2.019 6.019a.5.5 0 0 1 .798-.519l4.277 3.664a1 1 0 0 0 1.516-.294z" />
      <path d="M5 21h14" />
    </svg>
  );
}

export default PerfumeBottlePackagingSection;
