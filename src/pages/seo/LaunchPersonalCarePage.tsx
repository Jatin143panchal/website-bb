import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Sparkles, Compass, CheckCircle2, Shield, Flame, Clock, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Navbar } from '../../components/Navbar';
import { MainFooter } from '../../components/MainFooter';

export const LaunchPersonalCarePage = () => {
  return (
    <div className="relative bg-[#FAFAFA] text-[#111111] selection:bg-[#D97706] selection:text-white font-sans overflow-x-hidden min-h-screen">
      <Helmet>
        <title>Launch Personal Care Brand in India | Banega Brand – India's Leading Product Launch Company</title>
        <meta name="description" content="Launch your personal care, grooming, and hygiene brand with India's leading Product Launch Company. End-to-end product development, formulations, and digital growth." />
        <meta name="keywords" content="Launch Personal Care Brand India, Grooming Products Manufacturer, Personal Care Consultant, Product Launch Company India, Banega Brand" />
        <link rel="canonical" href="https://banegabrand.com/launch-personal-care-brand" />
        <meta property="og:title" content="Launch Personal Care Brand in India | Banega Brand" />
        <meta property="og:description" content="Launch your personal care, grooming, and hygiene brand with India's leading Product Launch Company." />
        <meta property="og:url" content="https://banegabrand.com/launch-personal-care-brand" />
      </Helmet>
      <Navbar />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-20 lg:py-28 px-6 bg-white relative">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FAFAFA] border border-[#EAEAEA] text-[10px] font-black uppercase tracking-[0.2em] text-[#D97706]">
              BRAND LAUNCH & PRODUCT MARKETING SERVICES
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black uppercase tracking-tight text-[#111111] leading-none mb-4">
              Launch Your Product, Build Your Brand & Scale Your Business <br />
              <span className="text-[#D97706]">India’s Leading Product Launch Company</span>
            </h1>
            <p className="text-sm md:text-lg text-[#666666] font-bold max-w-2xl mx-auto leading-relaxed">
              In today’s competitive business landscape, launching a product successfully requires much more than manufacturing and distribution. Businesses need a strategic approach that combines branding, marketing, positioning, digital visibility, customer acquisition, and long-term growth planning. This is where Banega Brand stands apart as a trusted Product Launch Company in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link 
                to="/contact"
                className="bg-[#D97706] text-white px-8 py-4.5 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#111111] transition-all"
              >
                BOOK PERSONAL CARE CALL
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
                COMPLETE PRODUCT LAUNCH SERVICES
              </h2>
              <p className="text-xs md:text-sm font-semibold text-[#666666] leading-relaxed">
                Launching a personal care product needs market research, strong positioning, premium branding, and high-converting digital campaigns. Banega Brand covers every stage to maximize visibility and profitability.
              </p>

              <div className="space-y-3 pt-4">
                {[
                  'End-to-End Product Launch Services with a proven framework',
                  'Market Research & Product Validation to reduce risks',
                  'Product Positioning & Brand Development (story, messaging, packaging)',
                  'Performance Marketing & Lead Generation for measurable growth'
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 shrink-0" />
                    <span className="text-xs font-black uppercase tracking-tight text-zinc-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#EAEAEA] p-8 rounded-[36px] space-y-6">
              <h3 className="text-lg font-black uppercase text-[#111111]">
                OUR LAUNCH PILLARS
              </h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-[#FAFAFA] rounded-xl flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase text-zinc-400">MARKET RESEARCH</span>
                  <span className="text-xs font-black uppercase text-[#D97706]">Validation Ready</span>
                </div>
                <div className="p-4 bg-[#FAFAFA] rounded-xl flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase text-zinc-400">BRAND DEVELOPMENT</span>
                  <span className="text-xs font-black uppercase text-indigo-600">Positioning First</span>
                </div>
                <div className="p-4 bg-[#FAFAFA] rounded-xl flex justify-between items-center">
                  <span className="text-[10px] font-black uppercase text-zinc-400">DIGITAL LAUNCH</span>
                  <span className="text-xs font-black uppercase text-[#111111]">Lead Gen + Growth</span>
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
