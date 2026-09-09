import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AyurvedaManufacturingSectionProps {
  onTalkSpecialist: () => void;
}

export const AyurvedaManufacturingSection: React.FC<AyurvedaManufacturingSectionProps> = () => {
  const pipeline = [
    { title: 'FORMULATION', sub: 'Approved pilot lab recipe with exact active percentages.' },
    { title: 'RAW MATERIALS', sub: 'Traceable organic botanical harvesting & COA verification.' },
    { title: 'INGREDIENTS', sub: 'Extraction, decoction (Taila Paka), and active standardization.' },
    { title: 'PRODUCTION', sub: 'Compounding in AYUSH GMP certified stainless steel vessels.' },
    { title: 'FILLING', sub: 'Sterile automated glass filling with nitrogen purging.' },
    { title: 'PACKAGING', sub: 'Leak-tested capping, tamper-evident neck bands, and boxing.' },
    { title: 'QUALITY (QC)', sub: 'Heavy metals (Pb, Cd, As, Hg) + microbial safety screen.' },
    { title: 'FINISHED PRODUCT', sub: 'Batch release with full COA dossier and marketplace readiness.' },
  ];

  return (
    <section id="ayurveda-manufacturing" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#FAFAFA] text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-3 max-w-2xl">
            <span
              className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5722] block"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              AUDITED MANUFACTURING ECOSYSTEM
            </span>

            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#111111] leading-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              FROM APPROVED FORMULA <br />
              <span className="text-[#FF5722]">TO FINISHED PRODUCT</span>
            </h2>

            <p
              className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Leverage Banega's audited network of 108+ specialized manufacturing facilities across India for GMP-compliant, batch-tested Ayurvedic production.
            </p>
          </div>

          <Link
            to="/contact"
            className="self-start md:self-auto px-8 py-4 rounded-full bg-[#FF5722] hover:bg-[#E64A19] text-white text-xs sm:text-sm font-bold uppercase tracking-[0.16em] transition-all duration-300 flex items-center gap-2.5 shadow-lg active:scale-95 cursor-pointer"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span>Talk to a Specialist</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        {/* Visual Pipeline Slider / Grid — Sharp corners (rounded-none), No numbers */}
        <div className="flex overflow-x-auto gap-6 snap-x pb-4 md:grid md:grid-cols-4 md:overflow-visible no-scrollbar text-left">
          {pipeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="min-w-[260px] md:min-w-0 snap-start p-6 rounded-none bg-white border border-zinc-200 hover:border-black transition-all duration-300 space-y-2 group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <h3
                  className="text-base sm:text-lg font-bold tracking-tight uppercase text-[#111111] group-hover:text-[#FF5722] transition-colors"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.title}
                </h3>

                <p
                  className="text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  {item.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Manufacturing Credibility Proof Banner — Sharp corners (rounded-none), Poppins font */}
        <div className="p-8 sm:p-12 rounded-none bg-black text-white border border-zinc-800 space-y-8 text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>108+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300" style={{ fontFamily: "'Poppins', sans-serif" }}>Manufacturing Partners</div>
              <p className="text-xs text-zinc-400 font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>Audited GMP &amp; AYUSH licensed labs.</p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0 md:pl-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FF5722]" style={{ fontFamily: "'Poppins', sans-serif" }}>Zero</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300" style={{ fontFamily: "'Poppins', sans-serif" }}>Heavy Metal Contamination</div>
              <p className="text-xs text-zinc-400 font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>ICP-MS testing for Pb, Cd, As &amp; Hg.</p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0 md:pl-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>250+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300" style={{ fontFamily: "'Poppins', sans-serif" }}>Flexible Starting MOQs</div>
              <p className="text-xs text-zinc-400 font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>Low batch risk for agile launches.</p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0 md:pl-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FF5722]" style={{ fontFamily: "'Poppins', sans-serif" }}>100%</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300" style={{ fontFamily: "'Poppins', sans-serif" }}>COA Transparency</div>
              <p className="text-xs text-zinc-400 font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>Regulatory dossiers for marketplaces.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AyurvedaManufacturingSection;
