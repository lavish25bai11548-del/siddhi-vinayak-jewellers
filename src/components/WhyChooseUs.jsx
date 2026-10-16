import React from 'react';
import { ShieldCheck, Gem, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';

const iconMap = {
  ShieldCheck: ShieldCheck,
  Gem: Gem,
  HeartHandshake: HeartHandshake,
  Sparkles: Sparkles,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-24 bg-luxury-black relative overflow-hidden">
      
      {/* Decorative background grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Siddhi Vinayak Promise</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-cream tracking-tight mb-4">
            Why Choose <span className="text-gold-gradient">Our Showroom</span>
          </h2>

          <p className="text-base text-luxury-muted font-light leading-relaxed">
            Founded on honest relationships, handcrafted precision, and generations of trust in Koshithal, Bhilwara.
          </p>
        </div>

        {/* Feature Cards Grid - 4 Required Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {storeConfig.whyChooseUs.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Sparkles;

            return (
              <div
                key={feature.id}
                className="group p-8 rounded-2xl bg-luxury-surface border border-gold-500/20 hover:border-gold-500/60 shadow-gold-sm hover:shadow-gold-md transition-all duration-400 flex flex-col justify-between"
              >
                <div>
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-luxury-black border border-gold-500/30 flex items-center justify-center text-gold-400 mb-6 group-hover:scale-110 group-hover:border-gold-400 transition-all shadow-gold-sm">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  {/* Hindi Title */}
                  <span className="text-[11px] font-hindi text-gold-400/80 block mb-1">
                    {feature.titleHindi}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-lg font-bold text-luxury-cream group-hover:text-gold-200 transition-colors mb-3 leading-snug">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-luxury-muted font-light leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Bottom subtle accent line */}
                <div className="mt-6 pt-4 border-t border-gold-500/10 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-gold-500/60 font-semibold">
                    0{idx + 1} / Excellence
                  </span>
                  <div className="w-2 h-2 rounded-full bg-gold-500/30 group-hover:bg-gold-400 transition-colors" />
                </div>

              </div>
            );
          })}
        </div>

        {/* Heritage Trust Statement Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-luxury-obsidian border border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-serif text-base sm:text-lg font-bold text-luxury-cream">
                Transparent Dealing & Accurate Weight Verification
              </h4>
              <p className="text-xs text-luxury-muted mt-0.5">
                Every customer receives a complete computerized weight & purity assessment right before purchase.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="btn-gold-outline px-6 py-2.5 rounded-full text-xs uppercase font-bold tracking-wider whitespace-nowrap"
          >
            Visit Our Store
          </a>
        </div>

      </div>

    </section>
  );
}
