import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CaseStudyItem {
  id: string;
  tag: string;
  brandTitle: string;
  subTitle: string;
  p1: string;
  p2: string;
  buttonText: string;
  image: string;
  alt: string;
  imageOnRight: boolean;
}

const cases: CaseStudyItem[] = [
  {
    id: 'biographey',
    tag: 'LUXURY SIGNATURE FRAGRANCE',
    brandTitle: 'Biographey',
    subTitle: 'Signature Perfume Architecture',
    p1: 'Every fragrance tells an unforgettable story. From sourcing rare cherries and botanical accords to creating high-converting Shopify store experiences that scale nationwide.',
    p2: 'Custom European heavy-base glass bottles, custom formulation compounding, and 45-day rapid formula-to-market execution with complete trademark filing.',
    buttonText: 'LAUNCH YOUR BRAND',
    image: '/assets/perfume/biographey_origin_roses.jpg',
    alt: 'Biographey Luxury Fragrance Launch',
    imageOnRight: true,
  },
  {
    id: 'venotine',
    tag: 'ROYAL OUD & AMBER',
    brandTitle: 'Venotine Paris & Dubai',
    subTitle: 'Prestige Collection',
    p1: 'A scent crafted for royalty. Rare hand-harvested Cambodian Oud blended with precious floral oils, sealed in hand-polished crystal flacons with custom weighted crown caps.',
    p2: '100% certified fine essential oils, FDA cleared compounding, and luxury packaging curation commanding 4x premium price points on omnichannel retail shelves.',
    buttonText: 'EXPLORE BRAND LAUNCH',
    image: '/assets/perfume/venotine_ruby_midnight.jpg',
    alt: 'Venotine Royal Oud & Amber Fragrance',
    imageOnRight: false,
  },
  {
    id: 'rougx',
    tag: 'EAU DE PARFUM SCALE',
    brandTitle: 'ROUGX Volt & Velvet',
    subTitle: 'Dominating D2C Fragrance',
    p1: 'Engineered with custom fragrance concentrates, precision crimp atomizers, and high-converting Shopify store architecture that delivered 4.2x ROAS on Meta ads from Day 1.',
    p2: 'Laser-etched metal caps, precision crimp pumps, and top-ranking Amazon, Flipkart & Nykaa launch onboarding with complete batch quality assurance.',
    buttonText: 'VIEW CASE STUDY',
    image: '/assets/perfume/rougx_velvet_sakura.jpg',
    alt: 'ROUGX Signature Scent Fragrance',
    imageOnRight: true,
  },
  {
    id: 'blush-in-bloom',
    tag: 'COLOR COSMETICS & BEAUTY',
    brandTitle: 'Blush en Bloom',
    subTitle: 'Where Florals Meet Desire',
    p1: 'Custom luxury ribbed glass flacon with gloss black closure, soft-touch mono-cartons, FDA/AYUSH regulatory approvals, and immediate onboarding on Blinkit & Zepto quick commerce.',
    p2: 'Over 4,000 units sold in week 1 across quick commerce platforms, engineered with clean skin-friendly ingredients and cruelty-free formulation standards.',
    buttonText: 'DISCOVER SCENT LAUNCH',
    image: '/assets/perfume/blush_en_bloom_trio.jpg',
    alt: 'Blush en Bloom Luxury Fragrance',
    imageOnRight: false,
  },
];

export const FigmaCaseStudiesSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="max-w-[1560px] mx-auto space-y-28 sm:space-y-40">
        {cases.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${item.imageOnRight ? '' : 'lg:grid-flow-dense'
              }`}
          >
            {/* Text Column */}
            <div
              className={`space-y-6 ${item.imageOnRight ? 'lg:col-span-4' : 'lg:col-span-4 lg:col-start-9'
                }`}
            >
              {/* Category Tag with Vibrant Orange Line */}
              <div className="flex items-center gap-2.5">
                <span className="w-7 h-0.5 bg-[#FF5722]" />
                <span
                  className="text-xs font-bold uppercase tracking-widest text-[#FF5722]"
                  style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
                >
                  {item.tag}
                </span>
              </div>

              {/* Headline with Dual-Tier Playfair Serif + Mulish */}
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-normal uppercase tracking-tight text-[#111111] leading-[1.08] space-y-1">
                <span
                  className="block text-3xl sm:text-4xl md:text-5xl font-normal uppercase tracking-tight text-[#111111]"
                  style={{
                    fontFamily: "'Playfair Display', 'Bodoni MT', 'Didot', 'Cormorant Garamond', Georgia, serif",
                    letterSpacing: '-0.015em'
                  }}
                >
                  {item.brandTitle}
                </span>
                <span
                  className="block text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-wide text-[#555555]"
                  style={{
                    fontFamily: "'Mulish', 'Outfit', 'Sora', system-ui, sans-serif",
                    letterSpacing: '0.01em',
                    fontWeight: 300
                  }}
                >
                  {item.subTitle}
                </span>
              </h3>

              {/* Paragraphs */}
              <div
                className="space-y-4 text-zinc-600 font-normal text-sm sm:text-base md:text-[17px] leading-relaxed"
                style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
              >
                <p>{item.p1}</p>
                <p>{item.p2}</p>
              </div>

              {/* Solid Orange Action Button */}
              <div className="pt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#FF5722] hover:bg-[#e04a1b] text-white text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-xl active:scale-95 cursor-pointer"
                  style={{ fontFamily: "'Mulish', system-ui, sans-serif" }}
                >
                  <span>{item.buttonText}</span>
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>

            {/* Banner Image Column (Clean, 0 Padding, 0 Border, 0 Radius, Smooth Motion) */}
            <motion.div
              whileHover={{ scale: 1.015 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={`${item.imageOnRight ? 'lg:col-span-8' : 'lg:col-span-8 lg:col-start-1'
                } w-full flex justify-center overflow-hidden p-0 m-0 border-0 rounded-none shadow-none cursor-pointer`}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-auto object-cover p-0 m-0 border-0 rounded-none block select-none transition-transform duration-700 hover:scale-[1.02]"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FigmaCaseStudiesSection;
