import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../components/Navbar';
import { FigmaPartnerSection } from '../components/FigmaPartnerSection';
import { SchbangNetworkSection } from '../components/SchbangNetworkSection';
import { FigmaFooter } from '../components/FigmaFooter';

export const OurPartnershipsPage: React.FC = () => {
  return (
    <div className="relative bg-white text-[#111111] selection:bg-[#FF5722] selection:text-white min-h-screen font-sans overflow-x-hidden pt-16 sm:pt-20">
      <Helmet>
        <title>Our Strategic Partnerships &amp; Ecosystem | Banega Brand</title>
        <meta
          name="description"
          content="Proudly collaborating with the most cutting-edge platforms in the industry — ONDC, Google Premier, Zoho, MoEngage, SPEK Digital, 88GB, Django Digital, and ARTmeTech."
        />
        <link rel="canonical" href="https://banegabrand.com/our-partnerships" />
      </Helmet>

      <Navbar />

      <main>
        {/* ── 1. EXACT SCHBANG NETWORK & PARTNERSHIPS SECTION (WITH LOGOS & ACCORDION) ── */}
        <SchbangNetworkSection />

        {/* ── 2. CUTTING-EDGE PLATFORMS GRID (ONDC, GOOGLE, ZOHO, ETC.) ────────────── */}
        <FigmaPartnerSection />
      </main>

      <FigmaFooter />
    </div>
  );
};

export default OurPartnershipsPage;
