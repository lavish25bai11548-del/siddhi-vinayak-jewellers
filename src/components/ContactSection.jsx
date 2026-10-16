import React, { useState } from 'react';
import { 
  MapPin, Phone, MessageCircle, Clock, Send, Sparkles, 
  CheckCircle2, AlertCircle, ExternalLink, Mail, User, MessageSquare
} from 'lucide-react';
import { storeConfig } from '../data/storeConfig';
import { generateWhatsAppLink, createGeneralEnquiryMessage } from '../utils/whatsapp';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    interest: 'Gold Jewellery',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [submittedMessage, setSubmittedMessage] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your full name.';
    }
    
    // Clean phone number validation
    const cleanDigits = formData.phone.replace(/[^0-9]/g, '');
    if (!cleanDigits || cleanDigits.length < 10) {
      errs.phone = 'Please enter a valid 10-digit mobile number.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief message or question.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Build the pre-filled WhatsApp message
    const formattedMsg = createGeneralEnquiryMessage({
      name: formData.name,
      phone: formData.phone,
      interest: formData.interest,
      message: formData.message,
    });

    const waLink = generateWhatsAppLink(storeConfig.contact.whatsappNumber, formattedMsg);

    setSubmittedMessage({
      link: waLink,
      name: formData.name,
      phone: formData.phone,
      interest: formData.interest,
      message: formData.message,
    });
  };

  const handleResetForm = () => {
    setFormData({
      name: '',
      phone: '',
      interest: 'Gold Jewellery',
      message: ''
    });
    setErrors({});
    setSubmittedMessage(null);
  };

  const directWhatsAppUrl = generateWhatsAppLink(
    storeConfig.contact.whatsappNumber,
    "Namaste Siddhi Vinayak Jewellers! 🙏 I would like to enquire about visiting your showroom in Koshithal."
  );

  return (
    <section id="contact" className="py-24 bg-luxury-black relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Visit</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-luxury-cream tracking-tight mb-4">
            Visit Our <span className="text-gold-gradient">Showroom</span>
          </h2>

          <p className="text-base text-luxury-muted font-light leading-relaxed">
            Experience the lustre and warmth in person. Our doors are open 7 days a week to assist you with your treasured selections.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Business Info & Showroom Details */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Showroom Identity Card */}
            <div className="p-8 rounded-2xl bg-luxury-surface border border-gold-500/30 shadow-gold-sm">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-400 block mb-1">
                {storeConfig.brand.blessing}
              </span>
              <h3 className="font-serif text-2xl font-bold text-luxury-cream mb-1">
                {storeConfig.brand.name}
              </h3>
              <p className="font-hindi text-gold-300 text-sm mb-6">
                {storeConfig.brand.nameHindi}
              </p>

              <div className="space-y-5 text-sm">
                
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 border border-gold-500/25 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-luxury-muted mb-0.5">
                      Showroom Address:
                    </h4>
                    <p className="text-luxury-cream leading-relaxed font-normal">
                      {storeConfig.contact.address.landmark}
                    </p>
                    <p className="text-gold-300 text-xs font-hindi mt-0.5">
                      {storeConfig.contact.address.landmarkHindi}
                    </p>
                    <p className="text-luxury-cream/80 text-xs mt-0.5">
                      {storeConfig.contact.address.town}, {storeConfig.contact.address.district}, {storeConfig.contact.address.state}
                    </p>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 border border-gold-500/25 shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-luxury-muted mb-0.5">
                      Showroom Call Lines:
                    </h4>
                    <div className="flex flex-col gap-1">
                      <a 
                        href={`tel:${storeConfig.contact.primaryPhoneRaw}`}
                        className="text-luxury-cream font-medium hover:text-gold-400 transition-colors"
                      >
                        {storeConfig.contact.primaryPhone} (Primary)
                      </a>
                      <a 
                        href={`tel:${storeConfig.contact.secondaryPhoneRaw}`}
                        className="text-luxury-cream font-medium hover:text-gold-400 transition-colors"
                      >
                        {storeConfig.contact.secondaryPhone} (Alternate)
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 shrink-0 mt-0.5">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-luxury-muted mb-0.5">
                      Instant WhatsApp Enquiry:
                    </h4>
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1.5"
                    >
                      <span>Chat on WhatsApp (+91 98280 77806)</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2 rounded-lg bg-gold-500/10 text-gold-400 border border-gold-500/25 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-luxury-muted mb-0.5">
                      Showroom Hours:
                    </h4>
                    <p className="text-luxury-cream">{storeConfig.contact.openingHours.weekdays}</p>
                    <p className="text-luxury-muted text-xs mt-0.5">{storeConfig.contact.openingHours.sunday}</p>
                    <p className="text-[11px] text-gold-400/90 mt-1 italic">{storeConfig.contact.openingHours.note}</p>
                  </div>
                </div>

              </div>

              {/* Direct Quick WhatsApp Button */}
              <div className="mt-8 pt-6 border-t border-gold-500/15">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Start WhatsApp Conversation</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Form & Google Map Embed */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Contact Form Card */}
            <div className="p-8 rounded-2xl bg-luxury-surface border border-gold-500/30 shadow-gold-sm">
              <h3 className="font-serif text-xl font-bold text-luxury-cream mb-2">
                Send an Enquiry
              </h3>
              <p className="text-xs text-luxury-muted mb-6 leading-relaxed">
                Fill in your details below. You can transmit your enquiry directly via WhatsApp to receive instant showroom catalog pictures and weight details.
              </p>

              {submittedMessage ? (
                <div className="p-6 rounded-2xl bg-luxury-black/90 border border-emerald-500/40 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>

                  <div>
                    <h4 className="font-serif text-lg font-bold text-luxury-cream">
                      Enquiry Ready, {submittedMessage.name}!
                    </h4>
                    <p className="text-xs text-luxury-muted mt-1 max-w-md mx-auto">
                      Click below to send this directly to the Siddhi Vinayak Jewellers showroom on WhatsApp.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-luxury-surface/80 border border-white/10 text-left text-xs text-luxury-cream/80 space-y-1">
                    <p><strong className="text-gold-300">Category:</strong> {submittedMessage.interest}</p>
                    <p><strong className="text-gold-300">Phone:</strong> {submittedMessage.phone}</p>
                    <p><strong className="text-gold-300">Message:</strong> {submittedMessage.message}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <a
                      href={submittedMessage.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send to Showroom via WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="py-3 px-5 rounded-xl border border-white/20 hover:bg-white/5 text-luxury-cream text-xs uppercase tracking-wider font-medium"
                    >
                      New Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name Input */}
                  <div>
                    <label className="text-xs uppercase tracking-wider text-luxury-cream/80 font-medium block mb-1.5">
                      Your Full Name <span className="text-gold-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        className={`w-full bg-luxury-black/70 border rounded-xl px-4 py-3 text-xs sm:text-sm text-luxury-cream placeholder:text-luxury-muted focus:outline-none transition-colors ${
                          errors.name ? 'border-red-500/70 focus:border-red-500' : 'border-gold-500/25 focus:border-gold-400'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Phone Number Input */}
                  <div>
                    <label className="text-xs uppercase tracking-wider text-luxury-cream/80 font-medium block mb-1.5">
                      WhatsApp / Mobile Number <span className="text-gold-400">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9828077806"
                        className={`w-full bg-luxury-black/70 border rounded-xl px-4 py-3 text-xs sm:text-sm text-luxury-cream placeholder:text-luxury-muted focus:outline-none transition-colors ${
                          errors.phone ? 'border-red-500/70 focus:border-red-500' : 'border-gold-500/25 focus:border-gold-400'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.phone}</span>
                      </p>
                    )}
                  </div>

                  {/* Jewellery Category of Interest */}
                  <div>
                    <label className="text-xs uppercase tracking-wider text-luxury-cream/80 font-medium block mb-1.5">
                      Jewellery Collection of Interest
                    </label>
                    <select
                      value={formData.interest}
                      onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                      className="w-full bg-luxury-black/70 border border-gold-500/25 rounded-xl px-4 py-3 text-xs sm:text-sm text-luxury-cream focus:outline-none focus:border-gold-400 cursor-pointer"
                    >
                      <option value="Gold Jewellery">Gold Jewellery (22K Hallmarked)</option>
                      <option value="Bridal Jewellery">Bridal & Wedding Sets</option>
                      <option value="Traditional Rajasthani">Traditional Rajasthani (Rajputi Aad / Kundan)</option>
                      <option value="Diamond Jewellery">Diamond Jewellery & Solitaires</option>
                      <option value="Silver Articles">925 Fine Silver Ornaments & Payal</option>
                      <option value="Custom Bespoke Order">Custom Design / Heirloom Redesign</option>
                      <option value="Other Enquiry">General Showroom Query</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-xs uppercase tracking-wider text-luxury-cream/80 font-medium block mb-1.5">
                      Message / Design Enquiry <span className="text-gold-400">*</span>
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you are looking for (e.g. approximate gold grams, bridal set requirements, or festival shopping)..."
                      className={`w-full bg-luxury-black/70 border rounded-xl px-4 py-3 text-xs sm:text-sm text-luxury-cream placeholder:text-luxury-muted focus:outline-none transition-colors ${
                        errors.message ? 'border-red-500/70 focus:border-red-500' : 'border-gold-500/25 focus:border-gold-400'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-gold w-full py-3.5 px-6 rounded-xl text-xs uppercase font-bold tracking-[0.15em] flex items-center justify-center gap-2 shadow-gold-sm hover:shadow-gold-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>Generate WhatsApp Enquiry</span>
                  </button>

                </form>
              )}

            </div>

            {/* Google Maps Embed for Koshithal, Bhilwara */}
            <div className="rounded-2xl overflow-hidden bg-luxury-surface border border-gold-500/25 shadow-gold-sm">
              <div className="p-4 bg-luxury-black/60 border-b border-gold-500/15 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-400" />
                  <span className="font-serif text-xs font-bold uppercase tracking-wider text-gold-300">
                    Showroom Location Map (Koshithal, Bhilwara)
                  </span>
                </div>

                <a
                  href={storeConfig.contact.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-gold-400 hover:text-gold-200 font-medium flex items-center gap-1"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              <div className="h-64 w-full relative bg-luxury-black">
                <iframe
                  title="Siddhi Vinayak Jewellers Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14454.761858546553!2d74.2255!3d25.2975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968b5a000000001%3A0x1!2sKoshithal%2C%20Rajasthan%20311805!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="w-full h-full border-0 filter invert-[90%] hue-rotate-180 contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="p-3 bg-luxury-black/90 text-center text-[11px] text-luxury-muted border-t border-white/5">
                📍 In front of Karni Vatika, near Bus Stand, Koshithal, Bhilwara, Rajasthan
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
