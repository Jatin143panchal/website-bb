import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface SkincareManufacturingSectionProps {
  onTalkSpecialist: () => void;
}

export const SkincareManufacturingSection: React.FC<SkincareManufacturingSectionProps> = ({ onTalkSpecialist }) => {
  const pipeline = [
    { step: '01', title: 'FORMULA', sub: 'Approved pilot laboratory formula with locked active percentages.' },
    { step: '02', title: 'RAW MATERIALS', sub: 'USP/BP grade peptides, high-purity vitamins & bio-ceramides.' },
    { step: '03', title: 'MANUFACTURING', sub: 'Compounding in class 100,000 cleanroom stainless steel tanks.' },
    { step: '04', title: 'FILLING', sub: 'Automated airless vacuum & nitrogen purged glass bottle filling.' },
    { step: '05', title: 'PACKAGING', sub: 'Tamper-evident shrink seals, batch printing, and outer boxing.' },
    { step: '06', title: 'QUALITY (QC)', sub: 'In-vivo SPF 50+ certification, patch testing & microbial screen.' },
    { step: '07', title: 'FINISHED PRODUCT', sub: 'Release of commercial stock with complete Certificate of Analysis.' },
    { step: '08', title: 'READY TO LAUNCH', sub: 'Palletization and dispatch to Amazon FBA / warehouse hub.' },
  ];

  return (
    <section id="skincare-manufacturing" className="py-24 sm:py-32 px-4 sm:px-8 lg:px-16 bg-[#FAFAFA] text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left space-y-4 max-w-2xl">
            <div className="flex items-center gap-3">
              <div className="w-8 h-px bg-zinc-400" />
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">
                13 — CLINICAL MANUFACTURING PIPELINE
              </span>
            </div>

            <h2
              className="text-[clamp(2.4rem,4.5vw,4.2rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.06] uppercase"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              FROM APPROVED FORMULA <br />
              <span className="font-light text-zinc-400 italic">TO FINISHED PRODUCT.</span>
            </h2>

            <p
              className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              Leverage Banega's audited network of 108+ specialized manufacturing facilities across India for GMP-compliant production.
            </p>
          </div>

          <button
            type="button"
            onClick={onTalkSpecialist}
            className="self-start md:self-auto px-8 py-4 rounded-full bg-black hover:bg-zinc-800 text-white text-xs font-semibold uppercase tracking-widest transition-all duration-300 flex items-center gap-3 active:scale-95 cursor-pointer shadow-sm"
          >
            <span style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>TALK TO A PRODUCT SPECIALIST</span>
            <ArrowRight size={14} />
          </button>
        </div>

        {/* 8-Step Pipeline Grid - Minimal Clean Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {pipeline.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.04 }}
              className="p-5 border-l-2 border-zinc-200 hover:border-black transition-colors space-y-2 group"
            >
              <span className="text-xs font-mono font-medium text-zinc-400 group-hover:text-black transition-colors">
                FLOW {item.step}
              </span>

              <h3
                className="text-base font-normal tracking-tight text-[#111111] uppercase"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {item.title}
              </h3>

              <p
                className="text-xs text-zinc-600 leading-relaxed font-normal"
                style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
              >
                {item.sub}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Manufacturing Credibility Proof Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-black text-white border border-zinc-800 space-y-8 text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            
            <div className="space-y-1">
              <div className="text-3xl sm:text-4xl font-normal font-mono text-white">108+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                Manufacturing Partners
              </div>
              <p className="text-[11px] text-zinc-400 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                Audited GMP &amp; CDSCO cleanroom labs.
              </p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0 md:pl-6">
              <div className="text-3xl sm:text-4xl font-normal font-mono text-white">In-Vivo</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                SPF 50+ Testing
              </div>
              <p className="text-[11px] text-zinc-400 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                Accredited human trial certification reports.
              </p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0 md:pl-6">
              <div className="text-3xl sm:text-4xl font-normal font-mono text-white">250+</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                Flexible Starting MOQs
              </div>
              <p className="text-[11px] text-zinc-400 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                Low batch risk for agile founder launches.
              </p>
            </div>

            <div className="space-y-1 pt-4 md:pt-0 md:pl-6">
              <div className="text-3xl sm:text-4xl font-normal font-mono text-white">100%</div>
              <div className="text-xs font-semibold uppercase tracking-wider text-zinc-300" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                Dermatologist Tested
              </div>
              <p className="text-[11px] text-zinc-400 font-normal" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                Clinical patch safety documentation.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SkincareManufacturingSection;
