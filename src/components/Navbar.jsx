import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, Sparkles, MapPin, Clock, Calculator } from 'lucide-react';
import { storeConfig } from '../data/storeConfig';
import { generateWhatsAppLink } from '../utils/whatsapp';

export default function Navbar({ onOpenCalculator }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'Collections', href: '#collections' },
    { label: 'Featured Pieces', href: '#featured' },
    { label: 'About Heritage', href: '#about' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Showroom Card', href: '#visiting-card' },
    { label: 'Contact', href: '#contact' },
  ];

  const whatsappUrl = generateWhatsAppLink(
    storeConfig.contact.whatsappNumber,
    `Namaste ${storeConfig.brand.name}! 🙏 I am visiting your website and would like to enquire about your jewellery collections.`
  );

  return (
    <>
      {/* Top Bar for Luxury Hallmark Info & Quick Contacts */}
      <div className="bg-luxury-obsidian/95 border-b border-gold-500/15 text-xs text-luxury-cream/80 py-2 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="flex items-center gap-1.5 text-gold-400 font-medium tracking-wide">
              <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
              <span>{storeConfig.brand.blessing}</span>
            </span>
            <span className="hidden md:inline text-luxury-muted">|</span>
            <span className="hidden md:flex items-center gap-1.5 text-luxury-muted">
              <Clock className="w-3 h-3 text-gold-400" />
              <span>Showroom Open: 9:30 AM – 8:30 PM</span>
            </span>
            <span className="hidden lg:inline text-luxury-muted">|</span>
            <span className="hidden lg:flex items-center gap-1 text-luxury-muted">
              <MapPin className="w-3 h-3 text-gold-400" />
              <span>Koshithal, Bhilwara (Raj.)</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            {onOpenCalculator && (
              <button 
                onClick={onOpenCalculator}
                className="flex items-center gap-1.5 text-gold-400 hover:text-gold-300 transition-colors cursor-pointer font-medium"
                title="Calculate Gold & Silver Value"
              >
                <Calculator className="w-3.5 h-3.5" />
                <span className="underline underline-offset-2">Rate Calculator</span>
              </button>
            )}
            <span className="text-luxury-muted">|</span>
            <a 
              href={`tel:${storeConfig.contact.primaryPhoneRaw}`} 
              className="flex items-center gap-1.5 hover:text-gold-400 transition-colors font-medium"
            >
              <Phone className="w-3 h-3 text-gold-400" />
              <span>{storeConfig.contact.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-luxury-black/95 backdrop-blur-md border-b border-gold-500/20 shadow-gold-sm py-3' 
          : 'bg-luxury-black/80 backdrop-blur-sm border-b border-gold-500/10 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* Logo & Brand Name */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-gold-500/40 p-0.5 bg-luxury-surface flex items-center justify-center overflow-hidden shadow-gold-sm group-hover:border-gold-400 transition-all">
              <img 
                src={storeConfig.brand.logoPath} 
                alt="Siddhi Vinayak Jewellers Logo"
                className="w-full h-full object-cover object-center scale-110 group-hover:scale-120 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 items-center justify-center text-gold-400 font-serif font-bold text-lg">
                SV
              </div>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.18em] text-gold-gradient group-hover:opacity-95 transition-opacity">
                SIDDHI VINAYAK
              </span>
              <span className="text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.32em] text-gold-300/80 -mt-0.5 uppercase">
                JEWELLERS
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-[0.15em] font-medium text-luxury-cream/80 hover:text-gold-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-gold-400 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/40 bg-emerald-950/20 text-emerald-400 hover:bg-emerald-900/30 hover:border-emerald-400 text-xs font-semibold tracking-wider uppercase transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
              <span>WhatsApp</span>
            </a>

            <a
              href="#contact"
              className="btn-gold px-5 py-2 rounded-full text-xs uppercase font-bold tracking-wider shadow-gold-sm hover:shadow-gold-md"
            >
              Visit Showroom
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-full bg-emerald-950/40 border border-emerald-500/30 text-emerald-400"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gold-400 hover:bg-luxury-card border border-gold-500/20 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex flex-col justify-between">
          <div className="bg-luxury-surface/95 border-b border-gold-500/20 p-6 flex flex-col max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-center pb-4 border-b border-gold-500/15">
              <div className="flex items-center gap-3">
                <img 
                  src={storeConfig.brand.logoPath} 
                  alt="Logo"
                  className="w-10 h-10 object-contain rounded-full border border-gold-500/40"
                />
                <span className="font-serif text-lg font-bold text-gold-gradient tracking-wider">
                  SIDDHI VINAYAK
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gold-400 hover:bg-luxury-card rounded-md border border-gold-500/20"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col py-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base uppercase tracking-wider font-medium text-luxury-cream hover:text-gold-400 py-2 border-b border-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-gold-500/40 text-xs">›</span>
                </a>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-3">
              {onOpenCalculator && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenCalculator();
                  }}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-gold-500/30 bg-gold-500/10 text-gold-300 font-semibold text-xs tracking-wider uppercase"
                >
                  <Calculator className="w-4 h-4 text-gold-400" />
                  <span>Gold Rate Calculator</span>
                </button>
              )}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-semibold text-xs tracking-wider uppercase"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`tel:${storeConfig.contact.primaryPhoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl btn-gold text-xs tracking-wider uppercase font-bold"
              >
                <Phone className="w-4 h-4" />
                <span>Call Showroom</span>
              </a>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-center text-xs text-luxury-muted">
              <p className="text-gold-400/90 font-medium">{storeConfig.brand.nameHindi}</p>
              <p className="mt-1">In front of Karni Vatika, Bus Stand, Koshithal (Bhilwara)</p>
            </div>
          </div>

          <div 
            className="flex-1" 
            onClick={() => setMobileMenuOpen(false)} 
          />
        </div>
      )}
    </>
  );
}
