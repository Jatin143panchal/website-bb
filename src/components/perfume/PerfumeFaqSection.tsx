import React, { useEffect, useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const PerfumeFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headRef.current, start: 'top 80%' } });
      gsap.fromTo(
        listRef.current?.querySelectorAll('.faq-item') ?? [],
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: 'power2.out', scrollTrigger: { trigger: listRef.current, start: 'top 78%' } }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const faqs = [
    {
      q: 'What is the minimum order quantity for a custom perfume?',
      a: 'We work from as little as 100 bottles per SKU for standard glass molds. If you require a custom OEM bottle mold (exclusive shape), minimum runs are typically 500 bottles. Starter projects can often begin from 50 bottles for validation.'
    },
    {
      q: 'How long does fragrance development take?',
      a: 'Typically 2–4 weeks from brief submission to accord approval. This includes 3–5 sampling rounds, IFRA stability testing, and GC/MS analysis. Complex accords with rare botanicals (e.g., aged Oud, natural Ambergris) may take 5–6 weeks.'
    },
    {
      q: 'Can I get IFRA certified fragrance at this scale?',
      a: 'Yes. All fragrances are compounded at IFRA 51st Amendment certified labs. CDSCO batch records and Certificate of Analysis are included with every production run, regardless of MOQ.'
    },
    {
      q: 'Do you handle D2C launch or just manufacturing?',
      a: 'Both. You can engage us for product-only (formulation + manufacturing), or as an end-to-end launch partner covering brand identity, Shopify store, Amazon/Nykaa activation, and Meta ad strategy.'
    },
    {
      q: 'Who owns the fragrance formula and brand IP?',
      a: 'You do. Entirely. Your formula, brand identity, supplier contacts, and all design files are delivered to you. We sign an IP assignment agreement before any project begins. We earn repeat business through results, not lock-in.'
    },
    {
      q: 'What concentrations are available?',
      a: 'We formulate across all concentration tiers: Eau de Cologne (2–4%), Eau de Toilette (5–15%), Eau de Parfum (15–20%), and Extrait de Parfum (25–30%). Most luxury launches use EDP or Extrait for margin and longevity.'
    },
    {
      q: 'Do you offer private label (ready fragrances)?',
      a: 'Yes, alongside fully custom compounding. Our private label catalogue has 200+ ready fragrances pre-tested for IFRA compliance. These significantly cut formulation time and cost for velocity-focused brands.'
    },
  ];

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section ref={sectionRef} className="py-24 sm:py-32 px-6 sm:px-12 lg:px-20 bg-white border-t border-zinc-100">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div ref={headRef} className="mb-14 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-px bg-zinc-400" />
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-zinc-500">FAQ</span>
          </div>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-normal tracking-[-0.02em] text-[#111111] leading-[1.05] uppercase" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            QUESTIONS
          </h2>
          <h3 className="text-[clamp(2rem,4vw,3.5rem)] font-light tracking-[0.04em] text-[#888888] leading-[1.05] uppercase" style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 300 }}>
            ANSWERED.
          </h3>
        </div>

        {/* FAQ accordion — no box, pure rule-dividers */}
        <div ref={listRef} className="divide-y divide-zinc-100">
          {faqs.map((faq, i) => (
            <div key={i} className="faq-item">
              <button
                type="button"
                onClick={() => toggle(i)}
                className="w-full flex items-start sm:items-center justify-between gap-4 py-6 text-left cursor-pointer group"
              >
                <h4
                  className={`text-base sm:text-lg font-medium leading-snug transition-colors ${openIndex === i ? 'text-black' : 'text-zinc-700 group-hover:text-black'}`}
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {faq.q}
                </h4>
                <div className="shrink-0 mt-1 sm:mt-0 text-zinc-400 group-hover:text-black transition-colors">
                  {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              <div
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: openIndex === i ? '400px' : '0px', opacity: openIndex === i ? 1 : 0 }}
              >
                <p className="pb-6 text-sm text-zinc-600 leading-relaxed" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PerfumeFaqSection;
