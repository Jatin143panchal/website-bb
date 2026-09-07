import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Bot, BookOpen, X, Sparkles, CheckCircle2, Search, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const GLOSSARY_PREVIEWS = [
  { term: 'MOQ (Minimum Order Quantity)', desc: 'The minimum batch unit count required by certified compounding facilities before production commences.' },
  { term: 'COA (Certificate of Analysis)', desc: 'Crucial laboratory documentation verifying chemical purity, heavy metals clearance, and microbiological safety.' },
  { term: 'IFRA Standards', desc: 'Global fragrance safety guidelines specifying safe usage limits for essential oils and aromatic molecules in skincare and perfumes.' },
  { term: 'ACOS & ROAS', desc: 'Advertising Cost of Sales vs Return on Ad Spend — core performance metrics for Amazon and Nykaa growth.' },
  { term: 'Primary vs Secondary Packaging', desc: 'Primary directly contains formulation (bottle/dropper); secondary protects and displays the unit (luxury mono-carton/rigid box).' },
  { term: 'Stability & Challenge Testing', desc: 'Subjecting formulations to accelerated heat, UV, and bacteria challenge to guarantee 24-month shelf life.' },
];

const BOT_PREVIEWS = [
  { name: 'Scent & Note Architecture Bot', desc: 'Generates olfactory pyramids (Top, Heart, Base notes) customized for Indian weather and longevity.' },
  { name: 'Regulatory & Label Compliance Bot', desc: 'Audits cosmetic ingredient declarations, batch codes, and BIS/Ayush mandatory packaging disclosures.' },
  { name: 'Unit Economics & Batch Costing Bot', desc: 'Calculates formulation cost per ml, packaging overheads, and Amazon gross profit margins.' },
  { name: 'D2C Ad Hook & Script Generator', desc: 'Produces viral TikTok/Reels storyboard angles, UGC scripts, and high-converting product claims.' },
];

export const BanegaEdgeHubSection: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'bots' | 'glossary' | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredGlossary = GLOSSARY_PREVIEWS.filter(
    (g) => g.term.toLowerCase().includes(searchTerm.toLowerCase()) || g.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="w-full bg-white text-[#111111] py-20 sm:py-28 px-4 sm:px-8 lg:px-16 select-none border-b border-zinc-100">
      <div className="max-w-[1440px] mx-auto space-y-24 sm:space-y-32">
        
        {/* ── TOP SECTION: WELCOME TO THE EDGE ─────────────────────────────── */}
        <div className="space-y-6 text-left max-w-5xl">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-black shrink-0" />
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-zinc-500">
              INNOVATION &amp; RESOURCES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[46px] font-bold tracking-tight text-[#111111]">
            Welcome To The Edge!
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-zinc-600 font-normal leading-relaxed max-w-4xl">
            <p>
              As creatives and brand builders by nature, we love to push the boundaries of what we can create, experimenting with technology, formulation science and art, uncovering insights and building exciting new resources that help us take our work to the next level. We're now opening up our experiments to you so we can all <span className="font-bold text-black">#BanegaBrand</span> together.
            </p>
            <p>
              Check them out below and let us know your thoughts on our socials!
            </p>
          </div>
        </div>

        {/* ── ROW 1: BANEGA BRAND'S BOT ARMY (YELLOW CARD ON RIGHT) ────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Content Left */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <h3 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#111111] leading-tight">
              Banega Brand’s Bot Army
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
              <p>
                We strongly believe that AI won't replace human creators but people using AI will certainly get ahead in the race. So we created an army of custom AI Bots to help brand founders mine insights, brainstorm campaign ideas and refine their content.
              </p>
              <p>
                Our efficient super-assistants can help with everything from dissecting the target audience for your brand to writing captions and scripts for ads. They can also help with operational tasks like generating appropriate questions to help us get clearer briefs from clients and breaking down large projects into action plans that enable us to achieve results fast.
              </p>
              <p className="font-medium text-zinc-800">
                Fascinated by the possibilities? We're inviting you to take them for a spin now!
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActiveModal('bots')}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#FF5722] transition-all duration-300 shadow-sm hover:scale-[1.02] cursor-pointer group"
              >
                <span>Access Banega Brand’s Bots</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Graphic Right (Yellow Rounded Box) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-lg aspect-square sm:aspect-[4/3] rounded-[32px] sm:rounded-[40px] bg-[#FED700] p-6 sm:p-10 flex items-center justify-center overflow-hidden shadow-xs hover:shadow-md transition-all duration-500 group">
              <img
                src="/assets/blog/bot_army.jpg"
                alt="Banega Brand AI Bot Army Mascot Illustration"
                className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>

        {/* ── ROW 2: BANEGA BRAND'S MARKETING GLOSSARY (PINK CARD ON LEFT) ──── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Graphic Left (Soft Pink Rounded Box) */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-lg aspect-square sm:aspect-[4/3] rounded-[32px] sm:rounded-[40px] bg-[#F7C6D9] p-6 sm:p-10 flex items-center justify-center overflow-hidden shadow-xs hover:shadow-md transition-all duration-500 group">
              <img
                src="/assets/blog/glossary_graphic.jpg"
                alt="Banega Brand Marketing and Product Launch Glossary Graphic"
                className="w-full h-full object-contain filter drop-shadow-md group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content Right */}
          <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
            <h3 className="text-3xl sm:text-4xl md:text-[40px] font-bold tracking-tight text-[#111111] leading-tight">
              Banega Brand’s Marketing Glossary
            </h3>

            <div className="space-y-4 text-sm sm:text-base text-zinc-600 font-normal leading-relaxed">
              <p>
                We work in a constantly changing field. As both consumers and the platforms they interact with evolve at a rapid pace, there are new concepts and theories coming up every day. It can feel intimidating to keep track of what things actually mean, especially for young joinees.
              </p>
              <p>
                So we created this Marketing Glossary to familiarize you with the most important terms that you'll regularly hear and use in the field. It includes industry jargon and terminologies from all branches, including copywriting, social media, graphic design, SEO, paid media, video editing, animation and more.
              </p>
              <p className="font-medium text-zinc-800">
                Whether you're a fresher wanting to catch up with the others or a seasoned professional who just wants to brush up on their ABCs, this glossary is a must-read for anyone who wants to stay updated with the times.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActiveModal('glossary')}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-black text-white font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#FF5722] transition-all duration-300 shadow-sm hover:scale-[1.02] cursor-pointer group"
              >
                <span>Access Banega Brand’s Glossary</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>

      {/* ── INTERACTIVE MODAL DIALOGS ────────────────────────────────────── */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-zinc-200 max-h-[85vh] overflow-y-auto text-left relative"
            >
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {activeModal === 'bots' ? (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#FED700] text-black flex items-center justify-center font-bold">
                      <Bot size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                        Banega Brand’s AI Bot Army
                      </h3>
                      <p className="text-xs text-zinc-500 font-medium">Custom Launch &amp; Formulation AI Assistants</p>
                    </div>
                  </div>

                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Our AI models are trained on real D2C launch data, GMP compliance parameters, and high-converting ad frameworks. Select a bot to test:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {BOT_PREVIEWS.map((bot, i) => (
                      <div key={i} className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200/80 space-y-2 hover:border-black transition-colors">
                        <div className="flex items-center gap-2">
                          <Sparkles size={15} className="text-[#FF5722]" />
                          <h4 className="text-sm font-bold text-zinc-900">{bot.name}</h4>
                        </div>
                        <p className="text-xs text-zinc-600 leading-relaxed">{bot.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-2xl bg-zinc-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <p className="text-xs text-zinc-300 font-bold uppercase tracking-wider">Ready to deploy?</p>
                      <p className="text-sm font-medium">Integrate Banega Brand's automated AI stack for your product launch.</p>
                    </div>
                    <Link
                      to="/contact"
                      onClick={() => setActiveModal(null)}
                      className="px-5 py-2.5 rounded-full bg-[#FF5722] hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-wider transition-all whitespace-nowrap"
                    >
                      Book Strategy Demo
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#F7C6D9] text-black flex items-center justify-center font-bold">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-[#111111]">
                        Marketing &amp; Launch Glossary
                      </h3>
                      <p className="text-xs text-zinc-500 font-medium">Core Brand Launch, Chemical &amp; Marketplace Terms</p>
                    </div>
                  </div>

                  <div className="relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search glossary terms (e.g., MOQ, COA, IFRA, ROAS)..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-zinc-50 border border-zinc-200 rounded-xl text-sm outline-none focus:border-black"
                    />
                  </div>

                  <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                    {filteredGlossary.map((item, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200/80 space-y-1">
                        <h4 className="text-sm font-bold text-zinc-900">{item.term}</h4>
                        <p className="text-xs text-zinc-600 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 text-center">
                    <Link
                      to="/contact"
                      onClick={() => setActiveModal(null)}
                      className="text-xs font-bold uppercase tracking-wider text-[#FF5722] hover:underline"
                    >
                      Need guidance with lab compliance? Contact our formulation lead →
                    </Link>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default BanegaEdgeHubSection;
