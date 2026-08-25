import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  Compass, 
  TrendingUp, 
  User, 
  PenTool, 
  Layers, 
  Globe, 
  HelpCircle, 
  Heart, 
  FileText, 
  AlertTriangle, 
  Play, 
  Star, 
  Target, 
  Factory,  
  Activity,
  ShieldCheck,
  Zap,
  ChevronRight,
  Info,
  Award,
  Rocket,
  Eye,
  Lightbulb,
  Users,
  BarChart3,
  Briefcase,
  GraduationCap,  
  Medal,
  Quote,
  Building2,
  Trophy,
  BadgeCheck,
  Crown,
  Flag,
  ThumbsUp,
  Clock,
  Gift,
  Star as StarIcon
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { MainFooter } from '../components/MainFooter';
import mayankImg from '../mayank.webp';


export const AboutPage = () => {
  // Active state for interactive timeline (Section 8)
  const [activeStage, setActiveStage] = useState(0);
  
  // Active state for interactive Principles cards (Section 6)
  const [hoveredPrinciple, setHoveredPrinciple] = useState<number | null>(null);

  // Active state for Video review (Section 11)
  const [activeVideoId, setActiveVideoId] = useState<number | null>(null);

  // State for founder stat cards
  const [hoveredFounderStat, setHoveredFounderStat] = useState<number | null>(null);

  // State for achievement cards
  const [hoveredAchievement, setHoveredAchievement] = useState<number | null>(null);

  // Scroll to section on hash change
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 100);
        }
      }
    };

    // Handle initial load with hash
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleScrollToContact = () => {
    const el = document.getElementById('about-consultation-anchor');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Section 6: Principles Content
  const principles = [
    {
      id: 0,
      title: "Execution Over Ideas",
      quote: "Execution is the only true currency of business.",
      desc: "Ideas are abundant, but validated execution is scarce. We don't trade in abstract consulting slide decks; we trade in premium glass bottles, compliant ingredient chemical audits, and live digital checkouts.",
      icon: Target,
      tag: "THE OPERATIONAL MANDATE"
    },
    {
      id: 1,
      title: "Founder First",
      quote: "We work for your vision, not for our design credit.",
      desc: "You guide the brand legacy, we operate the systems. We explain every compliance code, cost matrix, and lab negotiation transparently so you maintain complete control of your destiny.",
      icon: User,
      tag: "HUMBLE PARTNERSHIP"
    },
    {
      id: 2,
      title: "Long-Term Thinking",
      quote: "A brand is built to endure, not just to launch.",
      desc: "We analyze supply chain scalability from day zero. We source from pre-audited laboratories capable of scaling from an initial 500-unit formulation run to 50,000-unit continuous retail replenishment.",
      icon: Compass,
      tag: "CONCRETE FORECASTING"
    },
    {
      id: 3,
      title: "Practicality Over Hype",
      quote: "Quiet, consistent product superiority wins markets.",
      desc: "We prioritize certified GMP labs, flawless trademark registrations, and excellent cost margins over short-lived social media trends. Real margins protect real business longevity.",
      icon: ShieldCheck,
      tag: "FINANCIAL REALISM"
    },
    {
      id: 4,
      title: "Partnership Over Projects",
      quote: "We stay on the floor until the checkout is live.",
      desc: "Unlike agency vendors who deliver files and disappear, we coordinate your formulation chemistry, negotiate directly with high-grade manufacturers, and stay side-by-side until the live transactions clear.",
      icon: Heart,
      tag: "THE SOLEMN OBLIGATION"
    }
  ];

  // Section 7: Comparison Items
  const comparisons = [
    {
      topic: "Product Launch Focus",
      traditional: "Focus purely on visual logos, slide decks, and creative mockups. No logistical coordination.",
      banega: "Coordinates design, chemical formulation, audited GMP laboratory procurement, and compliant packaging."
    },
    {
      topic: "End-To-End Framework",
      traditional: "Delivers assets and leaves the founder to negotiate certificates, trademarks, and shipping alone.",
      banega: "Governs everything from trademark class filing and GST to barcoding, Shopify flow, and retail lines."
    },
    {
      topic: "Manufacturing Ecosystem",
      traditional: "No certified manufacturer network. Relies on standard search engines or Google directory scraping.",
      banega: "Provides direct, pre-audited relationships with accredited formulation labs, bottle suppliers, and printers."
    },
    {
      topic: "Single Point Of Contact",
      traditional: "Founder must manage 5+ separate freelance designers, lawyers, laboratory managers, and web developers.",
      banega: "A single unified consultancy responsible for executing the complete timeline from molecule to market."
    },
    {
      topic: "Long-Term Partnership",
      traditional: "Project-based invoicing. Charges hourly premiums for basic feedback and design updates.",
      banega: "Strategic consultancy dedicated to creating structural brand value, continuous scale, and product integrity."
    }
  ];

  // Section 8: 6-Stage Framework
  const frameworkStages = [
    {
      num: "01",
      name: "Discovery & Validation",
      tagline: "Erase speculative risk before manufacturing.",
      desc: "We perform strict target market audits, review formula legalities, benchmark ingredient costs, and structure your pricing matrix to secure healthy margins.",
      points: ["High-margin category identification", "Consumer product benchmarking", "Initial chemistry & formula feasibility", "Detailed unit costing forecasts"],
      color: "from-amber-500 to-amber-600"
    },
    {
      num: "02",
      name: "Development & Sourcing",
      tagline: "Secure the physical product architecture.",
      desc: "We bridge the gap with accredited labs. We coordinate laboratory formulation testing, order customized packaging models, and guarantee physical sample approvals.",
      points: ["GMP lab match & ingredient vetting", "Custom component sourcing (french caps, vials)", "Iterative prototype manufacturing", "Quality assurance audits"],
      color: "from-orange-500 to-amber-500"
    },
    {
      num: "03",
      name: "Brand Creation",
      tagline: "Aesthetic mastery paired with clear messaging.",
      desc: "We shape your unique brand registry, craft high-prestige typography layout, formulate original stories, and construct premium boxes.",
      points: ["Memorability naming & registry", "Editorial color & typography systems", "Bespoke structural die-cut templates", "Compliant product labeling codes"],
      color: "from-purple-500 to-indigo-500"
    },
    {
      num: "04",
      name: "Launch Preparation",
      tagline: "Audit legal guardrails flawlessly.",
      desc: "No regulatory delays. We manage trademark registry filings, state drug compliance clearances, AYUSH laws, and standard retail barcodes.",
      points: ["Trademark Class & Trademark filing", "GST updates & licensing", "Regulatory approvals (FSSAI, Cosmetics Co)", "GS1 barcode allocation"],
      color: "from-red-500 to-orange-500"
    },
    {
      num: "05",
      name: "Launch",
      tagline: "Go live with extreme market prestige.",
      desc: "We deploy an elite digital storefront optimized for checkout, onboard your products on national marketplaces, and create gorgeous studio media.",
      points: ["Premium high-conversion Shopify layout", "Amazon & Nykaa marketplace setup", "High-luxury cosmetic studio photography", "Conversion path tracking optimization"],
      color: "from-blue-500 to-indigo-600"
    },
    {
      num: "06",
      name: "Growth & Scale",
      tagline: "ComRmand long-term market dominance.",
      desc: "Build continuous multi-channel volume. We formulate retail distribution systems, design corporate B2B catalogs, and assist in scale planning.",
      points: ["B2B & retail channel outreach", "High-ROAS marketing framework templates", "Continuous supply stream management", "Next-generation catalog expansion"],
      color: "from-emerald-500 to-teal-600"
    }
  ];

  // Section 11: Real Testimonials
  const videoTestimonials = [
    {
      id: 1,
      founder: 'Aditya Sen',
      brand: 'Soma Botanicals',
      industry: 'Modern Ayurveda',
      title: 'Batch Unboxing & Lab Check',
      quote: 'We had zero direct manufacturing networks. Banega Brand mapped our whole formula pathway, secured AYUSH compliance, and delivered luxury crystal dropper jars in under 45 days. Absolute operational mastery.',
      stat: 'Initial batch sold out'
    },
    {
      id: 2,
      founder: 'Priya Nair',
      brand: 'Éclat Scent Labs',
      industry: 'Luxury Perfume',
      title: 'Packaging & Weighted Caps Audit',
      quote: 'Getting French oils, custom weighted heavy magnetic caps, and high-end boxes seemed impossible for an indie startup. They did everything, including our Shopify checkout system, perfectly.',
      stat: '15,000+ units manufactured'
    }
  ];

  // Founder Expertise Stats
  const founderStats = [
    { id: 0, label: 'Product Launches', value: '120+', icon: Rocket },
    { id: 1, label: 'Brands Scaled', value: '80+', icon: TrendingUp },
    { id: 2, label: 'Product Strategy Hours', value: '5,000+', icon: BarChart3 },
    { id: 3, label: 'Founders Mentored', value: '200+', icon: Users },
  ];

  // Founder Expertise Areas
  const expertiseAreas = [
    { label: 'Product Strategy', icon: Target },
    { label: 'Product Management', icon: Briefcase },
    { label: 'Product Leadership', icon: Award },
    { label: 'Product Career Coaching', icon: GraduationCap },
  ];

  // Achievements Data
  const achievements = [
    {
      id: 0,
      title: '120+ Brands Launched',
      description: 'Successfully launched over 120 brands across cosmetics, Ayurveda, and clinical wellness sectors.',
      icon: Rocket,
      stat: '120+',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      id: 1,
      title: '100+ Manufacturing Partners',
      description: 'Vetted network of accredited GMP and ISO certified manufacturing facilities across India.',
      icon: Factory,
      stat: '100+',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      id: 2,
      title: '80+ Brands Scaled',
      description: 'Successfully scaled over 80 brands from launch to sustainable growth and market dominance.',
      icon: TrendingUp,
      stat: '80+',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 3,
      title: '200+ Founders Mentored',
      description: 'Empowered over 200 founders with product strategy, leadership, and business growth guidance.',
      icon: Users,
      stat: '200+',
      color: 'from-amber-500 to-orange-600'
    },
    {
      id: 4,
      title: '5,000+ Strategy Hours',
      description: 'Delivered over 5,000 hours of product strategy consulting and leadership development.',
      icon: Clock,
      stat: '5,000+',
      color: 'from-red-500 to-rose-600'
    },
    {
      id: 5,
      title: '4 Categories Served',
      description: 'Successfully completed formulation audits across Ayurveda, Fragrance, Clinical Cosmetics, and Pet Wellness.',
      icon: Globe,
      stat: '4',
      color: 'from-cyan-500 to-blue-600'
    }
  ];

  // Why Choose Us Data
  const whyChooseUs = [
    {
      id: 0,
      title: 'End-to-End Execution',
      description: 'From formulation to marketplace, we handle every aspect of your product launch journey.',
      icon: Layers
    },
    {
      id: 1,
      title: 'Manufacturing Expertise',
      description: 'Direct access to pre-audited GMP laboratories and certified manufacturing facilities.',
      icon: Factory
    },
    {
      id: 2,
      title: 'Regulatory Compliance',
      description: 'Expert handling of trademarks, GST, FSSAI, AYUSH, and all legal compliance requirements.',
      icon: ShieldCheck
    },
    {
      id: 3,
      title: 'Single Point of Contact',
      description: 'One unified consultancy responsible for your complete product launch timeline.',
      icon: Users
    },
    {
      id: 4,
      title: 'Cost Transparency',
      description: 'No hidden charges. Clear, upfront pricing with complete cost breakdown for every stage.',
      icon: Eye
    },
    {
      id: 5,
      title: 'Long-Term Partnership',
      description: 'We stay with you beyond launch, supporting your growth and scaling journey.',
      icon: Heart
    }
  ];

  return (
    <div className="relative bg-[#FAFAFA] text-[#111111] selection:bg-[#D97706] selection:text-white min-h-screen overflow-hidden font-sans">
      <Helmet>
        <title>About Mayank Tiwari & Banega Brand | India's Leading Product Launch Company</title>
        <meta name="description" content="Learn about Mayank Tiwari and Banega Brand: India's leading Product Launch Company and D2C brand consultancy with 215+ launched brands across India." />
        <meta name="keywords" content="About Mayank Tiwari, Banega Brand Founder, Product Launch Consultant India, D2C Mentor India, Brand Strategy Expert" />
        <link rel="canonical" href="https://banegabrand.com/about" />
        <meta property="og:title" content="About Mayank Tiwari & Banega Brand | India's Leading Product Launch Company" />
        <meta property="og:description" content="India's leading Product Launch Company with 215+ brand launches across India." />
        <meta property="og:url" content="https://banegabrand.com/about" />
      </Helmet>
      <Navbar />

      {/* Decorative ambient lights */}
      <div className="absolute top-0 inset-x-0 h-[500px] bg-[radial-gradient(ellipse_at_top,rgba(217,119,6,0.03),transparent_50%50%)] pointer-events-none z-0" />

      {/* ================= SECTION 1: HERO SECTION ================= */}
      <section id="hero" className="relative pt-32 pb-16 md:pt-44 md:pb-28 px-6 z-10 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-8 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#EAEAEA] shadow-sm rounded-full font-black text-[10px] uppercase tracking-[0.3em] text-[#D97706]">
                <Sparkles size={12} className="text-[#D97706]" />
                ABOUT BANEGA BRAND
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-7xl font-sans font-black tracking-tight uppercase leading-[0.9] text-[#111111]">
                  INDIA'S NO.1 <br />
                  <span className="text-[#D97706] italic font-serif font-light lowercase">product launch</span> <br />
                  <span className="text-zinc-400 font-light">COMPANY</span>
                </h1>
              </div>
              <div className="space-y-6 max-w-2xl text-[#666666] font-semibold text-base md:text-lg leading-relaxed">
                <p>
                  At Banega Brand, we believe every great product deserves a powerful launch and a memorable brand identity.
                </p>
                <p className="text-sm font-medium text-zinc-500">
                  We specialize in transforming innovative ideas into market-leading brands through strategic planning, creative branding, and data-driven marketing solutions.
                </p>
              </div>
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  onClick={handleScrollToContact}
                  className="px-8 py-5 bg-[#D97706] hover:bg-[#111111] text-white transition-all duration-300 font-extrabold text-xs uppercase tracking-widest rounded-2xl inline-flex items-center gap-2 shadow-sm hover:shadow active:scale-95 cursor-pointer leading-none"
                >
                  BOOK A STRATEGY CALL <ArrowRight size={14} className="text-white" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="w-full max-w-[420px] aspect-[4/5] rounded-[48px] bg-white border border-[#EAEAEA] shadow-md p-8 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute inset-0 bg-[#FAFAFA] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(217,119,6,0.03),transparent_50%)] pointer-events-none" />
                <div className="flex justify-between items-center border-b border-zinc-150 pb-4 relative z-10">
                  <span className="text-[10px] font-black tracking-widest uppercase text-zinc-400">PARTNER BLUEPRINT INDEX</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#D97706]/20 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D97706] animate-pulse" />
                  </div>
                </div>
                <div className="py-6 flex-1 flex flex-col justify-center items-center relative z-10">
                  <svg className="w-48 h-48 overflow-visible" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5" />
                    <circle cx="50" cy="50" r="28" fill="none" stroke="rgba(217,119,6,0.06)" strokeWidth="1" strokeDasharray="3,3" />
                    <circle cx="50" cy="50" r="16" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="0.5" />
                    <path d="M20 75 Q 35 45, 50 45 T 80 15" fill="none" stroke="#EAEAEA" strokeWidth="1.5" />
                    <path d="M20 75 Q 35 45, 50 45 T 80 15" fill="none" stroke="#D97706" strokeWidth="2.5" strokeDasharray="120" className="animate-[dash_3s_ease-in-out_infinite_alternate]" />
                    <circle cx="50" cy="45" r="3" fill="#D97706" />
                    <circle cx="80" cy="15" r="4" fill="#111111" />
                    <circle cx="20" cy="75" r="3" fill="rgba(0,0,0,0.1)" />
                    <text x="52" y="41" fontSize="4.5" fontWeight="900" fill="#D97706" fontFamily="sans-serif">LAUNCH SLA</text>
                    <text x="83" y="12" fontSize="4" fontWeight="900" fill="#111111" fontFamily="sans-serif">MARKET 2026</text>
                    <text x="13" y="82" fontSize="3.5" fontWeight="700" fill="#666666" fontFamily="sans-serif">CONCEPT</text>
                  </svg>
                  <div className="flex gap-2 mt-4 flex-wrap justify-center">
                    <span className="text-[8px] font-black border border-[#EAEAEA] px-2 py-0.5 rounded bg-white text-[#666666] tracking-wider uppercase">VALIDATION</span>
                    <span className="text-[8px] font-black border border-[#EAEAEA] px-2 py-0.5 rounded bg-white text-[#666666] tracking-wider uppercase font-mono">GMP SOURCING</span>
                    <span className="text-[8px] font-black border border-[#EAEAEA] px-2 py-0.5 rounded bg-white text-[#666666] tracking-wider uppercase">BARCODING</span>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 border-t border-[#EAEAEA] pt-4 mt-2 relative z-10">
                  <div>
                    <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest block">LAUNCH CONSULTANCY</span>
                    <span className="text-sm font-black tracking-tighter text-[#111111] uppercase">BANEGA CORE</span>
                  </div>
                  <div className="text-right">
                    <span className="text-[8px] font-black text-zinc-400 uppercase tracking-widest block">AUDITED NETWORK</span>
                    <span className="text-sm font-black tracking-tighter text-[#D97706] uppercase">GMP SECURE</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-[#D97706]/3 rounded-full blur-[70px] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: VISION & MISSION ================= */}
      <section id="vision-mission" className="bg-white py-24 md:py-32 px-6 border-b border-[#EAEAEA] scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D97706] block">
              OUR FOUNDATION
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
              Vision & <br />
              <span className="text-[#D97706]">Mission</span>
            </h2>
            <div className="w-12 h-1 bg-[#D97706] mx-auto rounded-full mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
            {/* Mission Column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#FAFAFA] rounded-[40px] p-10 md:p-14 border border-[#EAEAEA] relative overflow-hidden group hover:border-[#D97706]/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D97706]/3 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#D97706]/5 transition-all duration-700" />
              
              <div className="relative z-10 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#D97706]/10 rounded-2xl">
                    <Target size={24} className="text-[#D97706]" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D97706]">OUR MISSION</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-[#111111] leading-[1.1]">
                  Transform Ideas Into <br />
                  <span className="text-[#D97706]">Market-Leading Brands</span>
                </h3>

                <div className="space-y-4 text-[#666666] font-semibold text-sm leading-relaxed">
                  <p>
                    At Banega Brand, we believe every great product deserves a powerful launch and a memorable brand identity. As India's No.1 Product Launch Company, we specialize in transforming innovative ideas into market-leading brands through strategic planning, creative branding, and data-driven marketing solutions.
                  </p>
                  <p>
                    Our expertise spans product launches, brand development, digital marketing, and growth strategies designed to help businesses stand out in competitive markets. We work closely with startups, entrepreneurs, and established companies to create impactful launch campaigns that drive visibility, customer engagement, and long-term success.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-black uppercase tracking-widest">
                  <span className="text-[#D97706]">✓ Excellence</span>
                  <span className="text-zinc-300">|</span>
                  <span className="text-[#D97706]">✓ Innovation</span>
                  <span className="text-zinc-300">|</span>
                  <span className="text-[#D97706]">✓ Measurable Results</span>
                </div>
              </div>
            </motion.div>

            {/* Vision Column */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="bg-[#111111] rounded-[40px] p-10 md:p-14 border border-[#2a2a2a] relative overflow-hidden group hover:border-[#D97706]/30 transition-all duration-500"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D97706]/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#D97706]/10 transition-all duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#D97706]/3 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative z-10 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#D97706]/20 rounded-2xl">
                    <Eye size={24} className="text-[#D97706]" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D97706]">OUR VISION</span>
                </div>

                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white leading-[1.1]">
                  Build Brands That <br />
                  <span className="text-[#D97706]">Inspire Trust & Achieve Growth</span>
                </h3>

                <div className="space-y-4 text-zinc-400 font-semibold text-sm leading-relaxed">
                  <p>
                    Under the leadership of Mayank Tiwari, Banega Brand is committed to delivering excellence, innovation, and measurable results—helping businesses build brands that inspire trust and achieve sustainable growth.
                  </p>
                  <p>
                    We envision a future where every entrepreneur has access to world-class product launch expertise, enabling them to compete globally and build lasting brand legacies.
                  </p>
                </div>

                <div className="pt-4 flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-300">
                    Trust
                  </span>
                  <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-300">
                    Innovation
                  </span>
                  <span className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest text-zinc-300">
                    Excellence
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: ACHIEVEMENTS ================= */}
      <section id="achievements" className="bg-[#FAFAFA] py-24 md:py-32 px-6 border-b border-[#EAEAEA] scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D97706] block">
              OUR TRACK RECORD
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
              Our <br />
              <span className="text-[#D97706]">Achievements</span>
            </h2>
            <p className="text-[#666666] font-semibold text-sm max-w-xl mx-auto">
              Numbers that speak volumes about our commitment to excellence and client success.
            </p>
            <div className="w-12 h-1 bg-[#D97706] mx-auto rounded-full mt-4" />
          </div>

          {/* Achievement Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => {
              const Icon = achievement.icon;
              const isHovered = hoveredAchievement === achievement.id;
              return (
                <motion.div
                  key={achievement.id}
                  onMouseEnter={() => setHoveredAchievement(achievement.id)}
                  onMouseLeave={() => setHoveredAchievement(null)}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: achievement.id * 0.1 }}
                  className={`bg-white rounded-[32px] p-8 border-2 transition-all duration-500 relative overflow-hidden group ${
                    isHovered 
                      ? 'border-[#D97706]/40 shadow-xl scale-[1.02]' 
                      : 'border-[#EAEAEA] hover:shadow-lg'
                  }`}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className={`p-4 rounded-2xl w-fit mb-4 transition-all duration-300 ${
                    isHovered ? 'bg-[#D97706]' : 'bg-[#D97706]/10'
                  }`}>
                    <Icon className={`w-6 h-6 ${isHovered ? 'text-white' : 'text-[#D97706]'}`} />
                  </div>

                  {/* Stat Number */}
                  <div className="text-4xl md:text-5xl font-black text-[#111111] tracking-tighter">
                    {achievement.stat}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-[#111111] uppercase tracking-tight mt-2">
                    {achievement.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#666666] font-semibold mt-2 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* Hover Decorative Line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${achievement.color} transition-all duration-500 ${
                    isHovered ? 'w-full' : 'w-0'
                  }`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: WHY CHOOSE US ================= */}
      <section id="why-choose-us" className="bg-white py-24 md:py-32 px-6 border-b border-[#EAEAEA] scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D97706] block">
              WHY BANEGA BRAND
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
              Why <br />
              <span className="text-[#D97706]">Choose Us</span>
            </h2>
            <p className="text-[#666666] font-semibold text-sm max-w-xl mx-auto">
              The competitive advantage that makes us India's most trusted product launch partner.
            </p>
            <div className="w-12 h-1 bg-[#D97706] mx-auto rounded-full mt-4" />
          </div>

          {/* Why Choose Us Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="bg-[#FAFAFA] rounded-[28px] p-8 border border-[#EAEAEA] hover:border-[#D97706]/30 transition-all duration-300 group hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#D97706]/10 rounded-2xl group-hover:bg-[#D97706] transition-all duration-300 shrink-0">
                      <Icon className="w-5 h-5 text-[#D97706] group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-sm font-black text-[#111111] uppercase tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#666666] font-semibold leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Trust Badge */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#D97706]/5 border border-[#D97706]/20 rounded-full">
              <BadgeCheck className="w-5 h-5 text-[#D97706]" />
              <span className="text-xs font-black uppercase tracking-widest text-[#D97706]">
                India's No.1 Product Launch Company — Trusted by 120+ Brands
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 5: WHY BANEGA BRAND EXISTS ================= */}
      <section className="bg-white py-24 md:py-32 px-6 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-4">
              THE ROOT PROBLEM
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black text-[#111111] tracking-tight uppercase leading-[0.95]">
              Most founders don't fail because they lack ambition. <br />
              <span className="text-zinc-400 font-light">They fail because they lack clarity.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6 text-[#666666] text-sm md:text-base font-semibold leading-relaxed text-left">
              <p>
                Over the years, we observed the same frustrating pattern repeat across India's startup ecosystem. Talented, high-ambition founders had beautiful ideas for perfumes, cosmetics, wellness oils, or pet elixirs.
              </p>
              <p>
                But they hit a brick wall immediately. Choosing the right formulation, negotiating with secretive manufacturers, understanding compliance structures, obtaining drug licenses, preparing packaging die-cuts, and structuring high-intent checkouts required multi-channel coordination.
              </p>
              <p className="p-5 border-l-2 border-[#D97706] bg-[#FAFAFA] rounded-r-2xl italic font-serif font-light text-base text-[#111111]">
                "The market offers fragmented solutions. One vendor for design. Another for packaging. Another for compliance. No one owned the complete journey."
              </p>
              <p className="text-xs text-zinc-400 font-bold">
                Banega Brand was created to solve this. To give creators, executives, and family heirs a single execution partner, guiding them from chemical molecule to final marketplace checkout with total operational certainty.
              </p>
            </div>

            <div className="lg:col-span-7 bg-[#FAFAFA] border border-[#EAEAEA] rounded-[36px] p-8 md:p-10 space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D97706]/2 rounded-full blur-[50px] pointer-events-none" />
              <div className="flex justify-between items-center border-b border-[#EAEAEA] pb-4">
                <span className="text-[10px] font-black tracking-widest uppercase text-zinc-400">DEVELOPMENT TIMELINE LOOP</span>
                <span className="text-[9px] font-black text-red-500 uppercase flex items-center gap-1">
                  <AlertTriangle size={10} /> OLD FRAGMENTATION
                </span>
              </div>
              <div className="space-y-6 font-sans">
                <div className="relative pl-8 border-l border-red-200 space-y-2 text-left">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-red-500 rounded-full border border-white" />
                  <span className="text-[9px] font-mono font-black text-red-500 uppercase tracking-widest block">STAGE 01 — THE PATTERN PROBLEM</span>
                  <h4 className="text-sm font-black text-[#111111] uppercase tracking-tight">Struggling Single-Handed</h4>
                  <p className="text-xs text-[#666666] font-medium leading-relaxed">
                    Founders waste 6+ months trying to find validated manufacturers, ordering sub-par chemical samples, and guessing AYUSH/FSSAI licensing prerequisites.
                  </p>
                </div>
                <div className="relative pl-8 border-l border-amber-300 space-y-2 text-left">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-amber-500 rounded-full border border-white" />
                  <span className="text-[9px] font-mono font-black text-amber-500 uppercase tracking-widest block">STAGE 02 — THE OBSERVATION GAP</span>
                  <h4 className="text-sm font-black text-[#111111] uppercase tracking-tight">Fragmented Agency Overhead</h4>
                  <p className="text-xs text-[#666666] font-medium leading-relaxed">
                    Hiring creative design boutiques who have never been inside a manufacturing plant results in unbuildable structures, lost deposits, and delayed timelines.
                  </p>
                </div>
                <div className="relative pl-8 border-l border-emerald-400 space-y-2 text-left">
                  <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 bg-emerald-500 rounded-full border border-white" />
                  <span className="text-[9px] font-mono font-black text-emerald-600 uppercase tracking-widest block">STAGE 03 — THE ADVANTAGE</span>
                  <h4 className="text-sm font-black text-[#111111] uppercase tracking-tight">Banega Brand Single Source</h4>
                  <p className="text-xs text-zinc-600 font-semibold leading-relaxed">
                    A dedicated consulting machinery executing formulation sourcing, packaging manufacturing, trademarking, and marketplace onboarding simultaneously.
                  </p>
                </div>
              </div>
              <div className="bg-white border border-[#EAEAEA] p-4 rounded-2xl flex items-center justify-between text-[10px] font-black uppercase text-zinc-400 tracking-widest">
                <span>ESTIMATED TIME SAVED:</span>
                <span className="text-emerald-600 flex items-center gap-1 bg-emerald-50 px-2.5 py-1 rounded">
                  <Zap size={11} className="fill-current" /> ~180 BUSINESS DAYS
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 6: MEET THE FOUNDER ================= */}
      <section id="founder" className="bg-[#FAFAFA] py-24 md:py-36 px-6 border-b border-[#EAEAEA] scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 md:mb-24 text-left">
            <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#D97706] block mb-4">
              THE INTENTIONAL ARCHITECT
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7.5xl font-sans font-black tracking-tight uppercase leading-[0.95] text-[#111111]">
              Meet <br />
              <span className="text-[#D97706] italic font-serif font-light lowercase">mayank tiwari</span>
            </h2>
            <p className="text-lg font-bold text-[#666666] mt-4">
              Founder & CEO, Banega Brand
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            <div className="lg:col-span-7 space-y-8 text-left flex flex-col justify-between">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-[32px] overflow-hidden bg-gradient-to-br from-[#D97706]/10 to-[#111111]/5 border border-[#EAEAEA] flex items-center justify-center group"
              >
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(217,119,6,0.05),transparent_70%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
                <div className="relative z-10 flex flex-col items-center justify-center p-8 text-center">
                  <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-[#111111] flex items-center justify-center border-4 border-[#D97706]/20 shadow-2xl mb-4 overflow-hidden">
                    <img
                      src={mayankImg}
                      alt="Mayank Tiwari"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-black text-[#111111]">Mayank Tiwari</h3>
                    <p className="text-sm font-semibold text-[#D97706]">Founder & CEO, Banega Brand</p>
                  </div>
                </div>
                <div className="absolute -bottom-20 -right-20 w-64 h-64 border-2 border-[#D97706]/5 rounded-full" />
                <div className="absolute -top-10 -left-10 w-32 h-32 border-2 border-[#D97706]/3 rounded-full" />
              </motion.div>

              <div className="space-y-6">
                <h3 className="text-2xl md:text-3.5xl font-sans font-black text-[#111111] uppercase tracking-tight">
                  A Highly Accomplished Product Coach & Consultant
                </h3>
                <div className="space-y-4 text-[#666666] font-semibold text-sm md:text-base leading-relaxed">
                  <p>
                    Mayank Tiwari is a highly accomplished <strong className="text-[#111111]">Product Coach</strong>, <strong className="text-[#111111]">Product Management Expert</strong>, and <strong className="text-[#111111]">Product Consultant</strong> with extensive experience in helping businesses and professionals achieve product excellence.
                  </p>
                  <p>
                    As the Founder & CEO of Banega Brand, he specializes in <strong className="text-[#111111]">Product Strategy</strong>, innovation, and market-driven growth, enabling organizations to build impactful products and successful brands.
                  </p>
                  <p>
                    Recognized as a trusted <strong className="text-[#111111]">Product Strategy Coach</strong> and <strong className="text-[#111111]">Product Leadership Mentor</strong>, Mayank has guided startups, entrepreneurs, and corporate teams in developing winning product strategies and scalable business models.
                  </p>
                  <p className="text-[#111111] font-bold text-sm">
                    His expertise in Product Manager Training, strategic consulting, and leadership development has established him as a leading <span className="text-[#D97706]">Product Expert</span>, <span className="text-[#D97706]">Product Career Coach</span>, and <span className="text-[#D97706]">Product Management Consultant in India</span>, committed to empowering the next generation of product leaders and driving sustainable business success.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                {founderStats.map((stat) => {
                  const Icon = stat.icon;
                  const isHovered = hoveredFounderStat === stat.id;
                  return (
                    <motion.div
                      key={stat.id}
                      onMouseEnter={() => setHoveredFounderStat(stat.id)}
                      onMouseLeave={() => setHoveredFounderStat(null)}
                      className={`p-4 rounded-2xl border transition-all duration-300 text-center ${
                        isHovered 
                          ? 'bg-[#D97706] border-[#D97706] text-white shadow-lg scale-105' 
                          : 'bg-white border-[#EAEAEA] text-[#111111]'
                      }`}
                    >
                      <Icon className={`w-5 h-5 mx-auto mb-1 ${isHovered ? 'text-white' : 'text-[#D97706]'}`} />
                      <span className={`text-xl font-black block ${isHovered ? 'text-white' : 'text-[#111111]'}`}>
                        {stat.value}
                      </span>
                      <span className={`text-[9px] font-black uppercase tracking-wider ${isHovered ? 'text-white/80' : 'text-zinc-400'}`}>
                        {stat.label}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5 bg-white border border-[#EAEAEA] rounded-[48px] p-8 md:p-10 flex flex-col justify-between relative shadow-sm text-left">
              <div className="absolute inset-0 bg-[#FAFAFA] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />
              <div className="space-y-6 relative z-10">
                <span className="text-[9px] font-black tracking-widest uppercase text-[#D97706]">EXPERTISE & SPECIALIZATION</span>
                <div className="grid grid-cols-2 gap-3">
                  {expertiseAreas.map((area, idx) => {
                    const Icon = area.icon;
                    return (
                      <div key={idx} className="bg-[#FAFAFA] border border-[#EAEAEA] rounded-xl p-3 text-center hover:border-[#D97706]/30 transition-all duration-300 group">
                        <Icon className="w-4 h-4 text-[#D97706] mx-auto mb-1 group-hover:scale-110 transition-transform" />
                        <span className="text-[9px] font-black uppercase tracking-wider text-[#111111]">
                          {area.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
                <div className="space-y-5 pt-4 border-t border-[#EAEAEA]">
                  <div className="border-l border-zinc-200 pl-6 space-y-1 relative">
                    <div className="absolute -left-1 w-2 h-2 rounded-full bg-[#D97706]" />
                    <span className="text-[10px] font-black text-[#D97706] tracking-widest font-mono">2020 - 2023</span>
                    <h4 className="text-xs font-black uppercase text-[#111111]">Strategic Brand Advisory</h4>
                    <p className="text-[11px] text-[#666666] font-semibold leading-relaxed">
                      Consulted and evaluated structural supply chains and formulations across leading domestic wellness labels.
                    </p>
                  </div>
                  <div className="border-l border-zinc-200 pl-6 space-y-1 relative">
                    <div className="absolute -left-1 w-2 h-2 rounded-full bg-[#111111]" />
                    <span className="text-[10px] font-black text-[#D97706] tracking-widest font-mono">2024</span>
                    <h4 className="text-xs font-black uppercase text-[#111111]">Created Banega Brand</h4>
                    <p className="text-[11px] text-[#666666] font-semibold leading-relaxed">
                      Restructured the entire consultancy process to offer direct factory/lab access, eliminating middleman markup.
                    </p>
                  </div>
                  <div className="border-l border-zinc-200 pl-6 space-y-1 relative">
                    <div className="absolute -left-1 w-2 h-2 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-black text-emerald-600 tracking-widest font-mono">2025 - 2026</span>
                    <h4 className="text-xs font-black uppercase text-[#111111]">National Expansion Cohort</h4>
                    <p className="text-[11px] text-[#666666] font-semibold leading-relaxed">
                      Safeguarded 120+ micro-brand setups spanning Ayurveda, Fragrance, Clinical Cosmetics, and Pet Wellness.
                    </p>
                  </div>
                </div>
                <div className="bg-[#D97706]/5 border border-[#D97706]/10 rounded-2xl p-4 flex items-center gap-3 mt-2">
                  <Medal className="w-6 h-6 text-[#D97706] shrink-0" />
                  <div>
                    <span className="text-[9px] font-black uppercase text-[#D97706] tracking-wider block">Recognized Leader</span>
                    <span className="text-[10px] font-bold text-[#111111]">Product Management Consultant in India</span>
                  </div>
                </div>
              </div>
              <div className="border-t border-[#EAEAEA] pt-6 mt-6 flex items-center justify-between relative z-10 text-[9px] font-black uppercase tracking-widest text-zinc-400">
                <span>BANEGA BRAND LABS</span>
                <span className="text-emerald-600">FOUNDER LOCK ACTIVE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 7: THE PRINCIPLES ================= */}
      <section className="bg-white py-24 md:py-32 px-6 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D97706] block">
              THE ETHICAL CODE OR MACHINERY
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
              The Principles Behind <br />
              <span className="text-[#D97706]">Every Single Launch</span>
            </h2>
            <div className="w-12 h-1 bg-[#D97706] mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {principles.map((pr) => {
              const IconComponent = pr.icon;
              const isHovered = hoveredPrinciple === pr.id;
              return (
                <div
                  key={pr.id}
                  onMouseEnter={() => setHoveredPrinciple(pr.id)}
                  onMouseLeave={() => setHoveredPrinciple(null)}
                  className={`p-6 bg-[#FAFAFA] border-2 rounded-[32px] transition-all duration-300 flex flex-col justify-between min-h-[310px] text-left relative overflow-hidden group shadow-sm ${
                    isHovered ? 'border-[#D97706]/40 bg-white shadow-md' : 'border-transparent'
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-[8px] font-mono font-black text-zinc-400">
                      <span>0{pr.id + 1}</span>
                      <span className={`px-2 py-0.5 rounded ${isHovered ? 'bg-[#D97706] text-white' : 'bg-white'}`}>
                        {pr.tag}
                      </span>
                    </div>
                    <div className={`p-3 bg-white shadow-inner rounded-2xl w-fit border border-[#EAEAEA] text-[#D97706] transition-all ${
                      isHovered ? 'bg-[#D97706] text-white border-transparent' : ''
                    }`}>
                      <IconComponent size={18} className={isHovered ? 'text-white' : 'text-[#D97706]'} />
                    </div>
                    <h3 className="text-base font-black tracking-tight text-[#111111] uppercase">
                      {pr.title}
                    </h3>
                  </div>
                  <div className="space-y-2 mt-4">
                    <p className="text-[11px] font-black text-[#D97706] leading-snug italic font-serif">
                      "{pr.quote}"
                    </p>
                    <p className="text-[11px] font-semibold text-[#666666] leading-relaxed">
                      {pr.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 8: WHY FOUNDERS CHOOSE ================= */}
      <section className="bg-[#FAFAFA] py-24 md:py-32 px-6 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mb-16 text-left space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D97706] block">
              THE COMPETITIVE DISTINCTION
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-7.5xl font-sans font-black text-[#111111] uppercase tracking-tight leading-none">
              Why Founders Choose <br />
              <span className="text-[#D97706] italic font-serif font-light lowercase">banega brand consultancy</span>
            </h2>
          </div>
          <div className="bg-white border border-[#EAEAEA] rounded-[40px] shadow-sm overflow-hidden text-left">
            <div className="grid grid-cols-1 md:grid-cols-12 bg-zinc-900 text-white p-6 gap-4 text-xs font-black uppercase tracking-widest">
              <div className="md:col-span-3 text-[#D97706]">STRATEGIC ADVANTAGE</div>
              <div className="md:col-span-4 text-zinc-400">TRADITIONAL CLIENT PATHWAY</div>
              <div className="md:col-span-5 text-[#D97706] flex items-center gap-1.5">
                <Sparkles size={12} className="text-[#D97706]" /> BANEGA SYSTEM METHODOLOGY
              </div>
            </div>
            <div className="divide-y divide-[#EAEAEA] font-sans">
              {comparisons.map((row, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-6 md:p-8 gap-4 items-start hover:bg-zinc-50/60 transition-colors">
                  <div className="md:col-span-3 text-sm font-black text-[#111111] uppercase tracking-tight">
                    {row.topic}
                  </div>
                  <div className="md:col-span-4 text-xs font-semibold text-[#666666] leading-relaxed pr-4">
                    {row.traditional}
                  </div>
                  <div className="md:col-span-5 text-xs font-semibold text-[#111111] leading-relaxed bg-[#D97706]/5 border border-[#D97706]/10 p-5 rounded-2xl flex gap-3">
                    <CheckCircle2 size={16} className="text-[#D97706] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-black text-[#D97706] block mb-1 text-[10px] uppercase tracking-widest">EXECUTION GUARANTEED</span>
                      {row.banega}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-[#FAFAFA] p-6 text-center border-t border-[#EAEAEA] text-[10px] font-black text-zinc-400 tracking-widest">
              ESTM 2026 COMPARISON LOCKS
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 9: 6-STAGE FRAMEWORK ================= */}
      <section className="bg-white py-24 md:py-32 px-6 border-b border-[#EAEAEA] relative overflow-hidden">
        <div className="absolute inset-0 bg-[#FAFAFA] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:32px_32px] opacity-40 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl mb-16 md:mb-20 text-left space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D97706] block">
              THE PROVEN FORMULA
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-7.5xl font-sans font-black text-[#111111] uppercase tracking-tight leading-none">
              The Banega <br />
              <span className="text-[#D97706]">Brand Framework</span>
            </h2>
            <p className="text-[#666666] font-semibold text-sm md:text-base max-w-xl">
              An interactive operational roadmap meticulously constructed to clear legal, physical, and digital launches in a precise timeline of 45 days.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-3">
              {frameworkStages.map((stage, idx) => {
                const isActive = activeStage === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => setActiveStage(idx)}
                    onMouseEnter={() => setActiveStage(idx)}
                    className={`w-full text-left p-6 rounded-[28px] border transition-all duration-300 flex items-center justify-between font-sans ${
                      isActive 
                        ? 'bg-[#111111] text-white border-[#111111] shadow-md scale-[1.01]' 
                        : 'bg-white text-[#111111] border-[#EAEAEA] hover:bg-zinc-50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`text-[10px] font-black uppercase tracking-widest px-2.5 py-1.5 rounded-full ${
                        isActive ? 'bg-[#D97706] text-white' : 'bg-zinc-100 text-[#D97706]'
                      }`}>
                        STAGE {stage.num}
                      </span>
                      <div>
                        <span className="text-base font-black tracking-tight uppercase block leading-none">
                          {stage.name}
                        </span>
                      </div>
                    </div>
                    <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? 'translate-x-1 text-[#D97706]' : 'text-zinc-300'}`} />
                  </button>
                );
              })}
            </div>
            <div className="lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white border-2 border-[#D97706]/10 rounded-[44px] p-8 md:p-12 shadow-sm relative overflow-hidden flex flex-col justify-between min-h-[440px] text-left"
                >
                  <div className={`absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br ${frameworkStages[activeStage].color} rounded-full blur-[80px] opacity-[0.05] pointer-events-none`} />
                  <div className="space-y-8 relative z-10">
                    <div className="flex justify-between items-center border-b border-[#EAEAEA] pb-6">
                      <div className="space-y-1">
                        <span className="text-[10px] font-black uppercase text-[#D97706] tracking-widest block">OPERATIONAL PLAYBOOK</span>
                        <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#111111]">
                          {frameworkStages[activeStage].name}
                        </h3>
                      </div>
                      <span className="text-5xl font-sans font-black text-zinc-100 tracking-tighter">
                        PHASE {frameworkStages[activeStage].num}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <p className="text-[#111111] font-black text-base uppercase tracking-tight">
                        {frameworkStages[activeStage].tagline}
                      </p>
                      <p className="text-[#666666] font-semibold text-sm leading-relaxed">
                        {frameworkStages[activeStage].desc}
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[#EAEAEA]">
                      {frameworkStages[activeStage].points.map((point, k) => (
                        <div key={k} className="flex gap-2.5 items-center">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#D97706] shrink-0" />
                          <span className="text-xs font-black tracking-tight uppercase text-zinc-800">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-12 pt-6 border-t border-[#EAEAEA] flex justify-between items-center text-[10px] font-black tracking-widest text-zinc-400 font-mono relative z-10">
                    <span>TIMELINE target: 45 DAYS SLA</span>
                    <span className="text-[#D97706] flex items-center gap-1">
                      <Activity size={10} className="text-[#D97706]" /> AUDITED LAUNCH STREAM
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 10: WHO WE WORK WITH ================= */}
      <section className="bg-[#FAFAFA] py-24 md:py-32 px-6 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D97706] block">
              COHORT VETTING
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-sans font-black tracking-tight text-[#111111] uppercase leading-none">
              Who We Work With <br />
              <span className="text-[#D97706]">And Who We Don't</span>
            </h2>
            <div className="w-12 h-1 bg-[#D97706] mx-auto rounded-full mt-4" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="bg-white border-2 border-emerald-500/10 rounded-[38px] p-8 md:p-10 flex flex-col justify-between text-left relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/[0.015] rounded-full blur-[80px] pointer-events-none" />
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#111111]">IDEAL FOR BANEGA BRAND COHORT</span>
                  </div>
                  <span className="text-[10.5px] font-black text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded tracking-wide text-xs">HIGH FIT</span>
                </div>
                <p className="text-sm font-semibold text-[#666666] leading-relaxed">
                  We look for ambitious partners who are ready to commit capital, focus, and integrity to launch physical businesses. You fit our ideal outline if you are:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3.5 gap-x-6 pt-4 border-t border-[#EAEAEA]">
                  <div className="space-y-1">
                    <span className="text-[10px] font-black font-mono text-emerald-600 uppercase">PROFILE 01</span>
                    <h5 className="text-[13px] font-black uppercase text-[#111111]">First-Time Entrepreneurs</h5>
                    <p className="text-[11px] text-[#666666] leading-relaxed">Highly ambitious pioneers with physical concept goals.</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black font-mono text-emerald-600 uppercase">PROFILE 02</span>
                    <h5 className="text-[13px] font-black uppercase text-[#111111]">Working Professionals</h5>
                    <p className="text-[11px] text-[#666666] leading-relaxed">Executives looking to deploy capital secure systems side-by-side.</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black font-mono text-emerald-600 uppercase">PROFILE 03</span>
                    <h5 className="text-[13px] font-black uppercase text-[#111111]">D2C Founders</h5>
                    <p className="text-[11px] text-[#666666] leading-relaxed">Brand builders wanting to transition from simple traders to raw manufacturers.</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-black font-mono text-emerald-600 uppercase">PROFILE 04</span>
                    <h5 className="text-[13px] font-black uppercase text-[#111111]">Family Businesses</h5>
                    <p className="text-[11px] text-[#666666] leading-relaxed">Next-generation heirs wanting to modernize family chemical or herbal formulas.</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center text-[10px] font-black uppercase tracking-widest text-[#666666] border-t border-[#EAEAEA] pt-6 mt-8">
                <CheckCircle2 size={13} className="text-emerald-500" /> Active application queues open
              </div>
            </div>
            <div className="bg-white border border-[#EAEAEA] rounded-[38px] p-8 md:p-10 flex flex-col justify-between text-left relative overflow-hidden shadow-sm">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/[0.015] rounded-full blur-[80px] pointer-events-none" />
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-[#EAEAEA] pb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-zinc-400">NOT IDEAL CLIENT MATCH</span>
                  </div>
                  <span className="text-[10.5px] font-black text-red-600 bg-red-50 px-2.5 py-1 rounded tracking-wide text-xs">POOR FIT</span>
                </div>
                <p className="text-sm font-semibold text-zinc-430 leading-relaxed">
                  We are direct operational launch consultancies, not simple freelancers. We do not work with:
                </p>
                <div className="grid grid-cols-1 gap-4 pt-4 border-t border-[#EAEAEA]">
                  <div className="flex gap-3 items-start">
                    <XCircle size={15} className="text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-black uppercase text-[#111111] leading-none mb-1">People looking only for basic logo design</h5>
                      <p className="text-[11px] text-[#666666] leading-relaxed">We build complete operational companies. We don't sell random design mockups in isolation.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <XCircle size={15} className="text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-black uppercase text-[#111111] leading-none mb-1">People looking only for social media layouts</h5>
                      <p className="text-[11px] text-[#666666] leading-relaxed">We execute structural supply chains, packaging, and digital storefront builds. Not social media templates.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <XCircle size={15} className="text-zinc-400 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-sm font-black uppercase text-[#111111] leading-none mb-1">People seeking cheap shortcuts</h5>
                      <p className="text-[11px] text-[#666666] leading-relaxed">Compliance, ISO testing, premium manufacturing, and clean formulation take strict validation. We do not bypass safety.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center text-[10px] font-black uppercase tracking-widest text-zinc-400 border-t border-[#EAEAEA] pt-6 mt-8">
                <Info size={13} className="text-zinc-400" /> Preserving absolute brand integrity
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 11: TRUST SECTION ================= */}
      <section className="bg-white border-b border-[#EAEAEA] py-16 text-left">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-y md:divide-y-0 md:divide-x divide-zinc-200">
            <div className="space-y-2 pt-4 md:pt-0">
              <span className="text-4xl md:text-5xl font-black text-[#111111] tracking-tighter block font-sans">120+</span>
              <span className="text-[#D97706] text-[10px] font-sans font-black tracking-widest uppercase block">BRANDS LAUNCHED</span>
              <p className="text-[11px] text-[#666666] font-bold">Cohorts across cosmetics, Ayurveda, and clinical wellness.</p>
            </div>
            <div className="space-y-2 pt-4 md:pt-0 md:pl-8">
              <span className="text-4xl md:text-5xl font-black text-[#111111] tracking-tighter block font-sans">100+</span>
              <span className="text-[#D97706] text-[10px] font-sans font-black tracking-widest uppercase block">MANUFACTURING PARTNERS</span>
              <p className="text-[11px] text-[#666666] font-bold">Vetted, accredited GMP and ISO factories with scaling safety.</p>
            </div>
            <div className="space-y-2 pt-4 md:pt-0 md:pl-8">
              <span className="text-4xl md:text-5xl font-black text-[#111111] tracking-tighter block font-sans font-serif italic lowercase">multiple</span>
              <span className="text-[#D97706] text-[10px] font-sans font-black tracking-widest uppercase block">CATEGORIES SERVED</span>
              <p className="text-[11px] text-[#666666] font-bold">Successfully completed formulation audits across 4 main sectors.</p>
            </div>
            <div className="space-y-2 pt-4 md:pt-0 md:pl-8">
              <span className="text-4xl md:text-5xl font-black text-emerald-600 tracking-tighter block font-sans">6-Step</span>
              <span className="text-[#D97706] text-[10px] font-sans font-black tracking-widest uppercase block">LAUNCH FRAMEWORK</span>
              <p className="text-[11px] text-[#666666] font-bold">Unified pipeline structure from design to digital checkout system.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 12: TESTIMONIALS ================= */}
      <section className="bg-[#FAFAFA] py-24 md:py-32 px-6 border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 text-left space-y-4">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#D97706] block">REAL-WORLD METRIC PROOF</span>
            <h2 className="text-3xl md:text-5xl lg:text-7.5xl font-sans font-black text-[#111111] uppercase tracking-tight leading-none">
              Founders Who Trusted <br />
              <span className="text-[#D97706]">The Launch Machinery</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videoTestimonials.map((vid) => {
              const isPlaying = activeVideoId === vid.id;
              return (
                <div key={vid.id} className="bg-white rounded-[38px] border border-[#EAEAEA] p-6 md:p-8 flex flex-col justify-between min-h-[440px] text-left relative overflow-hidden shadow-sm">
                  <div className="flex justify-between items-center bg-[#FAFAFA] border border-[#EAEAEA] p-4 rounded-2xl mb-6">
                    <div>
                      <span className="text-xs font-black uppercase tracking-tight text-[#111111] block leading-none">{vid.founder}</span>
                      <span className="text-[9px] font-black text-[#D97706] tracking-widest uppercase block mt-1">Founder, {vid.brand}</span>
                    </div>
                    <span className="text-[9px] font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded uppercase">{vid.stat}</span>
                  </div>
                  <div 
                    onClick={() => setActiveVideoId(isPlaying ? null : vid.id)}
                    className="aspect-[16/9] w-full bg-[#111111] border border-zinc-800 rounded-2xl flex flex-col justify-between p-6 relative overflow-hidden group cursor-pointer"
                  >
                    <AnimatePresence mode="wait">
                      {isPlaying ? (
                        <motion.div 
                          key="playing"
                          initial={{ opacity: 0, scale: 0.96 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.96 }}
                          className="my-auto text-center p-3 relative z-10 space-y-2 bg-[#111111]/90 rounded-2xl border border-zinc-900 shadow-xl"
                        >
                          <p className="text-xs text-zinc-300 font-bold italic">"{vid.quote}"</p>
                        </motion.div>
                      ) : (
                        <div key="paused" className="my-auto flex flex-col items-center justify-center space-y-3 relative z-10 transition-transform group-hover:scale-105 duration-300">
                          <div className="w-14 h-14 bg-[#D97706] group-hover:bg-white text-white group-hover:text-[#111111] rounded-full flex items-center justify-center shadow-lg transition-colors">
                            <Play size={20} className="fill-current ml-1" />
                          </div>
                          <span className="text-[9px] font-black text-zinc-400 tracking-widest uppercase block">{vid.title}</span>
                        </div>
                      )}
                    </AnimatePresence>
                    <div className="flex justify-between items-center text-[8px] font-mono tracking-widest text-[#666666] relative z-10">
                      <span>MOCK STREAM CONNECT_PLAYER</span>
                      {isPlaying ? <span className="text-emerald-500 animate-pulse">● PLAYING SUBTITLES</span> : <span>TAP TO VIEW UNBOXING</span>}
                    </div>
                  </div>
                  <div className="border-t border-[#EAEAEA] pt-6 mt-6 flex justify-between items-center text-[10px] font-black text-zinc-400 tracking-widest">
                    <span className="flex items-center gap-1">
                      <Star size={12} className="text-[#D97706] fill-[#D97706]" /> VERIFIED AUDIT COMPLETE
                    </span>
                    <span>SLA PRECISE</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= SECTION 13: OPEN LETTER ================= */}
      <section className="bg-white py-24 md:py-36 px-6 border-b border-[#EAEAEA] relative overflow-hidden">
        <div className="absolute top-1/2 left-[10%] w-72 h-72 bg-[#D97706]/2 rounded-full blur-[90px] pointer-events-none" />
        <div className="max-w-3xl mx-auto bg-[#FAFAFA] border border-[#EAEAEA] rounded-[48px] p-8 md:p-16 text-left relative overflow-hidden shadow-sm">
          <div className="flex justify-between items-center border-b border-[#EAEAEA] pb-6 mb-8 text-[10px] font-mono tracking-widest text-zinc-400 font-black">
            <span>OFFICIAL CORRESPONDENCE</span>
            <span>BANEGA BRAND ADVISORY</span>
          </div>
          <div className="space-y-6 text-zinc-800 font-sans font-medium text-sm md:text-base leading-relaxed">
            <p className="font-semibold text-[#111111] uppercase tracking-wider text-xs font-mono">An Open Letter to First-Time Founders,</p>
            <p>I know how overwhelming this period feels.</p>
            <p>
              You've committed years of focus, accumulated capital surplus, and designed a concept path you genuinely believe will change the market landscape. But now, you are facing a confusing labyrinth of state laboratories, secretive raw chemical manufacturers, AYUSH codes, GS1 barcoding grids, and expensive layout vendors who do not understand packaging safety.
            </p>
            <p>The most expensive error you can introduce right now is delay spawned by confusion.</p>
            <p>
              We built Banega Brand to act as your complete legal, creative, and physical shield. We don't sell consultation hours or leave you to struggle with industrial details. We negotiate directly on the warehouse floor, secure your chemistry formulations safely, build real trademark registries, and stand alongside you until the physical asset sits on a shelf and digital commerce pathways are cleared.
            </p>
            <p>If you have the ambitions, we have the machine. Let's launch correctly from day one.</p>
            <div className="pt-8 border-t border-[#EAEAEA] mt-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6 font-sans">
              <div className="space-y-1">
                <span className="text-[13px] font-serif font-light italic lowercase text-[#D97706] block text-2xl">Mayank Tiwari</span>
                <span className="text-[10px] font-black uppercase text-[#111111] tracking-wider block">Mayank Tiwari</span>
                <span className="text-[8px] font-black uppercase text-zinc-400 tracking-widest block">Founder & CEO, Banega Brand</span>
              </div>
              <div className="bg-white border border-[#EAEAEA] px-4 py-2 rounded-xl text-[9px] font-mono text-zinc-400 font-black uppercase tracking-widest text-center">
                OFFICIAL SEAL DIRECT
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="bg-[#0f172a] py-28 md:py-36 px-6 overflow-hidden relative text-white text-center border-t border-[#334155] selection:bg-[#D97706]" id="about-consultation-anchor">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[700px] h-[350px] bg-[#D97706]/10 blur-[130px] rounded-full animate-pulse" />
          <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>
        <div className="max-w-5xl mx-auto relative z-10 space-y-10">
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#1e293b] border border-[#334155] rounded-full text-[10px] font-black uppercase tracking-[0.3em] text-[#D97706]">
              <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
              THE EXECUTIVE DECISION
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-7xl font-sans font-black tracking-tight leading-[1] text-white uppercase max-w-4xl mx-auto">
              LET'S BUILD SOMETHING <br />
              <span className="text-[#D97706] italic font-serif font-light lowercase">worth remembering.</span>
            </h2>
            <p className="text-zinc-400 font-bold text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              If you're serious about launching a product, we'd love to understand your vision and help you move forward with confidence.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={handleScrollToContact}
              className="w-full sm:w-auto px-10 py-5.5 bg-[#D97706] hover:bg-white hover:text-black text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 inline-flex items-center justify-center gap-3 shadow-xl hover:shadow-2xl active:scale-95 leading-none cursor-pointer"
            >
              BOOK MY STRATEGY CALL
              <ArrowRight size={16} className="text-white hover:text-black" />
            </button>
            <button 
              onClick={handleScrollToContact}
              className="w-full sm:w-auto px-10 py-5.5 bg-white/10 text-white border border-white/20 hover:bg-white/25 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 inline-flex items-center justify-center gap-3 active:scale-95 leading-none cursor-pointer"
            >
              LAUNCH MY BRAND
            </button>
          </div>
        </div>
      </section>

      <MainFooter />
    </div>
  );
};