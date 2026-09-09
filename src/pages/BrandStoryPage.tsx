import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowLeft, ExternalLink, ArrowUpRight, X, BookOpen, Send, Check } from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { FigmaFooter } from '../components/FigmaFooter';

export interface ArchiveStory {
  number: string;
  category: string;
  title: string;
  author: string;
  city: string;
  story: string;
  photo: string;
  fragranceNotes?: string;
  readMoreUrl?: string;
}

export interface BrandStoryData {
  id: string;
  name: string;
  tagline: string;
  subtitle: string;
  heroImage: string;
  brandUrl?: string;
  category: string;
  vision: string;
  archiveQuote: string;
  archiveQuoteSource: string;
  stories: ArchiveStory[];
}

export const BRAND_STORIES: Record<string, BrandStoryData> = {
  biographey: {
    id: 'biographey',
    name: 'Biographey',
    tagline: 'Where Every Drop Tells The Story You Never Said Aloud',
    subtitle: 'India’s pioneer narrative-driven luxury fragrance house',
    heroImage: '/assets/perfume/biographey_official_story.jpg',
    brandUrl: 'https://biographey.com/pages/stories',
    category: 'Narrative Extrait de Parfum',
    vision:
      'Biographey was conceived as a narrative-first perfume house where every fragrance batch encapsulates a specific chapter of human emotion — from first rain memories to midnight velvet roses. Sourced from Parisian ateliers and formulated at 28% Extrait de Parfum concentration.',
    archiveQuote:
      'Every fragrance holds a memory. Every memory holds a life. Every life deserves to be told.',
    archiveQuoteSource: '— From The Biographey Story Archive',
    stories: [
      {
        number: '01',
        category: 'Home',
        title: 'The Scent That Brought Me Home',
        author: 'Aryan K.',
        city: 'Delhi',
        photo: '/assets/stories/story_01.jpg',
        fragranceNotes: 'Monsoon Earth • Toasted Cardamom • Rain Petrichor • Cedarwood',
        story:
          'I left home at nineteen with nothing but a duffel bag and the faint memory of my mother\'s kitchen. For seven years I chased belonging across three countries, never staying long enough to leave a mark. It was in a small perfume shop in Montmartre that I found it – a fragrance that smelled like monsoon earth and cardamom. I stood in that aisle for twelve minutes, eyes closed, utterly still. The shopkeeper must have thought I had fainted. I had not. I had simply, for the first time in years, arrived home.',
        readMoreUrl: 'https://biographey.com/pages/stories#'
      },
      {
        number: '02',
        category: 'Love',
        title: 'She Still Wears It',
        author: 'Priya M.',
        city: 'Chennai',
        photo: '/assets/stories/story_02.jpg',
        fragranceNotes: 'Bourbon Vanilla • Dried Rose Damascena • White Linen • Soft Amber',
        story:
          'He gave it to me on our third anniversary – a little bottle wrapped in brown paper, no bow, no ribbon. He said he was no good at wrapping things. That was fourteen years ago. He is gone now, quietly, the way good men often leave – not with a scene, but with a slow morning absence. I still wear it. Not every day, only on the days when I need to remember that love, even when it ends, does not disappear. It simply changes form. It becomes a scent you carry without thinking.',
        readMoreUrl: 'https://biographey.com/pages/stories#'
      },
      {
        number: '03',
        category: 'Legacy',
        title: 'My Father\'s Last Bottle',
        author: 'Rahul D.',
        city: 'Pune',
        photo: '/assets/stories/story_03.jpg',
        fragranceNotes: 'Aged Mysore Sandalwood • Smoky Vetiver • Warm Benzoin Resin',
        story:
          'My father was not a sentimental man. He did not keep letters or photographs. He did not say I love you unless it was absolutely necessary. But for thirty years, without fail, he wore the same fragrance – a dark woody thing that smelled like sandalwood and something ancient. When he passed, we found one last bottle on his dresser, two-thirds full. My sister and I could not bring ourselves to throw it away. It sits on my shelf now. Some evenings I uncap it and breathe in, and for just a moment, he is standing in the doorway again, asking if I have eaten.',
        readMoreUrl: 'https://biographey.com/pages/stories#'
      },
      {
        number: '04',
        category: 'Beginnings',
        title: 'The Day I Chose Myself',
        author: 'Nadia F.',
        city: 'Bengaluru',
        photo: '/assets/stories/story_04.jpg',
        fragranceNotes: 'Blooming Peony • Radiant White Lotus • Crisp Solar Citrus',
        story:
          'The morning after I filed the papers, I walked into a store and bought myself a perfume for the first time in eleven years. Not one he would have approved. Not one that was subtle or safe or sensible. I chose something loud and floral and entirely unnecessary for a Tuesday morning. The woman at the counter smiled at it on my wrist. She said: that one is for people who have decided something. She was right, that my next chapter would be written by no one but me, and it would smell exactly like this.',
        readMoreUrl: 'https://biographey.com/pages/stories#'
      },
      {
        number: '05',
        category: 'Loss',
        title: 'A Note That Lingered',
        author: 'Vikram S.',
        city: 'Kolkata',
        photo: '/assets/stories/story_05.jpg',
        fragranceNotes: 'Aged Leather • Dark Tonka Bean • Smoky Tobacco Leaf • Bergamot',
        story:
          'Grief is not the films show you. It is not a single dramatic moment, it is finding his reading glasses in the kitchen drawer six months later. It is the way a stranger on the metro wore the same cologne and you had to get off at the wrong stop to catch your breath. My brother and I were not close in the way people mean when they say close. We argued about politics and borrowed money we did not return. But he was my brother, and now the city is smaller without him in it, and some mornings the scent of his aftershave drifts in from nowhere, like a sentence left unfinished.',
        readMoreUrl: 'https://biographey.com/pages/stories#'
      },
      {
        number: '06',
        category: 'Resilience',
        title: 'Starting Over At Fifty',
        author: 'Sunita L.',
        city: 'Jaipur',
        photo: '/assets/stories/story_06.jpg',
        fragranceNotes: 'Madagascar Vanilla • Kashmiri Saffron • Warm Cedar • Golden Amber',
        story:
          'People speak of reinvention as though it is glamorous. They do not tell you about the Tuesday afternoons where the silence is unbearable, or the job interviews where you are quietly told you are overqualified, which is a polite way of saying too old. At fifty-two, I rented a small flat, enrolled in a design course, and bought a single bottle of perfume to mark the occasion. My daughter laughed when I told her I was starting over. Not unkindly. She laughed because she said I was finally, actually, beginning. Perhaps she was right. Some stories only get good in the later chapters.',
        readMoreUrl: 'https://biographey.com/pages/stories#'
      }
    ]
  },

  rougx: {
    id: 'rougx',
    name: 'ROUGX',
    tagline: 'Where Legacy Meets Artistry. Luxury Fragrances That Define You',
    subtitle: 'High-concentration velvet seduction & prestige Extrait de Parfum',
    heroImage: '/assets/perfume/rougx_official_story.jpg',
    brandUrl: 'https://rougx.com',
    category: 'Prestige Artisan Perfumery',
    vision:
      'Maison ROUGX was conceptualized to establish an uncompromising standard in prestige perfumery. Sourcing the world’s rarest raw extractions from Assam, Bulgaria, and Kashmir, ROUGX partnered with BanegaBrand to engineer custom flacon molds, high-density fragrance compounding, and an omnichannel D2C performance engine.',
    archiveQuote:
      'We do not chase trends; we curate the air. Every creation is an invisible legacy left behind in a room.',
    archiveQuoteSource: '— From The ROUGX Scent Archive',
    stories: [
      {
        number: '01',
        category: 'Presence',
        title: 'The Room Went Silent',
        author: 'Armaan V.',
        city: 'Mumbai',
        photo: '/assets/perfume/rougx_official_story.jpg',
        fragranceNotes: 'Spicy Cinnamon • Aged Assam Oud • Smoky Leather • Tonka Bean',
        story:
          'I wore ROUGX AFTER to an international private equity gala. Three people stopped me before I even reached the bar to ask what scent I was wearing. It is not loud — it has a dark, magnetic density of cinnamon, aged oud, and smoky leather that commands respect before you speak a single word.',
        readMoreUrl: 'https://rougx.com/collections/all'
      },
      {
        number: '02',
        category: 'Allure',
        title: 'An Unspoken Invitation',
        author: 'Tara K.',
        city: 'New Delhi',
        photo: '/assets/stories/story_02.jpg',
        fragranceNotes: 'Warm Amber • Melted Honey • Smoked Woods • Velvet Tonka',
        story:
          'ROUGX VELVET feels like stepping into a private Parisian jazz cellar at 2 AM. Warm tonka, smoked honey, and that deep intoxicating amber that stays on your cashmere coat for days. It has become my signature evening armor that lingers long after I depart.',
        readMoreUrl: 'https://rougx.com/collections/all'
      },
      {
        number: '03',
        category: 'Vitality',
        title: 'Electric Daybreak',
        author: 'Karan M.',
        city: 'Bengaluru',
        photo: '/assets/stories/story_01.jpg',
        fragranceNotes: 'Crisp Citrus • Cool Mint • Oceanic Accords • Cedarwood',
        story:
          'VOLT gives an immediate surge of crisp aquatic citrus, cool mint, and sharp cedarwood. It is what I put on before major boardroom negotiations. Crisp, energetic, powerful. It never fades, even through long transatlantic travel schedules.',
        readMoreUrl: 'https://rougx.com/collections/all'
      },
      {
        number: '04',
        category: 'Mastery',
        title: 'The Signature Transition',
        author: 'Rohan S.',
        city: 'Dubai',
        photo: '/assets/stories/story_03.jpg',
        fragranceNotes: 'Dual Note Architecture — Day Vitality to Midnight Allure',
        story:
          'The seamless transition from VOLT in the daytime to AFTER when the sun sets is pure olfactory genius. People recognize the Maison ROUGX signature — it is sophisticated, luxurious, and unmistakably distinct across every room.',
        readMoreUrl: 'https://rougx.com/collections/all'
      },
      {
        number: '05',
        category: 'Obsession',
        title: 'The Flacon On The Marble',
        author: 'Zoya P.',
        city: 'London',
        photo: '/assets/stories/story_05.jpg',
        fragranceNotes: 'Obsidian Flint Glass • Hand-Polished Gold Seal',
        story:
          'The weight of the heavy obsidian glass flacon in your hand and the satisfying click of the golden seal cap sets a new standard. It looks like high art on a black marble vanity and smells like timeless French heritage.',
        readMoreUrl: 'https://rougx.com/collections/all'
      },
      {
        number: '06',
        category: 'Heritage',
        title: 'Distilled In Grasse',
        author: 'Devansh R.',
        city: 'Hyderabad',
        photo: '/assets/stories/story_06.jpg',
        fragranceNotes: '30% Pure Oil Concentration • Zero Synthetic Fillers',
        story:
          'Having collected niche perfumes for over twelve years, finding a fragrance house that uses 30% pure oil concentration without synthetic filler solvents was a revelation. ROUGX is the gold standard of modern artisan perfumery.',
        readMoreUrl: 'https://rougx.com/collections/all'
      }
    ]
  },

  'tuesday-london': {
    id: 'tuesday-london',
    name: 'Tuesday London',
    tagline: 'A Scent Beyond Time',
    subtitle: 'Mayfair royal elegance meets modern D2C scale',
    heroImage: '/assets/perfume/tuesday_london_mayfair_royal.jpg',
    brandUrl: 'https://tuesdaylondon.com',
    category: 'British Luxury & Royal Heritage Perfumery',
    vision:
      'Tuesday London bridges classical Mayfair royal fragrance heritage with modern quick-commerce distribution. Sourced with European oil compounding and bespoke crown flacon molds.',
    archiveQuote:
      'True elegance never shouts. It whispers with timeless British royalty, crisp citrus dawns, and rich lavender woods.',
    archiveQuoteSource: '— From The Tuesday London Archive',
    stories: [
      {
        number: '01',
        category: 'Heritage',
        title: 'Morning in Mayfair',
        author: 'Alistair C.',
        city: 'London',
        photo: '/assets/stories/story_01.jpg',
        fragranceNotes: 'English Bergamot • Lavender Woods • Crisp Citrus',
        story:
          'Walking through Berkeley Square on a brisk autumn morning, the crisp notes of English bergamot and lavender evoke centuries of quiet British refinement.',
        readMoreUrl: '#'
      },
      {
        number: '02',
        category: 'Royalty',
        title: 'The Crown Flacon',
        author: 'Samarth N.',
        city: 'Mumbai',
        photo: '/assets/stories/story_03.jpg',
        fragranceNotes: 'Heavy Flint Glass • Filigree Gold Crown Closure',
        story:
          'The gold-filigree studded crown cap and heavy crystal base make this bottle an instant heirloom centerpiece on any dresser.',
        readMoreUrl: '#'
      }
    ]
  },

  'blush-en-bloom': {
    id: 'blush-en-bloom',
    name: 'Blush en Bloom',
    tagline: 'Where Petals Meet Passion',
    subtitle: 'Sustainable botanical floral EDP for modern women',
    heroImage: '/assets/perfume/blush_en_bloom_trio.jpg',
    category: 'Botanical Floral Eau de Parfum',
    vision:
      'Blush en Bloom was born out of a desire for clean, cruelty-free floral perfumes infused with real botanical extracts like Peonies, White Lotus, and Bulgarian Rose without harsh synthetic allergens.',
    archiveQuote:
      'Clean botanical beauty without compromise. Capturing the fresh morning dew on blooming petals.',
    archiveQuoteSource: '— From The Blush en Bloom Archive',
    stories: [
      {
        number: '01',
        category: 'Botanical',
        title: 'Petals in the Morning Dew',
        author: 'Meera S.',
        city: 'Pune',
        photo: '/assets/stories/story_04.jpg',
        fragranceNotes: 'Fresh Peonies • White Lotus • Cold-Pressed Petals',
        story:
          'A soft, radiant burst of fresh peonies and white lotus that feels like an early morning garden walk in spring.',
        readMoreUrl: '#'
      },
      {
        number: '02',
        category: 'Eco-Luxury',
        title: 'The Seed Paper That Bloomed',
        author: 'Ananya V.',
        city: 'Bengaluru',
        photo: '/assets/stories/story_02.jpg',
        fragranceNotes: 'Organic Botanical Lipids • Seed Paper Packaging',
        story:
          'The unboxing box is made of plantable flower seeds. I planted the box in my garden pot and real marigolds sprouted within two weeks.',
        readMoreUrl: '#'
      }
    ]
  },

  omni: {
    id: 'omni',
    name: 'OMNI',
    tagline: 'Himalayan Strength Within',
    subtitle: 'High-purity Ayurvedic Shilajit & adaptogenic elixirs',
    heroImage: '/assets/brand_grid/OMNI.png',
    category: 'Ayurvedic Wellness & Pure Extraction',
    vision:
      'OMNI targeted the rapidly expanding modern wellness market with standardized Himalayan Shilajit resin, KSM-66 Ashwagandha drops, and Ayurvedic stamina elixirs.',
    archiveQuote:
      'Ancient Himalayan wisdom backed by modern clinical validation. Potency, purity, and cellular vitality.',
    archiveQuoteSource: '— From The OMNI Wellness Archive',
    stories: [
      {
        number: '01',
        category: 'Purity',
        title: 'High Altitude Himalayan Gold',
        author: 'Dr. Vivek J.',
        city: 'Dehradun',
        photo: '/assets/stories/story_03.jpg',
        fragranceNotes: '80%+ Fulvic Acid • Triphala Shodhan • ICP-MS Tested',
        story:
          'Standardized to 80%+ Fulvic Acid from 18,000 ft Himalayan peaks, tested triple-clean for zero heavy metals.',
        readMoreUrl: '#'
      }
    ]
  }
};

export const BrandStoryPage: React.FC = () => {
  const { brandId } = useParams<{ brandId: string }>();
  const story = brandId ? BRAND_STORIES[brandId.toLowerCase()] : null;

  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeStoryModal, setActiveStoryModal] = useState<ArchiveStory | null>(null);
  const [isSubmitOpen, setIsSubmitOpen] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);

  if (!story) {
    return <Navigate to="/" replace />;
  }

  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(story.stories.map((s) => s.category)))];

  // Filter stories based on selected category
  const filteredStories =
    selectedCategory === 'All'
      ? story.stories
      : story.stories.filter((s) => s.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="relative bg-white text-[#111111] selection:bg-[#FF5722] selection:text-white font-sans overflow-x-hidden min-h-screen">
      <Helmet>
        <title>{`${story.name} — Stories & Brand Archive | Scent Memories`}</title>
        <meta
          name="description"
          content={`Explore the ${story.name} story archive. Authentic personal narratives of scent, memory, love, beginnings, and homecomings.`}
        />
        <link rel="canonical" href={`https://banegabrand.com/story/${story.id}`} />
      </Helmet>

      {/* Global Navigation */}
      <Navbar />

      <main className="w-full pt-24 sm:pt-32 pb-20">
        {/* ── TOP BACK NAVIGATION BAR ── */}
        <div className="w-full px-4 sm:px-8 md:px-12 lg:px-16 pb-6 flex items-center justify-between border-b border-zinc-200">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-600 hover:text-[#FF5722] transition-colors"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <ArrowLeft size={16} />
            <span>Back to Main Page</span>
          </Link>

          {story.brandUrl && (
            <a
              href={story.brandUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#FF5722] hover:text-[#111111] transition-colors"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span>Visit Official Stories</span>
              <ExternalLink size={14} />
            </a>
          )}
        </div>

        {/* ── 01. EDITORIAL HERO BANNER ── */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center bg-[#FAFAFA] border-none p-8 sm:p-12 lg:p-16 rounded-none">
            <div className="lg:col-span-7 space-y-6 text-left">
              <span
                className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5722] block"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                THE {story.name.toUpperCase()} ARCHIVE • SCENT &amp; MEMORY
              </span>

              <h1
                className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#111111] leading-tight"
                style={{
                  fontFamily: "'Playfair Display', 'Bodoni MT', Didot, Georgia, serif",
                  letterSpacing: '-0.02em'
                }}
              >
                Stories of Scent
              </h1>

              <p
                className="text-lg sm:text-xl md:text-2xl text-zinc-600 font-medium italic"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                "{story.tagline}" — {story.subtitle}
              </p>

              <p
                className="text-base sm:text-lg text-zinc-700 font-normal leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {story.vision}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsSubmitOpen(true)}
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#FF5722] hover:bg-[#E64A19] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <BookOpen size={15} />
                  <span>Share Your Story</span>
                </button>

                {story.brandUrl && (
                  <a
                    href={story.brandUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-zinc-200/80 hover:bg-zinc-900 hover:text-white text-[#111111] text-xs font-bold uppercase tracking-wider transition-all"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <span>View {story.name}.com</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-none overflow-hidden border-none shadow-2xl bg-black aspect-[4/5] group">
                <img
                  src={story.heroImage}
                  alt={story.name}
                  className="w-full h-full object-cover rounded-none transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 02. AUTHENTIC STORY ARCHIVE SECTION WITH MATCHING PHOTOS ── */}
        <section className="w-full px-4 sm:px-8 md:px-12 lg:px-16 pt-12 sm:pt-18 lg:pt-20 space-y-10 sm:space-y-12">
          
          {/* Story Archive Quote Header */}
          <div className="p-8 sm:p-12 lg:p-14 bg-[#111111] text-white rounded-none border-none text-center space-y-3 shadow-xl">
            <p
              className="text-xl sm:text-2xl md:text-3xl font-light italic leading-relaxed text-zinc-100 max-w-4xl mx-auto"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              "{story.archiveQuote}"
            </p>
            <span
              className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF5722] block"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {story.archiveQuoteSource}
            </span>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center sm:justify-start flex-wrap gap-2.5 pt-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all rounded-none cursor-pointer ${
                  selectedCategory.toLowerCase() === cat.toLowerCase()
                    ? 'bg-[#FF5722] text-white shadow-md'
                    : 'bg-[#F3F3F3] hover:bg-zinc-200 text-zinc-700'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {cat === 'All' ? 'All Stories' : cat}
              </button>
            ))}
          </div>

          {/* Stories Grid: Exact Biographey Structure & Photo Style */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {filteredStories.map((item, idx) => (
              <article
                key={idx}
                className="bg-[#FAFAFA] border-none rounded-none shadow-xs overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:shadow-xl"
              >
                <div>
                  {/* Evocative Story Photo (Matching Biographey Photography Style) */}
                  <div
                    onClick={() => setActiveStoryModal(item)}
                    className="relative w-full aspect-[4/3] overflow-hidden bg-zinc-900 cursor-pointer"
                  >
                    <img
                      src={item.photo}
                      alt={item.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span
                        className="px-4 py-2 bg-black/80 text-white text-[11px] font-bold uppercase tracking-widest backdrop-blur-xs"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Read Story
                      </span>
                    </div>
                  </div>

                  {/* Story Card Content */}
                  <div className="p-7 sm:p-8 space-y-4">
                    {/* Category & Story Number Badge */}
                    <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
                      <span
                        className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF5722]"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {item.category} • Story {item.number}
                      </span>
                      <span
                        className="text-xs font-bold text-zinc-400 uppercase tracking-wider"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {item.city}
                      </span>
                    </div>

                    {/* Story Title */}
                    <h3
                      onClick={() => setActiveStoryModal(item)}
                      className="text-xl sm:text-2xl font-bold text-[#111111] leading-snug cursor-pointer hover:text-[#FF5722] transition-colors"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {item.title}
                    </h3>

                    {/* Author Name */}
                    <div
                      className="text-xs font-bold uppercase tracking-wider text-zinc-500"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.author}, {item.city}
                    </div>

                    {/* Story Body Paragraph */}
                    <p
                      className="text-sm text-zinc-700 font-normal leading-relaxed pt-1 line-clamp-4"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      {item.story}
                    </p>

                    {item.fragranceNotes && (
                      <div className="pt-2 text-[11px] text-zinc-400 italic">
                        <span className="font-semibold text-zinc-600 not-italic uppercase tracking-wider block text-[10px]">
                          Notes:
                        </span>
                        {item.fragranceNotes}
                      </div>
                    )}
                  </div>
                </div>

                {/* Read Full Story Button */}
                <div className="px-7 sm:px-8 pb-7 sm:pb-8 pt-2">
                  <button
                    onClick={() => setActiveStoryModal(item)}
                    className="w-full inline-flex items-center justify-between py-3 px-4 bg-white hover:bg-zinc-900 hover:text-white text-[#111111] border border-zinc-200 hover:border-zinc-900 text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    <span>Read Full Story</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* ── 03. "SUBMIT YOUR STORY" COMMUNITY INVITATION ── */}
          <div className="p-8 sm:p-14 bg-[#F7F7F7] border border-zinc-200 text-left space-y-6">
            <div className="max-w-2xl space-y-3">
              <span
                className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF5722] block"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                COMMUNITY ANTHOLOGY
              </span>
              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111111]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Every Life Deserves To Be Told
              </h3>
              <p
                className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Have a scent that defined a pivotal chapter of your life? An aroma that brings back a person, a place, or a beginning? Submit your story to the Biographey archive.
              </p>
            </div>

            <button
              onClick={() => setIsSubmitOpen(true)}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-black hover:bg-[#FF5722] text-white text-xs font-bold uppercase tracking-wider transition-colors duration-200 shadow-lg cursor-pointer"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <Send size={15} />
              <span>Submit Your Story to Archive</span>
            </button>
          </div>

          {/* Bottom Conversion Banner */}
          <div className="p-10 sm:p-16 bg-gradient-to-r from-zinc-900 to-black text-white rounded-none border-none text-center space-y-6 shadow-2xl">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Ready to Build Your Brand Like {story.name}?
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-2xl mx-auto font-normal"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Talk to our brand architects today. We handle formulation, custom bottle sourcing, testing, manufacturing, and launch in 45–90 days.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-10 py-4.5 rounded-full bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-xs sm:text-sm uppercase tracking-[0.16em] shadow-lg transition-all active:scale-95"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span>Start Your Brand Launch</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── 04. STORY READER MODAL (FULL EXPERIENCE) ── */}
      {activeStoryModal && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
          onClick={() => setActiveStoryModal(null)}
        >
          <div
            className="relative bg-white text-[#111111] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl rounded-none p-6 sm:p-10 md:p-12 space-y-6 text-left my-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveStoryModal(null)}
              className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-black hover:bg-zinc-100 rounded-none transition-colors cursor-pointer"
              aria-label="Close story"
            >
              <X size={22} />
            </button>

            {/* Header / Category */}
            <div className="space-y-1">
              <span
                className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF5722] block"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                {activeStoryModal.category} • STORY {activeStoryModal.number}
              </span>
              <h2
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] leading-tight"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                {activeStoryModal.title}
              </h2>
              <div
                className="text-sm font-bold uppercase tracking-wider text-zinc-500 pt-1"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                By {activeStoryModal.author}, {activeStoryModal.city}
              </div>
            </div>

            {/* Modal Image */}
            <div className="w-full aspect-[16/9] overflow-hidden bg-zinc-900 shadow-md">
              <img
                src={activeStoryModal.photo}
                alt={activeStoryModal.title}
                className="w-full h-full object-cover object-center"
              />
            </div>

            {/* Full Story Content */}
            <div className="space-y-4 pt-2">
              <p
                className="text-base sm:text-lg text-zinc-800 font-normal leading-relaxed first-letter:text-4xl first-letter:font-bold first-letter:text-[#FF5722] first-letter:mr-2 first-letter:float-left"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                {activeStoryModal.story}
              </p>
            </div>

            {/* Olfactory Notes Footer */}
            {activeStoryModal.fragranceNotes && (
              <div className="p-5 bg-[#FAFAFA] border-l-4 border-[#FF5722] space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 block">
                  Associated Fragrance Notes:
                </span>
                <p className="text-sm font-medium text-zinc-900" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  {activeStoryModal.fragranceNotes}
                </p>
              </div>
            )}

            {/* Modal Footer Actions */}
            <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
              <button
                onClick={() => setActiveStoryModal(null)}
                className="px-6 py-3 bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-bold uppercase tracking-wider cursor-pointer"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Close Story
              </button>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF5722] hover:bg-[#E64A19] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span>Launch Your Brand</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ── 05. STORY SUBMISSION MODAL ── */}
      {isSubmitOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setIsSubmitOpen(false)}
        >
          <div
            className="relative bg-white text-[#111111] max-w-lg w-full shadow-2xl rounded-none p-6 sm:p-10 space-y-6 text-left my-auto animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsSubmitOpen(false)}
              className="absolute top-6 right-6 p-2 text-zinc-500 hover:text-black hover:bg-zinc-100 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>

            {submitSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto rounded-full">
                  <Check size={28} />
                </div>
                <h3
                  className="text-2xl font-bold text-[#111111]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Story Received
                </h3>
                <p className="text-sm text-zinc-600 max-w-sm mx-auto" style={{ fontFamily: "'Poppins', sans-serif" }}>
                  Thank you for contributing to the {story.name} archive. Our curators will review your narrative for the next print chapter.
                </p>
                <button
                  onClick={() => {
                    setSubmitSuccess(false);
                    setIsSubmitOpen(false);
                  }}
                  className="mt-4 px-6 py-3 bg-black text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-1.5">
                  <span
                    className="text-xs font-bold uppercase tracking-[0.25em] text-[#FF5722] block"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    SUBMIT TO ARCHIVE
                  </span>
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-[#111111]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Share Your Scent Story
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-600" style={{ fontFamily: "'Poppins', sans-serif" }}>
                    Every memory deserves to be preserved in the archive.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitSuccess(true);
                  }}
                  className="space-y-4 text-left"
                >
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aryan K."
                      className="w-full px-4 py-3 bg-[#F9F9F9] border border-zinc-300 text-sm focus:outline-none focus:border-[#FF5722]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                      City / Country
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Delhi, India"
                      className="w-full px-4 py-3 bg-[#F9F9F9] border border-zinc-300 text-sm focus:outline-none focus:border-[#FF5722]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                      Story Title
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. The Scent That Brought Me Home"
                      className="w-full px-4 py-3 bg-[#F9F9F9] border border-zinc-300 text-sm focus:outline-none focus:border-[#FF5722]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-zinc-700 mb-1">
                      Your Story / Memory
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Describe the moment, the scent notes, and the person or place..."
                      className="w-full px-4 py-3 bg-[#F9F9F9] border border-zinc-300 text-sm focus:outline-none focus:border-[#FF5722] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#FF5722] hover:bg-[#E64A19] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-md"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Submit Story to Curators
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* Global Footer */}
      <FigmaFooter />
    </div>
  );
};

export default BrandStoryPage;

