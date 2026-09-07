import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { 
  HeartHandshake, 
  Leaf, 
  Recycle, 
  ShieldCheck, 
  Sparkles,
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { FigmaFooter } from '../components/FigmaFooter';

const CSR_INITIATIVES = [
  {
    title: '100% Clean Formulation & IFRA Standards',
    desc: 'Zero harmful phthalates, parabens, or toxic chemical binders. Every formulation compounded through our network strictly conforms to IFRA and AYUSH non-toxic protocols.',
    icon: Leaf,
    points: ['Phthalate-free compounding', 'Non-toxic aromatic compounds', 'Cruelty-free dermatological tests']
  },
  {
    title: 'Sustainable & Recyclable Packaging Mandate',
    desc: 'We actively engineer brands toward European-grade infinitely recyclable glass flacons, biodegradable mono-cartons, and post-consumer recycled (PCR) caps.',
    icon: Recycle,
    points: ['FSC-certified paper mono-cartons', 'Recyclable European flint glass', 'Minimalist outer wrap waste reduction']
  },
  {
    title: 'Fair-Trade Herbal Farmer Sourcing',
    desc: 'Direct ethical procurement of raw Ayurvedic botanicals — from Kashmiri saffron to Himalayan cedarwood — ensuring fair living wages for agricultural communities.',
    icon: HeartHandshake,
    points: ['Direct farm cooperative alliances', 'Traceable batch origin', 'Fair-trade compensation parity']
  },
  {
    title: 'Audited Ethical Manufacturing Workplace Standards',
    desc: 'Our 40+ factory partners undergo routine social audits ensuring safe chemical handling, zero child labor, and equitable wage standards across Indian manufacturing hubs.',
    icon: ShieldCheck,
    points: ['Mandatory safety training', 'Zero child labor tolerance', 'Regular on-site factory compliance audits']
  }
];

export const CSRPage: React.FC = () => {
  return (
    <div className="relative bg-white text-[#111111] selection:bg-[#FF5722] selection:text-white min-h-screen font-sans overflow-x-hidden pt-16 sm:pt-20">
      <Helmet>
        <title>CSR &amp; Ethical Formulation Standards | Banega Brand</title>
        <meta 
          name="description" 
          content="Learn about Banega Brand's commitment to clean beauty, 100% IFRA compliance, cruelty-free testing, sustainable glass packaging, and ethical farmer sourcing." 
        />
        <link rel="canonical" href="https://banegabrand.com/csr" />
      </Helmet>

      <Navbar />

      <main>
        {/* ── HERO SECTION ─────────────────────────────────────────────────── */}
        <section className="relative w-full bg-[#111111] text-white py-24 sm:py-32 md:py-36 px-4 sm:px-8 lg:px-16 text-center select-none overflow-hidden">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-mono font-bold uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-[#FF5722]" />
              <span>ETHICS • CLEAN BEAUTY • SUSTAINABILITY</span>
            </div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight"
            >
              Responsible Brand <br className="hidden sm:inline" />
              <span className="text-[#FF5722]">Architecture</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-xl text-zinc-300 font-normal max-w-2xl mx-auto leading-relaxed"
            >
              Great brands are built with conscience. We enforce strict clean formulation standards, sustainable glass packaging, and equitable labor practices across India.
            </motion.p>
          </div>
        </section>

        {/* ── INITIATIVES GRID ─────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CSR_INITIATIVES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-8 sm:p-10 rounded-3xl bg-zinc-50 border border-zinc-200/90 hover:border-black/40 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 shadow-xs flex items-center justify-center text-[#111111] group-hover:bg-[#FF5722] group-hover:text-white transition-all">
                      <Icon size={22} />
                    </div>

                    <h3 className="text-2xl font-bold text-[#111111] leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-sm sm:text-base text-zinc-600 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-zinc-200/80 space-y-2">
                    {item.points.map((pt, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-zinc-700">
                        <CheckCircle2 size={13} className="text-[#FF5722] shrink-0" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-9 py-4.5 rounded-full bg-[#111111] hover:bg-[#FF5722] text-white font-bold text-sm uppercase tracking-wider shadow-xl transition-all duration-300 active:scale-95 group"
            >
              <span>Build A Responsible Brand</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

      <FigmaFooter />
    </div>
  );
};

export default CSRPage;
