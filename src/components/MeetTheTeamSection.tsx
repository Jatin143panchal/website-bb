import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Award, 
  TrendingUp, 
  Users, 
  Clock, 
  Rocket, 
  ShieldCheck 
} from 'lucide-react';

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
      val: '120+',
      label: 'Product Launches',
      sub: 'Turnkey D2C & FMCG',
      icon: Rocket,
    },
    {
      val: '80+',
      label: 'Brands Scaled',
      sub: 'Formulation to Retail',
      icon: TrendingUp,
    },
    {
      val: '5,000+',
      label: 'Product Strategy Hours',
      sub: 'Dedicated Consulting',
      icon: Clock,
    },
    {
      val: '200+',
      label: 'Founders Mentored',
      sub: 'India & International',
      icon: Users,
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
            <div className="relative rounded-3xl overflow-hidden bg-zinc-950 shadow-2xl border border-zinc-200/80 group">
              
              {/* Founder Photography */}
              <div className="aspect-[4/5] w-full overflow-hidden relative">
                <img
                  src="/assets/team/mayank.jpg"
                  alt="Mayank Tiwari - Founder & CEO Banega Brand"
                  className="w-full h-full object-cover object-top grayscale contrast-110 brightness-95 transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/mayank.webp';
                  }}
                />
                
                {/* Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Floating Verified Authority Badge */}
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF5722] animate-pulse" />
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
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 flex items-center justify-between gap-4">
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
                className="shrink-0 px-4 py-2 rounded-full bg-black hover:bg-[#FF5722] text-white text-xs font-semibold transition-colors"
              >
                Connect
              </Link>
            </div>
          </div>

          {/* RIGHT: DETAILED BIO, CREDENTIALS & STATS (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Main Editorial Header */}
            <div className="space-y-3 pb-6 border-b border-zinc-200">
              <span className="px-3 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-amber-500/10 text-amber-900 border border-amber-200 font-medium inline-block">
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
                {stats.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div 
                      key={s.label}
                      className="p-5 sm:p-6 rounded-2xl bg-[#FAFAFA] border border-zinc-200/90 hover:border-zinc-300 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-black font-mono text-zinc-950 tracking-tight group-hover:text-[#FF5722] transition-colors">
                          {s.val}
                        </span>
                        <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:text-[#FF5722] transition-colors">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>

                      <div className="text-xs sm:text-sm font-bold text-zinc-900 uppercase tracking-tight">
                        {s.label}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider mt-0.5">
                        {s.sub}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            {showCta && (
              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black hover:bg-[#FF5722] text-white font-semibold text-sm tracking-wide shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group"
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
