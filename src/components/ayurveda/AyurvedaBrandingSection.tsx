import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AyurvedaBrandingSectionProps {
  onBuildBrand: () => void;
}

export const AyurvedaBrandingSection: React.FC<AyurvedaBrandingSectionProps> = () => {
  const steps = [
    { title: 'NAME', desc: 'Evocative Sanskrit, Latin, or modern botanical naming with trademark validation.' },
    { title: 'POSITIONING', desc: 'Defining your target dosha, wellness ritual, price tier, and competitive whitespace.' },
    { title: 'LOGO', desc: 'Timeless typography, botanical crests, and scalable vector icon marks.' },
    { title: 'VISUAL IDENTITY', desc: 'Warm earth color palette, typographic system, and tactile paper styling.' },
    { title: 'PACKAGING', desc: '3D renders, dielines, foil-block embossing, and regulatory text layouts.' },
    { title: 'PRODUCT RANGE', desc: 'Hero SKU + complementary ritual cross-sell architecture.' },
    { title: 'WEBSITE', desc: 'High-speed D2C store with dosha diagnostic quiz and subscription upsell.' },
    { title: 'LAUNCH', desc: 'Amazon Brand Registry, Nykaa listing, and Meta ads creative execution.' },
  ];

  return (
    <section id="ayurveda-branding" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-white text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-3 max-w-2xl">
            <span
              className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5722] block"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              BRANDING &amp; POSITIONING
            </span>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#111111] uppercase leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              BUILD A BRAND <br />
              <span className="text-[#FF5722]">
                AROUND AYURVEDA
              </span>
            </h2>

            <p
              className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Commodity herbal sellers compete on low price. True Ayurvedic brands command high gross margins by selling emotional rituals, premium aesthetics, and uncompromising quality.
            </p>
          </div>

          <Link
            to="/contact"
            className="self-start md:self-auto px-8 py-4 rounded-full bg-[#FF5722] hover:bg-[#E64A19] text-white text-xs sm:text-sm font-bold uppercase tracking-[0.16em] transition-all duration-300 flex items-center gap-2.5 shadow-lg active:scale-95 cursor-pointer"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span>Build My Ayurvedic Brand</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* 8-Step Branding Horizontal Slider / Grid — Sharp corners (rounded-none), No numbers */}
        <div className="flex overflow-x-auto gap-6 snap-x pb-4 md:grid md:grid-cols-4 md:overflow-visible no-scrollbar">
          {steps.map((st, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="min-w-[260px] md:min-w-0 snap-start p-7 rounded-none bg-[#FAFAFA] border border-zinc-200/90 shadow-xs hover:shadow-xl hover:border-black transition-all duration-300 space-y-3 text-left group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3
                  className="text-lg sm:text-xl font-bold uppercase text-[#111111] group-hover:text-[#FF5722] transition-colors leading-snug"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {st.title}
                </h3>

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

export default AyurvedaBrandingSection;
