import React from 'react';
import { Sparkles, ShieldCheck, HeartHandshake, Award, Clock, ArrowRight } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 bg-luxury-obsidian relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase & Brand Emblem */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative luxury border */}
              <div className="p-3 rounded-3xl bg-gradient-to-b from-gold-500/30 via-transparent to-gold-500/20 border border-gold-500/30 shadow-gold-lg">
                <div className="relative rounded-2xl overflow-hidden bg-luxury-black aspect-[4/5]">
                  <img
                    src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1200&auto=format&fit=crop"
                    alt="Master Goldsmith Karigar Crafting Jewellery"
                    className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/30 to-transparent" />

                  {/* Floating Heritage Badge */}
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-luxury-surface/90 backdrop-blur-md border border-gold-500/30 shadow-gold-sm">
                    <p className="text-[11px] font-hindi text-gold-300 font-semibold mb-0.5">
                      {storeConfig.brand.blessing}
                    </p>
                    <h4 className="font-serif text-lg font-bold text-luxury-cream">
                      {storeConfig.brand.name}
                    </h4>
                    <p className="text-xs text-luxury-muted mt-1">
                      Koshithal, Bhilwara (Rajasthan)
                    </p>
                  </div>
                </div>
              </div>

              {/* Overlapping small accent card */}
              <div className="hidden sm:flex absolute -bottom-6 -right-6 p-4 rounded-2xl bg-luxury-surface border border-gold-500/40 shadow-gold-md items-center gap-3.5 max-w-xs">
                <div className="p-2.5 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/30">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-serif text-sm font-bold text-luxury-cream">Purity & Trust</h5>
                  <p className="text-[11px] text-luxury-muted">Generations of honest hallmarked goldsmithing</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: About Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4 w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Our Showroom</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-cream tracking-tight mb-4 leading-tight">
              A Sacred Tradition of <span className="text-gold-gradient">Gold & Artistry</span>
            </h2>

            <p className="font-hindi text-gold-300 text-sm sm:text-base mb-6 tracking-wide">
              {storeConfig.proprietors[0].nameHindi} एवं {storeConfig.proprietors[1].nameHindi} ({storeConfig.proprietors[2].lineageHindi})
            </p>

            <div className="space-y-4 text-sm sm:text-base text-luxury-cream/80 font-light leading-relaxed">
              <p>
                Welcome to <strong className="text-gold-300 font-medium">Siddhi Vinayak Jewellers</strong> — a premier jewellery showroom rooted in the historic goldsmith traditions of Rajasthan. Located opposite Karni Vatika near Bus Stand, Koshithal (Bhilwara), our house has stood as a beacon of unwavering purity, bespoke artistry, and customer trust.
              </p>

              <p>
                Carrying forward the venerable heritage of <strong className="text-luxury-cream font-medium">Swargiya Kanhaiya Lal Ji Soni</strong>, founders <strong className="text-luxury-cream font-medium">Onkar Lal Soni</strong> and <strong className="text-luxury-cream font-medium">Mukesh Kumar Soni</strong> bring decades of traditional karigari (craftsmanship) combined with contemporary refinement.
              </p>

              <p>
                Every piece in our showroom — from royal Rajputi Aads and Kundan-Meena necklaces to bridal wedding trousseaus, brilliant cut diamonds, and pure 925 sterling silver articles — is curated with the utmost dedication to quality, accurate weighment, and transparent pricing.
              </p>
            </div>

            {/* Core Values Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gold-500/15">
              
              <div className="p-4 rounded-xl bg-luxury-surface/60 border border-gold-500/15">
                <span className="font-serif text-2xl font-bold text-gold-400 block mb-1">शुद्धता</span>
                <h4 className="text-xs uppercase tracking-wider text-luxury-cream font-semibold mb-1">
                  100% Purity
                </h4>
                <p className="text-[11px] text-luxury-muted">Strict adherence to BIS hallmark standards and weight integrity.</p>
              </div>

              <div className="p-4 rounded-xl bg-luxury-surface/60 border border-gold-500/15">
                <span className="font-serif text-2xl font-bold text-gold-400 block mb-1">कारीगरी</span>
                <h4 className="text-xs uppercase tracking-wider text-luxury-cream font-semibold mb-1">
                  Master Karigari
                </h4>
                <p className="text-[11px] text-luxury-muted">Intricate hand-carved Nakshi, Polki setting, and Meenakari enamel.</p>
              </div>

              <div className="p-4 rounded-xl bg-luxury-surface/60 border border-gold-500/15">
                <span className="font-serif text-2xl font-bold text-gold-400 block mb-1">विश्वास</span>
                <h4 className="text-xs uppercase tracking-wider text-luxury-cream font-semibold mb-1">
                  Customer Trust
                </h4>
                <p className="text-[11px] text-luxury-muted">Personal guidance and transparent dealings for every family milestone.</p>
              </div>

            </div>

            {/* Editable note for owner */}
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-xl bg-gold-500/5 border border-gold-500/20">
              <div className="text-xs text-luxury-muted">
                <span className="text-gold-400 font-semibold block mb-0.5">Showroom Visit & Appointments</span>
                <span>Open 7 days a week in Koshithal (Bhilwara). Custom bridal consultations available.</span>
              </div>
              <a
                href="#contact"
                className="btn-gold px-5 py-2 rounded-full text-xs uppercase font-bold tracking-wider shrink-0 flex items-center gap-1.5"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
