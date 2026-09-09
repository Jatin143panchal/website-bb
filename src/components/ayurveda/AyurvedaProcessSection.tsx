import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AyurvedaProcessSectionProps {
  onStartProduct?: () => void;
}

export const AyurvedaProcessSection: React.FC<AyurvedaProcessSectionProps> = () => {
  const steps = [
    {
      title: 'CONCEPT',
      tagline: 'Define the product audience & purpose',
      desc: 'We map out your target customer, dosage format, desired sensory feel, and brand positioning whitespace before writing a single formula.',
    },
    {
      title: 'INGREDIENT DIRECTION',
      tagline: 'Identify botanical & Ayurvedic actives',
      desc: 'Selecting clean, ethically harvested botanical extracts, organic essential oils, carrier lipids, and time-tested Ayurvedic herbs with verified COAs.',
    },
    {
      title: 'FORMULATION',
      tagline: 'Develop concept into workable formula',
      desc: 'Our Ayurvedic Vaidyas and cosmetic chemists compound stable laboratory pilot batches balancing classical recipes with modern skin bio-compatibility.',
    },
    {
      title: 'TEST & REFINE',
      tagline: 'Evaluate samples & refine viscosity',
      desc: 'We send you physical sample lab vials for aroma, skin-feel, spreadability, and absorption feedback until your signature benchmark is approved.',
    },
    {
      title: 'PACKAGING',
      tagline: 'Create the physical product experience',
      desc: 'Source UV-blocking amber apothecary flacons, luxury dropper pipettes, FSC unbleached cartons, and foil-embossed labels that command premium shelf appeal.',
    },
    {
      title: 'MANUFACTURE',
      tagline: 'Move approved product into GMP production',
      desc: 'Compounding in audited AYUSH-certified facilities with heavy metal screening, microbial safety clearance, and batch quality documentation.',
    },
    {
      title: 'BRAND & LAUNCH',
      tagline: 'Build the brand & take it to market',
      desc: 'High-converting D2C store creation, product photography renders, Amazon Brand Registry, and launch day campaign execution.',
    },
  ];

  return (
    <section id="ayurveda-process" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-3 max-w-2xl">
            <span
              className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5722] block"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              7-STEP LAUNCH PROCESS
            </span>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] uppercase leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              FROM INGREDIENT <br />
              <span className="text-[#FF5722]">
                TO FINISHED PRODUCT
              </span>
            </h2>

            <p
              className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              A systematic 7-phase methodology that eliminates technical risk, vendor fragmentation, and launch delays.
            </p>
          </div>

          <Link
            to="/contact"
            className="self-start md:self-auto px-8 py-4 rounded-full bg-[#FF5722] hover:bg-[#E64A19] text-white text-xs sm:text-sm font-bold uppercase tracking-[0.16em] transition-all duration-300 flex items-center gap-2.5 shadow-lg active:scale-95 cursor-pointer"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span>Start My Product</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 7-Step Slider / Grid — Sharp corners (rounded-none), No numbers, No icons, Poppins font */}
        <div className="flex overflow-x-auto gap-6 snap-x pb-4 md:grid md:grid-cols-4 md:overflow-visible no-scrollbar">
          {steps.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.07 }}
              className="min-w-[260px] md:min-w-0 snap-start p-7 rounded-none bg-[#FAFAFA] border border-zinc-200/90 shadow-xs hover:shadow-xl hover:border-black transition-all duration-300 space-y-3 text-left group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3
                  className="text-lg sm:text-xl font-bold uppercase text-[#111111] group-hover:text-[#FF5722] transition-colors leading-snug"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {st.title}
                </h3>
                <div
                  className="text-xs font-semibold uppercase tracking-wider text-zinc-500"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {st.tagline}
                </div>
                <p
                  className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {st.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AyurvedaProcessSection;
