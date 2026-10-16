import React, { useState } from 'react';
import { X, Calculator, Sparkles, MessageCircle, Info } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';
import { generateWhatsAppLink, createGoldRateEnquiryMessage } from '../utils/whatsapp';

export default function GoldCalculatorModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  // Base approximate rates per gram
  const rateOptions = {
    '24K': { name: '24K Pure Gold (999)', ratePerGram: 7450 },
    '22K': { name: '22K Hallmark Gold (916)', ratePerGram: 6830 },
    '18K': { name: '18K Diamond Jewellery Gold (750)', ratePerGram: 5590 },
    'Silver': { name: '925 Sterling / Pure Silver', ratePerGram: 88.5 },
  };

  const [selectedMetal, setSelectedMetal] = useState('22K');
  const [weight, setWeight] = useState(10);
  const [makingChargePct, setMakingChargePct] = useState(12); // Approximate making charge 12%

  const currentRate = rateOptions[selectedMetal].ratePerGram;
  const rawMetalValue = weight * currentRate;
  const estimatedMaking = selectedMetal === 'Silver' ? weight * 20 : (rawMetalValue * makingChargePct) / 100;
  const totalEstimated = Math.round(rawMetalValue + estimatedMaking);

  const formattedTotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(totalEstimated);

  const formattedMetalValue = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Math.round(rawMetalValue));

  const formattedMaking = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(Math.round(estimatedMaking));

  const whatsappMessage = createGoldRateEnquiryMessage(
    weight,
    rateOptions[selectedMetal].name,
    formattedTotal
  );

  const whatsappUrl = generateWhatsAppLink(
    storeConfig.contact.whatsappNumber,
    whatsappMessage
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-luxury-surface border border-gold-500/40 rounded-2xl p-6 sm:p-8 shadow-gold-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between pb-4 border-b border-gold-500/20">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-gold-500/10 border border-gold-500/30 text-gold-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-gold-gradient">
                Jewellery Price Estimator
              </h3>
              <p className="text-[11px] text-luxury-muted">
                Transparent live estimates • Koshithal Showroom
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-luxury-muted hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Metal Selection Tabs */}
        <div className="mt-6">
          <label className="text-xs uppercase tracking-wider text-luxury-cream/80 font-medium block mb-2">
            Select Metal & Purity
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {Object.keys(rateOptions).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setSelectedMetal(key)}
                className={`py-2 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all border ${
                  selectedMetal === key
                    ? 'bg-gold-500/20 border-gold-400 text-gold-300 shadow-gold-sm'
                    : 'bg-luxury-black/50 border-white/10 text-luxury-muted hover:border-gold-500/30 hover:text-luxury-cream'
                }`}
              >
                {key}
              </button>
            ))}
          </div>
          <p className="text-[11px] text-gold-400/90 mt-1.5">
            {rateOptions[selectedMetal].name} — Approx. ₹{rateOptions[selectedMetal].ratePerGram.toLocaleString('en-IN')}/g
          </p>
        </div>

        {/* Weight Input & Slider */}
        <div className="mt-5">
          <div className="flex justify-between items-center mb-1">
            <label className="text-xs uppercase tracking-wider text-luxury-cream/80 font-medium">
              Ornament Weight (Grams)
            </label>
            <span className="text-sm font-bold text-gold-300 bg-luxury-black px-2.5 py-0.5 rounded border border-gold-500/20">
              {weight} g
            </span>
          </div>

          <input
            type="range"
            min="1"
            max="100"
            step="0.5"
            value={weight}
            onChange={(e) => setWeight(parseFloat(e.target.value) || 1)}
            className="w-full accent-gold-500 bg-luxury-black h-2 rounded-lg cursor-pointer my-2"
          />

          <div className="flex gap-2">
            {[2, 5, 8, 10, 16, 25, 50].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => setWeight(preset)}
                className={`text-[10px] px-2 py-1 rounded border transition-colors ${
                  weight === preset
                    ? 'border-gold-500 text-gold-300 bg-gold-500/10'
                    : 'border-white/10 text-luxury-muted hover:border-white/20'
                }`}
              >
                {preset}g
              </button>
            ))}
          </div>
        </div>

        {/* Calculation Summary Box */}
        <div className="mt-6 p-4 rounded-xl bg-luxury-black/80 border border-gold-500/25 space-y-2.5">
          <div className="flex justify-between text-xs text-luxury-muted">
            <span>Raw Metal Value ({weight}g):</span>
            <span className="text-luxury-cream font-medium">{formattedMetalValue}</span>
          </div>

          <div className="flex justify-between text-xs text-luxury-muted">
            <span>Estimated Karigari / Making:</span>
            <span className="text-luxury-cream font-medium">~{formattedMaking}</span>
          </div>

          <div className="pt-2 border-t border-gold-500/20 flex justify-between items-baseline">
            <span className="font-serif text-sm font-bold text-gold-300 uppercase">
              Indicative Total Estimate:
            </span>
            <span className="text-xl sm:text-2xl font-bold text-gold-gradient font-serif">
              {formattedTotal}
            </span>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-3 flex items-start gap-2 text-[10px] text-luxury-muted leading-tight">
          <Info className="w-3.5 h-3.5 text-gold-500 shrink-0 mt-0.5" />
          <span>
            Note: Exact price depends on the final hallmarked weight, intricate artisan design, and showroom market rate at the time of purchase.
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Enquire This on WhatsApp</span>
          </a>

          <button
            onClick={onClose}
            className="px-5 py-3 rounded-xl border border-white/10 hover:bg-white/5 text-luxury-cream text-xs uppercase tracking-wider font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
