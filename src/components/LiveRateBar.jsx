import React from 'react';
import { TrendingUp, Calculator, Clock, MessageSquareQuote } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function LiveRateBar({ onOpenCalculator }) {
  const whatsappRateUrl = generateWhatsAppLink(
    storeConfig.contact.whatsappNumber,
    "Namaste Siddhi Vinayak Jewellers! 🙏 Please share today's live showroom Gold and Silver purchase/selling rates."
  );

  return (
    <div className="bg-gradient-to-r from-luxury-card via-luxury-surface to-luxury-card border-y border-gold-500/20 py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Title & Info */}
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400">
            <TrendingUp className="w-5 h-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-sm font-bold tracking-wide text-gold-300 uppercase">
                Daily Bullion & Showroom Rates
              </span>
              <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30 font-semibold">
                Indicative
              </span>
            </div>
            <p className="text-[11px] text-luxury-muted flex items-center gap-1 mt-0.5">
              <Clock className="w-3 h-3 text-gold-400" />
              <span>{storeConfig.todayRates.lastUpdated}</span>
            </p>
          </div>
        </div>

        {/* Rates Display Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
          
          <div className="bg-luxury-black/60 px-3.5 py-2 rounded-lg border border-gold-500/15 text-center">
            <span className="text-[10px] uppercase tracking-wider text-luxury-muted block">Gold 24K (999)</span>
            <span className="text-xs sm:text-sm font-bold text-gold-200">{storeConfig.todayRates.gold24k}</span>
          </div>

          <div className="bg-luxury-black/60 px-3.5 py-2 rounded-lg border border-gold-500/25 text-center shadow-gold-sm">
            <span className="text-[10px] uppercase tracking-wider text-gold-400 block font-semibold">Gold 22K (916)</span>
            <span className="text-xs sm:text-sm font-bold text-gold-gradient">{storeConfig.todayRates.gold22k}</span>
          </div>

          <div className="bg-luxury-black/60 px-3.5 py-2 rounded-lg border border-gold-500/15 text-center">
            <span className="text-[10px] uppercase tracking-wider text-luxury-muted block">Gold 18K (750)</span>
            <span className="text-xs sm:text-sm font-bold text-gold-200">{storeConfig.todayRates.gold18k}</span>
          </div>

          <div className="bg-luxury-black/60 px-3.5 py-2 rounded-lg border border-gold-500/15 text-center">
            <span className="text-[10px] uppercase tracking-wider text-luxury-muted block">Silver Fine (999)</span>
            <span className="text-xs sm:text-sm font-bold text-silver-gradient">{storeConfig.todayRates.silverFine}</span>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end">
          <button
            onClick={onOpenCalculator}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg border border-gold-500/40 bg-gold-500/10 hover:bg-gold-500/20 text-gold-300 text-xs font-semibold tracking-wide transition-colors cursor-pointer"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Rate Calculator</span>
          </button>

          <a
            href={whatsappRateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-luxury-card hover:bg-luxury-cardHover border border-white/10 text-luxury-cream text-xs font-medium tracking-wide transition-colors"
          >
            <MessageSquareQuote className="w-3.5 h-3.5 text-gold-400" />
            <span>Confirm Today's Rate</span>
          </a>
        </div>

      </div>
    </div>
  );
}
