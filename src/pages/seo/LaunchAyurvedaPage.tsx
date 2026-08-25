import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Sparkles, Compass, CheckCircle2, Shield, Flame, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Navbar } from '../../components/Navbar';
import { MainFooter } from '../../components/MainFooter';

export const LaunchAyurvedaPage = () => {
  return (
    <div className="relative bg-[#FAFAFA] text-[#111111] selection:bg-[#D97706] selection:text-white font-sans overflow-x-hidden min-h-screen">
      <Helmet>
        <title>Launch Ayurveda & Wellness Brand in India | Banega Brand – India's Leading Product Launch Company</title>
        <meta name="description" content="Launch your Ayurveda and herbal wellness brand with certified AYUSH filings, clinical lab sourcing, luxury packaging, and omnichannel launch execution in 60-120 days." />
        <meta name="keywords" content="Launch Ayurveda Brand India, AYUSH Certification, Ayurveda Product Launch, Herbal Wellness Consultant, Banega Brand" />
        <link rel="canonical" href="https://banegabrand.com/launch-ayurveda-brand" />
        <meta property="og:title" content="Launch Ayurveda & Wellness Brand in India | Banega Brand" />
        <meta property="og:description" content="Launch your Ayurveda and herbal wellness brand with certified AYUSH filings and omnichannel execution." />
        <meta property="og:url" content="https://banegabrand.com/launch-ayurveda-brand" />
      </Helmet>
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 px-6 bg-white relative">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] text-[10px] font-black uppercase tracking-[0.2em] text-[#D97706]">
              AUTHENTIC MODERN AYURVEDA CONSULTANCY
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black uppercase tracking-tight text-[#111111] leading-none mb-4">
              LAUNCH YOUR OWN <br />
              <span className="text-[#D97706]">AYURVEDA WELLNESS BRAND</span>
            </h1>
            <p className="text-sm md:text-lg text-[#666666] font-bold max-w-2xl mx-auto leading-relaxed">
              We help founders conceptualize, source certified herbal extracts, secure AYUSH filings, and launch high-margin modern wellness brands in 60–120 Days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link 
                to="/contact"
                className="bg-[#D97706] text-white px-8 py-4.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#111111] transition-all"
              >
                BOOK AYURVEDA STRATEGY CALL
              </Link>
              <Link 
                to="/industries"
                className="bg-[#FAFAFA] text-[#111111] border border-[#EAEAEA] px-8 py-4.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white transition-all"
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
                THE BANEGA BRAND AYURVEDA ROADMAP
              </h2>
              <p className="text-xs md:text-sm font-semibold text-[#666666] leading-relaxed">
                Ayurveda requires high trust, verified raw source extraction, and meticulous compliance clearances to secure FDA or AYUSH approvals.
              </p>

              <div className="space-y-3 pt-4">
                {[
                  'FDA and AYUSH compliant labeling and regulatory filings',
                  'Audited manufacturing sourcing in clinical grade herbal facilities',
                  'Modern branding layouts for the contemporary consumer market',
                  'Robust dynamic e-commerce set up with integrated payment structures'
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="text-xs font-black uppercase tracking-tight text-zinc-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#EAEAEA] p-8 rounded-[36px] space-y-6">
              <h3 className="text-lg font-black uppercase text-[#111111]">
                WELLNESS LAUNCH MATRIX
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-[#FAFAFA] rounded-xl flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase text-zinc-400">BENCHMARK TIMELINE</span>
                  <span className="text-xs font-black uppercase text-[#D97706]">60–120 Days</span>
                </div>
                <div className="p-4 bg-[#FAFAFA] rounded-xl flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase text-zinc-400">REGULATORY COMPLIANCE</span>
                  <span className="text-xs font-black uppercase text-emerald-600">AYUSH COMPLIANT</span>
                </div>
                <div className="p-4 bg-[#FAFAFA] rounded-xl flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase text-zinc-400">BENEFITS VALIDATION</span>
                  <span className="text-xs font-black uppercase text-[#111111]">LAB ASSURED</span>
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
