import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ target, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const duration = 1800; // 1.8 seconds smooth count up

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // easeOutQuart for smooth premium deceleration
      const ease = 1 - Math.pow(1 - progress, 4);
      const current = Math.round(ease * target);
      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    const animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

interface MeetTheTeamSectionProps {
  title?: string;
  subtitle?: string;
  showCta?: boolean;
}

export const MeetTheTeamSection: React.FC<MeetTheTeamSectionProps> = ({
  showCta = true,
}) => {
  const stats = [
    {
      target: 120,
      suffix: '+',
      label: 'Product Launches',
      sub: 'Turnkey D2C & FMCG',
    },
    {
      target: 80,
      suffix: '+',
      label: 'Brands Scaled',
      sub: 'Formulation to Retail',
    },
    {
      target: 5000,
      suffix: '+',
      label: 'Product Strategy Hours',
      sub: 'Dedicated Consulting',
    },
    {
      target: 200,
      suffix: '+',
      label: 'Founders Mentored',
      sub: 'India & International',
    },
  ];

  return (
    <section className="w-full bg-white text-[#111111] py-16 sm:py-24 md:py-28 px-4 sm:px-6 md:px-10 lg:px-16 select-none relative z-10 border-b border-zinc-100">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* ── SECTION TOP INTRO ────────────────────────────────────────────── */}
        <div className="mb-12 sm:mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-8 h-px bg-[#FF5722]" />
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#FF5722] font-bold">
              Leadership &amp; Founder
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4">
            <span className="text-xl sm:text-2xl font-light text-zinc-400 uppercase tracking-widest font-mono">
              Meet
            </span>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl font-normal text-[#111111] tracking-tight uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              MAYANK TIWARI
            </h2>
          </div>

          <p className="text-sm sm:text-base font-mono uppercase tracking-wider text-zinc-500 mt-1">
            Founder &amp; CEO, Banega Brand
          </p>
        </div>

        {/* ── 2-COLUMN FOUNDER PROFILE EDITORIAL ──────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* LEFT: EXECUTIVE PORTRAIT CARD (5 cols) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            <div className="relative rounded-none overflow-hidden bg-zinc-950 shadow-2xl border border-zinc-200/80 group">
              
              {/* Founder Photography */}
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                <img
                  src="/assets/team/mayank.jpg"
                  alt="Mayank Tiwari - Founder & CEO Banega Brand"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/mayank.webp';
                  }}
                />
                
                {/* Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                {/* Floating Verified Authority Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-none border border-white/20 text-white flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#FF5722] animate-pulse" />
                  <span className="text-[10px] font-mono uppercase tracking-widest text-zinc-200">
                    Product Strategy Architect
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-5 left-5 right-5 text-white space-y-1">
                  <h3 className="text-2xl font-normal tracking-wide uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                    Mayank Tiwari
                  </h3>
                  <div className="text-xs font-mono text-amber-300 uppercase tracking-wider">
                    Founder &amp; CEO, Banega Brand
                  </div>
                  <p className="text-[11px] text-zinc-400 font-light pt-0.5">
                    Product Management Expert · Brand Incubation Mentor
                  </p>
                </div>
              </div>

            </div>

            {/* Quick Consultation Callout Box */}
            <div className="p-5 rounded-none bg-zinc-50 border border-zinc-200 flex items-center justify-between gap-4">
              <div className="space-y-0.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#FF5722] font-semibold">
                  Direct Founder Advisory
                </div>
                <div className="text-xs text-zinc-700 font-medium">
                  Have a brand vision? Brainstorm with Mayank.
                </div>
              </div>
              <Link
                to="/contact"
                className="shrink-0 px-4 py-2 rounded-none bg-black hover:bg-[#FF5722] text-white text-xs font-semibold transition-colors"
              >
                Connect
              </Link>
            </div>
          </div>

          {/* RIGHT: DETAILED BIO, CREDENTIALS & STATS (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Editorial Header */}
            <div className="space-y-3 pb-6 border-b border-zinc-200">
              <span className="px-3 py-1 text-[11px] font-mono uppercase tracking-wider bg-amber-500/10 text-amber-900 border border-amber-200 font-medium inline-block">
                Product Coach &amp; Strategic Consultant
              </span>
              <h3 
                className="text-2xl sm:text-3xl md:text-4xl font-normal text-zinc-950 leading-snug"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                A Highly Accomplished Product Coach &amp; Consultant
              </h3>
            </div>

            {/* Biography Narrative Paragraphs */}
            <div className="space-y-5 text-sm sm:text-base text-zinc-700 leading-relaxed font-light" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
              <p>
                <strong className="font-semibold text-black">Mayank Tiwari</strong> is a highly accomplished Product Coach, Product Management Expert, and Product Consultant with extensive experience in helping businesses and professionals achieve product excellence.
              </p>

              <p>
                As the Founder &amp; CEO of <strong className="font-semibold text-black">Banega Brand</strong>, he specializes in Product Strategy, innovation, and market-driven growth, enabling organizations to build impactful products and successful brands.
              </p>

              <p>
                Recognized as a trusted Product Strategy Coach and Product Leadership Mentor, Mayank has guided startups, entrepreneurs, and corporate teams in developing winning product strategies and scalable business models.
              </p>

              <p>
                His expertise in Product Manager Training, strategic consulting, and leadership development has established him as a leading Product Expert, Product Career Coach, and Product Management Consultant in India, committed to empowering the next generation of product leaders and driving sustainable business success.
              </p>
            </div>

            {/* ── 4 KEY IMPACT METRICS (2x2 GRID) ─────────────────────────── */}
            <div className="pt-4">
              <div className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
                Proven Track Record &amp; Industry Impact
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div 
                    key={s.label}
                    className="p-5 sm:p-6 rounded-none bg-[#FAFAFA] border border-zinc-200 hover:border-zinc-400 hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="mb-2">
                      <span className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-zinc-950 tracking-tight group-hover:text-[#FF5722] transition-colors">
                        <AnimatedCounter target={s.target} suffix={s.suffix} />
                      </span>
                    </div>

                    <div className="text-xs sm:text-sm font-bold text-zinc-900 uppercase tracking-tight">
                      {s.label}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mt-0.5">
                      {s.sub}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            {showCta && (
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-none bg-black hover:bg-[#FF5722] text-white font-semibold text-sm tracking-wide shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
                >
                  <span>Book Product Consultation with Mayank</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>

                <span className="text-xs font-mono text-zinc-500">
                  1-on-1 Strategy &amp; Launch Roadmap
                </span>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};

export default MeetTheTeamSection;
