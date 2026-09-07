import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ServicesTrustBannerSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 85%' } }
      );
      gsap.fromTo(
        cardsRef.current?.querySelectorAll('.trust-banner-card') ?? [],
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' } }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const trustBadges = [
    {
      id: 'iso',
      title: 'ISO CERTIFIED',
      subtitle: 'ISO 9001:2015 Quality Management System',
      description: 'Standardized analytical documentation, ingredient traceability, and rigorous audit trails per batch.',
      badgeIcon: (
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-lg border-2 border-blue-600/30 flex items-center justify-center p-2 mx-auto">
          <div className="w-full h-full rounded-full border-2 border-dashed border-blue-600 flex flex-col items-center justify-center text-center">
            <span className="text-xs sm:text-sm font-black font-mono text-blue-900 leading-none">ISO</span>
            <span className="text-[7px] sm:text-[8px] font-bold text-blue-700 uppercase tracking-tighter">CERTIFIED</span>
          </div>
        </div>
      ),
    },
    {
      id: 'gmp',
      title: 'GMP CERTIFIED',
      subtitle: 'Good Manufacturing Practice Compliant',
      description: 'Sterile Class 100,000 cleanrooms with HEPA air locks and automated positive-pressure filling lines.',
      badgeIcon: (
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-zinc-950 shadow-lg border-2 border-amber-400/50 flex items-center justify-center p-2 mx-auto">
          <div className="w-full h-full rounded-full border-2 border-amber-400 flex flex-col items-center justify-center text-center">
            <Award className="w-3.5 h-3.5 text-amber-400 mb-0.5" />
            <span className="text-xs sm:text-sm font-black font-mono text-amber-300 leading-none">GMP</span>
            <span className="text-[6px] sm:text-[7px] font-bold text-amber-200 uppercase tracking-tighter">CERTIFIED</span>
          </div>
        </div>
      ),
    },
    {
      id: 'fda',
      title: 'FDA APPROVED',
      subtitle: 'Government Approved Licensed Manufacturing Unit',
      description: 'Full statutory compliance with CDSCO Form 32 manufacturing licenses and export regulatory certifications.',
      badgeIcon: (
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white shadow-lg border-2 border-blue-900/40 flex items-center justify-center p-2 mx-auto">
          <div className="w-full h-full rounded-full border border-blue-900/30 flex flex-col items-center justify-center text-center">
            <span className="text-base sm:text-lg font-black font-serif text-blue-950 tracking-wider">FDA</span>
            <span className="text-[7px] font-mono text-zinc-500 uppercase tracking-tight">APPROVED</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 md:py-40 px-4 sm:px-8 lg:px-14 overflow-hidden select-none border-b border-zinc-200"
    >
      {/* ── HIGH-TECH PHARMA/CLEANROOM FACILITY BACKGROUND ──────────────── */}
      <div className="absolute inset-0 -z-10">
        <img
          src="/assets/perfume/perfume_compounding_lab.jpg"
          alt="State of the art sterile manufacturing cleanroom facility"
          className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
        />
        {/* Subtle Semi-Translucent Glass Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white/80 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10 flex flex-col items-center text-center">

        {/* ── TOP TITLE BANNER (MATCHING SCREENSHOT 2) ───────────────────── */}
        <div ref={headRef} className="mb-14 sm:mb-20 max-w-4xl mx-auto">
          <div className="inline-block px-8 sm:px-14 py-4 sm:py-5 rounded-2xl bg-white/90 backdrop-blur-md shadow-xl border border-zinc-200/80">
            <h2
              className="text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.06em] text-[#111111] uppercase leading-none"
              style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
            >
              WHY BRANDS TRUST US?
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-zinc-700 font-mono uppercase tracking-[0.2em] mt-4 font-semibold">
            Zero-Compromise Quality Control · Global Compliance Standards
          </p>
        </div>

        {/* ── 3 FROSTED GLASS TRUST CARDS ───────────────────────────────── */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 w-full mb-14"
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.id}
              className="trust-banner-card p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-2xl hover:shadow-3xl hover:bg-white transition-all duration-500 flex flex-col items-center text-center space-y-5 group hover:-translate-y-1.5"
            >
              {/* Seal Badge Icon */}
              <div className="group-hover:scale-110 transition-transform duration-500">
                {badge.badgeIcon}
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-2">
                <h3
                  className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111111] uppercase"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {badge.title}
                </h3>
                <p className="text-sm font-medium text-zinc-800 leading-snug" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {badge.subtitle}
                </p>
              </div>

              {/* Detailed Assurance */}
              <p className="text-xs sm:text-sm text-zinc-600 font-light leading-relaxed pt-1">
                {badge.description}
              </p>

              {/* Bottom Micro Trust Pin */}
              <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-emerald-800 uppercase tracking-wider font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Verified Unit Compliance
              </div>
            </div>
          ))}
        </div>

        {/* ── EXPLORE ALL SERVICES BUTTON (MATCHING SCREENSHOT 2) ─────────── */}
        <div className="flex flex-col items-center space-y-3">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-[#1A1A1A] hover:bg-black text-white text-sm sm:text-base font-semibold shadow-2xl hover:shadow-black/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer group"
          >
            <span>Explore all services</span>
            <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
          </Link>

          <span className="text-[11px] font-mono text-zinc-600 tracking-wider">
            Turnkey Incubation · Direct Formulation · Contract Manufacturing
          </span>
        </div>

      </div>
    </section>
  );
};

export default ServicesTrustBannerSection;
