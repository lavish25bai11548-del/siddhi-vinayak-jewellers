import React from 'react';
import { Sparkles, Phone, MapPin, Download, Share2, CheckCircle2 } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function VisitingCardShowcase() {
  const whatsappUrl = generateWhatsAppLink(
    storeConfig.contact.whatsappNumber,
    "Namaste Siddhi Vinayak Jewellers! 🙏 I saw your showroom visiting card on your website and would like to connect."
  );

  return (
    <section id="visiting-card" className="py-20 bg-luxury-black relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Showroom Identity & Heritage</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-cream tracking-tight mb-4">
            Official Showroom <span className="text-gold-gradient">Visiting Card</span>
          </h2>

          <p className="text-base text-luxury-muted font-light leading-relaxed">
            Directly from our showroom in Koshithal, Bhilwara. Carrying forward the sacred goldsmith legacy of Swargiya Kanhaiya Lal Ji Soni.
          </p>
        </div>

        {/* Card Presentation Container */}
        <div className="max-w-4xl mx-auto">
          
          <div className="relative rounded-3xl p-2 sm:p-4 bg-gradient-to-b from-gold-500/30 via-gold-500/10 to-gold-500/20 border border-gold-500/40 shadow-gold-lg">
            
            <div className="rounded-2xl overflow-hidden bg-luxury-surface relative shadow-2xl">
              
              {/* Actual Visiting Card Image */}
              <div className="relative group">
                <img
                  src={storeConfig.brand.visitingCardPath}
                  alt="Siddhi Vinayak Jewellers Visiting Card"
                  className="w-full h-auto object-contain block select-none"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <span className="text-xs text-gold-300 font-semibold tracking-wider uppercase bg-luxury-black/90 px-4 py-2 rounded-full border border-gold-500/40 backdrop-blur-md">
                    Original Showroom Card • Koshithal (Bhilwara)
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Key Details Extracted Below the Card */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            
            <div className="p-5 rounded-2xl bg-luxury-surface border border-gold-500/20 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-gold-400 font-bold uppercase tracking-wider block mb-1">
                  Proprietors & Lineage
                </span>
                <h4 className="font-serif text-base font-bold text-luxury-cream">
                  {storeConfig.proprietors[0].nameHindi} • {storeConfig.proprietors[1].nameHindi}
                </h4>
                <p className="text-xs text-luxury-muted mt-1 font-hindi">
                  {storeConfig.proprietors[2].lineageHindi}
                </p>
                <p className="text-[11px] text-luxury-muted/70 mt-1">
                  Onkar Lal Soni, Mukesh Kumar Soni (S/O Kanhaiya Lal Ji Soni)
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-luxury-surface border border-gold-500/20 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-gold-400 font-bold uppercase tracking-wider block mb-1">
                  Showroom Location
                </span>
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-semibold text-luxury-cream">
                      {storeConfig.contact.address.landmarkHindi}
                    </h4>
                    <p className="text-xs text-gold-300 font-hindi mt-0.5">
                      {storeConfig.contact.address.townHindi} ({storeConfig.contact.address.districtHindi}, राजस्थान)
                    </p>
                    <p className="text-[11px] text-luxury-muted mt-1">
                      Koshithal, Bhilwara, Rajasthan
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-luxury-surface border border-gold-500/20 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-gold-400 font-bold uppercase tracking-wider block mb-1">
                  Contact & WhatsApp Numbers
                </span>
                <div className="space-y-1.5 mt-1">
                  <a 
                    href={`tel:${storeConfig.contact.primaryPhoneRaw}`}
                    className="flex items-center gap-2 text-xs font-semibold text-luxury-cream hover:text-gold-300 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-400" />
                    <span>{storeConfig.contact.primaryPhone}</span>
                  </a>
                  <a 
                    href={`tel:${storeConfig.contact.secondaryPhoneRaw}`}
                    className="flex items-center gap-2 text-xs font-semibold text-luxury-cream hover:text-gold-300 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-gold-400" />
                    <span>{storeConfig.contact.secondaryPhone}</span>
                  </a>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-white/5 flex gap-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-1.5 px-3 rounded-lg bg-emerald-600/80 hover:bg-emerald-600 text-white text-[11px] font-semibold text-center uppercase tracking-wider transition-colors"
                >
                  Save & Message
                </a>
                <a
                  href={storeConfig.brand.visitingCardPath}
                  download="Siddhi-Vinayak-Jewellers-Card.png"
                  className="p-1.5 rounded-lg border border-gold-500/30 hover:bg-gold-500/10 text-gold-400 transition-colors flex items-center justify-center"
                  title="Download Showroom Card"
                >
                  <Download className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
