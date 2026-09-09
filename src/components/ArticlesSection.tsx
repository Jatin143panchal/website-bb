import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';

interface ArticleItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  image: string;
  link: string;
  isStory?: boolean;
}

const ARTICLES: ArticleItem[] = [
  {
    id: 'biographey-story',
    title: 'Biographey: How 45-Day Perfume Compounding Built a Luxury Fragrance Brand',
    category: 'BRAND STORY',
    readTime: '6 MIN READ',
    date: 'SEP 2026',
    excerpt: 'An inside look at how custom European heavy glass bottles and botanical accords unlocked 68% gross margins and instant D2C traction.',
    image: '/assets/perfume/biographey_origin_roses.jpg',
    link: '/story/biographey',
    isStory: true,
  },
  {
    id: 'rougx-story',
    title: 'ROUGX Volt & Velvet: Scaling Eau de Parfum to 4.2x ROAS from Day 1',
    category: 'CASE STUDY',
    readTime: '5 MIN READ',
    date: 'AUG 2026',
    excerpt: 'Discover how precision crimp pumps, laser-etched metal caps, and Nykaa/Amazon launch onboarding drove rapid omnichannel expansion.',
    image: '/assets/perfume/rougx_velvet_sakura.jpg',
    link: '/story/rougx',
    isStory: true,
  },
  {
    id: 'perfume-manufacturing-guide',
    title: 'The Ultimate 2026 Blueprint to Launching a Private Label Perfume Brand in India',
    category: 'INDUSTRY GUIDE',
    readTime: '8 MIN READ',
    date: 'SEP 2026',
    excerpt: 'Step-by-step breakdown of oil concentration, factory MOQ negotiations, cosmetic licensing, and batch QA verification.',
    image: '/assets/perfume/amber_luxury_perfume_1788783974275.jpg',
    link: '/blog',
  },
  {
    id: 'quick-commerce-onboarding',
    title: 'Cracking Quick Commerce: How Blush en Bloom Sold 4,000 Units in Week 1 on Blinkit',
    category: 'GROWTH STRATEGY',
    readTime: '7 MIN READ',
    date: 'AUG 2026',
    excerpt: 'Key strategies for fast-track barcode registration, dark store inventory allocation, and high-converting product photography.',
    image: '/assets/perfume/blush_en_bloom_trio.jpg',
    link: '/story/blush-en-bloom',
    isStory: true,
  },
];

export const ArticlesSection: React.FC = () => {
  return (
    <section className="w-full bg-[#fcfcfc] text-[#111111] py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-12 border-t border-b border-zinc-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-zinc-200 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-0.5 bg-[#FF5722]" />
              <span
                className="text-xs font-bold uppercase tracking-widest text-[#FF5722]"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                INSIGHTS &amp; CASE STUDIES
              </span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-[#111111] leading-none"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Latest Articles &amp; Stories
            </h2>
            <p
              className="text-zinc-600 text-sm sm:text-base font-normal leading-relaxed pt-1"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Real product launch teardowns, formulation benchmarks, market entry strategies, and brand success stories from Banega Brand.
            </p>
          </div>

          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-black hover:bg-[#FF5722] text-white text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-none shadow-md w-fit"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span>Explore All Articles</span>
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid of Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ARTICLES.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-zinc-200/80 rounded-none overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <Link to={article.link} className="relative h-48 sm:h-52 overflow-hidden block bg-zinc-900">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-3 left-3 z-10">
                  <span
                    className={`inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white ${
                      article.isStory ? 'bg-[#FF5722]' : 'bg-black/80 backdrop-blur-md'
                    }`}
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {article.category}
                  </span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between text-white/80 text-[11px] font-medium" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-[#FF5722]" />
                    <span>{article.readTime}</span>
                  </div>
                  <span>{article.date}</span>
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <Link to={article.link}>
                    <h3
                      className="text-base font-bold text-[#111111] group-hover:text-[#FF5722] transition-colors leading-snug line-clamp-2"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {article.title}
                    </h3>
                  </Link>
                  <p
                    className="text-zinc-600 text-xs sm:text-sm font-normal leading-relaxed line-clamp-3"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-zinc-100 flex items-center justify-between">
                  <Link
                    to={article.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5722] hover:text-[#111111] uppercase tracking-wider transition-colors"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <span>{article.isStory ? 'Read Story' : 'Read Article'}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <BookOpen size={14} className="text-zinc-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
