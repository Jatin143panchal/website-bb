import React, { useState, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '../../components/Navbar';
import { FigmaFooter } from '../../components/FigmaFooter';

// 20 Dedicated Ayurveda & Botanicals Components
import { AyurvedaHero } from '../../components/ayurveda/AyurvedaHero';
import { AyurvedaCategoriesSection } from '../../components/ayurveda/AyurvedaCategoriesSection';
import { AyurvedaProductSelector } from '../../components/ayurveda/AyurvedaProductSelector';
import { AyurvedaStageSection } from '../../components/ayurveda/AyurvedaStageSection';
import { AyurvedaScopeSection } from '../../components/ayurveda/AyurvedaScopeSection';
import { AyurvedaProcessSection } from '../../components/ayurveda/AyurvedaProcessSection';
import { AyurvedaIngredientStorySection } from '../../components/ayurveda/AyurvedaIngredientStorySection';
import { AyurvedaTraditionModernSection } from '../../components/ayurveda/AyurvedaTraditionModernSection';
import { AyurvedaPackagingSection } from '../../components/ayurveda/AyurvedaPackagingSection';
import { AyurvedaBrandingSection } from '../../components/ayurveda/AyurvedaBrandingSection';
import { AyurvedaManufacturingSection } from '../../components/ayurveda/AyurvedaManufacturingSection';
import { AyurvedaRangeBuilderSection } from '../../components/ayurveda/AyurvedaRangeBuilderSection';
import { AyurvedaBrandArchetypeSection } from '../../components/ayurveda/AyurvedaBrandArchetypeSection';
import { AyurvedaCostVariablesSection } from '../../components/ayurveda/AyurvedaCostVariablesSection';
import { AyurvedaCaseStudiesSection } from '../../components/ayurveda/AyurvedaCaseStudiesSection';
import { AyurvedaWhyBanegaSection } from '../../components/ayurveda/AyurvedaWhyBanegaSection';
import { AyurvedaEmotionalBannerSection } from '../../components/ayurveda/AyurvedaEmotionalBannerSection';
import { AyurvedaRoadmapSection } from '../../components/ayurveda/AyurvedaRoadmapSection';
import { AyurvedaFaqSection } from '../../components/ayurveda/AyurvedaFaqSection';
import { AyurvedaFinalCtaSection } from '../../components/ayurveda/AyurvedaFinalCtaSection';

// Interactive Guided Launch Modal & Sticky CTA
import { AyurvedaLaunchWizardModal, AyurvedaWizardPrefill } from '../../components/ayurveda/AyurvedaLaunchWizardModal';
import { AyurvedaStickyCta } from '../../components/ayurveda/AyurvedaStickyCta';

export const LaunchAyurvedaPage: React.FC = () => {
  const [isWizardOpen, setIsWizardOpen] = useState<boolean>(false);
  const [wizardPrefill, setWizardPrefill] = useState<AyurvedaWizardPrefill>({});

  const handleOpenWizard = useCallback((prefillData?: AyurvedaWizardPrefill) => {
    setWizardPrefill(prefillData || {});
    setIsWizardOpen(true);
  }, []);

  const handleCloseWizard = useCallback(() => {
    setIsWizardOpen(false);
  }, []);

  const handleScrollToCategories = useCallback(() => {
    const elem = document.getElementById('ayurveda-categories');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleScrollToFaq = useCallback(() => {
    const elem = document.getElementById('ayurveda-faq');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="relative bg-white text-[#111111] selection:bg-black selection:text-white font-sans overflow-x-hidden min-h-screen">
      <Helmet>
        <title>Launch Your Ayurvedic & Botanical Brand in India | Banega Brand</title>
        <meta
          name="description"
          content="Turn your Ayurvedic, herbal and botanical product ideas into market-ready brands. Turnkey formulation, amber glass packaging, AYUSH certified manufacturing, and marketplace launch in 45–90 days."
        />
        <meta
          name="keywords"
          content="launch ayurveda brand, ayurvedic manufacturing india, herbal skincare formulation, kumkumadi oil private label, ayush certified contract manufacturer, botanical cosmetic brand incubator, private label ayurveda"
        />
        <link rel="canonical" href="https://banegabrand.com/industry/ayurveda" />

        {/* OpenGraph */}
        <meta property="og:title" content="Ancient Knowledge. Modern Brands. | Banega Brand Ayurveda" />
        <meta
          property="og:description"
          content="Turn Ayurvedic, herbal and botanical product ideas into beautifully designed, market-ready brands."
        />
        <meta property="og:url" content="https://banegabrand.com/industry/ayurveda" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://banegabrand.com/assets/Banner%203.png" />

        {/* Structured Data / Schema.org for SEO & AEO (Google AI Overviews, Perplexity, ChatGPT Search) */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Service',
                '@id': 'https://banegabrand.com/industry/ayurveda#service',
                'name': 'Ayurveda & Botanical Brand Launch Services',
                'provider': {
                  '@type': 'Organization',
                  'name': 'Banega Brand',
                  'url': 'https://banegabrand.com',
                  'logo': 'https://banegabrand.com/assets/banega_logo_official.png',
                },
                'serviceType': 'Turnkey Ayurvedic Formulation, Packaging & AYUSH Certified Manufacturing',
                'areaServed': ['India', 'United States', 'Europe', 'Middle East'],
                'description':
                  'End-to-end Vedic formulation, standardized herbal extraction, UV amber glass packaging, AYUSH GMP manufacturing, and marketplace onboarding in 45–90 days.',
              },
              {
                '@type': 'BreadcrumbList',
                'itemListElement': [
                  {
                    '@type': 'ListItem',
                    'position': 1,
                    'name': 'Home',
                    'item': 'https://banegabrand.com',
                  },
                  {
                    '@type': 'ListItem',
                    'position': 2,
                    'name': 'Industries',
                    'item': 'https://banegabrand.com/services',
                  },
                  {
                    '@type': 'ListItem',
                    'position': 3,
                    'name': 'Ayurveda & Botanical Wellness',
                    'item': 'https://banegabrand.com/industry/ayurveda',
                  },
                ],
              },
              {
                '@type': 'FAQPage',
                'mainEntity': [
                  {
                    '@type': 'Question',
                    'name': 'Can I launch an Ayurvedic product in India starting from just an idea?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Yes. Over 65% of founders who partner with Banega Brand start with just a concept or target concern (e.g. postpartum hair fall, brightening kumkumadi elixir). We handle the active botanical sourcing, laboratory formulation, stability testing, custom bottle sourcing, and AYUSH licensing from scratch.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'How does Banega Brand ensure AYUSH and regulatory compliance?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'We formulate according to classical Sanskrit Ayurvedic texts (Charaka Samhita, Sharangadhara Samhita) or proprietary modern polyherbal benchmarks, managing complete state AYUSH licensing, heavy metal ICP-MS screening (Lead, Mercury, Arsenic, Cadmium), and microbial clearance.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'Who owns the Ayurvedic formula and brand IP?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'You own 100% of the formulation IP and brand assets. Banega Brand signs an intellectual property assignment agreement delivering all batch master records, vendor source codes, and design assets upon launch.',
                    },
                  },
                  {
                    '@type': 'Question',
                    'name': 'What is the turnaround time for an Ayurvedic product launch?',
                    'acceptedAnswer': {
                      '@type': 'Answer',
                      'text': 'Turnkey incubation is typically 45 to 90 days from initial formulation brief to market-ready stock in your warehouse, including sampling, AYUSH approvals, and packaging manufacturing.',
                    },
                  },
                ],
              },
            ],
          })}
        </script>
      </Helmet>

      {/* Global Navigation */}
      <Navbar />

      <main className="w-full">
        {/* 01 — HERO */}
        <AyurvedaHero
          onOpenWizard={(opts) => handleOpenWizard(opts)}
          onScrollToExplore={handleScrollToCategories}
        />

        {/* 02 — WHAT DO YOU WANT TO BUILD? (Product Categories) */}
        <AyurvedaCategoriesSection
          onSelectCategory={(categoryId, label) =>
            handleOpenWizard({ category: label })
          }
        />

        {/* 03 — PRODUCT SELECTOR */}
        <AyurvedaProductSelector
          onProceed={(data) =>
            handleOpenWizard({ category: data.category, products: data.products })
          }
        />

        {/* 04 — WHERE ARE YOU IN YOUR JOURNEY? */}
        <AyurvedaStageSection
          onSelectStage={(stageId, label) =>
            handleOpenWizard({ stage: label })
          }
        />

        {/* 05 — WHAT DO YOU WANT BANEGA TO HANDLE? */}
        <AyurvedaScopeSection
          onSelectScope={(scopeId, label) =>
            handleOpenWizard({ scope: label })
          }
        />

        {/* 06 — FROM INGREDIENT TO PRODUCT (7-Step Process) */}
        <AyurvedaProcessSection
          onStartProduct={() => handleOpenWizard()}
        />

        {/* 07 — INGREDIENT & FORMULATION STORY */}
        <AyurvedaIngredientStorySection />

        {/* 08 — TRADITION × MODERN PRODUCT */}
        <AyurvedaTraditionModernSection />

        {/* 09 — PACKAGING (Ayurveda Doesn't Have to Look Old) */}
        <AyurvedaPackagingSection
          onDesignProduct={() => handleOpenWizard({ scope: 'Packaging' })}
        />

        {/* 10 — BRANDING & POSITIONING */}
        <AyurvedaBrandingSection
          onBuildBrand={() => handleOpenWizard({ scope: 'Brand' })}
        />

        {/* 11 — MANUFACTURING */}
        <AyurvedaManufacturingSection
          onTalkSpecialist={() => handleOpenWizard({ scope: 'Manufacturing' })}
        />

        {/* 12 — BUILD YOUR PRODUCT RANGE */}
        <AyurvedaRangeBuilderSection
          onBuildRange={(data) =>
            handleOpenWizard({
              products: data.selectedItems,
              totalProducts: data.totalProducts,
            })
          }
        />

        {/* 13 — WHAT SHOULD YOUR BRAND FEEL LIKE? (Brand Archetype) */}
        <AyurvedaBrandArchetypeSection
          onSelectArchetype={(archetypeId, label) =>
            handleOpenWizard({ archetype: label })
          }
        />

        {/* 14 — WHAT DOES IT TAKE? (Cost Variables) */}
        <AyurvedaCostVariablesSection
          onGetLaunchPlan={() => handleOpenWizard()}
        />

        {/* 15 — CASE STUDIES / REAL WORK */}
        <AyurvedaCaseStudiesSection
          onStartBrand={() => handleOpenWizard()}
        />

        {/* 16 — WHY BANEGA FOR AYURVEDA? */}
        <AyurvedaWhyBanegaSection
          onStartJourney={() => handleOpenWizard()}
        />

        {/* 17 — YOU DON'T NEED TO HAVE THE FORMULA READY (Full-width Emotional) */}
        <AyurvedaEmotionalBannerSection
          onHelpStart={() => handleOpenWizard({ stage: 'Just an Idea' })}
        />

        {/* 18 — LAUNCH ROADMAP */}
        <AyurvedaRoadmapSection
          onBuildRoadmap={() => handleOpenWizard()}
        />

        {/* 19 — FAQ ACCORDION */}
        <AyurvedaFaqSection />

        {/* 20 — FINAL CTA */}
        <AyurvedaFinalCtaSection
          onStartLaunch={() => handleOpenWizard()}
          onTalkSpecialist={() => handleOpenWizard()}
        />
      </main>

      {/* Global Modern Footer */}
      <FigmaFooter />

      {/* Interactive Guided Launch Wizard Modal */}
      <AyurvedaLaunchWizardModal
        isOpen={isWizardOpen}
        onClose={handleCloseWizard}
        prefill={wizardPrefill}
      />

      {/* Persistent Bottom Conversion CTA Bar */}
      <AyurvedaStickyCta onOpenWizard={() => handleOpenWizard()} />
    </div>
  );
};

export default LaunchAyurvedaPage;
