import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { Navbar } from '../components/Navbar';
import { FigmaFooter } from '../components/FigmaFooter';
import { MeetTheTeamSection } from '../components/MeetTheTeamSection';

export const TeamPage: React.FC = () => {
  return (
    <div className="relative bg-white text-[#111111] selection:bg-[#FF5722] selection:text-white min-h-screen font-sans overflow-x-hidden pt-12 sm:pt-16">
      <Helmet>
        <title>Meet Mayank Tiwari | Founder &amp; CEO, Banega Brand – Product Coach &amp; Consultant</title>
        <meta 
          name="description" 
          content="Meet Mayank Tiwari, Founder &amp; CEO of Banega Brand. Highly accomplished Product Coach, Product Management Expert, and Product Strategy Consultant with 120+ product launches and 80+ brands scaled." 
        />
        <link rel="canonical" href="https://banegabrand.com/team" />
      </Helmet>

      <Navbar />

      <main className="pt-24 sm:pt-32 md:pt-36">
        {/* ── EXACT SCREENSHOT MATCH: 3 STUDIO PORTRAITS IN ONE ROW ──────────── */}
        <MeetTheTeamSection showCta={true} />
      </main>

      <FigmaFooter />
    </div>
  );
};

export default TeamPage;

