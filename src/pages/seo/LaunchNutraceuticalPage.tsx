import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Sparkles, Compass, CheckCircle2, Shield, Flame, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Navbar } from '../../components/Navbar';
import { MainFooter } from '../../components/MainFooter';

export const LaunchNutraceuticalPage = () => {
  return (
    <div className="relative bg-[#FAFAFA] text-[#111111] selection:bg-[#D97706] selection:text-white font-sans overflow-x-hidden min-h-screen">
      <Helmet>
        <title>Launch Nutraceutical & Supplement Brand in India | Banega Brand – India's Leading Product Launch Company</title>
        <meta name="description" content="Launch your nutraceutical & dietary supplement brand with WHO-GMP lab access, FSSAI compliance, functional packaging, and marketplace scaling in 60-90 days." />
        <meta name="keywords" content="Launch Nutraceutical Brand India, Dietary Supplements Manufacturing, FSSAI Compliance, Supplement Brand Consultant, Banega Brand" />
        <link rel="canonical" href="https://banegabrand.com/launch-nutraceutical-brand" />
        <meta property="og:title" content="Launch Nutraceutical & Supplement Brand in India | Banega Brand" />
        <meta property="og:description" content="Launch your nutraceutical & dietary supplement brand with WHO-GMP lab access and FSSAI compliance." />
        <meta property="og:url" content="https://banegabrand.com/launch-nutraceutical-brand" />
      </Helmet>
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 px-6 bg-white relative select-none">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200/80 text-[11px] font-black uppercase tracking-[0.18em] text-[#D97706]"
              style={{ fontFamily: "'Mulish', 'Inter', system-ui, sans-serif" }}
            >
              PREMIUM NUTRACEUTICAL LAUNCH SERVICE
            </span>
            <h1 
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black uppercase tracking-[-0.03em] text-[#111111] leading-[1.08] mb-4"
              style={{ fontFamily: "'Mulish', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
            >
              LAUNCH YOUR OWN <br />
              <span className="text-[#D97706]">NUTRACEUTICAL DIETARY BRAND</span>
            </h1>
            <p 
              className="text-base sm:text-lg md:text-xl text-zinc-600 font-normal max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Mulish', 'Inter', system-ui, sans-serif" }}
            >
              We help founders build compliant wellness lines, secure clean WHO-GMP certified clinical sourcing, map FSSAI labels cleanly, and scale in 60–90 Days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link 
                to="/contact"
                className="bg-[#D97706] hover:bg-[#111111] text-white px-9 py-4.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95"
                style={{ fontFamily: "'Mulish', 'Inter', system-ui, sans-serif" }}
              >
                BOOK NUTRA STRATEGY CALL
              </Link>
              <Link 
                to="/industries"
                className="bg-[#FAFAFA] hover:bg-white text-[#111111] border border-[#EAEAEA] px-9 py-4.5 rounded-full font-bold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 active:scale-95"
                style={{ fontFamily: "'Mulish', 'Inter', system-ui, sans-serif" }}
              >
                BACK TO INDUSTRIES
              </Link>
            </div>
          </div>
        </section>

        {/* Tactical Info Section */}
        <section className="py-16 md:py-24 px-6 bg-[#FAFAFA]">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start text-left">
            
            <div className="space-y-6">
              <h2 className="text-2xl md:text-4xl font-sans font-black uppercase tracking-tight text-[#111111]">
                THE BANEGA BRAND LAB-VALIDATED PROCESS
              </h2>
              <p className="text-xs md:text-sm font-semibold text-[#666666] leading-relaxed">
                Dietary supplements require FSSAI mapping, stability certifications, and WHO-GMP audited clean manufacturing centers to safely protect consumer health.
              </p>

              <div className="space-y-3 pt-4">
                {[
                  'FSSAI and label claim mapping support protocols',
                  'Audited direct access to WHO-GMP and HACCP certified labs',
                  'Modern and functional pill & powder packaging templates',
                  'Frictionless distribution setup across verified partner stores'
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                    <span className="text-xs font-black uppercase tracking-tight text-zinc-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#EAEAEA] p-8 rounded-[36px] space-y-6">
              <h3 className="text-lg font-black uppercase text-[#111111]">
                NUTRACEUTICAL PROTOCOLS
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-[#FAFAFA] rounded-xl flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase text-zinc-400">BENCHMARK TIMELINE</span>
                  <span className="text-xs font-black uppercase text-[#D97706]">60–90 Days</span>
                </div>
                <div className="p-4 bg-[#FAFAFA] rounded-xl flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase text-zinc-400">LAB CERTIFICATIONS</span>
                  <span className="text-xs font-black uppercase text-blue-600">WHO-GMP CERTIFIED</span>
                </div>
                <div className="p-4 bg-[#FAFAFA] rounded-xl flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase text-zinc-400">EFFICACY PROTOCOL</span>
                  <span className="text-xs font-black uppercase text-[#111111]">QUALITY STANDARD</span>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>

      <MainFooter />
    </div>
  );
};
