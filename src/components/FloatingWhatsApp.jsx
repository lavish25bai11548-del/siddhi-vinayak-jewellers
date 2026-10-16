import React, { useState } from 'react';
import { MessageCircle, X, Sparkles } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = generateWhatsAppLink(
    storeConfig.contact.whatsappNumber,
    `Namaste ${storeConfig.brand.name}! 🙏 I am browsing your showroom website and would like to ask about jewellery designs and gold rates.`
  );

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      
      {/* Friendly Luxury Tooltip */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-3 p-3 rounded-2xl bg-luxury-surface/95 border border-gold-500/40 shadow-gold-md backdrop-blur-md max-w-xs animate-bounce-subtle">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
            <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
          </div>
          <div className="text-left">
            <p className="text-xs font-semibold text-luxury-cream">Chat with Showroom</p>
            <p className="text-[10px] text-luxury-muted">Enquire gold rates & designs instantly</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-luxury-muted hover:text-white p-1"
            aria-label="Dismiss chat tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Circular WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative group p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/40 flex items-center justify-center transition-all duration-300 hover:scale-110 border border-emerald-400/30 focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping opacity-75 pointer-events-none" />
        
        <MessageCircle className="w-7 h-7 fill-white/20" />
      </a>

    </div>
  );
}
