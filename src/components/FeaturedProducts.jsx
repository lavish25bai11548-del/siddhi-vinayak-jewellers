import React, { useState } from 'react';
import { MessageCircle, Eye, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';
import { generateWhatsAppLink, createProductEnquiryMessage } from '../utils/whatsapp';

export default function FeaturedProducts({ onQuickView, activeCategoryFilter, setActiveCategoryFilter }) {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const currentFilter = activeCategoryFilter || selectedFilter;

  const filterTabs = [
    { key: 'all', label: 'All Curations' },
    { key: 'bridal', label: 'Bridal Sets' },
    { key: 'gold', label: 'Gold Jewellery' },
    { key: 'traditional', label: 'Rajputi & Kundan' },
    { key: 'diamond', label: 'Diamonds' },
    { key: 'silver', label: 'Silver Articles' },
    { key: 'rings-bangles', label: 'Chains & Bangles' },
  ];

  const filteredProducts = currentFilter === 'all'
    ? storeConfig.featuredProducts
    : storeConfig.featuredProducts.filter((p) => p.categoryKey === currentFilter);

  const handleTabChange = (key) => {
    setSelectedFilter(key);
    if (setActiveCategoryFilter) {
      setActiveCategoryFilter(key);
    }
  };

  return (
    <section id="featured" className="py-24 bg-luxury-obsidian relative">
      
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showroom Highlights</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-cream tracking-tight mb-4">
            Featured <span className="text-gold-gradient">Masterpieces</span>
          </h2>

          <p className="text-base text-luxury-muted font-light leading-relaxed">
            A glimpse into our signature handcrafted designs. Enquire directly for custom weights, hallmarked gold purity, and pricing.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
                currentFilter === tab.key
                  ? 'bg-gold-500 text-black border-gold-400 shadow-gold-sm font-bold scale-105'
                  : 'bg-luxury-surface/80 border-gold-500/20 text-luxury-muted hover:text-gold-300 hover:border-gold-500/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => {
            const whatsappMsg = createProductEnquiryMessage(product, storeConfig.brand.name);
            const whatsappUrl = generateWhatsAppLink(storeConfig.contact.whatsappNumber, whatsappMsg);

            return (
              <div
                key={product.id}
                className="group relative rounded-2xl bg-luxury-surface border border-gold-500/20 hover:border-gold-500/50 transition-all duration-400 overflow-hidden flex flex-col justify-between hover:shadow-gold-md"
              >
                {/* Product Image Container */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-luxury-black">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                    loading="lazy"
                  />

                  {/* Gradient bottom shadow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-surface via-transparent to-transparent opacity-80" />

                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-luxury-black/85 backdrop-blur-md text-gold-300 border border-gold-500/30">
                      {product.category}
                    </span>
                  </div>

                  {/* Quick View Button on Image Hover */}
                  <button
                    onClick={() => onQuickView && onQuickView(product)}
                    className="absolute inset-0 m-auto w-10 h-10 rounded-full bg-luxury-black/85 border border-gold-500/50 text-gold-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-gold-sm hover:scale-110 cursor-pointer"
                    title="Quick View Details"
                    aria-label={`Quick view ${product.name}`}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Product Meta */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] text-gold-400/90 font-medium tracking-wider uppercase block mb-1">
                      {product.purity}
                    </span>
                    <h3 className="font-serif text-base font-semibold text-luxury-cream group-hover:text-gold-200 transition-colors line-clamp-2 leading-snug">
                      {product.name}
                    </h3>
                    <p className="text-xs text-luxury-muted mt-2 line-clamp-2 font-light leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  {/* Price & Action Section */}
                  <div className="mt-5 pt-4 border-t border-gold-500/15">
                    <div className="flex justify-between items-baseline mb-3">
                      <span className="text-[10px] uppercase tracking-wider text-luxury-muted">
                        Price:
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-gold-300 font-sans">
                        {product.priceDisplay}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-medium text-xs tracking-wider uppercase transition-all shadow-sm group-hover:shadow"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-white/20" />
                        <span>Enquire on WhatsApp</span>
                      </a>

                      <button
                        onClick={() => onQuickView && onQuickView(product)}
                        className="p-2.5 rounded-xl border border-gold-500/30 hover:bg-gold-500/10 text-gold-400 transition-colors"
                        title="View Full Details"
                        aria-label="View Full Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

        {/* Custom Order Callout */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-luxury-surface via-luxury-card to-luxury-surface border border-gold-500/30 text-center max-w-4xl mx-auto shadow-gold-sm">
          <div className="max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 block mb-2">
              Bespoke Artisan Service
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-luxury-cream mb-3">
              Have a Specific Design or Family Heirloom in Mind?
            </h3>
            <p className="text-sm text-luxury-muted font-light leading-relaxed mb-6">
              Our master karigars craft customized bridal sets, antique Rajputi jewellery, and modern diamond pieces tailored to your exact weight and specifications.
            </p>
            <a
              href="#contact"
              className="btn-gold inline-flex items-center gap-2 px-7 py-3 rounded-full text-xs uppercase font-bold tracking-wider shadow-gold-sm"
            >
              <span>Consult Our Master Goldsmith</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}
