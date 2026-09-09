import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, ArrowRight, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

interface AyurvedaProductSelectorProps {
  onProceed?: (data: { category: string; products: string[] }) => void;
}

interface CategoryOption {
  id: string;
  name: string;
  items: { name: string; desc: string; popular?: boolean }[];
}

const PRODUCT_CATEGORIES: CategoryOption[] = [
  {
    id: 'skincare',
    name: 'HERBAL SKINCARE',
    items: [
      { name: 'Face Serum', desc: 'Active botanical serums with Bakuchiol, Vitamin C or Niacinamide base.', popular: true },
      { name: 'Face Cream', desc: 'Moisture-locking day/night creams with saffron, ghee or ceramide.', popular: true },
      { name: 'Cleanser', desc: 'Gentle foaming or gel cleansers with neem, tea tree and aloe vera.' },
      { name: 'Face Oil', desc: 'Classical Kumkumadi Taila & cold-pressed botanical facial oils.', popular: true },
      { name: 'Body Oil', desc: 'Nourishing botanical body oils for daily ritual hydration.' },
      { name: 'Mask & Lepa', desc: 'Clay and herbal masks with sandalwood, turmeric and multani mitti.' },
    ],
  },
  {
    id: 'haircare',
    name: 'HAIR & SCALP',
    items: [
      { name: 'Hair Growth Oil', desc: 'Traditional kshirpak taila with Bhringraj, Amla and Brahmi.', popular: true },
      { name: 'Herbal Shampoo', desc: 'Sulfate-free scalp cleansers infused with Reetha & Shikakai.', popular: true },
      { name: 'Hair Mask', desc: 'Deep conditioning Ayurvedic hair butter & repair masque.' },
      { name: 'Scalp Serum', desc: 'Water-based root energizing peptide & herbal tonic.', popular: true },
    ],
  },
  {
    id: 'bodycare',
    name: 'BODYCARE',
    items: [
      { name: 'Ayurvedic Body Wash', desc: 'Gentle sulfate-free herbal cleansers with sandalwood & vetiver.', popular: true },
      { name: 'Abhyanga Body Oil', desc: 'Warm cured sesame & herb infused traditional body oils.', popular: true },
      { name: 'Herbal Ubtan Polish', desc: 'Exfoliating body scrubs with walnut, chickpea flour and rose.' },
    ],
  },
  {
    id: 'wellness',
    name: 'WELLNESS & BOTANICALS',
    items: [
      { name: 'Ashwagandha Elixir', desc: 'Standardized KSM-66 root extract stress relief formulations.', popular: true },
      { name: 'Herbal Kwatha / Tea', desc: 'Bioactive herbal decoctions for immunity and digestive wellness.' },
      { name: 'Chyawanprash Luxe', desc: 'Gold-grade Amla rasayana formulated for modern palates.', popular: true },
    ],
  },
];

export const AyurvedaProductSelector: React.FC<AyurvedaProductSelectorProps> = () => {
  const [selectedCatId, setSelectedCatId] = useState<string>('skincare');
  const [selectedProducts, setSelectedProducts] = useState<string[]>(['Face Serum', 'Face Oil']);

  const currentCategory = PRODUCT_CATEGORIES.find((c) => c.id === selectedCatId) || PRODUCT_CATEGORIES[0];

  const handleToggleProduct = (productName: string) => {
    if (selectedProducts.includes(productName)) {
      setSelectedProducts(selectedProducts.filter((p) => p !== productName));
    } else {
      setSelectedProducts([...selectedProducts, productName]);
    }
  };

  const handleCategoryChange = (catId: string) => {
    setSelectedCatId(catId);
    const cat = PRODUCT_CATEGORIES.find((c) => c.id === catId);
    if (cat && cat.items.length > 0) {
      setSelectedProducts([cat.items[0].name]);
    }
  };

  return (
    <section id="ayurveda-product-selector" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#FAFAFA] text-[#111111] select-none border-b border-zinc-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-left space-y-3 max-w-3xl">
          <span
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#FF5722] block"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            PRODUCT SELECTOR
          </span>

          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-[#111111]"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            WHAT ARE YOU BUILDING?
          </h2>

          <p
            className="text-sm sm:text-base text-zinc-600 font-normal leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Select your product category and pick the formats you want to develop. We will configure your lab formulation and MOQ parameters accordingly.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-zinc-200 pb-4">
          {PRODUCT_CATEGORIES.map((cat) => {
            const isActive = cat.id === selectedCatId;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`px-6 py-3 rounded-none text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-[#FF5722] text-white shadow-sm'
                    : 'bg-white hover:bg-zinc-100 text-zinc-700 border border-zinc-200'
                }`}
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Product Format Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {currentCategory.items.map((item, idx) => {
              const isChecked = selectedProducts.includes(item.name);
              return (
                <motion.div
                  key={`${currentCategory.id}-${item.name}`}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25, delay: idx * 0.04 }}
                  onClick={() => handleToggleProduct(item.name)}
                  className={`p-6 rounded-none border transition-all duration-300 cursor-pointer text-left flex flex-col justify-between ${
                    isChecked
                      ? 'bg-white border-black ring-1 ring-black shadow-sm'
                      : 'bg-white hover:bg-[#FAFAFA] border-zinc-200 hover:border-zinc-400'
                  }`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div
                        className={`w-5 h-5 rounded-none flex items-center justify-center transition-colors ${
                          isChecked ? 'bg-[#FF5722] text-white' : 'border border-zinc-300 bg-[#FAFAFA]'
                        }`}
                      >
                        {isChecked && <Check size={12} strokeWidth={3} />}
                      </div>

                      {item.popular && (
                        <span
                          className="text-[9px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-none bg-zinc-100 text-[#FF5722] border border-zinc-200"
                          style={{ fontFamily: "'Poppins', sans-serif" }}
                        >
                          Bestseller
                        </span>
                      )}
                    </div>

                    <div>
                      <h3
                        className="text-base font-bold uppercase text-[#111111] tracking-tight"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {item.name}
                      </h3>
                      <p
                        className="text-xs text-zinc-600 leading-relaxed mt-1 font-normal"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Dynamic Selection Bar & Next CTA */}
        <div className="p-6 sm:p-8 rounded-none bg-black text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-zinc-800">
          <div className="space-y-1 text-left">
            <div
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#FF5722]"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <Layers size={14} />
              <span>CURRENT SELECTION</span>
            </div>
            <div
              className="text-xs sm:text-sm font-normal text-zinc-300"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              {selectedProducts.length > 0 ? (
                <>
                  <span className="font-bold text-white">{selectedProducts.length} product(s)</span> selected in{' '}
                  <span className="font-bold text-white">{currentCategory.name}</span>:{' '}
                  <span className="text-zinc-400">{selectedProducts.join(', ')}</span>
                </>
              ) : (
                <span className="text-zinc-500">Please click at least one product above to proceed.</span>
              )}
            </div>
          </div>

          <Link
            to="/contact"
            className="px-8 py-4 rounded-full bg-[#FF5722] hover:bg-[#E64A19] text-white font-bold text-xs uppercase tracking-[0.16em] transition-all duration-300 flex items-center gap-2.5 shrink-0 shadow-lg active:scale-95"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span>Start My Launch</span>
            <ArrowRight size={15} />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default AyurvedaProductSelector;
