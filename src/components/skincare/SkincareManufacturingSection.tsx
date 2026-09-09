import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface SkincareManufacturingSectionProps {
  onTalkSpecialist?: () => void;
}

export const SkincareManufacturingSection: React.FC<SkincareManufacturingSectionProps> = () => {
  const pipeline = [
    { title: 'FORMULA', sub: 'Approved pilot laboratory formula with locked active percentages.' },
    { title: 'RAW MATERIALS', sub: 'USP/BP grade peptides, high-purity vitamins & bio-ceramides.' },
    { title: 'MANUFACTURING', sub: 'Compounding in class 100,000 cleanroom stainless steel tanks.' },
    { title: 'FILLING', sub: 'Automated airless vacuum & nitrogen purged glass bottle filling.' },
    { title: 'PACKAGING', sub: 'Tamper-evident shrink seals, batch printing, and outer boxing.' },
    { title: 'QUALITY (QC)', sub: 'In-vivo SPF 50+ certification, patch testing & microbial screen.' },
    { title: 'FINISHED PRODUCT', sub: 'Release of commercial stock with complete Certificate of Analysis.' },
    { title: 'READY TO LAUNCH', sub: 'Palletization and dispatch to Amazon FBA / warehouse hub.' },
  ];

  return (
    <section id="skincare-manufacturing" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#FAFAFA] text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-3 max-w-2xl">
            <span
              className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5722] block"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              CLINICAL MANUFACTURING PIPELINE
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
              Leverage Banega's audited network of 108+ specialized manufacturing facilities across India for GMP-compliant production.
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
              <p className="text-xs text-zinc-400 font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>Audited GMP &amp; CDSCO cleanroom labs.</p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0 md:pl-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FF5722]" style={{ fontFamily: "'Poppins', sans-serif" }}>In-Vivo</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300" style={{ fontFamily: "'Poppins', sans-serif" }}>SPF 50+ Testing</div>
              <p className="text-xs text-zinc-400 font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>Accredited human trial certification reports.</p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0 md:pl-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-white" style={{ fontFamily: "'Poppins', sans-serif" }}>250+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300" style={{ fontFamily: "'Poppins', sans-serif" }}>Flexible Starting MOQs</div>
              <p className="text-xs text-zinc-400 font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>Low batch risk for agile founder launches.</p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0 md:pl-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-[#FF5722]" style={{ fontFamily: "'Poppins', sans-serif" }}>100%</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300" style={{ fontFamily: "'Poppins', sans-serif" }}>Dermatologist Tested</div>
              <p className="text-xs text-zinc-400 font-normal" style={{ fontFamily: "'Poppins', sans-serif" }}>Clinical patch safety documentation.</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SkincareManufacturingSection;
