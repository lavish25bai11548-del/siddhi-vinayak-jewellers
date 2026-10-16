import React from 'react';
import { 
  Sparkles, Phone, MapPin, Mail, ArrowUp, ShieldCheck, Heart 
} from 'lucide-react';
import { storeConfig } from '../data/storeConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappGeneralUrl = generateWhatsAppLink(
    storeConfig.contact.whatsappNumber,
    "Namaste Siddhi Vinayak Jewellers! 🙏 I am browsing your showroom website."
  );

  return (
    <footer className="bg-luxury-black border-t border-gold-500/20 text-luxury-cream/80 relative overflow-hidden">
      
      {/* Top Gold Accent Border */}
      <div className="h-1 w-full bg-gold-gradient" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Presentation (Col 1-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src={storeConfig.brand.logoPath} 
                alt="Siddhi Vinayak Jewellers Logo"
                className="w-12 h-12 object-contain rounded-full border border-gold-500/40 p-0.5 bg-luxury-surface"
              />
              <div>
                <span className="font-serif text-lg font-bold tracking-widest text-gold-gradient block">
                  SIDDHI VINAYAK
                </span>
                <span className="text-[10px] tracking-[0.3em] text-gold-300 font-semibold uppercase block">
                  JEWELLERS
                </span>
              </div>
            </div>

            <p className="text-xs text-gold-300 font-hindi">
              {storeConfig.brand.blessing} • {storeConfig.brand.nameHindi}
            </p>

            <p className="text-xs text-luxury-muted leading-relaxed font-light">
              A prestigious jewellery showroom carrying forward the royal goldsmith heritage of Swargiya Kanhaiya Lal Ji Soni. Dedicated to authentic craftsmanship, hallmarked purity, and generational trust.
            </p>

            <div className="pt-2 text-[11px] text-luxury-muted">
              <p className="text-gold-400 font-medium">{storeConfig.proprietors[0].name} & {storeConfig.proprietors[1].name}</p>
              <p className="text-luxury-muted/80">{storeConfig.proprietors[2].lineage}</p>
            </div>

            {/* Social Media Links (Configurable Placeholders) */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={storeConfig.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-luxury-surface border border-gold-500/20 hover:border-gold-400 text-luxury-muted hover:text-gold-400 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a
                href={storeConfig.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-luxury-surface border border-gold-500/20 hover:border-gold-400 text-luxury-muted hover:text-gold-400 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.595 0 9 1.583 9 4.615V8z"/>
                </svg>
              </a>

              <a
                href={storeConfig.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-luxury-surface border border-gold-500/20 hover:border-gold-400 text-luxury-muted hover:text-gold-400 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Navigation (Col 5-7) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-300">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#" className="hover:text-gold-400 transition-colors">Home Showcase</a>
              </li>
              <li>
                <a href="#collections" className="hover:text-gold-400 transition-colors">Jewellery Collections</a>
              </li>
              <li>
                <a href="#featured" className="hover:text-gold-400 transition-colors">Featured Masterpieces</a>
              </li>
              <li>
                <a href="#about" className="hover:text-gold-400 transition-colors">About Our Heritage</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-gold-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#visiting-card" className="hover:text-gold-400 transition-colors">Original Visiting Card</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold-400 transition-colors">Showroom Location & Contact</a>
              </li>
            </ul>
          </div>

          {/* Jewellery Categories (Col 8-9) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-300">
              Collections
            </h4>
            <ul className="space-y-2.5 text-xs text-luxury-muted">
              <li>Gold Jewellery (22K)</li>
              <li>Bridal Trousseau Sets</li>
              <li>Rajputi Royal Aad</li>
              <li>Diamond Solitaires</li>
              <li>925 Sterling Silver</li>
              <li>Kadas & Bangles</li>
              <li>Gold Chains & Rings</li>
            </ul>
          </div>

          {/* Contact Information (Col 10-12) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-gold-300">
              Showroom Contact
            </h4>
            
            <div className="space-y-3 text-xs leading-relaxed text-luxury-cream/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <span>
                  {storeConfig.contact.address.fullAddress}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${storeConfig.contact.primaryPhoneRaw}`} className="hover:text-gold-300">
                    {storeConfig.contact.primaryPhone}
                  </a>
                  <a href={`tel:${storeConfig.contact.secondaryPhoneRaw}`} className="hover:text-gold-300">
                    {storeConfig.contact.secondaryPhone}
                  </a>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-luxury-muted">
                <p className="text-gold-400/90 font-medium">Visiting Hours:</p>
                <p>{storeConfig.contact.openingHours.weekdays}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip: Copyright & Back to Top */}
        <div className="mt-14 pt-8 border-t border-gold-500/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-luxury-muted">
          <p>
            © {new Date().getFullYear()} <strong className="text-luxury-cream">Siddhi Vinayak Jewellers</strong>. All rights reserved. Koshithal, Bhilwara.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[11px]">
              Crafted with devotion & timeless elegance
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-luxury-surface border border-gold-500/30 text-gold-400 hover:text-white hover:border-gold-400 transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

    </footer>
  );
}
