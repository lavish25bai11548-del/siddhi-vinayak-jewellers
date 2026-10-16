import React from 'react';
import { ArrowUpRight, Sparkles, Gem, Layers } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function Collections({ onSelectCategory }) {
  return (
    <section id="collections" className="py-24 bg-luxury-black relative overflow-hidden">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Masterpieces</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-cream tracking-tight mb-4">
            Exquisite Jewellery <span className="text-gold-gradient">Collections</span>
          </h2>

          <p className="text-base sm:text-lg text-luxury-muted font-light leading-relaxed">
            Each collection is a reflection of royal Rajasthani heritage, timeless devotion, and masterful goldsmith artistry.
          </p>

          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-12 h-[1px] bg-gold-500/30" />
            <Gem className="w-3.5 h-3.5 text-gold-400" />
            <span className="w-12 h-[1px] bg-gold-500/30" />
          </div>
        </div>

        {/* Collections Grid - 6 Core Collections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storeConfig.collections.map((col, idx) => {
            const whatsappCategoryUrl = generateWhatsAppLink(
              storeConfig.contact.whatsappNumber,
              `Namaste Siddhi Vinayak Jewellers! 🙏 I would like to see more designs and catalog photos from your *${col.name}* collection.`
            );

            return (
              <div
                key={col.id}
                className="group relative rounded-2xl overflow-hidden bg-luxury-surface border border-gold-500/20 hover:border-gold-500/60 shadow-gold-sm hover:shadow-gold-lg transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Container with Luxury Zoom Effect */}
                <div className="relative h-72 sm:h-80 overflow-hidden bg-luxury-black">
                  <img
                    src={col.image}
                    alt={col.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-95 group-hover:brightness-105"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/40 to-transparent" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase bg-luxury-black/80 backdrop-blur-md text-gold-300 border border-gold-500/30">
                      {col.tag}
                    </span>
                  </div>

                  {/* Item count hint */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[10px] text-white/70 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10 font-medium">
                      {col.itemCount}
                    </span>
                  </div>

                  {/* Floating Hindi Tag */}
                  <div className="absolute bottom-4 left-4 right-4 z-10">
                    <p className="text-xs font-hindi text-gold-300/80 mb-1">
                      {col.nameHindi}
                    </p>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-luxury-cream group-hover:text-gold-200 transition-colors">
                      {col.name}
                    </h3>
                  </div>
                </div>

                {/* Details & Actions Footer */}
                <div className="p-5 flex flex-col justify-between flex-1 bg-luxury-surface/90 border-t border-gold-500/10">
                  <p className="text-xs text-luxury-muted line-clamp-2 leading-relaxed mb-4 font-light">
                    {col.description}
                  </p>

                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/5">
                    <button
                      onClick={() => onSelectCategory && onSelectCategory(col.id)}
                      className="text-xs font-semibold tracking-wider uppercase text-gold-400 hover:text-gold-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Explore Pieces</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={whatsappCategoryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] text-emerald-400 hover:text-emerald-300 font-medium px-2.5 py-1 rounded bg-emerald-950/30 border border-emerald-500/20 transition-colors"
                    >
                      Enquire Catalog
                    </a>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
