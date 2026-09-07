import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { FigmaFooter } from '../components/FigmaFooter';
import { HowWeWorkManifestoSection } from '../components/HowWeWorkManifestoSection';

export const HowWeWorkPage: React.FC = () => {
  return (
    <div className="relative bg-white text-[#111111] selection:bg-[#FF5722] selection:text-white min-h-screen font-sans overflow-x-hidden pt-12 sm:pt-16">
      <Helmet>
        <title>How We Work – Banega Brand | India's Leading Product Launch Company</title>
        <meta
          name="description"
          content="Explore how Banega Brand works: India's premier turnkey product launch powerhouse uniting formulation, manufacturing, packaging, and scaling."
        />
        <link rel="canonical" href="https://banegabrand.com/how-we-work" />
      </Helmet>

      <Navbar />

      <main className="pt-24 sm:pt-32 md:pt-36">
        {/* ── EXACT REFERENCE SCREENSHOT MATCH: HOW WE WORK MANIFESTO ────── */}
        <HowWeWorkManifestoSection />

        {/* Bottom CTA */}
        <div className="pb-20 sm:pb-28 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-9 py-4.5 rounded-full bg-[#111111] hover:bg-[#FF5722] text-white font-bold text-sm uppercase tracking-wider shadow-xl transition-all duration-300 active:scale-95 group"
          >
            <span>Initialize Your Launch Plan</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </main>

      <FigmaFooter />
    </div>
  );
};

export default HowWeWorkPage;
