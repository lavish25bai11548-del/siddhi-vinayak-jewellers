import React from 'react';
import { X, MessageCircle, Phone, Sparkles, CheckCircle2, ShieldCheck, Share2 } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';
import { generateWhatsAppLink, createProductEnquiryMessage } from '../utils/whatsapp';

export default function ProductQuickViewModal({ product, onClose }) {
  if (!product) return null;

  const whatsappMsg = createProductEnquiryMessage(product, storeConfig.brand.name);
  const whatsappUrl = generateWhatsAppLink(storeConfig.contact.whatsappNumber, whatsappMsg);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: `Look at this beautiful piece from Siddhi Vinayak Jewellers: ${product.name}`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-3xl bg-luxury-surface border border-gold-500/40 rounded-3xl overflow-hidden shadow-gold-lg flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-luxury-black/70 hover:bg-luxury-black text-luxury-muted hover:text-white border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left: Product Image */}
        <div className="md:w-1/2 relative bg-luxury-black min-h-[280px] md:min-h-full">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center filter brightness-95"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-surface via-transparent to-transparent md:hidden" />
          <div className="absolute top-4 left-4 z-10">
            <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-luxury-black/90 text-gold-300 border border-gold-500/30">
              {product.category}
            </span>
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{product.purity}</span>
            </div>

            <h3 className="font-serif text-2xl font-bold text-luxury-cream leading-snug mb-3">
              {product.name}
            </h3>

            <div className="inline-block px-3 py-1 rounded-lg bg-gold-500/10 border border-gold-500/25 mb-4">
              <span className="text-xs text-luxury-muted uppercase mr-2">Showroom Price:</span>
              <span className="text-sm font-bold text-gold-gradient font-serif">
                {product.priceDisplay}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-luxury-cream/80 font-light leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Product Highlights */}
            {product.highlights && (
              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-luxury-muted">
                  Design Specifications:
                </h4>
                {product.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-luxury-cream/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Purity Guarantee note */}
            <div className="p-3 rounded-xl bg-luxury-black/60 border border-gold-500/15 flex items-center gap-2.5 mb-6">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <p className="text-[11px] text-luxury-muted">
                Every piece is 100% hallmarked and certified with accurate weight slips.
              </p>
            </div>
          </div>

          {/* Action Footer */}
          <div className="space-y-3 pt-4 border-t border-gold-500/15">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Enquire This Piece on WhatsApp</span>
            </a>

            <div className="flex gap-2">
              <a
                href={`tel:${storeConfig.contact.primaryPhoneRaw}`}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gold-500/30 hover:bg-gold-500/10 text-gold-300 text-xs uppercase font-semibold tracking-wider transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Showroom</span>
              </a>

              <button
                onClick={handleShare}
                className="px-4 py-2.5 rounded-xl border border-white/10 hover:bg-white/5 text-luxury-muted hover:text-white transition-colors"
                title="Share piece"
              >
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
