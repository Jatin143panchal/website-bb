import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

export const ServicesEditorialShowcase: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-8 lg:px-12 select-none border-b border-zinc-100">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          
          {/* ── CARD 1: ING / ORANGE STATEMENT ───────────────────────────── */}
          <Link
            to="/launch-perfume-brand"
            className="group flex flex-col space-y-4 cursor-pointer"
          >
            <div className="text-left space-y-1">
              <h3 
                className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#111111]"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
              >
                ING
              </h3>
              <p className="text-sm sm:text-base font-normal text-zinc-600 tracking-tight">
                One Step Ahead
              </p>
            </div>

            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] bg-[#FF5722] overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.01] rounded-none">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 border-4 border-white rounded-none flex items-center justify-center p-4 transition-transform duration-500 group-hover:scale-105">
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-full h-full fill-white"
                >
                  <path d="M50 15 C35 15 25 25 25 40 C25 55 35 70 50 85 C65 70 75 55 75 40 C75 25 65 15 50 15 Z M50 25 C58 25 65 32 65 40 C65 48 58 55 50 55 C42 55 35 48 35 40 C35 32 42 25 50 25 Z" fill="white" opacity="0.9" />
                  <circle cx="42" cy="38" r="4" fill="#FF5722" />
                  <circle cx="58" cy="38" r="4" fill="#FF5722" />
                  <path d="M46 48 Q50 52 54 48" stroke="#FF5722" strokeWidth="3" fill="none" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </Link>

          {/* ── CARD 2: ALAÏA / MONOCHROME EDITORIAL ──────────────────────── */}
          <Link
            to="/launch-cosmetic-brand"
            className="group flex flex-col space-y-4 cursor-pointer"
          >
            <div className="text-left space-y-1">
              <h3 
                className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#111111]"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
              >
                ALAÏA
              </h3>
              <p className="text-sm sm:text-base font-normal text-zinc-600 tracking-tight">
                A digital space built with intention
              </p>
            </div>

            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] bg-zinc-900 overflow-hidden transition-transform duration-500 group-hover:scale-[1.01] rounded-none">
              <img
                src="/assets/Banner 2.png"
                alt="ALAÏA Editorial"
                className="w-full h-full object-cover grayscale brightness-90 contrast-110 transition-transform duration-700 group-hover:scale-105 rounded-none"
              />
            </div>
          </Link>

          {/* ── CARD 3: BIOGRAPHEY / SIGNATURE PERFUME ARCHITECTURE ───────── */}
          <Link
            to="/launch-perfume-brand"
            className="group flex flex-col space-y-4 cursor-pointer"
          >
            <div className="text-left space-y-1">
              <h3 
                className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#111111]"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
              >
                BIOGRAPHEY
              </h3>
              <p className="text-sm sm:text-base font-normal text-zinc-600 tracking-tight">
                Signature Perfume Architecture &amp; Glass Tooling
              </p>
            </div>

            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] bg-zinc-900 overflow-hidden transition-transform duration-500 group-hover:scale-[1.01] rounded-none">
              <img
                src="/assets/Banner 1.png"
                alt="Biographey Luxury Fragrance"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
              />
            </div>
          </Link>

          {/* ── CARD 4: ROUGX / CLINICAL FORMULATION & PACKAGING ──────────── */}
          <Link
            to="/launch-cosmetic-brand"
            className="group flex flex-col space-y-4 cursor-pointer"
          >
            <div className="text-left space-y-1">
              <h3 
                className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-[#111111]"
                style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
              >
                ROUGX
              </h3>
              <p className="text-sm sm:text-base font-normal text-zinc-600 tracking-tight">
                Clinical Pigments &amp; Soft-Touch Mono-Cartons
              </p>
            </div>

            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] bg-zinc-900 overflow-hidden transition-transform duration-500 group-hover:scale-[1.01] rounded-none">
              <img
                src="/assets/Banner 4.png"
                alt="ROUGX Cosmetics"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
              />
            </div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default ServicesEditorialShowcase;
