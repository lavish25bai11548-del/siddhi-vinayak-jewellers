import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Gem, PhoneCall, Award } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';

const heroSlides = [
  {
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1600&auto=format&fit=crop",
    caption: "Royal Rajputi & Bridal Kundan Heritage",
    purity: "22K BIS Hallmark Purity"
  },
  {
    image: "https://images.unsplash.com/photo-1611591475879-da00d367f3c0?q=80&w=1600&auto=format&fit=crop",
    caption: "Handcrafted Antique Gold Ornaments & Kadas",
    purity: "Generational Goldsmith Craftsmanship"
  },
  {
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1600&auto=format&fit=crop",
    caption: "Certified Diamond Solitaires & Precious Gems",
    purity: "VVS-VS Certified Diamonds"
  }
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-luxury-black pt-8 pb-16">
      
      {/* Background Ambience & Lighting */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === index ? 'opacity-35 scale-105' : 'opacity-0 scale-100'
            } transition-transform duration-[7000ms]`}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover object-center filter brightness-90"
            />
          </div>
        ))}

        {/* Multi-layered Vignette & Dark Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/70 to-luxury-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0,transparent_70%)]" />
      </div>

      {/* Decorative Gold Border Corner Accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-t-2 border-l-2 border-gold-500/30 hidden md:block pointer-events-none" />
      <div className="absolute top-8 right-8 w-16 h-16 border-t-2 border-r-2 border-gold-500/30 hidden md:block pointer-events-none" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-b-2 border-l-2 border-gold-500/30 hidden md:block pointer-events-none" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-b-2 border-r-2 border-gold-500/30 hidden md:block pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Heritage Crown & Emblem */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-gold-500/30 bg-luxury-card/90 backdrop-blur-md mb-6 shadow-gold-sm">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-gold-300">
            {storeConfig.brand.blessing} • Rajasthan's Trusted Goldsmiths
          </span>
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
        </div>

        {/* Brand Name Presentation */}
        <h2 className="text-sm sm:text-base font-semibold tracking-[0.35em] uppercase text-gold-400/90 mb-2 font-sans">
          {storeConfig.brand.name}
        </h2>
        <p className="text-xs sm:text-sm font-hindi text-gold-200/70 mb-4 tracking-widest">
          {storeConfig.brand.nameHindi}
        </p>

        {/* Primary Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-luxury-cream leading-[1.15] mb-6">
          <span className="block text-gold-gradient drop-shadow-sm">
            Timeless Elegance.
          </span>
          <span className="block font-normal italic font-serif text-2xl sm:text-4xl md:text-5xl text-luxury-cream/90 mt-1">
            A Legacy of Trust.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-luxury-cream/80 font-light leading-relaxed mb-10">
          Discover exquisite jewellery crafted to celebrate your most precious moments.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <a
            href="#collections"
            className="btn-gold w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.18em] flex items-center justify-center gap-2.5 shadow-gold-md hover:shadow-gold-lg group"
          >
            <span>Explore Collection</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="btn-gold-outline w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] flex items-center justify-center gap-2"
          >
            <span>Contact Us</span>
          </a>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2 mt-12 mb-8">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                activeSlide === idx ? 'w-8 bg-gold-400' : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 w-full pt-8 border-t border-gold-500/15">
          
          <div className="flex items-center justify-center sm:justify-start gap-2.5 p-3 rounded-lg bg-luxury-surface/50 border border-gold-500/10">
            <Award className="w-5 h-5 text-gold-400 shrink-0" />
            <div className="text-left">
              <p className="text-[11px] font-bold tracking-wider text-gold-300 uppercase">100% Certified</p>
              <p className="text-[10px] text-luxury-muted">Hallmark Gold Standard</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5 p-3 rounded-lg bg-luxury-surface/50 border border-gold-500/10">
            <Gem className="w-5 h-5 text-gold-400 shrink-0" />
            <div className="text-left">
              <p className="text-[11px] font-bold tracking-wider text-gold-300 uppercase">Royal Heritage</p>
              <p className="text-[10px] text-luxury-muted">Rajputi & Kundan Art</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5 p-3 rounded-lg bg-luxury-surface/50 border border-gold-500/10">
            <ShieldCheck className="w-5 h-5 text-gold-400 shrink-0" />
            <div className="text-left">
              <p className="text-[11px] font-bold tracking-wider text-gold-300 uppercase">Generational</p>
              <p className="text-[10px] text-luxury-muted">Trust & Honest Purity</p>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-start gap-2.5 p-3 rounded-lg bg-luxury-surface/50 border border-gold-500/10">
            <PhoneCall className="w-5 h-5 text-gold-400 shrink-0" />
            <div className="text-left">
              <p className="text-[11px] font-bold tracking-wider text-gold-300 uppercase">Custom Orders</p>
              <p className="text-[10px] text-luxury-muted">Bridal & Bespoke Fitting</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
