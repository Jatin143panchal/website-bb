import React from 'react';

// ── BRAND LOGOS FROM public/assets/logos/ ─────────────────────────────────────
interface BrandLogoItem {
  name: string;
  url: string;
  src: string;
}

const ROW_1_BRANDS: BrandLogoItem[] = [
  {
    name: 'ZYNX PERFUME',
    url: 'https://zynxperfume.com',
    src: '/assets/logos/ZYNX PERFUME.jpg.jpeg',
  },
  {
    name: 'APETOME',
    url: 'https://apetome.com',
    src: '/assets/logos/APETOME FINAL LOGO.png',
  },
  {
    name: 'BELLMONTAE',
    url: 'https://bellmontae.com',
    src: '/assets/logos/BELLMONTAE LOGO.png',
  },
  {
    name: 'BIOGRAPHY',
    url: 'https://biographey.com',
    src: '/assets/logos/Biography logo.png',
  },
  {
    name: 'Blush en Bloom',
    url: 'https://blushenbloom.com',
    src: '/assets/logos/Blush en Bloom Logo.png',
  },
  {
    name: 'COSMICO',
    url: 'https://cosmico.com',
    src: '/assets/logos/COSMICO logo 1.png',
  },
  {
    name: 'ESSAENCE',
    url: 'https://essaence.com',
    src: '/assets/logos/ESSAENCE logo 2.png',
  },
];

const ROW_2_BRANDS: BrandLogoItem[] = [
  {
    name: 'GREVETY',
    url: 'https://grevety.com',
    src: '/assets/logos/MAIN GREVETY LOGO.png',
  },
  {
    name: 'ROUGX',
    url: 'https://rougx.com',
    src: '/assets/logos/ROUGX LOGO 1.png',
  },
  {
    name: '108 LUXURY',
    url: 'https://108luxury.com',
    src: '/assets/logos/108.png',
  },
  {
    name: 'Tuesday London',
    url: 'https://tuesdaylondon.com',
    src: '/assets/logos/Tuesday london logo.png',
  },
  {
    name: 'VENOTINE',
    url: 'https://venotine.com',
    src: '/assets/logos/VENOTINE logo (3).png',
  },
  {
    name: 'DREFOR',
    url: 'https://drefor.com',
    src: '/assets/logos/DREFOR LOGO with black bg.png',
  },
  {
    name: 'GEN-Z BEAUTY',
    url: 'https://banegabrand.com',
    src: '/assets/logos/logo gen z-01.png',
  },
];

const PureLogoItem: React.FC<{ item: BrandLogoItem }> = ({ item }) => (
  <a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`Visit ${item.name} website`}
    className="mx-6 sm:mx-10 md:mx-14 flex items-center justify-center shrink-0 cursor-pointer transition-all duration-300 hover:scale-110 opacity-85 hover:opacity-100"
  >
    <img
      src={item.src}
      alt={item.name}
      className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[170px] sm:max-w-[220px] object-contain transition-transform duration-300 drop-shadow-2xs"
      loading="lazy"
    />
  </a>
);

export const FigmaTrustGrid: React.FC = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-18 md:py-20 overflow-hidden select-none">
      <div className="space-y-8 sm:space-y-12">
        
        {/* ROW 1: Pure Brand Logos moving to the LEFT */}
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="absolute left-0 inset-y-0 w-16 sm:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-16 sm:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex items-center animate-marquee-left whitespace-nowrap pause-hover">
            {[...ROW_1_BRANDS, ...ROW_1_BRANDS, ...ROW_1_BRANDS, ...ROW_1_BRANDS].map((brand, idx) => (
              <PureLogoItem key={`r1-${brand.name}-${idx}`} item={brand} />
            ))}
          </div>
        </div>

        {/* ROW 2: Pure Brand Logos moving to the RIGHT */}
        <div className="relative w-full overflow-hidden flex items-center">
          <div className="absolute left-0 inset-y-0 w-16 sm:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 inset-y-0 w-16 sm:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex items-center animate-marquee-right whitespace-nowrap pause-hover">
            {[...ROW_2_BRANDS, ...ROW_2_BRANDS, ...ROW_2_BRANDS, ...ROW_2_BRANDS].map((brand, idx) => (
              <PureLogoItem key={`r2-${brand.name}-${idx}`} item={brand} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FigmaTrustGrid;
